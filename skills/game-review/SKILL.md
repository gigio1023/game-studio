---
name: game-review
description: >
  Use when reviewing game design, a playable build, a prototype, milestone or
  release readiness, narrative content, accessibility, or when verifying that a
  claim like "playable", "vertical slice", or "done" is backed by real play.
  Trigger on "review this game", "is this ready", "playtest findings", "does
  this build hold up", "narrative review", and release checks. NOT for defining
  a game's direction or concept (use game-direction) and NOT for planning or
  implementing work (use game-production).
---

# Game Review

Judge game work against what actually plays, not what the prose claims. A
review names the claim under review, checks the proof behind it first, then
applies the craft lenses the claim touches, and returns one verdict with the
artifacts it checked.

## Evidence Before Opinion

Start every review by locating the claim and its proof:

1. State the claim under review in one sentence (readable feel, taught level,
   covered branches, playable build, release-ready).
2. Check what exists: build, capture, playtest note, or a check you can run
   yourself. Read `references/evidence-and-release.md` for proof categories
   and the verification flow.
3. Separate missing proof from failed proof — they demand different verdicts
   and different next steps.

Mechanical evidence (files exist, project loads, tests pass) never stands in
for playable proof (a player performs the action and sees the consequence).
For engine build claims, require a real run — launch, scene load, smoke check,
capture — not file presence; the game-production skill carries engine-specific
check ladders if installed.

## Choose Lenses By Claim

Read only the references the claim touches:

| Claim involves | Read |
| --- | --- |
| A mechanic producing an intended experience | `references/mda.md` |
| Input, camera, feedback, responsiveness, recovery | `references/game-feel.md`, feel lens in `references/review-lenses.md` |
| Rooms, routes, teaching order, pacing | `references/level-flow.md`, level lens |
| Branching, quests, dialogue, story state | `references/storylets.md`, `references/narrative-review.md` |
| UI, onboarding, art readability, audio, accessibility | matching lenses in `references/review-lenses.md` |
| Player-centered walkthrough, design-intent drift | walkthrough and intent-survival lenses |
| Public promises, store copy, demo, release | `references/evidence-and-release.md` |

Independent lenses may run as parallel workers when the harness supports it;
running them sequentially in one pass is equally valid. Either way, keep each
lens's findings distinct.

## Verdict

Return exactly one of:

- `READY` — the work can advance.
- `CONCERNS` — it can advance only if the listed risks are accepted or fixed.
- `NOT_READY` — advancing would create false confidence, hide a missing core
  loop, or expand a public promise past the build.
- `USER_DECISION_NEEDED` — the next step is a human-owned call: taste, concept
  selection, Direction Lock, stage movement, or a public promise.

Do not average lenses or simulate consensus: preserve dissent, and let the
strictest finding that is supported by checked proof set the verdict. Separate
observation, quote, inference, severity, and confidence in qualitative
findings; style notes must not bury blockers.

## Output

```text
Claim under review:
Verdict: READY | CONCERNS | NOT_READY | USER_DECISION_NEEDED
Proof checked:
Missing proof / failed proof:
Findings (per lens, strictest first):
Required next proof:
Human decision needed:
```

## Gotchas

- Polish can hide missing recovery: juice and visual quality do not prove the
  player can read failure and get back to play.
- A level that tests before it teaches fails review even when it is beatable.
- Branch and quest claims need coverage and collapse rules, not sample
  transcripts.
- Screenshots do not prove gameplay; passing tests do not prove feel; a filled
  template or confident prose is not quality.
- Do not approve a vertical slice before the core loop is proven repeatable
  with readable success, failure, and recovery.
- Playtest notes without a build identifier are weak evidence; say so rather
  than treating them as ground truth.
