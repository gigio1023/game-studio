# 07 Deep Source Notes

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

### everything-claude-code

Sources reviewed:

- `everything-claude-code/docs/SELECTIVE-INSTALL-ARCHITECTURE.md`
- `everything-claude-code/docs/SESSION-ADAPTER-CONTRACT.md`
- `everything-claude-code/docs/ECC-2.0-REFERENCE-ARCHITECTURE.md`

Useful adoption:

- Install should be a planned transaction: request normalization, module
  resolution, target planning, operation planning, execution, state write, and
  lifecycle follow-up.
- Each copied or generated file needs ownership metadata: requested, resolved,
  copied, generated, transformed, or user-owned.
- Adapter state should use versioned snapshots instead of implicit runtime
  assumptions.

Reject:

- Do not import daemon, terminal, or runtime orchestration as product scope.

Plan landing:

- `01-product-boundary-state.md`: versioned project state.
- `04-adapters-install-contribution.md`: manifest, dry run, ownership matrix.

### oh-my-codex

Sources reviewed:

- `oh-my-codex/docs/STATE_MODEL.md`
- `oh-my-codex/docs/plugin-bundle-ssot.md`
- `oh-my-codex/docs/prompt-guidance-contract.md`
- `oh-my-codex/docs/codex-native-hooks.md`

Useful adoption:

- State transitions need terminal outcomes such as done, blocked,
  needs-context, failed, and user-decision-needed.
- Compatibility layers should be generated or verified from canonical source,
  not hand-maintained as divergent copies.
- Prompt behavior needs a contract: when to ask, when to proceed, when to stop,
  and what evidence is required before claiming completion.

Reject:

- Do not let adapter prompt contracts redefine core stage semantics.

Plan landing:

- `01-product-boundary-state.md`: state transition rules.
- `02-review-routing-evidence.md`: outcome vocabulary.
- `04-adapters-install-contribution.md`: adapter source of truth.

### oh-my-claudecode

Sources reviewed:

- `oh-my-claudecode/docs/TEAM-WORKTREE-MODE.md`
- `oh-my-claudecode/docs/shared/verification-tiers.md`
- `oh-my-claudecode/docs/HOOKS.md`

Useful adoption:

- Parallel implementation needs disjoint write scopes, leader-owned
  coordination, dirty-work preservation, and visible worker state.
- Verification depth should scale with risk, file count, architecture impact,
  security impact, and user-facing change.
- Hooks are adapter examples and guidelines, not quality judges.

Reject:

- Do not require full multi-agent review for every small change.

Plan landing:

- `02-review-routing-evidence.md`: risk-based review routing.
- `04-adapters-install-contribution.md`: optional hooks.
- `06-implementation-roadmap.md`: phased risk controls.

### clawhip

Sources reviewed:

- `clawhip/docs/memory-offload-architecture.md`
- `clawhip/docs/event-contract-v1.md`
- `clawhip/docs/native-event-contract.md`

Useful adoption:

- Use a hot pointer layer plus sharded detail. Game Studio's project state should
  have a short active index and detailed ledgers for proof, drift, decisions,
  reviews, and playtests.
- Runtime events and hook payloads need a small, frozen shared contract with
  additive augmentation only.

Reject:

- Do not build a database or event bus before file-backed state proves
  insufficient.

Plan landing:

- `01-product-boundary-state.md`: state sharding model.
- `04-adapters-install-contribution.md`: adapter event compatibility policy.

### career-ops

Sources reviewed:

- `career-ops/docs/ARCHITECTURE.md`
- `career-ops/docs/SCRIPTS.md`
- `career-ops/docs/SETUP.md`

Useful adoption:

- Separate system-owned artifacts from user-owned data. Scripts can maintain
  consistency, but the canonical tracker or decision artifact must remain clear.
- Batch work needs resumable state, explicit file naming, and integrity checks.

Reject:

- Do not let dashboards or script health become the product proof.

Plan landing:

- `04-adapters-install-contribution.md`: ownership matrix and safe upgrade.
- `05-readme-public-area.md`: public docs should show product flow, not
  internal script mechanics.

### ouroboros

Sources reviewed:

- `ouroboros/docs/architecture.md`
- `ouroboros/docs/events.md`
- `ouroboros/docs/runtime-capability-matrix.md`

Useful adoption:

- A vague request should be crystallized into a seed-like direction artifact
  before execution.
- The seed-like artifact should not be forced directly into Direction Lock for
  novice creators. It should pass through concept slate, creative brief,
  constraint ladder, and first proof planning.
- Evaluation should be progressive: mechanical checks first, semantic review
  second, consensus or heavier review only when risk triggers it.
- Stagnation patterns are useful for agent loops: repeated outputs, oscillation,
  no progress, and diminishing returns should trigger a different review mode,
  not more of the same prompt.

