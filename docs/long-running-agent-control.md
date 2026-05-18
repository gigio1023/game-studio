# Long-Running Agent Control

Long autonomous sessions are useful only when they keep returning to playable
game progress. Activity is not progress. More checks, reports, or helper files
can be correct work, but they must not become the default output of a game
development loop.

This control model is separate from the creator interview model. Use creator
interview when the game frame is weak. Use long-run control when the frame is
good enough to build, but the agent risks drifting into support work during a
multi-slice session.

## Purpose

Long-run control exists to keep an autonomous agent honest about one question:
did the game become more playable, more legible, or more reactive since the
last slice?

It is not a replacement for direction, production judgment, or human taste. It
is a small operating loop for keeping execution pointed at the active playable
claim.

## Control Files

Install or maintain these project-local records when a game repo needs
multi-slice autonomous work:

- `active-goal-prompt.md` - short goal and hard stop rules;
- `tasks.md` - executable queue with one playable claim per item;
- `long-run-loop-state.md` - current phase, blocker, proof, and resume mode;
- `verification-ledger.md` - exact checks and evidence artifacts;
- `continue-here.md` - handoff summary generated from current state.

Do not turn the goal prompt into a design bible. The prompt should route the
agent to the authoritative files, name the next playable result, and define
what must stop the loop.

## Material Progress

For Game Studio, material progress means one of these changed and was checked:

- a player action;
- a player-visible consequence;
- a playable environment affordance;
- a role action that changes state;
- a playable proof target;
- a decision record that changes allowed scope.

Internal records, tests, probes, and scripts are support work. They count as
progress only when they protect or expose one of the items above.

## Product-Progress Predicate

A slice resets the product-progress counter only when at least one is true:

- a player-visible or NPC-visible consequence changed in the running build;
- a role action changed because of a record, prop, route, dialogue, or player
  behavior;
- a deterministic authority boundary changed and was observed through a
  supported check;
- a broken launch, probe, or live-session path was fixed and the active
  playable proof can now run;
- outside-player evidence advanced with an actual recorded note.

The following do not count by themselves:

- more tests around unchanged behavior;
- report or evidence formatting;
- index cleanup;
- budget accounting;
- helper scripts that do not unblock a playable proof;
- probes that call private scene methods instead of the supported gameplay
  interface.

## Work-Mix Guard

Use this guard in long Codex, Claude Code, or subagent sessions.

| Slice type | Normal limit | Required redirect |
| --- | ---: | --- |
| Playable implementation | Default | Continue while the next proof is small. |
| Design clarification | One slice | Convert into a proof target or stop for user authority. |
| Docs-only alignment | One slice | Follow with playable work unless the user asked for docs only. |
| Test-only hardening | Exceptional | Name the game consequence or authority boundary it protects. |
| Helper or report tooling | Exceptional | Stop if no immediate playable proof depends on it. |

If two consecutive slices are docs, tests, reports, or helper tooling, the next
slice must either implement a playable game improvement, run a real play check,
or report that the next blocker is outside agent control.

## Loop Phases

Keep the phase model smaller than a full workflow engine.

| Phase | Meaning | Exit |
| --- | --- | --- |
| `intake` | Read state and choose one playable product slice. | One next slice is named. |
| `implement` | Change the smallest game affordance or consequence. | Code/content changed or blocker found. |
| `probe` | Run the narrowest engine, backend, or gameplay check. | Result and command are known. |
| `evidence` | Update ledger and state with proof or failure. | Handoff is current. |
| `blocked` | Stop with a concrete blocker. | Human/device/auth/external action is named. |
| `ready_for_external_play` | Internal work should stop. | Outside-player note is the next gate. |

## Loop Contract

Each autonomous pass should be small enough to revert as a coherent commit.

1. Read project state, current proof target, task list, and recent blocker.
2. Name the current blocker in one sentence.
3. Choose the smallest playable improvement or the smallest required proof.
4. Change only that slice.
5. Run the narrowest game/build check that can prove the slice.
6. Update state with result, evidence, blocker, and next action.
7. Commit and push before starting a different slice.

## Circuit Breakers

Trip a breaker instead of inventing more process work when any of these happen:

- two consecutive support-only slices;
- two loops with no product-progress predicate hit;
- the same blocker appears twice with no new evidence;
- a test-only slice is proposed without a named game consequence;
- a proof-only slice repeats a check after no game change;
- the agent cannot prove whether resume is safe.

After a breaker trips, the next output must be one of:

- a small playable implementation;
- a real play check using the supported interface;
- a blocker report naming the smallest human, device, auth, budget, or external
  player action required.

## Resume Semantics

Use honest resume labels:

- `resume` - continue the same slice and proof path from current state;
- `partial_resume` - context exists, but discovery or proof must be rerun before
  editing;
- `retry` - a failed call produced no durable handle or artifact and may be
  retried once;
- `manual_required` - duplicate work, spend, missing display, stale state, or
  auth requires inspection;
- `done_waiting_on_human` - the next gate is human or outside-player evidence.

## Stop Conditions

Stop or ask for user input when the next step requires:

- creator taste;
- concept selection;
- Direction Lock;
- stage movement;
- public promise;
- external playtest evidence;
- budget or credential authority;
- destructive project changes.

Do not invent process work to avoid a stop condition.

## Status Footer

End every long-run slice with a compact claim that can be checked against files
and evidence:

```text
Status:
Work type: playable | proof | support | blocked
Player-visible change:
Files changed:
Proof run:
Material progress: yes | no
Support-only streak:
Blocker:
Resume mode:
Next slice:
Commit/push:
```

Treat the footer as a claim, not proof. Cross-check it against the diff,
evidence ledger, build output, and project state.

## Subagent Use

Parallel agents are useful for independent research, disjoint file edits, or
review lanes. They are harmful when they multiply paperwork around the same
unclear game decision.

Before spawning subagents:

- define disjoint ownership;
- name the decision or proof each lane will improve;
- ban overlapping edits;
- require source paths and blockers;
- integrate into one project decision rather than leaving separate notes.

## Game-First Resume Prompt

Use this compact instruction in long-running goals:

```text
On resume, identify the smallest missing playable game improvement before
adding tests, reports, or helper tooling. A support-only slice is allowed only
when it protects deterministic authority, exposes player-visible state, or
unblocks a real play session. Keep one coherent slice, run one narrow proof,
update state, commit, and push.
```
