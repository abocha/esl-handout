# Contextual Repair and Diagnostic Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep repair theory beside the task that needs it and make the Mixed Check resumable by diagnostic section.

**Architecture:** `App` owns the selected diagnostic section and passes theory-card data to `TaskCard`. `TaskCard` owns each inline card's expanded state, so opening repair help never changes the top-level area. The Reference screen remains a separate browseable index with a default card selected.

**Tech Stack:** Preact, TypeScript, Vitest, Vite

## Global Constraints

- Preserve every supplied exercise, answer, score, and local progress key.
- Keep the generated artifact offline and self-contained.
- Do not add routes, network calls, analytics, LMS features, or backend code.

---

### Task 1: Add contextual theory and choice semantics

**Files:**
- Modify: `src/components/TaskCard.tsx`
- Create: `src/components/TheoryCardContent.tsx`
- Test: `test/TaskCard.test.tsx`

- [ ] Write failing tests that render a choice task inside `fieldset`/`legend`, expose the linked card title as the button name, and reveal the repair card without navigation.
- [ ] Implement a reusable presentational theory-card body and local expanded-card state in `TaskCard`.
- [ ] Run `npm test -- test/TaskCard.test.tsx` and confirm the tests pass.

### Task 2: Add a sectioned diagnostic overview

**Files:**
- Create: `src/components/DiagnosticOverview.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/app.css`
- Test: `test/App.test.tsx`

- [ ] Write failing tests for five diagnostic section cards, their `completed / total` labels, and Start/Continue selection.
- [ ] Render the overview when no diagnostic section is selected; render only the selected section with a back control otherwise.
- [ ] Run `npm test -- test/App.test.tsx` and confirm the tests pass.

### Task 3: Make Reference intentional

**Files:**
- Modify: `src/components/SectionNav.tsx`
- Modify: `src/components/TheoryDrawer.tsx`
- Modify: `src/App.tsx`
- Test: `test/App.test.tsx`

- [ ] Default the Reference screen to the first repair card and rename its navigation label.
- [ ] Run the focused test files, then `npm test` and `npm run build`.

### Task 4: Anchor repair cards beside the active task on wide screens

**Files:**
- Modify: `src/styles/app.css`

- [ ] Keep the existing `.inline-theory-card` markup and move only its wide-screen presentation into the page margin with absolute positioning.
- [ ] Add a viewport fallback at `max-width: 1180px` that restores the inline card, so narrow screens never lose task context or overflow the page.
- [ ] Run `npm test`, `npm run build`, and inspect the wide and narrow layouts in the browser.
