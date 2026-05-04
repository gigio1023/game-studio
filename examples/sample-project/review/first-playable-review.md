# First Playable Review

## Subject

`M1 First Playable Proof`

## Proof Target

Prove that the player can shift one room rule, read the consequence, recover
from a blocked path, and exit the three-room chain.

## Build Reviewed

- build identifier: `M1-local-sample`
- platform: local browser
- input device: keyboard
- start command: none for sample

## Internal Evidence Artifacts Checked

| Artifact | Path or URL | What it shows |
| --- | --- | --- |
| Gameplay capture note | `evidence/m1-first-playable-capture-note.md` | The sample records the fictional external capture beats for the shift, blocked route, opened route, and exit. |
| QA walkthrough | `production/first-playable-proof-contract.md` | The proof path is defined. |
| Playtest note | `playtests/first-playable-note.md` | Player behavior and quote are separated from interpretation. |
| Evidence contract | `studio/evidence-contract.md` | Required artifacts and rejection criteria are listed. |

## Playable Loop Finding

```text
Verb -> read -> risk -> response -> learning -> next choice
```

The verb and response exist. The risk is visible after the player tries the
blocked route. Learning is partial because the opened route is easy to miss in
the first pass.

## First Minute Finding

The player used shift within 20 seconds but looked at the closed east route
longer than the newly opened north route. The first-minute read needs stronger
visual priority.

## Failure And Recovery

The blocked route did not end the session. Recovery exists, but the player
needed an extra loop around the room before noticing it.

## Review Roles

| Role | Verdict | Proof checked | Player impact | Required change |
| --- | --- | --- | --- | --- |
| Game Director | `CONCERNS` | Gameplay capture note | Core fantasy survives, but the first read is weak. | Increase visual priority of opened route. |
| Producer | `READY` | Contract and proof budget | Scope stayed bounded. | Keep M2 narrow. |
| UX Reviewer | `CONCERNS` | Playtest note | Player can recover, but only after avoidable scanning. | Add non-text cue for opened path. |
| QA Lead | `READY` | QA walkthrough | Proof path is repeatable. | Retest after readability change. |

## Final Verdict

`CONCERNS`

## Decision

`repeat proof`

## Next Proof

M2 should improve first-minute readability of the opened route and retest whether
the player recovers without facilitator help. The retest is defined in
`production/m2-readability-retest-contract.md`.
