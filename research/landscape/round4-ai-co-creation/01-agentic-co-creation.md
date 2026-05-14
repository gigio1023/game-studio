# Agentic Co-Creation Landscape

Research date: 2026-05-05

## Sources Checked

Repo context checked only as needed:

- `README.md` for the public thesis: "AI-assisted game production framework for playable validation."
- `docs/product-boundary.md` for authority boundaries, entry modes, and public language.
- `docs/validation-gates.md` for proof/evidence classes and stage-gate expectations.
- `research/landscape/ai-game-dev/01-llm-game-dev-state.md` for prior repo research on LLM game development, Ghostwriter, BMAD, and agentic game-master literature.

Web sources checked:

- Claude Agent Skills overview: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- Claude Code skills docs: https://code.claude.com/docs/en/skills
- OpenAI Codex cloud docs: https://developers.openai.com/codex/cloud
- OpenAI Codex product page: https://openai.com/codex/
- Cursor background agents docs: https://docs.cursor.com/en/background-agents
- Cursor rules/context docs: https://docs.cursor.com/en/context
- BMAD Method public site: https://www.bmadcode.com/bmad-method/
- BMAD Method docs: https://docs.bmad-method.org/
- VILA Lab Claude Code architecture study: https://arxiv.org/abs/2604.14228
- AIDev coding-agent dataset: https://arxiv.org/abs/2602.09185
- AI coding-agent refactoring study: https://arxiv.org/abs/2511.04824
- AI coding-agent logging study: https://arxiv.org/abs/2604.09409
- GitTaskBench real-repo coding-agent benchmark: https://arxiv.org/abs/2508.18993
- Microsoft workplace coding-tool RCT/diary study: https://www.microsoft.com/en-us/research/publication/dear-diary-a-randomized-controlled-trial-of-generative-ai-coding-tools-in-the-workplace/
- Unity AI product page: https://unity.com/features/ai
- Roblox Studio agentic AI announcement: https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic
- Roblox Assistant docs: https://create.roblox.com/docs/assistant/guide
- Roblox OpenGameEval benchmark announcement: https://corp.roblox.com/newsroom/2025/12/opengameeval-benchmark-agentic-ai-assistants-roblox-studio
- Ubisoft Ghostwriter article: https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter
- Ubisoft NEO NPC article: https://news.ubisoft.com/en-us/article/5qXdxhshJBXoanFZApdG3L/how-ubisofts-new-generative-ai-prototype-changes-the-narrative-for-npcs
- Inworld Runtime announcement: https://www.globenewswire.com/news-release/2025/08/13/3132320/0/en/inworld-runtime-the-first-ai-runtime-for-consumer-applications.html
- Inworld Unreal AI Runtime SDK post: https://preview-2025.dev.inworld.ai/blog/introducing-unreal-ai-runtime-sdk
- Convai docs: https://docs.convai.com/
- Convai product page: https://convai.com/
- Google Cloud 2025 games report: https://cloud.google.com/resources/games-report
- Google Cloud games AI press release: https://www.prnewswire.com/news-releases/90-of-games-developers-already-using-ai-in-workflows-according-to-new-google-cloud-research-302531363.html
- Steamworks AI content announcement: https://steamcommunity.com/groups/steamworks/announcements/detail/3862463747997849619
- Ludo.ai product page: https://ludo.ai/
- Scenario product page: https://www.scenario.com/
- Layer product page: https://www.layer.ai/
- Rosebud AI product page: https://rosebud.ai/

## What Exists

Agentic coding tools have converged on a recognizable runtime pattern: repo context, filesystem access, shell/tool execution, background or parallel tasks, and persistent project instructions. Claude's Agent Skills package domain expertise as `SKILL.md` plus optional scripts/resources with progressive disclosure; Claude Code adds skill invocation controls and subagent execution. Codex similarly positions itself as a coding-agent command center for parallel work, worktrees, cloud environments, and team-specific skills. Cursor exposes comparable workflow areas through rules, memories, background agents, and MCP-style context plumbing.

BMAD-style methods show that agent workflows are becoming productized as role systems, not just prompts. BMAD presents specialized agents, workflows, skills, project context, document sharding, and agile-style stage movement as a general software-development operating method. Its close relevance is structural: role files plus workflow gates plus context management. Its limit for this repo is domain: it helps ship software, but it does not define game craft, playable build, player experience authority, or taste-to-game discovery.

