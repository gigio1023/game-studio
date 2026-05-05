# Agentic AI Frameworks: Deep Dive

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

## LangGraph And StateGraph Patterns

### Core Model

LangGraph represents agents as state machines. Nodes do work; edges define transitions; a persistent State object carries all context across steps, including through human interruptions. The framework uses checkpointers to durably persist state between human-approved steps.

### interrupt() — First-Class Human Gate

`interrupt(payload)` is a function any node can call to pause the graph and surface a structured payload to the caller:
```python
def review_node(state):
    verdict = interrupt({
        "type": "creative_review",
        "artifact": state["draft"],
        "question": "Does this match the established tone direction?"
    })
    return {"approved": verdict}
```
When called, the graph saves its entire state snapshot, halts, and returns `__interrupt__` in the API response. Execution only resumes when the caller sends `Command(resume=value)`. The interrupt payload is a structured dictionary — it *is* the decision record for that review point.

**This is the closest existing pattern to USER_DECISION_NEEDED as a first-class output.** The payload becomes a persistent record of what the AI needed answered and why.

### interrupt_before / interrupt_after

Static breakpoints set at compile or runtime for specific named nodes — useful for mandatory human review of every output from a critical node (e.g., every output from a `creative-direction-gate` node) without changing the node's code.

### State as Decision Record

Because all state is checkpointed before every interrupt, the full state at each human gate is automatically preserved. A sequence of interrupt snapshots is effectively an audit trail of all decisions made in a production review pipeline.

### Feedback Loop Pattern

When a human rejects output, LangGraph routes the state back to the generation node with the original content plus rejection rationale merged into state. The generation node re-runs with both. This is a structured "revise with context" loop rather than starting over.

### Limitation for Creative Work

LangGraph's state machine model fits structured approval workflows well but imposes graph topology as the architecture. Creative review pipelines with variable branching logic require designing the graph carefully upfront. The framework does not provide taste judgment — it provides the scaffolding to route taste judgments.

---

## AutoGen / CrewAI / TaskWeaver Patterns

### AutoGen

**HandoffTermination pattern** is the primary mechanism for "AI must ask human." When an agent cannot complete a task, it emits a `HandoffMessage` object. The team monitors for this and halts, requiring human input before the next `run()` call. This makes escalation a typed output from an agent, not an external interrupt — structurally analogous to USER_DECISION_NEEDED.

**Three human_input_mode values (v0.2; still relevant for design):**
- `NEVER` — fully autonomous, no human loop
- `TERMINATE` — human gate triggers only when the TERMINATE condition fires
- `ALWAYS` — human approves every step

In v0.4, authority is delegated through custom input callbacks on `UserProxyAgent`, enabling integration with web UIs, websocket streams, or API endpoints. The team decides when to pause via `HandoffTermination` or `TextMentionTermination` — the AI calls for the handoff; humans do not force interruptions at arbitrary points.

**Key pattern for Game Studio:** The AutoGen `HandoffMessage` approach maps well to USER_DECISION_NEEDED as a first-class agent output type. The agent explicitly produces a structured message saying "I need a human decision here and here is why," rather than silently looping or generating a generic question.

### CrewAI

**human_input flag on Task:** When set to `True`, the agent pauses before delivering its final answer and prompts for additional context, clarification, or output validation. This is a per-task flag, not a per-type-of-decision flag — it is coarser-grained than a typed escalation.

**Flows architecture:** Agents in a Flow operate within explicitly defined boundaries ("not free-roaming — specialized intelligence invoked at specific steps, doing specific jobs, then returning control"). This maps to bounded agentic execution, but CrewAI does not provide a formal decision-record artifact from these boundaries.

**Limitation:** CrewAI's `human_input` flag does not distinguish between types of human decisions needed. It triggers a prompt but does not produce a structured escalation record. For Game Studio, this would require wrapping.

### TaskWeaver (Microsoft)

TaskWeaver takes a code-first approach: agents translate requests into executable Python code, execute it, and return structured results. This is strong for deterministic operations (data analysis, validation scripts) but less suited to taste-layer creative review. TaskWeaver lacks a formal gate model.

