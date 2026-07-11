#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const [mode, directory] = process.argv.slice(2);
if (!mode || !directory || !["--init", "--check"].includes(mode)) {
  console.error("usage: production-proof-sandbox.mjs --init|--check <directory>");
  process.exit(2);
}

const sandbox = resolve(directory);
const target = join(sandbox, "dash-loop.mjs");

if (mode === "--init") {
  mkdirSync(sandbox, { recursive: true });
  writeFileSync(
    target,
    `const steps = (process.argv[2] ?? "").split(",").filter(Boolean);
let canDash = true;
let damaged = false;
let recovered = false;

for (const step of steps) {
  if (step === "dash") {
    if (!canDash) {
      console.error("DASH_BLOCKED");
      process.exit(1);
    }
    console.log("DASH");
    canDash = false;
  } else if (step === "damage") {
    console.log("DAMAGE");
    damaged = true;
  } else if (step === "recover") {
    console.error("RECOVERY_NOT_IMPLEMENTED");
    process.exit(1);
  } else {
    console.error(\`UNKNOWN_STEP:\${step}\`);
    process.exit(1);
  }
}

if (damaged && recovered) console.log("LOOP_COMPLETE");
`,
  );
  console.log(target);
  process.exit(0);
}

if (!existsSync(target)) {
  console.error("production-proof: missing dash-loop.mjs");
  process.exit(1);
}

const run = spawnSync(process.execPath, [target, "dash,damage,recover,dash"], {
  encoding: "utf8",
});
const expected = "DASH\nDAMAGE\nRECOVER\nDASH\nLOOP_COMPLETE\n";
if (run.status !== 0 || run.stdout !== expected) {
  process.stderr.write(run.stderr);
  console.error("production-proof: failed");
  process.exit(1);
}

console.log("production-proof: ok");
