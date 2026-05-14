# Recent And Adjacent Work (2024-2026): AI Tool Postmortems 2024-2026

[Back to index](../03-recent-adjacent-work.md)

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

**4. The AI-as-game design review niche is genuinely unoccupied.**
No tool in the public record takes game design review workflow as its primary proposition with game-design domain specificity and authority boundary documentation. This is a real differentiation window, but it requires the framework to articulate what "coaching" means operationally — not just generating feedback, but scaffolding the designer's own thinking.

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
3. Has any academic group formalized "game design review workflow" as an AI interaction pattern with a testable protocol? The CHI 2026 papers were not accessible; this feels like a probable topic.
4. What does the AIIDE 2025 proceedings contain on co-creative agent architectures? Matthew Guzdial's group at University of Alberta is the most likely source of relevant work.
5. Is there a published comparison of authority-boundary models across agent frameworks (Claude Code permission modes vs. LangGraph interrupt() vs. BMAD gate-ask vs. Game Studio USER_DECISION_NEEDED)? No such comparative paper was found.
6. Does any existing Substack or blog cluster cover AI + game design at the framework/operating-system level, not at the tool-tip level? No such cluster was identified.
7. How sustainable is the Claude Code Game Studios architecture at scale? 49 agents with 72 skills represents significant context overhead per session. Whether the design survives multi-month production projects is not documented.
8. What is the economic model for AI-game-design-review tools? Generative tools charge per token/seat; coaching tools require deeper engagement and possibly subscription or per-session pricing. No product in this space has published unit economics.

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
