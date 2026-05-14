# External Game Agent Repo Review

This folder records what Game Studio should learn from two MIT-licensed game
agent workflow repositories cloned under `/Users/naem1023/git/harenss`.

## Source Snapshot

| Repo | Local path | Commit reviewed | License | Godot files found |
| --- | --- | --- | --- | --- |
| Claude Code Game Studios | `/Users/naem1023/git/harenss/Claude-Code-Game-Studios` | `984023d` | MIT | none |
| gstack-game | `/Users/naem1023/git/harenss/gstack-game` | `ea4a93a` | MIT | none |

Search covered `project.godot`, `*.gd`, `*.tscn`, and `*.tres`. Neither repo
contains a runnable Godot project. Do not copy either repo into Game Studio as a
Godot example. The useful material is workflow design, skill routing, review
language, and engine-specific guardrails.

## Reports

| File | Use |
| --- | --- |
| [Claude Code Game Studios](01-claude-code-game-studios.md) | Learn from its large studio-role template, Godot agent rules, prototype/vertical-slice split, and hook-driven checks. |
| [gstack-game](02-gstack-game.md) | Learn from its direct review voice, skill pipeline, player-experience scoring, and shared artifact model. |
| [Synthesis](03-synthesis-for-game-studio.md) | Adopt the lessons that make Game Studio stronger without copying the wrong product shape. |

## Adoption Rule

Use these repos as reference designs, not dependencies. Game Studio should stay
smaller, stricter about playable validation, and clearer about human authorship.
