# Game Studio

Portable agent skills for AI-assisted game development.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/agent%20skills-Claude%20Code%20%7C%20Codex%20%7C%20open%20format-111827)](skills/)

Game Studio is three skills that keep agent-built games honest: direction the
creator recognizes as theirs, production that advances one playable proof at a
time, and review that trusts play over prose. They follow the open
[Agent Skills format](https://agentskills.io), so the same files work in
Claude Code, Codex, Cursor, and any harness that reads `SKILL.md`.

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

## Install

From the target game repository, using the [skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add gigio1023/game-studio                       # choose skills interactively
npx skills add gigio1023/game-studio --skill game-review   # or install one
```

The CLI installs into Claude Code (`.claude/skills/`), Codex
(`.agents/skills/`), and other supported agents. Manual install works too:
copy `skills/<name>/` into your agent's skill directory. Each skill is
self-contained.

## How The Skills Think

- **A milestone is a proof, not a task list.** Plan the smallest build that
  retires the biggest uncertainty; never call a prototype a vertical slice.
- **The human owns taste.** Agents propose, compare, implement, and verify;
  concept selection, Direction Lock, and public promises stay with the
  creator.
- **Mechanical evidence is not playable proof.** Files existing, projects
  loading, and tests passing never stand in for a player performing the action
  and seeing the consequence.
- **Activity is not progress.** Long runs classify every step as playable,
  proof, support, or blocked — and support work gets a circuit breaker.

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
