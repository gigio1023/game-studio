# Long-Run Control

Use this for long autonomous sessions. Long runs are useful only when they
keep returning to playable game progress: did the game become more playable,
more legible, or more reactive since the last step? Activity — files changed,
tests added, reports written — is not progress by itself.

## First Question

Before changing files at each step, answer:

```text
What is the smallest playable change or proof that makes the intended game
more real in the current build?
```

If the answer is a document, test, helper script, or research note, name the
playable claim it protects. If no such claim exists, work on the game itself
instead or stop with a blocker.

## Work Classification

| Type | Counts as material progress when |
| --- | --- |
| `playable` | The running game has a new or changed player-visible or NPC-visible consequence. |
| `proof` | A launch, gameplay, or capture path now proves the active claim. |
| `support` | It directly unblocks the next playable proof and is followed by that proof. |
| `blocked` | It names the external action needed and prevents false continuation. |

## Circuit Breakers

- After two support-only steps, the next step must be playable implementation,
  a real play check, or a blocker report naming the exact missing human
  decision, device, auth, budget, or outside input.
- Do not continue internal work when progress is blocked on something outside
  the agent: human taste, an outside playtester, budget, credentials, or a
  public promise. Stop with `done_waiting_on_human`.
- Do not retry spend-bearing or human-facing actions until existing handles
  and artifacts have been inspected for duplicates.

## One Step At A Time

- Take one reversible step at a time, with one player-visible claim or one
  proof path.
- Update the loop state note before switching streams, and commit after each
  verified step so the run can be resumed or unwound cleanly.
- Keep one loop-state note in the project's standing notes location (its agent
  memo file or docs area) rather than scattering per-session notes. Track:
  active goal, current step, support-only streak, blocker, resume mode.

Resume modes: `resume` (continue the current step), `partial_resume` (rerun
discovery or proof before editing), `retry` (retry once; no durable artifact
exists), `manual_required` (inspect duplicate/spend/auth risk first),
`done_waiting_on_human`.

## Status Footer

End each step with a footer, then verify it against the actual diff and the
checks run this session before advancing — every claim in the footer must
trace to a tool result or artifact from this session, not memory:

```text
Work type: playable | proof | support | blocked
Player-visible change:
Proof run:
Material progress: yes | no
Support-only streak:
Blocker:
Resume mode:
Next step:
```
