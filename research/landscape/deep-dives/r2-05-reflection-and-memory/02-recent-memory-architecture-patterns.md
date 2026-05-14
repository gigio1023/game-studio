# Reflection And Memory Architectures: Deep Dive: Recent Memory Architecture Patterns

[Back to index](../r2-05-reflection-and-memory.md)

## Recent Memory Architecture Patterns

### A-Mem (arXiv 2502.12110, NeurIPS 2025)

A-Mem implements a Zettelkasten-inspired agentic memory. When a new memory is added, the agent
generates a structured note (keywords, contextual description, tags), identifies links to
existing memory nodes, and then updates those linked nodes bidirectionally. This produces a
living knowledge network that self-reorganizes as new information arrives — unlike static RAG,
which never mutates stored entries. Evaluated across six foundation models with SOTA results.

### Memory OS (ACL EMNLP 2025)

Introduces a three-tier OS metaphor: registers (working memory, in-context), cache (recent
episodic, fast retrieval), and storage (long-term, semantic/compressed). Applies page-fault
analog: a cache miss triggers a retrieval operation from storage.

### Mem0 (arXiv 2504.19413)

Production-oriented memory layer using graph databases with entity-relationship tracking. Suited
to preference inference and user modeling. Achieves 89-95% compression ratios. Limitation: the
predefined schema constrains adaptability to novel domains.

### Reflexion (arXiv 2303.11366, NeurIPS 2023)

Four components: Actor, Evaluator, Self-Reflection model (converts trajectory + reward into a
verbal summary), and Memory (sliding-window buffer, capacity bounded at Ω = 1-3 entries).
Achieves 91% pass@1 on HumanEval vs. 80% for vanilla GPT-4.

### SAGE and ExpeL (2024)

Both implement session-end reflection cycles — the agent summarizes what it learned, stores it
as a policy update in episodic memory, and reloads it on the next session start.

---


## RAG Vs Vector Search Vs Reflection Vs Memory Stream

| Pattern | What it stores | How retrieval works | Dynamic update? | Best for |
|---|---|---|---|---|
| RAG | Raw text chunks with embeddings | Cosine similarity to query | No | Factual lookback on large corpora |
| Vector search | Encoded memories or documents | k-nearest-neighbor ANN | No (usually) | Semantic fuzzy matching |
| Reflection synthesis | LLM-generated abstractions | Standard retrieval + filtering | Yes (recursive) | Distilling patterns from episodes |
| Memory stream (Park) | Raw observations + reflections combined | Recency + importance + relevance | Append-only; reflections add abstraction | Social/temporal agent simulation |

**Critical operational distinctions:**

- RAG cannot answer "what happened last Monday" well; it lacks temporal structuring.
- Reflection synthesis can encode wrong conclusions, creating confirmation loops that compound.
- Memory streams preserve the raw episodic record alongside abstractions, protecting against
  summarization drift.
- A-Mem adds bidirectional mutation of stored nodes, which RAG never does.

---


## Anthropic Guidance

### Claude Memory Tool (memory_20250818, released ~2025)

Anthropic's memory tool stores and retrieves agent memory as files in a `/memories` directory.
The tool supports view, create, str_replace, insert, delete, rename commands.

**Official prompt injected when memory is enabled:**
"IMPORTANT: ALWAYS VIEW YOUR MEMORY DIRECTORY BEFORE DOING ANYTHING ELSE."

This is a direct implementation of the reflection-before-action pattern: Claude reads its own
prior state before beginning work on a new session or task.

**Key design choices:** File-based (not vector-based) — transparent and human-editable. No
automatic compression; the agent decides what to write. Paired with server-side Compaction for
long-running workflows. Multi-session pattern: an initializer session writes structured memory
artifacts (progress log, feature checklist); each subsequent session reads then updates them.
Anthropic frames this as "just-in-time context retrieval" — load only what is currently
relevant.

---


## Existing Agent Frameworks Memory Patterns

### LangGraph

- Supports short-term in-context memory, long-term memory via external vector databases, and
  entity memory.
- Key feature: checkpointing — graph state is persisted to a store at each node, enabling
  pause-and-resume and cross-session recovery.
- No native reflection synthesis; must be implemented as a custom graph node.
- Best suited for complex, stateful, branching workflows where state must survive interruption.

### CrewAI

- Built-in memory suite: short-term (RAG), long-term (SQLite3), entity memory (RAG), contextual
  memory, user-specific memory.
- Long-term memory uses SQLite3 for persistence; scalability limitation for high throughput.
- No native reflection synthesis; memory is retrieval-only, not distilled.

### AutoGen

- Minimalist: message lists for short-term context; external integrations for long-term.
- No built-in reflection. Relies on the conversation message history as implicit memory.

---


## Failure Modes

### 1. Confirmation Loop (Reflexion / Reflection Synthesis)

An agent encodes a wrong conclusion into memory as a learned rule. Every subsequent session
starts from that corrupted prior. Without an independent ground-truth validator, the error
compounds. This is the most dangerous failure mode for production review roles.

### 2. Catastrophic Forgetting (Compression-Based Memory)

Time-based or capacity-based eviction removes old memories that are still relevant. Agents
fail on tasks requiring distant-past context.

### 3. Hallucination Amplification

Reduced context detail forces the model to fill gaps with internal priors. Compressed memory
increases hallucination rate on retrieved facts.

### 4. Summarization Drift

Abstractions diverge from the raw episodes they were generated from. Especially dangerous when
a summary is the only remaining record — the original evidence is lost.

### 5. Local Minima (Reflexion)

In exploration-heavy tasks (e.g., web navigation), Reflexion converges on a narrow strategy
early and fails to discover alternative approaches. The verbal reinforcement gradient does not
push exploration.

### 6. Self-Evaluation Weakness

Reflection depends on the LLM correctly assessing its own errors. In ambiguous creative
domains, the model may generate reflections that describe the wrong root cause.

### 7. Over-Compression Bottleneck

Uniform compression destroys multi-step reasoning chains. Performance drops abruptly on tasks
requiring long inference chains when those chains were compressed away.

---
