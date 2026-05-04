# Claude Code Bootstrap

Use this file from a target game repository.

## Goal

Install Game Studio as project-local Claude Code guidance without a separate
command-line product.

## Steps

1. Select engine, scope, and genre profiles.
2. Copy `core/` into `.game-studio/core/`.
3. Copy `skills/` into `.claude/skills/`.
4. Merge `adapters/claude/CLAUDE.md.snippet` into the target `CLAUDE.md`.
5. Copy `docs/evidence-gates.md` into `docs/framework/evidence-gates.md`.
6. Copy `docs/substantive-review.md` into `docs/framework/substantive-review.md`.
7. Copy or adapt `core/templates/` into project-facing docs.
8. Keep source methodology in this framework repository; copy only project-local
   state and reusable skills into the target project.

## Review Modes

- `full`: major phase transitions and public release.
- `lean`: default for solo and small-team production.
- `solo`: low-risk internal iteration only.
