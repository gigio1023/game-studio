# Pacing, Intensity Graphs, and Difficulty Curves

How designers plan and document the *rhythm* of a level or a whole game — rising and falling tension, difficulty ramps, and the musical vocabulary practitioners borrow to talk about variation over time.

---

## Core definition and the beat vocabulary

### Source

*The Level Design Book*, "Pacing," https://book.leveldesignbook.com/process/preproduction/pacing — synthesizes Valve production practice (*Half-Life 2: Episode Two*, *Left 4 Dead*) with classical dramatic-structure theory.

**Pacing** is defined as the general order and rhythm of activities and events in a level — it covers scope, hierarchy, causality, information delivery, and intensity variation, not intensity alone.

### The beat, and musical-composition vocabulary applied to beats

A **beat** is a self-contained chunk of activity — the same unit of granularity used in `dialogue-barks-and-drama-managers.md`'s discussion of Façade (where "beat" is the atomic story unit the Drama Manager sequences). Here the term is applied to *gameplay* activity chunks rather than narrative content, but it's the same underlying idea: the smallest unit a pacing plan operates on.

The source borrows explicitly musical terms for how beats gain interest through variation:
- **Pulse** — a recurring pattern established across beats (e.g., every level section ends at a distinctive exit door), giving the player a rhythm to recognize.
- **Accent / stress** — deliberately emphasizing certain beats above the pulse's baseline (a harder-than-usual exit encounter).
- **Rest** — a deliberately weaker beat, included *for contrast* with surrounding stronger beats, not as a lapse in design quality.
- **Motif** — a short sequence that recurs across the level or game, building recognition.
- **Variation** — repeating a sequence's underlying shape with different execution or dressing.
- **Syncopation** — deliberately breaking the pattern the player has come to expect (a false exit, a mid-fight interruption) — this only works if a pulse was established first; syncopation without an established pattern just reads as noise.

**Set pieces** are named as a distinct category: elaborate, memorable beats built from expensive/unique assets, often unskippable and heavily scripted — boss fights, major puzzles, choreography set in dedicated arena spaces, built around hero props and distinctive art. Set pieces are where a pacing plan deliberately spends its budget concentration rather than distributing effort evenly.

---

## Intensity graphs

### Mechanism

Valve designers on *Half-Life 2: Episode Two* and *Left 4 Dead* plotted planned beats on a 2D graph: time on the X axis, intensity on the Y axis (0–100% or a 0–5/0–10 scale), commonly segmented into categories like **Explore, Combat, Choreography, Puzzle** so the graph shows not just *how intense* but *what kind* of intensity is being delivered at each point.

**A distinction worth preserving precisely, because it's easy to collapse and the source is explicit about it: intensity is not the same axis as difficulty.** *Journey*'s design team is cited as an example of "low difficulty cutscenes" that nonetheless carry high emotional intensity, through suspense, player stakes, and engagement rather than mechanical challenge. A pacing plan that only tracks difficulty will systematically under-plan quiet-but-intense beats (a slow reveal, a tense negotiation, a vulnerable traversal) because they don't register as "hard."

### Tension-management techniques

