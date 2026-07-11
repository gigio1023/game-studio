#!/usr/bin/env node
// Repository check for the Game Studio skill repo.
// Validates skill packaging, direct resource routing, local links, eval pairing,
// and text hygiene. Run from the repo root: node tools/check-repository.mjs

import { existsSync, lstatSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (file, message) => errors.push(`${file}: ${message}`);

const SKIP_DIRS = new Set([".git", "node_modules"]);
const TEXT_EXT = /\.(md|mjs|json|ya?ml)$/;

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry) || entry === ".DS_Store") continue;
    const full = join(dir, entry);
    const info = lstatSync(full);
    if (info.isSymbolicLink()) continue;
    if (info.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function directoryEntries(dir, label) {
  if (!existsSync(dir)) {
    fail(label, "missing directory");
    return [];
  }
  const info = lstatSync(dir);
  if (info.isSymbolicLink() || !info.isDirectory()) {
    fail(label, "expected a directory");
    return [];
  }
  return readdirSync(dir).filter((entry) => entry !== ".DS_Store").sort();
}

function stripQuotedScalar(value, file, field) {
  let quote = null;
  let escaped = false;
  let commentIndex = -1;
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === "\\") {
      escaped = true;
      continue;
    }
    if (quote) {
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === "#" && (index === 0 || /\s/.test(value[index - 1]))) {
      commentIndex = index;
      break;
    }
  }

  const trimmed = (commentIndex >= 0 ? value.slice(0, commentIndex) : value).trim();
  if (!trimmed) return "";
  const scalarQuote = trimmed[0];
  if (scalarQuote !== '"' && scalarQuote !== "'") return trimmed;
  if (trimmed.at(-1) !== scalarQuote) {
    fail(file, `unterminated quoted ${field}`);
    return "";
  }
  return trimmed.slice(1, -1);
}

const TOP_LEVEL_KEY = /^(?:([A-Za-z_][A-Za-z0-9_-]*)|"([^"]+)"|'([^']+)')\s*:\s*(.*)$/;

function parsePortableFrontmatter(rawText, file) {
  const text = rawText.replace(/\r\n?/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) {
    fail(file, "missing frontmatter");
    return null;
  }

  const lines = match[1].split("\n");
  const entries = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim() || line.trimStart().startsWith("#") || /^\s/.test(line)) continue;
    const keyMatch = line.match(TOP_LEVEL_KEY);
    if (!keyMatch) {
      fail(file, `unsupported frontmatter syntax on line ${index + 2}`);
      continue;
    }
    entries.push({
      key: keyMatch[1] ?? keyMatch[2] ?? keyMatch[3],
      value: keyMatch[4],
      index,
    });
  }

  const counts = new Map();
  for (const entry of entries) counts.set(entry.key, (counts.get(entry.key) ?? 0) + 1);
  for (const [key, count] of counts) {
    if (key !== "name" && key !== "description")
      fail(file, `frontmatter key '${key}' is outside this repository's name-and-description policy`);
    if (count > 1) fail(file, `duplicate frontmatter key '${key}'`);
  }
  for (const required of ["name", "description"]) {
    if (!counts.has(required)) fail(file, `missing frontmatter ${required}`);
  }

  const nameEntry = entries.find((entry) => entry.key === "name");
  const descriptionEntry = entries.find((entry) => entry.key === "description");
  const name = nameEntry ? stripQuotedScalar(nameEntry.value, file, "name") : "";
  let description = "";

  if (descriptionEntry) {
    const marker = descriptionEntry.value.trim();
    if (/^[>|][+-]?$/.test(marker)) {
      const parts = [];
      for (let index = descriptionEntry.index + 1; index < lines.length; index += 1) {
        if (TOP_LEVEL_KEY.test(lines[index])) break;
        if (lines[index].trim()) parts.push(lines[index].trim());
      }
      description = marker.startsWith("|") ? parts.join("\n") : parts.join(" ");
    } else {
      description = stripQuotedScalar(marker, file, "description");
    }
  }

  return { text, name, description };
}

