# Game Feel: The Swink Model and Input-Response Metrics

Core reference: Steve Swink, *Game Feel: A Game Designer's Guide to Virtual Sensation* (Morgan Kaufmann, 2009). This is the foundational text that turned "it feels good to play" from a vibe into an analyzable system. Everything below the first section is Swink's model unless otherwise sourced.

## The three-part definition

Swink defines game feel as the intersection of three things — treat it as a Venn diagram, not a checklist, because a game can be missing one leg and still "feel" bad even if the other two are excellent:

1. **Real-time control** — the game must respond to input within a tight correction cycle. Swink specifies this cycle concretely: player reads feedback → makes a decision → takes action → the game reads that action back in → delivers new feedback. He puts the ceiling on this loop at **under 100 milliseconds** for the response to register as "real-time" rather than as a separate, deliberate step.
2. **Simulated space** — a 2D or 3D world with movement and collision that carries a legible sense of speed, gravity, weight, and physicality. This is what separates "game feel" from generic UI responsiveness: there is a body moving through a space with momentum, not just a button producing a state change.
3. **Polish** — the audiovisual and tactile embellishment layered on top of a functioning interaction (particles, sound, screen shake, animation) that Swink calls the **polish spectrum**: the same underlying mechanic can sit anywhere from bare and clinical to richly reactive, and moving along that spectrum changes the subjective experience without changing the rules.

