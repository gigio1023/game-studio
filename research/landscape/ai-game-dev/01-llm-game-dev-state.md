# LLM And Agentic AI Game Development State

Research date: 2026-05-05

---

## Research Question

1. Has anyone published or shipped a system where AI proposes concept slates to a creator with formal authority boundaries (human-only decisions on taste, direction, promise)?
2. What design patterns exist for AI + human-in-the-loop creative work with explicit human-only decisions?
3. What documented failure modes exist for AI-driven game generation projects (AI Dungeon, character.ai, AI NPC tools)?
4. What is the state of "AI as creative producer" — not "AI generates content" but AI as a production assistant?
5. Who has tried "AI as game director" or "AI as design reviewer"? What worked, what did not?
6. Are there published prompt patterns or skill architectures comparable to this framework's role-led review approach?

---

## Sources Surveyed

- https://arxiv.org/abs/2304.03442 — Park et al. 2023 Generative Agents. High authority. Simulated town with memory/reflection/planning. Research lab only, not shipped production.
- https://arxiv.org/html/2402.18659v1 — LLMs and Games survey 2024. Strong academic survey covering AI-as-designer, AI-as-assistant, AI-as-director roles. Broad coverage.
- https://arxiv.org/html/2404.02039v3 — Survey on LLM-Based Game Agents 2024. Covers agent architecture patterns (memory, perception, reasoning). Focuses on AI-as-player, not AI-as-director.
- https://arxiv.org/html/2502.19519v2 — Static vs Agentic Game Master AI 2025. Direct comparison of prompt-only vs multi-agent game master. Narrow lab study (ChatRPG), not shipped.
- https://arxiv.org/html/2409.06949 — AI Game Masters with Function Calling 2024. Function calling + state tracking for TTRPG game masters. Research prototype.
- https://github.com/bmad-code-org/BMAD-METHOD — BMAD Method. Role-led AI development framework for software. Active open-source project, community-adopted, directly comparable.
- https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/ — Ubisoft Ghostwriter. Shipped internal tool for NPC bark generation. Human-in-the-loop pairwise selection. Industry production evidence.
- https://news.ubisoft.com/en-us/article/5qXdxhshJBXoanFZApdG3L/ — Ubisoft NEO NPC. R&D prototype for generative NPC dialogue using Inworld + Nvidia Audio2Face. Lab prototype.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12193870/ — Generative AI in Game Design: Enhancing Creativity or Constraining Innovation? 2025 peer-reviewed study. Documents creative authority concerns.
- https://cuckoo.network/blog/2025/04/17/negative-feedback-on-llm-powered-storytelling-and-roleplay-apps — Failure mode documentation for AI Dungeon, character.ai, NovelAI. User-sourced but systematic.
- https://www.utahbusiness.com/archive/2021/06/22/latitude-games-ai-dungeon-was-changing-the-face-of-ai-generated-content-until-its-users-turned-against-it/ — AI Dungeon crisis documentation. Trade press, contemporaneous.
- https://arxiv.org/abs/2310.03714 — DSPy 2023. Structured LLM pipeline programming, role-based module composition. High academic authority.
- https://inworld.ai/blog/gdc-2025 — Inworld AI GDC 2025 post. Industry; content was not accessible at time of fetch.
- https://hai.stanford.edu/news/computational-agents-exhibit-believable-humanlike-behavior — Stanford HAI follow-up on generative agents. High authority summary of Park et al. results and 2024 follow-up.

---

## Key Findings

### Q1: Formal concept slate systems with authority boundaries

**Finding 1.** No published or shipped system proposes concept slates to a creator with explicit, enforced human-only authority over taste and direction. The closest pattern is Ubisoft's Ghostwriter, which proposes pairwise variations and records human selection, but this is narrow (bark-level text) with no direction-layer logic and no slate mechanism. The concept slate idea — multiple bounded game directions proposed for human selection — has no direct prior art in published literature as of May 2026.

**Finding 2.** The StoryVerse system (referenced in 2024 co-creation literature) separates author-defined "abstract acts" from detailed LLM character action generation, preserving author plot authority while delegating execution. This is a direction/execution split in narrative, structurally similar to Game Studio's Direction vs. Execution layer separation, but restricted to narrative systems and not published as a production framework.

