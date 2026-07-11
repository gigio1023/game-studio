# Milestone Planning

Milestones prove product hypotheses. Use this flow when planning a milestone,
prototype, or roadmap step, and the producer pass before approving one.

## Planning Flow

1. Name the current stage on the ladder and the biggest live uncertainty.
2. State the product hypothesis this milestone tests.
3. Define non-goals: what must not be built yet.
4. State the smallest useful proof — the least work that would let a player
   (or a play check) confirm or break the hypothesis.
5. List required artifacts: the build change, the play check, and the records
   (capture, playtest note, decision record) that preserve the proof.
6. Name cut candidates and a fallback proof for when the milestone runs long.
7. Define the exit decision: what happens on success and on failure.

## Producer Pass

Before approving a milestone or roadmap:

- Name the uncertainty being retired; confirm this is the smallest useful
  proof of it.
- Identify must-keep scope versus cut candidates, and the cut line.
- Check knock-on impacts where relevant: QA, accessibility, localization,
  content volume, release claims.
- Name the decision that follows success or failure.

Red flags that block approval:

- The milestone succeeds only if everything works.
- There is no cut line and no fallback proof.
- The plan needs a public promise before the build can prove it.
- The proof is hidden in implementation details instead of player-facing
  behavior.
- The plan asks the agent to lock direction, advance stages, or expand public
  promises without human approval.

## Release Scope Map

When the request is for a roadmap or release scope rather than one milestone,
map the whole-game promise before sequencing proofs:

- target session length and critical path;
- repeatable content families versus unique content units;
- must-ship, optional, and cut content;
- production multipliers such as localization, voice, accessibility, platforms,
  and save-state coverage;
- the reuse assumption, content budget, fallback release, and unknown owner.

This is a scope instrument, not permission to author the content or expand the
public promise. Each roadmap step still needs one hypothesis and playable proof.

## Work Packages

When implementation is split — across sessions, agents, or people — bound each
package:

```text
Goal:
Experience intent (what the player should feel or read):
Files in scope / out of scope:
Required proof:
Verification command or manual check:
Handoff path:
```

Parallel packages need disjoint write scopes. Review can cross boundaries;
editing cannot.

## Design Preservation Check

Before claiming player-facing implementation complete:

- Which player action changed, and which feedback changed?
- Which direction pillar did the change preserve?
- Which player-facing risk was introduced?
- Which playable check showed the intended behavior?
- Which manual review is still needed?

Silent drift to watch for: update-order or collision changes that alter feel,
defaults that change difficulty, refactors that remove a feedback path, and
generic genre features added outside the brief.

## Output

```text
Current stage:
Milestone:
Product hypothesis:
Release scope map (roadmap or release requests only):
Smallest useful proof:
Required artifacts:
Cut candidates / fallback proof:
Exit decision:
Risks:
Human decision needed:
```
