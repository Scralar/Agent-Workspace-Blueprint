// Tests for the git guard hook. Run: node --test .cursor/hooks/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { decide } from "./git-guard.mjs";

const ctx = { currentBranch: "work", neverPush: ["preview"] };
const perm = (cmd, c = ctx) => decide(cmd, c).permission;

test("push asks; force and --no-verify are denied", () => {
  assert.equal(perm("git push origin work"), "ask");
  assert.equal(perm("git push --force origin work"), "deny");
  assert.equal(perm("git push -f"), "deny");
  assert.equal(perm("git push origin +work"), "deny");
  assert.equal(perm("git commit --no-verify -m x"), "deny");
});

test("never-push branches are denied, explicit or current", () => {
  assert.equal(perm("git push origin preview"), "deny");
  assert.equal(perm("git push origin preview:preview"), "deny");
  assert.equal(perm("git push", { currentBranch: "preview", neverPush: ["preview"] }), "deny");
  assert.equal(perm("git push -u origin work"), "ask");
});

test("PR, merge and release commands ask", () => {
  assert.equal(perm("gh pr create --fill"), "ask");
  assert.equal(perm("gh pr merge 12"), "ask");
  assert.equal(perm("gh release create v1.0.0"), "ask");
  assert.equal(perm("gh pr view 12"), "allow");
});

test("private .cursor files are never staged; tracked dirs are fine", () => {
  assert.equal(perm("git add .cursor/rules/project.mdc .cursor/plans/a.md"), "allow");
  assert.equal(perm("git add .cursor/user-preferences.md"), "deny");
  assert.equal(perm("git add .cursor/hooks/state/x.json"), "deny");
  assert.equal(perm('git commit -m "update rules and plans" .cursor/tmp/x'), "deny");
  assert.equal(perm('git commit -m "mention .cursor rules in a message"'), "allow");
});
