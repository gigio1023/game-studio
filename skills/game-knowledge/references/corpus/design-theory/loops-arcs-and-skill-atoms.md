# Daniel Cook: Skill Atoms, Skill Chemistry, and Loops & Arcs

**Author:** Daniel Cook, game designer (Spryfox; previously Playdom/Disney, TinyBuild, Failbetter, EA), writing on his blog **Lost Garden** (lostgarden.com). This is a working designer's practitioner theory built up across many posts over roughly a decade (2006–2021), not a single unified paper — the model accretes across essays that reference and refine each other. It is far less summarized in mainstream game-design pedagogy than Salen/Zimmerman or Juul, so this file leans more heavily on primary text.

Primary essays used:
- "What are game mechanics?" — lostgarden.com, Oct 24, 2006.
- "The Chemistry of Game Design" — lostgarden.com, Jul 19, 2007 (also syndicated as a feature on Gamasutra/Game Developer under the same title).
- "Project Horseshoe 2007 slides: Smashing the Game Design Atom" — lostgarden.com, Nov 17, 2007.
- "Project Horseshoe: Multiplayer Game Atoms" — lostgarden.com, Feb 12, 2009.
- "Loops and Arcs" — lostgarden.com, Apr 30, 2012.

---

## 1. The player model underneath everything

Cook's whole framework rests on a specific, stated psychological claim about players, introduced in "The Chemistry of Game Design": *"The player is [an] entity that is driven, consciously or subconsciously, to learn new skills high in perceived value."* He calls this drive being an **"infovore"** — humans are described as neurologically wired to seek out and solve problems and are rewarded (in his account, chemically/emotionally) for successfully building an understanding of a system. Game mechanics work, in this model, because they exploit this appetite: they hand players a **bounded unknown system** — a "black box" — and let them derive its rules through action and feedback, which is intrinsically pleasurable independent of any narrative wrapper.

His earlier essay "What are game mechanics?" (2006) defines mechanics in exactly this vocabulary: *"rule based systems / simulations that facilitate and encourage a user to explore and learn the properties of their possibility space through the use of feedback mechanisms."* This 2006 essay is the direct ancestor of the skill atom — it already contains the loop (act → simulation responds → feedback → act again with new knowledge) but without the "atom" packaging or the chemistry metaphor yet.

---

## 2. The skill atom: the atomic unit of skill-based play

**Source:** "The Chemistry of Game Design," lostgarden.com, 2007 (Gamasutra/Game Developer syndication, same title).

### 2.1 The four-step cycle

Cook defines the **skill atom** as a small, complete feedback loop with four stages, illustrated concretely with Tetris (e.g., "rotate a piece"):

1. **Action** — the player performs an action (press a button, rotate a piece, time a jump).
2. **Simulation** — the game's simulation is updated based on that action (the underlying rules/state change as a consequence of the input).
3. **Feedback** — the game communicates the resulting state change back to the player in some perceptible form (the piece visibly rotates; a line clears; a sound plays).
4. **Modeling** — the player absorbs that feedback and updates their internal **mental model** of how the system behaves and whether their action succeeded — this updated model is what they carry into the next action.

The cycle then repeats: the updated mental model informs the next **Action**, closing the loop. This is structurally the same act → response → feedback → learning cycle later formalized as "loops" in the 2012 essay — the skill atom is the smallest possible instance of a loop, scoped to a single discrete skill.

### 2.2 What an "atom" represents pedagogically

An atom is not a mechanic in the abstract — it's the *learnable unit* a specific mechanic produces for a specific player: the moment where a player who does not yet reliably succeed at "rotate the piece into the gap" practices the action/feedback loop until they do. Mastery is treated as a process that unfolds *through repeated passes around the atom's loop*, not as a single insight.

### 2.3 Mastery lifecycle: partial mastery → full mastery → burnout