**Relevant pattern:** TaskWeaver's emphasis on producing verifiable intermediate artifacts (executable code with explicit output) rather than chat text aligns with Game Studio's artifact-first principle. The agent's output is always something checkable, not an opinion.

---

## Claude Agent SDK And Claude Code Skills

### Skill Architecture

Skills are filesystem-based directories with a `SKILL.md` entry point using YAML frontmatter:
```yaml
---
name: creative-direction-gate
description: Evaluates artifacts against an established creative direction. Use when reviewing game content, pitches, or design documents for tonal and aesthetic alignment.
---
```

**Three-level progressive disclosure:**
- Level 1 (metadata, ~100 tokens, always loaded): `name` + `description` in YAML frontmatter
- Level 2 (instructions, ~5k tokens max, triggered): `SKILL.md` body loaded when skill is relevant
- Level 3 (resources, unlimited but not loaded until referenced): sharded reference files, scripts, templates

### Sub-Agent Patterns

Sub-agents run in isolated context windows. They do not inherit the parent conversation's skills — skills must be listed explicitly per sub-agent. Sub-agents are suited for parallelization (fan-out of independent tasks) and for "sifting large amounts of information" without contaminating the orchestrator's context.

The Anthropic engineering blog describes the core agent loop as: **gather context → take action → verify work → repeat.** Verification is explicit in the loop design, not optional.

**Compaction:** When approaching context limits, automatic summarization of prior messages preserves the agent's working memory without losing key decisions — relevant for long creative-review sessions.

### Gate-as-Feedback Pattern

Anthropic recommends feedback in the form of "clearly defined rules for an output, then explaining which rules failed and why." Code linting is cited as the model: deterministic, rule-per-failure, actionable. A gate skill that emits a structured verdict with per-criterion pass/fail maps exactly to this pattern.

### Permission Model

`allowedTools` whitelists specific tools per skill; `permissionMode: "dontAsk"` denies anything not in the list. This is the access-control model for skills — tools are the unit of permission, not abstract capabilities.

### Key Best Practice for Gate Skills (from authoring guidelines)

- SKILL.md body under 500 lines; split into sharded reference files beyond that.
- Descriptions must include both what the skill does and when to use it — this is the trigger condition, expressed as prose.
- Use the `plan-validate-execute` pattern for destructive or high-stakes operations: produce an intermediate structured plan artifact, validate the plan with a script, then execute.
- Avoid offering multiple code paths unless necessary; provide a default with an escape hatch.
- Feedback loops (validator → fix → re-validate) improve output quality for quality-critical tasks.

### Gap: No Native "Ask Human" Output Type

The Claude Agent SDK documentation does not define a native structured escalation type equivalent to USER_DECISION_NEEDED. The pattern must be implemented explicitly in skill instructions: the skill's SKILL.md must specify the conditions under which it produces a `USER_DECISION_NEEDED` verdict as a typed output rather than proceeding autonomously.

---

## Authority Boundary Patterns

### Systems That Treat "AI Must Stop And Ask" As First-Class Output

**LangGraph `interrupt()`:** The clearest example. A function call from within any node that produces a structured payload, halts the graph, and persists state. The payload is the structured request for human input. Resuming requires an explicit `Command(resume=value)`. Authority boundary is enforced by the runtime — the graph cannot proceed without a resume signal.

**AutoGen `HandoffMessage`:** A typed output value emitted by an agent. The team monitors for it via `HandoffTermination`. The agent produces the message; the framework routes it to a human-input channel. The authority boundary is explicit in the agent's output, not external to it.

**BMAD QA Agent "APPROVED" gate:** A weaker version — the QA agent produces an explicit signed-off artifact, and the next stage cannot begin without it. But the escalation path when QA fails is not formalized; it reverts to informal human judgment.

**DSPy `dspy.AssertionError`:** A hard halt that propagates out of the pipeline when retries are exhausted. Not designed as a human-facing escalation — it is a pipeline failure signal. Requires wrapping to become USER_DECISION_NEEDED.

**CrewAI `human_input=True`:** Soft pause before final answer delivery. Not typed by decision category; human receives a freeform prompt. Weakest of the four — it is an interruption, not a structured authority boundary.

### The USER_DECISION_NEEDED Pattern Compared

