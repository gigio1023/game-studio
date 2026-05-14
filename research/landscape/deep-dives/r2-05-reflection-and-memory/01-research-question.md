# Reflection And Memory Architectures: Deep Dive: Research Question

[Back to index](../r2-05-reflection-and-memory.md)

## Research Question

1. Park et al. 2023 "Generative Agents" — what is the actual reflection mechanism algorithmically?
   Memory stream, importance scoring, reflection synthesis, plan generation.
2. Park et al. 2024 follow-up on interview-based personality replication — what is the
   mechanism? Why 85%?
3. Recent papers (2024-2026) on agent memory architectures applied to creative or production
   tasks.
4. Differences between RAG, vector search, reflection synthesis, and agentic memory in practice.
5. Anthropic published guidance on Claude memory and agentic memory patterns.
6. How do LangGraph, AutoGen, and CrewAI handle long-term memory and reflection?
7. Are there published patterns for "agent reads ledger before acting and probes for
   contradictions"?
8. Failure modes of reflection-based agents — what fails?

---


## Sources Surveyed

- arxiv 2304.03442 abstract page (https://arxiv.org/abs/2304.03442): Park et al. 2023
  overview; full PDF too large to fetch.
- arxiv 2411.10109 abstract (https://arxiv.org/abs/2411.10109): Park et al. 2024 personality
  replication from 1,052-person interview study.
- arxiv 2303.11366 HTML (https://arxiv.org/html/2303.11366): Reflexion full algorithm detail.
- Stanford HAI policy brief PDF (https://hai.stanford.edu/assets/files/hai-policy-brief-simulating-human-behavior-with-ai-agents.pdf): binary, inaccessible.
- Semantic Scholar record for 2304.03442 (https://www.semanticscholar.org/paper/...): summary
  only.
- A-Mem arxiv 2502.12110 abstract (https://arxiv.org/abs/2502.12110): NeurIPS 2025 agentic
  memory paper.
- Towards Data Science practical memory guide (https://towardsdatascience.com/a-practical-guide-to-memory-for-autonomous-llm-agents/):
  RAG vs. reflection vs. episodic streams.
- Anthropic memory tool docs (https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool):
  full technical spec for Claude's memory_20250818 tool.
- DEV.to LangGraph/CrewAI/AutoGen memory comparison (https://dev.to/foxgem/ai-agent-memory-a-comparative-analysis-of-langgraph-crewai-and-autogen-31dp):
  framework comparison.
- Indium Tech failure modes (https://www.indium.tech/blog/agent-memory-compression-failure-modes/):
  five failure modes for memory compression.
- Galileo agent failure modes (https://galileo.ai/blog/agent-failure-modes-guide): production
  failure taxonomy.

---


## Park Et Al. 2023 Reflection Mechanism

**Paper:** "Generative Agents: Interactive Simulacra of Human Behavior" (arXiv 2304.03442,
Park, O'Brien, Cai, Morris, Liang, Bernstein).

### Memory Stream

Every agent maintains a memory stream: a flat, append-only log of natural-language observations
with timestamps. Each entry records what the agent observed or experienced, e.g., "Isabella
Rodriguez is writing in her journal" at 9:00 AM. Entries are never deleted; the stream grows
indefinitely through a session.

### Retrieval Scoring (Three-Dimensional)

When the agent needs to act, it does not load the entire memory stream. It scores every memory
on three dimensions and retrieves the top-k by weighted sum:

1. **Recency**: Exponential decay based on elapsed time since the memory was recorded. Recent
   events score higher. The decay factor penalizes memories that occurred hours or days ago.
2. **Importance**: A 1-10 integer assigned at storage time by querying the LLM: "On a scale
   of 1 to 10, where 1 is routine and 10 is life-changing, how important is this memory?"
   Routine observations (making breakfast) score low; surprising or goal-relevant events
   (receiving a job offer) score high.
3. **Relevance**: Cosine similarity between the query embedding and the memory embedding.

Final score: `score = α·recency + β·importance + γ·relevance`, where α, β, γ are equal
weights (each ~1/3) in the published implementation. Normalization is applied to each dimension
before combining.

### Reflection Triggering

Reflection is triggered by an importance accumulator. After each new memory is added, the sum
of importance scores for the 100 most recent memories is checked. When this sum crosses a
threshold (e.g., 150), a reflection cycle fires. This means reflection is event-driven, not
time-driven — it fires when a burst of significant events has occurred.

### Reflection Synthesis

On trigger, the agent queries its recent memory stream for the most salient recent observations,
then asks the LLM: "Given only the following statements, what 5 high-level insights can you
infer? Each insight should be supported by evidence." The LLM produces abstract statements
like "Klaus Mueller is deeply committed to his research" backed by pointers to the specific
memories that support them. These synthesized reflections are stored back into the memory
stream as first-class entries — they are retrievable alongside raw observations and may
themselves be pointers for future reflections (recursive depth).

### Plan Generation

At the start of each simulated day, the agent retrieves relevant memories (including
reflections) and constructs a coarse daily plan in broad strokes. This plan is recursively
decomposed into hourly then 5-15-minute blocks. Each action is generated by querying the
memory stream for context, proposing an action, and revising it given the retrieved memories.
Reflections about the agent's goals, personality, and relationships are typically high-scoring
retrievals that dominate plan generation.

---


## Park Et Al. 2024 Personality From Interview

**Paper:** "Generative Agent Simulations of 1,000 People" (arXiv 2411.10109, Park et al.,
November 2024).

### Dataset and Mechanism

1,052 Americans were interviewed using the American Voices Project schedule — two-hour
semi-structured interviews covering life history, values, relationships, work, and political
views — plus the General Social Survey (GSS) and Big Five personality inventory.

To build an agent, the full interview transcript is embedded into the system prompt. The agent
is then asked to answer held-out survey questions and respond to experimental stimuli as the
interviewee would. The transcript is not summarized or compressed; it is inserted verbatim or
near-verbatim into a long context window.

### Accuracy Results

- Interview-only condition: 83% accuracy relative to two-week test-retest consistency.
- Surveys-only condition: 82%.
- Combined interview + surveys: 86%.
- Demographics-only baseline: 74%.

Accuracy is expressed relative to the individual's own two-week retest-retest consistency, so
the 86% combined figure represents 86% of ceiling human consistency.

### Why It Works

The accuracy gain over demographics-only (74% → 86%) comes from the narrative content of the
interview. Survey responses give structured signals; interview transcripts supply the underlying
reasoning, values, and situational framing. Crucially, models are better at inferring attitudes
from narrative explanation than from demographic proxies. The mechanism is dense context
injection — the LLM acts as a character model for the person described in the transcript.

### Applicability to Direction Briefs

A creative direction brief is structurally analogous to an interview transcript: it is a
first-person or third-person narrative about values, aesthetic sensibility, examples of taste,
and explicit rejection criteria. The 2024 result suggests that injecting a direction brief
verbatim into a review-role system prompt would yield a substantially more personality-stable
reviewer than one prompted only with a role label.

---
