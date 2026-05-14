# Agentic AI Frameworks: Deep Dive: Research Question

[Back to index](../r2-03-agentic-frameworks.md)

## Research Question

This document addresses seven specific questions:

1. BMAD Method — full coverage: roles, gates, agent architecture, file conventions, strengths and weaknesses.
2. DSPy — patterns applicable to skill-as-program, typed constraints, and self-refining loops.
3. LangGraph StateGraph — patterns for production review workflows.
4. AutoGen, CrewAI, Microsoft TaskWeaver — multi-agent collaboration with human-in-the-loop; how authority boundaries are handled.
5. Anthropic Claude Agent SDK and Claude Code skills — published best practices for skills, sub-agents, and gates.
6. Specific cross-cutting patterns: role-as-markdown, gates-as-functions, decision records as first-class artifacts, memory architectures, reflection-before-action.
7. Systems that treat "AI must stop and ask the human" as a first-class output (Game Studio's USER_DECISION_NEEDED pattern).

---


## Sources Surveyed

- https://github.com/bmad-code-org/BMAD-METHOD — primary BMAD repo (README, CHANGELOG.md)
- https://docs.bmad-method.org/ — official BMAD documentation site
- https://deepwiki.com/bmadcode/BMAD-METHOD/8.1-agent-architecture-and-lifecycle — BMAD agent architecture wiki
- https://reenbit.com/the-bmad-method-how-structured-ai-agents-turn-vibe-coding-into-production-ready-software/ — BMAD role and workflow description
- https://bennycheung.github.io/bmad-reclaiming-control-in-ai-dev — BMAD applied analysis
- https://medium.com/@mariussabaliauskas/a-comparative-analysis-of-ai-agentic-frameworks-bmad-method-vs-github-spec-kit-edd8a9c65c5e — BMAD vs. GitHub Spec Kit comparison
- https://dspy.ai/ — DSPy official site
- https://dspy.ai/learn/programming/7-assertions/ — DSPy Assertions documentation
- https://docs.langchain.com/oss/python/langgraph/interrupts — LangGraph interrupt() documentation
- https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/tutorial/human-in-the-loop.html — AutoGen human-in-the-loop tutorial
- https://help.crewai.com/what-role-does-human-input-play-in-the-execution-of-tasks-within-a-crewai-crew — CrewAI human_input flag
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview — Claude Agent Skills overview
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices — Claude Skills authoring best practices
- https://claude.com/blog/building-agents-with-the-claude-agent-sdk — Anthropic engineering blog on Claude Agent SDK
- https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills — Anthropic engineering: Skills architecture

---


## BMAD Method: Full Coverage

### What BMAD Is

BMAD (Breakthrough Method for Agile AI-Driven Development) is an open-source framework for structuring AI agent collaboration across the software development lifecycle. The primary repo is at `github.com/bmad-code-org/BMAD-METHOD` (MIT license, ~5.5k forks as of research date). BMAD is tool-agnostic: it runs on Claude, Cursor, GitHub Copilot, and standard IDE chat interfaces.

### Architecture

BMAD deploys specialized agents as Markdown personas. In v5 and earlier, agents were defined in `.md` files directly. In v6, the source format shifted to YAML (`.agent.yaml`) compiled into Markdown for IDE consumption. As of v6.3+, agents are also overridable via TOML configuration files in `_bmad/custom/`. The working unit is the agent persona file — a Markdown document that tells the LLM which role to inhabit, what workflows to run, and which artifacts to produce.

**Agent file structure (v6):**
- `SKILL.md` entrypoints for every workflow and agent (v6.1.0)
- TOML-based customization under `_bmad/custom/` (v6.4.0)
- Sharded step-file architecture for complex skills (v6.2.1)
- `bmad-help` AI-powered guidance skill (v6.0.0-Beta.1)

### Roles Defined

BMAD ships with nine named agent roles across the development lifecycle:

| Role | Responsibility |
|---|---|
| BMAD Master | Orchestrates multi-agent workflow; picks which agent runs next |
| Analyst | Requirements gathering and research |
| Product Manager | Writes the PRD (Product Requirements Document) |
| Architect | System design; produces architecture document |
| UX Designer | User flows and UI specifications |
| Scrum Master | Sprint story generation from sharded epics |
| Developer | Implementation (v6.3 consolidated multiple dev personas into one: Amelia) |
| QA Engineer | Testing, validation, quality gate reports, traceability matrices |
| Tech Writer | Documentation |

Note: BMAD has no Creative Director, no taste-layer role, no role whose job is aesthetic or tonal judgment.

### Quality Gate System

Gates operate at every stage transition. The pattern is:
1. Each agent produces a **verifiable artifact** (not a chat response) — PRD, architecture document, test plan, story file.
2. The next agent receives only that artifact, not the full conversation history.
3. The QA agent produces an explicit "APPROVED" sign-off or a quality gate report listing failures.
4. Human review is positioned at planning-document boundaries (before development begins).

From v6.2.0, BMAD added a deterministic skill validator with 19 rules across 6 categories, integrated into CI, validating 32 workflow files. This is a meta-gate on the framework itself, not on produced artifacts.

**Three control layers (per the "Reclaiming Control" analysis):**
- Pre-generation: Versioned control manifests specifying libraries, performance constraints, and code-exclusion zones.
- CI/CD: Automated testing, quality scans, and security analysis on pull requests.
- Multi-layered PR review: Peers plus specialized AI agents (QA Agent, Product Owner Agent) check adherence to the PRD and architecture.

**Checkpoint-preview skill** (`/bmad-checkpoint-preview`, v6.3.0): A concern-ordered human review of commits, branches, or PRs — a lightweight human gate wired into the IDE workflow.

### Epic Sharding

BMAD's mechanism for preserving architectural context across large projects: the PRD is sharded into individual epic files. Each story file carries full implementation guidance plus the architectural decisions that constrain it. This counters the LLM's tendency to forget earlier constraints as context grows.

### File Conventions

- Each agent: one Markdown persona file (compiled from YAML)
- Each workflow: a `SKILL.md` entry point, pointing to sharded step files
- Customization: TOML overrides in `_bmad/custom/`
- Templates: separate Markdown template files per artifact type (PRD template, architecture template, story template)

### What BMAD Does Well

- **Artifact-first workflow.** Every phase produces a concrete, reviewable document. Agents operate on documents, not on chat state.
- **Context preservation through sharding.** Avoids the classic LLM context-loss problem by making epics self-contained.
- **Tool-agnostic.** Same Markdown files work across IDE environments.
- **Community extension system.** Expansion Packs (BMad Builder, Creative Intelligence Suite, Game Dev Studio module) let domain-specific logic live outside the core.
- **Scale-adaptive tracks.** Quick Flow / Standard / Enterprise reduce overhead for small tasks.
- **Party Mode.** Real subagent spawning via Agent tool for parallel multi-agent sessions (v6.2.1).

### What BMAD Fails At

- **No taste layer.** BMAD has no role for aesthetic, tonal, or creative-direction judgment. The framework is entirely oriented toward specification completeness, not quality of creative decision.
- **No playable proof concept.** BMAD produces documents — it cannot verify that a game is actually fun or that a creative direction is coherent.
- **Gate conditions are process gates, not value gates.** BMAD's QA Engineer checks that stories match the PRD. Nothing checks whether the PRD contains good ideas.
- **Code quality gap.** Real-world testing reveals "struggles with code quality and testing during development" despite structured planning — the gap between specification and execution quality is documented.
- **Human authority is poorly defined at scale.** The authority structure (Product Owner holds authority over epic sharding; QA Engineer produces "APPROVED" reports) does not specify what happens when an agent's judgment should be overridden for reasons that fall outside the defined criteria.
- **No decision records.** BMAD produces sequential artifacts but does not persist the reasoning behind decisions as a first-class artifact (no ADR-equivalent).
- **Escalation is implicit.** When a gate fails, the path back to a human is described informally, not as a structured output type.
- **LLM dependence is acknowledged but unresolved.** "Quality of the output is still dependent on the underlying LLM's" — BMAD does not provide a taste-evaluation layer that could compensate.

---


## DSPy Patterns

### What DSPy Is

DSPy (Stanford NLP, open-source) is a framework for programming — not prompting — language models. Its core insight: define input/output behavior declaratively via typed **Signatures**, choose a **Module** (prompting strategy), and let the optimizer find effective prompts automatically.

### Patterns Applicable to Game Studio Skills

**1. Signature-as-contract.** A DSPy Signature names typed input and output fields with explicit semantics:
```python
class EvaluatePitch(dspy.Signature):
    """Evaluate a game pitch against creative-direction criteria."""
    pitch: str = dspy.InputField()
    creative_direction: str = dspy.InputField()
    score: float = dspy.OutputField()
    verdict: Literal["PASS", "REVISE", "REJECT"] = dspy.OutputField()
    rationale: str = dspy.OutputField()
```
Game Studio gate skills could declare typed verdicts — `PASS / NEEDS_REVISION / USER_DECISION_NEEDED / REJECT` — enforced by the module rather than inferred from freeform text.

**2. Assert as a hard gate.** `dspy.Assert(condition, message)` enforces a boolean constraint on LLM output. On failure it injects the failed output and correction instruction back into the signature's context, triggering a retry loop. On persistent failure it raises `dspy.AssertionError` — a structured escalation signal. This is the closest DSPy analog to a gate that halts agentic execution.

**3. Suggest as a soft gate.** `dspy.Suggest(condition, message)` runs the same retry logic but does not halt on failure — it logs and continues. Useful for non-blocking review feedback in creative workflows where "try harder" is preferable to "stop everything."

**4. ChainOfThought as reflection-before-action.** `dspy.ChainOfThought` adds a mandatory reasoning field that the LLM populates before generating the output field. The reasoning is explicitly part of the output, not hidden. A gate skill can expose this reasoning as the `rationale` field in a structured verdict — making the LLM's prior thinking visible and reviewable by humans.

**5. Optimizer-discoverable prompts.** DSPy optimizers (BootstrapFewShot, MIPRO, etc.) can tune skill prompts against evaluation sets. Game Studio could build evaluation sets for creative-direction gate verdicts and tune gate skills against them — a path to measurably improving gate quality without manual prompt engineering.

**Key failure in DSPy for creative use:** DSPy's assertion gating is *implicit* — it silently loops rather than producing a structured "blocked, human review needed" output. For Game Studio's USER_DECISION_NEEDED pattern, explicit output typing is essential; DSPy alone does not enforce this.

---