Game Studio's USER_DECISION_NEEDED is distinct from all surveyed patterns in one way: it is a **named typed verdict in a gate schema**, sitting alongside PASS / NEEDS_REVISION / REJECT. It is not an interrupt (runtime mechanism) or a proxy message (agent output type) or a hard error (pipeline failure) — it is a deliberate, semantically meaningful gate verdict that the skill produces when it determines the decision is outside its authority. This is a more principled design than any single surveyed system provides natively.

The closest architectural peer is LangGraph's `interrupt()` combined with a typed payload dictionary that distinguishes decision categories. Game Studio's advantage is that USER_DECISION_NEEDED is part of the gate schema, making it a first-class artifact from the start — not bolted on as a runtime mechanism.

---

## Comparison Table

| System | Role-As-Markdown? | Gate-As-Function? | Decision Records? | Reflection? | Human-Authority Boundary? |
|---|---|---|---|---|---|
| BMAD Method | Yes (compiled from YAML) | Partial (artifact sign-off; no typed function) | No (process artifacts only) | No | Weak (informal escalation) |
| DSPy | No | Yes (Assert/Suggest with retry) | No | Yes (ChainOfThought) | Partial (AssertionError as hard halt) |
| LangGraph | No | Yes (interrupt() is a function call) | Yes (state snapshot at each interrupt) | No native | Strong (interrupt blocks graph; typed payload) |
| AutoGen | No | Yes (HandoffTermination) | Partial (HandoffMessage is typed) | No | Strong (HandoffMessage as first-class output) |
| CrewAI | No | Weak (human_input flag) | No | No | Weak (freeform prompt pause) |
| TaskWeaver | No | No | Partial (executable artifacts) | No | None |
| Claude Skills | Yes (SKILL.md) | Partial (plan-validate-execute pattern) | No native | No | None native |
| Game Studio | Yes | Partially defined | Partially defined | Not yet | Strong (USER_DECISION_NEEDED in gate schema) |

---

## Relevance To Game Studio

### Pattern 1: Typed Verdict Schemas (from DSPy Signatures + LangGraph interrupt payloads)

Game Studio's gate verdicts should be typed enumerations with mandatory structured fields: `verdict` (enum), `rationale` (string), `blocking_criteria` (list of failed checks), and optionally `decision_context` (structured dict when verdict is USER_DECISION_NEEDED). DSPy shows that typed outputs enforce correctness; LangGraph shows that typed payloads make the interrupt itself a decision record.

**Implementation suggestion:** Define a `GateVerdict` Pydantic schema (or JSON Schema, as Game Studio uses `.schema.json` files) with these fields enforced. The existing `gate-verdict.schema.json` should include `USER_DECISION_NEEDED` as a valid enum value alongside PASS/NEEDS_REVISION/REJECT.

### Pattern 2: SKILL.md Progressive Disclosure (from Claude Agent Skills)

Every Game Studio role should be a skill directory: `SKILL.md` entry point with YAML frontmatter trigger description, plus sharded reference files for creative-direction criteria, evaluation rubrics, and decision examples. Level 1 metadata loads always; Level 2 gate instructions load on-demand; Level 3 reference materials (prior verdicts, canon examples) load only when cited.

**Implementation suggestion:** Structure each role playbook (e.g., `creative-director.md`) as a `SKILL.md` with explicit `when to use` prose in the description field, and move canon references into sharded `REFERENCES.md` or `CRITERIA.md` files within the role's skill directory.

### Pattern 3: HandoffMessage As Typed Escalation (from AutoGen)

The USER_DECISION_NEEDED verdict should produce a structured escalation artifact analogous to AutoGen's `HandoffMessage`: a Markdown file or JSON record containing the artifact under review, the specific question requiring human judgment, the criteria the skill could not resolve autonomously, and a recommended decision frame. This is not a chat message — it is a persisted artifact.

**Implementation suggestion:** Add a `docs/templates/intake/decision-request.md` template that gate skills populate when emitting USER_DECISION_NEEDED. This gives humans a consistent interface for every escalation.

### Pattern 4: Reflect-Before-Gate (from DSPy ChainOfThought)

