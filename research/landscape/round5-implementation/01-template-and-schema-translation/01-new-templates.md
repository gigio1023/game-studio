# Round 5 Implementation Translation: New Templates

[Back to index](../01-template-and-schema-translation.md)

## New Templates

### Entry And Direction

Add `core/templates/intake/reference-constraint-sheet.md`.

Fields:

- `Reference`
- `Specific moment`
- `Player action`
- `Object, rule, space, or system involved`
- `Resistance or uncertainty`
- `Perceived consequence`
- `Emotional or aesthetic response`
- `What not to copy`
- `Inferred design constraint`
- `Alternative interpretation`
- `Author-confirmed priority`
- `Contradiction with other references`
- `Next prototype question`

Update `core/templates/intake/beginner-taste-interview.md` instead of adding a
larger beginner guide.

New fields:

- `Specific Moment`
- `Player Action`
- `Perceived Consequence`
- `What Not To Copy`
- `Design Dimension Inference`
- `Author Must Preserve`
- `Productive Ambiguity`
- `Missing Decision`
- `Next Reference Constraint Sheet`

Add `core/templates/intake/auteur-systems-first-intake.md`.

Fields:

- `Starting material`: system, toy, formal constraint, personal statement,
  visual rule, narrative device, or aesthetic rule.
- `Why this must remain strange`
- `What player behavior should emerge`
- `What the agent must not normalize`
- `Smallest playable study`
- `What would make this no longer itself`
- `Human-only direction decision`

Add `core/templates/direction/human-only-decision-log.md`.

Fields:

- `Decision area`: taste, selected concept, Direction Lock, stage movement,
  public promise, kill/pivot/reboot.
- `Options AI proposed`
- `Option human accepted`
- `Options human rejected`
- `Reason in creator's words`
- `Decision AI is not allowed to make`
- `Revisit condition`

Update `core/templates/direction/concept-card.md`.

New fields:

- `Human-authored choice`
- `Could this be generic?`
- `Generated material used`
- `What was subtracted`
- `Fragile novelty risk`
- `Empty novelty risk`
- `Proof before more generation`

Update `core/templates/direction/concept-portfolio.md`.

New fields:

- `Intentional failure variants`: two worse variants per concept with named
  failure modes.
- `Review economy cut`: concepts removed before presentation and why.
- `Taste veto record`: if the creator rejects a recommendation, capture why.
- `Selected human decision log`


## New Templates

### Beginner Craft Exercises

Add these small exercise templates instead of one large curriculum document:

- `core/templates/direction/formal-elements-map.md`
- `core/templates/direction/experience-chain.md`
- `core/templates/direction/primary-verb-feel-sheet.md`
- `core/templates/direction/level-teaching-plan.md`
- `core/templates/evidence/beginner-playtest-report.md`
- `core/templates/direction/taste-preservation-decision.md`

`experience-chain.md` should use this shape:

```text
Desired player experience:
Runtime dynamic that could create it:
Mechanic or content rule that could produce that dynamic:
Non-mechanical material that matters:
What the player must understand:
What a playtest should show:
What players might appropriate:
Authorial choice to preserve:
```

`beginner-playtest-report.md` should require:

- `Research question`
- `Participant fit`
- `Scenario or task`
- `Observed behavior`
- `Player quote`
- `Designer inference`
- `Severity`
- `Confidence`
- `Proposed change`
- `Retest condition`
