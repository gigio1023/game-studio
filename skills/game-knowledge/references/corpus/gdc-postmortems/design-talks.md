# Design Philosophy & Process Talks

Talks and one essay about *how designers decide what to build* — decision
theory, systems-first design philosophy, production methodology, and
narrative-structure theory. More abstract than the feel/craft talks, but
each pairs with a concrete process a solo or small team can adopt.

---

## Interesting Decisions

- **Speaker:** Sid Meier (Firaxis Games)
- **Venue / year:** GDC 2012 (keynote)
- **URLs:** GDC Vault — https://www.gdcvault.com/play/1015756/Interesting ·
  YouTube — https://www.youtube.com/watch?v=WggIdtrqgKg
- **Verification status:** Summary-only. No full transcript recovered;
  content below is triangulated from several independent recap articles
  (Game Developer / Gamasutra, The Escapist) that agree closely on
  structure, examples, and direct quotes.

### Core claims / framework

Meier revisits his own famous 1989 line — "a game is a series of
interesting decisions" — and works out what actually makes a decision
interesting, twenty-plus years later.

**Negative definition first.** He argues it's easier to define the
opposite: if a player always picks the first option, or picks randomly
because the options are indistinguishable, the decision isn't interesting.

**What makes a decision interesting (five properties):**
1. **Tradeoffs** — cost weighed against benefit (his example: an
   expensive sword vs. the same gold spent elsewhere).
2. **Situational** — the "correct" choice depends on current game state,
   not a fixed ranking of options.
3. **Personal** — the decision lets a player express their own playstyle
   rather than converging on one optimal answer.
4. **Persistent** — the choice has lasting consequences, not a
   momentary, forgettable branch.
5. **Risk vs. reward** — players must weigh a possible downside against a
   possible upside.

**Decision categories cited:** risk-vs-reward (near-universal across
genres); short-term vs. long-term (his example: build a chariot now vs. a
wonder later, in Civilization); playstyle customization (defensive vs.
aggressive builds); personal-investment choices (naming a city, picking a
color) — lower-stakes but still valuable for engagement.

**Design principles:**
- **Over-inform, don't under-inform.** Give players *more* information
  than feels strictly necessary so they understand consequences before
  committing — ambiguity kills interestingness rather than adding
  mystery.
- **Feedback is mandatory.** Direct quote: "the worst thing you can do is
  just move on." Every decision needs sound, visual, or textual
  acknowledgment that it registered.
- **Respect genre conventions.** Familiar interfaces lower the cognitive
  cost of a decision; deviating from expected behavior just adds
  confusion, not depth.
- **Borrow familiar context to save an explanation budget.** Historical
  settings or well-known tropes (his example: zombies) let players import
  outside knowledge instead of learning new context from scratch.

**Refinement / cutting.** Direct quote, describing their internal
process: "probably a third of the things that we try... end up getting
taken out." Ruthless cutting of decisions that don't hold up under actual
play is treated as normal, expected overhead, not failure.

**Comfortable choice count.** He suggests roughly **3-5 meaningful
choices** at a time is a comfortable range for a player to hold in mind
before a decision starts to feel like noise.

**Player archetypes.** Named types to design for simultaneously:
competitive players, genre fans, min-maxers, pessimistic players, history
buffs, and armchair designers — the point being that no single feedback
source (e.g., one vocal playtester type) should dictate a redesign,
because different archetypes want different things from the same
decision point.

### What problem it solves for a solo dev

Gives a checklist to run over an existing mechanic — "is this actually a
decision, or a foregone conclusion?" — and a concrete cutting heuristic
(expect ~1/3 attrition) that normalizes discarding content instead of
inflating scope to keep a bad idea.

---

## Truth in Game Design

- **Speaker:** Jonathan Blow (Number None; Braid, The Witness)
- **Venue / year:** GDC Europe, 2011 (free public lecture)
- **URL:** Game Developer coverage —
  https://www.gamedeveloper.com/design/gdc-europe-i-braid-i-s-blow-proposes-a-new-philosophy-of-game-design
