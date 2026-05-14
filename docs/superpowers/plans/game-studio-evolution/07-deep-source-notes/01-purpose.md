# 07 Deep Source Notes: Purpose

[Back to index](../07-deep-source-notes.md)

## Purpose

This file records the deeper source sweep behind the plan. It is not an
implementation checklist. Use it to understand why the plan changes the product
shape instead of only adding more knowledge files.

Terminology update:

- Use `milestone-gated playable validation`, `playable proof`, `proof target`, and `validation` for the
  public product story.
- Use `evidence` only for internal artifact classes, schemas, ledgers, captures,
  playtest notes, QA results, and release claim checks.
- `Evidence-locked` is not an industry term and should not become the product
  phrase. The better public phrase is `AI-assisted, playable-validation`.


## Local Reference Sweep

### Claude-Code-Game-Studios

Sources reviewed:

- `Claude-Code-Game-Studios/.claude/docs/context-management.md`
- `Claude-Code-Game-Studios/.claude/docs/workflow-catalog.yaml`
- `Claude-Code-Game-Studios/.claude/skills/adopt/SKILL.md`
- `Claude-Code-Game-Studios/.claude/docs/templates/*`

Useful adoption:

- Treat context continuity as production infrastructure. Game Studio should add
  project state and active work files that survive compaction, handoff, and
  resumed agent sessions.
- Treat missing direction as an entry-routing problem, not only a documentation
  gap.
- Keep templates broad enough for real game production, but route them through
  stage and evidence needs so the user is not asked to fill every document.
- Adoption should classify missing, incompatible, stale, and user-owned
  artifacts instead of overwriting a target project.
- Stage movement should require explicit confirmation or a decision record. Gate
  checks can recommend advancement, but they should not silently mutate the
  project stage.

Reject:

- Do not mirror the very large role catalog. Game Studio should keep fewer roles
  with stronger authority and better review methods.
- Do not make Claude-specific directories the canonical product model.

Plan landing:

- `01-product-boundary-state.md`: project-local state and source adoption policy.
- `02-review-routing-evidence.md`: adoption audit workflow.
- `04-adapters-install-contribution.md`: safe install and upgrade.


## Local Reference Sweep

### gstack-game

Sources reviewed:

- `gstack-game/ETHOS.md`
- `gstack-game/CONTRIBUTING.md`
- `gstack-game/CHANGELOG.md`
- `gstack-game/skills/game-review/references/scoring.md`
- `gstack-game/skills/playtest/references/analysis-framework.md`
- `gstack-game/skills/gameplay-implementation-review/references/design-intent-checks.md`
- `gstack-game/skills/player-experience/references/walkthrough-phases.md`
- `gstack-game/docs/domain-judgment-gaps.md`

Useful adoption:

- Add taste-to-game discovery before Direction Lock. A novice creator may start
  from desired emotions, reference moments, disliked friction, or scenes rather
  than a formal game thesis.
- Add first-person player walkthroughs. Reviews should narrate what a target
  persona sees, does, understands, and feels moment by moment, then name blind
  spots instead of smoothing over them.
- Add design-intent survival review before code review. Clean code and passing
  tests are not enough if the implementation changed timing, feedback, affordance,
  or scope in ways that break the intended play experience.
- Add playtest triangulation. Single-source playtest findings remain hypotheses;
  dual-source findings become actionable patterns; triple-source findings become
  high-confidence blockers or priorities.
- Add mode-weighted review. Mobile, PC/console, multiplayer, narrative, and
  tabletop projects should not use identical weights for loop, economy,
  retention, motivation, and risk.
- Keep "boil lake, flag ocean" as a scope heuristic: complete bounded proofs,
  but reject platform rewrites, custom engines, and unbounded content plans.

Reject:

- Do not add global telemetry or hidden user-home state to the framework.
- Do not use numeric scores as approval by themselves. Scores must be paired
  with evidence, confidence, missing proof, and next action.
- Do not aggressively suggest every skill. Use stage routing and user intent.
- Do not generate giant idea catalogs. Use small concept slates with proof
  budgets, rejection reasons, and a selected next proof.

Plan landing:

- `02-review-routing-evidence.md`: severity, confidence, and next-proof protocol.
- `03-game-craft-production-release.md`: player walkthrough, playtest, design
  intent survival, mode weighting.
- `04-adapters-install-contribution.md`: contributor paths for domain experts.


## Local Reference Sweep

### gstack

Sources reviewed:

- `gstack/docs/skills.md`
- `gstack/docs/gbrain-sync.md`
- `gstack/docs/ON_THE_LOC_CONTROVERSY.md`

Useful adoption:

- Use distinct review modes with different authority: direction review,
  engineering review, design review, QA, release, and retrospective should not
  collapse into one generic "review" command.
- Review readiness dashboards help users see which required reviews ran, which
  were advisory, and what remains blocked.
- Cross-session memory needs explicit privacy and allowlist boundaries.

Reject:

- Do not store Game Studio state in a user-global directory as the default.
- Do not make sync, telemetry, or browser automation part of the core story.

Plan landing:

- `01-product-boundary-state.md`: local state model and privacy rule.
- `02-review-routing-evidence.md`: review readiness and routing.
- `05-readme-public-area.md`: public explanation of what is core versus
  optional.
