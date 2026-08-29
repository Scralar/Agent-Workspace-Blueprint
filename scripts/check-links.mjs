// Verify: relative markdown links resolve, and no stale per-shape copies of
// shared reference files exist. Run from the repo root: node scripts/check-links.mjs
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, sep } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const SKIP_DIRS = new Set([".git", ".cursor", "node_modules", ".screenshots"]);

function mdFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return SKIP_DIRS.has(e.name) ? [] : mdFiles(join(dir, e.name));
    return e.name.endsWith(".md") ? [join(dir, e.name)] : [];
  });
}

const errors = [];
const files = mdFiles(ROOT);

for (const file of files) {
  const text = readFileSync(file, "utf8");
  // Strip fenced code blocks so sample links inside templates are not checked.
  const prose = text.replace(/```[\s\S]*?```/g, "");
  for (const match of prose.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const target = match[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const path = resolve(dirname(file), target.split("#")[0]);
    if (!existsSync(path)) {
      errors.push(`${file.slice(ROOT.length + 1)} -> broken link: ${target}`);
    }
  }
  // Shared-leaf rule: shape folders must not regrow local reference copies.
  const rel = file.slice(ROOT.length + 1).split(sep).join("/");
  if (/^blueprint\/(public|private-solo|private-team)\/reference-/.test(rel)) {
    errors.push(`${rel}: reference files live in blueprint/reference/, not shape folders`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s) in ${files.length} markdown files.`);
  process.exit(1);
}
console.log(`OK: ${files.length} markdown files, all relative links resolve.`);
