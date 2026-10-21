// Contract test: the release workflow keeps its guards. Copy next to your other script tests.
// Reads ../workflows/release.yml when run inside the kit, else .github/workflows/release.yml.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const kitCopy = fileURLToPath(new URL("./release.yml", import.meta.url));
const path = process.env.RELEASE_WORKFLOW ?? (existsSync(kitCopy) ? kitCopy : ".github/workflows/release.yml");
const yml = readFileSync(path, "utf8");

test("publishes only from main", () => {
  assert.match(yml, /push:\s*\n\s*branches: \[main\]/);
  assert.match(yml, /if: github\.ref != 'refs\/heads\/main'/);
});

test("a publish is never cancelled half way", () => {
  assert.match(yml, /cancel-in-progress: false/);
});

test("version gate: existing tag means nothing to publish", () => {
  assert.match(yml, /refs\/tags\/v\$\{version\}/);
  assert.match(yml, /needs\.gate\.outputs\.publish == 'true'/);
});

test("dry run uploads nothing and creates no release", () => {
  assert.match(yml, /dry_run:/);
  assert.match(yml, /if: env\.DRY_RUN != 'true'/);
  assert.match(yml, /needs\.gate\.outputs\.create_release == 'true'/);
});

test("deploy uses OIDC, no stored keys", () => {
  assert.match(yml, /id-token: write/);
  assert.match(yml, /role-to-assume:/);
  assert.doesNotMatch(yml, /aws-secret-access-key|AWS_SECRET_ACCESS_KEY/);
});

test("the workflow creates the tag and GitHub Release itself", () => {
  assert.match(yml, /gh release create "v\$\{VERSION\}"/);
  assert.doesNotMatch(yml, /^\s*tags:/m);
});
