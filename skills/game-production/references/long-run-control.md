# Long-Run Control

Use this for long autonomous sessions. Long runs are useful only when they
keep returning to playable game progress: did the game become more playable,
more legible, or more reactive since the last step? Activity — files changed,
tests added, reports written — is not progress by itself.

## Active Proof

At the start of the run, and whenever new evidence changes the plan, anchor the
work to one active proof:

```text
Active playable claim:
Smallest next playable change or proof:
Evidence required:
Stop condition or blocker:
```

A document, test, helper script, or research note counts only when it protects
or directly unlocks that proof. If no such link exists, work on the game itself
or stop with a blocker. Report the selected action and evidence at a real
checkpoint; do not narrate this decision before every file change.

## Work Classification

| Type | Counts as material progress when |
| --- | --- |
| `playable` | The running game has a new or changed player-visible or NPC-visible consequence. |
| `proof` | A launch, gameplay, or capture path now proves the active claim. |
| `support` | It directly unblocks the next playable proof and is followed by that proof. |
| `blocked` | It names the external action needed and prevents false continuation. |

## Circuit Breakers

- After two consecutive support-only material checkpoints, re-anchor before
  creating more support work. Prefer playable implementation, a real play
  check, or a blocker report. A third support checkpoint needs a named
  prerequisite and the playable or proof action it immediately unlocks.
- Do not continue internal work when progress is blocked on something outside
  the agent: human taste, an outside playtester, budget, credentials, or a
  public promise. Stop with `USER_DECISION_NEEDED` and name the exact input.
- External, spend-bearing, or human-facing actions require the authority in the
  core skill. Before any retry, inspect existing handles and artifacts for
  duplicates; retry at most once unless the user asks otherwise.

## Workstreams And Durable State

- Keep one active proof for the run. Parallelize only independent contributions
  to that same proof, with disjoint write scopes; synthesize their evidence
  before changing the milestone or next proof. Sequential execution remains
  valid.
- Use the project's existing state or handoff convention when the run must
  survive sessions. If none exists, keep state in the active task unless a
  persistent file is necessary; do not invent scattered per-session notes or
  store state inside the installed skill.
- Update durable state at a major phase change, blocker, or handoff. Create
  commits, branches, tags, or pushes only when the user requested them.

Resume actions are `resume` (continue from current evidence), `partial_resume`
(rerun discovery or proof before editing), `retry_once` (one bounded retry; no
durable result exists), and `manual_required` (inspect duplicate, spend, or
credential risk first). Terminal states are `USER_DECISION_NEEDED` and
`complete`; do not report either as a resume action.

Use `complete` only when the active proof or its accepted fallback has been
checked. Otherwise stop only on a real blocker, exhausted fallback, or user
authority boundary.

## Checkpoints And User Updates

Update the user at major phase changes or when a finding changes the plan, not
after routine calls. Each update names one result supported by a current tool
result or artifact and the next action. Before reporting progress or
completion, audit the actual diff and checks from this run; state failed,
skipped, and unverified checks plainly.

Keep this compact record in task state, or in the project-owned durable state
only when cross-session resume needs it:

```text
Active proof:
Work type: playable | proof | support | blocked
Player-visible change:
Evidence checked and result:
Checks failed, skipped, or unverified:
Support-only streak:
Blocker:
Resume action:
Next action:
```
