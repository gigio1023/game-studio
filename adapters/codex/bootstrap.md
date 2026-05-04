# Codex Bootstrap

Use this file from a target game repository.

## Goal

Install Game Studio as project-local guidance for Codex without
creating a separate CLI dependency.

## Steps

1. Identify selected profiles:
   - engine: `profiles/engines/*.yaml`
   - scope: `profiles/scopes/*.yaml`
   - genres: `profiles/genres/*.yaml`
2. Create project directories if missing:
   - `.game-studio/`
   - `.game-studio/core/`
   - `.game-studio/milestones/`
   - `.game-studio/council/`
   - `docs/direction/`
   - `docs/framework/`
3. Copy `core/` into `.game-studio/core/`.
4. Copy `docs/evidence-gates.md` into `docs/framework/evidence-gates.md`.
5. Copy `docs/substantive-review.md` into `docs/framework/substantive-review.md`.
6. Copy or adapt templates from `core/templates/` into project-facing docs.
7. Copy `skills/` into project-local `.codex/skills/` when the target Codex setup supports project skills.
8. Merge `adapters/codex/AGENTS.md.snippet` into the target project's
   `AGENTS.md`.
9. Write `.game-studio/director-state.md` with current stage, profiles, review mode, and decision mode.

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
