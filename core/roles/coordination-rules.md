# Coordination Rules

## Role activation

Do not run every role for every task. Activate roles based on profile, stage,
files touched, and risk.

## Strictest verdict wins

If one reviewer says `NOT_READY`, the milestone does not advance.

## No cross-domain silent edits

A role may review outside its domain, but should not edit another role's files
unless the work intake assigns that scope.

## Parallel work

Parallel agents should receive independent write scopes and a shared milestone
contract. Each agent must write a handoff before stopping.

## Conflict resolution

1. Game identity conflicts go to Game Director.
2. Scope conflicts go to Producer.
3. Architecture conflicts go to Technical Director.
4. Player comprehension conflicts go to UX Designer or QA Lead.
5. Public promise conflicts go to Release Manager.

## Agentic assumptions

When the agent makes a decision without user input, it must record:

- Assumption
- Reason
- Affected files
- Reversal cost
- Gate that should review it
