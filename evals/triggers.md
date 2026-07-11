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

Near-miss:

- "Plan the next milestone for my platformer." (game-production)
- "Review whether my demo is ready for the store page." (game-review)
- "Write a short story set in my game's world." (no Game Studio skill)

## game-production

Positive:

- "Direction is locked. Plan the smallest milestone that proves the core loop."
- "Implement the dash mechanic from the brief in my Godot project."
- "The dash fix passed review. Implement the accepted change and run the target
  scene proof."
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
