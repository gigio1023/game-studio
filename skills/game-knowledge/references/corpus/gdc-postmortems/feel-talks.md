# Feel & Craft Talks

Talks about "juice," game feel, and camera craft — the layer of feedback and
motion that sits on top of a working mechanic. Grouped here because they
share a thesis: mechanical correctness and *feel* are separate design
problems, and feel is addressable with a fairly small, reusable technique
list.

---

## Juice It or Lose It

- **Speakers:** Martin Jonasson (grapefrukt) & Petri Purho (Kloonigames /
  Crayon Chameleon)
- **Venue / year:** Originally presented at Nordic Game Jam, May 2012;
  the well-known recorded version is from GDC Europe 2012.
- **URLs:** GDC Vault — https://www.gdcvault.com/play/1016487/Juice-It-or-Lose
  · YouTube — https://www.youtube.com/watch?v=Fy0aCDmgnxg
- **Verification status:** Summary-only. No full transcript was recoverable;
  content below is triangulated from GDC Vault's session description, the
  Game Developer ("Gamasutra") video writeup, and multiple third-party recap
  sources that agree closely on the technique list and demo structure.

### Core claims / technique

The talk is a live demo, not a lecture: Jonasson and Purho start from a
gray, functionally-complete Breakout clone and add "juice" one layer at a
time on stage, narrating what each layer buys. The point is procedural —
watch a flat prototype become "gleeful" through purely cosmetic,
non-mechanical additions. The layers, in the rough order they're
demonstrated:

1. **Particles** on collision (block break, paddle hit) — cheap, immediate
   visual payoff for an event that already happens.
2. **Screen shake** on impact events, to sell weight/impact without new
   assets.
3. **Squash & stretch** on the ball and paddle — object deforms on
   collision/bounce, borrowing directly from classical animation.
4. **Color** — flashes and palette shifts tied to game events (hit,
   combo, danger).
5. **Tweening / easing** — motion that eases in and out rather than
   moving linearly, applied to almost everything (score counters, camera,
   objects).
6. **Sound** — layered and randomized (pitch/velocity variation per hit)
   so repeated actions don't feel mechanically identical.
7. **Randomization as a feel tool** — deliberately introducing small
   variance (particle spread, pitch, timing) so repeated identical actions
   don't read as robotic.
8. **Personality touches** — small, "unnecessary" additions (their
   canonical example: giving a block a pair of eyes) that make an object
   read as alive rather than geometric.

The meta-lesson repeated across recaps: juice is *additive and orthogonal*
to the mechanic. None of the above changes what Breakout *is* — the rules,
win condition, and physics stay identical. What changes is whether hitting
a block feels like an event.

### What problem it solves for a solo dev

It's the standard answer to "my prototype is mechanically done but feels
dead." It gives a checklist to run *after* the core loop is proven, not
before — implicitly warning against juicing a mechanic that isn't fun yet
(the title is a pun: juice papers over nothing, it only amplifies what's
already there).

### Gaps

No specific numeric parameters (shake duration/magnitude, tween easing
curves) were recoverable for this talk specifically — for those, see
"Math for Game Programmers: Juicing Your Cameras With Math" below, which is
the rigorous, formula-level companion piece cited directly by GDC's own
camera-math talk as the intuitive precursor.

---

## The Art of Screenshake

