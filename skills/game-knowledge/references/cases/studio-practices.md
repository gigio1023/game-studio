# Studio Practices — burnout, cadence, and feedback loops

- Rule: burnout is a project risk. Budget it like technical risk, with named policies and a schedule cost.
- Supergiant (Amir Rao): no work email after 5pm Friday, mandatory downtime between titles, roughly a 3-year cadence per title, small core team.
- Hades Early Access: monthly milestones split into three phases — code-open, code-locked/data-open, then test-fix-polish.
- Hades published its committed update dates on the game's main menu as public accountability.
- Slay the Spire: a Slack channel fed by a metric server, weekly updates, plus Discord and streamers read as separate signal channels.
- Crunch is described across Schreier's reporting as backed into via optimistic estimation plus sunk-cost momentum, never chosen.

## Basics

**Burnout gets budgeted or it gets paid for anyway.** The pattern documented
across these sources is that crunch is not a decision anyone makes — it is what
optimistic estimation plus sunk-cost momentum produces when nothing in the plan
prevents it. That makes it a scheduling property, not a willpower problem, and
the countermeasures are correspondingly structural.

**Supergiant's policies are the concrete template**, because each one is
falsifiable rather than aspirational:

- Hard communication boundary: no work email after 5pm Friday.
- Enforced downtime between titles, rather than downtime if the schedule allows.
- An accepted slower cadence — roughly three years per title — as the price of
  not burning people out.
- A small core team, kept small deliberately.

The transferable shape for a solo developer is the same: a boundary that is a
rule rather than an intention, recovery time scheduled before it is needed, and
a cadence chosen with the recovery time already inside it.

**Derek Yu names physical health as a production variable.** Sleep, exercise,
and diet appear in "Finishing a Game" as part of the production advice, not
separate from it — specifically as what prevents productivity collapse and
depression during a long solo project. Same file also carries two scheduling
facts that cause overrun: the unfun 90% (menus, transitions, save systems) is
real time that gets consistently underestimated, and the last 10% of polish
takes disproportionate time relative to how small it looks on a task list.

## Advanced

**Monthly milestone cadence with an internal code-lock (Hades).** Supergiant ran
monthly milestones structured in three phases: an early phase where major code
changes were permitted; a mid phase where code locked but data-driven content
(narrative text, voice-over, event definitions) could still change; and a late
phase for testing, bug-fixing and polish before the public update. Two supporting
choices made this sustainable:

- **Narrative decoupled from code**, so story beats could ship without a full
  rebuild — the specific technical decision that made monthly content updates
  affordable across a year-plus Early Access run.
- **One storefront first** (Epic Games Store) rather than simultaneous
  multi-platform updates, trading reach for update velocity and quality control.
  Team was under 20 people.

**Publishing your own dates as a discipline mechanism.** Committed update dates
were displayed on the game's main menu, visible to every player. This is the
same mechanism as A Short Hike's external funding deadline
([a-short-hike.md](./a-short-hike.md)) reached by a different route: make the
date owned by someone outside your own head.

**Cheap feedback infrastructure (Mega Crit).** Slay the Spire's balance process
ran on a Slack channel fed by a basic metric server — not an analytics stack —
sustained from early development through the whole Early Access period rather
than saved for a late balancing pass. Giovannetti explicitly warned that metrics
mislead when read without contextual judgment, and the process deliberately
mixed channels: aggregate data, Discord community feedback, ascension levels as
a read on skilled players, and streamer play as a distinct channel that surfaces
failure modes (stalling, confusing UI moments) which win-rate data does not
capture.

**The narrative-versus-difficulty tension, named.** Kasavin: "there's nothing
more frustrating in games where you're really engaged with the story, but then
you hit a difficulty wall and can't make any more progress." Relevant to any
project pairing a hard loop with a story players are meant to stay invested in
across failures.

**Where this file is thin.** The named GDC talk specifically about solo and
side-project burnout — Laralyn McWilliams, "Battling Burnout: The Side Project
Ritual," GDC Summer 2020 — was identified in the research pass but never
fetched or digested. Its content is **not** represented here. If burnout is the
live topic for a project, that talk is the first gap worth closing.

## Cases

- [stardew-valley.md](./stardew-valley.md) — the personal cost of near-total
  creative control over a four-and-a-half-year cycle.
- [animal-well.md](./animal-well.md) — recognising when a solo developer needs
  outside help.
- [a-short-hike.md](./a-short-hike.md) — externally owned deadlines as the same
  accountability mechanism at solo scale.
- [balatro.md](./balatro.md) — the qualitative signal that precedes any of this
  process being worth running.

## Checklist

- [ ] Name one communication or work boundary that is a rule, not an intention.
      When was it last broken?
- [ ] Is recovery time scheduled *before* the milestone that will require it?
- [ ] Does the cadence you have committed to include that recovery time, or
      does it assume continuous output?
- [ ] Is there a point in each milestone where changes lock, so the final phase
      is testing rather than building?
- [ ] Have you budgeted the unfun 90% (menus, transitions, saves) and the
      last-10%-is-90% polish tail as real, estimated line items?
- [ ] Does anyone outside your head know your next committed date?
- [ ] Are you reading more than one feedback channel, or trusting one number?

## Sources

- Amir Rao / Supergiant Games, in Kotaku, *No Forced Crunch, Yes Forced
  Vacations* (the secret to the success of Bastion, Pyre and Hades).
  https://kotaku.com/the-secret-to-the-success-of-bastion-pyre-and-hades-1838082618
  — accessed 2026-07-26. Developer-sourced reporting with specific, falsifiable
  policy claims.
- Greg Kasavin, *GDC Podcast ep. 16: Roguelikes and Narrative Design with
  Hades' Creative Director*.
  https://gdconf.com/article/roguelikes-and-narrative-design-with-hades-creative-director-greg-kasavin-gdc-podcast-ep-16/
  — accessed 2026-07-26. A podcast interview, not a conference session.
- Game Developer, *Supergiant's fourth outing Hades introduces a more mature,
  organized dev process*.
  https://www.gamedeveloper.com/design/supergiant-s-fourth-outing-i-hades-i-introduces-a-more-mature-organized-dev-process
  — accessed 2026-07-26. Source of the monthly-milestone-phase claims,
  corroborated with the podcast.
- Anthony Giovannetti, *'Slay the Spire': Metrics Driven Design and Balance*,
  GDC 2019. https://www.gdcvault.com/play/1025731/-Slay-the-Spire-Metrics —
  accessed 2026-07-26. Summary-only across three secondary sources; **no
  concrete metric values were recovered** — the design-philosophy claims are
  solid, the absence of numbers is a real gap.
- Derek Yu, *Finishing a Game* (2010; expanded in *Spelunky*, Boss Fight Books
  #11, 2016). Original page returned 404 on 2026-07-26; digested from a
  third-party paraphrase — see `../corpus/gdc-postmortems/design-talks.md`.
  Marked unverified against the primary text.
- Jason Schreier, *Blood, Sweat, and Pixels* (HarperCollins, 2017). The
  crunch-as-backed-into pattern and "success does not validate the process" are
  reconstructed synthesis in `../corpus/canon-map/blood-sweat-pixels.md`, not
  quotations — not quotable.
- Laralyn McWilliams, *Battling Burnout: The Side Project Ritual*, GDC Summer
  2020. Named in the 2026-07-26 research pass but **not fetched or digested**;
  marked unverified and unrepresented above.
- Corpus digests: `../corpus/gdc-postmortems/postmortems-roguelike-strategy.md`,
  `../corpus/gdc-postmortems/design-talks.md`.
