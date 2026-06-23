# A2 English Maintenance Map v0.1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a portable Preact handout that renders the supplied A2+ content pack and produces `dist/a2-english-maintenance-map.html`.

**Architecture:** The supplied content pack is copied unchanged into `src/content/` and rendered through typed, reusable Preact components. Pure engine modules normalize answers, check tasks, score skill tags, validate content, and protect local-only progress persistence; UI state composes those modules without storing personal writing.

**Tech Stack:** Node.js 24, Vite, TypeScript, Preact, Vitest, `vite-plugin-singlefile`.

## Global Constraints

- Build with Node.js 24 and emit exactly `dist/a2-english-maintenance-map.html`.
- Deliver one self-contained offline HTML file with no network, server, routing, hosting, backend, auth, analytics, LMS, teacher dashboard, or exam mode.
- Keep `src/content/content-pack-core-review-v0.1.ts` as the source of truth; only mechanical TypeScript/import fixes are allowed.
- Implement only `choice`, `gap`, `fix`, `rebuild`, and `personal` task kinds.
- Persist only checked/completed task results, cluster progress, and summary state under `a2-maintenance-map:v0.1:progress`; never persist unfinished typed answers or personal free-response text.
- Guard all localStorage access and use in-memory state if it fails.
- Present review suggestions as “You may want to review…” rather than judgmental language.
- Use test-first cycles for every pure engine behavior, and run `npm run test` plus `npm run build` before declaring scaffolding complete.

---

## File structure

- `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`: Node 24 Vite/Preact/Vitest configuration and the single-file build pipeline.
- `scripts/rename-output.mjs`: renames Vite's one generated page to the required delivery filename and asserts it is the only delivery file.
- `src/content/contentTypes.ts`: all content-pack and task discriminated-union types.
- `src/content/content-pack-core-review-v0.1.ts`: unchanged supplied content data.
- `src/engine/*.ts`: pure normalization, checking, scoring, validation, summary, and persistence helpers.
- `src/components/*.tsx`: small presentational/UI-state components that render pack data and delegate engine work.
- `src/styles/app.css`: self-contained responsive system-font styles.
- `src/main.tsx`, `src/App.tsx`: mount point and top-level view/state composition.
- `test/*.test.ts`: Vitest coverage for every engine contract and content validation.
- `README.md`: local development, tests, build, and direct-file-use instructions.

### Task 1: Scaffold the toolchain and single-file build

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `scripts/rename-output.mjs`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles/app.css`
- Create: `README.md`

**Interfaces:**
- Produces the `dev`, `test`, `validate:content`, and `build` commands consumed by all later tasks.
- `src/main.tsx` imports `App` and `./styles/app.css`.

- [ ] **Step 1: Create the minimal application entry and build test expectation**

Create `src/App.tsx` with:

```tsx
export function App() {
  return <main>A2+ English Maintenance Map</main>;
}
```

Create `src/main.tsx` with:

```tsx
import { render } from "preact";
import { App } from "./App";
import "./styles/app.css";

