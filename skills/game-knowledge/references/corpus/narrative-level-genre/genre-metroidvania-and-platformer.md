# Genre Wisdom: Metroidvania and Platformer

## Metroidvania

### Core promise

A single, continuous, interconnected world where **the map is a puzzle whose pieces are unlocked by abilities**, not by linear level progression. The player's growing mechanical vocabulary (new movement or combat abilities) is inseparable from spatial discovery: gaining a new ability doesn't just add a combat option, it **recontextualizes every space already explored**, since previously-inaccessible or previously-meaningless areas become newly legible. This recontextualization-of-old-space-via-new-ability is the genre's single defining pleasure, distinct from (though related to) the ability-gating vocabulary covered generally in `spatial-and-architecture-theory.md`.

### Sources and canonical lineage

- **Origin point:** *Metroid* (Nintendo, 1986) and *Castlevania: Symphony of the Night* (Konami, 1997) — the portmanteau genre name literally fuses both titles. *Symphony of the Night* specifically is credited as the genre-defining pivot: earlier *Castlevania* games were linear action games, and SotN's open-castle layout plus RPG-style progression systems established the template later developers adopted. Overview: https://en.wikipedia.org/wiki/Metroidvania ; https://comicbook.com/gaming/list/5-best-metroidvania-series-of-all-time/.
- **Modern reference case:** *Hollow Knight* (Team Cherry, 2017) is treated as the genre's contemporary high-water mark, credited with reviving broad interest in the genre. Design-process detail from Mark Brown's analysis, "The World Design of Hollow Knight: Silksong," https://gmtk.substack.com/p/the-world-design-of-hollow-knight, notes the team's actual process began not with a map but with **the full list of the character's eventual abilities, sequenced into a rough acquisition order** — the map was designed *around* that ability-order, not the reverse. This is a load-bearing production lesson: map layout in this genre is a downstream consequence of ability-progression design, not a separate art-first task.
- **Formal analysis:** Lena Schütz, "Metroidvania Analysis: Locks, Keys and User Guidance," https://blog.hslu.ch/games/files/2021/11/Metroidvania_Analysis.pdf — the source for the gate/key/soft-lock vocabulary detailed fully in `spatial-and-architecture-theory.md`.

### Genre-specific design mechanics

- **One continuous map, not discrete levels.** The world is (usually room-based but) a single connected graph — routes braid into each other, biomes flow into adjacent biomes, and there is no level-select structure separating regions the way a traditional platformer might.
- **Ability gates must telegraph before they're passable.** Restated from `spatial-and-architecture-theory.md` because it's the single most load-bearing rule specific to this genre: a gate the player can't yet pass must still be *visible* and *recognizable* as a gate, so that acquiring the relevant ability later triggers a genuine "oh, THAT'S what that was for" recognition moment rather than the player stumbling into newly-passable space with no memory of having seen it blocked before.
- **Knowledge gates as a non-mechanical alternative to ability gates.** Some areas are gated purely by player comprehension of a system or an environmental/narrative clue, requiring no new item or verb — a design choice that lets a game vary its gating texture without constantly inventing new traversal abilities.
- **Soft locks as pacing control.** Rather than hard-gating every area behind a specific named ability, some regions are merely *impractical* without a given upgrade (too dangerous, too resource-costly) and become trivial once the player has grown in general power — this lets designers create optional early detours for skilled/patient players without those detours being formally "endgame content."

### Failure modes specific to the genre

- **Backtracking without new information.** If regaining access to an old area via a new ability doesn't reveal *anything* the player didn't already know was there (no new item, no new lore, no shortcut), the recontextualization payoff — the genre's central pleasure — is wasted. Every gated area should have been worth remembering.
- **Map illegibility.** Because the whole world is one connected graph rather than discrete levels, in-game map tooling (fast travel, map markers, visual distinction between visited/unvisited/gated space) is not optional polish — it's core to whether the exploration loop is a pleasure or a chore, since players are expected to hold a much larger mental spatial model than in a level-based game (this is the genre where the wayfinding theory in `spatial-and-architecture-theory.md` matters most acutely).
- **Sequencing the wrong ability too early or too late** relative to the challenges it trivializes or the areas it unlocks — since map design is downstream of ability order (per the Hollow Knight production account above), a late change to ability sequencing can silently invalidate large amounts of already-built map logic.

---

## Platformer: movement-first design

### Core promise

Distinct from Metroidvania even though the two genres overlap heavily in practice (many Metroidvanias are also platformers) — a platformer's core promise is that **the feel of moving the character through space is itself the primary source of pleasure**, independent of any puzzle, combat, or exploration layered on top. Level design in this genre is, more than in almost any other, in service of showcasing and testing movement tech rather than the reverse.

### Sources

Practitioner synthesis: https://gamedesignskills.com/game-design/platformer/ ; case-study coverage of *Celeste* and *Super Meat Boy* movement design, https://vvnzzz.itch.io/celeste-movement-research and design-diary coverage referenced via itch.io devlogs.

### Named technique: acceleration/deceleration as the primary feel-tuning lever

The single most load-bearing tunable in movement-first platformer design is **how quickly the character reaches full speed and how quickly it stops** (acceleration and deceleration curves), independent of top speed itself:

- **Short acceleration window (near-instant to full speed)** reads as *snappy*, precise, responsive — the character feels like a direct extension of input. Cited examples: *Mega Man*, *Super Meat Boy*, *Hollow Knight*, *Celeste*. This tuning suits games built around precision execution and tight, punishing level design, because the player's input maps almost immediately to on-screen result — there's minimal "lag" between decision and action to account for.
- **Longer acceleration window** reads as weightier, more deliberate, requiring the player to plan movement slightly ahead of execution. Cited examples: *Super Mario* (classic titles), *Sonic the Hedgehog*. This tuning suits games where momentum management is itself part of the challenge, or where a slightly softer, more forgiving feel is desired.

Neither is "better" — it's a genre-shaping choice that has to be made consciously and early, because level design downstream of it (gap widths, obstacle timing, required precision) has to be built around whichever acceleration model was chosen; retrofitting one onto the other late in production tends to invalidate large amounts of already-tuned level content.

### Jump design as character-defining, not generic

Jump arcs are explicitly called out as a place where small parameter differences produce large feel differences: *Super Meat Boy*'s jump is cited as deliberately symmetrical and reliable — consistent gravity-driven deceleration — chosen specifically to match the fast, high-repetition, precision-execution pace the rest of the game is built around. The lesson generalizes: jump-arc shape (symmetrical vs. asymmetrical rise/fall, variable-height jump via button-hold, coyote time, jump buffering) should be chosen to match the *pace* and *punishment tolerance* of the rest of the game's level design, not selected as a generic default.

### Relationship to level design

*Celeste* and *Super Meat Boy* are both cited as exemplars of **puzzle-like, speedrun-friendly level design** built directly on top of a tightly-tuned movement system — in movement-first platformers, level design's job is substantially to pose a sequence of "how do I use my movement toolkit to solve this specific spatial arrangement" problems, which places this genre in close kinship with puzzle design (`genre-puzzle.md`) even though the "puzzle" is being solved with reflexes and timing rather than deliberation.
