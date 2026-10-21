# User-facing wording, errors, guide and tour

Up: [../README.md](../README.md). Use when the project has end users. Judge every message by what the user sees, not by the code path that produced it.

## Wording

- Sentence case, the product locale, short sentences.
- Name the screen and button exactly as the UI shows them, in bold.
- **Never name vendors or internals**: AI providers, model names, databases, frameworks, routes, file paths, ADRs. Say "the AI service", "your data", "the app".
- Empty states name the next step. Disabled buttons say why. Long work shows its phase in plain words.

## Errors

Every user-facing error answers three things:

1. **What happened**, in the user's words ("We could not reach your email account").
2. **What to do** ("Check your connection, then try again").
3. **An action button** when one action fixes it (Try again, Open settings, Add credit).

Map internal error codes to a small set of user messages in one module, and test the mapping. Never show stack traces, HTTP codes or vendor error text as the message; put them behind a "Copy details" action for support.

## Banned-words test

Keep a list of words that must never appear in user-facing text (vendor names, `database`, `SQL`, `API`, `null`, `undefined`, `model`) and fail Verify when they do: [../templates/scripts/check-user-copy.mjs](../templates/scripts/check-user-copy.mjs). Point it at UI string files, the user guide and the release notes.

Why: progress banners in one app said "database" and "model" until a test failed on jargon; the guide pages are tested the same way.

## User guide

- Lives in the repo and ships with the product (a docs package or folder bundled into the app or site). Not a wiki tab.
- One page per screen or task. Numbered steps, real button names, screenshots with captions.
- Front matter (`title`, `summary`, `screen`, `tags`) so in-app search works.
- Updated in the same change as the behaviour it describes ([../core/done.md](../core/done.md)).
- Never explains the code. Engineering notes stay in `docs/`.

## First-run tour

- Steps are data (anchor id, view to open, text, optional action), with the step rules in a pure, unit-tested module.
- Opens on first start; can be skipped, paused and resumed; replay lives in Settings and the guide.
- A missing anchor shows a centred card instead of failing.
- Setup steps (sign in, add a key) let the user do the task and then resume the tour.
- No demo data that pollutes real state or costs money.
- Keyboard accessible, respects reduced motion.
