# Ouroboros and Ralph Loop Research Note

Date: 2026-05-18

Scope: lane A review of two local source repositories for concrete patterns that can improve long-running autonomous agent work in Game Studio projects. The review focuses on state files, goal prompts, progress gates, material-progress detection, budget and turn controls, handoff and resume, intervention points, and avoiding drift into tests or documents instead of product changes.

Reviewed source snapshots:

- `ouroboros` at `558a834c` (`Lock the short-goal interview convergence matrix against regression`)
- `ralph-claude-code` at `24b8969` (`fix: avoid ralph crash after a task is completed (#256)`)

## Sources Read

### Ralph for Claude Code

- `ralph-claude-code/README.md` - Product contract for continuous autonomous loops, dual-condition exit detection, rate limits, circuit breaker, session continuity, live monitoring, and the `.ralph/` control directory.
- `ralph-claude-code/ralph_loop.sh` - Main loop for initializing `.ralph/` state files, building per-loop context, resuming explicit Claude sessions, recording progress, detecting test saturation, checking plan completion, enforcing call/token budgets, and opening the circuit breaker.
- `ralph-claude-code/lib/response_analyzer.sh` - Response parser for `RALPH_STATUS`, `EXIT_SIGNAL`, `WORK_TYPE`, `FILES_MODIFIED`, permission denials, questions, test-only loops, and git-based progress.
- `ralph-claude-code/lib/circuit_breaker.sh` - Stagnation guard for no-progress loops, repeated errors, permission denials, half-open recovery, cooldown, manual reset, and user-facing halt guidance.
- `ralph-claude-code/templates/PROMPT.md` - Agent prompt contract for one task per loop, status-block reporting, test effort limits, protected control files, and examples of completion, blocking, test-only, and recurring-error states.
- `ralph-claude-code/templates/fix_plan.md` - Prioritized checklist shape used as the executable work queue.
- `ralph-claude-code/docs/user-guide/02-understanding-ralph-files.md` - File ownership model for `.ralph/PROMPT.md`, `.ralph/fix_plan.md`, `.ralph/AGENT.md`, `.ralph/specs/`, `.ralph/status.json`, and `.ralphrc`.

### Ouroboros

- `ouroboros/README.md` - Architecture contract for interview, seed, execute, evaluate, evolve, persistent loop execution, resume-session, cancel, and event-backed lineage.
- `ouroboros/docs/ooo-auto-analysis.md` - Analysis of the `ooo auto` flow: durable phase state, timeout-bounded driver, max rounds, deterministic ledger answers, A-grade seed gate, bounded repair, and blocking instead of unbounded repair.
- `ouroboros/docs/cli-reference.md` - CLI behavior for `auto`, `status auto`, `status run`, `cancel execution`, health checks, orphan cleanup, and runtime-control environment variables.
- `ouroboros/docs/config-reference.md` - Turn and runtime controls, including `default_max_turns`, runtime backend configuration, idle/no-progress/safety watchdogs, and the distinction between liveness and material progress.
- `ouroboros/docs/events.md` - EventStore schema for session started/completed/cancelled/failed, progress updates, and stable payload versioning.
- `ouroboros/src/ouroboros/auto/state.py` - Durable `AutoPipelineState` with phase enum, allowed transitions, resume-capability matrix, per-phase timeouts, top-level deadline, run/Ralph handoff handles, QA cache, recovery counters, and guard-trip persistence.
- `ouroboros/src/ouroboros/auto/interview_driver.py` - Bounded authoring loop with per-call timeout, max rounds, pending-question persistence, ledger/semantic closure agreement, and blocker recording.
- `ouroboros/src/ouroboros/auto/grading.py` - Deterministic seed gate for vague-term rejection, observable acceptance criteria, ambiguity threshold, ledger-goal match, missing non-goals, and high-risk assumption blockers.
- `ouroboros/src/ouroboros/auto/seed_repairer.py` - Bounded repair loop with max iterations, deterministic fixes, repeated high-finding stop, cooperative cancellation, and final re-review.
- `ouroboros/src/ouroboros/auto/progress.py` - Narrow immutable progress snapshots for phase, grade, and repair events.
- `ouroboros/src/ouroboros/auto/handoff_contract.py` - Idempotent run handoff with stable key, retry-once rule, unknown-handoff guidance, and duplicate prevention.
- `ouroboros/src/ouroboros/auto/execution_acceptance.py` - Filter that prevents wrapper/reporting acceptance criteria from becoming product execution work.
- `ouroboros/src/ouroboros/orchestrator/session.py` - Event-sourced session tracker and reconstruction model.
- `ouroboros/src/ouroboros/orchestrator/workflow_state.py` - Acceptance-criterion progress tracking with explicit `[AC_START]` and `[AC_COMPLETE]` markers plus activity classification.
- `ouroboros/src/ouroboros/orchestrator/context_governor.py` - Deterministic context-budget composer: acceptance criterion verbatim, sibling status as terse lines, parent summary truncation.
- `ouroboros/src/ouroboros/orchestrator/evidence_schema.py` - Typed evidence parsing and validation; terminal blockers are represented as first-class evidence outcomes.
- `ouroboros/src/ouroboros/orchestrator/verifier.py` - External verifier retry loop: parse evidence, validate schema, run a read-only verifier, retry within a bounded budget, and emit explicit failure classes.
- `ouroboros/src/ouroboros/ralph_loop.py` - Runtime-owned multi-generation loop with max generations, per-iteration timeout, total wall-clock budget, QA-pass stop, terminal-action stop, oscillation detection, and grade-regression detection.
- `ouroboros/src/ouroboros/mcp/tools/ralph_handlers.py` - MCP-facing Ralph job handler that validates budgets, derives a total budget when omitted, rejects nested Ralph delegation, starts background jobs, and exposes job status/cancel handles.

