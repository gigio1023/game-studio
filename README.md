# Game Studio

AI-assisted game production framework for playable validation.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/agent%20skills-Codex%20%7C%20Claude%20Code-111827)](skills/)
[![Review Model](https://img.shields.io/badge/review-role--led-7C3AED)](docs/role-led-game-review.md)

Game Studio installs a project-local production layer for Codex or Claude Code.
It turns an existing direction, a creator's taste, or an ambiguous game repo
into one playable proof at a time, then routes the result through role review,
gate verdicts, and human-owned decisions.

<p align="center">
  <a href="docs/assets/readme-playable-validation.drawio.svg">
    <img
      src="docs/assets/readme-playable-validation.drawio.png"
      alt="Game Studio routes creator interview, existing direction, or brownfield audit into project-local state. That state drives first playable proofs, play checks, role review, gate verdicts, human decisions, and long-run control."
      width="100%"
    />
  </a>
</p>

## Use It When

- You have a game direction and need agents to preserve it while proving the
  next playable slice.
- You have taste, references, or philosophy, but not yet a stable game frame.
- You have an existing project and need to audit what is real before adding more
  direction.
- You want long Codex or Claude Code sessions to keep returning to playable
  progress instead of drifting into support work.

Game Studio can propose concepts, plan bounded prototypes, run role-led reviews,
and keep decision records current. It does not replace creator taste,
playtesting, milestone authority, or public-release judgment.

## Install In A Game Repo

From the target game repository, ask Codex or Claude Code:

```text
Read /path/to/game-studio/adapters/<codex|claude>/bootstrap.md and install
Game Studio for this project. Preserve any existing direction first. If no
stable direction exists, route me through taste-to-game discovery. Keep it
project-local.
```

The adapter copies the framework into the target repo, installs project-local
skills when supported, and writes `.game-studio/project-state.md` so future
agent sessions know the entry mode, stage, profiles, review mode, decision mode,
and authority owner.

## Operating Loop

```text
creator input or repo state
  -> project-local state
  -> first playable proof
  -> play check
  -> role review
  -> gate verdict
  -> human decision record
```

Long-running sessions use the same loop at smaller scale: one playable slice,
one narrow proof, one state update, then commit and push before changing
streams.

## What Gets Installed

| Path | Purpose |
| --- | --- |
| `.game-studio/` | Target-repo state, milestones, council notes, proof records, and handoffs |
| `.game-studio/core/` | Gate prompts, schemas, rubrics, role packs, references, and templates |
| `.codex/skills/` or `.claude/skills/` | Project-local game-production skills when the agent setup supports them |
| `docs/framework/` | Copied validation and role-review guidance for the target project |

## Start Here

| Need | Read |
| --- | --- |
| Choose the right entry route | [Entry Model](docs/entry-model.md) |
| Interview a creator before implementation | [Creator Interview Model](docs/creator-interview-model.md) |
| Run the production system | [Operating Model](docs/operating-model.md) |
| Control multi-slice agent sessions | [Long-Running Agent Control](docs/long-running-agent-control.md) |
| Review a playable prototype | [Role-Led Game Review](docs/role-led-game-review.md) |
| Check stage order | [Stage Model](core/workflows/stage-model.md) |
| Understand boundaries | [Product Boundary](docs/product-boundary.md) |
| Contribute | [CONTRIBUTING.md](CONTRIBUTING.md) |

## Repository Map

| Path | Purpose |
| --- | --- |
| `adapters/` | Codex and Claude Code bootstrap instructions |
| `core/` | Reusable production system copied into game repos |
| `docs/` | Product model, operating model, review guidance, and public docs |
| `skills/` | Agent skills for onboarding, interview, execution, review, evidence, and long-run control |
| `profiles/` | Engine, scope, and genre defaults |
| `evals/` | Fixtures for checking agent behavior |

## License

Game Studio is released under the MIT License. See [LICENSE](LICENSE) and
[NOTICE.md](NOTICE.md).
