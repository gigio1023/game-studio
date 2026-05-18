# Agent System Operations Survey

Date: 2026-05-18

Scope: Survey selected local agent-system repositories for operating patterns that could inform Game Studio and a current project using Game Studio. This is workflow research only. The source repositories should be treated as reference designs, not dependencies to import.

Source snapshot:

| Repo | Commit reviewed | Research use |
| --- | --- | --- |
| clawhip | `ff3ba32` | Event routing, hook normalization, lifecycle notification, tmux fallback boundaries |
| everything-claude-code | `0e88e6a4` | Command and skill catalog discipline, dry-run onboarding, review and validation patterns |
| gstack | `026751ea` | Skill architecture, checkpoint and status ledgers, release gates, question and stop rules |
| oh-my-codex | `ffef5933` | Codex-native routing, explicit workflow modes, plugin/runtime split, Stop continuation proof boundaries |
| oh-my-claudecode | `90f19265` | Multi-agent orchestration, hook and state model, team/worktree coordination, session observability |

## Sources Read

### clawhip

- `clawhip/ARCHITECTURE.md` - Defines a daemon-first event pipeline: sources feed a queue, dispatcher resolves route deliveries, renderer formats content, sink handles transport. Useful because routing, rendering, and delivery are separate concerns.
- `clawhip/README.md` - Documents provider-native hook ownership, shared session events, lifecycle commands, agent lifecycle events, tmux stale/keyword monitoring, and the rule that project metadata should be routing authority.
- `clawhip/docs/event-contract-v1.md` - Freezes the shared Codex/Claude hook event set and field meanings; augmentation is additive only.
- `clawhip/src/router.rs` - Implements 0..N resolved deliveries per event and keeps delivery target, format, mention, template, and dynamic-token allowance together.

### everything-claude-code

- `everything-claude-code/RULES.md` - Small but clear house style: delegate by domain, keep contributions focused, format agents/skills/hooks consistently, and use specific hook matchers.
- `everything-claude-code/WORKING-CONTEXT.md` - Tracks current catalog truth, active queues, consolidation policy, and native-vs-external source rules. Useful as a status ledger for a large agent-system repo.
- `everything-claude-code/commands/project-init.md` - Strong onboarding pattern: default dry-run, preserve existing guidance, detect stack evidence, keep permissions narrow, and ask approval before applying.
- `everything-claude-code/commands/multi-workflow.md` - Shows a phased orchestration flow with session reuse, parallel calls, wait rules, completeness scoring, and explicit user-confirmation gates.
- `everything-claude-code/commands/code-review.md` - Review command reads full files, validates applicable commands, records pass/fail, and maps severity to approve/request/block decisions.

### gstack

- `gstack/AGENTS.md` - Catalogs skills by plan review, implementation/review, release/deploy, operational/memory, browser integration, and safety/scoping. Strong guide-split example.
- `gstack/CLAUDE.md` - Documents generated skill architecture, host registry, test tiers, platform-agnostic behavior, state roots, commit bisection, and routing rules.
- `gstack/context-save/SKILL.md` and `gstack/context-restore/SKILL.md` - Show session preamble state capture: branch, repo mode, telemetry, question tuning, learnings, checkpoint mode, and routing availability.
- `gstack/freeze/SKILL.md` - A narrow edit-boundary pattern using PreToolUse hooks for Edit/Write and an explicit state file.
- `gstack/land-and-deploy/SKILL.md` - Rich stop/push/ask model: continuous checkpoints, progress summaries, question tuning, completion status protocol, readiness evidence, and release safety rules.

### oh-my-codex

- `oh-my-codex/README.md` - Clear mental model: Codex remains the engine; OMX adds routing, workflow, runtime, state, and optional team or persistent-owner modes.
- `oh-my-codex/templates/AGENTS.md` - Best source for Codex operating rules: outcome-first stop conditions, auto-continue boundaries, delegation rules, child-agent protocol, keyword routing, runtime availability gates, and verification sequence.
- `oh-my-codex/docs/codex-native-hooks.md` - Strong hook proof boundary: native hook proof, plugin proof, fallback proof, no false claim that hooks work when only fallback paths were exercised.

### oh-my-claudecode