## Transferable Patterns

### 1. Keep the control surface small, durable, and project-local

Ralph's `.ralph/` directory is deliberately compact: prompt, plan, specs, status/progress JSON, logs, session id, exit signals, response analysis, and circuit-breaker state. Ouroboros uses a richer state model, but the same principle holds: long-running work needs an explicit durable state record rather than chat memory.

Evidence:

- `ralph-claude-code/ralph_loop.sh` - Centralizes control files under `.ralph/`, including `PROMPT.md`, `status.json`, `progress.json`, `.call_count`, `.token_count`, `.claude_session_id`, `.exit_signals`, and `.response_analysis`.
- `ralph-claude-code/docs/user-guide/02-understanding-ralph-files.md` - Separates operator-edited files from runtime-owned logs/status.
- `ouroboros/src/ouroboros/auto/state.py` - Persists phase, goal, cwd, seed artifacts, run handles, QA cache, recovery counters, deadlines, and resume metadata in one state record.

Transfer: Game Studio should keep long-run state inside the target project, with a small set of canonical files for active goal, task list, loop state, proof ledger, and handoff summary. The useful pattern is not the exact `.ralph/` folder; it is the discipline of keeping the active truth durable and inspectable.

### 2. Separate goal, task queue, runtime instructions, evidence, and status

Ralph splits high-level project vision (`PROMPT.md`), executable task queue (`fix_plan.md`), build/run instructions (`AGENT.md`), detailed requirements (`specs/`), and runtime status (`status.json`). Ouroboros similarly separates goal/ledger/seed, execution state, event store, and evaluation evidence.

Evidence:

- `ralph-claude-code/templates/PROMPT.md` - Instructs the agent to read specs, review the plan, implement the highest-priority item, run narrow tests, update plan/status, and output a structured status block.
- `ralph-claude-code/templates/fix_plan.md` - Keeps the work queue as a priority checklist instead of prose.
- `ouroboros/src/ouroboros/auto/grading.py` - Treats ledger, seed goal, constraints, non-goals, acceptance criteria, ambiguity, and risk as separate gate inputs.
- `ouroboros/src/ouroboros/orchestrator/evidence_schema.py` - Parses evidence as typed JSON rather than inferring proof from narrative text.

Transfer: A Game Studio goal prompt should route the agent to authoritative files, name the next playable result, define stop conditions, and require a loop-state update. It should not carry every design note or become the work queue itself.

### 3. Use explicit status blocks plus independent cross-checks

