# Claude Code Bootstrap

Use this file from a target game repository.

## Goal

Install Game Studio as project-local Claude Code guidance without
requiring a separate command-line product.

## Steps

1. Select engine, scope, and genre profiles.
2. Copy `skills/` into `.claude/skills/`.
3. Merge `adapters/claude/CLAUDE.md.snippet` into the target `CLAUDE.md`.
4. Copy or adapt `core/templates/` into `.game-studio/` and `docs/direction/`.
5. Keep source methodology in this framework repository; copy only project-local
   state and reusable skills into the target project.

## Review Modes

- `full`: major phase transitions and public release.
- `lean`: default for solo and small-team production.
- `solo`: low-risk internal iteration only.