- `oh-my-claudecode/CLAUDE.md` - Compact operating contract for delegation, model routing, tool surfaces, skill triggers, team pipeline, verification, commit trailers, hooks, cancellation, and state paths.
- `oh-my-claudecode/README.md` - Distinguishes terminal CLI commands from in-session skills; describes team, tmux workers, HUD/session artifacts, project skills, and notification hooks.
- `oh-my-claudecode/docs/HOOKS.md` - Hook lifecycle reference for UserPromptSubmit, SessionStart, PreToolUse, PermissionRequest, PostToolUse, SubagentStart/Stop, PreCompact, Stop, and SessionEnd.
- `oh-my-claudecode/docs/TEAM-WORKTREE-MODE.md` - Worktree coordination contract: leader-owned team state, worker cwd, persisted fields, dirty-worktree preservation, status visibility, and verification checklist.

## Useful Operating Patterns

### 1. Separate provider lifecycle from project routing

clawhip is the cleanest example. Provider-specific launch and hook registration remain provider-owned, while clawhip handles normalization, routing, rendering, and delivery. Its shared hook event contract is small: `SessionStart`, `PreToolUse`, `PostToolUse`, `UserPromptSubmit`, and `Stop`. Its augmentation rule is equally important: repo-local hook scripts may add context, but they may not remove or overwrite base routing keys.

Evidence:

- `clawhip/README.md` - Provider-native hooks section says Codex and Claude own session launch plus hook registration; clawhip stays the routing, normalization, and delivery layer.
- `clawhip/docs/event-contract-v1.md` - Freezes base fields such as provider, event, directory, worktree path, repo name, branch, tool name, command, summary, and timestamp.
- `clawhip/README.md` - Route guidance says use provider/event/repo/project/branch filters and avoid routing on rendered message text.

Game Studio transfer: keep project routing and state authority in project-local files. Do not make Godot, Codex, Claude, Linear, or a notification daemon the source of truth for milestone identity. Runtime hooks can report events, but the project state file should define what those events mean for the game.

### 2. Event contracts should be small, stable, and additive

The most reusable pattern is not a large hook list. It is a frozen minimal contract with additive extension only. clawhip's contract prevents hook augmenters from replacing the payload shape. oh-my-codex uses a similar idea by distinguishing native hook evidence, plugin evidence, and fallback evidence.

Evidence:

- `clawhip/docs/event-contract-v1.md` - v1 allows additive metadata only and freezes the shared event set and base-field meanings.
- `oh-my-codex/docs/codex-native-hooks.md` - Warns not to claim native hooks work when only tmux or synthetic fallback paths were exercised.

Game Studio transfer: define a small Game Studio agent event vocabulary only if it directly supports current project state. Candidate events: `slice.started`, `slice.blocked`, `slice.proved`, `slice.failed`, `playtest.note-added`, `gate.passed`, `gate.blocked`, `handoff.needed`. Avoid adding lifecycle events unless a guide or ledger actually consumes them.

### 3. Command routing should distinguish deterministic keywords from advisory triage

oh-my-codex draws a useful boundary: explicit `$skill` invocations and keyword hook matches are deterministic; triage is advisory context only. It also prevents bare skill names from activating workflows unless the runtime supports that behavior. This avoids accidental workflow activation from ordinary prose.

Evidence:

- `oh-my-codex/templates/AGENTS.md` - Explicit `$name` invocations run left-to-right; bare skill names do not activate by themselves.
- `oh-my-codex/templates/AGENTS.md` - Runtime availability gate says runtime workflows such as team or persistent-owner modes should activate only when the current session is actually under the OMX runtime.
- `oh-my-codex/docs/codex-native-hooks.md` - UserPromptSubmit triage is advisory and does not activate a skill or workflow by itself.

Game Studio transfer: make "which Game Studio skill runs first?" deterministic. A navigator can classify the task into entry route, direction review, milestone planning, execution, evidence gate, narrative review, or game-review council. Advisory suggestions can exist, but active state changes should require explicit skill or gate invocation, or a project-state rule.

### 4. Skill/plugin architecture should be cataloged by workflow layer, not by role count

gstack's `AGENTS.md` is useful because it groups skills by user workflow: plan review, implementation/review, release/deploy, operational/memory, browser/agent integration, safety/scoping. everything-claude-code has a large catalog but its working context warns against overlapping skills and wants skills-first guidance with commands as compatibility shims.

Evidence:

- `gstack/AGENTS.md` - Lists skills by plan-mode review, implementation/review, release/deploy, operational/memory, browser/agent integration, and safety/scoping.
- `everything-claude-code/WORKING-CONTEXT.md` - Says overlapping skills/hooks/agents should be consolidated when material overlap exists and runtime separation is not required.
- `everything-claude-code/WORKING-CONTEXT.md` - Current skill-quality direction is to move guidance and contribution flow to skills-first, leaving commands as compatibility shims.

