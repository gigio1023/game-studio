# Eval Prompt: Review Ready Lantern Loop

The creator says:

> Review whether this text-mode first playable proves its one claimed loop.
> Review only; do not edit files or advance the project stage.

Claim:

- The player first tries to cross in darkness and fails without losing the run.
- The player can recover, light a lantern, reveal a safe bridge, and cross.

Run this playable check from the repository root:

```bash
node evals/fixtures/ready-lantern-loop.mjs --script cross,light,cross
```

Limit the verdict to this one text-mode loop. Do not infer art, audio, broader
level design, external-player comprehension, or release readiness.
