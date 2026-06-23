# A2 English Maintenance Map v0.1 Design

## Purpose and boundary

Build one portable, offline-first A2+ English practice handout. It helps a student practise familiar foundations, notice weak areas, open small theory repair cards when needed, and copy a concise result summary to share with a teacher.

The product is not an LMS, assessment platform, hosted app, teacher dashboard, exam mode, or account-based service. It has no backend, authentication, analytics, cloud storage, routing, or runtime network dependencies.

The deliverable is `dist/a2-english-maintenance-map.html`: one self-contained HTML file that opens through `file:///` without extra assets.

## Architecture

Use Vite, TypeScript, Preact, Vitest, and `vite-plugin-singlefile`.

Keep the supplied content pack at `src/content/content-pack-core-review-v0.1.ts` as the source of truth. Do not rewrite pedagogy or exercise wording; only make mechanical TypeScript or import corrections when unavoidable. A matching typed schema lives alongside it.

Separate pure engine modules from presentation:

- `normalizeAnswer`: lowercases, trims, collapses whitespace, normalizes curly apostrophes, and removes final punctuation.
- `checkAnswer`: checks `choice`, `gap`, `fix`, and `rebuild`; personal tasks are never auto-scored.
- `scoreDiagnostic`: aggregates attempted/correct auto-checked work by skill tag and maps weak tags to relevant clusters.
- `validateContent`: validates all supplied content references and required task fields.
- `progressStorage`: safely reads and writes only handout interaction state.

Presentation is a single Preact app with top-level section navigation: Start, Mixed Check, Guided Practice, Theory Cards, and Result Summary. It uses reusable task cards and a theory drawer rather than hardcoding individual exercises.

## Student interaction

Task cards render from the content pack. Auto-checkable tasks show correct/incorrect state, accepted or correct answer, the content-pack explanation, and buttons to open referenced theory cards. Personal tasks show their guidance and a calm note that they are for real use; they can be marked complete but are not auto-scored.

The guided-practice view keeps the pack's cluster stages visible and shows local progress. Theory cards are available from navigation and contextually from tasks.

The result summary works from any completed checked tasks, whether the student did the Mixed Check, Guided Practice, or both. It reports sections practised, strengths, and non-judgmental review prompts such as “You may want to review…”. It can be copied with a browser Clipboard API attempt and a safe text-selection fallback.

## Progress persistence and privacy

Persist only:

- checked/completed task IDs;
- correctness and checked-answer result data for auto-checked tasks;
- cluster progress;
- summary-related interaction state.

Never persist unfinished typed answers. Never save personal free-response text. Personal tasks can be marked complete only.

Use the namespaced key `a2-maintenance-map:v0.1:progress`. Every storage read/write is guarded; if localStorage is unavailable or throws, the app continues with in-memory state for the active tab. The UI includes a clearly visible “Reset this handout” control, a confirmation step, and this nearby note: “Progress is saved only in this browser on this device.”

## Testing and validation

Write tests before production engine code. Cover answer normalization, each automatic task-checking path, diagnostic scoring/recommendation mapping, and every required content validation rule:

- unique task IDs and theory-card IDs;
- theory-card references resolve;
- auto-checkable tasks contain an answer definition;
- choice tasks have exactly one matching correct option;
- diagnostic suggestion cluster IDs exist;
- prompts and auto-checked explanations are non-empty.

Run `npm install`, `npm run test`, and `npm run build` under Node 24. The build must emit the named self-contained HTML file and no supporting delivery assets.
