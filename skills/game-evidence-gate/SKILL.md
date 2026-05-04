---
name: game-evidence-gate
description: >
  Use when verifying whether a game milestone, prototype, vertical slice, demo,
  or release claim is backed by concrete evidence. Trigger on "evidence",
  "validation gate", "prove this works", "playable artifact", "release gate",
  and Korean equivalents.
version: 0.1.0
tags:
  - game-development
  - verification
  - evidence
---

# Game Evidence Gate

## Quick Start

1. Read the evidence contract.
2. Check each required artifact.
3. Run listed verification commands when available.
4. Distinguish missing evidence from failed evidence.
5. Return `READY`, `CONCERNS`, or `NOT_READY`.

## Evidence Standard

Good evidence is observable, reproducible, and linked to a milestone claim.

## Gotchas

- Screenshots do not prove gameplay by themselves.
- Passing tests do not prove game feel by themselves.
- Playtest notes without build identifiers are weak evidence.

## Reference Files

- `docs/evidence-gates.md`
- `core/templates/evidence/evidence-contract.md`
- `core/rubrics/playtest-rubric.md`

## Output Shape

```text
Verdict:
Evidence checked:
Missing evidence:
Failed evidence:
Residual risk:
Next gate:
```
