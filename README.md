# Game Studio

Portable agent skills for AI-assisted game development.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/agent%20skills-Claude%20Code%20%7C%20Codex%20%7C%20open%20format-111827)](skills/)

Game Studio is three skills that keep agent-built games honest: direction the
creator recognizes as theirs, production that advances one playable proof at a
time, and review that trusts play over prose. They follow the open
[Agent Skills format](https://agentskills.io) and are designed for Claude Code,
Codex, Cursor, and other harnesses that read `SKILL.md`.

<p align="center">
  <a href="docs/assets/readme-playable-validation.drawio.svg">
    <img
      src="docs/assets/readme-playable-validation.drawio.png"
      alt="Game Studio routes creator taste, an existing direction, or an existing game repo through game-direction, game-production, and game-review to playable evidence and human-owned decisions."
      width="100%"
    />
  </a>
</p>

## Skills

| Skill | Use it for |
| --- | --- |
| [`game-direction`](skills/game-direction/SKILL.md) | Interview a creator, turn taste into a concept slate and creative brief, or adopt and audit an existing direction — ending in one first playable proof. |
| [`game-production`](skills/game-production/SKILL.md) | Plan milestones as playable proofs, implement without design drift, keep long autonomous runs pointed at the game, and apply Godot build discipline. |
| [`game-review`](skills/game-review/SKILL.md) | Review design, builds, narrative, accessibility, and release claims — evidence before opinion, strictest supported finding wins. |

## Install And Update

Install globally with the [skills CLI](https://github.com/vercel-labs/skills) so
the selected skills are available across game repositories:

```bash
npx skills add gigio1023/game-studio --global --skill '*' --agent claude-code codex --yes
npx skills add gigio1023/game-studio --global --skill game-review --agent claude-code codex --yes
```

Refresh the globally installed Game Studio skills with the same CLI:

```bash
npx skills update game-direction game-production game-review --global --yes
```

The CLI detects the current agent or asks which agent to target. Use explicit
`-a` flags when both Claude Code and Codex should share the global install.
Each skill remains self-contained, and distribution uses only `npx skills`.

## How The Skills Think

- **A milestone is a proof, not a task list.** Plan the smallest build that
  retires the biggest uncertainty; never call a prototype a vertical slice.
- **The human owns taste.** Agents propose, compare, implement, and verify;
  concept selection, Direction Lock, and public promises stay with the
  creator.
- **Mechanical evidence is not playable proof.** Files existing, projects
  loading, and tests passing never stand in for a player performing the action
  and seeing the consequence.
- **Activity is not progress.** Long runs classify material checkpoints as
  playable, proof, support, or blocked — and support work gets a circuit
  breaker.

See [Philosophy](docs/philosophy.md) for the full principles.

## Repository Map

| Path | Purpose |
| --- | --- |
| `skills/` | The three installable skills; each carries its own references. |
| `evals/` | Manual fixtures: behavior cases, trigger cases, and the three-way run protocol. |
| `research/foundations/` | Source-backed game-craft syntheses behind the skill references. |
| `docs/` | Philosophy, plain-language glossary, and README assets. |
| `tools/` | Repository validation script for contributors. |

## License

Game Studio is released under the MIT License. See [LICENSE](LICENSE) and
[NOTICE.md](NOTICE.md).
