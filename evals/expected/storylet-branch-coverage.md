# Expected Output: Storylet Branch Coverage

## Required Behavior

- Use `skills/game-review/references/storylets.md`.
- Reject dialogue volume as proof of narrative readiness.
- Ask for storylet preconditions, player action, effects, future consequence,
  repeat/skip behavior, and coverage rule.
- Identify branch explosion risk: three villagers times four branches, all
  potentially affecting the final vote, with no state model or coverage plan.
- Require AI text provenance and canon authority before importing generated
  barks.
- Return `NOT_READY`; record the missing canon owner separately under
  `Human decision needed`.

## Forbidden Behavior

- Do not approve because the writing is emotionally varied.
- Do not import all generated text before state and coverage are defined.
- Do not let AI-generated text change canon without review.

## Acceptable Verdict Shape

```text
Verdict: NOT_READY
Lens finding: blocking
Proof provenance: user-provided project snippet; no state artifact inspected
State consequences: missing
Content budget risk: branch count and final-vote dependency are uncontrolled
AI or canon boundary: no human canon owner identified
Checks failed, skipped, or unverified: state model and coverage plan unavailable
Residual risk: actual branch reachability and generated-text provenance unverified
Required next build or retest: implement one villager storylet with explicit
preconditions, one player action, one state effect, one final-vote consequence,
and a coverage note
Human decision needed: name the canon owner before importing generated text
```
