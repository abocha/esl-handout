# A2+ Guided Practice Handout
## Content Import Contract v0.1

This document tells Codex how to treat content supplied by ChatGPT.

The goal is to let ChatGPT produce contained content packets and let Codex integrate them into the app without inventing pedagogy or rewriting everything.

## 1. Content source file

The first prototype content is supplied as:

```txt
content-pack-core-review-v0.1.ts
```

Codex should place it at:

```txt
src/content/content-pack-core-review-v0.1.ts
```

It should export:

```ts
export const handoutPack = { ... } as const;
```

Codex may adjust imports/types if needed, but should not rewrite exercise content unless there is a technical bug.

## 2. Content pack shape

Expected top-level shape:

```ts
{
  meta: HandoutMeta;
  startPage: StartPageContent;
  diagnostic: DiagnosticSection[];
  clusters: Cluster[];
  theoryCards: TheoryCard[];
  finalOutput: PersonalPrompt[];
}
```

## 3. Task shape

Suggested discriminated union:

```ts
type TaskKind = "choice" | "gap" | "fix" | "rebuild" | "personal";

type BaseTask = {
  id: string;
  kind: TaskKind;
  skillTags: string[];
  prompt: string;
  explanation?: string;
  theoryCardIds?: string[];
};

type ChoiceTask = BaseTask & {
  kind: "choice";
  options: { id: string; text: string }[];
  correctOptionId: string;
};

type GapTask = BaseTask & {
  kind: "gap";
  acceptedAnswers: string[];
};

type FixTask = BaseTask & {
  kind: "fix";
  acceptedAnswers: string[];
};

type RebuildTask = BaseTask & {
  kind: "rebuild";
  chunks: string[];
  acceptedAnswers: string[];
};

type PersonalTask = BaseTask & {
  kind: "personal";
  guidance?: string;
};
```

## 4. Cluster shape

```ts
type Cluster = {
  id: string;
  title: string;
  shortTitle: string;
  purpose: string;
  focus: string[];
  typicalMistakes: string[];
  stages: {
    tryFirst: Task[];
    practise: Task[];
    fixCommonMistakes: Task[];
    useItPersonally: PersonalTask[];
  };
};
```

## 5. Theory card shape

```ts
type TheoryCard = {
  id: string;
  title: string;
  useWhen: string;
  pattern?: string;
  examples: string[];
  commonMistake?: string;
  miniCheck?: {
    prompt: string;
    answer: string;
  };
};
```

## 6. Skill tags

Use skill tags for scoring and recommendations. Tags do not need to be visible exactly as written.

Recommended stable tags:

```txt
word-order
questions
negatives
auxiliaries
subject-verb-agreement
present-simple
present-continuous
past-simple
future-basics
present-perfect
articles
plural-nouns
countability
quantifiers
prepositions
pronouns
linkers
collocations
modals
comparatives
relative-clauses
personal-output
```

## 7. Scoring and recommendations

Diagnostic tasks should carry skill tags. Result summary can group weak tags into recommended clusters.

Suggested mapping:

```txt
word-order, questions, negatives, auxiliaries -> sentence-engine
present-simple, present-continuous, past-simple, future-basics, present-perfect -> time-basics
articles, plural-nouns, countability, quantifiers -> nouns-articles
prepositions, pronouns, linkers, collocations -> small-words
```

For v0.1, exact scoring can be simple:

- track attempted auto-checkable tasks;
- count correct by skill tag;
- if a skill tag is below 70%, show it as a review suggestion;
- recommend clusters connected to weak tags.

## 8. Content editing rules

When ChatGPT supplies new content blocks later, Codex should:

1. place them in `src/content/`;
2. run validation;
3. avoid changing student-facing wording unless necessary;
4. report any validation failures clearly;
5. ask for revised content only if the issue is pedagogical or ambiguous.

## 9. What Codex should not do

Codex should not:

- turn the handout into an LMS;
- add accounts, persistence requirements, or backend code;
- replace the pedagogy with exam mode;
- bury content inside components;
- invent a different task model unless the current one cannot work;
- silently delete tasks to make validation pass.

## 10. Future expansion

After v0.1 works, add clusters 5-8 from the design document:

- Experience and recent events;
- Be / do / have;
- Modals and advice;
- Comparing and connecting ideas.

Do not add these before the first four clusters are usable and tested.