Recent coding-agent studies support the need for explicit guardrails and proof. The VILA Lab Claude Code study argues that the agent loop is simple, while the real system is the surrounding runtime: permissions, context compaction, extensibility, subagents, worktree isolation, and session storage. AIDev reports 932,791 agent-authored pull requests across Codex, Devin, Copilot, Cursor, and Claude Code. GitTaskBench finds real repository tasks still difficult even for strong agent stacks. Refactoring and logging studies show agent behavior tends toward localized changes and can miss non-functional requirements even when instructed, which strengthens the case for deterministic checks plus human review instead of natural-language policy alone.

Game-engine vendors are moving from chat assistants to in-editor agentic workflows. Unity AI Beta includes an agentic assistant, AI Gateway, and official MCP server; Unity emphasizes project context, editor actions, change undo, AI-generated asset metadata, permission control, and verification. Roblox is further along in public agentic framing: its April 2026 announcement says 44% of the top 1,000 creators used Roblox Assistant or third-party AI tools via MCP during the measured period, and describes a plan/build/test loop with editable planning mode, task manifests, parallel agents, and a playtesting agent beta. Roblox's OpenGameEval also moves evaluation toward executable sandbox tests for game-assistant behavior.

Game-industry AI production tools mostly cluster around content generation, asset pipelines, NPC dialogue, and market ideation. Ubisoft Ghostwriter is a strong human-in-the-loop example: it drafts NPC barks, writers select and edit variations, and pairwise choice trains the tool. Ubisoft NEO NPC, Inworld, and Convai focus on player-facing interactive characters, LLM pipelines, voice, guardrails, latency, observability, and engine integrations. Inworld's recent positioning is especially notable: it now stresses the prototype-to-production gap, runtime infrastructure, cost/latency/quality observability, and visual graph configuration rather than only "AI NPC magic."

Game-specific ideation and asset tools are broad but shallow from a craft-governance perspective. Ludo.ai combines concept generation, market trends, Ludo Score, asset generation, playable generation, tutorials, MCP/API integration, and Unity integration. Scenario and Layer focus on production-grade creative asset workflows, brand/style consistency, custom models, workflow automation, and team pipelines. Rosebud sells natural-language "vibe coding" for browser-playable 2D/3D games. These tools collapse idea-to-output distance, but generally do not enforce authorial taste boundaries, playable-proof gates, or role-led craft review.

Market adoption is no longer speculative. Google Cloud's 2025 games research reports that 90% of surveyed game developers already use generative AI in workflows, with common uses including repetitive task automation, code/script support, and creative workflow assistance. Steam's AI disclosure policy confirms that generated content has become common enough to require platform-level declarations and customer-facing disclosure. The center of gravity is therefore shifting from "Can AI help make game material?" to "How do teams govern, verify, and take responsibility for AI-assisted production?"

## What Is Still Missing

The landscape has many generators and agent runtimes, but few systems that coach game craft. Tools can draft barks, make sprites, wire engine scenes, plan Roblox tasks, or run code agents. They rarely ask whether a mechanic creates the intended player decision, whether camera/audio/readability support the verb, whether a concept deserves more scope, or whether the player's observed behavior supports the promise.

There is no clear prior art for a public, game-specific taste-to-prototype guidance system that treats human taste as a protected authority and playable build as the advancement mechanism. Ghostwriter preserves writer control at the line-variation level, and Roblox planning mode preserves creator intent before changes are made, but neither defines a full concept-to-proof-to-review-to-gate production loop.

AI ideation tools often generate one more concept, score, asset, or prototype. What remains missing is a disciplined way to compare concepts against proof budgets, reject or park ideas, and escalate only when a playable artifact survives review. Ludo.ai's market scoring is useful for competitive context, but market fitness is not the same as craft validity.

Engine-native AI is improving at project-aware execution, but validation is still technical-heavy. Unity emphasizes editor integration, action verification, permissions, and metadata. Roblox adds automated playtesting and OpenGameEval. These are important, but they do not replace human craft judgment, player observation, or release-promise review.

Agent skills are becoming a standard distribution unit, but most skills encode procedures, not taste-preserving production values. Current skill systems can package instructions, references, scripts, and templates. The missing layer is a set of game-specific skills that make agents behave like careful coaches: preserve direction, name uncertainty, request proof, refuse stage advancement from prose, and separate implementation evidence from player evidence.

## Positioning Implications

Game Studio should not position itself as another game generator, asset generator, NPC platform, or "vibe coding" wrapper. Those categories are crowded and are already covered by Unity, Roblox, Inworld, Convai, Ludo.ai, Rosebud, Scenario, Layer, and general coding agents.

The differentiated position is: Game Studio is a taste-to-prototype guidance and playable-validation production framework for AI-assisted game development. It helps agents and humans decide what is worth building next, what must be proven, what should be cut, and what cannot advance without human authority or player-facing proof.

