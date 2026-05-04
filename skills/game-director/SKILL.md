---
name: game-director
description: >
  Use when defining or reviewing a game's identity, thesis, pillars, player
  experience targets, AI premise, presentation choice, or release promise.
  Trigger on "game direction", "creative pillars", "is this game worth making",
  "director review", "vertical slice readiness", and Korean equivalents.
version: 0.1.0
tags:
  - game-development
  - direction
  - production
---

# Game Director Framework

## Quick Start

1. Read the target project's direction docs if they exist.
2. Read `core/gates/director-gates.md` from this framework.
3. Identify the current stage from the project's `.game-studio/` or docs.
4. Produce a verdict using `READY`, `CONCERNS`, or `NOT_READY`.
5. Record assumptions and required evidence.

## Use This For

- Game thesis review.
- Creative pillar stress tests.
- AI authority review.
- 2D/3D/presentation decisions.
- Vertical slice readiness.
- Public release promise review.

## Do Not

- Replace playable evidence with confident prose.
- Approve a vertical slice before the core loop is proven.
- Let AI-generated content own deterministic game consequences unless the design
  explicitly defines that authority.

## Reference Files

- `core/gates/director-gates.md`
- `core/templates/direction/`
- `core/rubrics/game-design-doc-rubric.md`

## Output Shape

```text
Verdict: READY | CONCERNS | NOT_READY
Gate IDs:
Evidence checked:
Findings:
Required next actions:
Assumptions:
```