**Finding 3.** The academic HITL pattern literature (Zapier, Parseur, Permit.io, 2024-2025) has formalized three checkpoint types: approval checkpoints (human must approve before workflow continues), correction checkpoints (human edits before continuation), and review checkpoints (human observes but does not block). None of these sources apply this taxonomy specifically to creative direction decisions in games, and none enforce what categories of decision are human-only. The framing in the literature is almost exclusively about safety and reliability, not about preserving creative authority.

### Q2: Human-in-the-loop design patterns for creative work

**Finding 4.** The dominant published pattern for AI-human creative work is "AI proposes, human curates." Over 90% of game designers surveyed (PMC 2025 study) use AI for ideation, but retain curation rights. The pattern is soft: there is no formal enforcement mechanism and no published pattern that classifies which decisions AI can make autonomously vs. which require human gate-keeping.

**Finding 5.** DSPy (Khattab et al. 2023, ICLR 2024) offers the clearest structural analog to role-led review: it composes LLM pipelines from typed signatures with declared input/output contracts. Each module is a bounded role with explicit scope. The framework optimizes prompts programmatically against metrics rather than relying on human-written instructions. DSPy is the closest published architecture to a "skill file" pattern, though it targets pipeline optimization, not creative direction review.

**Finding 6.** The BMAD Method (2024, open source) is the most structurally similar published framework to Game Studio for software. It assigns distinct agent personas (PM, Architect, Scrum Master, Developer) as Markdown files with defined expertise and output contracts, uses epic sharding to break scope into bounded units, and explicitly gates agentic execution behind human story approval. Human-only decisions in BMAD are: PRD approval, story prioritization, acceptance criteria sign-off, and architectural direction. Execution is delegated to agents. BMAD does not address taste, concept selection, or creative quality — it is scoped to software delivery.

### Q3: Documented failure modes in AI-driven game generation

**Finding 7.** AI Dungeon's collapse (2021) was a three-way failure: (a) no content boundary enforcement allowed harmful content generation, (b) the emergency filter implementation used imprecise keyword matching causing mass false positives (e.g. "eight-year-old laptop" flagging age checks), and (c) the privacy breach from employees reading private stories destroyed user trust. The root cause was launching a free-form generator without any pre-defined constraint model for what the system should and should not produce.

**Finding 8.** Character.AI's degradation (2024-ongoing) follows a different failure mode: engagement-metric optimization corrupted content quality. The platform was tuned for session length and return visits, not narrative coherence. Result: context drift after 20-30 messages, formulaic responses across distinct personas, and aggressive safety filtering that broke immersion. This is an optimization-objective misalignment, not a technical architecture failure.

**Finding 9.** The LLM game agents survey (2024) documents five recurring agent failure modes across many systems: temporal inconsistency (acting contradictory on consecutive turns), error propagation through chain-of-thought reasoning, context window cutoffs causing memory loss, perception gaps in multimodal systems, and reasoning drift without active maintenance. These failures are structural: they are properties of current LLMs operating without external state management, not properties of bad prompting.

**Finding 10.** The Static vs. Agentic Game Master paper (2025) found that content moderation filters from the underlying LLM provider broke combat narration and reduced immersion. This is a platform-dependency risk: game systems built on general-purpose LLM APIs inherit the API provider's safety policies, which are not calibrated for game contexts.

### Q4: AI as creative producer

**Finding 11.** No published system treats AI as a production-layer creative producer — meaning an agent that tracks proof status, raises scope risk, flags when milestones drift, or recommends next proof targets. Layer.ai (2024) and Ludo.ai position AI as production pipeline tools, but both operate at asset-generation level, not production-management level. The AWS Agentic Arcade demo (2025) makes pre-production interactive but does not function as a producer role.

**Finding 12.** Ubisoft's Ghostwriter is the only shipped production-layer AI tool with a documented human-authority model in game contexts. It is narrow: it handles only bark-level text variations, does not track direction, does not raise production risks, and does not own milestone logic. It is a writer's assistant, not a producer. Their second-generation toolset ("Ernestine") allows designers to build custom ML models for specific game needs, which points toward production-configurable AI tools, but the authority model remains the same: AI proposes options, writers decide.

### Q5: AI as game director or design reviewer

**Finding 13.** The agentic game master work (ChatRPG v2, 2025; function-calling paper, 2024) shows that multi-agent architectures with role separation (Narrator + Archivist) outperform single-agent prompt engineering on coherence, goal alignment, and player immersion. The Narrator/Archivist split is structurally similar to separating a creative direction role from a production state-tracking role. However, these are automated real-time roles during play, not pre-production review roles.

