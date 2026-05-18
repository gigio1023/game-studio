# Creator Interview Model

Game Studio should help a creator define a game without pretending the creator
already has production vocabulary. The interview is not a thesis exam. It is a
controlled way to turn taste, philosophy, references, and constraints into a
first playable proof.

## Purpose

Use this model when the creator cannot yet judge whether the current design is
coherent, or when the agent is about to keep implementing from a weak game
frame.

The interview must produce:

- creator philosophy
- reference moments and anti-references
- desired player experience
- whole-game frame
- first playable proof question
- non-goals
- acceptance criteria
- human-owned decisions

## Source Classes

Every important field should be tagged with one source class.

| Source class | Meaning | Allowed next step |
| --- | --- | --- |
| User fact | The creator directly said it. | Treat as stable until corrected. |
| Repo fact | The current project already proves or records it. | Cite the file or playable artifact. |
| Safe assumption | The agent chose a small, reversible default. | Record it and make it easy to revise. |
| Blocker | The field needs taste, authority, budget, public promise, or secrets. | Stop and ask the creator. |

Do not call the interview closed while a blocker remains.

## Interview Shape

Run the interview in short rounds. Each round should ask only the questions that
can unlock the next artifact.

1. Orientation: what the creator thinks the game is and what they do not want it
   to become.
2. Reference moments: specific moments from games, films, tools, places, or
   personal experience.
3. Philosophy: what the game should say about agency, pressure, society,
   failure, beauty, comedy, cruelty, or care.
4. Player role: who the player is, what they can do, what they cannot control,
   and what examines or responds to them.
5. Whole-game frame: setting, verbs, social rules, session shape, and main
   tension.
6. First playable proof: the smallest playable scene that can test the frame.
7. Closure: non-goals, cut candidates, acceptance criteria, and stop condition.

## Question Rules

- Ask about remembered moments before asking for genre.
- Ask about desired player behavior before asking for systems.
- Ask about what must not happen before proposing scope.
- Ask for one contradiction at a time when references conflict.
- Do not ask for engine, monetization, release plan, or content volume unless
  that decision blocks the next proof.

## Closure Gate

The interview can move to production only when all of these are true:

- the creator can say the game identity in one sentence;
- the player role is clear enough to reject at least one wrong mechanic;
- the first playable proof names one player action and one consequence;
- non-goals are explicit enough to stop generic additions;
- acceptance criteria can be observed in play;
- human-owned decisions are recorded instead of assumed.

If these are not true, keep interviewing or return `USER_DECISION_NEEDED`.

## Output

Use this closure shape:

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
Next artifact:
Stop condition:
```

