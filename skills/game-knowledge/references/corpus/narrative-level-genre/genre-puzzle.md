# Genre Wisdom: Puzzle Design

## Core promise

The genre's central pleasure is the **epiphany** — a moment of sudden understanding that reframes everything the player has seen so far, arrived at through the player's own reasoning rather than through being told. This is structurally the same "aha" mechanism as the Ten (twist) act of kishōtenketsu covered in `narrative-techniques-and-theory.md` and the "twist" step of the four-step level in `level-teaching-sequences.md` — puzzle design is, in a real sense, level-teaching-sequence design compressed to the scale of a single puzzle and stripped of any narrative or combat wrapper. Three canonical, well-documented case studies below each represent a different theory of *how* to reliably manufacture that epiphany.

---

## Jonathan Blow's method: minimal, non-misleading puzzles (Braid)

### Source

Coverage of Blow's design process for *Braid* (2008): "Jonathan Blow: The Path to Braid," *Game Developer*, https://www.gamedeveloper.com/design/jonathan-blow-the-path-to-i-braid-i- ; "IndieCade: Inside Jonathan Blow's Puzzle Design Process," https://www.gamedeveloper.com/design/indiecade-inside-jonathan-blow-s-puzzle-design-process ; "How Jonathan Blow found the roots of The Witness inside Braid," https://www.gamedeveloper.com/design/how-jonathan-blow-found-the-roots-of-i-the-witness-i-inside-i-braid-i-.

**Note on sourcing:** searches for Blow's specifically-named "catalog of ideas" method (the systematic practice of exhaustively cataloging every mechanical interaction a given rule-set permits, then curating which interactions become actual puzzles) returned only general design-philosophy coverage rather than a primary-source description of that named method — flagging this as an **under-sourced claim** rather than asserting it with confidence. What the available sources *do* support directly, and what this section is built from instead, is Blow's stated design philosophy for *Braid* specifically.

### Stated design philosophy

- **Completeness of design** — thinking a mechanic's implications all the way through, rather than stopping once it produces "fun" in the immediate case. Blow's account frames incompleteness (a mechanic that mostly works but has unconsidered edge cases) as a design failure independent of whether players notice it.
- **No red herrings.** Braid's levels were deliberately built without misleading elements — every visible tool or environmental detail is genuinely relevant to the puzzle it appears in. This is a direct, opinionated stance against a common puzzle-design instinct (misdirection as a difficulty lever): Blow's position is that difficulty should come from the player genuinely not yet seeing a possibility inherent in the rules, not from the designer hiding the ball.
- **Minimalism.** Puzzles are kept as small and rule-pure as possible — hard puzzles in *Braid* are hard because the *possibility space* is subtle, not because the puzzle piles on additional rules or components to obscure the solution.
- **Small-scale parallel structure.** *Braid* explores its central time-manipulation rule across a bounded number of discrete worlds, each isolating one variation on the rule (rewind, time-independent objects, time running backward with movement, a second timeline) — a structural echo of the four-step level's "introduce, then twist" logic, but applied per-world rather than per-level.

### Design takeaway

Blow's implicit claim, read across these sources: puzzle difficulty should be a property of the **conceptual space** (how non-obvious the winning insight is, given perfectly legible rules) rather than a property of **obscured information** (hidden mechanics, misleading red herrings, unclear affordances). This is a strong, opinionated position, not a genre-wide consensus — it's worth naming explicitly as one theory of puzzle difficulty among several, not the only valid one.

---

## The Witness: puzzles as a language, epistemology as theme

### Source

Coverage of *The Witness* (Thekla, Inc., 2016): "The Quest for Knowledge in The Witness," https://www.superjumpmagazine.com/the-quest-for-knowledge-in-the-witness/ ; "The Witness as Philosophy: How Knowledge Is Constructed," Springer, https://link.springer.com/rwe/10.1007/978-3-031-24685-2_48 ; "A Deconstructive Analysis of The Witness," https://thegemsbok.com/art-reviews-and-articles/the-witness-thekla-jonathan-blow-analysis-deconstruction/.

### The technique: teaching a symbolic language with zero words

