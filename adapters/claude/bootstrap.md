# Claude Code Bootstrap

Use this file from a target game repository.

## Goal

Install Game Studio as project-local Claude Code guidance without a separate
command-line product. Claude should route the project before Direction Lock when
the user has not supplied stable direction.

## Session Start Rule

Begin Game Studio work by asking:

```text
Are we adopting an existing game direction, turning taste/references into a game
direction, or auditing an ambiguous existing project?
```

Then read `.game-studio/project-state.md` and its `entryMode` when present.

- `direction-carry-in`: preserve existing direction and audit missing proof.
- `taste-to-game`: elicit taste, preserve references, and compare a small
  concept slate before Direction Lock.
- `brownfield-unknown`: audit repo state and authority before generating or
  rewriting direction docs.

Claude may propose and compare concepts, but the human owns taste, selected
concept, Direction Lock, stage movement, and public promises.

## Steps

1. Classify entry mode with `game-onboarding` before assuming Direction Lock.
2. Select engine, scope, and genre profiles.
3. Copy `core/` into `.game-studio/core/`.
4. Copy `skills/` into `.claude/skills/`.
5. Merge `adapters/claude/CLAUDE.md.snippet` into the target `CLAUDE.md`.
6. Copy `docs/evidence-gates.md` into `docs/framework/evidence-gates.md` as
   internal artifact guidance; use proof-gate language in user-facing output.
7. Copy `docs/substantive-review.md` into `docs/framework/substantive-review.md`.
8. Copy or adapt `core/templates/` into project-facing docs.
9. Write `.game-studio/project-state.md` with entry mode, current stage,
   profiles, review mode, decision mode, and authority owner.
10. Keep source methodology in this framework repository; copy only project-local
   state and reusable skills into the target project.

## Review Modes

- `full`: major phase transitions and public release.
- `lean`: default for solo and small-team production.
- `solo`: low-risk internal iteration only.
