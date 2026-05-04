# Game Studio

A director-first operating system for AI-assisted game development.

This repository is not a game generator. It is a reusable framework for leading a
game project from thesis to playable evidence while using Codex, Claude Code, or
similar coding agents as production collaborators.

The name is intentionally simple. The repository behaves like a small AI-assisted
studio kit: roles, gates, milestones, evidence, and project-local agent skills.

## What This Provides

- A stage model for game direction, pre-production, production, polish, and release.
- Director gates that force creative, technical, production, QA, and release review.
- Role rosters that can scale from solo indie to a larger team.
- Evidence contracts so agents must prove progress with playable artifacts.
- Project-local skills for Codex and Claude Code.
- Adapter snippets for `AGENTS.md` and `CLAUDE.md`.
- Templates for direction docs, milestone contracts, handoffs, reviews, and evidence.

## What This Is Not

- Not an autonomous game creator.
- Not a separate CLI product.
- Not a replacement for a game director, producer, designer, engineer, artist, or QA lead.
- Not a dumping ground for huge design documents that no one can execute.

The framework exists to make agents answer four questions before work drifts:

1. What game are we making?
2. What milestone are we trying to prove?
3. What evidence proves that the milestone is real?
4. Which role is allowed to approve the next step?

## Repository Layout

```text
core/
  gates/       Central gate prompts and verdict rules.
  workflows/   Stage model and workflow catalog.
  roles/       Role roster and coordination rules.
  rubrics/     Quality rubrics for docs, skills, milestones, and evidence.
  templates/   Copyable project artifacts.
  schemas/     Machine-checkable artifact shapes.

profiles/
  engines/     Godot, Unity, Unreal, and generic engine profiles.
  scopes/      Solo indie, small team, and studio operating modes.
  genres/      Genre-specific pressure and validation patterns.

skills/
  game-director/
  game-studio/
  game-execution/
  game-review-council/
  game-evidence-gate/

adapters/
  codex/       AGENTS.md snippet and Codex bootstrap instructions.
  claude/      CLAUDE.md snippet and Claude Code bootstrap instructions.

examples/
  sample-project/
```

## Quick Start: Codex

From your target game repository, ask Codex:

```text
Read /path/to/game-studio/adapters/codex/bootstrap.md and install
this framework for my game project. Select the appropriate engine, scope, and
genre profiles. Do not create a separate CLI.
```

Codex should copy or adapt:

- `core/templates/` into your project's `docs/` and `.game-studio/`.
- `skills/` into project-local `.codex/skills/`.
- `adapters/codex/AGENTS.md.snippet` into the project `AGENTS.md`.

## Quick Start: Claude Code

From your target game repository, ask Claude Code:

```text
Read /path/to/game-studio/adapters/claude/bootstrap.md and install
this framework for my game project. Use the appropriate engine, scope, and genre
profiles. Keep the framework project-local.
```

Claude Code should copy or adapt:

- `skills/` into `.claude/skills/`.
- `adapters/claude/CLAUDE.md.snippet` into `CLAUDE.md`.
- The selected stage, role, gate, and template files into the game repository.

## Recommended First Milestones

Do not start with "vertical slice" unless the core game is already proven.

Use this order for most new projects:

1. Direction Lock
2. Protocol Proof
3. Core Loop Prototype
4. 3D or Presentation Value Gate
5. Vertical Slice
6. Public Demo Candidate
7. Small Release Candidate

## Examples

The `examples/` directory contains fictional, generic sample artifacts only.
Examples must not depend on a private project, unreleased game, or user-specific
context.

## Credits

This repository is informed by common game production practice and by the
structure of `Claude-Code-Game-Studios` by Donchitos, which is MIT licensed.
See `NOTICE.md` for attribution.