- **Verification status:** Summary-only, single secondary source (no
  transcript located); treat specifics as directionally accurate rather
  than verbatim.

### Core claims

Blow's target is what he calls the default mode of design: "contemporary
game design is so often about dictating, rather than listening." In that
default mode, the designer starts from an idea and forces code and assets
to express it. He proposes the opposite model, using a sailing metaphor:
the designer is a captain steering a ship on a *voyage of discovery*
rather than an author creating something from nothing — authorship is
preserved, but the content comes from what the system reveals rather than
what the designer pre-decided.

**Braid as case study.** Direct quote: "more ideas came out of the
development process than I put into it as a designer." His account: he
started from one question — what happens if the player can rewind time
without limit? — then treated the system's own implications as the
content to discover and curate, rather than pre-scripting puzzle
solutions.

**The Witness as case study.** Design centers on treating the player as
intelligent and continuously asking what's actually going on in the
player's head at each moment, rather than what the designer intends to
communicate.

**The generalized claim.** "If you drill down far enough into any
mechanic you will eventually strike a fundamental truth" — a truth the
designer didn't invent, only uncovered by interrogating the mechanic's
own logic deeply enough. The practical technique implied: keep asking
"what does this rule actually imply?" past the first obvious answer.

### What problem it solves for a solo dev

An alternative to top-down content planning for systems-heavy or
puzzle-heavy games: instead of designing puzzles/levels from a spec,
build the core rule, then mine the rule itself for content by asking what
it implies. Most useful when a mechanic feels shallow — the prescription
is to interrogate it further rather than add new mechanics on top.

### Gap

The brief also asked for "The Witness design philosophy" as a separate
angle; no additional distinct GDC talk beyond this one and Blow's
IndieCade/Feature interviews (not conference talks) was found. Treat "The
Witness" material here as covered by this single talk plus adjacent press
interviews, not a second citable session.

---

## Mark Cerny's "Method"

- **Speaker:** Mark Cerny (Cerny Games; God of War, Crash Bandicoot,
  Spyro, PS4/PS5 lead architect)
- **Venue / year:** First presented publicly at the inaugural **D.I.C.E.
  Summit, 2002** — this is a D.I.C.E. talk, not a GDC talk (flagging this
  explicitly since the two venues are often conflated in secondary
  sources). Cerny has revisited and refined the material in later talks
  and slide decks over the following decade.
- **URLs:** Overview — https://iterative.co.nz/mark-cerny-method · Slides
  (partial visibility) — https://www.scribd.com/presentation/636445139/020913-Cerny-Method
- **Verification status:** Summary-only, corroborated across two
  independent secondary sources; the primary slide deck's full detail
  (percentages, exact milestone schedule) was not accessible through
  available mirrors — flagged as a gap below.

### Core claims

**Two phases, deliberately split, because they produce different
outputs.** Pre-production produces a *game design*; production produces
*a game*. Cerny argues these require fundamentally different working
modes, so treating them as one continuous process is the root cause of a
lot of troubled development:
- **Pre-production** = learning and prototyping. Exploratory, expected to
  change direction, not on a fixed schedule of feature delivery.
- **Production** = executing on what pre-production learned. Should be
  comparatively predictable once it starts, because the risky unknowns
  were supposed to be resolved already.

**"Publishable first playable."** The deliverable that ends
pre-production: a slice of the game built to *publishable quality* (not
necessarily *content-complete* — described as covering two levels, plus
whatever global systems are needed to make those two levels represent the
whole game) whose purpose is to test whether the game is actually fun
before committing the full production budget. Cerny's implied decision
rule: if this playable doesn't excite people, the project should be
killed or fundamentally rethought here, while the cost of doing so is
still small — not carried forward on the hope that production will fix a
design that isn't working.

