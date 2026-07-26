# Agile/Scrum Adapted for Game Development

## The canonical text: Clinton Keith, "Agile Game Development with Scrum"

The most-cited primary reference for applying Scrum specifically to games is
Clinton Keith's book *Agile Game Development with Scrum* (Addison-Wesley
Signature Series, ISBN 9780321618528). Keith is described as a game developer
with 15+ years of experience, including roughly seven years applying Scrum/
agile methods in production (WebSearch synthesis of publisher/retailer
listings, accessed 2026). Key claims attributed to the book:

- Sprint lengths in game studios are commonly **1, 2, or 3 weeks**, with **2
  weeks being the most common default**, and the book explicitly allows teams
  to change sprint length between sprint cycles as needed rather than
  locking it permanently (WebSearch synthesis of book-summary sources,
  accessed 2026).
- The stated goal of iterative sprints in a game context: get the game into
  a **playable state every two to four weeks — sometimes even daily** —
  rather than only at big milestone boundaries (same source).
- The book's framing, per marketing copy: bring "profitability, creativity,
  and fun back to game development" — i.e., it is explicitly a reaction
  against pre-agile, heavily front-loaded-spec, crunch-driven waterfall
  production in games (same source).

**Caveat:** this section is built from third-party summaries and retailer/
listing pages (Google Books, ebooks.com, AbeBooks, Goodreads, Amazon), not
from reading the book's text directly — treat sprint-length and other
specifics as reliably reported secondhand, not independently verified
against primary text in this pass.

## Sprint length and story points: the game-specific friction points

### Why "2 weeks" isn't the whole story