render(<App />, document.getElementById("app")!);
```

- [ ] **Step 2: Add package and Vite configuration**

Use `preact`, `vite`, `@preact/preset-vite`, `vite-plugin-singlefile`, `typescript`, `vitest`, and `jsdom`. Set scripts exactly as follows:

```json
{
  "dev": "vite",
  "test": "vitest run",
  "test:watch": "vitest",
  "validate:content": "vitest run test/validateContent.test.ts",
  "build": "vite build && node scripts/rename-output.mjs"
}
```

Set `build.cssCodeSplit` to `false`, configure `viteSingleFile()`, and set Vitest to `environment: "node"` with `include: ["test/**/*.test.ts"]`.

- [ ] **Step 3: Add output renamer**

Implement `scripts/rename-output.mjs` to inspect `dist`, require exactly one delivery file total and require that file to be HTML, then rename it to `a2-english-maintenance-map.html` unless already named. Throw a descriptive error for zero files, multiple files, or a non-HTML file.

- [ ] **Step 4: Install and verify the baseline build**

Run: `npm install`

Run: `npm run build`

Expected: exit code 0 and exactly `dist/a2-english-maintenance-map.html` exists.

- [ ] **Step 5: Commit the scaffold**

```bash
git add package.json package-lock.json tsconfig.json vite.config.ts index.html scripts src README.md
git commit -m "chore: scaffold portable Preact handout"
```

### Task 2: Add content types and import the supplied source pack

**Files:**
- Create: `src/content/contentTypes.ts`
- Create: `src/content/content-pack-core-review-v0.1.ts`

**Interfaces:**
- Produces `HandoutPack`, `Task`, `AutoCheckableTask`, `PersonalTask`, `Cluster`, and `TheoryCard` consumed by engine and UI modules.
- The pack exports `handoutPack satisfies HandoutPack` while preserving supplied content values.

- [ ] **Step 1: Define the pack shape**

Define a discriminated union whose task fields match the import contract:

```ts
export type TaskKind = "choice" | "gap" | "fix" | "rebuild" | "personal";
export type BaseTask = { id: string; kind: TaskKind; skillTags: readonly string[]; prompt: string; explanation?: string; theoryCardIds?: readonly string[] };
export type ChoiceTask = BaseTask & { kind: "choice"; options: readonly { id: string; text: string }[]; correctOptionId: string };
export type TextTask = BaseTask & { kind: "gap" | "fix" | "rebuild"; acceptedAnswers: readonly string[]; chunks?: readonly string[] };
export type PersonalTask = BaseTask & { kind: "personal"; guidance?: string };
export type Task = ChoiceTask | TextTask | PersonalTask;
```

Add the cluster, theory-card, diagnostic-section, start-page, metadata, and top-level `HandoutPack` definitions from the content contract.

- [ ] **Step 2: Copy the supplied pack mechanically**

Copy `content-pack-core-review-v0.1.ts` to `src/content/content-pack-core-review-v0.1.ts`. Add only the type import and a `satisfies HandoutPack` assertion if TypeScript needs it; do not alter task text, accepted answers, explanations, tags, cards, or structure.

- [ ] **Step 3: Verify type checking via build**

Run: `npm run build`

Expected: exit code 0; no content wording changes appear in `git diff -- src/content/content-pack-core-review-v0.1.ts` apart from the mechanical type/import adjustment.

- [ ] **Step 4: Commit typed content import**

```bash
git add src/content
git commit -m "feat: add typed core review content pack"
```

### Task 3: Implement answer normalization test-first

**Files:**
- Create: `test/normalizeAnswer.test.ts`
- Create: `src/engine/normalizeAnswer.ts`

**Interfaces:**
- Produces `normalizeAnswer(value: string): string` for answer checking and rebuild joining.

- [ ] **Step 1: Write the failing normalization tests**

```ts
import { describe, expect, test } from "vitest";
import { normalizeAnswer } from "../src/engine/normalizeAnswer";