Game feel exists only where all three overlap. A physically rich simulation with 300ms input lag doesn't feel good (fails #1). A snappy, low-latency UI with no simulated momentum doesn't feel like *game* feel, just app responsiveness (fails #2). A responsive, physical game with zero feedback embellishment can be functionally fine but flat (fails #3) — this is the gap "juice" fills (see [[screenshake-hitstop-parameterization]]).

Source: Swink (2009); summarized in [Liz England's review](https://lizengland.com/blog/review-game-feel-by-steve-swink/) and [Manas Dhanait's summary](https://medium.com/design-bootcamp/game-feel-and-player-control-lessons-from-steve-swink-beae0ea1987f).

## The metrics of game feel

Swink's book breaks the three-part definition down into measurable sub-domains, organized roughly as chapters: **Input** (what the device and mapping allow), **Response** (how the simulated body reacts), **Context** (the level/environment framing the action), **Polish** (the embellishment layer), **Metaphor** (what the interaction represents fictionally), and **Rules** (the goal structure that gives the interaction meaning). Secondary literature commonly refers to "15 metrics of game feel" distilled from these chapters (response time, degrees of freedom, sensation of physicality, range of expression, etc.), but no single authoritative source consulted for this file reproduced the complete enumerated list verbatim — **treat the "15 metrics" figure as attested-but-unverified**, and lean on the ADSR model below, which is well documented, as the practical tool instead.

## The ADSR response model

Swink borrows the ADSR envelope from music synthesis (Attack–Decay–Sustain–Release) to describe how a controlled value — almost always character velocity — responds to a binary or analog input over time. This is the single most reusable idea from the book for a programmer or designer tuning a controller:

- **Attack** — how fast velocity ramps up when input starts. A short attack feels snappy/twitchy; a long attack feels heavy/momentum-laden.
- **Decay** — how the value settles after the initial ramp (often merged with attack in simple game controllers).
- **Sustain** — the steady-state value held while input is held (e.g., max run speed).
- **Release** — how fast velocity decays back to zero once input stops. Short release = feels like ice suddenly turning to concrete (can feel stiff); long release = skating/slippery feel.

Practical framing from the design literature built on this model: the attack phase can technically take a while and still feel responsive **as long as some obvious result appears within roughly 70–100ms of the input** — the ADSR shape governs the *quality* of motion, but the *first frame of visible reaction* is what the player's nervous system is actually grading against Swink's 100ms correction-cycle ceiling. A common failure mode nicknamed **"stiff nonsense"** is when a value jumps from zero to full speed (or full speed to zero) in a single frame with no attack/release curve at all — technically responsive, but reads as mechanical and cheap rather than physical.

Source: [SpecialEffect DevKit — Response Curves](https://specialeffectdevkit.info/input/4_analog_sensitivity/4_4_response_curves/); [Rogue Snail — Game Feel Tips II: Speed, Gravity, Friction](https://roguesnail.com/game-feel-tips-ii-speed-gravity-friction/); ADSR-to-game-feel framing summarized in multiple secondary sources citing Swink (2009).

## Typical parameter ranges practitioners cite

These are commonly cited starting points from practitioner blogs (Game Developer/Gamasutra "Game Feel Tips" series and derivative posts), not Swink's own numbers — treat as reconstructed practitioner convention, not a spec:

| Parameter | Typical range | Effect of moving it |
|---|---|---|
| Friction relative to acceleration | ~25–30% of acceleration value | Higher friction = snappier stops, less "rubber band" overshoot |
| Absolute scale of accel/friction (not just ratio) | e.g., 10/5 vs. 100/50 | Same ratio, different feel: higher absolute values read as more "violent"/twitchy movement, lower as softer and slower |
| Ground-movement response window | ~50–200ms | Time from input to a visible change in on-screen velocity |
| System-level correction-cycle ceiling | <100ms | Swink's hard rule for the loop to register as real-time control |

Source: [Game Developer — Game Feel Tips II: Speed, Gravity, Friction](https://www.gamedeveloper.com/design/game-feel-tips-ii-speed-gravity-friction); [Game Developer — Game Feel Tips III](https://www.gamedeveloper.com/design/game-feel-tips-iii-more-on-smooth-movement).

## Input latency and human perception thresholds (the research behind "100ms")

Swink's 100ms figure is a design heuristic, not a universal perceptual law — the actual human-factors research is more nuanced and genre-dependent, and citing only "100ms" without qualification will be wrong in most competitive-game contexts.

- **The 100ms claim has been directly challenged.** Peer-reviewed studies on latency perception in mouse-based and stylus-based interaction show users can perceive latencies well below 100ms; cited perception ranges for pointing tasks run roughly **30–80ms and 60–105ms** depending on the study and input device.
- **Latency tolerance is genre- and camera-dependent**, not a single constant:
  - Fast-paced/twitch games (shooters, fighters): perceptible degradation around **50–60ms**; **60ms** is argued in recent human-factors work as a more accurate threshold than the traditionally cited 100ms.
  - First-person avatar games generally: **~100ms** threshold before it's clearly noticeable.
  - Third-person avatar games: tolerance loosens to roughly **~500ms**.
  - Omnipresent/top-down games (RTS, management sims — no embodied avatar): tolerance loosens further, to roughly **~1000ms**.
- **Expert players are far more sensitive than average.** Studies on trained/competitive players report perceptible latency as low as **~15ms**, which is why esports-oriented hardware and netcode target **well under 50ms total system latency** rather than the 100ms design heuristic.
- **Rule of thumb for annoyance, not just detection**: ~100ms is noticeable in an FPS context; ~200ms is where it becomes actively annoying/detrimental to play.

Practical implication for a skill/agent giving feel advice: don't quote "100ms" as a universal rule. Ask what genre and camera the game uses — an RTS and a fighting game do not share a latency budget, and the gap between "detectable" and "competitively disqualifying" is roughly an order of magnitude (15ms expert-detection floor vs. 100–200ms casual-annoyance ceiling).

Source: [Are 100ms Fast Enough? Characterizing Latency Perception Thresholds in Mouse-Based Interaction, Springer (2017)](https://link.springer.com/chapter/10.1007/978-3-319-58475-1_4); [Latency Thresholds for Usability in Games: A Survey](https://www.academia.edu/48115148/Latency_Thresholds_for_Usability_in_Games_A_Survey); [Player Perception of Delays and Jitter in Character Responsiveness, ACM DL](https://dl.acm.org/doi/pdf/10.1145/2628257.2628263).

## Named examples

- **Celeste** (Extremely Ok Games, 2018) is the canonical modern reference for a tight ADSR-tuned platformer controller: near-instant attack on horizontal acceleration, a deliberately short release (no ice-skating), and a jump arc tuned around the parameters in [[platformer-feel-parameters]].
- **Nuclear Throne** (Vlambeer, 2015) is the canonical polish-spectrum case study — the underlying twin-stick shooter mechanics are simple, but knockback, screen shake, hit-flash, and gun kickback (all in the "polish" leg of Swink's model) are what the design is remembered for. See [[screenshake-hitstop-parameterization]] for the specific talk this traces to.
- **Overwatch** (Blizzard, 2016) is frequently cited for simulated-space clarity: hitboxes, movement speed, and ability windup are tuned so that the "simulated space" leg reads consistently across a large and varied cast, which is a harder problem than tuning a single controller.

## Gaps / confidence notes

- The verbatim "15 metrics" enumeration from Swink's book was not recoverable from the sources checked (a direct PDF fetch of a derivative course document failed technical extraction, and no clean secondary source reproduced the full list). If this skill later needs the literal list, source it from the physical/ebook text directly rather than secondary blog summaries.
- The ADSR-to-game-feel mapping is well attested across multiple independent secondary sources but is itself Swink's *adaptation* of a synthesis concept, not something with its own separate peer-reviewed grounding — treat it as a strong design heuristic, not an empirical claim.
- Latency-threshold numbers above are drawn from HCI/games-research literature (Springer, ACM) rather than Swink's book itself; they refine rather than contradict his 100ms heuristic.
