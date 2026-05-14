# 02 Review Routing, Proof, And Evidence: Stop Condition

[Back to index](../02-review-routing-evidence.md)

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