Reject:

- Do not add event sourcing, cost routers, or recursive execution engines to
  Game Studio core.

Plan landing:

- `01-product-boundary-state.md`: direction lock and seed-like state.
- `02-review-routing-evidence.md`: progressive review routing.
- `04-adapters-install-contribution.md`: optional automation safeguards.

### ralph-claude-code

Sources reviewed:

- `ralph-claude-code/README.md`
- `ralph-claude-code/CLAUDE.md`
- `ralph-claude-code/docs/CLI_OPTIONS.md`

Useful adoption:

- Long-running autonomous loops need explicit stop conditions, circuit breakers,
  iteration budgets, rate limits, and durable logs.
- Exit should require both task completion and no meaningful continuation.
- Circuit breakers should distinguish repeated no-progress, repeated errors,
  permission denials, and unresolved user-question loops.

Reject:

- Do not make autonomous looping the default Game Studio workflow.

Plan landing:

- `04-adapters-install-contribution.md`: optional loop safety pack.
- `06-implementation-roadmap.md`: risk control for agent automation.

## OSS Public Docs Sweep

Cloned references:

- [React](https://github.com/facebook/react)
- [Kubernetes](https://github.com/kubernetes/kubernetes)
- [VS Code](https://github.com/microsoft/vscode)
- [Vite](https://github.com/vitejs/vite)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [Supabase](https://github.com/supabase/supabase)
- [FastAPI](https://github.com/fastapi/fastapi)
- [LangChain](https://github.com/langchain-ai/langchain)
- [Godot](https://github.com/godotengine/godot)
- [Vue](https://github.com/vuejs/core)
- [Svelte](https://github.com/sveltejs/svelte)
- [uv](https://github.com/astral-sh/uv)
- [Deno](https://github.com/denoland/deno)
- [Next.js](https://github.com/vercel/next.js)

Adopt these patterns:

- Put identity and scope in the first screen. React, Deno, Godot, Vite, and uv
  make the "what is this" answer immediate.
- State both supported entry paths early: existing direction and taste-to-game
  discovery.
- Use one credible visual, not many decorative diagrams. Godot and Supabase use
  product or architecture imagery that explains the object.
- Keep README contribution routing short, then link out. React, Vite, Vue, and
  Godot keep contribution details out of the opening.
- Separate product docs, support, security, and contribution lanes. Kubernetes,
  VS Code, Supabase, and Vue route different user intents explicitly.
- Show concrete examples when the value is operational. uv and FastAPI make
  usage concrete with commands and small examples.
- Avoid making `evidence` the public product word. It reads like an internal
  audit term. Use `milestone-gated playable validation` and reserve evidence for internal artifact
  records.
- Distinguish repo from product distribution. VS Code's README is useful for
  explaining open-source repo boundaries without muddying product identity.
- Put security reporting in a dedicated policy with private reporting, in-scope
  and out-of-scope boundaries, and requested reproduction detail.
- Put AI contribution disclosure, signed or verified contribution expectations,
  setup, tests, and stylistic-refactor rules in contributor docs, not README.

Avoid:

- Sponsor walls or community graphics before the user understands the product.
- Badge rows that substitute status optics for clarity.
- Long README walls that make docs routing unclear.
- Feature checklists that do not map to the user's first successful outcome.

Plan landing:

- `05-readme-public-area.md`: first-screen structure, hero map, docs routing,
  contribution separation, visual acceptance checks.
- `04-adapters-install-contribution.md`: contributor and maintainer lanes.

## Methodology Deepening

The deeper research strengthens these product rules:

- Design discovery should diverge and converge. The product needs an entry
  layer before Direction Lock so creators can move from taste to concepts to a
  selected proof target.
- Game-industry production language more naturally uses prototype, playtest,
  validation, proof of concept, milestone, first playable, vertical slice, and
  de-risking. `Evidence` is useful internally but should not carry the slogan.
- MDA implies every mechanic claim needs a path to player dynamics and intended
  experience. Game Studio evidence should ask for that path explicitly.
- Playtesting should be designed around hypotheses, not general impressions.
  Observation, metric, and interview data should be separated before synthesis.
- Accessibility must be a design constraint early. Waiting until release turns
  barriers into expensive rework.
- Public release readiness includes store promises, demo area, support,
  credits, and post-release learning.
- Technical implementation review must preserve player experience, not only
  code shape.

Plan landing:

- `08-creative-discovery-novice-authorship.md`: entry routing, taste-to-game,
  concept slate, proof budget, and authorship control.
- `03-game-craft-production-release.md`: craft review packs, playtest
  triangulation, accessibility, release promises.
- `06-implementation-roadmap.md`: phase order and acceptance checks.
