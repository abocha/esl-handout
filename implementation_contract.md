# A2+ Guided Practice Handout
## Implementation Contract v0.1

This document goes alongside `design.md`. The design document defines intent and pedagogy. This document defines the technical shape Codex should implement.

## 1. Product boundary

Build one offline-first interactive handout, not a platform.

The student-facing output must be a single self-contained `.html` file that can be opened in a normal browser without installation, login, network access, or hosting.

The source project may use normal modern tooling. The final artifact must not require a dev server.

## 2. Recommended stack

Use:

```txt
Vite + TypeScript + Preact + Vitest
```

Recommended package choices:

```txt
vite
@vitejs/plugin-react or @preact/preset-vite
preact
typescript
vitest
vite-plugin-singlefile or a custom post-build inliner
```

Preferred: Preact for smaller output. React is acceptable if implementation friction is lower.

Do not use:

- Next.js;
- backend/server code;
- auth;
- database;
- cloud storage;
- LMS integrations;
- runtime network dependencies.

## 3. Non-negotiable output requirement

Running the build command should produce:

```txt
dist/a2-english-maintenance-map.html
```

The file must work when opened directly from disk with `file:///...`.

No separate JS, CSS, image, JSON, font, or asset files should be required for the student.

## 4. Project structure

Recommended scaffold:

```txt
a2-guided-practice-handout/
  package.json
  index.html
  vite.config.ts
  tsconfig.json
  README.md

  scripts/
    rename-output.mjs
    validate-content.mjs              # optional if validation is not fully in tests

  src/
    main.tsx
    App.tsx

    content/
      content-pack-core-review-v0.1.ts
      contentTypes.ts

    engine/
      normalizeAnswer.ts
      checkAnswer.ts
      scoreDiagnostic.ts
      summarizeResults.ts
      validateContent.ts

    components/
      Layout.tsx
      StartPage.tsx
      SectionNav.tsx
      DiagnosticView.tsx
      ClusterView.tsx
      TaskCard.tsx
      TheoryDrawer.tsx
      TheoryCard.tsx
      ResultSummary.tsx
      ProgressPill.tsx

    styles/
      base.css
      layout.css
      components.css

  test/
    normalizeAnswer.test.ts
    checkAnswer.test.ts
    scoreDiagnostic.test.ts
    validateContent.test.ts
```

## 5. Source-of-truth content model

The content pack should be imported from:

```txt
src/content/content-pack-core-review-v0.1.ts
```

The UI must render from the content data. Avoid hardcoding specific exercises inside components.

Codex should copy or adapt the provided `content-pack-core-review-v0.1.ts` into the project and define matching TypeScript types in `contentTypes.ts`.

## 6. Required task kinds for v0.1

Implement only these task kinds first:

| Kind | Purpose | Auto-check? |
|---|---|---:|
| `choice` | choose one correct option | yes |
| `gap` | type one missing word or short phrase | yes |
| `fix` | rewrite a sentence correctly | yes, via accepted answers |
| `rebuild` | reorder chunks into a sentence | yes, via normalized answer |
| `personal` | write a personal sentence or answer | no |

Do not implement matching, sorting, drag-and-drop, audio, or complex multi-answer tasks in v0.1 unless everything else is already solid.

## 7. Answer checking requirements

Answer checking should be practical, not academic-perfect.

Normalize auto-checked answers by default:

- lowercase;
- trim leading/trailing spaces;
- collapse repeated spaces;
- normalize curly apostrophes to straight apostrophes;
- remove final punctuation for short answers;
- optionally accept equivalent contractions if they are listed in `acceptedAnswers`.

Do not over-normalize word order. If word order matters, require accepted answers.

For `choice`, compare option IDs.

For `gap`, compare normalized input to normalized accepted answers.

For `fix`, compare normalized full sentence to accepted answers.

For `rebuild`, compare normalized joined text to accepted answers.

For `personal`, show a gentle note such as:

```txt
This one is for real use. Write your answer, then discuss it with your teacher if you want.
```

## 8. Feedback model

Each auto-checked task should show:

- correct/incorrect state;
- the correct answer or accepted answer;
- a short explanation from content;
- links/buttons for relevant theory cards when available.

Do not show only `Correct` or `Incorrect`.

## 9. Navigation and layout

Required top-level areas:

1. Start
2. Mixed Check
3. Guided Practice
4. Theory Cards
5. Result Summary

The handout should be usable in several sittings. It does not need account-based persistence.

Optional local storage is allowed, but the file must remain useful if local storage fails or is unavailable.

## 10. Result summary

Implement a copyable result summary.

The summary should include:

- sections attempted;
- rough strengths;
- suggested review areas based on weak skill tags;
- a short plain-English list the student can send to the teacher.

Example:

```txt
Today I practised: sentence structure, past forms, articles, prepositions.
I should review: go home, a/an with jobs, Present Perfect with yesterday/last week.
```

## 11. Validation requirements

Add content validation tests or a validation script.

Check that:

- every task has a unique ID;
- every theory card has a unique ID;
- every referenced theory card exists;
- every auto-checkable task has at least one accepted answer or correct option;
- every choice task has exactly one correct option;
- every cluster referenced by diagnostic suggestions exists;
- no task has an empty prompt;
- no feedback/explanation is empty for auto-checked tasks.

## 12. Build scripts

Suggested `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && node scripts/rename-output.mjs",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "validate:content": "vitest run test/validateContent.test.ts"
  }
}
```

## 13. Visual design direction

Build a calm, card-based interactive document.

Preferred UI qualities:

- readable on desktop and acceptable on mobile;
- obvious start path;
- collapsible theory cards;
- visible progress within the current section;
- no childish gamification;
- no exam timer;
- no account/login language;
- no external fonts unless inlined or system fonts are used.

Use system fonts.

## 14. Implementation order for Codex

Recommended order:

1. Create Vite + TypeScript + Preact scaffold.
2. Add content types.
3. Import content pack.
4. Build answer-checking engine.
5. Add tests for normalization/checking/content validation.
6. Render Start page.
7. Render Mixed Check.
8. Render Guided Practice clusters.
9. Render Theory Drawer.
10. Render Result Summary.
11. Configure single-file build output.
12. Run tests and build.
13. Fix any build/runtime issues.

## 15. Definition of done for v0.1

v0.1 is done when:

- `npm install` works on Node 24;
- `npm run test` passes;
- `npm run build` produces one `.html` file;
- the output opens directly from disk;
- the student can answer tasks and see feedback;
- theory cards open from tasks;
- the result summary can be copied;
- content is imported from a structured source file, not hardcoded into components.