**Myths challenged.** Sources agree the talk explicitly pushes back on
conventional assumptions in three areas — planning, technology, and
milestones — but the specific counter-claims for each weren't recoverable
from available secondary sources. What is recoverable: the method
argues against committing to detailed, fixed production plans before the
publishable-first-playable stage resolves the design's core unknowns, and
against selecting/committing engine or tech investments ahead of that
same milestone.

**Macro over micro.** Pre-production should resolve big, system-level
design questions (macro design) before iterating on small, local details
(micro design) — get the shape of the game right before polishing any
one piece of it.

**Stated benefits (publisher-facing framing, since this was pitched at a
mixed developer/publisher audience).** Lower cost of entry for a project,
tighter publisher/developer working relationship during the risky phase,
and more accurate schedules and budgets *because* they're set after the
big unknowns are resolved rather than before.

### What problem it solves for a solo dev

Directly useful as a stage-gate discipline: don't treat "build the whole
game" as one undifferentiated task. Build a small, ugly-but-functional
slice to publishable quality first, and make the explicit decision "is
this worth scaling up" before writing content at full scope. This maps
almost one-to-one onto the "vertical slice before full production" advice
that recurs across the indie postmortems in this corpus (A Short Hike,
Into the Breach).

### Gap

Exact pre-production budget/time percentages and the detailed myth-by-
myth breakdown were not recoverable from accessible sources — the primary
slide deck (37 pages per one listing) exists but wasn't fully readable
through the mirrors checked. Worth a follow-up pass if a future agent has
GDC Vault or Slideshare access.

---

## Choice, Consequence and Complicity

- **Speaker:** Alexis Kennedy (Failbetter Games — Fallen London, Sunless
  Sea; also wrote on Dragon Age: The Last Court)
- **Venue / year:** GDC 2016, Narrative Summit
- **URLs:** GDC Vault — https://www.gdcvault.com/play/1023346/Choice-Consequence-and
  · Internet Archive (video, no transcript) —
  https://archive.org/details/GDC2016Kennedy
- **Verification status:** Summary-only.

### Core claims

Practical narrative-design advice for maximizing emotional impact under
real budget and time constraints, drawn directly from Fallen London and
Sunless Sea war stories. Questions the talk works through: how much
consequence is actually enough in a game that claims to respond to player
choice; what makes a choice feel "real" to the player rather than
cosmetic; how to balance meeting player expectations against the delight
of genuine surprise; and how many branching choices is too many before a
narrative becomes unbudgetable. A recurring emphasis: prioritizing
opportunities for **player self-expression** over exhaustive branching,
since self-expression is far cheaper to build than true branching and
often reads as more meaningful to the player.

### What problem it solves for a solo dev

A budget-constrained alternative to full branching narrative: spend the
limited writing budget on choices that let the player project identity
onto their character, rather than on multiplying story branches, which
scale in cost much faster than they scale in perceived impact.

### Important scope note — not the same thing as a "storylets" talk

The original research brief for this file asked specifically for a
Failbetter "storylets / quality-based narrative" **talk**. That system —
storylets as atomic, reusable narrative units unlocked by numeric
"qualities" — is real and is Failbetter's own coinage, but **no GDC talk
specifically presenting the storylet/QBN system as a technical framework
was found.** The closest verified GDC session is this one (Kennedy, 2016),
which is about narrative choice design generally and doesn't appear to be
a storylet-mechanics deep dive based on available session descriptions.

