# Evidence Contract Example

This is an internal artifact ledger for `M1 First Playable Proof`.

## Milestone

M1 First Playable Proof

## Proof Target

Prove that the player can shift one room rule, read the consequence, recover
from a blocked path, and exit the three-room chain.

## Evidence Required

| Evidence Artifact | Owner | Path or URL | Artifact Type | Pass Criteria |
| --- | --- | --- | --- | --- |
| Build identifier | Technical Director | `M1-local-sample` | build | Reviewers know which build was inspected. |
| Gameplay capture note | QA Lead | `evidence/m1-first-playable-capture-note.md` | capture note | The note labels the fictional external capture placeholder and records shift, blocked route, opened route, and exit beats. |
| Playtest note | Producer | `playtests/first-playable-note.md` | playtest note | Observation, metric, quote, and inference are separated. |
| Review verdict | Game Director | `review/first-playable-review.md` | review | The proof receives a `READY`, `CONCERNS`, or `NOT_READY` verdict. |

## Evidence Classes

- Implementation evidence: build identifier and repeatable local run path.
- Design evidence: first playable proof contract and concept playability review.
- Player evidence: playtest note and gameplay capture note.
- Accessibility evidence: no timed input and no color-only state in the proof.
- Release evidence: none, because there is no public promise yet.

## Build Identifier

`M1-local-sample`

## Scenario

Player shifts the room, encounters a blocked route, notices the opened route,
and exits.

## Participant Or Reviewer Profile

One puzzle-curious player unfamiliar with the concept.

## Capture Requirements

| Capture | Required Format | Path or URL | What it must document |
| --- | --- | --- | --- |
| First playable capture note | markdown | `evidence/m1-first-playable-capture-note.md` | Fictional external capture placeholder, shift action, visible consequence, recovery, and exit. |
| Review note | markdown | `review/first-playable-review.md` | Role verdicts and next proof. |

## Retest Status

Retest required after readability change.

## Build or Run Command

```bash
# sample documentation only
```

## Manual Checks

- Player can trigger shift.
- The east route becomes blocked.
- The north route becomes available.
- Player can recover and exit.

## Rejection Criteria

- The consequence is only described in prose.
- The player cannot repeat the action.
- The player cannot recover from the blocked route.
- The proof depends on undocumented manual setup.

## Review Gate

First playable review.

## Next Proof

M2 readability retest defined in
`production/m2-readability-retest-contract.md`.
