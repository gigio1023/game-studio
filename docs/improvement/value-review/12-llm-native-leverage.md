# LLM-Native Leverage

Game Studio currently uses Codex and Claude Code as disciplined producers. It
prevents the worst AI failure modes well. The next ceiling lift is using the
LLM for what the LLM is uniquely good at: generative breadth, cross-reference,
naive-player simulation, and counterfactual reasoning.

This is the largest single ceiling move in the value review. It is also the
largest body of net-new design work.

## Defensive Versus Offensive Use

| Use | Example | Current Strength |
| --- | --- | --- |
| Defensive | Stop premature vertical slice. | Strong. |
| Defensive | Prevent slop concept slates. | Strong. |
| Defensive | Refuse human-owned decisions. | Strong. |
| Offensive | Generate diverse concept candidates with explicit failure modes. | Weak. |
| Offensive | Simulate naive-player walkthroughs from design docs. | Absent. |
| Offensive | Auto-propose anti-pillars from pillars. | Absent. |
| Offensive | Recommend the next proof from current proof results. | Weak. |
| Offensive | Probe cross-session memory for contradictions. | Absent. |

The framework does the defensive work well. The offensive work is the new
surface.

## Five Generative Moves

### Move 1: Intentional Failure Variants In Concept Slates

Today the slate is three to five concepts with reasons to reject. Add a
parallel set: for each concept, generate two failure variants, both clearly
worse, with named failure modes (mismatch with taste, scope explosion,
mechanic without dynamic). The human reviews them as decoys to sharpen
selection.

### Move 2: Naive-Player Walkthrough Auto-Generation

Given a creative brief or first prototype contract, generate a session
transcript from the perspective of a naive player who only knows what the
design doc shows. Surface the moments where the player would not understand
goal, affordance, state, or recovery. Feed surfaced gaps into
[Player Walkthrough Review](../../../skills/game-review-council/references/player-walkthrough-review.md).

### Move 3: Anti-Pillar Auto-Generation

Given pillars, generate three anti-pillars and three tempting wrong directions
the project might drift toward. The human accepts, edits, or rejects them. The
agent records final anti-pillars to direction docs.

### Move 4: Counterfactual Next-Proof Recommendation

After a proof passes or partially passes, automatically generate two or three
candidate next proofs ordered by which uncertainty they retire. The producer
selects one and records the rationale. This pushes `nextProof` from a manual
field into an active recommendation.

### Move 5: Cross-Session Concept Memory Probing

The decision ledger, risk register, and parked-concept records already exist.
Today they are written but not actively queried. Add a probe step: at session
start, the agent searches the ledger for contradictions with the current
request and warns when a parked or rejected concept is being revived without
a new decision record.

## Why This Lifts The Ceiling Most

These moves change the framework from `disciplined producer` into `creative
cognitive multiplier`. The defensive surface protects the floor of value.
Offensive surface raises the ceiling because it uses the parts of LLMs no
spreadsheet, checklist, or human alone can match: diverse generation under
constraints, simulated alternative perspectives, large memory cross-reference,
and rapid counterfactual reasoning.

## Risk: Each Move Must Preserve Human Authority

Every offensive move risks the same failure: the LLM presenting generated
material as a decision instead of as input. Each move must stop short of:

- selecting the concept
- locking direction
- moving stage
- changing the public promise
- treating its own output as approval

Use the same `USER_DECISION_NEEDED` discipline that already governs the
framework. Generated output is candidate material, not a verdict.

## Files To Change

- Add `core/references/llm-native-moves.md`.
- Update concept-slate template to include intentional failure variants.
- Update player-walkthrough-review reference to include a generation prompt.
- Update creative-pillars template to include an auto-generated anti-pillars
  pass.
- Update milestone-contract template to include candidate next proofs.
- Update each `SKILL.md` whose closure includes one of these moves.

## Proof Of Improvement

Re-run the [Stress Scenarios](10-stress-scenarios.md). After adding these
moves, S4 (total beginner) should improve from 40 to 50 percent helpfulness to
above 70 percent because reference-moment translation finally has generative
support, and S2 (mixed demo reactions) should improve because counterfactual
proof recommendations directly attack diagnosis weakness.
