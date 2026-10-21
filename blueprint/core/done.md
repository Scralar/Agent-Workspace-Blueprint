# Definition of done

Up: [../README.md](../README.md). A change is done when everything below is true **in the same change**, or the item says why it does not apply. A wrap-up skill or PR template should run this list ([../templates/github/PULL_REQUEST_TEMPLATE.md](../templates/github/PULL_REQUEST_TEMPLATE.md)).

| Item | Done when |
|------|-----------|
| Code | Smallest correct diff; formatters and linters pass |
| Tests | A test guards the new or fixed behaviour, in this commit. Name which tests ran, or why none (docs-only is a fine reason) |
| Verify | The project Verify command passed for the touched area; evidence shown |
| CHANGELOG | A line under today's `## YYYY-MM-DD` if the change is notable |
| Debug notes | `docs/debug.md` has symptom, cause and recovery for any new failure mode, error code or support step, or the wrap-up says none |
| Docs | The one home for each changed fact is updated; links still resolve |
| User-facing | User guide page and release notes updated if users will see the change ([../shipping/user-facing.md](../shipping/user-facing.md)) |
| ADR | Written if the decision bar was met ([../reference/adr.md](../reference/adr.md)), or one sentence on why not |
| Backlog | Deferred work recorded in `docs/TODO.md`; this turn's requested work is not parked there |
| Commit | Committed under the recorded policy; not pushed unless asked |

## Debug note shape

```markdown
### {What the user or developer sees}

Cause: {one or two sentences, with the file or component}.
Recovery: {numbered steps a user or support person can follow}.
Fixed in: {version or commit, if it is fixed}.
```

Why: a desktop product hit an installer error ("failed to kill the app") whose cause was a helper process left running. The recovery steps in the debug notes were what support needed before the fix shipped.

## Not done

"Tests later" for shipped behaviour. A green check with tests edited to pass. A fix described in chat but not in the debug notes. Docs that disagree with the code.