describe("normalizeAnswer", () => {
  test("normalizes case, outer whitespace, repeated spaces, curly apostrophes, and final punctuation", () => {
    expect(normalizeAnswer("  She’s   ready!  ")).toBe("she's ready");
  });
  test("keeps meaningful internal punctuation", () => {
    expect(normalizeAnswer("I'm ready, but tired.")).toBe("i'm ready, but tired");
  });
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm run test -- test/normalizeAnswer.test.ts`

Expected: FAIL because `../src/engine/normalizeAnswer` does not exist.

- [ ] **Step 3: Implement the minimal pure normalizer**

```ts
export function normalizeAnswer(value: string): string {
  return value
    .replace(/[‘’]/g, "'")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/, "")
    .toLowerCase();
}
```

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: `npm run test -- test/normalizeAnswer.test.ts`

Expected: PASS with 2 tests.

- [ ] **Step 5: Commit the normalizer**

```bash
git add src/engine/normalizeAnswer.ts test/normalizeAnswer.test.ts
git commit -m "feat: normalize handout answers"
```

### Task 4: Implement task checking test-first

**Files:**
- Create: `test/checkAnswer.test.ts`
- Create: `src/engine/checkAnswer.ts`

**Interfaces:**
- Consumes `Task` and `normalizeAnswer`.
- Produces `CheckResult = { checked: boolean; correct: boolean; correctAnswer?: string }` and `checkAnswer(task, answer): CheckResult`.

- [ ] **Step 1: Write failing checking tests for every supported automatic kind**

```ts
test("checks choice by option id", () => expect(checkAnswer(choiceTask, "b")).toMatchObject({ checked: true, correct: true }));
test("checks a gap with normalized input", () => expect(checkAnswer(gapTask, "  FOR. ")).toMatchObject({ correct: true, correctAnswer: "for" }));
test("checks a corrected sentence against accepted answers", () => expect(checkAnswer(fixTask, "I listen to music every day.")).toMatchObject({ correct: true }));
test("checks rebuild text after chunks are joined", () => expect(checkAnswer(rebuildTask, "Where do you live?")).toMatchObject({ correct: true }));
test("does not score personal tasks", () => expect(checkAnswer(personalTask, "My writing")).toEqual({ checked: false, correct: false }));
```

Use compact literal task fixtures typed with `satisfies Task`; include one incorrect gap assertion returning the first accepted answer.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm run test -- test/checkAnswer.test.ts`

Expected: FAIL because `checkAnswer` does not exist.

- [ ] **Step 3: Implement minimal checking**

Compare choice answers directly with `correctOptionId`. For `gap`, `fix`, and `rebuild`, normalize the submitted text and each `acceptedAnswers` value. Return the first accepted answer as `correctAnswer` for any auto-checkable result. Return `{ checked: false, correct: false }` for `personal`.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: `npm run test -- test/checkAnswer.test.ts`

Expected: PASS with five named behaviors.

- [ ] **Step 5: Commit task checking**

```bash
git add src/engine/checkAnswer.ts test/checkAnswer.test.ts
git commit -m "feat: check supported handout tasks"
```

### Task 5: Implement diagnostic scoring and summary generation test-first

**Files:**
- Create: `test/scoreDiagnostic.test.ts`
- Create: `src/engine/scoreDiagnostic.ts`
- Create: `src/engine/summarizeResults.ts`

**Interfaces:**
- Consumes completed automatic-task results shaped as `{ task: Task; correct: boolean; section: "diagnostic" | "cluster" | "final" }`.
- Produces `scoreBySkill(results): Record<string, { attempted: number; correct: number }>` and `getReviewRecommendations(pack, results): ReviewRecommendation[]`.
- Produces `createResultSummary(pack, results, completedPersonalTaskIds): string`.

- [ ] **Step 1: Write the failing scoring tests**

```ts
test("counts correctness for every skill tag on an attempted automatic task", () => {
  expect(scoreBySkill(results).articles).toEqual({ attempted: 2, correct: 1 });
});
test("recommends an existing cluster for a skill below seventy percent", () => {
  expect(getReviewRecommendations(pack, results)).toContainEqual(expect.objectContaining({ clusterId: "nouns-articles", skillTag: "articles" }));
});
test("does not recommend a skill at or above seventy percent", () => {
  expect(getReviewRecommendations(pack, strongResults)).toEqual([]);
});
test("makes a useful summary from guided work without diagnostic work", () => {
  expect(createResultSummary(pack, clusterOnlyResults, [])).toContain("Today I practised");
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm run test -- test/scoreDiagnostic.test.ts`

Expected: FAIL because scoring and summary modules do not exist.

- [ ] **Step 3: Implement scoring and non-judgmental summary copy**

Use the content-contract mapping: sentence-engine for word-order/questions/negatives/auxiliaries; time-basics for present/past/future/perfect tags; nouns-articles for article/countability tags; small-words for prepositions/pronouns/linkers/collocations. Include only attempted auto-checked tasks. For each skill below 70%, create a recommendation whose UI text begins `You may want to review`. Summary text must derive practised sections from supplied results so cluster-only use remains meaningful.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: `npm run test -- test/scoreDiagnostic.test.ts`

Expected: PASS with four named behaviors.

- [ ] **Step 5: Commit scoring and summary logic**

```bash
git add src/engine/scoreDiagnostic.ts src/engine/summarizeResults.ts test/scoreDiagnostic.test.ts
git commit -m "feat: score practice and summarize review areas"
```

### Task 6: Implement content validation test-first

**Files:**
- Create: `test/validateContent.test.ts`
- Create: `src/engine/validateContent.ts`

**Interfaces:**
- Consumes `HandoutPack`.
- Produces `validateContent(pack): string[]`, where an empty list means valid.

- [ ] **Step 1: Write failing content-contract tests**

Test the supplied pack returns no errors, then use minimal cloned fixtures to assert errors for duplicate task IDs, duplicate theory-card IDs, missing theory reference, missing accepted answer, a choice whose `correctOptionId` is not an option, a missing diagnostic suggestion cluster, an empty prompt, and an empty auto-check explanation.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm run test -- test/validateContent.test.ts`

Expected: FAIL because `validateContent` does not exist.

- [ ] **Step 3: Implement validation without changing pack content**

Flatten diagnostic tasks, all four cluster stages, and final output. Collect IDs in `Set`s; verify every `theoryCardIds` member against theory IDs; ensure auto-checkable tasks have the required answer definition; ensure choice IDs resolve to exactly one option; verify every diagnostic recommendation cluster ID against clusters; and add descriptive errors for blank prompts/explanations.

- [ ] **Step 4: Run focused validation and full content check**

Run: `npm run test -- test/validateContent.test.ts`

Run: `npm run validate:content`

Expected: both commands PASS; the supplied pack returns an empty error list.

- [ ] **Step 5: Commit content validation**

```bash
git add src/engine/validateContent.ts test/validateContent.test.ts
git commit -m "feat: validate handout content contracts"
```

### Task 7: Add safe local-only progress persistence test-first

**Files:**
- Create: `test/progressStorage.test.ts`
- Create: `src/engine/progressStorage.ts`

**Interfaces:**
- Produces `ProgressState = { checked: Record<string, { correct: boolean; answer: string }>; completedTaskIds: string[]; completedClusterIds: string[] }`.
- Produces `createProgressStore(storage?: Storage): { load(): ProgressState; save(state: ProgressState): void; reset(): void }`.

- [ ] **Step 1: Write failing storage tests**

Test that a supplied fake `Storage` round-trips checked state, reset removes only `a2-maintenance-map:v0.1:progress`, a throwing `getItem` returns empty in-memory state, and a throwing `setItem` does not throw or lose the current session state. Assert there is no field for personal text or unfinished task input in `ProgressState`.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm run test -- test/progressStorage.test.ts`

Expected: FAIL because `progressStorage` does not exist.

- [ ] **Step 3: Implement guarded storage**

Set `export const progressStorageKey = "a2-maintenance-map:v0.1:progress"`. Keep an internal in-memory `ProgressState`, copy it on load/save, and wrap every `getItem`, `setItem`, and `removeItem` call in `try/catch`. Treat malformed JSON as empty state. Never accept or serialize personal-response text or unfinished input.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: `npm run test -- test/progressStorage.test.ts`

Expected: PASS with all fallback behaviors verified.

- [ ] **Step 5: Commit local progress storage**

```bash
git add src/engine/progressStorage.ts test/progressStorage.test.ts
git commit -m "feat: save local handout progress safely"
```

### Task 8: Build data-driven handout components

**Files:**
- Create: `src/components/SectionNav.tsx`
- Create: `src/components/TaskCard.tsx`
- Create: `src/components/ClusterView.tsx`
- Create: `src/components/TheoryDrawer.tsx`
- Create: `src/components/ResultSummary.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/app.css`

**Interfaces:**
- `TaskCard` consumes a `Task`, saved check result, `onCheck`, `onCompletePersonal`, and `onOpenTheory`.
- `App` owns only active area, in-tab typed input, checked/completed state, drawer card ID, and `createProgressStore` integration.

- [ ] **Step 1: Render the start page and top-level navigation from pack data**

Define `type Area = "start" | "diagnostic" | "practice" | "theory" | "summary"`. Render Start, Mixed Check, Guided Practice, Theory Cards, and Result Summary as accessible buttons. Display `handoutPack.startPage` title/body and its calm instructions.

- [ ] **Step 2: Implement TaskCard for exactly five task kinds**

Render radio-style option buttons for `choice`, an input for `gap`/`fix`, ordered selectable chunks for `rebuild`, and a textarea for `personal`. Keep typed input only in component/app memory. On auto-check, call `checkAnswer`, persist only the result and completion, then render status, first accepted/correct answer, explanation, and theory-card buttons. For personal tasks, show the supplied guidance plus “This one is for real use. Write your answer, then discuss it with your teacher if you want.” and a Mark complete control.

- [ ] **Step 3: Implement Mixed Check and Guided Practice**

Render diagnostic mini-sections in source order. Render every cluster and its `tryFirst`, `practise`, `fixCommonMistakes`, and `useItPersonally` stages in source order. Calculate completed/total counts from persisted IDs without persisting text values.

- [ ] **Step 4: Implement theory drawer and reset controls**

Render cards from `handoutPack.theoryCards`; a task's theory button opens the specified card. Add a clearly visible `Reset this handout` button using `window.confirm`; on confirmation call `store.reset()` and replace app state with empty progress. Place this exact nearby note: `Progress is saved only in this browser on this device.`

- [ ] **Step 5: Implement results and copy fallback**

Feed saved checked results and completed personal task IDs into `createResultSummary`. Copy it using `navigator.clipboard.writeText` when available; otherwise select a temporary textarea and run `document.execCommand("copy")`. Render the text visibly even when copying is unavailable.

- [ ] **Step 6: Add calm responsive system-font styles**

Use CSS variables, system font stacks, clear focus states, visible feedback colors with text labels, comfortable card spacing, a sticky-but-mobile-safe section navigation, and widths that work from narrow mobile to desktop. Do not import web fonts or external assets.

- [ ] **Step 7: Run unit tests and manual dev check**

Run: `npm run test`

Run: `npm run dev -- --host 127.0.0.1`

Expected: tests PASS; inspect Start, task checking, theory links, reset, summary, and a browser-storage-disabled fallback in a browser before stopping the dev server.

- [ ] **Step 8: Commit the interactive interface**

```bash
git add src/components src/App.tsx src/styles/app.css
git commit -m "feat: render offline interactive handout"
```

### Task 9: Verify delivery artifact and document use

**Files:**
- Modify: `README.md`

**Interfaces:**
- Documents exact Node 24 installation, test, build, and direct-file opening commands.

- [ ] **Step 1: Document the delivery workflow and limits**

Include: Node 24 requirement; `npm install`, `npm run test`, `npm run build`; the exact output file; direct opening from disk; local-only progress behavior; reset; no account/network requirement; and that personal writing is not saved between sessions.

- [ ] **Step 2: Run fresh complete verification**

Run: `npm install`

Run: `npm run test`

Run: `npm run build`

Run: `Get-ChildItem dist -File | Select-Object Name,Length`

Expected: dependency installation exits 0, all Vitest tests pass, build exits 0, and `dist` contains one non-empty file named `a2-english-maintenance-map.html`.

- [ ] **Step 3: Inspect the artifact for self-containment**

Run: `Select-String -Path dist/a2-english-maintenance-map.html -Pattern '<script[^>]+src=|<link[^>]+href='`

Expected: no external script or stylesheet references. Open the file directly in a browser and confirm the visible initial page renders without a web server.

- [ ] **Step 4: Commit documentation and final verification state**

```bash
git add README.md
git commit -m "docs: explain offline handout delivery"
```

## Plan self-review

- Spec coverage: Tasks 1 and 9 cover Node 24, single-file build, and direct-file delivery; Tasks 2 and 6 preserve and validate source content; Tasks 3–5 cover pure tested engine logic; Task 7 covers namespaced safe local-only persistence and privacy; Task 8 covers the five required areas, feedback, theory links, reset, and copyable cluster-only summary.
- Placeholder scan: the plan contains no unresolved placeholder language or unspecified test steps.
- Type consistency: all UI components consume `Task`, `CheckResult`, `ProgressState`, and pack types defined in Tasks 2, 4, and 7; scoring takes saved automatic results and never personal text.
