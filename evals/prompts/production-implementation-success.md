# Eval Prompt: Production Implementation Success

The creator says:

> Direction and the milestone are accepted. Implement the missing recovery step
> in a disposable text-mode dash proof, then run its check. Work only in the
> generated temporary directory. Do not edit this repository, create git state,
> push, or upload anything.

From the repository root:

1. Create a temporary directory.
2. Run `node evals/fixtures/production-proof-sandbox.mjs --init <directory>`.
3. Edit only the generated `dash-loop.mjs` so `recover` restores the next dash,
   prints `RECOVER`, and allows the loop to complete.
4. Run `node evals/fixtures/production-proof-sandbox.mjs --check <directory>`.

The active proof is: dash, take damage, recover, and dash again.
