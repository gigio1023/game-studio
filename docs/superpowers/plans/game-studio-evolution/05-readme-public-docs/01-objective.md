# 05 README And Public Visual Design: Objective

[Back to index](../05-readme-public-docs.md)

## Objective

Improve Game Studio's public-facing docs so it communicates the system quickly, visually, and credibly, while staying honest about what the framework can automate, what must be proven in play, and what remains under human authorship.


## Files

- Modify: `README.md`
- Modify: `docs/assets/game-studio-system-map.drawio`
- Modify: `docs/assets/game-studio-system-map.drawio.png`
- Create: `docs/assets/readme-hero-system-map.drawio`
- Create: `docs/assets/readme-hero-system-map.drawio.png`
- Create: `docs/public-docs-and-release-copy.md`
- Modify: `docs/community/visual-readiness-review.md`
- Modify: `docs/community/publication-readiness-review.md`
- Modify: `examples/README.md`


## OSS README References

Use these repositories as public-area references. Do not copy their visual identity. Extract patterns.

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
| [Vue](https://github.com/vuejs/core) | Sponsors, questions, issues, contribution routing, and lightweight community area. |
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


## Deeper OSS README Patterns

The cloned README sweep changes the README plan in concrete ways:

- React, Deno, Godot, Vite, and uv all answer identity immediately. Game Studio
  should lead with "AI-assisted game production framework for playable validation"
  and one sentence that says it can start from either existing direction or
  taste-to-game discovery.
- Godot and Supabase use one meaningful visual to explain the object. Game
  Studio should use one hero system map showing entry mode, target repo state,
  playable validation, role review, gate verdict, and next proof.
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