Before a gate skill emits a verdict, it should produce an explicit reasoning trace as a structured field in the verdict output — not hidden internal reasoning, but visible and reviewable rationale. This allows the human reviewer to evaluate not only the verdict but the quality of the reasoning behind it. Weak reasoning toward a PASS verdict is itself a signal.

**Implementation suggestion:** Add a mandatory `reasoning` field to `gate-verdict.schema.json`. Gate skill instructions should specify that the reasoning field must be populated before the verdict field, and must address each criterion explicitly.

### Pattern 5: Epic-Level Context Sharding (from BMAD)

BMAD's epic sharding — carrying full architectural context into each story file — solves the problem Game Studio faces in long creative-development sessions: mid-game, the agent may drift from established creative direction because the direction was set 50k tokens earlier. Each work-item artifact (story, task, feature brief) should embed a compressed summary of the active creative direction constraints that apply to it.

**Implementation suggestion:** Add a `creative_constraints` block to the milestone and story templates that is populated from the active Creative Direction document at the time the milestone is created. This embeds direction at artifact creation time rather than relying on context persistence.

---

## Open Questions

1. **Gate-skill latency vs. human patience.** If reflect-before-gate adds a reasoning step to every gate evaluation, what is the latency cost per gate? Is there a lightweight / heavyweight gate distinction warranted?

2. **BMAD's Game Dev Studio extension module.** The BMAD repo lists a "Game Dev Studio" expansion pack. Its contents were not accessible during this research. Does it introduce creative-direction logic or taste-layer concepts not present in the core?

3. **DSPy optimizer for gate quality.** Can DSPy's BootstrapFewShot optimizer be run against Game Studio's gate verdicts to improve gate quality over time? Requires building an evaluation dataset from prior verdicts — feasibility unknown.

4. **LangGraph interrupt() with persistent artifact storage.** Game Studio's gates produce Markdown verdict files. Does LangGraph's checkpointer integrate with a file-based artifact store, or does it require a database checkpointer? Production deployment path is unclear.

5. **AutoGen HandoffMessage and Claude Code.** AutoGen's `HandoffMessage` is a Python object. Translating this to a Claude Code skills pattern (filesystem-based, Markdown-first) requires an adapter pattern. What is the right representation?

6. **BMAD's adversarial review pattern.** The docs mention an "Adversarial Review" phase. Contents not fully retrieved. This could be the closest BMAD analogue to a taste-layer gate — worth deeper investigation.

7. **TaskWeaver's verifiable intermediate artifacts.** BMAD and TaskWeaver converge on "always produce a checkable artifact." Game Studio's creative artifacts (pitches, design documents) are harder to make mechanically verifiable. The line between "checkable" and "judgable" is where automation ends — where is that line for Game Studio specifically?

---

## Citations

- https://github.com/bmad-code-org/BMAD-METHOD
- https://github.com/bmad-code-org/BMAD-METHOD/blob/main/CHANGELOG.md
- https://docs.bmad-method.org/
- https://deepwiki.com/bmadcode/BMAD-METHOD/8.1-agent-architecture-and-lifecycle
- https://reenbit.com/the-bmad-method-how-structured-ai-agents-turn-vibe-coding-into-production-ready-software/
- https://bennycheung.github.io/bmad-reclaiming-control-in-ai-dev
- https://medium.com/@mariussabaliauskas/a-comparative-analysis-of-ai-agentic-frameworks-bmad-method-vs-github-spec-kit-edd8a9c65c5e
- https://dspy.ai/
- https://dspy.ai/learn/programming/7-assertions/
- https://arxiv.org/html/2312.13382v1 (DSPy Assertions paper)
- https://docs.langchain.com/oss/python/langgraph/interrupts
- https://www.langchain.com/blog/making-it-easier-to-build-human-in-the-loop-agents-with-interrupt
- https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/tutorial/human-in-the-loop.html
- https://microsoft.github.io/autogen/0.2/docs/tutorial/human-in-the-loop/
- https://help.crewai.com/what-role-does-human-input-play-in-the-execution-of-tasks-within-a-crewai-crew
- https://docs.crewai.com/
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- https://claude.com/blog/building-agents-with-the-claude-agent-sdk
- https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- https://github.com/24601/BMAD-AT-CLAUDE
