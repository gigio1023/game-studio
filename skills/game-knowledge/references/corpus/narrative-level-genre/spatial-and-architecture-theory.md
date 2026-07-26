# Spatial and Architecture-Derived Level Theory

Level design borrows heavily from architecture, landscape theory, and theme-park design — three imported frameworks (prospect-refuge, landmarks/weenies, Lynch-derived wayfinding) plus one games-native vocabulary (gating and keys) for reasoning about how players read, navigate, and feel safe or exposed in a space.

---

## Prospect-refuge theory

### Source

Jay Appleton, *The Experience of Landscape* (1975) — an English geographer's theory of landscape aesthetic preference, originally about why humans find certain real-world vistas pleasing, not written with games in mind. Games-design application: *The Level Design Book*, "Prospect-Refuge," https://book.leveldesignbook.com/process/blockout/massing/prospect-refuge ; general overview: https://www.archpsych.co.uk/post/prospect-refuge-theory.

### The theory

Appleton's claim: humans are drawn to spaces that let them survey their surroundings for opportunity **(prospect)** while remaining hidden or protected from view **(refuge)** — an evolutionary account of landscape preference sometimes summarized as "hide-and-seek aesthetics." The ideal composition, per Appleton, is an intimate, sheltered vantage point overlooking a large, open area: refuge behind, prospect ahead.

### Application to level design

Game designers use the vocabulary of **prospect space**, **refuge space**, and **secondary refuge space** to reason about the spatial relationships in an encounter or vista: a ledge overlooking a combat arena (prospect) with a defensible nook the player can retreat into (refuge) is a direct spatial translation of Appleton's landscape composition. It's a useful shorthand for why certain arena or vantage-point layouts *feel* good to stand in before a fight even starts.

**Caveat, stated directly by the Level Design Book source and worth preserving rather than smoothing over:** prospect-refuge, taken literally from architecture, has *limited* direct application to level design, because risk, safety, and information in a video game differ substantially from real-world architectural assumptions — a "safe-feeling" refuge in a game is defined by mechanical facts (line-of-sight rules, enemy aggro range, whether the game allows attacks from that angle) rather than by the perceptual/evolutionary cues that make a real alcove feel safe. Use the theory as a **vocabulary for critique and communication** among a level-design team, not as a literal generator of "correct" layouts — verify any given space's actual safety against the game's real systems, not against how it visually reads.

---

## Landmarks and "weenies" (Disney Imagineering)

### Source

Walt Disney popularized the term "weenie" for a highly visible landmark used to draw park guests from one area toward another (the folk etymology: "weenies" as sausages that draw "dogs," i.e., visitors, toward them). Games-design treatment: "What Mario Learned from Mickey Mouse — Part 3: Decision Making and Weenies," *Game Developer*, https://www.gamedeveloper.com/design/what-mario-learned-from-mickey-mouse---part-3-decision-making-and-weenies ; *The Level Design Book*'s Disneyland case study, https://book.leveldesignbook.com/studies/irl/disneyland ; wayfinding overview, http://theoryofthemeparks.blogspot.com/2015/08/wayfinding-in-themed-design-weenie.html.

### The technique

A **weenie** is a large, highly visible landmark placed to organize an entire themed area around it and pull visitor attention (and feet) toward it from a distance, via long sightlines. Disneyland's park layout is built explicitly around this: each land has a central weenie visible from far away, and effective weenies work through deliberate staging of size, form, color, and motion to catch attention against their surroundings.

**A refinement worth preserving:** weenies are frequently only visible from *specific* vantage points, not from everywhere — e.g., certain Disney World landmarks are visible only from within their own themed land, so the "pull" is scoped rather than global. This matters for games: a landmark meant to orient the player toward a specific *next* objective should often be hidden from areas where you don't yet want to bias player attention, and revealed only once the player crosses into the zone where that pull is intended.

**Design technique for reinforcing a weenie once placed:** framing it with foreground elements that direct the eye toward it, using directional lighting to draw attention, and keeping competing visual noise low near the sightline.

**Games application:** open-world and hub-based games use landmark weenies as long-range navigational anchors so players always have "something they'd like to go toward" visible on the horizon, reducing reliance on HUD markers for basic orientation.

---

## Wayfinding (Lynch-derived mental-map theory)

### Source

*The Level Design Book*, "Wayfinding," https://book.leveldesignbook.com/process/blockout/wayfinding — synthesizing Kevin Lynch's urban-planning framework (*The Image of the City*, 1960, not read directly in this pass — **reconstruction flag**: the five-element vocabulary below (paths/edges/districts/nodes/landmarks) is Lynch's well-known urban-cognition model, applied here to games via the secondary source) with real-world navigation-strategy research and signage design.

### Mental map elements

