# Stress Scenarios

Rubrics test rules. Scenarios test fit. Use four canonical user states to
stress-test Game Studio in any value review. Each scenario areas a different
weakness when the framework is incomplete.

## Why Four

Game Studio claims to serve creators across three entry modes plus a range of
fluencies. Four scenarios cover the typical cross-section: novice taste-only,
pre-vertical-slice indie team, deadline-pressed studio, and total beginner with
references only.

## The Four Scenarios

### S1: Solo Indie, Short Visual Novel

- Engine: Godot.
- Team: solo creator.
- Direction: short visual novel, tone undecided.
- Constraint: one-week first prototype.
- Mode: `taste-to-game`.

What this tests:

- Whether taste-to-game compresses to a real one-week proof.
- Whether the narrative-design workflow helps with content authoring time.
- Whether constraint ladder predicts content-volume risk.

### S2: Two-Person Team, Mixed Demo Reactions

- Team: two people.
- Direction: existing 3-minute itch demo with mixed feedback.
- Decision: next milestone is vertical slice or another short prototype.
- Mode: `brownfield-unknown`, escalating to `direction-carry-in`.

What this tests:

- Whether brownfield audit teaches diagnosis of mixed feedback.
- Whether the production model resists premature vertical slice.
- Whether the gate set distinguishes "iterate prototype" from "advance".

### S3: Studio, Publisher Demo Deadline

- Team: four people.
- Direction: existing core loop, weak `why are we making this`.
- Constraint: publisher demo in eight weeks.
- Mode: `direction-carry-in` plus deadline pressure.

What this tests:

- Whether director review forces re-commitment to the thesis under pressure.
- Whether the framework has a deadline-mode compressed gate path.
- Whether scope-cut reasoning is supported during release pressure.

### S4: Total Game-Dev Beginner

- Team: solo, never shipped a game.
- Direction: a list of five favorite games and reference moments.
- Mode: `taste-to-game` from absolute zero.

What this tests:

- Whether the intake avoids genre, engine, loop, and monetization too early.
- Whether reference moments are translated into design constraints, not
  mirrored into reference-mimicking concept slates.
- Whether the concept slate respects scope realism for a true beginner.

## Application Protocol

1. Read the scenario context out loud or in writing.
2. Predict what the framework should do in the first session and the next two
   sessions.
3. Run the prediction against the framework's actual outputs (route,
   artifacts, gates, stop conditions).
4. Score how much the framework helps versus how much the user must figure out
   alone.
5. Record one specific shortfall and one specific strength.

## Current Scores

These scores are a baseline for the next value review. They reflect the
framework as of the first value review and are estimates, not measurements.

| Scenario | Current Helpfulness | Strongest Move | Shortfall |
| --- | --- | --- | --- |
| S1 | About 60 percent | Constraint ladder compresses scope to one week. | Narrative-design area lacks content-time math. |
| S2 | About 50 percent | Premature-vertical-slice trap is well prevented. | Brownfield audit names symptoms but not diagnosis. |
| S3 | About 55 percent | Director review resists thesis drift. | No deadline-mode compressed gate set. |
| S4 | About 40 to 50 percent | Intake meets the user where they are. | Reference-moment translation lacks worked method. |

## What Each Scenario Reveals

- S1 reveals weak content-volume estimation in narrative work.
- S2 reveals weak audit-diagnosis depth in brownfield review.
- S3 reveals missing deadline-mode rituals.
- S4 reveals missing reference-translation method.

Three of the four shortfalls cluster around the same root cause: the framework
is structurally complete but lacks the move set that turns templates into
guided expert behavior. See [Craft Reference Curriculum](13-craft-reference-curriculum.md).

## Proof Of Improvement

After improvement work, re-run the scenarios and update the helpfulness
estimates. A dimension is improving when at least one scenario score increases
by 10 percent or more and the shortfall changes to a different problem. If
the shortfall stays the same, the fix did not address the underlying weakness.
