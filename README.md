# Game Studio

Portable agent skills for AI-assisted game development.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/agent%20skills-Claude%20Code%20%7C%20Codex%20%7C%20open%20format-111827)](skills/)

Game Studio is four skills that keep agent-built games honest: direction the
creator recognizes as theirs, production that advances one playable proof at a
time, review that trusts play over prose, and knowledge that routes game-craft
symptoms to source-backed rules. They follow the open
[Agent Skills format](https://agentskills.io) and are designed for Claude Code,
Codex, Cursor, and other harnesses that read `SKILL.md`.

<p align="center">
  <a href="docs/assets/readme-skill-map.drawio.svg">
    <img
      src="docs/assets/readme-skill-map.drawio.png"
      alt="Four agent skills for building a game with AI coding. game-direction turns taste into a creative brief and a first proof; game-production builds the smallest thing that settles the biggest unknown and returns a build that runs, played and captured; game-review returns one verdict — READY, CONCERNS, or NOT READY — whose result sets the next proof. Beneath them, game-knowledge answers questions mid-work with 18 routing signals, 16 distilled docs whose numbers carry dated citations, and a 68-file research corpus. The creator keeps the calls that stay theirs: which concept to chase, when the direction locks, when a stage is really done, and what ships, at what price, and what is promised publicly."
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
| [`game-knowledge`](skills/game-knowledge/SKILL.md) | Route game-craft symptoms — pricing, screen shake, IP assignment, burnout — to distilled, source-backed rules. |

## Install And Update

Install globally with the [skills CLI](https://github.com/vercel-labs/skills) so
the selected skills are available across game repositories:

```bash
npx skills add gigio1023/game-studio --global --skill '*' --agent claude-code codex --yes
npx skills add gigio1023/game-studio --global --skill game-review --agent claude-code codex --yes
```

Refresh the globally installed Game Studio skills with the same CLI:

```bash
npx skills update game-direction game-production game-review game-knowledge --global --yes
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
- **Knowledge arrives at the moment, with sources.** Field questions —
  pricing, juice, wishlists, contracts — route through an 18-signal index to
  distilled rules whose numbers carry dated citations; unverified folklore
  stays labeled unverified instead of hardening into advice.

See [Philosophy](docs/philosophy.md) for the full principles.

## Repository Map

| Path | Purpose |
| --- | --- |
| `skills/` | The four installable skills; each carries its own references, including `game-knowledge`'s 68-file source corpus as a deep-dive layer beneath its distilled docs. |
| `evals/` | Manual fixtures: behavior cases, trigger cases, and the three-way run protocol. |
| `research/foundations/` | Source-backed game-craft syntheses behind the skill references. |
| `docs/` | Philosophy, plain-language glossary, and README assets. |
| `tools/` | Repository validation script for contributors. |

## License

Game Studio is released under the MIT License. See [LICENSE](LICENSE) and
[NOTICE.md](NOTICE.md).