Players build an internal spatial model of a level out of five components: **paths** (routes of movement), **edges** (perceived boundaries/breaks), **districts** (areas with a shared character), **nodes** (strong intersection/decision points), and **landmarks** (distinctive, identifiable reference objects — the weenie vocabulary above is a landmark-design specialization of this element). When landmarks aren't visible, players fall back on **dead reckoning** — estimating position from remembered starting orientation, direction, speed, and elapsed travel time.

### Named player navigation strategies

Track following (following directional signage), route following (executing a pre-planned path), educated seeking (applying prior spatial experience to a new but similar space), inference (assuming standard spatial conventions hold), screening (systematically searching an area), aiming (moving toward a currently-visible target — this is the strategy a weenie is specifically designed to trigger), map reading, compassing (navigating via fixed external reference), and social navigation (following other agents/players).

### Signage taxonomy

Four functional sign types: **informational** (facts about a location), **directional** (arrows/routes at decision points), **identification** (confirms current location), and **regulatory** (behavioral constraints).

### Certainty-graded wayfinding aids

A practically useful scale for how strongly a technique should be read as "the designer is telling you where to go," from subtlest to most explicit:

| Certainty | Techniques |
|---|---|
| Subtle (~1–20%) | Allegory, recognizable architectural patterns, an NPC that can be followed, an unusual/out-of-place detail, sound design, spatial typology (players learn "this kind of room usually means X") |
| Coarse (~35–60%) | Deliberate composition/sightlines, lighting and color contrast, in-world (diegetic) signage, genre tropes players already know, environmental storytelling cues, ground-plane composition, repetition of a visual motif |
| Situational (~70–93%) | Scripted sequences that move the camera or force attention, breadcrumb resources placed along the intended route, cutscenes, dynamic HUD elements, active visible threats that push players away from wrong paths |
| Direct (~95–98%) | Static hard barriers, an always-on UI wayfinding element (quest arrow, minimap ping), impassable walls |

The practical use of this scale: pick the *lowest* certainty level that reliably gets players where they need to go for a given moment, since every step up this list trades player agency and immersion for reliability — a game that only ever uses Direct-tier aids (arrows, hard barriers) has abandoned the entire toolkit above it, while a game that never uses anything past Subtle risks losing players who simply miss the cue.

### Scene-composition guidelines (cited alongside wayfinding)

Three attention-guidance rules pulled from the same source: players rarely look upward unless something explicitly draws the eye there; players' attention tracks their current direction of movement; and players preferentially notice contrast — in color, shape, lighting, or motion — against their surroundings. *Half-Life 2*'s train-station exit is cited as a textbook execution: the Citadel landmark is framed centrally in the exit view, with birds flying upward through the frame specifically to pull the player's eye up toward it.

---

## Gating and keys (Metroidvania-native vocabulary)

### Source

This vocabulary is native to the Metroidvania design community rather than imported from architecture; see `genre-metroidvania-and-platformer.md` for the full genre treatment. Included here because gates/keys are a general-purpose *spatial* design tool, used well beyond the genre that named it. Sources: Lena Schütz, "Metroidvania Analysis: Locks, Keys and User Guidance," https://blog.hslu.ch/games/files/2021/11/Metroidvania_Analysis.pdf ; "The Metroidvania Recipe," https://forums.sufficientvelocity.com/threads/the-metroidvania-recipe-or-how-to-design-an-ability-based-exploration-game.29189/.

### Core vocabulary

- **Gate**: a barrier that requires a specific ability, item, or piece of knowledge to bypass. The critical design rule (stated directly in the source material and worth preserving as a hard constraint, not a suggestion): **a gate must be visible before the player has the means to pass it.** The player should see the wall they can't climb, register it as a gate, and *recognize it as the same gate* when they return later with the relevant ability — the recognition-on-return moment is the actual payoff, not the moment of passing through.
- **Key**: the ability, item, or piece of knowledge that opens a given gate class. Keys can be **mechanical** (a traversal ability like double-jump or wall-climb, a specific weapon type, a transformation), or **knowledge gates** — obstacles passable only through player comprehension of a system, an environmental clue, or narrative information, with no new verb or item involved at all.
- **Soft locks**: a gate that isn't strictly impassable without the intended key, but is impractical or costly without it — general player skill growth or incremental stat upgrades make an early-game soft-locked area trivial later, without the area requiring a specific named ability to enter. This is a deliberate alternative to hard ability-gating, used by some Metroidvanias to de-prioritize strict tool-gating in favor of skill- or knowledge-based gating.

### Why this belongs in general spatial theory, not only genre theory

Gating-and-keys is really just a formalized, game-native instance of the certainty-graded wayfinding idea above, specialized for *progression* rather than *navigation*: a gate is a wayfinding aid that also enforces sequence, and the "visible before you have the key" rule is the progression equivalent of the wayfinding rule that aids should be legible at the certainty level the moment actually calls for. Any game with any form of ability-gated or knowledge-gated progression — not just Metroidvanias — is using this vocabulary whether or not it names it.