The strongest contrast is with speed-first tools. The market is optimizing for faster creation, larger output volume, and lower friction from prompt to artifact. Game Studio should optimize for better judgment under too much generated material: fewer unearned concepts, smaller proofs, clearer cut rules, stronger review, and less confusion between generated material and validated game quality.

The current landscape also makes "milestone-gated playable validation" more valuable, not less. As code agents and engine agents become capable of making larger edits, teams need sharper stage contracts, claim-to-proof mapping, and review roles that can block progress. Game Studio can become the layer that says: the agent may build, but the proof decides; the user owns taste; review names risk; gates control scope.

Public language should lean into "playable build," "proof budget," "claim-to-proof," "role-led review," and "human creative authority." Avoid implying that Game Studio autonomously designs good games. Its value is disciplined co-creation: it structures taste, craft, production risk, and proof so humans can make better decisions with AI help.

## Skill Design Implications

Skills should be designed as review protocols, not just task recipes. A good Game Studio skill should begin by identifying the entry mode, authority source, current stage, proof target, and stop condition. It should then constrain the agent's next action to the smallest artifact that can reduce uncertainty.

Every role skill should separate three outputs: observation, judgment, and next proof. This maps directly to the gap in current agent systems, where generated plans and confident prose can obscure uncertainty. Role verdicts should cite the artifact they inspected, state confidence, name missing proof, and avoid advancing stage without a decision record.

Game Studio skills should use progressive disclosure the same way Claude/Codex skills do. The top-level `SKILL.md` should stay compact: when to use the skill, what authority it has, what it must never decide, and what output contract it must produce. Detailed craft references, gate forms, rubrics, and example reviews should live in supporting files and be loaded only when relevant.

Deterministic helpers should support the skills where possible, but they should not pretend to judge fun. Scripts can check artifact presence, schema shape, missing captures, broken links, stage names, or claim-to-proof completeness. They cannot decide whether a loop is compelling, whether a joke lands, whether a horror beat is readable, or whether a player understood a risk. The skill contract should make that boundary explicit.

The agent architecture research suggests adding explicit context-preservation patterns. Skills should summarize prior direction before issuing new recommendations, list any conflict with locked direction, and record parked ideas with revisit conditions. This turns "memory" into a production habit instead of relying on the model's context window.

For game-specific AI tools, integration skills should treat external generators as subordinate production tools. A Ludo/Rosebud/Unity/Roblox/Inworld/Convai-oriented workflow should not ask "what can this generate?" first. It should ask: what validation target are we testing, what constraint must the generated material respect, what artifact will be reviewed, and what would cause rejection?

## Concrete Changes To Propose

Add a short public positioning phrase near the README thesis: "Not a game generator: a taste-to-prototype guidance layer that turns AI output into playable builds, reviews, gates, and human decisions."

Add a comparison table to the landscape or product docs with columns for "category," "examples," "what they optimize," "what they do not own," and "Game Studio boundary." Rows should include coding agents, agent skills, BMAD-style methods, engine assistants, NPC platforms, asset tools, ideation tools, and market scoring tools.

Create a "skill contract" template for Game Studio roles. Required fields should include entry mode, authority source, inspected artifact, proof target, verdict, confidence, missing proof, next smallest proof, human-only decision, and stop condition.

Strengthen role review outputs so they cannot end with generic advice. Require each review to propose one of: pass gate, revise same proof, reduce scope, request player evidence, request implementation evidence, request release evidence, or stop for human authority.

Add a "generated material is not proof" rule to relevant skills and docs. A generated sprite, scene, concept, bark set, NPC response, or prototype is input material; it becomes proof only when tied to a player action, system response, visible consequence, capture, QA note, playtest observation, or release claim check.

Add optional integration notes for engine/vendor AI tools. Unity and Roblox workflows should be framed as execution accelerators under Game Studio gates. Inworld/Convai should be framed as NPC/interaction infrastructure that requires scenario boundaries, latency/cost/quality checks, content guardrails, and playtest evidence. Ludo/Rosebud/Scenario/Layer should be framed as ideation or asset sources, not direction authorities.

Add a "proof budget before generation" check to creative discovery. Before asking an AI tool to generate concepts or assets, the agent should name the smallest playable question, maximum allowed output volume, cut criteria, and what human choice will be required afterward.

Add an "agentic risk" note to the production model. As coding and engine agents become more autonomous, Game Studio should require branch/worktree isolation where available, explicit review of agent-authored changes, artifact ledgers for generated content, and higher confidence thresholds for release-facing claims.