Ralph requires the agent to emit a final `RALPH_STATUS` block with fields such as `STATUS`, `TASKS_COMPLETED_THIS_LOOP`, `FILES_MODIFIED`, `TESTS_STATUS`, `WORK_TYPE`, `EXIT_SIGNAL`, and `RECOMMENDATION`. The loop parses this but also cross-checks git changes, plan checkboxes, error patterns, permission denials, and session state.

Evidence:

- `ralph-claude-code/templates/PROMPT.md` - Mandates the `---RALPH_STATUS---` block and gives examples for in-progress, complete, blocked, test-only, recurring-error, and no-work states.
- `ralph-claude-code/lib/response_analyzer.sh` - Normalizes JSON/text output and extracts exit signal, work type, files modified, errors, permission denials, questions, and completion signals.
- `ralph-claude-code/ralph_loop.sh` - Writes `.ralph/progress.json`, `.ralph/status.json`, and per-loop context for monitoring.
- `ouroboros/src/ouroboros/auto/progress.py` - Defines narrow progress snapshots with phase, grade, repair round, message, and timestamp.

Transfer: Game Studio long-run work should require a compact status footer. The footer should be treated as a claim, not proof. It must be checked against changed files, proof artifacts, and the project state.

### 4. Distinguish liveness from material progress

Ouroboros explicitly separates activity from material progress. Heartbeats and messages prove liveness; phase changes, workflow status changes, stage/subtask completion, and terminal events reset the no-progress timer. Ralph uses a simpler version: git file changes, explicit completion, reported file modifications, and HEAD changes reset stagnation counters.

Evidence:

- `ouroboros/docs/config-reference.md` - States that material progress is stricter than liveness; idle timeout and no-progress timeout are separate runtime controls.
- `ouroboros/src/ouroboros/evolution/loop.py` - Runs generations under `GenerationProgressWatchdog` and maps watchdog timeouts into public evolve-step actions.
- `ralph-claude-code/lib/circuit_breaker.sh` - Increments no-progress counters when there are no file changes, no completion signal, no reported modified files, and no accepted progress signal.
- `ralph-claude-code/lib/response_analyzer.sh` - Detects both uncommitted changes and committed changes since the loop-start SHA.

Transfer: For game work, material progress should mean a playable or perceivable product consequence changed and was observed through the supported run/probe path. Tests, reports, helper scripts, and document edits may show activity, but they should not reset the product-progress timer unless they directly unblock playable observation.

### 5. Bound every open-ended loop by count and time

Both systems assume the model will not reliably stop itself. Ralph has call/hour, token/hour, per-call timeout, session expiry, test-loop caps, completion-signal caps, no-progress thresholds, and manual reset. Ouroboros has max interview rounds, max repair rounds, per-phase timeouts, top-level pipeline deadline, max generations, per-iteration timeout, max total seconds, oscillation window, and grade-regression window.

Evidence:

- `ralph-claude-code/ralph_loop.sh` - Tracks call/token budgets and reset timestamps, uses `CLAUDE_TIMEOUT_MINUTES`, and exits on test saturation, repeated completion signals, plan completion, permission denial, or circuit breaker.
- `ouroboros/src/ouroboros/auto/interview_driver.py` - Bounds backend calls by timeout and authoring rounds.
- `ouroboros/src/ouroboros/auto/seed_repairer.py` - Caps repair iterations and stops on unchanged repairs or repeated high findings.
- `ouroboros/src/ouroboros/ralph_loop.py` - Enforces `max_generations`, per-iteration timeout, total wall-clock budget, oscillation stop, and grade-regression stop.
- `ouroboros/src/ouroboros/mcp/tools/ralph_handlers.py` - Validates min/max budget ranges and derives a total wall-clock cap when omitted.

Transfer: A long Game Studio run should have a hard slice budget: one playable consequence, one proof path, one evidence update. The loop may continue only while product-visible progress occurred recently. Test-only or document-only loops should trip a stop gate.

### 6. Make resume semantics honest

Ralph uses explicit `--resume <session_id>` instead of implicit continuation because "most recent session in current directory" can attach to the wrong active session. Ouroboros classifies resume capability into none, retry, partial resume, and resume. It also persists enough handles to avoid duplicate run/Ralph handoffs.

Evidence:

- `ralph-claude-code/ralph_loop.sh` - Stores `.claude_session_id`, expires sessions after a configured age, and uses explicit `--resume <session_id>`.
- `ralph-claude-code/ralph_loop.sh` - Resets stale exit signals and response analysis during session reset.
- `ouroboros/src/ouroboros/auto/state.py` - `resume_capability()` distinguishes true resume, partial resume, retry, and none based on persisted handles and tool phase.
- `ouroboros/src/ouroboros/auto/handoff_contract.py` - Uses the auto session id as an idempotency key and permits exactly one retry for unknown run-handoff states.
- `ouroboros/docs/cli-reference.md` - Provides `auto --status`, `status auto`, and `status run` surfaces for persisted state.

Transfer: Game Studio should record whether resume means "continue the same proof," "repeat a failed call with no preserved work," "re-run discovery before editing," or "manual inspection required." Unknown handoff states should not silently start duplicate work.

### 7. Make intervention points typed and actionable

Good loops stop for specific reasons: permission denial, repeated error, timeout, duplicate unknown handoff, high-risk assumption, missing tool/access/config, unresumable phase, or exhausted recovery. Both repos produce actionable diagnostics rather than a vague failed state.

Evidence:

- `ralph-claude-code/lib/circuit_breaker.sh` - Opens on permission denials, no progress, repeated errors, or no recovery, then prints concrete operator steps.
- `ralph-claude-code/ralph_loop.sh` - Exits immediately on permission denials and tells the operator to update allowed tools.
- `ouroboros/src/ouroboros/orchestrator/evidence_schema.py` - Typed blockers include missing authority, missing access, missing tool, missing configuration, unsafe scope change, and external dependency.
- `ouroboros/src/ouroboros/auto/state.py` - Persists `recovery_guard_tripped` so resume after an exhausted guard does not spend another loop pretending progress is possible.

Transfer: Game Studio should use blocker codes that are meaningful for game progress, such as unavailable engine runtime, no display path, backend check failure, provider auth missing, playable probe failure, evidence artifact missing, no product progress, test/document drift, duplicate handoff unknown, external play notes required, or scope requiring a human decision.

### 8. Filter meta-work out of product acceptance criteria

Ouroboros prevents wrapper/reporting duties from being handed to execution workers as product work. Ralph's prompt also suppresses test/documentation busy work by capping testing effort and warning against extra coverage as filler.

Evidence:

- `ouroboros/src/ouroboros/auto/execution_acceptance.py` - Removes known auto-observation/reporting criteria from execution seeds.
- `ralph-claude-code/templates/PROMPT.md` - Says implementation outranks documentation and tests, limits testing effort, and forbids extra coverage as busy work.
- `ralph-claude-code/ralph_loop.sh` - Exits after too many consecutive test-only loops.

Transfer: Game Studio should state that meta-work does not count as product progress. Evidence updates are useful after a playable change is proven; they should not become the next slice unless a broken live-session path blocks play.

## Risks/Anti-patterns

### 1. Ralph's generic default prompt is too test-heavy for game work

Ralph's template says to write comprehensive tests and run tests after each implementation. Its default plan includes project structure, types, I/O handling, and test setup. That is reasonable for generic code generation but can pull a game project toward scaffolding and coverage before there is a playable consequence.

Risk: copying the prompt literally would conflict with a play-first operating model. The transferable part is the structured status/control discipline, not the default testing emphasis.

### 2. File-change progress is not enough for games

Ralph counts git changes and commits as progress. That prevents false stagnation after a loop commits its work, but it can also reward empty progress: more documents, tests, reports, helper scripts, or refactors that do not make the build more playable.

Risk: a long-running agent could keep resetting the stop gate by editing process files. Game Studio needs a stricter product-progress predicate.

### 3. Heuristic response parsing can be gamed or drift

Ralph relies partly on the agent reporting structured fields correctly. It mitigates this with git checks and plan checks, but the model can still overstate files modified, misclassify work type, or set the exit signal too early or too late.

Risk: status fields should be treated as claims to verify, not as proof.

### 4. Seed gates can become bureaucracy if not domain-shaped

Ouroboros's deterministic seed gate is valuable because it blocks vague, unverifiable work. Imported literally, it may over-prioritize command/API observability and under-prioritize experiential consequences.

Risk: "observable" must include player-facing evidence such as visible world state, action log, in-game records, dialogue transcript, route probe, screenshot/video, or external play note. It should not collapse to "a unit test exists."