**Finding 14.** No published "AI as design reviewer" system exists with documented pre-production review protocols comparable to Game Studio's role council (Game Director, Creative Director, Narrative Director, etc. issuing structured verdicts). The closest academic treatment is the "conceptual assistance" tier in the LLMs-and-Games survey, where AI provides high-level design ideas that a human designer must evaluate and refine. This is unstructured.

### Q6: Prompt patterns and skill architectures

**Finding 15.** BMAD's "Agent-as-Code" pattern (specialized personas defined as Markdown files with expertise, responsibility, constraints, and expected outputs) is the most direct published analog to Game Studio's role-based skills. BMAD ships 12+ personas. The key difference: BMAD roles are software-delivery specialists with no game-specific design knowledge, no playable proof concept, and no taste-translation mechanism.

**Finding 16.** The generative agents paper (Park et al. 2023) contributes the memory stream + reflection + planning triad as an architecture for agents that must act with continuity across time. The reflection mechanism — synthesizing memories into higher-level abstractions — is analogous to what a review role must do when evaluating a proof against prior direction. No game production framework has adopted this triad for pre-production roles. The 2024 follow-up (1,052-individual simulation) showed LLM agents can replicate individual decision patterns with 85% accuracy when given an interview transcript as context, which is directly relevant to the question of whether a direction brief can function as a persistent "personality" for a review role.

---

## Failed Attempts Worth Learning From

### AI Dungeon (2019-2021): Unbounded generation without a constraint model

AI Dungeon launched as a fully open LLM text adventure with no pre-defined content envelope. When harmful content emerged at scale, the emergency response broke the product in a different direction: keyword filters with false-positive rates high enough to make normal play unreliable. The lesson is not about content moderation specifically — it is about the absence of any pre-defined constraint model. A game without a declared scope and constraint envelope cannot be moderated coherently. The framework gap this reveals: there is no safe way to operate an open-ended AI creative system without first establishing what the system is for, what it is not for, and what it will never do. These constraints must be designed before launch, not retrofitted after harm.

### Character.AI (2023-2024): Metric misalignment destroyed coherence

Character.AI succeeded at engagement metrics while failing at the stated product promise (persistent, coherent characters for long-form roleplay). Optimizing for session length and return frequency trained the system toward short-term engagement patterns — formulaic responses, memory resets that felt "fresh" to the engagement signal, aggressive filtering that protected the platform's liability exposure at the cost of the user's immersion. The lesson for AI-assisted game production: if an AI production tool is optimized for a wrong metric (token output volume, task completion speed, user satisfaction on short exchanges), it will systematically undermine the thing the framework is supposed to protect — in this case, direction coherence and proof quality.

### Ubisoft NEO NPC (2024): Production gap between demo and shipped product

