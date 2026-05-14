# 00 Research Synthesis

## Current Game Studio Baseline

Read these first:

- [README](/Users/naem1023/git/game-studio/README.md)
- [Philosophy](/Users/naem1023/git/game-studio/docs/philosophy.md)
- [Operating Model](/Users/naem1023/git/game-studio/docs/operating-model.md)
- [Validation Gates](/Users/naem1023/git/game-studio/docs/validation-gates.md)
- [Role-Led Game Review](/Users/naem1023/git/game-studio/docs/role-led-game-review.md)
- [Game Design Foundations](/Users/naem1023/git/game-studio/research/foundations/game-design-foundations.md)
- [Game Feel, UX, Art, Audio](/Users/naem1023/git/game-studio/research/foundations/game-feel-ux-art-audio.md)
- [Game Production and Direction](/Users/naem1023/git/game-studio/research/foundations/game-production-and-direction.md)
- [QA, Playtesting, Accessibility](/Users/naem1023/git/game-studio/research/foundations/qa-playtesting-and-accessibility.md)
- [Content Model Gap Analysis](/Users/naem1023/git/game-studio/research/repo-review/content-model-gap-analysis.md)

Current strengths:

- Direction-first doctrine is coherent.
- Milestone order is sharper than standard "just build a vertical slice" advice.
- Evidence gates correctly reject optimism and artifact-only review.
- Roles are leaner than large simulated-studio repos.
- Skills are short entry points with reference files.
- The repo already separates script hygiene from game judgment in principle.

Current gaps:

- The workflow starts too close to Direction Lock for creators who have taste,
  references, or desire but no game-development vocabulary.
- "Blank idea" exists as a starter path, but it is not yet a explicit
  creative discovery route.
- Direction templates evaluate and preserve a direction better than they help a
  novice discover one.
- Project-local state is named but not fully specified.
- Workflow routing does not yet answer "what should happen next?"
- Evidence schemas allow weak artifacts.
- Review findings lack a common severity, confidence, and next-proof protocol.
- Brownfield adoption is still a bootstrap path, not an audit workflow.
- README and public docs are functional but not visually competitive with major OSS repos.
- Repository checks are too easy to mistake for product validation.
- Public product language leans on "evidence" too much. Use proof language for
  the product story, and keep evidence as an internal artifact-classification
  term.

## Local Source Systems

### `harenss`

- [Claude-Code-Game-Studios README](/Users/naem1023/git/harenss/Claude-Code-Game-Studios/README.md)
- [CCGS workflow catalog](/Users/naem1023/git/harenss/Claude-Code-Game-Studios/.claude/docs/workflow-catalog.yaml)
- [CCGS adopt skill](/Users/naem1023/git/harenss/Claude-Code-Game-Studios/.claude/skills/adopt/SKILL.md)
- [CCGS context management](/Users/naem1023/git/harenss/Claude-Code-Game-Studios/.claude/docs/context-management.md)
- [gstack-game README](/Users/naem1023/git/harenss/gstack-game/README.md)
- [gstack-game ethos](/Users/naem1023/git/harenss/gstack-game/ETHOS.md)
- [gstack-game shared preamble](/Users/naem1023/git/harenss/gstack-game/skills/shared/preamble-core.md)
- [gstack-game generation script](/Users/naem1023/git/harenss/gstack-game/scripts/gen-skill-docs.ts)

Transferable ideas:

- Brownfield adoption should classify missing vs incompatible artifacts.
- Session continuity is production infrastructure, not convenience.
- Skill outputs should close with status, next step, and missing evidence.
- Forcing questions should be structured and decision-oriented.
- Review logs and local ledgers should be explicit.

Avoid:

- Copying a large role count.
- Becoming Claude-only.
- Global hidden state.
- Auto-fixing direction docs without a decision record.
- Treating generated skill bodies as the canonical authoring style.

### External Workspace Projects

Use these as local reference libraries, not as merge sources.

- `gstack`: product interrogation, review chains, QA, "boil lake" completeness, user sovereignty.
- `everything-claude-code`: install manifests, catalog checks, hook/runtime validation, selective install architecture.
- `oh-my-codex`: Codex runtime state, prompt guidance fragments, plugin bundle source of truth, native hook mapping.
- `oh-my-claudecode`: team orchestration, verification tiers, hooks, worktree mode, tiered agents.
- `clawhip`: typed event contracts, renderer/sink split, filesystem-offloaded memory, hot pointer layer.
- `career-ops`: system vs user data contract, pipeline integrity, dashboard/report-oriented README.
- `ouroboros`: specification-first workflow, brownfield scans, evaluation pipeline, immutable seed spec.

Detailed notes from the second sweep live in
[07-deep-source-notes.md](07-deep-source-notes.md). The most important
architectural insight is that Game Studio should become a small operating
substrate with explicit state, ownership, evidence, and transition contracts,
not a larger pile of roles.

Deep transfer points:

- Scope should be an output of discovery, not an input assumption. For novice
  creators, the system must help turn wide taste and loose inspiration into a
  focused proof budget.
- The core workflow needs an entry layer that can route direction carry-in,
  taste-to-game discovery, and ambiguous brownfield projects.
- A hot project-state index should point to sharded ledgers for proof, drift,
  decisions, reviews, playtests, and handoffs.
- Install should be a dry-run-able transaction with requested, resolved,
  copied, generated, transformed, and user-owned artifacts.
- Adapter snapshots and hook payloads need versioned contracts, while core stage
  semantics stay runtime-neutral.
