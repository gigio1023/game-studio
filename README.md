# Game Studio

A director-first operating system for AI-assisted game development.

Game Studio helps Codex, Claude Code, and similar agents work like a small game
team: direction first, milestones second, implementation last.

It is not a game generator. It is a project-local framework for roles, gates,
milestones, evidence, and agent skills.

![Game Studio maps a reusable framework into a target game repository and a production loop.](docs/assets/game-studio-system-map.drawio.png)

## What You Get

- A stage model from direction lock to release candidate.
- Gates for creative, technical, production, QA, and release review.
- Role profiles that scale from solo indie to studio work.
- Evidence contracts for playable proof.
- Project-local skills for Codex and Claude Code.
- Templates for direction, milestones, handoffs, reviews, and evidence.
- Source-backed role playbooks for game design, production, narrative, QA, accessibility, and craft review.

## What This Is Not

- Not an autonomous game creator.
- Not a separate CLI product.
- Not a replacement for a game director, producer, designer, engineer, artist, or QA lead.
- Not a dumping ground for huge design documents that no one can execute.

The framework keeps four questions visible:

1. What game are we making?
2. What milestone are we trying to prove?
3. What evidence proves that the milestone is real?
4. Which role is allowed to approve the next step?

## Install With Codex

From the target game repository, ask Codex:

```text
Read /path/to/game-studio/adapters/codex/bootstrap.md and install
this framework for my game project. Select the appropriate engine, scope, and
genre profiles. Do not create a separate CLI.
```

Codex copies or adapts:

- `core/` into your project's `.game-studio/core/`.
- `core/templates/` into project-facing docs when useful.
- `skills/` into project-local `.codex/skills/`.
- `adapters/codex/AGENTS.md.snippet` into the project `AGENTS.md`.

## Install With Claude Code

From the target game repository, ask Claude Code:

```text
Read /path/to/game-studio/adapters/claude/bootstrap.md and install
this framework for my game project. Use the appropriate engine, scope, and genre
profiles. Keep the framework project-local.
```

Claude Code copies or adapts:

- `core/` into `.game-studio/core/`.
- `skills/` into `.claude/skills/`.
- `adapters/claude/CLAUDE.md.snippet` into `CLAUDE.md`.
- The selected stage, role, gate, and template files into the game repository.

## Repository Map

- `docs/`: operating model and documentation style.
- `research/`: source-backed research reports that inform the framework.
- `research/continuity/`: handoffs for continuing framework work across devices.
- `core/references/`: compact craft and review references for agents.
- `core/gates/`: gate prompts and verdict rules.
- `core/roles/`: role packs and coordination rules.
- `core/workflows/`: stage model and workflow catalog.
- `core/templates/`: copyable project artifacts.
- `profiles/`: engine, scope, and genre profiles.
- `skills/`: project-local agent skills.
- `examples/`: fictional sample artifacts.

## Milestone Order

Do not start with "vertical slice" unless the core game is already proven.

Use this order for most new projects:

1. Direction Lock
2. Protocol Proof
3. Core Loop Prototype
4. Pre-production Exit
5. 3D or Presentation Value Gate
6. Vertical Slice
7. Public Demo Candidate
8. Small Release Candidate

## Start Here

- Read `docs/operating-model.md` for the production model.
- Read `docs/substantive-review.md` before asking Codex to judge quality.
- Read `docs/documentation-style.md` before editing docs.
- Use `core/references/codex-review-practice.md` for role-led review.