- **Speaker:** Jan Willem Nijman (Vlambeer)
- **Venue / year:** INDIGO Classes, December 16, 2013 (not itself a GDC
  session, but treated as canon alongside "Juice It or Lose It" in nearly
  every game-feel reading list, including GDC's own; it's the direct
  spiritual sequel/response to Jonasson & Purho's talk)
- **URLs:** YouTube — https://www.youtube.com/watch?v=AJdEqssNZ-U ·
  Internet Archive (metadata only, no playable file) —
  https://archive.org/details/the-art-of-screenshake
- **Verification status:** Summary-only. Archive.org has no transcript or
  playable file; content below is triangulated from independent
  writeups (a game-design-student blog walkthrough and general summaries)
  that agree on the specific sequence of changes.

### Core claims / technique

Same format as Jonasson/Purho — live, iterative modification of a small
shooter, but zoomed in specifically on *impact feedback* rather than juice
broadly. The demonstrated sequence:

1. **Screenshake on gunfire** — shake tied to the firing event itself, not
   just to hits, so the *action* feels powerful even before it connects.
2. **Hit animations on enemies** — visible reaction on the receiving end of
   damage, not just an HP number changing.
3. **Gun kickback** — the weapon (and by extension the player sprite)
   visibly recoils on fire, adding physicality to the input.
4. **A "sleep"/hitstop effect** — the game briefly pauses (cited as
   roughly 0.2 seconds) on a successful hit before resuming, exaggerating
   the moment of impact by interrupting time itself.
5. **Bullet size tuning** — enlarging projectiles measurably changes how
   "meaty" gunfire reads, independent of any other system.
6. **Camera behavior changes** — how the camera reacts to combat events
   (not just static framing) contributes to impact.

### What problem it solves for a solo dev

It narrows "juice" down to combat feedback specifically, and argues (via
demonstration) for a layering *order*: get hitstop + kickback + shake
right before layering on particles or polish, because those three are what
sell "did my hit register" — the single most important piece of feedback
in an action game. Vlambeer's own games (Nuclear Throne, Ridiculous
Fishing) are the implicit case study for why this compounds into a studio
identity.

### Gaps

Exact hitstop duration is cited as "about 0.2 seconds" in secondary
sources but not confirmed against a primary transcript; treat as
directionally right, not a precise spec.

---

## Scroll Back: The Theory and Practice of Cameras in Side-Scrollers

- **Speaker:** Itay Keren (Untame; Mushroom 11)
- **Venue / year:** GDC 2015, Independent Games Summit
- **URLs:** GDC Vault — https://www.gdcvault.com/play/1022243/Scroll-Back-The-Theory-and
  · Written version (author's own adaptation, used as the primary source
  below) — https://www.gamedeveloper.com/design/scroll-back-the-theory-and-practice-of-cameras-in-side-scrollers
- **Verification status:** Verified against a primary written source —
  Keren adapted his own talk into a full technical article for Game
  Developer (Gamasutra), so the catalog below is closer to a transcript
  than a summary.

### Core claims / technique

This is a camera-technique catalog built from dissecting dozens of named
2D games. It's the deepest, most citable reference in this file. Each
technique below is defined + tied to a specific game Keren cites as the
canonical example:

- **Position-Locking** — camera locked directly to player position at all
  times. *Terraria.*
- **Edge-Snapping** — camera snaps to level bounds, letting the character
  roam freely inside them. *Kung-Fu Master.*
- **Camera-Window (push-zone)** — character moves freely inside an
  invisible window; camera only scrolls once the character pushes against
  the window edge. *Jump Bug* (level 5) — the pattern that became the de
  facto standard for platformers.
- **Platform-Snapping** — camera re-centers only on landing, staying still
  during airtime to avoid jarring vertical motion mid-jump. *Super Mario
  World.*
- **Dual-Forward-Focus** — two lookahead anchor points, one in each
  horizontal direction; camera holds the current one until the player
  crosses a threshold, then switches. *Super Mario World.*
- **Projected-Focus** — camera extrapolates from current velocity/heading
  to predict where the player is going. Works poorly for platformers with
  unpredictable landings; better for continuous-motion games. *Secrets of
  Rætikon.*
- **Target-Focus** — camera offset driven directly by existing controller
  input (e.g., shoulder buttons), so the player explicitly aims the
  camera. *Jazz Jackrabbit 2.* Design note: map this to controls already
  in effect, not a disconnected new input.
- **Region-Based Anchors** — different level regions carry their own
  camera parameters (framing, zoom), authored by the level designer per
  region rather than one global rule. *Donkey Kong Country.*
- **Static-Forward-Focus** — permanent extra viewport space biased toward
  the direction of travel (cited figure: roughly 25% of screen width) so
  oncoming threats are visible before they arrive. *Defender* (1981).
