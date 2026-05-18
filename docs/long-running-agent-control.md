# Long-Running Agent Control

Long autonomous sessions are useful only when they keep returning to playable
game progress. Activity is not progress. More checks, reports, or helper files
can be correct work, but they must not become the default output of a game
development loop.

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

## Loop Contract

Each autonomous pass should be small enough to revert as a coherent commit.

1. Read project state, current proof target, task list, and recent blocker.
2. Name the current blocker in one sentence.
3. Choose the smallest playable improvement or the smallest required proof.
4. Change only that slice.
5. Run the narrowest game/build check that can prove the slice.
6. Update state with result, evidence, blocker, and next action.
7. Commit and push before starting a different slice.

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