Clinton Keith, in a separate 2008 piece ("Beyond Scrum: Lean and Kanban for
Game Developers," GameDeveloper.com/Gamasutra, Nov 11, 2008), makes an
important qualification often missing from generic "just use 2-week sprints"
advice: **Scrum works well in pre-production's exploratory work, but becomes
a poor fit during production's asset pipeline.** His argument:

- Scrum assumes work items can be parallelized within a sprint. Production
  asset creation, by contrast, is often a **long, strictly sequential
  pipeline** — concept art → level layout → hi-res modeling → audio →
  tuning — where "tasks have to be finished in order and work must flow
  through in a predictable way." Forcing that pipeline into fixed-length
  Scrum sprints creates artificial batching and idle time.
- His proposed fix is **Lean/Kanban techniques layered onto or replacing
  Scrum during production**: a **Heijunka board** to visualize the full
  production stream across multiple states (surfacing bottlenecks a
  standard Scrum board hides), and **Takt time** to synchronize cycle times
  across pipeline stages so specialists aren't idling waiting on upstream
  work.
- Keith reports a concrete result from applying this: a production pipeline
  moving from **16-week level-production cycles down to weekly zone
  completion**, which he characterizes as a **56% improvement in production
  cost**. (Note: this figure is reported without a named studio or title in
  the source as fetched — treat as Keith's own consulting-derived claim, not
  an independently audited or publicly attributed case study.)

This is the seed of what several later sources call **"Scrumban"** for
games — a Scrum/Kanban hybrid. WebSearch synthesis (accessed 2026) reports
that mid-size to large studios (roughly 200–500 person productions) commonly
run "modified Scrum hybrids" at that scale, because pure Scrum's team-level
model doesn't natively provide cross-team coordination mechanisms needed once
a production has many interdependent disciplines and sub-teams — but no
single named large studio's internal Scrumban process was independently
confirmed as a citable case study in this pass.

### "Fun isn't a user story" — story points don't map cleanly to game feel

- **Rob Sandberg**, "Agile for Game Producers: Beyond Scrum" (Production
  Alchemist Substack, published Jun 5, 2026): argues Scrum-as-practiced
  breaks predictably in three game-specific places:
  1. **Creative work resists decomposition.** A task like "weapon feel pass"
     has no clean "definition of done" — it's iterative toward a felt
     quality, not toward a checkable spec. Sandberg's own framing: a weapon
     feel pass "doesn't [have a checklist]... You know it when it feels
     right."
  2. **Cross-discipline cycles don't share a rhythm.** Art, design, and
     engineering naturally iterate on different timescales, so forcing them
     into a shared sprint boundary is often artificial rather than genuinely
     synchronizing.
  3. **Unpredictable incoming demand resists time-boxing** — live-ops
     support and player-facing hotfix work don't fit neatly into a
     pre-committed sprint backlog.
  - Sandberg names the **"GDD anti-pattern"** as the most common failure
    mode: a studio keeps a fixed Game Design Document and treats it as fixed
    requirements while *claiming* to run Agile — which is structurally
    waterfall execution wearing Agile terminology. He also flags **"velocity
    gaming"** on creative work — teams learn to produce falsely precise
    story-point estimates for inherently unpredictable creative tasks, which
    erodes the signal velocity is supposed to provide.
- **Joost van Dongen** (Ronimo Games), "Why Scrum is fundamentally broken
  (but we still use it)" (personal blog, Mar 23, 2014): argues Scrum is
  excellent for internal communication and team empowerment but fails at its
  supposed core function — **hitting deadlines** — specifically because of
  Scrum's requirement that the product be "potentially shippable" after every
  sprint. Concrete failure modes he names:
  - **Console certification requirements** (error handling for a full hard
    drive, controller-unplug handling, etc.) would, if taken literally as
    Scrum's "shippable" bar demands, need to be implemented *first* — which
    would starve artists and designers of anything to build against early
    on. His practical resolution: gameplay programming has to take priority
    early, which means the game is **not actually "potentially shippable"**
    for most of development, contradicting textbook Scrum.
  - **Large, indivisible content items** — story cinematics are his example:
    rough/blocked animation can prototype early, but a shippable version
    needs finished animation. Mid-project, a game can be "technically
    shippable" by having half of its cinematics finished and half rough —
    which is not actually a usable state by any real definition of
    "shippable."
  - His summary framing: **"the goal of game development is not 'to finish
    a game' but 'to finish a good game'"** — and Scrum, built around
    incremental shippable-product theory, has no built-in mechanism for that
    quality bar, which is exactly why "fun" or "polish" resist being written
    as ordinary user stories.

### Crunch and sprint-commitment pressure

- General WebSearch synthesis (accessed 2026, no single strong named
  primary source located in this pass) reports that Scrum's visibility
  mechanisms (sprints, velocity tracking, backlog transparency) are
  sometimes credited with *reducing* crunch risk by surfacing schedule
  problems earlier than waterfall would — but that **late publisher-driven
  scope changes or platform-certification surprises can still force crunch
  regardless of process**, because Scrum's sprint commitment doesn't protect
  a team from externally imposed date-fixed obligations layered on top of
  it.
  - **Caveat:** this is a general synthesis claim, not tied to one named
    postmortem or GDC talk with a specific studio/title in this research
    pass — flagged explicitly as **weaker sourcing** than the Sandberg/van
    Dongen/Keith material above, which are all named, dated, individually
    attributable sources.
  - The tension is structurally real regardless of citation strength: Scrum's
    "the team commits to the sprint goal" norm, combined with a
    publisher-driven, date-fixed milestone contract on top of it (see
    `milestones-and-slices.md`), creates exactly the double-commitment
    structure practitioners point to when explaining why crunch persists
    even in "agile" studios — the team is nominally self-organizing sprint
    by sprint, but the outer milestone dates are not actually negotiable by
    the team.

## Milestone-driven publisher contracts vs. pure Scrum

This is the throughline connecting all three files in this set:
publisher-facing milestone contracts (First Playable, Alpha, Beta, Gold — see
`milestones-and-slices.md`) are fixed-date, fixed-scope-ish deliverables
negotiated **outside** the development team's Scrum process, then imposed
**on top of** it. This is close to definitionally in tension with Scrum's own
theory, in which the *team* — not an external contract — is supposed to
control sprint scope and the product owner re-prioritizes the backlog freely
sprint to sprint. Sources above capture the specific mechanisms of that
tension:

- Van Dongen (Mar 23, 2014): "potentially shippable every sprint" doesn't
  hold up against console cert requirements or large indivisible content
  items — meaning a milestone deliverable can look "done" by Scrum's
  internal definition while still failing the *actual* publisher milestone
  bar.
- Sandberg (Jun 5, 2026): the GDD-anti-pattern names the specific failure
  where a studio keeps the fixed design/scope document a milestone contract
  implies, while nominally claiming Scrum — the contract's fixed scope wins
  in practice, and the "Agile" label becomes decorative.
- Keith (Nov 11, 2008): production's pipeline-shaped nature — which is what
  most milestone-to-milestone work *is*, content production at scale — is
  structurally a poor fit for Scrum's parallelizable-backlog assumption,
  which is why he recommends Kanban/Lean specifically for the production
  phase, reserving Scrum-style sprints more for pre-production's genuinely
  exploratory work.

## Hybrid approaches

- **Scrumban**: the most consistently named hybrid across sources — Scrum's
  structure (roles, sprint cadence, retrospectives) combined with Kanban's
  pull-based flow and WIP limits, explicitly to handle production's
  pipeline-shaped work better than pure Scrum (Keith, Nov 11, 2008; general
  WebSearch synthesis on Scrumban, accessed 2026). Originally designed
  industry-wide (not games-specific) as a transitional framework for teams
  moving from Scrum toward Kanban.
- **Cerny's Method sitting "above" agile execution**: Method (see
  `cerny-method-and-preproduction.md`) is not itself a sprint-cadence
  framework — it's a phase-level doctrine (pre-production de-risks via a
  publishable first playable; production scales a proven recipe). Multiple
  sources' framing implies these operate at different altitudes and are
  commonly used together: **Method decides when you're allowed to leave
  pre-production and enter production; Scrum/Scrumban/Kanban governs how
  work moves week-to-week once you're in either phase.** No single source
  explicitly documents a named studio running "Cerny Method + Scrum" as a
  formal combined process — this is this document's synthesis of how the two
  bodies of practice fit together, not a directly sourced claim.

## Source-quality summary

- **High confidence, individually attributed and dated:** Joost van Dongen
  (Mar 23, 2014) and Clinton Keith's "Beyond Scrum" (Nov 11, 2008) — both
  are named practitioners writing in their own voice with specific,
  falsifiable claims and reasoning chains, not just repeating industry
  slogans.
- **Medium confidence:** Rob Sandberg's Production Alchemist piece (Jun 5,
  2026) — clearly named and dated, useful specific framing ("GDD
  anti-pattern," "velocity gaming"), but a newer/less independently
  cross-verified source than van Dongen or Keith.
- **Medium confidence, secondhand:** Clinton Keith's book claims
  (sprint-length norms) — reported via retailer/summary pages, not verified
  against the book's primary text in this pass.
- **Low confidence / general synthesis, not individually attributable:**
  the crunch-and-sprint-commitment-pressure claims, and the "200–500 person
  studios commonly run Scrumban" claim — both are WebSearch syntheses without
  a single strong named source, flagged accordingly above.