Game Studio transfer: split Game Studio guides by "why the agent is here" rather than by simulated studio department. Useful top-level groups are entry/direction, production/milestone, execution/handoff, proof/evidence, review/council, and distribution/release. The current project should not add a role for every game discipline unless that role protects a current playable risk.

### 5. Hooks should enforce boundaries, not become the product

The useful hook patterns are narrow and observable:

- gstack `freeze` blocks Edit/Write outside a selected directory.
- oh-my-claudecode `pre-tool-enforcer` blocks read-only agents from writing.
- oh-my-codex PreToolUse is scoped to Bash in its native hook mapping, with warnings and commit/document-refresh behavior separated.

Evidence:

- `gstack/freeze/SKILL.md` - PreToolUse hooks check Edit/Write file paths and deny operations outside the saved freeze directory.
- `oh-my-claudecode/docs/HOOKS.md` - PreToolUse validates rules before tool use and enforces agent permission restrictions.
- `oh-my-codex/docs/codex-native-hooks.md` - Native PreToolUse is Bash-only and keeps document-refresh warnings separate from commit blocking.

Game Studio transfer: use hooks sparingly for hard boundaries such as "do not edit outside owned slice", "do not claim proof without a ledger entry", or "do not commit generated Game Studio docs without updating their source template". Do not build a giant hook suite before the game loop needs it.

### 6. Status ledgers should be lightweight, local, and resumable

The strongest ledgers are concrete and small:

- gstack has structured checkpoint commit metadata and local timelines/telemetry.
- oh-my-claudecode has state files, session summaries, replay logs, notepad, project memory, and mode state.
- everything-claude-code has `WORKING-CONTEXT.md` as a durable current-truth/status file for a large catalog.

Evidence:

- `gstack/land-and-deploy/SKILL.md` - Continuous checkpoint mode records decisions, remaining work, tried approaches, and active skill in a structured commit block.
- `gstack/land-and-deploy/SKILL.md` - Completion status protocol uses `DONE`, `DONE_WITH_CONCERNS`, `BLOCKED`, and `NEEDS_CONTEXT`.
- `oh-my-claudecode/README.md` - HUD/session artifacts include session summaries and replay logs.
- `oh-my-claudecode/docs/HOOKS.md` - Mode state lives under project or session scope.

Game Studio transfer: keep active project ledgers repo-local. The ledger should answer: what playable claim is active, who owns it, what evidence exists, what is blocked, and what the next stop condition is.

### 7. Evidence discipline must distinguish install proof, hook proof, execution proof, and player proof

oh-my-codex gives the cleanest warning: a native hook file existing is not proof that native behavior ran; a hook firing is not proof that the active runtime can complete an authenticated execution. Game Studio needs the same separation between tool proof and game proof.

Evidence:

- `oh-my-codex/README.md` - `omx doctor` checks install shape, while `omx exec` proves active Codex runtime auth/model execution.
- `oh-my-codex/docs/codex-native-hooks.md` - Verification guidance separates native hook proof, plugin proof, and fallback proof.
- `gstack/land-and-deploy/SKILL.md` - Pre-merge readiness gathers all evidence, checks review staleness, tests, docs, PR accuracy, and asks before irreversible merge.

Game Studio transfer: use four proof classes:

- Setup proof: engine/tool/config exists.
- Runtime proof: Godot/backend/check actually runs.
- Gameplay proof: player action produces visible game consequence.
- Player proof: an external player understood, misunderstood, or reacted in a recorded way.

Do not allow setup/runtime proof to substitute for gameplay/player proof.

### 8. Subagent decomposition needs leader ownership and write scopes

oh-my-codex and oh-my-claudecode both preserve a leader/worker boundary. The leader picks mode, keeps the brief current, delegates bounded work, integrates results, and owns final verification. Workers execute assigned slices, stay inside scope, and report blockers upward.

Evidence:

- `oh-my-codex/templates/AGENTS.md` - Child-agent protocol assigns leader responsibilities and worker responsibilities; max 6 concurrent child agents; prompts stay under AGENTS authority.
- `oh-my-codex/templates/AGENTS.md` - Specialists should report boundary crossings upward instead of silently absorbing adjacent work.
- `oh-my-claudecode/docs/TEAM-WORKTREE-MODE.md` - Worktree mode gives each worker a worktree path while all workers point back to a leader-owned team coordination root.