- **Lerp-Smoothing** — `return a + t * (b - a);` — proportional
  interpolation toward the target each frame. Called "the most effective
  and ubiquitous smoothing technique." *Donkey Kong Country* is cited as
  an early adopter.
- **Physics-Smoothing** — camera treated as a physical body with velocity/
  acceleration that asymptotically approaches the target, producing
  ease-in-out motion that can overshoot organically. *Never Alone.*
- **Position-Snapping** — slow continuous pull toward the player even
  inside a wide camera-window, preventing the character from getting
  visually "stuck" at the window edge. *Shinobi.*
- **Multi-Focal Averaging** — camera centers on the average position of
  multiple simultaneous focus targets (e.g., players), zooming out as they
  separate — the zoom-out functions as a soft penalty for spreading out.
  *Super Smash Bros.* (original).
- **Ring Attractors** — concentric rings around key objects; the outer
  ring nudges the focus point, the inner ring overrides it outright,
  giving smooth graduated attention-shifting. *Insanely Twisted Shadow
  Planet.*
- **Camera-Path** — a predefined camera trajectory through the level,
  independent of strict player-following, used to foreshadow upcoming
  challenges. *Wonder Boy.*
- **Cinematic-Paths** — camera briefly abandons normal following to show
  narrative context in real time, without cutting to a cutscene.
  *Castle Crashers.*
- **Gesture-Focus** — specific player actions trigger scripted camera
  moves (zoom/tilt/rotate) to dramatize them. *Aztez* (close encounters,
  finishing blows). Keren notes this is still underexplored territory.
- **Cue-Focus** — world objects/enemies act as weighted "attractors" that
  pull camera attention alongside the player, blended rather than
  exclusive. *Limbo.*
- **Zoom-to-Fit (dolly / FOV change)** — camera moves forward/back (dolly)
  or changes field of view (zoom) to keep multiple simultaneous subjects
  framed. Dolly reads as more physically grounded; FOV zoom reads as more
  abstract. *Yoshi's Story* (Yoshi + boss + environment pillar framed
  together).
- **Region-Focus** — focus point blends player position with the center
  of an enclosed arena (example ratio cited: player position averaged in
  at roughly half-weight against the field center). *Geometry Wars.*
- **Manual Camera Control** — direct player input repositions the camera
  independent of character movement; must map intuitively (mouse wheel /
  pinch-zoom in *Osmos*) — Keren calls out *Super Mario World*'s shoulder-
  button camera control as a counter-example of a control mapping that
  doesn't read as intuitive.
- **Camera Shake / Screen Freeze** — deliberately taking control away from
  the player-camera contract to signal an external force (impact, power).
  *Mario Bros.* (1983).

### Design synthesis (Keren's stated ground rules)

1. Identify what's actually unique about your game's mechanics before
   picking a camera technique — there's no universal default.
2. Study games that solved a *similar* problem, not just popular games.
3. Calibrate the technique to your specific mechanics: he cites *Rastan
   Saga* tuning window height to the game's standard jump arc specifically
   to avoid unnecessary vertical camera motion, and *Sonic the Hedgehog*
   pairing a narrow horizontal window (for high-speed forward visibility)
   with platform-snapping (for vertical stability).

### What problem it solves for a solo dev

It replaces "just use a follow-camera with some lerp" with a named
vocabulary and a decision process: pick the technique(s) that match your
specific traversal mechanic, and expect to combine 2-3 of these (most
real games in the catalog blend techniques, e.g., window + platform-snap +
static-forward-focus) rather than using one in isolation.

---

## Math for Game Programmers: Juicing Your Cameras With Math

- **Speaker:** Squirrel Eiserloh (SMU Guildhall)
- **Venue / year:** GDC 2016, "Math for Game Programmers" series
- **URLs:** GDC Vault — https://gdcvault.com/play/1023146/Math-for-Game-Programmers-Juicing
  · YouTube — https://www.youtube.com/watch?v=tu-Qe66AvtY · Slides —
  http://www.mathforgameprogrammers.com/gdc2016/GDC2016_Eiserloh_Squirrel_JuicingYourCameras.pdf
  · Full text — https://archive.org/stream/GDC2016Eiserloh/GDC2016-Eiserloh_djvu.txt
