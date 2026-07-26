# Onboarding Theory and Gameplay Readability

Two closely related UX concerns: teaching a new player how to play (onboarding/FTUE) and making the moment-to-moment game state legible during play (readability). Both are downstream of the perception/attention/memory limits covered in [[ux-cognition-hodent]].

## Onboarding / First-Time User Experience (FTUE) theory

**Definition**: FTUE covers the first few minutes of gameplay a new player experiences — introducing the interface, core mechanics, and often a first tutorial pass. It is the single highest-leverage, highest-drop-off window in a game's entire retention funnel: **Day-1 retention is typically measured by how many players make it through the FTUE**, framed in the industry as a player funnel with a specific drop-off rate at each step.

### Core design principles

- **Speed to fun** — get the player to something intrinsically enjoyable as fast as possible; delaying gratification for the sake of thorough instruction is a named failure mode, because motivation to learn decays if the payoff (the actual fun of the game) hasn't been demonstrated yet. A commonly cited target framing is getting to a first moment of fun within roughly the first few seconds to a minute of play, though the specific number is contextual to genre and platform (a mobile hyper-casual game and a 60-hour RPG do not share a "fast enough" bar).
- **Avoid information overload** — the two named failure modes for tutorials are (1) overwhelming the player with information before they have any lived context to hang it on, and (2) delaying fun so long that motivation is gone before the tutorial even finishes. Both are attention/memory failures in Hodent's terms, not motivation failures — the fix in both cases is pacing, not "more explanation."
- **Integrate teaching into gameplay rather than pausing for it** — the strongest onboarding rarely feels like a separate training room; instead, the first encounters are *designed* so that succeeding at them naturally requires performing the action being taught (e.g., a level's first obstacle can only be passed by jumping, so the player learns jump by needing it, not by reading "press A to jump"). This is sometimes called "onboarding through level design" rather than "onboarding through instruction."
- **Motivation before mechanics** — players don't stay because they understand which button does what; they stay because they understand *why* the buttons matter to a goal they care about. Teaching controls without first establishing stakes or a goal produces technically-informed but unmotivated players who churn anyway.
- **Scaffolding** — introduce a short-term goal early (something achievable in the first session) alongside the longer-term goal structure, so the player has an immediate reason to engage rather than only a distant payoff.

### A practitioner framework (eight principles)

One cited framework (Anton Slashcev) proposes that an exceptional FTUE simultaneously executes eight principles spanning a strong opening hook, delayed monetization (don't ask for money before demonstrating value), gradual mechanic introduction (don't front-load all systems at once), and continued post-FTUE optimization (onboarding doesn't end at the tutorial's last screen — the funnel keeps leaking for sessions afterward and should keep being measured).

Source: [Ludolib — How to Design a Great FTUE: 8 Core Principles](https://ludolib.net/en/game-design--and--art/game-design/how-to-design-a-great-ftue); [Roblox Creator Hub — Onboarding](https://create.roblox.com/docs/production/game-design/onboarding); [Alexia Mandeville — Designing a Good Game Tutorial (Medium)](https://alexiamandeville.medium.com/designing-a-good-game-tutorial-3c5dcbc50041); [Mobile Game Doctor — FTUE & Onboarding](https://mobilegamedoctor.com/2025/05/30/ftue-onboarding-whats-in-a-name/).

## Readability as a framework, not a vibe

**Core framing**: a readability framework is a shared guide for how *art itself* carries mechanical information — it treats visual design as a communication channel with its own grammar, not just an aesthetic layer applied after mechanics are locked. Two dimensions commonly used to structure this:

1. **Silhouette priority** — decide, deliberately, which gameplay elements own the clearest/most distinct silhouette on screen, and which elements must subordinate their own outline to avoid competing with it. A player-character and an immediate lethal threat should have the most legible silhouettes on screen; decorative background elements should not compete with them even if they're rendered at high fidelity.
2. **Value (lightness) hierarchy** — lightness/contrast, not hue, is described as the primary depth and priority signal: elements the player must read first should have the strongest value contrast against their background, independent of what color they happen to be. This matters because color-only signaling fails for colorblind players (direct link to [[accessibility-guidelines]]'s Vision category) and degrades under motion blur, small screens, and peripheral vision faster than value contrast does.
3. **Hierarchy by urgency** — health, immediate threats, and time-critical information get the strongest contrast and the most stable, predictable screen position; cosmetic or low-frequency information gets quieter visual treatment and can tolerate a less prominent position.

**Numeric contrast reference**: a contrast ratio of at least **4.5:1** between text/UI and its background is cited as the threshold for reliably readable text — this is the same ratio used in WCAG accessibility guidance for body text, imported into games UI practice. Caveat noted in the source material: overly bright/high-contrast schemes applied indiscriminately (not just where urgency demands it) can reduce player satisfaction — contrast should be *allocated* by priority, not maximized everywhere.

Source: [NextMars — When Art Decisions Break Mechanics: The 2D Game Art Readability Framework](https://www.nextmars.com/post/when-art-breaks-mechanics-2d-game-art-readability-framework); [Ramotion — Contrast Design Principle: Guide to Visual Clarity](https://www.ramotion.com/blog/contrast-principle-in-design/).

## Shape language as a readability tool

Shape language uses geometric form (circles, squares, triangles) as a fast, pre-conscious signal of character role/threat level, independent of color or texture:

- **Circles/curves** read as friendly, soft, and safe — this perceptual response is argued to be near-instant, operating below conscious evaluation.
- **Squares/rectangles** read as stable, reliable, and strong — used for tank/support archetypes whose gameplay role is literally "stand here and absorb."
- **Triangles/angular forms** read as dynamic, aggressive, and dangerous — used for high-threat enemies, hazards, and antagonists.

**Why this matters for readability specifically, not just character design taste**: in a fast-paced action game, the player needs to categorize a new on-screen entity (friend/foe/hazard/neutral) in a fraction of a second, well before there's time to read a health bar, name tag, or particle color. Shape language front-loads that categorization into the silhouette itself. Cited example: *Overwatch*'s hero silhouettes are legible by role (bulky/square tanks vs. sleek/angular high-mobility damage dealers) before the player identifies the specific character.

Source: [RocketBrush — Shape Language in Character Design](https://rocketbrush.com/blog/shape-language-in-game-character-design-how-to-make-characters-readable-and-consistent); [CGWire — Character Shape Language](https://blog.cg-wire.com/character-shape-language/).

## HUD/UI grammar: diegetic, non-diegetic, spatial, meta

Framework origin: Erik Fagerholt and Magnus Lorentzon, "Beyond the HUD — User Interfaces for Increased Player Immersion in FPS Games" (Chalmers University of Technology master's thesis, 2009). This is the standard taxonomy for classifying game UI along two axes: whether an element is part of the game's fiction, and whether it exists in the game's 3D space.

| Type | In-fiction? | In 3D space? | Example |
|---|---|---|---|
| **Diegetic** | Yes | Yes | An ammo counter etched onto the physical gun model; a wrist-mounted holographic map the character themselves can see |
| **Non-diegetic** | No | No | Standard 2D-overlay health bar, menus, quest windows — visible to the player only, not the character |
| **Spatial** | No | Yes | Floating objective markers, enemy outlines, a path line drawn on the ground — placed in 3D space but not something the fictional character perceives |
| **Meta** | Yes | No | Blood splatter/vignette on the screen edges signaling damage; rain droplets on the "camera lens" — part of the fictional sensory experience but not rendered as a 3D object |

**Practical HUD design rule commonly derived from this framework and from the readability/urgency hierarchy above**: use non-diegetic treatment for anything that must be read *during* time-pressured actions (aiming, driving, dodging — health, ammo, cooldowns, timers), because non-diegetic elements have a fixed, predictable screen position independent of camera motion, which is exactly what fast reading under pressure needs; reserve diegetic/spatial/meta treatment for low-urgency or atmospheric information where immersion value outweighs the reading-speed cost.

Source: [Medium — Types of UI in Gaming: Diegetic, Non-Diegetic, Spatial and Meta](https://medium.com/@lorenzoardeni/types-of-ui-in-gaming-diegetic-non-diegetic-spatial-and-meta-5024ce6362d0); [Sidebearings — Game UI Type Systems](https://www.sidebearings.com/game-ui-type-system/).

## Named examples

- **Portal** (Valve, 2007) is a widely cited FTUE case study for teaching entirely through level design rather than instruction text — each early chamber is built so the only way through requires learning exactly one new mechanic.
- **Dead Space** (EA Redwood Shores, 2008) is the canonical diegetic-UI case study: health, ammo, and the map are all rendered as part of the suit/environment (a spine-mounted health bar, a holographic map projected from the character's hand) rather than as a 2D overlay, specifically to preserve immersion and tension.
- **Overwatch** (Blizzard, 2016), cited again here specifically for shape-language-driven role readability at a glance across a large cast.

## Gaps / confidence notes

- Numeric FTUE targets ("speed to fun" in seconds) vary enormously by genre and platform in the sources consulted; treat any specific second-count as a mobile/hyper-casual-skewed convention rather than a universal target — a narrative RPG's onboarding is not held to the same clock.
- The Fagerholt/Lorentzon diegetic/non-diegetic/spatial/meta framework is well-attested and stable across sources as the standard taxonomy, but this file's HUD design rule (non-diegetic for time-pressured info) is a synthesized practical guideline built from multiple secondary sources rather than a direct quote from the original 2009 thesis.
