# Anti-Slop Quality And Provenance

This page turns contrarian quality research into operating rules. It supports
[AI-Assisted Design Workflows](12-ai-assisted-design-workflows.md) and
[Proof Artifacts And Evals](06-proof-artifacts-and-evals.md).

Source:
[Contrarian Quality](../../../research/landscape/round4-critique/01-contrarian-quality.md).

## Quality Bar

A high-quality AI-assisted game artifact is not the one that looks most
complete. It is the one that preserves a human-owned point of view and reduces
uncertainty through playable, inspectable, or player-facing proof.

Fast rejection test:

```text
If this artifact could be reproduced from genre tags without losing its
identity, the human-authored choice is missing.
```

## Operating Rules

### Generated Material Is Not Proof

Generated concepts, sprites, barks, scenes, NPC output, market scores, or code
are input material. They become proof only when tied to:

- player action
- system behavior
- visible consequence
- build capture
- QA result
- playtest observation
- accessibility check
- localization check
- release promise check

### False Precision Is Banned

Do not use numeric scores for taste, fun, novelty, or quality unless the number
is tied to:

- an observed metric
- a precommitted threshold
- a playtest count
- a production cost measurement

### Reviews Must Split Claim Types

Each role-led game review should separate:

- observed facts
- design inferences
- taste judgments

This keeps AI from presenting interpretation as fact.

### Review Economy Matters

More output is not more value. Concept slates, role reviews, and generated
assets should be pruned before presentation. The system should optimize for
fewer, sharper artifacts.

### Human Taste Has Veto Power

If the creator says a direction is wrong for their taste, the system should
record why and revise. It should not argue from rubric consensus.

## Template Changes

Add or update fields:

- human-authored choice
- could this be generic?
- generated material used
- what was subtracted
- AI provenance
- human selection made
- what this does not prove
- deletion or collapse rule
- fragile novelty risk
- empty novelty risk
- process harm check

## Schema Changes

`core/schemas/gate-verdict.schema.json` should add a `reviewBasis` object with:

- `observedFacts`
- `designInferences`
- `tasteJudgments`
- `publicClaimsChecked`
- `generatedMaterialChecked`

`core/schemas/evidence-contract.schema.json` should add provenance and
disclosure fields when that schema is introduced or updated.

## Proof Of Improvement

In eval prompts, an agent should fail when it:

- treats a generated pitch as proof
- assigns a numeric fun score without observed basis
- overwrites human taste because a rubric says another option is cleaner
- produces many concepts without a pruning rationale
- advances a public promise without provenance or release evidence
