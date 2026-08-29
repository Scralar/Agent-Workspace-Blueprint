# Extra — web design and visual products

Up: [README.md](README.md). Use when the product has a user-facing UI.

## Conventions

- **Design system wins.** Existing tokens, components, and spacing scales beat generated flair. Put tokens in one home (a `tokens`/theme file) and link it from the where-things-live map.
- **Gates before done:** light and dark mode both checked; `prefers-reduced-motion` respected wherever there is motion; responsive at a phone width and a desktop width. Fold these into the Verify habit for UI slices.
- **Look at the pixels.** Verify UI changes with a browser screenshot (IDE browser first), not by reasoning about CSS. Keep ephemeral screenshots out of git (`.screenshots/` gitignored); commit deliberate visual baselines only if the project chooses them.
- **Rules placement:** design conventions go in a glob rule (`**/*.css`, `**/*.tsx`), not the always-on constitution, when the repo is mixed. A dev-only sandbox page for visual experiments is worth more than screenshots in chat.
- **Skills worth invoking** when installed: `frontend-design` (distinctive UI, design system still wins), Vercel web-interface-guidelines checks, design-inspiration (adapt patterns; do not import foreign runtimes wholesale).

## Do not

Ship UI changes verified only by reading code · mix two spacing or colour systems · add motion without the reduced-motion path · let a component library update restyle the product unreviewed.