Game Studio transfer: for the active project, parallel work should be split only when each slice has a playable claim and a clear write scope. A leader should own the verification ledger and final "does this make the game more real?" decision. Workers should not rewrite project direction or expand scope just because they found related process work.

### 9. Stop/push/ask rules work best as explicit gates

The best repos define when to keep going, when to stop, and when to ask:

- gstack asks for high-stakes ambiguity, destructive scope, missing context, and irreversible deploy gates.
- oh-my-codex auto-continues clear low-risk local edit/test/verify work and asks only for destructive, irreversible, credential-gated, external-production, or material scope changes.
- everything-claude-code stops/asks when requirement completeness is below threshold or after phase gates.

Evidence:

- `gstack/land-and-deploy/SKILL.md` - Stop for high-stakes ambiguity; ask with 2-3 options and tradeoffs.
- `gstack/land-and-deploy/SKILL.md` - Always stop for first-run dry-run validation, pre-merge readiness, missing auth, no PR, CI failures, conflicts, permission denied, deploy failure, and production health issues.
- `oh-my-codex/templates/AGENTS.md` - Auto-continue for clear low-risk reversible local edit-test-verify work; ask only for irreversible/destructive/credential/external-production/material-scope branches.
- `everything-claude-code/commands/multi-workflow.md` - Completeness score below 7 stops and asks clarifying questions.

Game Studio transfer: the central stop/ask test should be this: if a design or implementation gap is found, first ask what smallest playable result would make the intended game more real.

Keep going when the next step is local, reversible, and directly proves the active playable claim. Stop and ask when the next step changes direction, stage, player promise, public claim, external tester requirement, production deployment, or broad repo state. Push or commit only after a coherent playable slice or verified documentation/research slice, not after unrelated process churn.

### 10. Release/deploy style gates translate to milestone gates

gstack's land-and-deploy workflow is too software-release-heavy for Game Studio, but the gate shape is useful. It treats merge/deploy as mostly automated after the user invokes it, but it still stops for readiness proof before irreversible operations and records a final structured report.

Evidence:

- `gstack/land-and-deploy/SKILL.md` - Collects evidence before merge, tracks warnings and blockers, and offers inline review when review is stale or missing.
- `gstack/land-and-deploy/SKILL.md` - Final deploy report includes status, PR, merge SHA, deploy status, review status, timing, and outcome.
- `gstack/land-and-deploy/SKILL.md` - Important rules include never force push, never skip CI, poll with backoff, offer revert, and distinguish single-pass verification from continuous monitoring.

Game Studio transfer: a milestone gate should produce a compact structured verdict with status, playable claim, build/check command, proof artifacts, review freshness, known concerns, and next action. It should not become a release-engineering replica unless the project is actually publishing a build.

## Bad Fits for Game Studio

### Large role catalogs as a default interface

everything-claude-code and oh-my-claudecode show large agent catalogs, but Game Studio should not emulate that as the user-facing model. The active project needs a few strict game roles and a strong proof gate, not a simulated organization chart. Too many roles can hide the active playable question.

Bad fit:

- `oh-my-claudecode/CLAUDE.md` - Large agent catalog and broad delegation defaults.
- `everything-claude-code/RULES.md` - "Delegate to specialized agents for domain tasks" is too broad for the current single-proof-cell focus.

Adaptation: keep role review available, but route by risk. Use game director, narrative, or QA review only when the active claim crosses that boundary.

### Hook-driven magic as primary UX

Magic keywords and Stop-hook persistence can be powerful, but they are risky when the project authority is a game direction and playtest evidence. Accidental activation or stale continuation could push agents into process loops.

Bad fit:

- `oh-my-claudecode/docs/HOOKS.md` - Persistent-mode Stop hook reinforces active modes and can keep work going.
- `oh-my-codex/templates/AGENTS.md` - Runtime workflow keywords require runtime availability gates to avoid false activation.

Adaptation: use explicit skills/gates for Game Studio. Avoid bare-word mode activation in repo guidance. If hooks are added, keep them advisory or hard-boundary only.

### Global home-directory state as the project truth

gstack and OMC/OMX use global state surfaces. That is appropriate for personal tooling but a poor primary truth source for Game Studio projects that need committed handoffs and collaborator visibility.

Bad fit:

- `gstack/context-save/SKILL.md` - Preamble writes session/analytics/learning state under user-global storage.
- `oh-my-claudecode/README.md` - User-scope skills live under user-global storage.

Adaptation: keep Game Studio state repo-local. Use global tool state only as cache/config, never as active milestone truth.

