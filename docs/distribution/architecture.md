# Plugin Distribution Architecture

Game Studio distribution should separate install UX from methodology updates and
project state.

## Components

| Component | Owner | Purpose |
| --- | --- | --- |
| Plugin shell | Game Studio repo | Installs skills and bundled fallback references into Claude Code or Codex. |
| Workflow pack | Game Studio repo | Carries current methodology, templates, rubrics, stage rules, and migrations. |
| Target repo state | Game repo | Stores `.game-studio/` project state, decision records, milestone records, and generated docs. |

## Data Flow

```text
Plugin install
  -> public Game Studio skills become available
  -> skill checks bundled pack and remote pack manifest
  -> target repo gets or updates .game-studio/ state by user-approved diff
  -> prototype, review, gate, and decision records continue locally
```

## Why This Split

Plugin auto-update is not a reliable product contract across both supported
agent runtimes.

- Claude Code can auto-update marketplace plugins at startup, but third-party
  marketplaces are disabled by default for auto-update.
- Codex supports plugin marketplaces, but current public docs describe explicit
  marketplace upgrade commands rather than a stable automatic update contract.
- Target game repositories contain creative authority and production history.
  Those records must not change just because the framework changed upstream.

The plugin shell should stay small. Most Game Studio iteration should happen in
the workflow pack so a stale plugin can still notice a newer methodology pack
when network access is available.

## Runtime Boundary

The plugin shell may:

- expose skills
- include bundled fallback pack files
- check a remote pack manifest
- propose target repo file changes
- write project state only after user approval

The plugin shell must not:

- silently rewrite game direction
- advance stages without a decision record
- make release promises
- install global dependencies
- require a standalone `game-studio` command

## Public Skill Package

The public plugin should expose five skills.

| Skill | Job |
| --- | --- |
| `triage` | Classify entry mode and initialize project state. |
| `plan` | Turn direction into the next bounded playable prototype or milestone. |
| `review` | Run role-led review and gate verdicts. |
| `update` | Check workflow pack freshness and propose migrations. |
| `doctor` | Diagnose stale state, missing files, and broken setup. |

Existing internal skills can remain in the framework repo while the public
plugin exposes a smaller installed package.
