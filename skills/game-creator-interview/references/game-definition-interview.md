# Game Definition Interview

Use this reference when a creator needs help defining the game itself, not just
the next task.

## Interview Ledger

Maintain a small ledger while interviewing.

| Field | Question | Source class |
| --- | --- | --- |
| Creator philosophy | What should this game believe or test? | User fact or blocker |
| Desired feeling | What should the player feel after five minutes? | User fact |
| Reference moment | Which exact moment should the design learn from? | User fact |
| Anti-reference | What tempting direction should the game reject? | User fact |
| Player role | Who is the player and what limits them? | User fact or safe assumption |
| World response | What notices, remembers, rewards, or punishes the player? | User fact or repo fact |
| First verb | What can the player actually do first? | User fact or safe assumption |
| First consequence | What changes because of that action? | User fact or safe assumption |
| Proof target | What playable moment will prove the idea? | User fact or safe assumption |
| Non-goal | What must not be built yet? | User fact |
| Acceptance criteria | What would a player understand or do? | User fact or safe assumption |

## Round 1: Orient

Ask one to three questions:

- What do you think this game is really about?
- What would make you say "this is not my game" even if the code worked?
- What player feeling matters most in the first five minutes?

## Round 2: Decompose References

For each reference, ask:

- Which exact moment matters?
- What did the player do?
- What did the world do back?
- What should not be copied?

Convert the answer into constraints, not a genre label.

## Round 3: Define The Frame

Ask:

- Who is the player?
- What can the player change directly?
- What watches, judges, helps, blocks, or remembers them?
- What is the smallest place where that can happen?

## Round 4: First Proof

Ask:

- What one player action should be playable first?
- What one consequence should become visible?
- What would prove the player understood the consequence?
- What should be cut until after that proof?

## Closure Review

Before moving to `game-studio` or `game-execution`, verify:

- a one-sentence game identity exists;
- at least three anti-directions are named;
- the first proof can be played, not only described;
- acceptance criteria can be observed;
- the next human-owned decision is explicit.

Return `USER_DECISION_NEEDED` when the creator must choose between concepts,
accept a Direction Lock, change the player promise, or approve a public claim.

