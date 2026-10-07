# ESL Handout: A2+ English Maintenance Map

A portable, offline-first interactive English handout that builds to **one self-contained HTML file**.

**Live demo:** https://abocha.github.io/esl-handout/

The project is deliberately not an LMS or hosted learning platform. The source uses modern frontend tooling, but the student-facing artifact can be sent as a file, opened directly in a browser, and used without an account, server, installation, or internet connection.

## The idea

The handout is designed for learners who can communicate but have unstable A2/A2+ foundations: familiar grammar often works in free speech until a basic pattern suddenly collapses.

Instead of presenting a miniature textbook, the handout uses a **practice-first, theory-on-demand** model:

1. try a task;
2. get practical feedback;
3. open a short theory card when needed;
4. practise the same language in a more controlled form;
5. finish with personal production.

The result doubles as a shared map of which foundations are stable, rusty, or worth revisiting in lessons.

## Why the implementation is unusual

The development project is a normal TypeScript/Preact application. The delivery format is not.

```text
typed content pack
      |
      v
practice / scoring engine
      |
      v
Preact components
      |
      v
Vite + single-file build
      |
      v
dist/a2-english-maintenance-map.html
```

The build artifact contains the UI, logic, styles, and content in one file. It can be opened via `file://` and does not depend on a runtime network connection.

That makes the monolithic HTML an **export format**, while the source remains modular and testable.

## Product constraints

The project intentionally avoids infrastructure that is unnecessary for a handout:

- no backend;
- no accounts or authentication;
- no database;
- no cloud storage;
- no LMS integration;
- no runtime API calls;
- no separate JS/CSS/data assets in the final student file.

This keeps distribution closer to sending a PDF, while preserving interactive checking and progress state.

## Exercise engine

The content is data-driven rather than hardcoded into individual components.

Supported task kinds include:

| Kind | Interaction | Auto-check |
| --- | --- | --- |
| `choice` | choose an option | yes |
| `gap` | type a missing word/phrase | yes |
| `fix` | rewrite a sentence | yes |
| `rebuild` | reconstruct a sentence | yes |
| `personal` | produce original language | no |

Auto-checked answers are normalized conservatively: casing, whitespace, apostrophes, and final punctuation can be normalized, while meaningful word order is preserved.

Tasks also carry skill tags so diagnostic performance can point the learner toward relevant practice clusters.

## Progress and privacy

Completion state is saved only in the current browser on the current device under a handout-versioned local key.

The design intentionally treats personal writing differently:

- unfinished free-response text is not persisted between sessions;
- personal prompts can be marked complete without pretending to auto-grade open language;
- the handout continues to work if browser storage is unavailable.

Use **Reset this handout** in the UI to clear saved progress.

## Stack

- TypeScript
- Preact
- Vite
- `vite-plugin-singlefile`
- Vitest
- jsdom
- GitHub Pages for the optional hosted demo

Development requires Node.js 24 or newer.

## Development

Install dependencies and run the checks:

```bash
npm install
npm run test
npm run build
```

Useful scripts:

```bash
npm run test
npm run test:watch
npm run validate:content
npm run build
```

The delivery artifact is:

```text
dist/a2-english-maintenance-map.html
```

Open that file directly in a browser. The `dist` folder should not require supporting JavaScript, CSS, image, or data files.

## Repository structure

```text
src/
  content/      # typed handout content
  engine/       # normalization, checking, scoring, validation
  components/   # student-facing UI
  styles/       # presentation
  App.tsx

test/            # engine and content validation tests
scripts/         # build/output helpers
docs/            # supporting project documentation
```

The UI renders from the content model rather than embedding exercises inside components, which keeps pedagogy/content changes separate from interaction logic.

## Design documents

This repository keeps the product and implementation reasoning in-repo:

- [design.md](design.md) describes the pedagogical model and product scope;
- [implementation_contract.md](implementation_contract.md) defines technical constraints and the single-file delivery contract;
- [content_import_contract.md](content_import_contract.md) defines the typed content model and how content packs enter the application.

## What this project demonstrates

Although the artifact is intentionally small in operational scope, the implementation exercises a few useful product-engineering constraints:

- choosing architecture around the delivery workflow rather than around infrastructure;
- keeping content as structured data instead of coupling it to UI code;
- separating answer normalization/checking from rendering;
- validating large content packs before build;
- preserving privacy by deciding explicitly what browser state should and should not persist;
- producing a zero-install artifact from a maintainable frontend codebase.