### 5. Long-run loops need duplicate-work protection before retries

Ouroboros invests in idempotency for run handoffs because a timeout does not prove the backend failed to enqueue work. Game projects have similar risk with live provider runs, external play requests, exported builds, and background probes.

Risk: a resume command that re-runs a cost-bearing or human-facing path can create noise and cost. Unknown state should become "inspect handles/artifacts first," not "retry blindly."

### 6. External event stores can hide state from collaborators

Ouroboros's EventStore works because it has status tools and schema docs. Game Studio project work benefits from repo-local state files that collaborators can inspect without a separate database viewer.

Risk: event-style records should be summarized back into project-local state files or evidence ledgers.

## Game Studio Adaptation

### Recommended control-file model

Use project-local state instead of adding a new generic control directory:

- `active-goal-prompt.md` - Long-run goal prompt; analogous to Ralph `PROMPT.md`, but game-specific.
- `tasks.md` - Executable queue; analogous to `fix_plan.md`, but every unchecked item should name a playable consequence or a blocker to playable proof.
- `goal-loop-state.md` - Durable loop state; should carry phase, current slice, last product-progress timestamp, last proof, blocker, budget counters, and resume mode.
- `verification-ledger.md` - Evidence ledger; should record proof commands and artifacts after playable changes.
- `continue-here.md` - Human-readable handoff generated from state, not a competing source of truth.
- `project-state.md` - High-level project gate summary and next decision.

Do not introduce a standalone `.ralph/` directory in a game project unless there is an explicit decision to adopt Ralph as a runtime dependency. The useful discipline is prompt, task list, state, proof, and exit gate.

### Suggested loop phases

- `intake`: read current state and choose one playable product slice.
- `implement`: change the smallest game affordance or consequence.
- `probe`: run engine/backend proof or gameplay probe.
- `evidence`: update ledger/state with exact command, result, and artifact.
- `blocked`: stop with a concrete blocker and smallest human/device/action needed.
- `ready_for_external_play`: no more internal process work; outside-player evidence is the next gate.

This phase model should remain smaller than Ouroboros's full auto pipeline. Game projects often already have direction and an active proof cell; the problem is keeping implementation pointed at playable social simulation instead of expanding process.

### Product-progress predicate

A long-run loop should count material progress only when at least one is true:

- A player-visible or NPC-visible consequence changed in the running build.
- A role action changed in response to a record, prop, dialogue, route, or player behavior.
- A deterministic product authority boundary changed and was observed through a smoke/probe.
- A broken launch/probe/live-session path was fixed and the same playable proof can now run.
- An external play evidence gate advanced with an actual outside-player note.

The following should not count as material product progress by themselves:

- more tests around unchanged behavior
- more evidence/report formatting
- index or document cleanup
- budget accounting
- helper scripts that do not unblock a playable proof
- probes that only exercise private methods instead of the supported gameplay interface

### Resume classification

Borrow Ouroboros's resume honesty:

- `resume`: exact current slice and proof path can continue from persisted state.
- `partial_resume`: enough context exists, but the agent must re-run discovery/proof before changing code.
- `retry`: previous tool call failed before any durable handle/artifact; safe to retry once.
- `manual_required`: duplicate work, stale state, missing device/display, provider spend, or external play path requires inspection.
- `done_waiting_on_human`: no internal implementation should continue because the next gate is outside-player evidence.

### Intervention points

Recommended blocker codes:

- `ENGINE_UNAVAILABLE`
- `DISPLAY_UNAVAILABLE`
- `BACKEND_CHECK_FAILED`
- `PROVIDER_AUTH_MISSING`
- `PLAYABLE_PROBE_FAILED`
- `EVIDENCE_ARTIFACT_MISSING`
- `NO_PRODUCT_PROGRESS`
- `TEST_DOC_DRIFT`
- `DUPLICATE_HANDOFF_UNKNOWN`
- `EXTERNAL_PLAY_NOTES_REQUIRED`
- `SCOPE_REQUIRES_DECISION`

Each blocker should include one sentence naming the smallest action to unblock. Example: `DISPLAY_UNAVAILABLE`: "Run the same export on a GUI device or provide a display route; do not add more control code until observed play is possible."