- Review depth should scale by stage, risk, file scope, architecture impact,
  security impact, and player-facing change.
- Long-running agent loops need circuit breakers, iteration budgets, and
  explicit exit conditions before they become an optional pack.

Deep game-production transfer points:

- First-person player walkthroughs should become part of the craft review model.
- Design-intent survival should be checked before generic code quality.
- Playtest findings should be triangulated from observation, metric, and
  interview data before they become production decisions.
- Genre and platform modes should adjust review weights instead of pretending
  every game needs the same evidence mix.
- Domain expert contribution should target reference files and rubrics, not
  internal adapter mechanics.

## Web Research

Game-design and production sources confirm the same direction:

- Discovery and production are distinct but connected. Double Diamond-style
  design work separates divergent discovery from convergent definition, while
  game production then turns the defined target into staged delivery.
- Riot's public R&D writing uses opportunity, thesis, audience, prototype,
  de-risking, playtesting, validation, and proof language. It does not treat
  "evidence" as the product slogan.
- Unity's production guidance frames pre-production as a path toward a playable
  game design, with vertical slice or player testing as the way to decide when
  the project can move into production.
- Mixed-initiative game-design research supports human and AI co-creation, but
  requires the tool to preserve designer intent and explain alternatives rather
  than silently taking over authorship.
- Novice creator systems such as Scratch and Kodu point toward low-floor,
  wide-wall, high-ceiling authoring: easy entry, many possible directions, and
  enough structure to keep growing.
- Constraint research supports focusing constraints. The product should not say
  "make the idea small"; it should say "choose the next proof that lets the idea
  survive."
- MDA requires a causal path from mechanics to dynamics to player experience.
- Self-Determination Theory keeps autonomy, competence, and relatedness visible when reviewing motivation.
- Playcentric design treats prototypes and playtests as the method, not as late validation.
- Production sources distinguish prototype, first playable, vertical slice, public demo, and release candidate.
- Accessibility sources require barrier review early, not release-only compliance.
- Usability research separates observation, inference, severity, and recommendation.
- Steam and demo release documentation make public promises, store readiness, demo eligibility, and support part of production scope.

Web sources:

- [MDA paper](https://www.cs.northwestern.edu/~hunicke/MDA.pdf)
- [Design Council Double Diamond](https://www.designcouncil.org.uk/fileadmin/uploads/dc/Documents/Press_Releases/The_Double_Diamond_turns_20_-_9_May_2023_Final.pdf)
- [Riot R&D: Opportunity, Thesis, and Audience](https://www.riotgames.com/en/news/r-d-foundations-opportunity-thesis-and-audience)
- [Riot R&D: Prototype, Building a Game's Substance](https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality)
- [Self-Determination Theory basic psychological needs](https://selfdeterminationtheory.org/topics/application-basic-psychological-needs/)
- [Self-Determination Theory and video games](https://selfdeterminationtheory.org/SDT/documents/2006_RyanRigbyPrzybylski_MandE.pdf)
- [Quantic Foundry Gamer Motivation Model](https://quanticfoundry.com/audience-profiles/)
- [Game Design Workshop](https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Games/Fullerton/p/book/9781032607009)
- [The Art of Game Design](https://www.routledge.com/The-Art-of-Game-Design-A-Book-of-Lenses-Third-Edition/Schell/p/book/9781138632059)
- [PCG Book: Mixed-Initiative Content Creation](https://www.pcgbook.com/chapter11.pdf)
- [Mixed-Initiative Co-Creativity](https://www.antoniosliapis.com/papers/mixed_initiative_co-creativity.pdf)
- [Unity game development process](https://learn.unity.com/tutorial/a-game-development-process-1)
- [Unity production and post-release](https://learn.unity.com/course/unity-for-humanity-guide-for-creators/unit/game-development-in-a-nutshell/tutorial/production-and-post-release?version=6.0)
- [Steamworks release process](https://partner.steamgames.com/doc/store/releasing)
- [Steam Next Fest](https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest?language=english)
- [IGDA Game Crediting Guide](https://igda.org/resources-archive/game-credits-special-interest-group/)
- [ISTQB Game Testing certification](https://www.istqb.org/certifications/certified-tester-game-testing-ct-game/)
- [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-gb/gaming/accessibility/guidelines)
- [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/basic/)
- [NN/g Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/)
- [NN/g severity ratings](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/)
- [Valve Level Flow](https://developer.valvesoftware.com/wiki/Level_Flow)

Deepened source reading adds three planning consequences:

- Add a Creative Discovery route before Direction Lock for users who have taste
  but no formed game thesis.
- Add concept slates, taste profiles, constraint ladders, and first playable
  proof contracts as production artifacts, not optional brainstorming notes.
- Rename the public product stance to AI-assisted and playable-validation. Keep
  evidence terminology inside schemas, ledgers, and review output only.
- Evidence templates should ask for mechanics -> dynamics -> player experience
  links, not only artifact links.
- Accessibility review should move into design and prototype gates, not remain a
  final release checklist.
- Release planning should treat store-page promises, demo scope, support,
  credits, and post-release retrospectives as product evidence.

## Synthesis

The next version of Game Studio should make this chain explicit:

```text
Taste / Direction source -> Concept slate -> Creative brief -> First playable proof -> Stage -> Milestone proof -> Evidence contract -> Role review -> Gate verdict -> Next proof
```

The repo's public story should show the playable-validation chain visually. The implementation should make that chain executable through project-local artifacts, not through a giant command set.
