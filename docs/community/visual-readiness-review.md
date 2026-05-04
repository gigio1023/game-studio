# Visual Readiness Review

This review records the visual standard used for the public README.

## Sources Consulted

| Source | Applied pattern |
| --- | --- |
| [Next.js README](https://github.com/vercel/next.js/) | Compact badge row, short product statement, then fast routing to docs and community. |
| [Pydantic README](https://github.com/pydantic/pydantic) | Badges and concise links to documentation, contributing, and security surfaces. |
| [LangChain README](https://github.com/langchain-ai/langchain) | Short value statement, quickstart, ecosystem links, and community routing. |
| [LangGraph README](https://github.com/langchain-ai/langgraph) | Agent-oriented positioning with documentation and additional resources separated. |
| [Langfuse README](https://github.com/langfuse/langfuse) | Product README with overview visuals, deployment routes, support, contributing, and license. |
| [Kubernetes README](https://github.com/kubernetes/kubernetes) | README as a hub that sends readers to deeper community and developer docs. |
| [Rust README](https://github.com/rust-lang/rust) | Clear scope statement and contributor documentation routing. |

## Visual Decisions

- Use a small static badge row for trust and routing.
- Keep one overview diagram near the top.
- Keep the diagram sparse enough to read on GitHub without zooming.
- Use the `.drawio` source as the editable artifact.
- Export a PNG for README rendering.
- Avoid decorative product screenshots because the project is a framework, not an app UI.
- Avoid a logo until the project has a stable public brand.

## Diagram Standard

The README diagram should show:

- What gets installed.
- Where it lands in the target game repository.
- How the production loop works.
- Why role review is more important than script output.

It should not show every file, every role, or every template.

## Remaining Visual Work

- Add a logo only after the project name and public positioning are stable.
- Add one example project diagram after the sample project becomes complete.
- Consider a small docs map if the repository grows beyond the current README map.