## Concrete Guidance for Goal Prompt and Long-Run Control

### Goal prompt rules

Use Ralph's structured status contract, but rewrite it around game progress:

1. Start by reading current state files, not by reinterpreting the whole project.
2. Work one coherent playable slice at a time.
3. The slice must name the intended player/NPC-visible consequence before code changes.
4. Tests and documents are allowed only to protect or record that consequence.
5. End each loop with a structured status block.
6. Set `EXIT_SIGNAL: true` when the next valuable action is human play or external evidence, not when the agent can imagine more scaffolding.

Suggested status block:

```text
---GAME_STUDIO_LOOP_STATUS---
STATUS: IN_PROGRESS | COMPLETE | BLOCKED | READY_FOR_EXTERNAL_PLAY
SLICE: <one playable consequence or blocker>
PRODUCT_PROGRESS: true | false
PRODUCT_PROGRESS_EVIDENCE: <file/command/artifact, or none>
FILES_MODIFIED: <count>
PROOF_COMMAND: <exact command, or NOT_RUN with reason>
PROOF_RESULT: PASS | FAIL | NOT_RUN
WORK_TYPE: GAMEPLAY | RUNTIME_FIX | EVIDENCE | TESTING | DOCUMENTATION
BLOCKER_CODE: <code or none>
RESUME_MODE: resume | partial_resume | retry | manual_required | done_waiting_on_human
NEXT_ACTION: <one concrete next action>
EXIT_SIGNAL: false | true
---END_GAME_STUDIO_LOOP_STATUS---
```

### Long-run control gates

Recommended loop gates:

- `one-slice gate`: the loop may implement only one product consequence before proof/evidence update.
- `product-progress gate`: two consecutive loops with `PRODUCT_PROGRESS: false` must stop or switch to playtesting, unless the blocker is a broken launch/probe path being fixed.
- `test-doc drift gate`: one test-only or document-only loop is allowed only if it directly records/protects the current playable slice; two consecutive loops should stop.
- `proof gate`: no complete status without exact command/artifact or an explicit environment blocker.
- `external-evidence gate`: if internal playable proof is already green and project state says outside-player notes are required, the loop should not invent more internal work.
- `duplicate-spend gate`: live-provider, external-play, and exported-build handoffs need stable ids/artifact names; unknown timeout allows at most one idempotent retry.
- `budget gate`: set max turns/time per slice; if exhausted, write blocker plus resume mode rather than starting a new slice.

### Goal prompt wording to prevent drift into tests/documents

Recommended insert for a project-local active goal prompt:

```markdown
Material progress means a player-visible or NPC-visible product consequence
changed and was observed through the supported run/probe path. Tests, reports,
helper scripts, budget tooling, and evidence formatting do not count as material
progress unless they directly unblock that playable observation. If the next
available work is only more tests, documents, or process, stop at the current
ready gate and run or playtest the game instead.
```

### Control-state fields to add or enforce

Recommended fields for a goal-loop state file:

- `current_slice`
- `intended_player_or_npc_consequence`
- `last_material_progress_at`
- `last_material_progress_evidence`
- `last_proof_command`
- `last_proof_result`
- `consecutive_no_product_progress_loops`
- `consecutive_test_or_doc_loops`
- `resume_mode`
- `blocker_code`
- `blocker_smallest_unblock_action`
- `external_play_notes_required`
- `external_handoff_id`
- `duplicate_retry_used`

### Minimal adaptation decision

Adopt these patterns:

- Ralph-style structured status footer.
- Ralph-style loop-local plan and state files.
- Ralph-style test/document saturation stop, rewritten for playable product progress.
- Ouroboros-style phase state, resume capability, timeout/round caps, idempotent handoff, typed blockers, and evidence validation.
- Ouroboros-style distinction between liveness and material progress.

Do not adopt these patterns literally:

- Ralph's generic `.ralph/` folder inside a game project.
- Ralph's "comprehensive tests" default emphasis.
- Ouroboros's full interview/seed/repair pipeline for an already-scoped active proof cell.
- External EventStore-only state without a project-local summary.

Bottom line: the strongest transfer is not "run Ralph." It is to make long-running agents prove that each loop made the game more playable, then persist enough state for the next agent to resume without guessing or drifting into process work.