### Release automation before game proof

gstack's ship and land/deploy patterns are excellent for web products, but Game Studio should not over-rotate toward PR/deploy machinery. For early game work, the expensive question is not whether CI can merge; it is whether the game is playable, legible, socially reactive, and understood by outside players.

Bad fit:

- `gstack/land-and-deploy/SKILL.md` - Rich production merge/deploy flow is too heavyweight for early game proof slices.

Adaptation: borrow readiness/evidence gates, not deploy ceremony. A playable slice gate should fit on one ledger entry and one proof artifact.

### Autonomous continuation as a substitute for external player evidence

Persistent-owner modes and Stop continuation are valuable for finishing bounded tasks. They are not a replacement for fresh-player notes. If the current blocker is outside-player comprehension, no internal loop should mark the milestone done without that evidence.

Bad fit:

- `oh-my-codex/docs/codex-native-hooks.md` - Stop continuations can keep persistent-owner, autopilot, or team modes alive.
- `oh-my-claudecode/docs/HOOKS.md` - Persistent-mode keeps active execution modes from halting.

Adaptation: persistence can complete internal preparation and verification, but must stop at a player-evidence gate when external notes are the real blocker.

## Target Project Adaptation

### Keep the current game-first hierarchy

The active project's operating rule should remain:

1. Start from the open-environment NPC social simulation target.
2. Pick the smallest playable result that makes that target more real.
3. Implement and prove that result in the running build.
4. Expose enough state through Codex gameplay QA for agent verification.
5. Record proof and blockers in repo-local ledgers.
6. Stop at human/player evidence gates when those gates are the real blocker.

The source research supports this hierarchy. The strongest transfer is operating discipline, not more automation.

### Proposed command routing

Use deterministic routing with explicit state:

| User/task shape | Route | Stop condition |
| --- | --- | --- |
| "What should we build next?" | Game director or Game Studio milestone skill | Stop after one smallest playable claim and proof budget |
| "Implement this slice" | Game execution skill | Stop after code, narrow proof, ledger update, and commit/push if requested |
| "Is this milestone ready?" | Game evidence gate | Stop at `PASSED`, `BLOCKED`, or `NEEDS_PLAYER_EVIDENCE` |
| "Review the design/story" | Role review or narrative director | Stop after player-facing consequences and required changes are named |
| "Codex play this" | Codex gameplay QA interface | Stop after action log, snapshot/report, and player-perspective artifact |
| "Continue the goal loop" | Active project goal state | Stop at current explicit gate, especially external tester notes |

This mirrors oh-my-codex's distinction between explicit workflow invocation and advisory triage. It also keeps the sample proof cell from becoming the whole game.

### Proposed state/ledger shape

Keep project-local files authoritative. The active set should cover:

- Project stage, active milestone, gate status, and next decision.
- Compact long-running Codex checkpoint.
- Active task list with status.
- Claim-to-proof ledger.
- Resume pointer.

Add only if needed:

- External playtest notes directory.
- Machine-readable agent-events log, only if multiple agents need machine-readable lifecycle events; otherwise Markdown ledgers are enough.

### Proposed proof vocabulary

Use the evidence distinctions from oh-my-codex and Game Studio validation gates:

| Proof class | What it proves | Example |
| --- | --- | --- |
| Setup proof | Tool exists and can launch | Godot CLI import succeeds |
| Runtime proof | Current system path executes | Runtime smoke or backend check passes |
| Gameplay proof | Player action causes visible consequence | Codex gameplay probe performs action and reads HUD, ledger, or NPC state |
| Social-sim proof | NPC/social record changes future behavior | A role cites, warns, refuses, helps, repairs, or records based on shared state |
| Player proof | Outside player understood or misunderstood | Fresh-player note explains goal, consequence, confusion, and next action |

Do not promote a slice from internal ready to externally validated until player proof exists.

### Proposed hooks and boundaries

Do not add a broad hook framework. If hooks become necessary, use only these narrow classes:

- Edit boundary hook: prevent writes outside declared slice ownership during multi-agent work.
- Claim-proof warning: warn when a final handoff says a playable claim is complete but no verification-ledger entry changed.
- Mermaid/doc validation warning: only for docs that add Mermaid or generated artifacts.
- Commit message helper: optional; do not block game work over commit style.

This follows gstack's `freeze` and clawhip's additive event-contract discipline while avoiding hook theater.

### Proposed subagent rule

Parallelize only when the work can be decomposed into non-overlapping game slices:

