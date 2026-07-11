# Creator Interview

Use this when the creator cannot yet judge whether the current design is
coherent, or when the agent is about to keep implementing from a weak game
frame. The interview is not a thesis exam: it turns taste, philosophy,
references, and constraints into a game frame and a first playable proof
without forcing production vocabulary on the creator.

## Source Classes

Tag every important field with one source class.

| Source class | Meaning | Allowed next step |
| --- | --- | --- |
| User fact | The creator directly said it. | Treat as stable until corrected. |
| Repo fact | The current project already proves or records it. | Cite the file or playable artifact. |
| Safe assumption | The agent chose a small, reversible default. | Record it and make it easy to revise. |
| Blocker | The field needs taste, authority, budget, a public promise, or credentials. | Ask for the decision, or ask the creator to configure credentials through a secure path supported by their environment. Never request a secret value in chat or store it in a direction artifact. |

Do not call the interview closed while a blocker remains, and do not treat a
safe assumption as user taste.

## Interview Ledger

Maintain a small ledger while interviewing:

| Field | Question |
| --- | --- |
| Creator philosophy | What should this game believe or test? |
| Desired feeling | What should the player feel after five minutes? |
| Reference moment | Which exact moment should the design learn from? |
| Anti-reference | What tempting direction should the game reject? |
| Player role | Who is the player and what limits them? |
| World response | What notices, remembers, rewards, or punishes the player? |
| First verb | What can the player actually do first? |
| First consequence | What changes because of that action? |
| Proof target | What playable moment will prove the idea? |
| Non-goal | What must not be built yet? |
| Acceptance criteria | What would a player visibly understand or do? |

## Rounds

Run short rounds; each round asks only the questions that unlock the next
field. Stop asking broad questions once one specific blocker remains.

1. **Orient.** What the creator thinks the game is really about; what would
   make them say "this is not my game" even if the code worked; the one player
   feeling that matters most in the first five minutes.
2. **Decompose references.** For each reference: which exact moment mattered,
   what the player did, what the world did back, what must not be copied.
   Convert answers into constraints, not a genre label.
3. **Define the frame.** Who the player is, what they can change directly,
   what watches or judges or remembers them, and the smallest place where that
   can happen.
4. **First proof.** One player action playable first, one consequence made
   visible, what would prove the player understood it, and what gets cut until
   after that proof.

Question rules:

- Ask about remembered moments before genre, desired player behavior before
  systems, and what must not happen before proposing scope.
- Ask for one contradiction at a time when references conflict.
- Do not ask about engine, monetization, release plans, or content volume
  unless that decision blocks the next proof.

## When The Interview Can Close

The interview can hand off to production only when all of these hold:

- the creator can say the game identity in one sentence;
- the player role is clear enough to reject at least one wrong mechanic;
- the first playable proof names one player action and one consequence;
- non-goals are explicit enough to stop generic genre additions;
- acceptance criteria can be observed in play;
- human-owned decisions are recorded, not assumed.

If not, keep interviewing or return `USER_DECISION_NEEDED`.

## Output

```text
Creator philosophy:
Player role:
Whole-game frame:
Reference moments:
Anti-references:
First playable proof:
Acceptance criteria:
Non-goals:
Safe assumptions:
Human-owned decisions:
Next step:
```
