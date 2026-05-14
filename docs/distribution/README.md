# Distribution Preparation

Game Studio will ship as a plugin-first workflow, not as a standalone CLI
installer.

This directory records the distribution design, marketplace preparation work,
and release checks needed before publishing Game Studio for Claude Code and
Codex users.

## Current Decision

| Decision | Status |
| --- | --- |
| Primary install path | Plugin marketplaces |
| Fallback install path | Source checkout for maintainers only |
| Update model | Plugin shell plus remotely checked workflow pack |
| Target repo state | `.game-studio/` stores project state, not framework logic |
| Public skill entry points | Five task skills instead of every internal role skill |

## Document Map

| Page | Use |
| --- | --- |
| [Architecture](architecture.md) | Understand the plugin shell, workflow pack, and target repo state split. |
| [Repository Layout](repository-layout.md) | See the proposed file tree for plugin packaging and marketplace files. |
| [Claude Code Packaging](claude-code.md) | Prepare `.claude-plugin`, marketplace, validation, and directory submission. |
| [Codex Packaging](codex.md) | Prepare `.codex-plugin`, `.agents/plugins`, and Codex marketplace setup. |
| [Workflow Pack](workflow-pack.md) | Define the versioned methodology pack and target repo manifest. |
| [Update Policy](update-policy.md) | Decide what can update automatically and what needs user approval. |
| [Marketplace Submission](marketplace-submission.md) | Track public marketplace readiness and submission steps. |
| [Validation](validation.md) | Test local plugin loading, marketplace metadata, and target repo setup. |
| [Adapter Migration](adapter-migration.md) | Replace clone-and-copy adapters with plugin-first setup. |
| [Rollout Backlog](rollout-backlog.md) | Sequence the work into publishable phases. |
| [Research Notes](research-notes.md) | Keep the official documentation findings used for this plan. |

## Non-Goals

- Do not add a `curl | bash` installer as the primary path.
- Do not make every game repository copy `core/` into `.game-studio/core/`.
- Do not depend on users enabling marketplace auto-update.
- Do not let framework updates overwrite game direction, milestones, or human
  decision records.
