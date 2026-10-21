// Tests for the check scripts. Run: node --test scripts/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { findDashes, checkPunctuation } from "./check-punctuation.mjs";
import { checkVersionSync } from "./check-version-sync.mjs";
import { findBanned, checkUserCopy } from "./check-user-copy.mjs";
import { checkBuildEnv } from "./check-build-env.mjs";
import { relativeLinks, checkLinks } from "./check-links.mjs";
import { findUsSpellings } from "./check-en-gb.mjs";

const EM = "\u2014";
const EN = "\u2013";

function tmp(files) {
  const dir = mkdtempSync(join(tmpdir(), "kit-"));
  for (const [name, body] of Object.entries(files)) {
    mkdirSync(join(dir, name, ".."), { recursive: true });
    writeFileSync(join(dir, name), body);
  }
  return dir;
}

test("punctuation: finds em and en dashes with positions", () => {
  assert.deepEqual(findDashes(`a ${EM} b\nok\n5${EN}10`), [
    { line: 1, column: 3, char: "em dash" },
    { line: 3, column: 2, char: "en dash" },
  ]);
  assert.deepEqual(findDashes("hyphen-ated and --- rules"), []);
});

test("punctuation: scans files in a tree", () => {
  const dir = tmp({ "a.md": `x ${EM} y`, "b.yml": "fine: true", "c.png": EM });
  const { errors } = checkPunctuation(dir);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /^a\.md:1:3: em dash/);
});

test("version sync: reports drift, then --write fixes it", () => {
  const dir = tmp({
    "package.json": JSON.stringify({ version: "1.2.0" }, null, 2) + "\n",
    "app/conf.json": JSON.stringify({ app: { version: "1.1.0" } }, null, 2) + "\n",
    "Cargo.toml": '[package]\nname = "x"\nversion = "1.1.0"\n',
  });
  const config = {
    source: { file: "package.json", key: "version" },
    targets: [
      { file: "app/conf.json", key: "app.version" },
      { file: "Cargo.toml", pattern: '^version = "([^"]+)"' },
    ],
  };
  assert.equal(checkVersionSync(dir, config).errors.length, 2);
  checkVersionSync(dir, config, { write: true });
  assert.deepEqual(checkVersionSync(dir, config).errors, []);
  assert.match(readFileSync(join(dir, "Cargo.toml"), "utf8"), /version = "1\.2\.0"/);
});

test("user copy: whole words, case-insensitive, allow marker", () => {
  const banned = ["OpenAI", "database"];
  assert.deepEqual(findBanned("Saved to the Database.\nOpenAI said no", banned), [
    { line: 1, word: "Database" },
    { line: 2, word: "OpenAI" },
  ]);
  assert.deepEqual(findBanned("databases are fine as a plural? no: databaseX", banned), []);
  assert.deepEqual(findBanned("database // copy-check: allow", banned), []);
});

test("user copy: only scans configured paths", () => {
  const dir = tmp({ "src/ui/a.tsx": "The model failed", "src/server/b.ts": "model", "docs/guide.md": "ok" });
  const { errors } = checkUserCopy(dir, { paths: ["src/ui", "docs"], extensions: [".tsx", ".ts", ".md"], banned: ["model"] });
  assert.deepEqual(errors.map((e) => e.split(":")[0]), ["src/ui/a.tsx"]);
});

test("build env: forbidden set fails, required missing fails, values never returned", () => {
  const config = { required: ["CLIENT_ID"], allowed: ["API_URL"], forbidden: ["AI_KEY"] };
  const bad = checkBuildEnv(config, { AI_KEY: "sk-secret" });
  assert.equal(bad.errors.length, 2);
  assert.ok(!JSON.stringify(bad).includes("sk-secret"));
  const good = checkBuildEnv(config, { CLIENT_ID: "abc", API_URL: "https://x" });
  assert.deepEqual(good, { errors: [], bakeable: ["CLIENT_ID", "API_URL"] });
});

test("links: ignores code, URLs and anchors; finds broken files", () => {
  assert.deepEqual(relativeLinks("[a](b.md) `[c](d.md)` [e](https://x) [f](#g)\n```\n[h](i.md)\n```"), ["b.md"]);
  const dir = tmp({ "a.md": "[ok](b.md) [bad](missing.md#x)", "b.md": "" });
  assert.deepEqual(checkLinks(dir).errors, ["a.md: broken link missing.md#x"]);
});

test("en-GB: flags US spellings in prose only", () => {
  const hits = findUsSpellings("We optimize behavior.\n`color: gray`\n```\nauthorize\n```\nfine");
  assert.deepEqual(hits.map((h) => h.word), ["optimize", "behavior"]);
});
