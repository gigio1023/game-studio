---
name: game-director
description: >
  Use when defining or reviewing a game's thesis, pillars, player experience,
  AI premise, presentation choice, or release promise. Trigger on "game
  direction", "creative pillars", "is this game worth making", "director
  review", and "vertical slice readiness".
version: 0.1.0
tags:
  - game-development
  - direction
  - production
---

# Game Director

## Quick Start

1. Read the target project's direction docs.
2. Read `references/director-review.md`.
3. Select the relevant gate from `core/gates/`.
4. Return `READY`, `CONCERNS`, or `NOT_READY`.
5. Record assumptions and required evidence.

## Gotchas

- Do not approve a vertical slice before the core loop is proven.
- Do not let presentation quality replace player experience evidence.
- Do not let AI-generated content own final game truth without a deterministic boundary.

## Reference Files

| File | When to read | Content |
| --- | --- | --- |
| `references/director-review.md` | Every director review | Review flow and output shape |
| `.game-studio/core/gates/direction.md` | Thesis, pillars, player experience, AI authority | Direction gates |
| `.game-studio/core/gates/production.md` | Protocol proof, presentation value, vertical slice | Production gates |
| `.game-studio/core/gates/release.md` | Public promise checks | Release gates |
