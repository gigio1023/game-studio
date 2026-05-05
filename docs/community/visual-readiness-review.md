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

## Diagram References

| Source | Quality pattern |
| --- | --- |
| [Kubernetes components](https://kubernetes.io/docs/concepts/overview/components/) | Put system boundaries before component detail. |
| [Kubernetes diagram guide](https://kubernetes.io/docs/contribute/style/diagram-guide/) | Treat diagrams as maintained docs with source, alt text, and consistent labels. |
| [Docker overview](https://docs.docker.com/get-started/docker-overview/) | Show the main actor-to-system flow before explaining implementation parts. |
| [Prometheus overview](https://prometheus.io/docs/introduction/overview/) | Use a small number of named components and directionally clear data flow. |
| [OpenTelemetry Collector architecture](https://opentelemetry.io/docs/collector/architecture/) | Make the pipeline readable as one primary path with optional support around it. |
| [Apache Airflow overview](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html) | Separate scheduler, state, execution, and authoring responsibilities. |
| [Argo CD components](https://argo-cd.readthedocs.io/en/stable/developer-guide/architecture/components/) | Name the responsibility of each service instead of listing every file or API. |
| [Dapr overview](https://docs.dapr.io/concepts/overview/) | Keep the application path central and show platform support as a surrounding layer. |
| [GitHub Actions concepts](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows) | Explain event, work, runner, and result as a compact execution model. |
| [Next.js server and client components](https://nextjs.org/learn/react-foundations/server-and-client-components) | Use diagrams to clarify ownership boundaries that text alone can blur. |
| [Stripe subscriptions overview](https://docs.stripe.com/billing/subscriptions/overview) | Make state transitions explicit and avoid hiding lifecycle decisions in prose. |
| [Google developer image style](https://developers.google.com/style/images) | Require useful alt text, crisp exports, and images that add information. |
| [Cloudflare diagram style](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/diagrams/) | Use diagrams only when they reduce cognitive load and keep labels concise. |
| [Apple-inspired DESIGN.md](https://getdesign.md/apple/design-md) | Use low-density tiles, near-invisible chrome, a single blue accent, and crisp typography. |

## Visual Decisions

- Use a small static badge row for trust and routing.
- Keep one overview diagram near the top.
- Keep the diagram sparse enough to read on GitHub without zooming.
- Use the `.drawio` source as the editable artifact.
- Export SVG for README sharpness and PNG for fallback inspection.
- Avoid decorative product screenshots because the project is a framework, not an app UI.
- Avoid a logo until the project has a stable public brand.

## Diagram Standard

The README diagram should show:

- How creator input becomes one route and one first proof.
- How repo context feeds the playable proof loop.
- Where review, gates, and human decisions affect the next step.

It should not show every file, every role, every template, or a bottom legend.

## Quality Definition

A README diagram is ready only if it passes these checks:

- A new reader can explain the diagram as entry, route, repo context, playable
  proof loop, and human authority after a short scan.
- There is one dominant path. Secondary support uses weaker visual weight and
  never competes with the production path.
- Boundaries are semantic, not organizational. The diagram groups by reader
  question: input, route, target repo, proof loop, and human authority.
- Arrow grammar is stable: solid arrows show the production path and the return
  arrow inside the proof loop shows iteration.
- Color stays restrained. Blue is the only accent for active routing and proof;
  white, parchment, near-black, hairlines, and muted gray carry structure.
- Text remains readable at normal GitHub README width without zooming.
- The diagram has an editable `.drawio` source plus exported SVG for README
  sharpness and PNG for fallback inspection.
- The alt text states the same mental model as the diagram.
- It does not imply that scripts judge game quality or that agents can replace
  human taste and stage decisions.
- Layout checks pass: no overlapping labels, no crossed primary arrows, enough
  whitespace between zones, and a consistent type scale.

## Remaining Visual Work

- Add a logo only after the project name and public positioning are stable.
- Add one example project diagram after the sample project becomes complete.
- Consider a small docs map if the repository grows beyond the current README map.
