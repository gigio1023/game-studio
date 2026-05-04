# Anti-patterns

## Task pile without direction

Symptoms:

- Many implementation issues exist.
- No one can explain the game in one sentence.
- Features are added because they are common in the genre.

Correction:

- Return to thesis, pillars, and player experience targets.

## Premature vertical slice

Symptoms:

- The project calls a milestone vertical slice before the core loop is proven.
- Visual polish hides missing gameplay proof.

Correction:

- Rename the milestone to Protocol Proof, Core Loop Prototype, or Presentation
  Value Gate.

## AI drift

Symptoms:

- Agents add systems that were not requested.
- Documents become larger but less executable.
- Reviews discuss style instead of evidence.

Correction:

- Require a milestone contract and evidence contract before implementation.

## Role theater

Symptoms:

- Many role names appear, but no role has authority.
- Reviewers do not produce verdicts.

Correction:

- Assign gate ownership and use strict verdict vocabulary.

## Build truth mismatch

Symptoms:

- README, store copy, or pitch promises features that the build cannot show.

Correction:

- Run release-promise gates against the actual build and evidence ledger.
