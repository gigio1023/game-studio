# Production Dark Rituals

The current operating model in [Production Layer](../../production-layer.md)
describes clean stage progression. Real production includes harder moments
that the framework does not yet name. Add three rituals plus a deadline mode.

## Why Dark Rituals Matter

Production frameworks succeed when they help with the moments people would
rather avoid: killing a six-month prototype, cutting half a design under
deadline pressure, running parallel risk experiments without losing thesis,
compressing review when there is no time. Without these rituals, agents follow
a happy-path model and creators improvise alone in the hardest hours.

Each ritual below is small. The value comes from naming them as first-class
moves so the agent and the human have shared vocabulary when production turns
hard.

## Ritual 1: Concept Death Protocol

The system has `PARKED`, but parking is not killing. A killed concept must
record that it stops generating decision overhead.

Add to [Project State Model](../../../core/references/project-state-model.md)
a concept status `KILLED` distinct from `PARKED`.

Concept death protocol:

1. Name the proof that failed (or the proofs that kept failing).
2. State what the concept could not become inside the proof budget.
3. Record what the failed concept taught about taste, constraints, or risk.
4. Move artifacts to a `direction/killed/` archive instead of deleting them.
5. Return to entry routing if no live concept remains.

Triggers:

- Three consecutive proofs fail their target.
- The selected concept's first verb cannot be played in the proof budget.
- A required reference moment cannot be reproduced after two attempts.

## Ritual 2: Scope Crisis Ritual

Every ambitious project meets a moment when reality has outrun ambition. The
framework lists `cutCandidates` but does not show how to choose.

Scope crisis ritual:

1. List remaining proof targets.
2. For each target, name the largest uncertainty it would retire.
3. Compute the cheapest single proof that retires the largest uncertainty.
4. Cut everything that does not depend on the chosen proof or on Direction
   Lock.
5. Move cuts to `production/scope-cut-log.md` with reason and revisit
   condition.
6. Refuse to make a public promise until the kept proof passes a gate.

Triggers:

- Calendar capacity is below sixty percent of remaining proofs.
- A milestone keeps growing instead of shrinking week over week.
- Two consecutive milestones cut nothing.

## Ritual 3: Parallel Risk Retirement

Real indie production often runs more than one prototype at a time when the
risks are independent (mechanic, tone, technology). The framework currently
implies serial milestones.

Parallel rules:

- Risks must be named independently. If two risks share a verb or build, do
  not parallelize.
- Each parallel proof has its own milestone contract and proof budget.
- Reviewers stay shared. Conflicting verdicts route through council review.
- A successful parallel proof can advance without waiting for the others.
- A failed parallel proof can kill the whole concept only if the remaining
  proofs cannot reach the player promise.

## Deadline Mode

When a release pressure point is fixed, run a compressed gate path.

Compressed gate rules:

- Reduce the lean council to one director and one lead per active risk.
- Replace `READY` and `CONCERNS` with `SHIPPABLE` and
  `SHIPPABLE_WITH_KNOWN_LIMITS` for release-side decisions only.
- Promote `cutCandidates` and `risks` above scope expansion.
- Do not introduce new pillars or content categories.
- Lock public promise to current build truth.

Deadline mode is not the default and should not be used to skip core loop or
presentation value gates that have not yet passed. It compresses ceremony, not
proof.

## Files To Change

- Add `core/templates/production/concept-death-record.md`.
- Add `core/templates/production/scope-crisis-record.md`.
- Add `core/templates/production/parallel-risk-plan.md`.
- Update [Project State Schema](../../../core/schemas/project-state.schema.json)
  to add `KILLED` to the concept-status enum.
- Update [Stage Model](../../../core/workflows/stage-model.md) with deadline
  mode notes.
- Update [Coordination Rules](../../../core/roles/coordination-rules.md) with
  parallel review rules.

## Proof Of Improvement

A scenario passes the dark-rituals test when the framework can:

- declare a concept dead with a clear record and stop running proofs against it
- choose what to cut under fixed capacity using stated criteria
- run two prototypes in parallel without confusing reviewers
- compress the gate set under deadline without skipping core proof

S3 in [Stress Scenarios](10-stress-scenarios.md) should improve from about 55
percent to above 75 percent helpfulness once deadline mode and scope crisis
ritual exist.
