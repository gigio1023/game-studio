---
name: game-knowledge
description: >
  Use when a game question needs field knowledge rather than a process:
  "screen shake", "hit-stop", "juice", floaty or flat feel, camera complaints,
  pricing, wishlist numbers, Next Fest, store page and demo scope, finding
  playtesters, burnout, IP assignment and contractor agreements, localization,
  publishers, or the design theory behind a mechanic. Also use on first contact
  with a game project — project.godot, Assets/, *.uproject, or a package.json
  with three/phaser/babylon — and when a project
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

- Put the Steam page up early: wishlist accrual takes calendar time, the New
  Releases Queue fires once, and calendar lead time is unrecoverable. No
  verified month-count exists — the mechanic is the law, not a number.
- Wishlist→week-1 sales: median ~10.5% (2024); ~17% for launches above 10k
  wishlists. Real spread is "10–20x, not 10–20%" — no single ratio plans a
  launch.
- Next Fest: registration deadlines run ~7–8 weeks before the event, and a
  demo live ~4 weeks early earns ~2.5x the wishlists of a fest-start demo.
- File existence is not play evidence; only a run that shows the action and
  its consequence is.
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
| 2 | Choosing concepts / writing pillars | `references/corpus/design-theory/mda-and-successors.md` (interim; stage-2 target: a distilled direction doc) | Design mechanics from the target aesthetic backward — the player meets aesthetics first |
| 3 | "continue / pivot / kill this?" | game-direction skill | Direction changes need a finished or killed milestone |
| 4 | "flat / floaty / punchy / juice / screen shake / hit-stop" | `references/corpus/feel-ux-audio-art/screenshake-hitstop-parameterization.md` (interim; stage-2 target: a distilled feel doc) | Drive shake from one trauma value in [0,1]; shake amount = trauma² — never linear |
| 5 | Camera complaints / motion sickness | `references/corpus/gdc-postmortems/feel-talks.md` | — |
| 6 | Milestone planning / "what next" | `references/corpus/production-business-live/milestones-and-slices.md` (interim; stage-2 target: a distilled production doc) | No industry-standard milestone definitions exist — define alpha/beta/done in writing per project |
| 7 | Long or overnight autonomous run starting | game-production skill, its long-run reference | Build or fallback checked before the run ends |
| 8 | "is this done / playable / vertical slice" | game-review skill | Mechanical checks never stand in for played evidence |
| 9 | Playtest planning / "no one to test it" | `references/cases/balatro.md` | Unprompted play-hours beat solicited praise |
| 10 | Demo / Steam page / Next Fest first mention | `references/release/store-page-and-demo.md` | Registration deadline ~7–8 weeks out; a demo live ~4 weeks early earns ~2.5x |
| 11 | Project 6+ months old, no marketing artifacts | `references/release/marketing-and-wishlists.md` | Calendar lead time is unrecoverable; wishlist velocity, not raw count, feeds Discovery |
| 12 | "how much should it cost / price" | `references/release/pricing.md` | Only ~5% of Steam prices exceed $20; Valve's own launch-discount suggestion is 10–15% |
| 13 | First revenue / selling / tax mention | `references/business/legal-basics.md` | Hobby-vs-business triggers at first revenue, not launch |
| 14 | Contractor (artist / composer) about to start | `references/business/legal-basics.md` | No written IP assignment = you may not own your game |
| 15 | Burnout signals / months of grind | `references/cases/studio-practices.md` | Burnout is a project risk; budget it like technical risk |
| 16 | Localization / "which languages first" | `references/release/localization-decisions.md` | — |
| 17 | Publisher interest / pitching | `references/business/publishers-and-funding.md` | Publishers want quantified playtest validation, not promises |
| 18 | Fingerprint: project.godot / Assets/ + ProjectVersion.txt / *.uproject | game-production skill, its engine references | Name the exact check verbs before claiming "checked" |
| 19 | Fingerprint: package.json with three / phaser / babylon / pixi, or index.html + canvas | game-production skill, its web build guide | The browser makes verification cheap and supplies no engine — a camera rig or save system is a milestone, not setup |
| 20 | Shipping an update / writing patch notes / "which version are players on" | game-production skill, its release-ledger guide | A version names a release players received, never a commit; prove the live build reports it |

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
  leave direction, scope, and sign-off calls to the skills that own them.

## Companion Skills

game-direction owns direction and concept, game-production owns milestones and
implementation, game-review owns sign-offs on finished work — this skill
answers
their factual questions and never replaces their routes.