The NEO NPC prototype demonstrated generative dialogue NPCs using three external vendors (Inworld, Nvidia, Ubisoft's pipeline). The demo was compelling enough to receive press coverage. As of 2025, the project exists only as an R&D prototype. The Teammates demo (November 2025) extends the concept but remains a standalone experience, not integrated into a shipped game. The gap between "compelling AI NPC demo" and "shipped game feature" has not been closed by Ubisoft or any comparable studio as of this research date. The failure mode is not technical — it is integration: real-time generative NPC dialogue introduces latency, content unpredictability, and QA complexity that current production pipelines are not designed to absorb.

---

## Closest Prior Art For Game Studio

### 1. BMAD Method

BMAD is the most structurally similar published framework. It uses role-as-Markdown-file, multi-persona collaboration, human-gated stage progression, and bounded agent execution. It addresses the same core problem — how do you run a complex production workflow with AI agents without letting agents overwrite human intent — in a software context.

Honest comparison: BMAD has no taste layer, no concept slate mechanism, no playable proof concept, and no game-specific design knowledge. It solves the agent-coordination and scope-management problem but not the creative-direction problem. Game Studio is solving both simultaneously, which is harder and has less prior art.

### 2. Ubisoft Ghostwriter

Ghostwriter is the only shipped game-industry tool with a documented human-authority model at the content level. The pairwise selection mechanism (AI proposes two options, human selects and refines) is a stripped-down version of what a concept slate review could be.

Honest comparison: Ghostwriter operates one level below Game Studio's scope. It generates sentence-level variations within a character and context already fully defined by writers. It has no direction layer, no milestone logic, no gate mechanism, and no concept-selection step. It is a final-mile writing tool. Game Studio's concept slate and direction layer sit three layers above what Ghostwriter handles.

### 3. Generative Agents (Park et al. 2023) + ChatRPG Agentic Game Master

The combination of memory-stream/reflection architecture with the Narrator/Archivist role split is the closest published approach to what Game Studio's review council does: maintain continuity of design intent across time, using structured reflection to evaluate new evidence against accumulated direction.

Honest comparison: Both systems operate in real-time during gameplay, not in pre-production. Neither has a human gate mechanism. Neither has a concept slate or direction-lock concept. The architectural insight is transferable (reflection as a first-class mechanism for role review), but the application domain is different. A pre-production review council that adopts memory-stream + reflection would be a novel contribution.

---

## Relevance To Game Studio

**Gap (a): Reference-moment to design-constraint translation**

Findings 1, 2, 4, 14 together show there is no published method for translating taste references into game-design constraints. StoryVerse shows abstract-to-concrete splits are possible in narrative. DSPy shows typed signatures can constrain LLM output to declared contracts. Game Studio could formalize the taste-to-constraint translation as a declared signature: input (reference moments, desired emotions, disliked friction) → output (design constraint candidates, player experience targets, ruled-out directions). This is gap (a) and no prior art fills it.

**Gap (b): Production "production failure protocols"**

Findings 9, 10, 11 show that AI systems have documented failure modes for concept death, scope crisis, and deadline mode but no framework addresses these as first-class production events requiring scripted responses. The closest is BMAD's epic sharding (scope crisis mitigation) and AI Dungeon's failure postmortem (constraint envelope collapse). Game Studio should document production failure protocols as named gate conditions with required role review escalation — this is entirely absent from prior art.

**Gap (c): AI-assisted design workflows**

Findings 5, 15, 16 show that DSPy's typed signature modules and Park et al.'s memory/reflection/planning triad are directly applicable. A Game Studio skill file that adopts the reflection mechanism — explicitly synthesizing previous direction decisions before issuing a new verdict — would be a concrete LLM-native improvement. The BMAD Agent-as-Code pattern confirms that Markdown-defined role personas with explicit output contracts are a workable pattern; Game Studio's existing skill files are already in this form.

**Gap (d): Source-map citations to operational worked guides**

Findings 2, 6, 13 show the LLMs-and-Games survey and ChatRPG papers contain architectural patterns (role separation, state tracking, function-calling boundaries) that are not identified as operational how-to guides. Game Studio's research foundations documents are the right container for this translation. Each finding above that contains an architectural pattern (Narrator/Archivist split, pairwise selection, typed signatures, reflection before planning) should have a corresponding operational guide in the framework.

---

## Open Questions

1. Has anyone shipped a pre-production AI creative director tool (not NPC tool, not content generator) that handles concept selection and direction lock? This research round found no evidence. The gap may be an opportunity.
2. Inworld AI's GDC 2025 content on "beyond prototypes to production AI" was not accessible. A direct fetch of specific articles from their blog may reveal whether they have addressed the prototype-to-production gap with documented solutions.
3. What happened to AIIDE 2024-2025 proceedings specifically regarding AI game masters and procedural design? The arXiv papers reference these conferences but direct proceedings access was not attempted.
4. Does the BMAD Method's full documentation reveal more specific human-only decision enforcement mechanisms? The docs landing page was not detailed enough to confirm.
5. Are there EA Ghost AI Lab publications beyond press coverage? Searches returned no meaningful published research from EA's dedicated AI research unit.
6. Is there published work on "AI as scope guardian" — AI that monitors creative drift and raises scope alarms? Nothing in this round matches the concept.
7. The PMC 2025 study documents that 60%+ of designers fear creative dependency on AI tools. What structural safeguards (beyond policy statements) have been proposed to prevent this? No source in this round gives an operational answer.
8. Does Ludo.ai's concept recommendation engine implement any formal authority boundary? Their marketing describes AI-assisted game concept scoring but their technical documentation was not fetched in this round.

---

## Industry Adoption Context

As of mid-2025, Google Cloud research reports 90% of games developers using AI in workflows, with most adoption concentrated in asset generation, localization, and code assistance rather than direction or production management. The Steam platform documented over 7,000 AI-disclosed game titles in 2025, the majority of which are what press has labeled "gameslop" — minimal human curation applied to AI-generated content. This adoption pattern confirms the central concern motivating Game Studio: high-volume AI generation without direction authority produces low-quality outputs. The framework's playable-validation model is a direct counter-pattern to this failure mode.

The strongest published counter-evidence to the gameslop trend is Ghostwriter's pairwise selection model: forcing comparison-based human decisions rather than single-option accept/reject increases both decision quality and the perceived ownership writers feel over the output. This is a concrete, empirically-grounded design principle applicable to Game Studio's concept slate workflow.

Source: https://www.googlecloudpresscorner.com/2025-08-18-90-of-Games-Developers-Already-Using-AI-in-Workflows,-According-to-New-Google-Cloud-Research
Source: https://www.ai21.com/blog/ubisoft-case-study/

A separate pattern visible in the data: studios that have shipped AI tools (Ubisoft, to a limited degree) treated the tool as a replacement for one specific low-autonomy task (writing first-draft barks, checking NPC dialogue) rather than attempting to automate high-autonomy tasks (direction, concept selection, release decisions). The pattern of starting narrow and expanding incrementally is the industry norm. Game Studio's ambition to address direction-layer tasks puts it ahead of any shipped prior art.

## Research Method Notes

Searches conducted: 10 distinct WebSearch queries. Sources directly fetched: 10 URLs. Query coverage includes: concept slate systems, HITL design patterns, AI Dungeon postmortem, AI creative producer tools, AI game directors on arXiv, BMAD method, Stanford generative agents, Ubisoft/EA tooling, character.ai engineering failures, DSPy pipeline architectures.

Gaps in coverage: AIIDE conference proceedings were not directly accessed (search results referenced them but no direct fetch). FDG conference proceedings were not fetched. Inworld AI GDC 2025 specific article was not accessible from their blog index. EA Ghost AI Lab has no published technical documentation in any accessible source found. The Affordable Generative Agents paper (arXiv 2402.02053) was identified as a Park et al. follow-up but not fully fetched.

Confidence levels: High confidence on findings 1, 6, 7, 8, 9, 13, 15 (directly fetched primary sources). Medium confidence on findings 2, 3, 4, 5, 11, 12 (search result summaries + partial fetches). Low confidence on findings 10, 14 (inferred from survey descriptions without direct source access).

Demos vs. shipped products: Ubisoft Ghostwriter (shipped, internal). Ubisoft NEO NPC / Teammates (demo, not shipped in game). ChatRPG v2 (research prototype). AI Dungeon (shipped, then partially degraded). Character.AI (shipped, ongoing degradation). BMAD Method (shipped as open-source framework, not game-specific). DSPy (shipped as open-source library, not game-specific). Ludo.ai (shipped SaaS product, authority model unknown).

---

## Citations

1. https://arxiv.org/abs/2304.03442
2. https://arxiv.org/html/2402.18659v1
3. https://arxiv.org/html/2404.02039v3
4. https://arxiv.org/html/2502.19519v2
5. https://arxiv.org/html/2409.06949
6. https://arxiv.org/abs/2310.03714
7. https://github.com/bmad-code-org/BMAD-METHOD
8. https://docs.bmad-method.org/
9. https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter
10. https://news.ubisoft.com/en-us/article/5qXdxhshJBXoanFZApdG3L/how-ubisofts-new-generative-ai-prototype-changes-the-narrative-for-npcs
11. https://pmc.ncbi.nlm.nih.gov/articles/PMC12193870/
12. https://cuckoo.network/blog/2025/04/17/negative-feedback-on-llm-powered-storytelling-and-roleplay-apps
13. https://www.utahbusiness.com/archive/2021/06/22/latitude-games-ai-dungeon-was-changing-the-face-of-ai-generated-content-until-its-users-turned-against-it/
14. https://hai.stanford.edu/news/computational-agents-exhibit-believable-humanlike-behavior
15. https://inworld.ai/blog/gdc-2025
16. https://arxiv.org/html/2403.02613v1
17. https://arxiv.org/html/2410.15644v1
18. https://github.com/git-disl/awesome-LLM-game-agent-papers
19. https://hai.stanford.edu/news/humans-loop-design-interactive-ai-systems
20. https://www.mdpi.com/1099-4300/28/4/377
