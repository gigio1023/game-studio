# 02 Review Routing, Proof, And Evidence: Objective

[Back to index](../02-review-routing-evidence.md)

## Objective

Make Game Studio reviews sharper by standardizing proof language, internal evidence records, confidence, completion status, stage routing, and advisory diff-scope classification.


## Files

- Create: `core/references/review-evidence-standard.md`
- Create: `core/references/proof-language.md`
- Create: `skills/game-onboarding/SKILL.md`
- Create: `skills/game-onboarding/references/entry-routing.md`
- Create: `skills/game-navigator/SKILL.md`
- Create: `skills/game-navigator/references/stage-routing.md`
- Create: `skills/game-adoption/SKILL.md`
- Create: `skills/game-adoption/references/adoption-audit.md`
- Create: `core/schemas/adoption-audit.schema.json`
- Create: `core/schemas/diff-scope.schema.json`
- Create: `tools/audit-project.mjs`
- Create: `tools/check-diff-scope.mjs`
- Modify: `core/references/codex-review-practice.md`
- Modify: `skills/game-evidence-gate/SKILL.md`
- Modify: `skills/game-review-council/SKILL.md`
- Modify: `skills/game-review-council/references/council-review.md`
- Modify: `core/schemas/evidence-contract.schema.json`
- Modify: `core/schemas/gate-verdict.schema.json`
- Modify: `core/workflows/workflow-catalog.yaml`
- Modify: `core/roles/coordination-rules.md`


## Review Evidence Standard

- [ ] Create `core/references/review-evidence-standard.md`.

Required sections:

```markdown
# Review Evidence Standard


## Status Types

## Finding Shape

## Severity Evidence Rule

## Confidence Calibration

## Positive Claim Rule

## Next-Step Rule
```

Status split:

- Gate verdicts: `READY`, `CONCERNS`, `NOT_READY`.
- Task completions: `DONE`, `DONE_WITH_CONCERNS`, `BLOCKED`, `NEEDS_CONTEXT`.

Language split:

- Use `proof`, `playable proof`, `proof target`, and `proof gate` when speaking
  to users about why a game should advance.
- Use `evidence` for the internal artifact class: captures, builds, playtest
  notes, QA results, telemetry, screenshots, videos, decision records, and
  release claim checks.
- Do not use evidence as a public synonym for quality, fun, or readiness.

Finding shape:

- observation
- evidence
- inference
- severity
- priority
- confidence
- affected role
- missing evidence
- next proof


## Gate Verdict Schema

- [ ] Extend `core/schemas/gate-verdict.schema.json`.

Add optional fields:

```json
{
  "confidence": { "type": "number", "minimum": 0, "maximum": 1 },
  "missingEvidence": { "type": "array", "items": { "type": "string" } },
  "requiredDecision": { "type": "string" },
  "nextProof": { "type": "string" },
  "nextSkillOrGate": { "type": "string" }
}
```


## Evidence Contract Schema

- [ ] Extend `core/schemas/evidence-contract.schema.json`.

Optional fields for each evidence item:

```json
{
  "buildId": { "type": "string" },
  "scenario": { "type": "string" },
  "participantProfile": { "type": "string" },
  "capturePath": { "type": "string" },
  "evidenceClass": { "enum": ["implementation", "design", "player", "release"] },
  "retestStatus": { "enum": ["not_needed", "needed", "scheduled", "passed", "failed"] }
}
```


## Stage Navigation

- [ ] Create `skills/game-onboarding/SKILL.md`.

Purpose:

```text
Route the project before Direction Lock.
```

Entry routes:

- `direction-carry-in`: existing direction, mandate, pitch, prototype, or task.
- `taste-to-game`: creator has taste, references, emotions, or scenes but no
  stable direction.
- `brownfield-unknown`: existing repo or notes exist, but authority and stage are
  unclear.

Output:

```markdown

## Entry Mode

## Direction Source

## Creator Fluency

## Authority Owner

## First Required Artifact

## Next Skill Or Gate