- Explorer: map current Godot, backend, and runtime facts.
- Worker: implement a bounded playable consequence in owned files.
- Verifier: run Godot, backend, and Codex-play probes and summarize evidence.
- Reviewer: review game consequence from player perspective.

The leader owns integration, ledger updates, and the final readiness claim. Workers must not change direction, scope, or gate status directly.

### Proposed stop/push/ask policy

Keep going:

- local reversible edit/test/probe work that directly supports the active playable slice
- diagnostics needed to resolve a failing proof command
- ledger updates required to record a proof just produced

Stop and ask:

- changing Direction Lock, player role, public promise, or stage
- replacing the active sample environment with a new environment
- adding a new economy/system model not required by one visible interaction
- external player/tester coordination
- destructive git operations or broad cleanup
- missing authority or conflicting repo state

Push/commit:

- after one coherent playable slice, research slice, or guide update
- after narrow proof has run or blocker is recorded
- before switching to another unrelated slice, matching the repo's current cadence

## Recommended Guide Split

The current Game Studio docs already have the right backbone: `docs/entry-model.md`, `docs/operating-model.md`, `docs/validation-gates.md`, `docs/role-led-game-review.md`, and project-local state. The source research suggests a sharper split between stable doctrine, operational routing, and project ledgers.

### 1. Stable Framework Guides

Keep these as human-readable framework doctrine:

- `docs/entry-model.md` - Entry routes and authority rules.
- `docs/operating-model.md` - Direction, production, execution layers.
- `docs/validation-gates.md` - Evidence classes and stage gates.
- `docs/role-led-game-review.md` - Role review behavior and player-consequence language.
- `docs/anti-patterns.md` - Things agents should not do.

Source influence: gstack's catalog split and everything-claude-code's consolidation policy. These files should explain concepts, not carry active project state.

### 2. Agent Operating Guides

Create or maintain smaller guide pages for how agents act:

- `docs/agent-routing.md` - Deterministic route selection: entry, direction, milestone, execution, evidence, review, narrative.
- `docs/agent-boundaries.md` - Ask/stop/continue rules, write scopes, human authority, external evidence gates.
- `docs/subagent-decomposition.md` - Leader/worker/verifier/reviewer responsibilities and file ownership.
- `docs/hook-and-state-boundaries.md` - What hooks may enforce, what remains advisory, and what belongs in project state.

Source influence: oh-my-codex `templates/AGENTS.md`, clawhip hook contracts, gstack `freeze`, and oh-my-claudecode team/worktree rules. These should be operational and short.

### 3. Project-Local Runtime Guides

Keep active state and project-specific instructions in the target repo:

- Project state file - Active Game Studio routing/state.
- Active goal prompt - Current long-running Codex goal.
- Goal-loop state - Resume checkpoint.
- Task ledger - Current tasks.
- Verification ledger - Active proof ledger.

Source influence: oh-my-claudecode state model and gstack context-save/restore, but adapted to repo-local truth. These files should change during work.

### 4. Proof and Review Templates

Templates should stay small and callable:

- `templates/claim-to-proof.md` - Claim, proof command/artifact, evidence class, result, blocker.
- `templates/playtest-note.md` - Player action, observed understanding, confusion, next action, tester context.
- `templates/subagent-handoff.md` - Ownership, files, claim, proof expected, blocker escalation.
- `templates/gate-verdict.md` - `PASSED`, `BLOCKED`, `NEEDS_PLAYER_EVIDENCE`, `NEEDS_DIRECTION_DECISION`.

Source influence: gstack completion status protocol and land/deploy readiness reports, but reduced for game proof.

### 5. Do Not Split Into

Avoid these guide families unless a concrete need appears:

- A giant role encyclopedia copied from agent catalogs.
- A full hook framework guide before hooks exist.
- A release/deploy guide that treats early playable proof like SaaS production deployment.
- A global memory guide that makes home-directory state authoritative.
- A sample-environment-specific guide that overfits the current proof cell.

### Recommended immediate change set

If Game Studio turns this research into docs, the smallest useful change set is:

1. Add `docs/agent-routing.md` with deterministic route and stop rules.
2. Add `docs/subagent-decomposition.md` with leader/worker/verifier ownership.
3. Add `docs/hook-and-state-boundaries.md` with "hooks enforce boundaries; project files own truth."
4. Add one proof template for `NEEDS_PLAYER_EVIDENCE` so the current external-tester gate is first-class.

Do not add new automation until these rules have protected at least one real playable slice.
