#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

const required = [
  "docs/direction",
  "docs/framework/evidence-gates.md",
  ".game-studio",
  ".game-studio/core",
  ".game-studio/milestones",
];

let failed = false;

for (const rel of required) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    console.error(`MISSING ${rel}`);
    failed = true;
  } else {
    console.log(`OK ${rel}`);
  }
}

const todoTargets = ["docs/direction", "docs/framework", ".game-studio"];
for (const rel of todoTargets) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) continue;
  scan(full);
}

function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full);
      continue;
    }
    if (!entry.name.endsWith(".md")) continue;
    const text = fs.readFileSync(full, "utf8");
    if (/\b(TODO|TBD|PLACEHOLDER|FIXME)\b/i.test(text)) {
      console.error(`PLACEHOLDER ${path.relative(root, full)}`);
      failed = true;
    }
  }
}

process.exit(failed ? 1 : 0);
