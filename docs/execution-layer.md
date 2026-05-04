# Execution Layer

The execution layer makes agent work bounded and reviewable.

## Work Intake

Before implementation, the agent needs:

- Entry mode
- Direction Lock or first prototype contract
- Current milestone
- Proof target
- Files in scope
- Files out of scope
- Required internal evidence artifacts
- Verification commands
- Handoff artifacts
- Known risks

## File Ownership

Parallel agents must receive disjoint write scopes. A role can review outside
its scope. Assigned owners edit.

## Proof And Evidence Ledger

Each implementation task appends:

- What changed
- What was verified
- What playable or inspectable proof exists
- What internal evidence artifact preserves it
- What remains risky
- Which gate reviews it next

## Drift Log

Record deviations from the plan. Drift is acceptable when it is intentional,
explained, and reviewed.
