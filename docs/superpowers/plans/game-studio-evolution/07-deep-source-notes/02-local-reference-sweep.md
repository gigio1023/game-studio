# 07 Deep Source Notes: Local Reference Sweep

[Back to index](../07-deep-source-notes.md)

## Local Reference Sweep

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


## Local Reference Sweep

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


## Local Reference Sweep

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


## Local Reference Sweep

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


## Local Reference Sweep

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
