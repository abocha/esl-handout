# Codex Kickoff Prompt

You are implementing an offline-first ESL interactive handout project.

Important source documents:

- `design.md`: product intent and pedagogy.
- `implementation_contract.md`: technical project structure and build requirements.
- `content_import_contract.md`: content schema and import rules.
- `content-pack-core-review-v0.1.ts`: initial content block supplied by ChatGPT.

Goal:

Build a Vite + TypeScript + Preact project that renders the supplied content as a portable interactive handout and builds to one self-contained HTML file.

Student-facing output:

```txt
dist/a2-english-maintenance-map.html
```

This file must open directly in a browser from disk with no server, login, internet, or extra assets.

Constraints:

- Use Node.js 24.
- Keep content data separate from UI components.
- Use the supplied content pack as the source of truth.
- Implement only these task kinds for v0.1: `choice`, `gap`, `fix`, `rebuild`, `personal`.
- Add useful feedback for checked tasks.
- Add a theory card drawer and links from tasks to relevant cards.
- Add a simple copyable result summary.
- Add tests for answer normalization, answer checking, diagnostic scoring, and content validation.
- Do not add backend, database, auth, LMS features, exam mode, teacher dashboard, or hosting requirements.

Suggested implementation order:

1. Scaffold Vite + TypeScript + Preact.
2. Add content types matching the content import contract.
3. Import `content-pack-core-review-v0.1.ts`.
4. Implement answer normalization and checking.
5. Implement content validation.
6. Write tests.
7. Render Start, Mixed Check, Guided Practice, Theory Cards, and Result Summary.
8. Configure single-file output.
9. Run `npm install`, `npm run test`, and `npm run build`.
10. Fix failures.
11. Report what was built, how to run it, and any limitations.

Definition of done:

- `npm install` succeeds.
- `npm run test` passes.
- `npm run build` succeeds.
- `dist/a2-english-maintenance-map.html` exists.
- The HTML file works when opened directly from disk.
- Exercises are interactive.
- Theory cards are reachable.
- Result summary can be copied.
