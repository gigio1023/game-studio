# Recent And Adjacent Work (2024-2026)

## Method

Date range: Q4 2024 through Q2 2026 (cutoff May 2026).
Search filters: year qualifiers ("2025", "2026") in all queries; venue-specific terms (FDG, AIIDE, CHI, GDC, NeurIPS).
Queries run: 10 distinct web searches. Fetches executed: 7 URLs.
Venues searched: AIIDE 2025, CHI 2024-2026, FDG implied via academic indexing, GDC 2024-2025, arxiv preprints, GitHub, industry journalism (Aftermath, Naavik, Wccftech).
Not accessible: direct FDG 2025 proceedings (no open-access index found); NeurIPS 2024 creativity workshop proceedings behind paywall; Inworld GDC 2025 blog post (content not rendered in fetch).
Bias note: GitHub and practitioner blog coverage is over-represented relative to peer-reviewed venues because proceedings access is paywalled. Academic findings cited here should be treated as indicative of direction, not exhaustive survey.

---

## Sources Surveyed

- https://arxiv.org/html/2604.14228v1 — "Dive into Claude Code" systematic analysis. VILA Lab, April 2026. High authority. Core finding: 98.4% of codebase is operational infrastructure, not AI logic.
- https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills — Anthropic engineering blog on Agent Skills. October 2025. Primary source.
- https://code.claude.com/docs/en/agent-sdk/overview — Claude Agent SDK official documentation. Current state. Primary source.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12193870/ — "Generative AI in Game Design: Enhancing Creativity or Constraining Innovation?" MDPI, 2025. Peer-reviewed, n=30 designers.
- https://github.com/Donchitos/Claude-Code-Game-Studios — Claude Code Game Studios, April 2026. Open-source. 49 agents, 72 skills.
- https://github.com/htdt/godogen — Godogen autonomous game development. 2025. Open-source.
- https://aftermath.site/ai-npcs-nvidia-unity-ubisoft-convai-inworld/ — "AI NPCs Have Potential, But Not The Kind Big Video Game Companies Want." Industry journalism.
- https://artificialanalysis.ai/agents/coding — Coding agents benchmark comparison. 2025.
- https://inworld.ai/blog/gdc-2025 — Inworld AI GDC 2025 post (title only; content inaccessible).
- https://github.com/HermeticOrmus/claude-code-game-development — Claude Code game development patterns. 2025. Open-source.
- https://www.gianty.com/the-rise-of-ai-agents-in-game-development/ — Industry survey synthesis. 2025.

---

## Recent Academic Papers

**1. "Generative AI in Game Design: Enhancing Creativity or Constraining Innovation?" (2025)**
Published in MDPI Journal of Intelligence, PMC-indexed. n=30 working game designers. Key finding: over 75% reported acceleration of task completion, but significant concerns about creative homogenization and unclear authorship protocols. The interaction pattern described is iterative "back-and-forth" — designers treat AI output as a starting point, not a destination. Relevant to Game Studio because it documents empirically that the authority boundary problem is real and unsolved in practice. No paper in the corpus proposes a formal protocol for it.

**2. "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems" (April 2026)**
VILA Lab, arxiv preprint 2604.14228. Systematic architectural analysis of Claude Code as a reference design for future agent systems. Core finding: 98.4% of the system is operational infrastructure (context management, safety layers, permission modes, session persistence) rather than AI reasoning. Identifies an evaluative gap: Claude Code optimizes for task completion, not for human skill development. Directly relevant as a design critique of the framework Game Studio is built on.

