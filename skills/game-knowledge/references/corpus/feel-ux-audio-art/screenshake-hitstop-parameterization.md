# Screenshake, Hitstop, and Particle Feedback Grammar

This file covers the three most common "impact-selling" techniques in action games, each with concrete parameterization: trauma-based screenshake (Eiserloh's GDC math talk), hitstop/hitlag (fighting-game frame data theory), and particle feedback grammar (the "juice" literature originating with Jonasson & Purho's "Juice it or lose it").

## Trauma-based screenshake

**Primary source**: Squirrel Eiserloh, "Math for Game Programmers: Juicing Your Cameras With Math," GDC 2016. [Slides PDF](http://www.mathforgameprogrammers.com/gdc2016/GDC2016_Eiserloh_Squirrel_JuicingYourCameras.pdf); [talk transcript](https://archive.org/stream/GDC2016Eiserloh/GDC2016-Eiserloh_djvu.txt); [video](https://www.youtube.com/watch?v=tu-Qe66AvtY).

### The core system

A single float, **trauma**, tracked in the range `[0, 1]` per camera. Impact events (getting hit, an explosion, a heavy landing) *add* to trauma rather than directly setting shake amount; trauma then **decays linearly over time** regardless of what added it. This decouples "how much shake an event deserves" from "how the shake plays out," and lets multiple simultaneous events stack additively into one coherent camera response instead of fighting each other.

```
trauma = min(1.0, trauma + traumaAdd)   // e.g. traumaAdd = 0.2 (small hit) to 0.5+ (big hit)
trauma = max(0.0, trauma - decayPerSecond * deltaTime)   // linear decay every frame
```

### Nonlinear shake response (the key insight)

Shake amount is **not** trauma directly — it's trauma raised to a power (2 or 3):

```
shake = trauma^2   // or trauma^3 for an even more aggressive curve
```

Eiserloh's own numbers make the nonlinearity concrete: **trauma of 0.30 → about 3% shake; trauma of 0.60 → about 22% shake; trauma of 0.90 → about 73% shake.** The design intent: small/frequent impacts stay nearly invisible (protects readability during normal combat), while trauma only needs to climb a bit further to produce a dramatically bigger shake for major events — the curve makes "big hits feel exponentially bigger" without designers having to hand-tune every event's trauma-add value individually.

### Offset and rotation computation

Once you have a `shake` value in `[0,1]`, apply it to independent random-looking channels, each with its own maximum:

**2D:**
```
angle   = maxAngle  * shake * noise(seed, time, ...)
offsetX = maxOffset * shake * noise(seed, time, ...)
offsetY = maxOffset * shake * noise(seed, time, ...)
camera.angle  = baseAngle  + angle
camera.center = baseCenter + Vec2(offsetX, offsetY)
```

**3D** uses the same structure across yaw/pitch/roll instead of angle/offsetX/offsetY.

**Critical implementation detail — use Perlin/simplex noise, not raw random numbers.** Eiserloh explicitly recommends noise over `GetRandomFloat()` calls because noise gives: (1) smooth, continuous motion frame-to-frame instead of jittery teleporting, (2) natural compatibility with pause/slow-motion (the noise function is sampled by time, so slowing time automatically slows the shake), (3) tunable frequency (how "fast" the shake oscillates, independent of amplitude), and (4) reproducibility for replays/determinism, since the same seed and time produce the same shake.

### 2D vs 3D: rotational vs translational

- **In 2D**, use *both* translational (offsetX, offsetY) and rotational (angle) shake — there are two translation axes and one rotation axis to drive.
- **In 3D**, translational camera shake is often actively undesirable because it can clip the camera through nearby geometry; **rotational shake alone (yaw/pitch/roll) is the recommended default for 3D**, since rotating in place can't clip through walls the way translating the camera position can.

### Related camera-juicing technique: asymptotic-average following

Not shake itself, but the same talk's other major technique, useful because shake and follow-cam interact: smooth camera-follow via exponential/asymptotic averaging rather than direct snapping or naive lerp-to-target:

```
x += (target - x) * followWeight     // followWeight ~0.1 is "reasonably fast"
```

Cited weight range: **~0.01 (slow drift) to ~0.5 (very fast tracking)**, with ~0.1 as a reasonable default; the same weight should be scaled by `timeScale` if the game supports slow-motion, so camera-follow speed doesn't decouple from game speed. Eiserloh also describes **asymmetric weights** (different follow speed vertically vs. horizontally — e.g., a platformer camera that follows falls slower than rises) and a **points-of-focus vs. points-of-interest** distinction, where the player character must always stay framed but secondary elements (enemies, loot) only pull the camera via soft, proximity-weighted "feathering" between inner/outer distance thresholds.

## Hitstop / hitlag / hit pause

**Mechanism**: at the frame of impact, gameplay time briefly freezes (both attacker and target's animation/physics halt) for a small number of frames before resuming — distinct from screenshake, which moves the camera rather than freezing time.

**Why it works**: three separate design payoffs stack in the same technique —
1. **Perceptual confirmation** — freezing at the exact contact frame gives the eye a few extra frames to register that a collision actually happened, which a single-frame collision event (running at 60fps, a real hit is often visible for under 17ms) can't reliably provide on its own.
2. **Weight/power signaling** — heavier attacks get longer hitstop, so hitstop duration becomes a legible proxy for attack weight independent of animation or damage-number size.
3. **Mechanical utility, not just feel** — hitstop extends the window in which the player can act on the confirmed hit. The canonical historical example: Street Fighter II's "2-in-1" special-move cancel exists *because* hitstop froze both characters' state for roughly **10 frames** on hit, giving players a real window to buffer a cancel input during that freeze — a system mechanic built directly on top of a feel technique.

**Typical parameter pattern**: hitstop duration scales with attack weight/type rather than being a single global value — light attacks get few or zero frames, heavy/punish-counter attacks get extended hitstop (sometimes with additional visual effects layered on for emphasis). Exact frame counts are game-specific tuning data (frame data), not a portable constant — a value tuned for one game's frame-timing and combo system won't transfer directly to another.

**Interaction with hitstun and frame data**: hitstop is commonly confused with hitstun (the recovery-lock time *after* a hit lands, during which the target can't act) — they're separate systems that both extend around an impact but serve different purposes: hitstop is symmetric (freezes both parties, sells impact, extends cancel windows) while hitstun is asymmetric (only locks the party that got hit, and is the actual combo-balancing lever).

Source: [Sonic Hurricane — Impact Freeze](https://sonichurricane.com/?p=1043); [CritPoints — Hitstop/Hitfreeze/Hitlag/Hitpause/Hitshit](https://critpoints.net/2017/05/17/hitstophitfreezehitlaghitpausehitshit/); [SmashWiki — Hitlag](https://www.ssbwiki.com/Hitlag).

## Particle feedback grammar

**Origin point**: Martin Jonasson and Petri Purho's 2012 GDC talk "Juice it or Lose It," which demonstrated turning a flat Breakout clone into something that "feels" alive purely by layering flash, shake, floating text, sound, and particles on top of otherwise-unchanged mechanics — establishing "juice" as a named, teachable design layer rather than an incidental art pass.

**Grammar, not decoration**: the useful framing for a skill/agent is that particle feedback functions as a *readable signal system*, where consistent visual grammar lets players parse game state at a glance without reading numbers:

- **Directional/originating particles** (sparks at point of impact, dust at point of landing) confirm *where* an event occurred and its rough intensity via particle count/spread.
- **Color-coded particle types** by feedback category is a common convention (though color meaning is always game-specific and should be established early and held consistent): e.g., a distinct color for damage-dealt vs. a distinct color for reward/pickup vs. a distinct color for status effects, so players build a fast, non-verbal association between color and event type.
- **Motion direction as semantic content**: particles that fly outward from an impact point read as "force was applied here"; particles that arc toward the player (or toward a resource counter/UI element) read as "this is being collected/awarded" — the trajectory itself communicates game-state change, which is why "juice" particle systems are frequently animated toward HUD elements (currency counters, XP bars) rather than simply fading in place.
- **Intensity scaling**: particle count, size, and lifetime scaling with the magnitude of the underlying event (bigger hit = more/larger particles) mirrors the same "small events stay subtle, big events read as dramatically bigger" principle that trauma-based screenshake uses — the two systems are often driven by the same underlying "impact magnitude" value for consistency.

**The discipline constraint**: juice/particle feedback should sit *on top of* a mechanic that already works, never substitute for missing mechanical feedback — described in the source literature as something added to a thing that already functions, not a load-bearing part of whether the game works at all. Overuse is a named failure mode in more recent critical literature: excessive juice/particle noise can actively harm clarity and combat readability at high information density (see the clarity-vs-juice tension in [[art-direction-for-solo-devs]]).

Source: [Wayline — The "Juice" Problem: How Exaggerated Feedback is Harming Game Design](https://www.wayline.io/blog/the-juice-problem-how-exaggerated-feedback-is-harming-game-design); [BetterLink — Where Does Game Feel Come From: Flash, Shake, Floating Text, Sound, Particle Feedback](https://eastondev.com/blog/en/posts/dev/20260521-game-feedback-feel/); Jonasson & Purho, "Juice it or Lose It," GDC 2012.

## Named examples

- **Nuclear Throne** (Vlambeer, 2015) — Jan Willem Nijman's "The Art of Screenshake" (INDIGO Classes 2013) is the direct lineage for Vlambeer's house style: gun kickback, hit-flash, screenshake, and knockback stacked on an otherwise simple twin-stick shooter. Nijman's own framing of juice: it's something added on top of a thing that already works, never load-bearing for whether the game works at all.
- **Super Smash Bros.** series — hitlag (its term for hitstop) scaling with attack strength/knockback is a core, extensively documented mechanical system, not just a feel flourish; the SmashWiki hitlag article is a good primary reference for a real shipped implementation.
- **Downwell** and **Enter the Gungeon** are commonly cited indie examples of trauma-style screenshake plus hitstop stacked with heavy particle feedback in a readable way despite high on-screen density.

## Gaps / confidence notes

- Eiserloh's exact numeric examples (0.30→3%, 0.60→22%, 0.90→73%) were recovered from an archive.org transcript of the talk and are treated as reliable primary-source figures, but the transcript is OCR/text-extracted rather than the original slide deck, so exact wording/values should be spot-checked against the PDF slides linked above if precision matters.
- Particle-grammar color conventions (damage/reward/status color-coding) are a synthesized practitioner convention, not a single cited standard — different studios use different color languages, and this should be presented to a skill user as "establish and hold a convention" rather than "use these specific colors."
