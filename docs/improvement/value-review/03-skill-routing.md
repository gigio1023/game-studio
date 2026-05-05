# Skill Routing

The current skill set is directionally right, but several skills can trigger on
similar requests. Game Studio needs an explicit routing layer so agents choose
the right entry point and stop condition.

## Proposed Addition

Add a navigator skill:

```text
skills/game-navigator/SKILL.md
skills/game-navigator/references/routing-matrix.md
```

The navigator should not replace the other skills. It should decide which skill
or gate runs first.

## Routing Matrix

| User State | First Skill | Next Artifact | Stop Condition |
| --- | --- | --- | --- |
| No stable game direction, but taste exists | `game-onboarding` | Taste profile and concept slate | Concept selection needs the human. |
| Existing mandate, prototype, pitch, or task exists | `game-onboarding` | Direction carry-in audit | Direction change or stage move needs the human. |
| Repo exists but authority is unclear | `game-onboarding` | Brownfield unknown audit | Ownership conflict needs the human. |
| Direction exists and milestone is requested | `game-studio` | Milestone contract | Stage move needs the human. |
| Implementation is requested for an approved proof | `game-execution` | Work packages and handoff | Missing proof target blocks work. |
| Readiness is being judged | `game-review-council` | Council review | Human-owned decision blocks advancement. |
| Claim or release promise must be verified | `game-evidence-gate` | Proof review or release claim map | Missing proof returns `NOT_READY`. |
| Thesis, pillars, fantasy, or vertical slice is in question | `game-director` | Director review | Direction Lock needs the human. |
| Story, quests, dialogue, or narrative AI is in question | `narrative-director` | Narrative review | Canon or branch scope needs authority. |

## Current Overlap To Reduce

| Overlap | Problem | Improvement |
| --- | --- | --- |
| `game-director` and `game-studio` both review stage readiness. | Agents may run direction review when milestone proof is the issue. | Navigator routes direction questions to director and milestone questions to studio. |
| `game-review-council` and `game-evidence-gate` both inspect proof. | Agents may treat artifact presence as design readiness. | Evidence gate checks proof support; council judges player-facing consequence. |
| `game-onboarding` and `game-director` both handle missing direction. | Agents may force Direction Lock too early. | Missing direction always starts with onboarding. |
| `game-execution` can return verdict-like outcomes. | Implementation can blur into review authority. | Execution writes handoff; review skills decide readiness. |

## Output Contract

Every skill should use the same closure shape:

```text
Status:
Active skill:
Entry mode:
Current stage or concept status:
Proof target:
Human-owned decision:
Next skill or gate:
Terminal outcome:
```

`Terminal outcome` should use the schema vocabulary. `USER_DECISION_NEEDED`
should be a terminal outcome, not a gate verdict.

## Files To Change

- Add `skills/game-navigator/`.
- Add `core/references/skill-routing.md`.
- Update each `skills/*/SKILL.md` to point to the navigator when the request is
  ambiguous.
- Update `core/schemas/gate-verdict.schema.json` so terminal outcome and gate
  verdict are clearly separate.
- Update review templates so `USER_DECISION_NEEDED` is represented consistently.

## Proof Of Improvement

Create eval prompts where the correct first action is different:

- vague taste from a beginner
- existing prototype with missing proof
- request to implement before Direction Lock
- request to publish a demo claim
- request to call a prototype a vertical slice

The navigator passes when it picks the right skill, names the right stop
condition, and refuses human-owned decisions.