- **Start slow.** Open with low-intensity exploration or a cutscene to establish worldbuilding before demanding engagement.
- **Alternate highs and lows rather than sustaining either.** Extended high-intensity stretches numb players (this is the identical design lesson the *Left 4 Dead* AI Director operationalizes at runtime — see `dialogue-barks-and-drama-managers.md` — Valve's own stated inspiration was that *Counter-Strike* playtesting showed constant relentless action wears players out just as much as too much slack bores them). Downtime functions as a "palette cleanser" and makes the next high beat legible as a peak rather than more of the same.
- **Don't end on maximum intensity.** Classical narrative structure — Joseph Campbell's Hero's Journey, the three-act structure, Gustav Freytag's five-act pyramid, Aristotle's *Poetics* — concludes with **falling action** after the climax, not with the climax itself as the final beat. Applied to games: final encounters should read as challenging-but-inevitable rather than the mechanically hardest moment in the game. *Dark Souls*' final boss is cited as mechanically simple relative to mid-game optional bosses; *Portal*'s final puzzles are foreshadowed rather than novel, so the ending tests mastery rather than introduces new difficulty.

**Note on the McKee influence, flagged by the source itself as contested:** the source explicitly names Robert McKee's *Story: Substance, Structure, Style and the Principles of Screenwriting* (1997) as a heavy influence on industry pacing practice, while also noting critics argue it tends to produce formulaic results when applied uncritically — worth carrying forward as a genuine tension rather than smoothing it into unqualified endorsement.

### Documentation formats

Beat sheets (text lists or rearrangeable cards of major events), flowcharts (branching-beat-logic diagrams), and intensity graphs proper (segmented bars plotting beats against a chosen metric) are the three practical formats cited for actually planning and communicating a pacing design before or during production.

### Context-specific pacing notes

- **Multiplayer** pacing emerges from level layout, movement flow, and travel time between spawns rather than from scripted sequences — there's no author controlling the beat order live, so pacing has to be baked into geometry and spawn logic instead.
- **Open world** pacing commonly uses concentric-zone overlays (the model cited is *Assassin's Creed*-style design) where challenge escalates progressively as the player approaches a specific objective, substituting for the linear beat-sequence a corridor game can author directly.

---

## Interest curves and the flow channel (Jesse Schell)

### Source

Jesse Schell, *The Art of Game Design: A Book of Lenses* (1st ed. 2008; 2nd ed. 2014/2015) — the "Interest Curve" concept. Overview coverage: https://notesbylex.com/the-art-of-game-design-a-book-of-lenses-2nd-edition-by-jesse-schell ; https://lostgarden.com/2009/02/19/review-of-the-art-of-game-design-by-jesse-schell/. Related, distinct concept: "Flow Channel," https://www.gamedeveloper.com/design/game-design-theory-applied-the-flow-channel — drawing on Mihaly Csikszentmihalyi's flow theory (psychology, not games-native).

### Interest curves

Schell's account (drawn from his own performing-troupe experience, per the secondary coverage) frames a well-paced experience as: **open with impact** to grab attention, **back off** to let the audience settle in and get oriented, then **build progressively** through bigger beats toward a **finale that exceeds** what came before. This is functionally the same shape as the intensity-graph "don't start flat, don't sustain max, build toward but don't peak-and-stop" guidance above, arrived at independently from performance-arts experience rather than from level-design production practice — the convergence between the two sources is itself evidence this is a robust pattern rather than an artifact of one studio's house style.

**Fractal property, specific to Schell's formulation:** interest curves nest — a whole game has one, but so does each individual level, each individual encounter within a level, and arguably each individual beat within an encounter, each following the same rise-fall-build shape at its own scale. This gives designers a way to reason about pacing at whatever granularity they're currently working at, rather than needing a single global pacing plan to cover every scale at once.

### Flow channel (difficulty ramp, distinct concept)

The **flow channel** is about difficulty-to-skill matching over time, not about intensity or narrative interest as such: as player skill increases, challenge must increase to match, or the player drops below the channel into boredom; if challenge increases too fast relative to skill, the player is pushed above the channel into anxiety/frustration. Schell's stated approach is that overall difficulty should trend upward at a *controlled* rate, while locally oscillating — slight decreases and increases at a roughly fixed cadence — so the player experiences both comfort (mastery of the current level) and productive challenge (being pushed forward), rather than either a flat plateau or a relentless climb.

**Relationship to intensity graphs:** difficulty (flow-channel matching) and intensity (the Explore/Combat/Choreography/Puzzle graph above) are related but not identical axes, and a complete pacing plan tracks both — a beat can be high-intensity/low-difficulty (a tense scripted sequence) or low-intensity/high-difficulty (a quiet, exacting puzzle), and conflating the two axes is the single most common pacing-planning error this corpus file exists to flag.

---

## Cross-references

- The beat-selection *mechanism* used by AI systems to implement dynamic pacing at runtime (rather than plan it at design time) is covered in `dialogue-barks-and-drama-managers.md` (the *Left 4 Dead* Director and the Façade Drama Manager are both, structurally, runtime executors of an intensity-graph-like policy).
- The single-mechanic teaching version of a beat sequence (Teach→Test→Twist, the four-step level) is covered in `level-teaching-sequences.md` — it's the same beat-composition logic applied specifically to skill-teaching rather than to general tension pacing.
- Whole-game difficulty ramps for specific genres (roguelike run-length pacing, puzzle-game difficulty curves, idle-game number curves) are covered in the individual genre files, since difficulty-curve shape is one of the most genre-specific design decisions in this whole corpus.
