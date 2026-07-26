# Game Feel

- Screen shake runs off **one float, `trauma`, in [0,1]**. Impacts *add* to it; it decays linearly. Shake is **`trauma²`** (or `trauma³`), never `trauma` itself.
- Eiserloh's own worked numbers: **trauma 0.30 → ~3% shake, 0.60 → ~22%, 0.90 → ~73%** (GDC 2016; recovered from an archived transcript, so treat as reliable-but-transcribed).
- Use **Perlin/simplex noise, not `random()`**, to drive the offset — it gives continuous motion, free slow-motion and pause behavior, tunable frequency, and replay determinism.
- **In 3D, shake rotation only** (yaw/pitch/roll). Translating a 3D camera clips it through nearby geometry. 2D can use both offset and angle.
- Camera follow by asymptotic averaging: `x += (target - x) * weight`, **weight ~0.1** default, useful range **~0.01–0.5**, scaled by `timeScale` so follow speed tracks slow motion.
- **Hitstop freezes both parties** at the contact frame; **hitstun locks only the target afterward**. They are different systems — hitstop sells impact and opens cancel windows, hitstun balances combos.
- Hitstop is load-bearing, not decoration: Street Fighter II's "2-in-1" cancel exists because roughly **10 frames** of freeze gave players a real buffer window.
- Exact hitstop frame counts are **per-game tuning data, not portable constants** — scale duration with attack weight instead of copying another game's numbers.
- **Juice sits on top of a mechanic that already works.** Vlambeer's own framing; it is never load-bearing for whether the game functions.
- Particle color conventions (damage / reward / status) are a **practitioner convention, not a standard** — establish one early and hold it, rather than adopting someone else's palette.

## Basics

### Trauma-based screen shake

The system separates two decisions that are usually tangled: *how much shake an
event deserves* and *how the shake plays out*.

```text
on impact:  trauma = min(1.0, trauma + traumaAdd)   // ~0.2 small hit, 0.5+ big hit
every frame: trauma = max(0.0, trauma - decayPerSecond * dt)
             shake  = trauma * trauma               // or trauma³
```

Because events *add* to a single value, several simultaneous impacts stack into
one coherent camera response instead of fighting each other for control.

The squaring is the design decision, not an implementation detail. It keeps
small frequent impacts nearly invisible — protecting combat readability during
normal play — while a modest further climb in trauma produces a dramatically
larger response for a major event. Designers get "big hits feel exponentially
bigger" without hand-tuning every event.

Apply the resulting `shake` to independent channels, each with its own maximum:

```text
angle   = maxAngle  * shake * noise(seed, time)
offsetX = maxOffset * shake * noise(seed, time)
offsetY = maxOffset * shake * noise(seed, time)
```

Noise rather than per-frame random numbers buys four properties at once: smooth
frame-to-frame motion instead of jitter, correct behavior under pause and slow
motion (the function is sampled by time), an amplitude-independent frequency
knob, and reproducibility for replays.

### Hitstop

At the frame of impact, gameplay time briefly freezes for both attacker and
target, then resumes. Three payoffs stack in the same technique:

1. **Perceptual confirmation.** At 60fps a real collision can be visible for
   under 17ms. Freezing at contact gives the eye enough frames to register that
   it happened.
2. **Weight signaling.** Longer freeze reads as heavier attack, independently of
   animation or damage numbers.
3. **Mechanical utility.** The freeze extends the window in which the player can
   act on a confirmed hit — which is how cancel systems became possible.

Scale duration with attack weight: light attacks get few or zero frames, heavy
and counter-hit attacks get extended freeze.

### Particle feedback as a grammar

Treat particles as a readable signal system rather than decoration:

- **Origin** — sparks at the impact point, dust at the landing point — confirms
  *where* the event happened, with count and spread carrying intensity.
- **Motion direction carries meaning.** Outward from a point reads as "force was
  applied here"; arcing toward the player or a HUD counter reads as "this is
  being collected". This is why juice particles are so often animated into
  currency and XP elements rather than fading in place.
- **Intensity scales with the event** — count, size, and lifetime driven by the
  same impact-magnitude value that feeds trauma, so the two systems agree.

## Advanced

### 2D and 3D shake differ

2D has two translation axes and one rotation axis; use both kinds. 3D
translation moves the camera through space and will clip through walls and
props, so rotational shake alone is the default. This is a correctness
constraint, not a taste preference.

### Camera follow interacts with shake

