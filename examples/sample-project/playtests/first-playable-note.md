# First Playable Playtest Note

## Build

`M1-local-sample`

## Research Question

Can the player understand that the shift changed the room and choose the
recovery route within the first minute?

## Proof Target

Shift, read consequence, recover, exit.

## Task Scenario

Start in room one, use the available interaction, and find the exit.

## Participant Profile

Puzzle-curious player, unfamiliar with the concept, keyboard input comfortable.

## Session Context

- session length: 4 minutes
- input device: keyboard
- prior familiarity: none
- facilitator: silent except for setup
- capture artifact: `evidence/m1-first-playable-capture-note.md`

## Observed Behavior

| Timestamp | Observation | Artifact path | Severity |
| --- | --- | --- | --- |
| 00:18 | Player pressed shift and watched the east door close. | `evidence/m1-first-playable-capture-note.md` | low |
| 00:34 | Player tried the blocked east route twice. | `evidence/m1-first-playable-capture-note.md` | medium |
| 00:52 | Player noticed the north route and exited. | `evidence/m1-first-playable-capture-note.md` | low |

## Metrics

| Metric | Value | Notes |
| --- | --- | --- |
| Completion | yes | Player reached exit. |
| Time to first action | 18 seconds | Within target. |
| Retries or failures | 2 blocked-route attempts | Recovery exists but read is weak. |
| Churn point | none | Player did not stop. |

## Participant Quotes

| Quote | Context | Related observation |
| --- | --- | --- |
| "I see that door closed, but I did not notice what opened." | After reaching exit. | Player missed north route at first. |

## Facilitator Inferences

| Inference | Supporting observation or metric | Alternative explanation |
| --- | --- | --- |
| Opened route needs stronger visual priority. | Two blocked-route attempts before recovery. | Player may have been testing whether blocked means locked. |

## Triangulation

| Finding | Observation | Metric | Interview | Evidence Strength |
| --- | --- | --- | --- | --- |
| First action is clear. | Player pressed shift quickly. | 18 seconds to first action. | No confusion quote. | pattern |
| Opened route is under-emphasized. | Player tried blocked route twice. | 52 seconds to recovery. | Player did not notice what opened. | high-confidence finding |

## Recommendations

| Recommendation | Severity | Decision | Owner | Retest Status |
| --- | --- | --- | --- | --- |
| Increase visual priority of opened route. | medium | fix before M2 retest | UX Reviewer | not_retested |
| Keep proof scope at three rooms. | low | accepted | Producer | not_retested |

## Recommended Gate Verdict

`CONCERNS`

## Next Proof

M2 should retest whether the player notices the opened route without facilitator
help using `production/m2-readability-retest-contract.md`.