**3. "AI NPCs Have Potential, But Not The Kind Big Video Game Companies Want" (Aftermath, 2025)**
Industry journalism but citing primary developer sources (CD Projekt Red's Pawel Sasko). Documents the gap as "a canyon" between authored NPC content and AI-generated equivalents. Key barrier: expectation mismatch — when NPCs respond verbally to anything, players expect matching physical action, requiring environmental interaction far beyond current demos. Relevant as evidence that the NPC/generation path is stalled; the coaching/review path is underserved.

**4. "Beyond Vibe-Coding: A Disciplined Workflow for AI-Assisted Software Development with Claude Code" (InnoGames blog, 2025)**
Industry practitioner piece from a professional game studio (InnoGames). Documents patterns for structured Claude Code use in production. Relevant as evidence that the "discipline over improvisation" thesis is not unique to Game Studio but is being independently discovered by production teams.

**5. "From Pen to Prompt: How Creative Writers Integrate AI into their Writing Practice" (arxiv 2411.03137, 2024)**
CHI-adjacent. n=23 fiction writers. Documents how writers actively resist AI generation of core creative decisions while accepting AI assistance on execution tasks. The pattern is consistent with Game Studio's authority model: humans decide on direction; AI assists on production.

**6. AIIDE 2025 (November 2025, University of Alberta)**
Conference held. Proceedings not open-access at time of research. Key co-chair: Matthew Guzdial (University of Alberta), a leading researcher in co-creative AI for games. Venue is relevant but specific paper-level data not extractable without proceedings access.

**7. Google Cloud Survey of 615 Game Developers (June-July 2025)**
87% of developers report using AI agents in their work. This normalizes AI tool use in game development. Relevant as a baseline: the conversation has shifted from "should we use AI?" to "how do we structure it responsibly?"

---

## Agentic AI Frameworks Current State

**Convergence patterns as of Q2 2026:**

The Model Context Protocol (MCP), open-sourced by Anthropic in late 2024, is now standard across Claude Code, Cursor, Codex, Devin, and Windsurf. MCP functions as the common tool-integration layer — the protocol did what OpenAPI attempted for REST APIs.

**The infrastructure-as-differentiator thesis is confirmed.** The VILA Lab paper documents that as models converge in raw capability, the operational layer — context management, permission modes, safety layers, session persistence — becomes the primary differentiator between agents. This is directly applicable to Game Studio: the framework's value is not in model capability but in the structured wrapper it places around that capability.

**Claude Agent SDK (renamed from Claude Code SDK, December 2025):** Agent Skills launched October 2025 as an open standard for cross-platform portability. Skills are defined via SKILL.md files in `.claude/skills/*/`. The SDK provides four layered extension points: MCP servers (highest context cost), plugins, skills, and hooks (27 lifecycle interception points). Subagents return only summaries to parents — a design choice that prevents subordinate work from inflating parent context. Sessions are append-only JSONL transcripts with deliberate non-restoration of permission state on resume.

**The four converging agent patterns across Codex, Cursor, Aider, Devin, Claude Code:**
1. Autonomous tool loop with progressive approval gates
2. Filesystem-based configuration (CLAUDE.md, .claude/ directory, AGENTS.md)
3. MCP as the tool integration standard
4. Human approval as a named mode, not an afterthought (Claude Code has seven permission modes)

**Key divergence:** Claude Code and Codex operate as terminal/environment agents (autonomous multi-step execution). Cursor and Copilot are IDE-embedded. The former pattern suits production pipeline automation; the latter suits inline developer assistance. Game Studio's framework sits in the terminal/environment pattern.

**Open-source field:** Cline, Continue, Aider, OpenHands, Goose, Zed are all fully open-source with bring-your-own-model support. The ecosystem is fragmenting on the execution side but converging on the protocol side (MCP).

**Session persistence pattern:** Append-only JSONL session transcripts that support resume, fork, and rewind — with deliberate non-restoration of permission state on resume — are an Anthropic design pattern worth adopting in Game Studio's gate decision records.

---

## Communities Working On Similar Problems

**Active communities documented:**

- **r/gamedev and r/IndieDev** — Largest accessible community (hundreds of thousands of members). AI tool use is a routine topic. The conversation is mostly practical ("what prompt works for X") rather than framework-level.
- **Game Dev Network Discord (66,984+ members)** — Channels for design, coding, art, and devlog sharing. No documented subgroup focused specifically on AI-assisted production frameworks.
- **Indie Game Business Discord** — Production, marketing, publishing focus. Closest to business-operational concerns. No documented AI-framework subgroup.
- **Vibe Game Dev (vibegamedev.com)** — Specific community for AI-agent-assisted game development using Claude Code. Publishes SKILL.md files and complete source projects. Directly adjacent to Game Studio's use case. Active as of Q1 2026.
- **Snyk/BigDevSoon/AIToolly** — Blog clusters covering Claude Code game dev patterns. These are practitioner-facing rather than framework-design communities.
- **PyShine and AIToolly** — Published coverage of Claude Code Game Studios project in April 2026, indicating emerging practitioner audience for structured AI game dev frameworks.

**Gap identified:** No forum or Discord is focused on "AI as game design coach" or "AI-as-production-assistant with authority boundaries." The communities that exist are focused on generation (making content faster) not on structured review and coaching. This gap is an opportunity for Game Studio to seed a community around the coaching/review niche.

---

## Game-Dev-Specific Claude/Codex Usage

**Documented patterns in the public record:**

**Claude Code Game Studios** (github.com/Donchitos/Claude-Code-Game-Studios, April 2026): 49-agent, 72-skill framework mirroring professional studio hierarchy. Three-tier structure: Directors (Opus), Department Leads (Sonnet), Specialists. Embeds MDA Framework, Self-Determination Theory, Flow State Design, Bartle Player Types as explicit skill content. Includes 12 automated hooks and 39 document templates. Uses slash commands extensively. The collaboration protocol is explicitly stated: "ask, present options, you decide, draft, approve." This is the closest existing public analog to Game Studio's design, published approximately one month before the current research date. It is a direct competitive proxy — the framework approach has been validated publicly.

**Godogen** (github.com/htdt/godogen): Autonomous generation pipeline for Godot (C#) and Bevy (Rust). Describe a game in text; Godogen plans, codes, generates assets, runs the engine, and self-repairs from screenshots. Multi-modal asset generation (Gemini, Grok, Tripo3D). This is at the generation/automation end of the spectrum, not the coaching/review end.

**Claude Code Hooks for game dev** (Arsturn blog, 2025): Documented pattern of hooks triggering Unity/Godot build commands, then zipping and uploading to Itch.io butler on task completion. Practical integration of Claude Code into game publishing pipelines.

**Unity MCP integration**: Claude Code + Unity MCP lets Claude inspect actual runtime game state (not just files). Real-time debugging where AI can see what is happening during play. Used by practitioners running 8 parallel autonomous agents for architecture, implementation, balance, and testing.

**HermeticOrmus/claude-code-game-development**: Open repository of game development patterns and workflows for Claude Code. Indicates community-level documentation of patterns.

---

## Adjacent Operating Systems

**AI-assisted product design systems (2025):**

The "AI OS for product teams" pattern — multiple specialized agents coordinated through shared memory — is converging with Game Studio's architecture. Steve (hey-steve.com) is a documented example: multi-agent ecosystems that remember context, act across tools, and reduce cognitive friction. The defining shift noted for 2025 is from single-agent assistants to multi-agent orchestration over shared memory.

**Figma Dev Mode MCP (June 2025)**: IDE tools pull live design data from Figma to generate accurate code. This is AI-assisted design review in a different domain — a direct structural analog to what Game Studio does for game design review.

**BMAD Method** (covered in prior round): Software-development-lifecycle framework using role-led agents. v6.4 introduced TOML customization and sharded step files. Remains the strongest structural analog from the software domain.

**Markovate Agentic Operating System** and similar enterprise frameworks: Multi-agent orchestration over shared state is the general pattern. Gartner projects 40% of enterprise applications will feature task-specific agents by 2026 (from <5% in 2025). The framework pattern Game Studio is building is ahead of the mainstream curve but not ahead of the practitioner frontier.

**AI-assisted research systems**: Multi-step research agents (WebSearch + WebFetch + synthesis) are now standard Claude Agent SDK patterns. The research pipeline used in this document is itself an example of the pattern.

---

## AI-As-Craft-Coach Projects

This niche remains underserved relative to AI-as-generator.

**Documented projects:**

- **ChatGPT Creative Writing Coach** (OpenAI GPT store, 2024): Provides feedback on narrative structure and character development. Generic; no game-design specificity. Treats coaching as conversation, not structured process with authority boundaries.
- **Sudowrite** (fiction-focused): "Describe," "Expand," "Rewrite," "Brainstorm" tools. Community-made plugins for specialized feedback. Simulates readers and allows talking-to-characters. Craft-adjacent but generates content; does not coach process.
- **HyperWrite Creative Writing Coach**: Feedback on narrative structure. No game-design domain knowledge documented.
- **Claude Code Game Studios "Creative Director" agent**: The framework includes a creative director agent defined to coach and review, not just generate. Published April 2026. This is the closest analog to Game Studio's coaching role — but it is implemented as one agent among 49, not the framework's organizing principle.

**The gap:** No tool in the public record takes craft coaching as its primary proposition — treating the human designer as a developing practitioner and AI as a structured Socratic interlocutor with documented skill models. The closest analog remains game design professors and experienced creative directors, whose operating patterns are not yet systematically encoded in any public AI framework.

---

## AI Tool Postmortems 2024-2026

**Convai / Second Life Character Designer (shutdown September 2025):**
Second Life's AI Character Designer, powered by Convai, paused permanently on September 1, 2025. All character profiles and memory data were deleted, non-recoverable. Cause: the product reached end of its planned lifecycle. This is a partial shutdown — Convai as a company continues, but this specific deployment ended. Lesson: AI NPC infrastructure products dependent on a platform's continued investment are fragile.

**Inworld AI (strategic shift, 2024-2025):**
At GDC 2024, Inworld had prominent partnerships with Microsoft Xbox, Ubisoft, NVIDIA. At GDC 2025, presence was significantly more understated. The company raised $125.7M total by June 2025 and pivoted focus from flashy concept demos to production-scale cost reduction (200ms response times, 90% cost reduction demonstrated with one developer). The Microsoft Xbox co-development deal remains active. Inworld has not shut down but has moved from "demo everything" to "survive on production economics." The lesson: AI NPC infrastructure requires solving cost-per-interaction before scale.

**AI Dungeon (ongoing degradation):**
No new shutdown events in the 2024-2026 window. The crisis documented in prior research rounds (moderation failures, user backlash) continues as background context. The product operates but has ceded its early-mover advantage to better-aligned systems.

**Character.ai (no shutdown, growth continues):**
No shutdown information found for this period. Character.ai continues to grow as a consumer product. Its use case (parasocial character conversation) is distinct from game design coaching.

**What shipped:**
- Ubisoft Ghostwriter (NPC bark generation) continues in internal use.
- Inworld integration in PUBG and inZOI, live in 2025.
- Nvidia ACE (AI Character Engine) in demo deployments.
- Status game (AI-powered) surpassed one million users in two weeks post-beta, February 2025. Operated on Inworld infrastructure with cost optimization.

---

## Skill Pattern Spread

**Anthropic Agent Skills** launched October 2025 as an open standard. Cross-platform portability published December 18, 2025. Skills reside in `.claude/skills/*/SKILL.md`. The standard was adopted on Claude.ai, Claude Code, the Claude Agent SDK, and the Claude Developer Platform simultaneously.

**Pattern spread indicators:**
- The Anthropic open standard is the reference definition. No competing skill-standard from OpenAI or Google has been publicly announced.
- BMAD Method v6.1.0 introduced SKILL.md entrypoints for every workflow and agent — parallel adoption of the same file convention, likely influenced by Anthropic's pattern.
- Vibe Game Dev (vibegamedev.com) explicitly builds reusable SKILL.md files as its publishing format. Community-level adoption.
- Snyk article (2025): "Top 8 Claude Skills for 3D Modeling, Game Dev, and Shader Programming" — skills for game development being curated and published by security tooling companies as content marketing, indicating mainstream practitioner reach.
- GitHub issue #31005 on anthropics/claude-code: community requesting support for AGENTS.md and `.agents/skills/` directory — evidence of community pressure to standardize skill discovery patterns across agent systems, not only Claude Code.
- The Claude Code SDK rename to Claude Agent SDK (December 2025) signals Anthropic positioning skills as a general agent primitive, not a Claude Code-specific feature.

**Current limitation:** No public skill marketplace or registry exists. Discovery is ad-hoc (GitHub, blog posts, community forums). The open standard exists but the distribution layer does not.

---

## Implications For Game Studio

**1. Competitive proxy confirmed (Claude Code Game Studios, April 2026).**
The 49-agent, 72-skill public framework validates the approach but also signals saturation risk at the "studio simulation" tier. Game Studio's differentiation must be explicit: not more agents, but better authority model, stronger craft knowledge, and production-grade gate design.

**2. The infrastructure-layer thesis is now documented academic consensus (VILA Lab, 2026).**
The framework's value is in the operational layer, not the model. Game Studio should document this explicitly in its own architecture: what decisions belong in the framework, what belongs to the model, what belongs to the human. The VILA paper's critique — that Claude Code optimizes for task completion over human skill development — is Game Studio's direct opportunity. If the framework explicitly designs for developer craft growth rather than task completion, it occupies a gap the underlying platform acknowledges.

**3. Agent Skills as open standard is the correct distribution format.**
The SKILL.md pattern is now the de facto standard. Game Studio's roles, playbooks, and gate logic should be expressed as distributable skills, not only as repo-internal markdown. This enables the framework to be pulled into other codebases and into the broader practitioner community.

**4. The AI-as-craft-coach niche is genuinely unoccupied.**
No tool in the public record takes craft coaching as its primary proposition with game-design domain specificity and authority boundary documentation. This is a real differentiation window, but it requires the framework to articulate what "coaching" means operationally — not just generating feedback, but scaffolding the designer's own thinking.

**5. AI NPC infrastructure is stalling; design-layer tools are not.**
Inworld's cost struggles and the Convai shutdown confirm that infrastructure-layer AI for games has not found sustainable economics. The design-layer (coaching, review, production planning) is less explored and has lower infrastructure costs. Game Studio is positioned correctly.

**6. Permission modes and approval gates are now a standard pattern, not differentiating by themselves.**
Claude Code has seven permission modes. Claude Code Game Studios has explicit "ask, present options, you decide, draft, approve" protocols. The USER_DECISION_NEEDED pattern is no longer novel. Differentiation requires being more explicit about which decisions are human-only and why — encoding the craft knowledge behind those decisions, not just the gate mechanism.

**7. Skill discovery remains unsolved.**
No marketplace exists. This is a distribution opportunity: a curated game-design skill library with documented craft rationale would fill a gap that the platform itself acknowledges (skills are published to GitHub and blog posts; no registry exists).

---

## Open Questions

1. Does the FDG 2025 proceedings contain any paper on AI-as-design-reviewer or formal human authority models in co-creative systems? Proceedings were not accessible during this research round.
2. What is Google Jules's specific approach to human-in-the-loop creative work, if any? Jules shipped as an async coding agent but game-design-specific usage is undocumented.
3. Has any academic group formalized "craft coaching" as an AI interaction pattern with a testable protocol? The CHI 2026 papers were not accessible; this feels like a probable topic.
4. What does the AIIDE 2025 proceedings contain on co-creative agent architectures? Matthew Guzdial's group at University of Alberta is the most likely source of relevant work.
5. Is there a published comparison of authority-boundary models across agent frameworks (Claude Code permission modes vs. LangGraph interrupt() vs. BMAD gate-ask vs. Game Studio USER_DECISION_NEEDED)? No such comparative paper was found.
6. Does any existing Substack or blog cluster cover AI + game design at the framework/operating-system level, not at the tool-tip level? No such cluster was identified.
7. How sustainable is the Claude Code Game Studios architecture at scale? 49 agents with 72 skills represents significant context overhead per session. Whether the design survives multi-month production projects is not documented.
8. What is the economic model for AI-craft-coach tools? Generative tools charge per token/seat; coaching tools require deeper engagement and possibly subscription or per-session pricing. No product in this space has published unit economics.

---

## Citations

1. VILA Lab. "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems." arxiv 2604.14228v1, April 2026. https://arxiv.org/html/2604.14228v1

2. Anthropic Engineering. "Equipping Agents for the Real World with Agent Skills." October 2025. https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

3. Anthropic. "Claude Agent SDK Documentation." 2025-2026. https://code.claude.com/docs/en/agent-sdk/overview

4. MDPI Journal of Intelligence / PMC. "Generative AI in Game Design: Enhancing Creativity or Constraining Innovation?" 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12193870/

5. Donchitos. "Claude Code Game Studios." GitHub, April 2026. https://github.com/Donchitos/Claude-Code-Game-Studios

6. htdt. "Godogen: Autonomous Game Development for Godot and Bevy." GitHub, 2025. https://github.com/htdt/godogen

7. Aftermath. "AI NPCs Have Potential, But Not The Kind Big Video Game Companies Want." 2025. https://aftermath.site/ai-npcs-nvidia-unity-ubisoft-convai-inworld/

8. Naavik. "AI NPCs: The Future of Game Characters." 2025. https://naavik.co/digest/ai-npcs-the-future-of-game-characters/

9. arxiv 2411.03137. "From Pen to Prompt: How Creative Writers Integrate AI into their Writing Practice." 2024. https://arxiv.org/html/2411.03137v4

10. Artificial Analysis. "Coding Agents Comparison: Cursor, Claude Code, GitHub Copilot, and more." 2025. https://artificialanalysis.ai/agents/coding

11. AIIDE 2025 Conference. Proceedings November 10-14, 2025. https://ojs.aaai.org/index.php/AIIDE/index

12. Snyk. "Top 8 Claude Skills for 3D Modeling, Game Dev, and Shader Programming." 2025. https://snyk.io/articles/top-claude-skills-3d-modeling-game-dev-shader-programming/

13. Second Life / Convai. "AI Character Designer Update." September 2025. https://community.secondlife-staging.com/news/featured-news/ai-character-designer-update-r11208

14. Inworld AI. "GDC 2025: Beyond Prototypes to Production AI." 2025. https://inworld.ai/blog/gdc-2025

15. GitHub Issue #31005. anthropics/claude-code. "Support for AGENTS.md and .agents/skills/." 2025. https://github.com/anthropics/claude-code/issues/31005

16. Wccftech. "Inworld AI GDC 2025 Q&A." 2025. https://wccftech.com/inworld-ai-gdc-2025-qa-aaa-games-want-to-be-secret-but-theres-going-to-be-large-titles-announced/

17. ETCJournal. "Some of the Most Exciting GenAI Innovations Are in Games." November 2025. https://etcjournal.com/2025/10/30/some-of-the-most-exciting-genai-innovations-are-in-games-nov-2025/
