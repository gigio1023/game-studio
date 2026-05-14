# 07 Deep Source Notes: Local Reference Sweep

[Back to index](../07-deep-source-notes.md)

## Local Reference Sweep

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


## Local Reference Sweep

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
