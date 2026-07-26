---
name: game-knowledge
description: >
  Use when a game question needs field knowledge rather than a process:
  "screen shake", "hit-stop", "juice", floaty or flat feel, camera complaints,
  pricing, wishlist numbers, Next Fest, store page and demo scope, finding
  playtesters, burnout, IP assignment and contractor agreements, localization,
  publishers, or the design theory behind a mechanic. Also use on first contact
  with a game project — project.godot, Assets/, *.uproject — and when a project
  is months old with no marketing, no playtesters, or no backups. NOT for
  defining direction (use game-direction), planning or implementing milestones
  (use game-production), or judging a build or a readiness claim (use
  game-review).
---

# Game Knowledge

Field knowledge delivered at the moment it matters: feel parameters, Steam
mechanics, launch math, legal and money basics, and the cases behind them.
Route from the symptom in front of you to one document, apply its rule, and
carry the source with the number.

## The Law

Rules that hold across projects, whatever the game is.

- Steam page live 6–12 months before launch; calendar time is unrecoverable.
- Wishlist-to-week-1 conversion runs ~18% median — size targets from that.
- Next Fest: register ~4 months ahead, demo 15–25 minutes, earn the player in
  the first 60–120 seconds.
- File existence is not play evidence; state the evidence level actually
  reached.
- The first game ships smaller than the real ambition.
- Written IP assignment before any contractor starts — artist, composer, anyone.
- Hobby-vs-business tax status changes at first revenue, not at launch.
- Missing backups are a project-ending risk, not an inconvenience.
- Budget burnout like technical risk: it has a schedule cost and a mitigation.
- One stranger playing unprompted for hours beats ten polite five-minute
  sessions.

## Moment Routing

Match what the session is actually doing to a signal, read that target, apply
the rule. Several rows can fire at once — read each one that fires; the targets
are short by design.

| # | Signal | Read | Load-bearing rule |
| --- | --- | --- | --- |
| 1 | New game project / "I have a game idea" / no direction artifacts | `references/cases/undertale.md` | First game smaller than your real ambition |
| 2 | Choosing concepts / writing pillars | `references/corpus/design-theory/mda-and-successors.md` | Pillars are testable promises |
| 3 | "continue / pivot / kill this?" | game-direction skill | Direction changes need a finished or killed milestone |
| 4 | "flat / floaty / punchy / juice / screen shake / hit-stop" | `references/corpus/feel-ux-audio-art/screenshake-hitstop-parameterization.md` | Fix input response before adding particles |
| 5 | Camera complaints / motion sickness | `references/corpus/gdc-postmortems/feel-talks.md` | — |
| 6 | Milestone planning / "what next" | `references/corpus/production-business-live/milestones-and-slices.md` | Milestone = hypothesis + playable proof + cut line |
| 7 | Long or overnight autonomous run starting | game-production skill, its long-run reference | Proof or fallback checked before the run ends |
| 8 | "is this done / playable / vertical slice" | game-review skill | Mechanical checks never stand in for played proof |
| 9 | Playtest planning / "no one to test it" | `references/cases/balatro.md` | Unprompted play-hours beat solicited praise |
| 10 | Demo / Steam page / Next Fest first mention | `references/release/store-page-and-demo.md` | Register ~4 months ahead; demo 15–25 min; first 60–120 s |
| 11 | Project 6+ months old, no marketing artifacts | `references/release/marketing-and-wishlists.md` | Page live 6–12 months pre-launch; calendar time is unrecoverable |
| 12 | "how much should it cost / price" | `references/release/pricing.md` | $15–20 modal polished-indie band; 50% off only after year one |
| 13 | First revenue / selling / tax mention | `references/business/legal-basics.md` | Hobby-vs-business triggers at first revenue, not launch |
| 14 | Contractor (artist / composer) about to start | `references/business/legal-basics.md` | No written IP assignment = you may not own your game |
| 15 | Burnout signals / months of grind | `references/cases/studio-practices.md` | Burnout is a project risk; budget it like technical risk |
| 16 | Localization / "which languages first" | `references/release/localization-decisions.md` | — |
| 17 | Publisher interest / pitching | `references/business/publishers-and-funding.md` | Publishers want quantified playtest validation, not promises |
| 18 | Fingerprint: project.godot / Assets/ + ProjectVersion.txt / *.uproject | game-production skill, its engine references | Name the exact check verbs before claiming "checked" |

## Consultation Protocol

- Read the routed target first. It is distilled to be applied, not browsed.
- Open `references/corpus/` deep files only when the distilled doc is not
  enough: a contested number, a mechanic the rule does not cover, an argument
  you have to reconstruct rather than repeat.
- Each corpus lane's `MANIFEST.md` carries per-file confidence and coverage.
  Check it before leaning on a corpus file, and keep the file's own inline
  flags — unverified, folklore, jurisdiction-dependent — attached to the claim
  when you repeat it.
- Give every number its source and date. When the corpus has no sourced number,
  say the evidence is missing instead of supplying a plausible one.
- Knowledge does not authorize action. Report the rule and what it implies;
  leave direction, scope, and verdict calls to the skills that own them.

## Companion Skills

game-direction owns direction and concept, game-production owns milestones and
implementation, game-review owns verdicts on finished work — this skill answers
their factual questions and never replaces their routes.
