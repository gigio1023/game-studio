# Agent System Survey

This folder collects research notes from a local multi-repo source set of
agent-operation projects. The goal is not to vendor those projects or copy
their tools. The goal is to extract production patterns that make Game Studio
better at creator interviews, long-running agent work, and game-first progress
control.

## Source Repos

| Repo | Use in this survey |
| --- | --- |
| `ouroboros` | Interview convergence, auto pipeline state, source classes, progress events, recovery limits. |
| `ralph-claude-code` | Autonomous loop controls, session continuity, rate limits, circuit breakers, exit gates. |
| `career-ops` | Preference elicitation, decision workflows, mode-driven user support. |
| `clawhip` | Agent instruction and permission boundaries. |
| `everything-claude-code` | Skill and plugin packaging, agent operating conventions. |
| `gstack` | Agent system packaging and workflow discipline. |
| `oh-my-codex` | Codex-oriented command and runtime patterns. |
| `oh-my-claudecode` | Claude Code command and workflow patterns. |

## Adoption Target

Adopt only patterns that improve a Game Studio decision:

- how to interview a creator;
- how to define a first playable proof;
- how to keep long agent sessions from drifting into support work;
- how to preserve human authority;
- how to record state that lets the next agent resume honestly.

Reject patterns that imply automatic finished games, global tooling as the
default path, or scripts as a substitute for playable game judgment.

## Notes

| Note | Use |
| --- | --- |
| [Long-Run Loop Research](ouroboros-ralph-loop.md) | State, budgets, material progress, blockers, and resume semantics. |
| [Agent Operations Survey](agent-ops-systems.md) | Routing, hooks, proof classes, subagent ownership, and ledgers. |
| [Interview And Goal Setting](user-interview-and-goal-setting.md) | Creator interview, source classes, goal closure, and playable proof sentence. |
| [Synthesis](synthesis.md) | Adopted changes, rejected transfers, and next framework work. |