- **Verification status:** Transcript read — full text retrieved from
  Internet Archive.

### Core claims / technique (this is the formula-level companion to
### "Juice It or Lose It" — apply after that talk's intuition is understood)

**Camera shake — trauma model.**
Maintain a single `trauma` value in `[0, 1]`. Damage/stress events
*increment* it (example increments cited: `+= 0.2` or `+= 0.5`); it
*decreases linearly* over time on its own. Actual shake intensity is
**trauma squared or cubed**, not trauma directly — this nonlinear mapping
is the key trick: it keeps small trauma nearly invisible while large
trauma escalates sharply, which reads as more natural than linear shake
and mimics spring-damper physics.

```
shake = trauma^2   // or trauma^3
angle   = maxAngle  * shake * randomFloat(-1, 1)
offsetX = maxOffset * shake * randomFloat(-1, 1)
offsetY = maxOffset * shake * randomFloat(-1, 1)
```

- **2D games:** combine translational *and* rotational shake for best
  effect.
- **3D games:** use rotational shake only — translational shake in 3D
  reads as "super lame" and can cause physical discomfort.
- **VR:** extreme caution with any shake at all (motion sickness risk).

**Noise beats random.** Replace `randomFloat()` with Perlin noise sampled
over time:

```
yaw   = maxYaw   * shake * PerlinNoise(seed,   time)
pitch = maxPitch * shake * PerlinNoise(seed+1, time)
```

Benefits over pure random: smoother perceptual feel, automatically
correct behavior under pause/slow-motion (since it's a continuous
function of time rather than a per-frame random draw), tunable frequency,
and deterministic replay reproducibility (same seed + same time = same
shake).

**Smoothed motion / camera lag — asymptotic averaging.**

```
x = 0.90 * x + 0.10 * target       // equivalently: x += (target - x) * 0.1
```

Blend weight guidance at 60 FPS: **0.01** = slow/gradual follow, **0.1** =
moderate, **0.5** = very fast/snappy. Horizontal and vertical axes (or even
up vs. down) can use *different* weights, and weights don't have to be
constant — they can vary dynamically with game state. To stay correct
under pause/slow-mo, scale the weight by `timeScale`:
`x += (target - x) * 0.1 * timeScale`.

**Framing — points of focus vs. points of interest.**
Two tiers: *primary* focus points (the player) must stay onscreen;
*secondary* focus points (a targeted enemy) should stay visible when
possible; *points of interest* (loot, secrets, traps) get framed only
when doing so doesn't compromise the focus points above them.

**Feathering.** Soft-edged proximity weighting instead of a hard cutoff:
outside an outer threshold, a point of interest's proximity weight is 0;
inside an inner threshold it's 1; between the two it interpolates. Final
influence = `proximity × importance`. This is what prevents the camera
from snapping abruptly when something crosses a hard boundary.

**Voronoi split-screen cameras (2-player).** Two named algorithms:

- *Split-relative:* players mirror across the split line; to reunite the
  view, players must walk toward each other and the split simultaneously;
  players are not centered within their own subscreens.
- *Center-relative:* the split stays fixed; each player is centered
  within their own subscreen; players mirror across screen center (not
  the split); to reunite, players walk toward the split line, not toward
  each other.

Implementation sketch: (1) check whether both players already fit
onscreen within a tolerance; (2) if not, compute a screen-space Voronoi
boundary; (3) balance private screen space by distance; (4) render each
region separately with stencil masking; (5) composite. Feathering applies
here too — fully separate beyond an outer distance, fully merged inside
an inner distance, cross-fading between. For 3+ players, the same idea
extends to world-space Voronoi regions (bisecting each player pair's
distance/normal), optionally rebalanced iteratively for fairer screen
real estate — flagged as "possible but complex."

### What problem it solves for a solo dev

Every number in "Juice It or Lose It" and "The Art of Screenshake" that
was demonstrated by feel here gets an actual formula and parameter range,
so a solo dev can implement trauma-based shake or lerp-cameras correctly
on the first try instead of hand-tuning per-frame random offsets that
break under pause or slow-motion.
