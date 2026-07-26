# Trigger Fixtures

Prompts for checking skill discovery. Positive prompts should activate the
named skill; near-miss prompts should not activate any Game Studio skill (or
should route to the adjacent skill named in parentheses). Test with only the
skill listing available — no skill bodies loaded.

## game-direction

Positive:

- "I want to make a game but I only know the feelings I'm chasing — interview
  me and help me figure out what it is."
- "Here's a repo with half a prototype and some old design notes. What is this
  project actually, and what should we preserve?"
- "Turn these five reference games I love into a concept I could build."
- "Two briefs disagree about the player role. Identify the direction decision
  before anyone implements another mechanic."
- "Review this creative brief and pillars for unresolved direction decisions."
- "Development on this project stalled six months ago. Should I continue or
  pivot or kill it before I sink more time in?"

Near-miss:

- "Plan the next milestone for my platformer." (game-production)
- "Review whether my demo is ready for the store page." (game-review)
- "Write a short story set in my game's world." (no Game Studio skill)

## game-production

Positive:

- "Direction is locked. Plan the smallest milestone that proves the core loop."
- "Implement the dash mechanic from the brief in my Godot project."
- "The dash fix passed review. Implement the accepted change and run the target
  scene build."
- "Keep working on the game for the next few hours; don't drift into writing
  docs."
- "Map the whole-game release scope and cut line before we plan milestones."

Near-miss:

- "What game should I even make?" (game-direction)
- "Is this vertical slice actually a vertical slice?" (game-review)
- "Review whether this Godot first playable is actually done." (game-review)
- "Optimize my CI pipeline." (no Game Studio skill)
- "Implement this API endpoint and keep going for a few hours." (no Game Studio skill)
- "Upgrade this Godot project and fix an editor import regression." (no Game
  Studio skill; use an engine-specific workflow)

## game-review

Positive:

- "The agent says the build is playable — verify that claim."
- "Review the first playable: does the level teach before it tests?"
- "Review this Godot first playable, but do not fix it yet."
- "Check our store page claims against what the build actually does."
- "Can we honestly call this game fully accessible based on these checks?"

Near-miss:

- "Help me pick between these three game concepts." (game-direction)
- "Review these two creative briefs and identify which direction decision is
  unresolved." (game-direction)
- "Break this milestone into work packages." (game-production)
- "Review this pull request's code style." (no Game Studio skill)
- "Is this backend build ready to deploy?" (no Game Studio skill)
- "Review the release roadmap for our mobile banking app." (no Game Studio skill)

## game-knowledge

Positive:

- "My hits still feel flat even with screen shake and hit-stop added — how do
  I get real juice into the feedback?" (screen shake, hit-stop, juice)
- "How should I price my indie game on Steam — what's a normal range?"
  (pricing)
- "When should my Steam wishlist page go live before launch?" (wishlist)
- "Should I apply for Next Fest, and how long should the demo be?" (Next
  Fest)
- "I have no playtesters lined up and I'm about to ship — what do I do?"
  (playtesters)
- "I've been grinding on this solo project for eight months and I'm burning
  out — is that normal for game dev?" (burnout)
- "My contractor composer starts next week — do I need an IP assignment
  before they touch anything?" (IP assignment)
- "This repo has a project.godot file — what should I know before I touch
  it?" (fingerprint: project.godot)
- "There's an Assets/ folder and a ProjectVersion.txt in this repo — what am
  I looking at?" (fingerprint: Assets/)
- "This is a *.uproject file — what conventions apply here?" (fingerprint:
  *.uproject)

Near-miss:

- "Should I continue or pivot or kill this project?" (game-direction — a
  direction decision, not a reference lookup; must not fall to a generic
  judgment/decision-synthesis skill either)
- "Plan the milestone that gets us to a vertical slice." (game-production)
- "Is this build ready to ship?" (game-review)
- "What game should I even make?" (game-direction)
