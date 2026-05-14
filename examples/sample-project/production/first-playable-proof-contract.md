# First Playable Proof Contract

## Selected Concept

`Shifting Rooms`

## Proof Target

Prove that the player can shift one room rule, read the consequence, recover
from a blocked path, and exit the three-room chain.

## Player Moment

The player shifts the first room, sees a path close, discovers another path
opened, and uses the new path to reach the exit.

## First Minute Learning

The player should learn that their action changed the space and that blocked
paths can be recovered from by observing the changed layout.

## Minimum Playable Loop

```text
Verb -> read -> risk -> response -> learning -> next choice
```

## Build Target

- engine or runtime: generic 2D browser runtime
- platform: local browser
- input device: keyboard
- build command: none for sample
- start command: none for sample

## Proof Budget

| Constraint | Budget | Cut Rule |
| --- | --- | --- |
| Calendar time | 5 days | Cut room three before adding systems. |
| Core verbs | move, shift | No inventory or dialogue choices. |
| Spaces or scenes | three rooms | No hub. |
| UI states | prompt, blocked, exit | No menu. |
| Art and audio | placeholder art, simple cue optional | Visual readability comes first. |
| Bug tolerance | no blockers in proof path | Defer cosmetic bugs. |
| Review time | one lean review | Add role only if risk appears. |

## Quality Floor

| Area | Minimum acceptable state | Capture required |
| --- | --- | --- |
| Input | Shift action responds immediately. | yes |
| Feedback | Door state visibly changes. | yes |
| Camera or framing | All relevant doors fit on screen. | yes |
| Visual hierarchy | Open, blocked, and exit states differ. | yes |
| Audio or non-audio cue | Non-audio visual cue is sufficient. | no |
| Failure and recovery | Blocked path leads to visible alternate route. | yes |
| Accessibility path | No timed input or color-only state. | yes |

## QA Walkthrough

1. Start in room one.
2. Press shift.
3. Attempt the now blocked east route.
4. Notice the north route opened.
5. Move north and reach the exit.

## Required Internal Evidence Artifacts

| Artifact | Owner | Path or URL | What it proves |
| --- | --- | --- | --- |
| Build identifier | Technical Director | `M1-local-sample` | The reviewed build is identifiable. |
| Gameplay capture note | QA Lead | `evidence/m1-first-playable-capture-note.md` | The sample records the shift and recovery beats without requiring a binary video. |
| Playtest note | Producer | `playtests/first-playable-note.md` | A player can or cannot read the moment. |
| Review verdict | Game Director | `review/first-playable-review.md` | Advancement decision is recorded. |

## Review Gates

- concept playability review
- first playable review

## Exit Decision

`CONCERNS`

## Next Proof

M2 should improve first-minute readability and retest recovery using
`production/m2-readability-retest-contract.md`.
