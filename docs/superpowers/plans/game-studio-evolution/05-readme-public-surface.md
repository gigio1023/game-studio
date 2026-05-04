# 05 README And Public Visual Surface

## Objective

Improve Game Studio's public-facing surface so it communicates the system quickly, visually, and credibly, while staying honest about what the framework can automate, what must be proven in play, and what remains under human authorship.

## Files

- Modify: `README.md`
- Modify: `docs/assets/game-studio-system-map.drawio`
- Modify: `docs/assets/game-studio-system-map.drawio.png`
- Create: `docs/assets/readme-hero-system-map.drawio`
- Create: `docs/assets/readme-hero-system-map.drawio.png`
- Create: `docs/public-surface-style.md`
- Modify: `docs/community/visual-readiness-review.md`
- Modify: `docs/community/publication-readiness-review.md`
- Modify: `examples/README.md`

## OSS README References

Use these repositories as public-surface references. Do not copy their visual identity. Extract patterns.

| Repo | Useful pattern |
| --- | --- |
| [React](https://github.com/facebook/react) | Clear one-line identity, three plain-language value pillars, docs-first flow. |
| [Kubernetes](https://github.com/kubernetes/kubernetes) | Mature governance, support, community, and adopter routing without cluttering the opening. |
| [VS Code](https://github.com/microsoft/vscode) | Distinguishes open-source repo from product distribution clearly. |
| [Vite](https://github.com/vitejs/vite) | Compact hero, memorable value bullets, package/status table. |
| [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) | Minimal README that points quickly to docs and community. |
| [Supabase](https://github.com/supabase/supabase) | Product capability map and "how it works" section. |
| [FastAPI](https://github.com/fastapi/fastapi) | Strong feature bullets, docs/source split, credibility through concrete benefits. |
| [LangChain](https://github.com/langchain-ai/langchain) | Ecosystem map that separates core library, adjacent products, and advanced paths. |
| [Godot](https://github.com/godotengine/godot) | Project identity, engine scope, community ownership, docs/demo routing. |
| [Vue](https://github.com/vuejs/core) | Sponsors, questions, issues, contribution routing, and lightweight community surface. |
| [Svelte](https://github.com/sveltejs/svelte) | Short identity and website-first learning path. |
| [uv](https://github.com/astral-sh/uv) | High-signal command examples and performance positioning. |
| [Deno](https://github.com/denoland/deno) | Simple brand promise and runtime scope. |
| [Next.js](https://github.com/vercel/next.js) | Fast setup path and ecosystem docs routing. |

## README Strategy

The README should answer in this order:

1. What is Game Studio?
2. Who is it for?
3. Does it start from an existing direction or from taste?
4. What problem does it solve?
5. What does it install into a target repo?
6. What proof loop does it enforce?
7. How do Codex and Claude use it?
8. Where do contributors go?

It should not lead with:

- internal contributor checks
- schema details
- every template path
- long research explanation
- every role
- "evidence" as the main product slogan
- defensive claims that it is not a game generator without explaining the
  supported automation path

## Deeper OSS Surface Patterns

The cloned README sweep changes the README plan in concrete ways:

- React, Deno, Godot, Vite, and uv all answer identity immediately. Game Studio
  should lead with "discovery-driven, proof-gated AI game production system"
  and one sentence that says it can start from either existing direction or
  taste-to-game discovery.
- Godot and Supabase use one meaningful visual to explain the object. Game
  Studio should use one hero system map showing entry mode, target repo state,
  playable proof, role review, gate verdict, and next proof.
- VS Code separates open-source repo identity from product distribution. Game
  Studio should separate framework repo development from target game adoption.
- Kubernetes, Supabase, Vue, and VS Code route support, community, security, and
  contribution into distinct lanes. Game Studio should keep Community short and
  link to specific docs.
- uv and FastAPI use concrete commands or examples where the value is
  operational. Game Studio should show one Codex install prompt and one Claude
  install prompt, but keep contributor commands out of the opening.
- Vite, React, Vue, Svelte, and Tailwind keep detailed contribution instructions
  behind links. Game Studio should link `CONTRIBUTING.md` without naming all
  maintainer checks in the README body.

Avoid:

- sponsor or community blocks before product comprehension
- long badge rows
- architecture diagrams that require prior knowledge
- giant feature lists that do not map to the first successful outcome
- public claims that imply scripts can judge game quality

## Visual System

- [ ] Replace the current single system map with a README-optimized hero map.

The hero map should show:

```text
Target Game Repo
  -> entry mode: existing direction / taste-to-game / brownfield unknown
  -> .game-studio state
  -> taste / concept / direction / milestone / proof
  -> role review
  -> gate verdict
  -> next proof
```

- [ ] Keep detailed architecture diagrams in docs, not the README hero.

- [ ] Add a compact "operating loop" visual.

Suggested text diagram:

```text
Taste or Direction -> Concept -> Proof -> Review -> Gate -> Next Proof
```

- [ ] Add a "what you get" table with five rows.

Rows:

- Entry routing
- Creative discovery
- Project-local state
- Stage model
- Evidence contracts
- Role-led reviews
- Adapter skills

Suggested table:

| Layer | What it gives a game repo | Primary proof |
| --- | --- | --- |
| Entry | Existing direction, taste-to-game, or ambiguous brownfield route | selected entry mode |
| Discovery | Taste profile, concept slate, creative brief, proof budget | first playable proof contract |
| State | Direction, milestone, proof, review, and drift ledgers | durable project context |
| Stages | Direction lock through release candidate | current stage and next gate |
| Evidence | claim-to-proof contracts | playable capture or structured observation |
| Reviews | role-led findings and verdicts | severity, confidence, next proof |
| Adapters | Codex and Claude entry points | project-local skills and snippets |

- [ ] Add a "repository vs installed framework" section.

Required distinction:

| Surface | Purpose | Owned by |
| --- | --- | --- |
| Source repository | Framework docs, templates, adapters, schemas, contributor checks | Game Studio maintainers |
| Installed state | Direction, milestones, evidence, reviews, drift, waivers | Target game project |
| Adapter examples | Codex and Claude bootstraps plus optional runtime helpers | Runtime adapter layer |

- [ ] Add a compact public README routing table.

Suggested table:

| Need | Go to |
| --- | --- |
| Understand the loop | Operating Loop |
| Install into a game repo | `docs/install-and-upgrade.md` |
| Start from project type | `docs/starter-paths.md` |
| Contribute to Game Studio | `CONTRIBUTING.md` |
| Report a security concern | `SECURITY.md` |
| Ask a usage question | discussions or support channel |

- [ ] Add a capability map.

Suggested table:

| Capability | What it gives a game team | Where it lives |
| --- | --- | --- |
| Creative discovery | turns taste and references into concept candidates | intake and direction templates |
| Concept shaping | compares, rejects, parks, and selects game seeds | concept slate and creative brief |
| Project state | durable direction and evidence memory | `.game-studio/` |
| Milestones | staged proof order | core docs and templates |
| Evidence gates | playable proof before claims | gate docs |
| Role reviews | targeted critique, not all roles every time | role docs |
| Adapters | agent-specific operating instructions | `adapters/` |

- [ ] Add a "what this does not do" table.

Rows:

- Does not promise one-prompt finished games.
- Does not own the user's taste or final creative authority.
- Does not make scripts judge game quality.
- Does not require every role every time.
- Does not replace playtesting.
- Does not make public promises without build evidence.

Also add a "what it can automate" table:

- can propose concept candidates from taste and references
- can turn a selected concept into a creative brief and first proof
- can plan and implement bounded playable proofs in Codex or Claude Code
- can route reviews, missing proof, and next actions
- can help move from prototype to release candidate when gates keep passing

## Public Surface Style

- [ ] Create `docs/public-surface-style.md`.

Rules:

- Keep README under the existing repository length target.
- Use one hero image.
- Keep badges limited to license, agent support, docs, and review model.
- Use tables for scanability.
- Avoid a wall of role names.
- Link out to docs for depth.
- Put contributor commands in `CONTRIBUTING.md`, not the README.
- Use `proof-gated`, `playable proof`, `validation`, and `claim-to-proof`
  language in public copy.
- Use `evidence` only when naming internal schemas, ledgers, or artifact classes.

## README Proposed Outline

```markdown
# Game Studio

Discovery-driven, proof-gated AI game production system.

One supporting sentence that says Game Studio helps Codex and Claude Code turn
either existing direction or a player's taste profile into playable, reviewed,
finishable game projects.

Hero image.

## Why It Exists
## Operating Loop
## Start From Taste Or Direction
## What You Get
## What It Can Automate
## What It Does Not Do
## Quick Start
## Install Surface
## Milestone Order
## Repository Map
## Start Here
## Community
```

## First Screen Acceptance

The first screen of the GitHub README should communicate:

- identity
- target user
- taste-to-game and existing-direction entry paths
- proof loop
- adapter support
- one visual map

It should not require reading:

- role roster details
- schema details
- contributor check commands
- research bibliography
- every template path

README guardrails:

- No contributor command block above Quick Start.
- No schema or path inventory in the first screen.
- No claim that scripts validate game quality.
- No unexplained "it is not a game generator" disclaimer.
- No evidence-heavy product slogan.
- One hero visual only.
- Hero visual must show entry mode -> target repo -> state -> playable proof ->
  role review -> gate -> next proof.

## Visual Readiness Review

- [ ] Update `docs/community/visual-readiness-review.md`.

Add checks:

- hero image legible at GitHub README width
- no decorative-only diagram
- diagrams explain state, proof, roles, and gate flow
- README scan path works without reading every doc
- contributor tooling is not presented as product proof

## Acceptance

- README communicates the product in under one screen.
- Visuals show the operating loop, not abstract framework boxes.
- User-facing verification is proof/gate based.
- Public copy uses proof-gated language and keeps evidence as an internal
  artifact term.
- Contributor scripts are linked only from contributor/maintainer surfaces.
- Public docs make Game Studio look like a serious OSS framework, not a prompt dump.
