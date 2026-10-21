// Fail when banned words (vendors, internals, jargon) appear in user-facing text.
// Config (default user-copy.json in the repo root):
// {
//   "paths": ["src/ui", "docs/user-guide", "docs/release-notes.md"],
//   "extensions": [".tsx", ".ts", ".md", ".json"],
//   "banned": ["OpenAI", "Anthropic", "database", "SQL", "undefined", "null"],
//   "ignore": ["src/ui/dev/"]
// }
// Matches whole words, case-insensitive. Lines containing "copy-check: allow" are skipped.
// Run: node scripts/check-user-copy.mjs [--config path]
import { readFileSync, statSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { pathToFileURL } from "node:url";
import { listFiles } from "./lib-files.mjs";

function escape(word) {
  return word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Returns [{ line, word }] for banned words in text. */
export function findBanned(text, banned) {
  if (!banned.length) return [];
  const re = new RegExp(`\\b(${banned.map(escape).join("|")})\\b`, "gi");
  const hits = [];
  text.split(/\r?\n/).forEach((line, i) => {
    if (line.includes("copy-check: allow")) return;
    for (const m of line.matchAll(re)) hits.push({ line: i + 1, word: m[0] });
  });
  return hits;
}

export function checkUserCopy(root, config) {
  const ignore = config.ignore ?? [];
  const inScope = (f) =>
    config.paths.some((p) => f === p || f.startsWith(p.endsWith("/") ? p : `${p}/`)) &&
    !ignore.some((p) => f.startsWith(p));
  const files = listFiles(root, config.extensions).filter(inScope);
  const errors = [];
  for (const file of files) {
    if (!statSync(join(root, file)).isFile()) continue;
    for (const hit of findBanned(readFileSync(join(root, file), "utf8"), config.banned)) {
      errors.push(`${file}:${hit.line}: "${hit.word}" is not for users; say what it means for them`);
    }
  }
  return { errors, count: files.length };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const configPath = resolve(args.includes("--config") ? args[args.indexOf("--config") + 1] : "user-copy.json");
  const config = JSON.parse(readFileSync(configPath, "utf8"));
  const { errors, count } = checkUserCopy(dirname(configPath), config);
  if (errors.length) {
    console.error(errors.join("\n"));
    console.error(`\n${errors.length} banned word(s) in ${count} user-facing files.`);
    process.exit(1);
  }
  console.log(`OK: ${count} user-facing files, no banned words.`);
}
