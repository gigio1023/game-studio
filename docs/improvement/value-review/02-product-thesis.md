# Product Thesis

Game Studio should stay a discovery-driven, proof-gated AI game production
system. That phrase is useful because it names both entry work and production
discipline.

## Product Boundary To Preserve

Game Studio owns:

- entry routing
- creative discovery
- project-local state
- proof budgets
- milestone contracts
- role-led reviews
- gate verdicts
- internal artifact records
- Codex and Claude Code adapters

Game Studio does not own:

- the user's taste
- final concept selection
- Direction Lock
- stage movement
- public promises
- a claim that one prompt can finish a game
- engine facts that belong in a target project or profile

## Public Language

Use these terms in public surfaces:

- proof
- playable proof
- proof target
- proof budget
- proof-gated
- validation
- claim-to-proof
- role-led review

Use `evidence` only for internal artifacts: captures, builds, playtest notes,
QA results, telemetry, schemas, decision records, and release claim checks.

## Strong Product Claim

```text
Game Studio helps Codex and Claude Code turn either an existing game direction
or a creator's taste profile into bounded playable proofs, role reviews, and
production decisions.
```

This is the durable claim. It should remain more important than any single
script, schema, diagram, or example.

## Weak Product Claims To Avoid

| Weak Claim | Problem |
| --- | --- |
| It automatically makes games. | Implies false autonomy and hides human authorship. |
| It validates game quality with scripts. | Confuses repository health with play quality. |
| It is an evidence system. | Sounds like audit tooling and weakens the creative promise. |
| It is a prompt pack. | Hides the state, role, gate, and proof model. |
| It is a full game engine workflow. | Overpromises engine-specific production support. |

## Product Surface Work

Improve these surfaces first:

| Surface | Change |
| --- | --- |
| `README.md` | Keep the first screen focused on entry modes, proof loop, and human authority. |
| `docs/product-boundary.md` | Keep public language and ownership boundaries canonical. |
| `docs/public-surface-style.md` | Keep README, diagram, and copy standards aligned with the product thesis. |
| `docs/plain-language-game-design-glossary.md` | Define proof, gate, stage, evidence, and human authority in non-expert language. |

## Proof Of Improvement

Ask a fresh agent or reviewer to read only the README and answer:

- What does Game Studio help build?
- Can it start from taste as well as direction?
- What does the AI own?
- What does the human own?
- What proves progress?
- What does the framework refuse to promise?

If the reviewer cannot answer those in one pass, the product surface is not
sharp enough.
