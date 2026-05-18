# Agent System Survey Synthesis

Date: 2026-05-18

This synthesis converts the three research lanes into Game Studio changes.
The source projects are reference designs only; Game Studio should adopt their
operating patterns, not their runtimes.

## Research Lanes

| Lane | Note | Primary lesson |
| --- | --- | --- |
| Long-run loops | `ouroboros-ralph-loop.md` | Durable state, material progress, explicit budgets, typed blockers, and honest resume semantics prevent endless activity loops. |
| Agent operations | `agent-ops-systems.md` | Workflow routing, proof class separation, leader-owned subagent integration, and small local ledgers beat large role catalogs. |
| Interview and goals | `user-interview-and-goal-setting.md` | Creator interviews should route facts to files and decisions to the human, then close on a playable proof sentence. |

## Adopted Changes

### Creator Interview Model

Added:

- `docs/creator-interview-model.md`
- `skills/game-creator-interview/SKILL.md`
- `skills/game-creator-interview/references/game-definition-interview.md`
- `core/templates/intake/game-definition-interview.md`

Adopted idea:

Creator intent should be resolved through source classes: user fact, repo fact,
safe assumption, and blocker. The interview is complete only when the creator's
philosophy, player role, whole-game frame, non-goals, and first playable proof
are clear enough for implementation.

### Long-Running Agent Control

Added:

- `docs/long-running-agent-control.md`

Adopted idea:

Long-running sessions should count material progress only when a playable game
claim changes, a player-visible consequence changes, or a real play path is
unblocked. Tests, reports, and helper tooling are support work, not the default
definition of progress.

### Routing Updates

Updated:

- `docs/README.md`
- `docs/entry-model.md`
- `docs/operating-model.md`
- `skills/game-onboarding/SKILL.md`
- `research/README.md`

Adopted idea:

Game Studio needs multiple guide paths, not one giant guide. Entry routing,
creator interview, long-run control, production planning, execution, and proof
review should stay separate so an agent can choose the right tool for the
current failure.

## Game Studio Operating Decisions

1. Keep project truth local to the target game repo.
2. Treat source repos as reference designs, not dependencies.
3. Ask the human only for taste, authority, promise, or irreversible choices.
4. Use safe assumptions only for small reversible details.
5. Convert interviews into first playable proof contracts, not design bibles.
6. Limit support-only slices; after two support slices, implement a playable
   improvement, run a play check, or report an external blocker.
7. Separate setup proof, runtime proof, gameplay proof, and player proof.
8. Commit and push coherent verified slices before switching work streams.

## Rejected Transfers

| Source pattern | Reason rejected |
| --- | --- |
| Copying a full autonomous loop runtime into Game Studio | Adds global machinery before project-local playable proof needs it. |
| Large default role catalogs | Encourages role-shaped notes instead of sharper playable decisions. |
| Hook-driven continuation as primary UX | Can keep agents active after the real blocker is human or player evidence. |
| Test-heavy generic prompts | Can produce coverage and scaffolding while the game itself barely changes. |
| Runtime or setup proof as product proof | A running tool is not the same as a playable and understood game moment. |

## Next Framework Work

- Add a navigator skill only if routing confusion recurs after this split.
- Add an eval fixture for test/document drift in long-running game work.
- Add a compact target-project loop-state template if two installed projects
  need the same fields.
- Add an example creator-interview artifact once a real project completes one
  interview-to-playable-proof cycle.

