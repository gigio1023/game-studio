# 02 Review Routing, Proof, And Evidence

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
## Stop Condition
```

- [ ] Create `skills/game-navigator/SKILL.md`.

Purpose:

```text
Answer what should happen next from project-local artifacts.
```

Quick start:

```markdown
1. Read `.game-studio/project-state.md` when installed.
2. Read `.game-studio/core/workflows/workflow-catalog.yaml`.
3. Inventory direction, milestone, evidence, and gate verdict files.
4. Classify project state.
5. Return one primary next step, one fallback next step, and one backtrack trigger.
```

- [ ] Create `skills/game-navigator/references/stage-routing.md`.

Route missing direction to Creative Discovery, weak concept authority to Concept
Slate review, weak protocol proof to Protocol Proof, weak loop evidence to Core
Loop Prototype, presentation claims to Presentation Value Gate, and public claims
to Release Promise audit.

Pre-direction gate routing:

- `GS-ENTRY-ROUTE`: entry mode is explicit.
- `GS-TASTE-CLARITY`: taste, anti-taste, desired emotion, reference moments,
  and hard noes are separated.
- `GS-CONCEPT-SLATE`: multiple concepts are compared without idea spam.
- `GS-CREATIVE-BRIEF`: one selected concept has target player, core verb,
  intended emotion, distinctive bet, and first proof.
- `GS-PROTOTYPE-QUESTION`: the first prototype tests one named risk.

## Brownfield Adoption

- [ ] Create `skills/game-adoption/SKILL.md`.

The adoption skill audits compatibility, not just file existence.

Severity:

- `BLOCKING`: Game Studio cannot operate.
- `HIGH`: A gate or role can run but would mislead.
- `MEDIUM`: Routing or evidence quality is degraded.
- `LOW`: Cleanup or documentation issue.

- [ ] Implement `tools/audit-project.mjs`.

Output shape:

```json
{
  "target": "/path/to/target",
  "status": "PASS_WITH_FINDINGS",
  "findings": [
    {
      "severity": "BLOCKING",
      "code": "MISSING_PROJECT_STATE",
      "path": ".game-studio/project-state.md",
      "message": "Project state file is missing.",
      "nextAction": "Create project-state.md from the production template."
    }
  ]
}
```

Exit codes:

- `0`: no blocking or high findings.
- `1`: high findings exist.
- `2`: blocking findings exist.

## Diff Scope Routing

- [ ] Implement `tools/check-diff-scope.mjs`.

This is advisory role routing, not quality validation.

Classifications:

```text
direction production execution gameplay systems ui ux art audio narrative qa accessibility release adapter profile schema tool docs
```

Expected output:

```json
{
  "files": [
    {
      "path": "core/templates/release/release-promise-audit.md",
      "classes": ["release", "docs"],
      "recommendedRoles": ["release-manager", "qa-lead"],
      "recommendedGates": ["GS-RELEASE-PROMISE"],
      "evidenceTypes": ["release promise audit"]
    }
  ],
  "summary": {
    "recommendedRoles": ["release-manager", "qa-lead"],
    "recommendedGates": ["GS-RELEASE-PROMISE"]
  }
}
```

## Acceptance

- Reviews close with verdict, confidence, missing internal evidence, required decision, next proof, and next skill or gate.
- Stage navigation is project-state driven.
- Brownfield adoption produces an actionable migration plan.
- Diff-scope scripts suggest reviewers but do not claim readiness.
- Missing direction routes to Creative Discovery instead of forcing users to fill
  direction templates prematurely.
