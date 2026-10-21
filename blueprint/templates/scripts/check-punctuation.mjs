// Fail on em dashes (U+2014) and en dashes (U+2013) in any tracked text file.
// Use a comma, colon, parentheses or a full stop instead; write ranges as "5 to 10".
// Run from the repo root: node scripts/check-punctuation.mjs [root]
import { readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";
import { listFiles } from "./lib-files.mjs";

export const EXTENSIONS = [
  ".md", ".mdc", ".txt", ".mjs", ".cjs", ".js", ".jsx", ".ts", ".tsx", ".json",
  ".yml", ".yaml", ".toml", ".py", ".rs", ".go", ".css", ".html", ".sh", ".ps1",
];

const DASHES = /[\u2013\u2014]/g;

/** Returns [{ line, column, char }] for every em or en dash in text. */
export function findDashes(text) {
  const hits = [];
  text.split(/\r?\n/).forEach((line, i) => {
    for (const m of line.matchAll(DASHES)) {
      hits.push({ line: i + 1, column: m.index + 1, char: m[0] === "\u2014" ? "em dash" : "en dash" });
    }
  });
  return hits;
}

export function checkPunctuation(root) {
  const errors = [];
  const files = listFiles(root, EXTENSIONS);
  for (const file of files) {
    for (const hit of findDashes(readFileSync(join(root, file), "utf8"))) {
      errors.push(`${file}:${hit.line}:${hit.column}: ${hit.char}; use a comma, colon, parentheses or a full stop`);
    }
  }
  return { errors, count: files.length };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { errors, count } = checkPunctuation(resolve(process.argv[2] ?? "."));
  if (errors.length) {
    console.error(errors.join("\n"));
    console.error(`\n${errors.length} dash(es) found in ${count} files.`);
    process.exit(1);
  }
  console.log(`OK: no em or en dashes in ${count} files.`);
}
