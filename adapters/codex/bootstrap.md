# Codex Bootstrap

Use this file from a target game repository.

## Goal

Install Game Studio as project-local guidance for Codex without
creating a separate CLI dependency. Codex should route the project before
Direction Lock when the user has not supplied stable direction.

## Session Start Rule

Begin Game Studio work by asking:

```text
Are we adopting an existing game direction, turning taste/references into a game
direction, or auditing an ambiguous existing project?
```

Route before production:

- `direction-carry-in`: preserve the existing direction, then audit missing
  proof.
- `taste-to-game`: elicit taste and create a small, comparable concept slate
  before Direction Lock.
- `brownfield-unknown`: audit the repo, notes, prototype, and authority before
  writing new direction docs.

Codex may propose and compare concepts, but the human owns taste, selected
concept, Direction Lock, stage movement, and public promises.

## Steps

1. Identify entry mode with `game-onboarding` before assuming Direction Lock.
2. Identify selected profiles:
   - engine: `profiles/engines/*.yaml`
   - scope: `profiles/scopes/*.yaml`
   - genres: `profiles/genres/*.yaml`
3. Create project directories if missing:
   - `.game-studio/`
   - `.game-studio/core/`
   - `.game-studio/milestones/`
   - `.game-studio/council/`
   - `docs/direction/`
   - `docs/framework/`
4. Copy `core/` into `.game-studio/core/`.
5. Copy `docs/evidence-gates.md` into `docs/framework/evidence-gates.md` as
   internal artifact guidance; use proof-gate language in user-facing output.
6. Copy `docs/substantive-review.md` into `docs/framework/substantive-review.md`.
7. Copy or adapt templates from `core/templates/` into project-facing docs.
8. Copy `skills/` into project-local `.codex/skills/` when the target Codex setup supports project skills.
9. Merge `adapters/codex/AGENTS.md.snippet` into the target project's
   `AGENTS.md`.
10. Write `.game-studio/project-state.md` with entry mode, current stage,
    profiles, review mode, decision mode, and authority owner.

## Default Install Choices

For a solo indie Godot project, use:

- engine: `godot`
- scope: `solo-indie`
- review mode: `lean`
- decision mode: `agentic`

## Do Not

- Add global dependencies.
- Create a standalone CLI unless the user explicitly requests it.
- Overwrite existing direction docs without preserving prior decisions.
- Lock direction, move stages, or make public promises without a human decision
  record.
