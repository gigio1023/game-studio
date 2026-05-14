# M2 Readability Retest Contract

## Source Verdict

`M1 First Playable Proof` ended with `CONCERNS`.

## Retest Target

Prove that the player notices the opened north route after shifting the room
without facilitator help.

## Required Change

Increase the visual priority of the opened route while keeping the proof scoped
to the same three-room chain.

## What Must Stay The Same

- selected concept: `Shifting Rooms`
- core verbs: move and shift
- build target: local browser sample
- proof scope: three rooms
- no tutorial prose required to explain the shift

## Retest Scenario

1. Start in room one.
2. Press shift.
3. Observe that the east route closes.
4. Notice the north route opens.
5. Move north and reach the exit.

## Planned Internal Evidence Outputs

These are outputs to create when the M2 retest is run. They are not present yet,
because this sample stops at the next proof contract.

| Artifact | Owner | Planned Path or URL | What it should prove |
| --- | --- | --- | --- |
| M2 build identifier | Technical Director | `M2-local-sample` | Reviewers know which retest build was inspected. |
| M2 capture note | QA Lead | `evidence/m2-readability-retest-capture-note.md` | The opened route cue is recorded as a reviewable internal capture note. |
| M2 retest note | Producer | `playtests/m2-readability-retest-note.md` | Player behavior is checked against the M1 concern. |
| M2 review update | Game Director | `review/first-playable-review.md` | The prior `CONCERNS` verdict is repeated, narrowed, or advanced. |

## Pass Criteria

| Claim | Pass Condition |
| --- | --- |
| Opened route is readable. | Player moves toward the opened north route before retrying the blocked east route more than once. |
| Recovery still teaches. | Player can describe that the shift both closed one path and opened another. |
| Scope stays bounded. | No new verb, room, inventory, story branch, or UI layer is added for the retest. |

## Failure Criteria

- Player still cannot identify what opened.
- The retest relies on tutorial prose rather than visual priority.
- The change adds scope outside the first playable proof.

## Exit Decision

`READY | CONCERNS | NOT_READY`

## Follow-Up

If M2 reaches `READY`, the creator may consider Direction Lock. If M2 remains
`CONCERNS`, narrow the visual language before adding content.