Shake and follow are sampled in the same frame, so a snappy follow plus heavy
shake reads as noise. Asymptotic averaging with weight ~0.1 is the usual
starting point; asymmetric weights are common — a platformer camera that follows
falls more slowly than rises. Distinguish points the camera *must* frame (the
player) from points that only pull it via soft proximity weighting (enemies,
loot).

### Hitstop is not hitstun

| | Hitstop | Hitstun |
| --- | --- | --- |
| Who freezes | Both parties | Target only |
| Purpose | Sell impact, open cancel windows | Balance combos |
| Symmetry | Symmetric | Asymmetric |
| Tuning lever for | Perceived weight | Combo length |

Confusing them produces a build that feels heavy but combos wrongly, or the
reverse — and the fix lives in whichever system was actually mistuned.

### Juice has a failure mode

Excess feedback actively harms clarity at high information density. The
constraint from the source literature is a sequencing rule: feedback is added on
top of a mechanic that already functions. If juice is doing the work of missing
mechanical feedback, the mechanic is what needs fixing.

## Cases

- **Nuclear Throne** (Vlambeer, 2015) — the lineage for this house style. Jan
  Willem Nijman's "The Art of Screenshake" stacks gun kickback, hit flash,
  shake, and knockback on an otherwise simple twin-stick shooter, with the
  explicit framing that juice is added to something that already works.
- **Street Fighter II** — the "2-in-1" cancel is the canonical case of a system
  mechanic built directly on a feel technique: roughly 10 frames of impact
  freeze became the input buffer window.
- **Super Smash Bros.** — hitlag scaled by attack strength and knockback is a
  documented, load-bearing mechanical system, not a flourish.
- **Downwell**, **Enter the Gungeon** — trauma-style shake plus hitstop plus
  heavy particles that stay readable despite dense screens.

## Checklist

- [ ] Is shake driven by a single trauma value, or does each event set the
      camera directly?
- [ ] Is the response curve squared or cubed rather than linear?
- [ ] Is the offset driven by noise, so pause and slow motion behave?
- [ ] In 3D, is shake rotation-only?
- [ ] Does follow weight scale with `timeScale`?
- [ ] Does hitstop duration vary by attack weight, or is it one global constant?
- [ ] Are hitstop and hitstun tuned as separate systems?
- [ ] Does every feedback element confirm a specific gameplay fact? (The
      per-verb audit belongs to the game-review skill's feel lens.)
- [ ] Is there a stated particle color convention, held consistently?
- [ ] Does the mechanic still read with feedback turned off?

## Sources

- Squirrel Eiserloh, "Math for Game Programmers: Juicing Your Cameras With
  Math," GDC 2016 — trauma system, `trauma²`, noise-driven offset, follow
  weights.
  http://www.mathforgameprogrammers.com/gdc2016/GDC2016_Eiserloh_Squirrel_JuicingYourCameras.pdf
  (numeric examples recovered from https://archive.org/stream/GDC2016Eiserloh/GDC2016-Eiserloh_djvu.txt —
  a text extraction, not the slide deck; spot-check the PDF when precision
  matters)
- Martin Jonasson and Petri Purho, "Juice It or Lose It," GDC 2012 — juice as a
  named, teachable layer. https://www.youtube.com/watch?v=Fy0aCDmgnxg
- Jan Willem Nijman, "The Art of Screenshake," INDIGO Classes 2013 — Vlambeer
  house style and the "added on top" framing.
  https://www.youtube.com/watch?v=AJdEqssNZ-U
- Sonic Hurricane, "Impact Freeze" — hitstop mechanics and the SF2 cancel
  window. https://sonichurricane.com/?p=1043
- CritPoints, "Hitstop/Hitfreeze/Hitlag/Hitpause," 2017-05-17 — terminology
  across communities. https://critpoints.net/2017/05/17/hitstophitfreezehitlaghitpausehitshit/
- SmashWiki, "Hitlag" — a documented shipped implementation.
  https://www.ssbwiki.com/Hitlag
- Wayline, "The 'Juice' Problem: How Exaggerated Feedback is Harming Game
  Design" — the overuse failure mode.
  https://www.wayline.io/blog/the-juice-problem-how-exaggerated-feedback-is-harming-game-design
- Steve Swink, *Game Feel* (2008) — feel as real-time control, simulation, and
  audiovisual response.
- Ben Cousins, "The Seven Rules of Camera Design" — camera as a control system.
  https://www.gamedeveloper.com/design/the-seven-rules-of-camera-design

Corpus source for this page: `references/corpus/feel-ux-audio-art/screenshake-hitstop-parameterization.md`
(accessed 2026-07-26). Particle color conventions there are marked synthesized
practitioner convention rather than a cited standard, and stay marked here.