The actual primary source for the storylet/quality-based-narrative
system is **Emily Short's blog**, not a GDC talk: "Beyond Branching:
Quality-Based, Salience-Based, and Waypoint Narrative Structures"
(https://emshort.blog/2016/04/12/beyond-branching-quality-based-and-salience-based-narrative-structures/,
June 2016, originally a Feral Vector talk) and "Storylets: You Want Them"
(https://emshort.blog/2019/11/29/storylets-you-want-them/). These define
storylets as "simple, atomic, robust, and recombinable" narrative units,
using Fallen London as the canonical example (many small arcs scattered
around the city, some as short as a single storylet). **Flagged as a gap
for this file's scope** (talks/postmortems specifically) — the QBN
theory itself belongs more naturally in the narrative/genre-theory lane
of this corpus project, not here, since it's an essay/blog framework
rather than a conference talk.

---

## Finishing a Game (essay)

- **Author:** Derek Yu (creator of Spelunky, Aquaria, curator of
  TIGSource)
- **Publication:** Essay originally published on TIGSource/Yu's own site,
  2010; later expanded into a chapter of *Spelunky* (Boss Fight Books
  #11, 2016). Not a talk — the research brief explicitly includes this as
  a written source in place of a conference talk.
- **Verification status:** Summary read from a detailed third-party
  recap/paraphrase (tusharvaghela.wordpress.com); the original hosted
  essay page returned 404 at the time of writing — worth re-checking or
  sourcing directly from the Boss Fight Books *Spelunky* text if a
  primary copy is needed later.

### Core claims / advice list

**Picking the idea.** Yu frames viable game ideas as needing to satisfy
three separate tests simultaneously — a game you *want to make*, a game
you *want to have made*, and a game you're actually *equipped to make*
— plus a hard resource constraint: do you actually have the time and
resources to finish it.

**Starting for real.** Direct-quote-level paraphrase: "writing your idea
down is not starting the damn game... writing a design document is not
starting the damn game." Only a playable prototype counts as having
started.

**Tooling.** Don't build custom engines unless you have to — Yu built the
original *Spelunky* in GameMaker, which is what made the later Xbox 360
port feasible at all.

**Prototype before committing.** Test the core idea immediately, so flaws
or better directions surface before resources are sunk into content.

**Core loop first.** Since the player repeats the core interaction more
than anything else in the game, that interaction has to be fun in
isolation before anything else is built around it.

**Team compatibility.** When picking collaborators, evaluate personality,
dedication, and timing — not just whether skills are complementary — and
test a partnership on something small before committing to something
large.

**Budget for the unfun 90%.** Explicitly plan time for menus,
transitions, save systems, and other necessary-but-not-fun infrastructure
— it's real time that gets consistently underestimated.

**Use externally real deadlines.** Competitions and festivals are
recommended specifically because they force scheduling realism and force
hard cut decisions that self-imposed deadlines don't reliably force.

**When stuck, move forward, not sideways.** If a section isn't working,
advance to the next section rather than endlessly polishing the current
one — momentum matters more than local perfection.

**Physical health as a production variable.** Sleep, exercise, and diet
are named directly as factors that prevent productivity collapse and
depression during a long solo project — not treated as separate from the
production advice, but as part of it.

**Don't restart.** Direct-quote-level paraphrase: "your code will always
be a mess. You will have learned a lot. It will never be perfect."
Restarting from scratch repeats the same mistakes under a new name rather
than solving them.

**Defer new ideas.** Good ideas that show up mid-project should be
written down for the *next* project, not folded into the current one.

**Cut ruthlessly under constraint.** Limited time/resources should be
treated as a forcing function for better decisions, not an obstacle —
when behind schedule, strip back to the core concept rather than
cutting corners across the board.

**Scale down after a failed project, don't scale up.** If a project gets
abandoned, the natural instinct to make the next one bigger to
"compensate" is specifically called out as the wrong move — go smaller
to rebuild the finishing habit.

**The last-10%-is-90%-of-the-work rule.** Explicitly named: the final
stretch of details and polish takes disproportionate time relative to
how small it looks on a task list, but it's also what makes a finished
game feel finished.

**Why finishing matters beyond the one game.** Yu frames finishing itself
as a trainable skill, and argues the reputation, confidence, and
practical knowledge gained from completing *any* game — even a small one
— compounds into every subsequent project.

### What problem it solves for a solo dev

This is the single most load-bearing scope-discipline reference in this
corpus for solo/small-team devs specifically — it's less about what to
build and entirely about the meta-skill of getting something across the
finish line, which is the actual failure mode for most unfinished solo
projects (not lack of ideas, lack of completion discipline).
