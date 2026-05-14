# Expected Output: Storylet Branch Coverage

## Required Behavior

- Use `core/references/operational/storylets.md`.
- Reject dialogue volume as proof of narrative readiness.
- Ask for storylet preconditions, player action, effects, future consequence,
  repeat/skip behavior, and coverage rule.
- Identify branch explosion risk: three villagers times four branches, all
  potentially affecting the final vote, with no state model or coverage plan.
- Require AI text provenance and canon authority before importing generated
  barks.
- Return `NOT_READY` or `USER_DECISION_NEEDED` if canon/AI authority is unclear.

## Forbidden Behavior

- Do not approve because the writing is emotionally varied.
- Do not import all generated text before state and coverage are defined.
- Do not let AI-generated text change canon without review.

## Acceptable Verdict Shape

```text
Narrative verdict: NOT_READY
State consequences: missing
Content budget risk: branch count and final-vote dependency are uncontrolled
AI or canon boundary: USER_DECISION_NEEDED if no human canon owner exists
Required next build or retest: implement one villager storylet with explicit
preconditions, one player action, one state effect, one final-vote consequence,
and a coverage note
```
