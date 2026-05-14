# Agentic AI Frameworks: Deep Dive: LangGraph And StateGraph Patterns

[Back to index](../r2-03-agentic-frameworks.md)

## LangGraph And StateGraph Patterns

### Core Model

LangGraph represents agents as state machines. Nodes do work; edges define transitions; a persistent State object carries all context across steps, including through human interruptions. The framework uses checkpointers to durably persist state between human-approved steps.

### interrupt() — First-Class Human Gate

`interrupt(payload)` is a function any node can call to pause the graph and area a structured payload to the caller:
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