function normalizedLocalValue(rawTarget) {
  let value = rawTarget.trim();
  if (!value) return null;
  if (value.startsWith("<") && value.endsWith(">")) value = value.slice(1, -1);
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(value)) return null;

  value = value.split(/[?#]/, 1)[0];
  if (!value) return null;
  value = value.replace(/\\([\\`*_[\]{}()#+\-.!])/g, "$1");
  try {
    return decodeURIComponent(value);
  } catch {
    return undefined;
  }
}

function checkLocalTarget(file, rawTarget, kind) {
  const value = normalizedLocalValue(rawTarget);
  if (value === null) return;
  if (value === undefined) {
    fail(relative(ROOT, file), `invalid encoded ${kind}: ${rawTarget}`);
    return;
  }

  const target = resolve(dirname(file), value);
  if (!existsSync(target)) fail(relative(ROOT, file), `broken ${kind}: ${rawTarget}`);
  else if (lstatSync(target).isSymbolicLink())
    fail(relative(ROOT, file), `${kind} points to a symlink: ${rawTarget}`);
}

function stripFencedCode(text) {
  return text
    .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, "")
    .replace(/^(?: {4}|\t).*$/gm, "");
}

function markdownDestinations(text) {
  const destinations = [];
  for (let index = 0; index < text.length - 1; index += 1) {
    if (text[index] !== "]" || text[index + 1] !== "(") continue;
    let cursor = index + 2;
    while (/\s/.test(text[cursor] ?? "")) cursor += 1;
    if (text[cursor] === "<") {
      const end = text.indexOf(">", cursor + 1);
      if (end >= 0) destinations.push(text.slice(cursor + 1, end));
      continue;
    }

    const start = cursor;
    let depth = 0;
    for (; cursor < text.length; cursor += 1) {
      const char = text[cursor];
      if (char === "\\" && cursor + 1 < text.length) cursor += 1;
      else if (char === "(") depth += 1;
      else if (char === ")") {
        if (depth === 0) break;
        depth -= 1;
      } else if (/\s/.test(char) && depth === 0) break;
    }
    if (cursor > start) destinations.push(text.slice(start, cursor));
  }
  return destinations;
}

function directReference(rawTarget) {
  const value = normalizedLocalValue(rawTarget);
  if (typeof value !== "string") return null;
  return /^references\/[A-Za-z0-9._-]+\.md$/.test(value) ? value : null;
}

function markdownFiles(dir, label) {
  const files = [];
  for (const entry of directoryEntries(dir, label)) {
    const full = join(dir, entry);
    const info = lstatSync(full);
    if (info.isSymbolicLink() || !info.isFile() || !entry.endsWith(".md")) {
      fail(label, `unexpected entry (expected .md file): ${entry}`);
      continue;
    }
    if (!readFileSync(full, "utf8").trim()) fail(`${label}/${entry}`, "empty fixture");
    files.push(entry);
  }
  return files;
}

function sameMembers(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

// --- Text hygiene across the repo -------------------------------------------
const NON_ENGLISH = /[぀-ヿ㐀-鿿가-힯]/u;
const HOME_PATH = new RegExp("/Users/" + "[a-z]", "i");
const SELF = "tools/check-repository.mjs";
for (const file of walk(ROOT)) {
  if (!TEXT_EXT.test(file)) continue;
  const rel = relative(ROOT, file);
  const rawText = readFileSync(file, "utf8");
  const text = rawText.replace(/\r\n?/g, "\n");
  if (rel !== SELF) {
    if (NON_ENGLISH.test(text)) fail(rel, "contains non-English text");
    if (HOME_PATH.test(text)) fail(rel, "contains an absolute personal path");
    if (text.includes(".game-studio/"))
      fail(rel, "references the retired .game-studio install layout");
  }
  const lines = text.split("\n").length;
  if (rel === "README.md" && lines > 120) fail(rel, `README has ${lines} lines (max 120)`);
  if (rel.endsWith("SKILL.md") && lines > 500) fail(rel, `SKILL.md has ${lines} lines (max 500)`);
  if (rel.endsWith(".md") && lines > 800) fail(rel, `${lines} lines (max 800); split the page`);
  if (rel.endsWith(".json")) {
    try {
      JSON.parse(rawText);
    } catch (error) {
      fail(rel, `invalid JSON: ${error.message}`);
    }
  }
}

// --- Skill packaging --------------------------------------------------------
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const EXPECTED_SKILLS = ["game-direction", "game-production", "game-review"];
const skillsDir = join(ROOT, "skills");
const skillDirs = [];
for (const entry of directoryEntries(skillsDir, "skills/")) {
  const full = join(skillsDir, entry);
  const info = lstatSync(full);
  if (info.isSymbolicLink() || !info.isDirectory()) {
    fail("skills/", `unexpected non-directory entry: ${entry}`);
    continue;
  }
  skillDirs.push(entry);
}
if (!sameMembers(skillDirs, EXPECTED_SKILLS))
  fail("skills/", `expected [${EXPECTED_SKILLS}], found [${skillDirs}]`);

for (const dir of skillDirs) {
  const skillPath = join(skillsDir, dir, "SKILL.md");
  const relSkill = `skills/${dir}/SKILL.md`;
  if (!existsSync(skillPath) || lstatSync(skillPath).isSymbolicLink() || !statSync(skillPath).isFile()) {
    fail(relSkill, "missing SKILL.md");
    continue;
  }

  const parsed = parsePortableFrontmatter(readFileSync(skillPath, "utf8"), relSkill);
  if (!parsed) continue;
  const { text, name, description } = parsed;
  if (name !== dir) fail(relSkill, `frontmatter name '${name}' does not match directory '${dir}'`);
  if (!NAME_RE.test(name) || name.length > 64) fail(relSkill, `invalid skill name '${name}'`);
  if (/anthropic|claude/i.test(name)) fail(relSkill, "name uses a reserved word");
  if (!description) fail(relSkill, "missing or empty description");
  if (description.length > 1024)
    fail(relSkill, `description is ${description.length} chars (max 1024)`);
  if (/<[a-z]+>/i.test(description)) fail(relSkill, "description contains XML tags");

  const directReferences = new Set();
  const routingText = stripFencedCode(text);
  for (const match of routingText.matchAll(/`(references\/[^`]+)`/g)) {
    const reference = directReference(match[1]);
    if (!reference)
      fail(relSkill, `reference must be one level deep: ${match[1]}`);
    else directReferences.add(reference);
  }
  for (const destination of markdownDestinations(routingText)) {
    const reference = directReference(destination);
    if (reference) directReferences.add(reference);
  }
  for (const match of routingText.matchAll(/^\s*\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))/gm)) {
    const reference = directReference(match[1] ?? match[2]);
    if (reference) directReferences.add(reference);
  }

  for (const reference of directReferences) {
    const target = join(skillsDir, dir, reference);
    if (!existsSync(target) || !statSync(target).isFile())
      fail(relSkill, `referenced file missing: ${reference}`);
  }
  if (/\]\(\.\.\//.test(text) || /`\.\.\//.test(text))
    fail(relSkill, "references a path outside the skill folder; skills must be self-contained");

  const refDir = join(skillsDir, dir, "references");
  if (!existsSync(refDir)) {
    if (directReferences.size) fail(relSkill, "references directory is missing");
    continue;
  }
  for (const ref of directoryEntries(refDir, `skills/${dir}/references/`)) {
    const refPath = join(refDir, ref);
    const relRef = `skills/${dir}/references/${ref}`;
    const info = lstatSync(refPath);
    if (info.isSymbolicLink() || !info.isFile() || !ref.endsWith(".md")) {
      fail(relRef, "reference entries must be one-level .md files");
      continue;
    }
    if (!directReferences.has(`references/${ref}`))
      fail(relRef, "orphan reference; route it directly from SKILL.md");
    const refText = readFileSync(refPath, "utf8").replace(/\r\n?/g, "\n");
    if (/\]\(\.\.\//.test(refText) || /`\.\.\//.test(refText))
      fail(relRef, "reference points outside the skill folder");
    const refLines = refText.split("\n");
    if (refLines.length > 100 && !refLines.slice(0, 40).some((line) => line === "## Contents"))
      fail(relRef, `${refLines.length} lines but no '## Contents' map near the top`);
  }
}

// --- Markdown and HTML link integrity --------------------------------------
for (const file of walk(ROOT)) {
  if (!file.endsWith(".md")) continue;
  const text = stripFencedCode(readFileSync(file, "utf8"));
  for (const destination of markdownDestinations(text))
    checkLocalTarget(file, destination, "Markdown link");
  for (const match of text.matchAll(/^\s*\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))/gm))
    checkLocalTarget(file, match[1] ?? match[2], "Markdown reference link");
  for (const match of text.matchAll(/(?:href|src)\s*=\s*(?:(["'])(.*?)\1|([^\s>]+))/gi))
    checkLocalTarget(file, match[2] ?? match[3], "HTML asset link");
}

// --- Eval fixture pairing and index ----------------------------------------
const promptDir = join(ROOT, "evals/prompts");
const expectedDir = join(ROOT, "evals/expected");
const prompts = markdownFiles(promptDir, "evals/prompts");
const expected = markdownFiles(expectedDir, "evals/expected");
if (prompts.length === 0) fail("evals/", "no behavior fixtures found");
if (!sameMembers(prompts, expected))
  fail("evals/", `prompts and expected fixtures do not pair: [${prompts}] vs [${expected}]`);

const evalReadmePath = join(ROOT, "evals/README.md");
if (
  !existsSync(evalReadmePath) ||
  lstatSync(evalReadmePath).isSymbolicLink() ||
  !statSync(evalReadmePath).isFile()
) {
  fail("evals/README.md", "missing eval index");
} else {
  const evalReadme = readFileSync(evalReadmePath, "utf8").replace(/\r\n?/g, "\n");
  const behaviorSection = stripFencedCode(
    evalReadme.match(/## Behavior Fixtures\n([\s\S]*?)(?=\n## |$)/)?.[1] ?? "",
  );
  const indexed = [...behaviorSection.matchAll(/^\|\s*`([^`]+\.md)`\s*\|/gm)]
    .map((match) => match[1])
    .sort();
  if (new Set(indexed).size !== indexed.length) fail("evals/README.md", "duplicate fixture row");
  if (!sameMembers(indexed, prompts))
    fail("evals/README.md", `fixture index differs: [${indexed}] vs [${prompts}]`);
}

// --- Report ----------------------------------------------------------------
if (errors.length) {
  console.error(`check-repository: ${errors.length} problem(s)\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log(`check-repository: ok (${skillDirs.length} skills validated)`);