Cook frames a skill atom's usable life in three phases:
- **Partial mastery** — the player is still learning the atom; each pass through the loop yields new information and the atom is intrinsically engaging because the mental model is still being actively revised.
- **Full mastery** — the player reliably succeeds; the atom stops teaching them anything new.
- **Burnout** — once fully mastered, continued repetition of the same atom in isolation stops producing the "infovore" reward (there's nothing left to learn), so the player disengages from that atom specifically and looks for a new one, or for the mastered atom to be **repurposed** as a tool inside a larger skill.

He names this repurposed-as-tool case **"milking"**: a mastered mechanic doesn't have to be retired once learned — it can keep contributing utility by being folded into solving *other*, higher-level problems (a mastered "aim" skill in an FPS gets milked continuously as the building block for every subsequent combat encounter, not just retired after the tutorial). This is the mechanism by which atoms avoid becoming pure busywork once mastered: they get absorbed as load-bearing sub-skills of bigger skills rather than discarded.

### 2.4 Skill chains

Individual atoms are rarely played in isolation for long — Cook describes chaining them into **skill chains**, modeled as a **directed graph**: the skill produced by mastering one atom becomes an input/prerequisite for the *action* of the next atom in the chain. A whole game's learning curve can be mapped as a graph of atoms, each one feeding the next, which gives designers a concrete tool for diagnosing where players get stuck (a broken or missing edge in the graph — an atom whose prerequisite skill was never actually taught) or where players quit from boredom (a long unbroken stretch of already-mastered atoms with no new atom introduced, i.e., a burnout zone with no fresh "milking" opportunity or new skill to chase).

### 2.5 The chemistry metaphor: how far Cook actually takes it

The essay title promises "chemistry," and Cook does use chemical-composition language throughout — atoms combining, skills as elements, chains as compounds — as an explanatory analogy for how simple units combine into complex play. However, based on the material recoverable from this pass, **he does not appear to formalize a full periodic-table-style taxonomy or a named "skill molecule" unit as a first-class term** — a commenter on the original post ("torncanvas") explicitly suggested extending the metaphor to "molecules" (multiple atoms bonded into a reusable higher-order unit), and Cook's reported response was to acknowledge the suggestion but deliberately stop the formal model at the atom/chain level, preferring to let the model bend to observed design reality rather than force a complete chemistry parallel. Practically: **"skill chemistry"** in Cook's own usage functions more as the loose, evocative name for the overall approach (atoms + chains + how they combine) than as a rigorously defined additional layer of the taxonomy — treat "skill chemistry" as the *name of the theory*, and "skill atom" / "skill chain" as its two load-bearing formal units.

### 2.6 Extension to multiplayer

**Source:** "Project Horseshoe: Multiplayer Game Atoms," lostgarden.com, 2009 (summarizing a Project Horseshoe 2008 workshop report co-developed with other designers, referenced but not fully reproduced on the blog itself).

Cook and collaborators extended skill-atom diagramming to multiplayer systems, on the premise that multiplayer games layer additional atoms on top of single-player mechanical atoms — atoms whose "simulation" step routes through *other players'* decisions rather than only the game engine (reading an opponent, bluffing, coordinating). In blog comments on this topic Cook narrows where he thinks the model earns its keep: *"Where I've found skill atoms to be most useful are in the skills explicitly supported by the rules and feedback systems of the game"* — i.e., the model is strongest for mechanically legible skills with clear designed feedback, and weaker/more speculative once applied to fuzzy social or metagame skills that the ruleset doesn't directly instrument.

### 2.7 Related but distinct: "Smashing the Game Design Atom" (2007 Project Horseshoe slides)

A companion slide deck from the same year, referenced on Lost Garden under the title "Smashing the Game Design Atom," appears to be a workshop presentation elaborating the atom concept for a live audience (Project Horseshoe is an invite-only game-design think-tank retreat) — noted here for completeness as part of the same 2007 cluster of atom-related output, though this pass did not extract further unique content from it beyond what "The Chemistry of Game Design" already covers.

---

## 3. Loops and Arcs

**Source:** "Loops and Arcs," lostgarden.com, Apr 30, 2012. This essay generalizes the skill-atom cycle from 2007 into a broader architectural vocabulary for structuring a whole game (or product), and is the piece most often cited today as "Cook's loops and arcs model."

### 3.1 Core definitions

- **A loop** is a repeating structure: the player forms/updates a mental model, takes an action informed by it, the system (or other people) responds, feedback comes back, and the mental model updates again — then the cycle repeats. This is explicitly the same four-part shape as the skill atom, generalized beyond single mechanical skills to any repeatable interaction structure in a game (economic play, social play, competitive play, etc.), and Cook notes loops are **fractal** — they exist and recur at many different scales and frequencies simultaneously within one game (a single input-response takes milliseconds; a full match takes minutes; a meta-progression loop takes weeks).
- **An arc** shares the same four-part shape as a loop but **does not repeat** — Cook's own description: an arc is *"a broken loop you exit immediately."* Arcs are essentially the one-time stories/experiences a player has in a game: the mental model gets updated once by the experience, but the player doesn't cycle back through the same interaction again seeking the same update. He frames arcs as **pre-processed information** delivered efficiently: reading a cutscene, watching a scripted reveal, or performing a simple one-off action (turning a page) all lean on the player's *existing* mental models rather than building new ones through repetition, and can use **"complex evocative feedback"** (cinematic staging, music, narrative context) to connect existing knowledge in a novel way without requiring the player to practice anything.

### 3.2 Why the distinction matters: what each is good/bad at

- **Loops build "wisdom"** — a robust, holistic, transferable understanding of a system, because the player has tested and re-tested their mental model against the system repeatedly. Loops require **interrelated actions** (actions that trigger multiple loops feeding into specific dynamics), **crisply defined cause and effect** (so each cycle produces a clean, learnable signal — "self-contained systems of meaning"), and **functional feedback** that actually helps the player understand *why* an outcome happened, not just *that* it happened.
- **Arcs deliver "success stories, a singular path"** — knowledge or emotional payoff that is real and valuable but, in Cook's words, **"less robust in the face of change than 'wisdom'"** — because it was never tested against variation, it doesn't generalize the way loop-built understanding does. A player who watched one clever scripted moment hasn't necessarily learned anything they can reapply; a player who mastered a loop has.
- A practical consequence Cook draws out: **arcs are individually consumed once and then are largely spent** — players rarely want to re-experience the identical one-off arc, which is why arc-heavy content is vulnerable to fast burnout unless arcs are **strung together serially** (a sequence of one-off story beats/levels), which is the standard technique underlying most narrative-content retention in commercial games. That serial-arc approach still runs on a **content treadmill**: revenue/retention stays dependent on producing a continuous supply of new one-off content, and stalls the moment new content production stops.

### 3.3 Loop taxonomy Cook gives

Within the 2012 essay, Cook names several categories of loop by example rather than presenting a closed formal taxonomy:

- **Loops of player expression** — citing Will Wright's and Notch's (Minecraft's) design sensibility: systems built around giving the player a persistent, flexible toolset to repeatedly express creative intent.
- **Loops of economics and politics** — citing EVE Online: systems whose repeating cycle is driven by resource management, trade, and social/political maneuvering rather than mechanical execution.
- **Mastery loops** — citing StarCraft and traditional sports: systems whose repeating cycle is built around executing and refining physical/mechanical or tactical skill under competitive pressure.
- **Religion's loops** — worship rituals and sermon-generation cycles, offered as an example that the loop structure is not specific to games at all, but a general feature of any recurring human practice built around belief/meaning reinforcement.
- **Improv/bluffing loops** — loops built around social deception and reading other players, which Cook flags as comparatively **underexplored** in commercial game design relative to the other categories.

### 3.4 Market/business implications: loops vs. arcs and retention design

Cook connects the loop/arc distinction directly to business model history:
- **Retail-era economics rewarded arc-heavy design** — games were sold once as a consumable product, so a strong sequence of one-time arcs (a satisfying single-playthrough campaign) was sufficient; the game didn't need to sustain engagement past the arc's end.
- **Arcade economics historically favored loop-heavy, "evergreen" design** — revenue depended on repeated play sessions from the same player, so systems needed to reward mastery over many repetitions rather than being "beaten and cast aside" after one pass.
- **Modern in-app-purchase / live-service models push design back toward loop-heavy structures** for the same underlying economic reason arcades did: sustained engagement over time monetizes better than a single consumed arc, so contemporary retention design (in Cook's framing) is fundamentally about deliberately engineering strong, fractal loops rather than relying on a content treadmill of arcs.

This is the essay's clearest practical takeaway for engagement/retention design: **arcs are what you show a player once to hook or move them; loops are what you build to keep them.** A design that is all arc and no loop has no mechanism for long-term retention regardless of production quality, because there is nothing for the player to return to and get better at.

---

## 4. How the pieces connect

The skill atom (2007) is the smallest formal unit: one action/feedback/modeling cycle around a single learnable skill. The loop (2012) is the same cyclical shape generalized upward — a loop can *be* a chain of skill atoms operating at a higher frequency, or an atom can be understood as the smallest possible loop. Arcs are not a competing structure but the **non-repeating counterpart** to a loop — same four-part shape, deliberately exited after one pass. Skill chains (2007) describe how atoms sequence into a learning progression within a single play session or game; loop taxonomy (2012) describes how whole categories of repeating systems (expression, economy, mastery, ritual, bluffing) recur across very different games and even outside games entirely. The throughline across all of it is Cook's "infovore" player model from 2006–2007: players are modeled as seeking new, high-value skill acquisition, and both atoms and loops are, structurally, the mechanism by which a designed system supplies that.

---

## 5. Critiques and limits

- **Coverage of loop taxonomy is illustrative, not exhaustive or rigorously defined.** Cook names five categories of loop by example (expression, economics/politics, mastery, ritual, bluffing) rather than deriving them from a stated set of criteria — the taxonomy reads as a working designer's observed clusters, not a formally closed classification, and he explicitly flags one category (improv/bluffing) as underexplored rather than fully worked out.
- **The chemistry metaphor is acknowledged by Cook himself as incomplete.** He stops the formal model at "atom" and "chain," declining to build out the "molecule" extension a commenter proposed, which means "skill chemistry" functions more as a loose brand for the overall approach than a fully specified multi-level taxonomy — a reader expecting an atoms-to-molecules-to-compounds structure comparable to actual chemistry will not find one worked out on lostgarden.com.
- **Applicability is self-limited by Cook to mechanically legible skills.** His own comment on the multiplayer extension — that skill atoms are "most useful" where skills are "explicitly supported by the rules and feedback systems of the game" — is itself an implicit critique: the model is weaker for skills the game doesn't directly instrument (social read, metagame knowledge, community-sourced strategy), which is a substantial share of what players actually learn in many multiplayer and live-service games.
- **No controlled empirical validation found in this pass.** As with most influential game-design blog theory (compare Meier's decision heuristics or Salen/Zimmerman's schemas), the loops/arcs/atoms model is argued from design experience and worked examples (Tetris, EVE, StarCraft) rather than from cited empirical player-research studies; it should be treated as expert practitioner theory, not as a peer-reviewed empirical finding.
- **External academic engagement is thin relative to the other two theories in the companion file.** Unlike meaningful play or the classic game model, this search pass did not surface substantial academic (as opposed to industry-blog/Medium-summary) critique of loops and arcs specifically — most secondary treatment found was explanatory/pedagogical restatement (sketchnotes, service-design adaptations of the loop/arc/terrain framing) rather than critical pushback. This may reflect the theory's status as practitioner craft-knowledge rather than academic ludology, or may simply mean a critique exists but wasn't surfaced before this session's search budget was exhausted — flagged here as a known gap rather than a claim that no critique exists.

---

## 6. Applying it: a concrete example

**Tetris**, Cook's own recurring example: the base skill atom is "rotate/move a falling piece into a target position" — Action (press rotate/move), Simulation (the piece's position/orientation updates, collision against the stack is checked), Feedback (the piece visibly moves/rotates, or is blocked), Modeling (the player updates their sense of how rotation and collision behave near the stack edges). Repeated passes through this atom build toward the higher-order skill of clearing a line, which chains multiple placement-atoms together (a skill chain: "place piece" atoms feeding into the composite skill "complete a row"). Within a single game, this is a **loop**: the player returns to the same placement decision every few seconds for the whole match, building real transferable "wisdom" about the piece set and the stack. Compare a hypothetical Tetris cutscene or one-off "first clear ever" celebratory animation shown only the first time a player clears a line — that's an **arc**: a single non-repeating payoff riding on the player's already-built mental model of what just happened, delivering a one-time emotional beat rather than teaching anything new or being revisited.

---

## Sources consulted

- Cook, D., "What are game mechanics?," lostgarden.com, Oct 24, 2006.
- Cook, D., "The Chemistry of Game Design," lostgarden.com, Jul 19, 2007 (syndicated on Gamasutra/Game Developer, gamedeveloper.com/design/the-chemistry-of-game-design).
- Cook, D., "Project Horseshoe 2007 slides: Smashing the Game Design Atom," lostgarden.com, Nov 17, 2007.
- Cook, D., "Project Horseshoe: Multiplayer Game Atoms," lostgarden.com, Feb 12, 2009.
- Cook, D., "Loops and Arcs," lostgarden.com, Apr 30, 2012.
- lostgarden.com tag index, "skill chains."

**Note on confidence:** Sections 1, 2.1–2.4, 2.6, and 3.1–3.4 are grounded in text extracted directly from lostgarden.com and its Gamasutra/Game Developer syndication. Section 2.5 (limits of the chemistry metaphor) and section 2.7 (the 2007 Project Horseshoe slide deck) rest on thinner source material — the underlying blog posts function more as announcements linking to external workshop reports/slides than as self-contained essays, so treat those two subsections as lower-confidence than the rest of the file. Section 5's claim about thin external academic engagement reflects the limits of this search pass, not a confirmed absence of such critique.