*The Witness* contains 523+ line-maze puzzles and delivers **zero text instructions, no dialogue, no explanatory cutscenes, and no hint system**. Every puzzle symbol's meaning is taught entirely through juxtaposition: early, simple puzzles isolate one symbol's behavior in a context where only one interpretation produces a working solution, and later puzzles combine previously-taught symbols in new configurations to teach their interactions — functionally, this is the Teach→Test→Twist beat structure from `level-teaching-sequences.md`, but executed with literally no verbal scaffolding at all, making it perhaps the purest existing case study of that structure's power. The design goal, per the sourced framing, was **non-verbal communication**: subliminally delivering an information payload through pure puzzle-to-puzzle intersection rather than through any stated rule.

### The epistemological framing

Critical analysis of the game (cited above) argues it stages a deliberate **epistemology** — a theory of how knowledge is constructed — both implicitly (through the wordless teaching method itself) and explicitly (through the game's late-game philosophical audio recordings and environmental content, which are thematically about perception and certainty). The claim, worth preserving carefully as an interpretive argument rather than a design *fact*: the game teaches its rules "the way reality teaches a child physics" — through interaction, failure, and the gradual accumulation of hypotheses that either survive contact with the next puzzle or get discarded. **This framing is explicitly presented in the sources as a critical/interpretive reading of the game, not a claim Blow himself has made about intent** — carry that distinction forward rather than flattening it into an authorial-intent statement.

### Design takeaway

Where Braid's lesson is about the *shape* of individual puzzle difficulty (minimal, non-misleading), The Witness's lesson is about **teaching an entire symbolic system across hundreds of puzzles without any verbal channel at all** — a much larger-scale bet, requiring the puzzle *sequence itself* to function as the sole tutorial, with total reliance on well-ordered introduction of new symbol behaviors in contexts that make only one interpretation viable.

---

## Baba Is You: the ruleset as the puzzle object

### Source

"Designing Baba is You's delightfully innovative rule-writing system," *Game Developer*, https://www.gamedeveloper.com/design/designing-i-baba-is-you-i-s-delightfully-innovative-rule-writing-system ; general mechanics coverage via Steam Community guide and press coverage cited in research pass.

### The technique: mechanics-as-puzzles

*Baba Is You* (Hempuli, 2019) inverts the typical puzzle-game relationship between rules and puzzles: in most puzzle games, **the rules are fixed and the puzzle is finding a valid sequence of moves within them**; in *Baba Is You*, **the rules themselves are physical, moveable objects in the level**, and the puzzle is often about rewriting the rules before you can even begin solving in the conventional sense.

Rules are formed by pushing word-blocks (Nouns, Operators, Properties/Verbs) into a line to form a sentence — e.g., pushing blocks to spell `ROCK IS PUSH` makes rocks pushable, in real time, the instant the sentence is formed; breaking the sentence's alignment (pushing one block out of line) immediately revokes the effect. Critically, **the ruleset is exhaustive over what's visible on screen** (with a small number of named exceptions for background decoration) — nothing on screen is exempt from the rule system, which is what makes systematic reasoning about the puzzle space possible at all.

### Design takeaway

This is a third, structurally distinct theory of where puzzle depth comes from: not minimal-and-non-misleading rule *application* (Blow/Braid) and not wordless *teaching* of a fixed symbolic system (The Witness), but **making the rule-system itself the manipulable puzzle object**. The genre lesson worth generalizing: depth doesn't require many verbs — sourced coverage notes the game derives significant puzzle depth from a small number of nouns, verbs, and adjectives, with new depth coming from players learning to *disregard and actively subvert* rules they'd assumed were fixed (e.g., deliberately breaking a rule that seems to be helping, because breaking it enables a different, needed effect) rather than from ever-larger vocabularies of new mechanics.

---

## Synthesis: three non-competing theories of puzzle depth

| Approach | Where difficulty comes from | Representative game |
|---|---|---|
| Minimal, non-misleading rules | Subtlety of the possibility space itself, no obscured information | *Braid* |
| Wordless symbolic teaching | Sequencing puzzles so meaning is inferred, never stated | *The Witness* |
| Mutable ruleset as puzzle object | The rules are the manipulable game piece, not a fixed backdrop | *Baba Is You* |

These aren't in tension — a single puzzle game can draw on more than one simultaneously (e.g., a wordless-teaching game whose individual puzzles are also built minimally and non-misleadingly). The useful design question when starting a puzzle game is which of these three is the intended *source* of depth, since it changes what the content pipeline actually needs to produce: Braid's method needs careful curation of a fixed toolset; The Witness's method needs an unusually disciplined puzzle-ordering pass to guarantee unambiguous inference at every step; Baba Is You's method needs the underlying rule-engine to support exhaustive, consistent physical rule manipulation before any individual puzzle content can be authored at all.
