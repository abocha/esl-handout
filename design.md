# A2+ Guided Practice Handout

## Design Document v0.1

## 1. Core idea

This project is a **portable interactive English handout** for reviewing and stabilizing A2+ foundations.

It is not an exam trainer, not a full grammar course, and not an online learning platform. Its purpose is to help a student **remember by doing**, notice weak spots, and reconnect familiar language patterns with simple explanations.

The target learner already communicates well and can often speak fluently, but does not retain much academic grammar knowledge. She may use English effectively in free speaking, then suddenly make very basic mistakes such as `go to home`, `she don’t`, or `I didn’t went`.

The handout should help calibrate her intuition. It should not try to replace lessons.

## 2. Main purpose

The handout should help the student:

1. Review the most important English foundations up to high A2 / A2+.
2. Notice where her intuition is reliable and where it is not.
3. Practise familiar topics through short interactive tasks.
4. Look at theory only when she needs a reminder.
5. Produce some of her own English after controlled practice.
6. Give the teacher useful direction for future lessons and focused homework.

The handout is a **shared map**: it shows both student and teacher which parts of the language system are stable, rusty, or missing.

## 3. What this is not

This handout is not:

| Not this               | Reason                                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| Exam preparation       | The student is not preparing for a real exam. PET/B1 format was only a convenient old wrapper.           |
| A full B1 course       | The goal is to stabilize foundations, not expand into every B1 topic.                                    |
| A grammar textbook     | Theory should support practice, not dominate it.                                                         |
| A diagnostic test only | The student should also practise and remember while doing it.                                            |
| A teacher dashboard    | No need for accounts, analytics, or long-term tracking.                                                  |
| A secure test          | Answers will exist inside the offline file. That is acceptable because this is practice, not assessment. |
| A hosted web app       | The artifact should work without hosting or maintenance.                                                 |

## 4. Technical format

The final student-facing artifact should be a **single self-contained HTML file**.

The student should be able to:

* receive it by Telegram, email, Google Drive, or similar;
* open it in a normal browser;
* use it without installing anything;
* use it without logging in;
* use it without internet access;
* send a simple result summary back to the teacher if needed.

The internal development format does not need to be one hand-written HTML file. Ideally:

| Layer            | Format                                   |
| ---------------- | ---------------------------------------- |
| Source content   | YAML / JSON / Markdown / TypeScript data |
| Logic and UI     | Clean reusable components                |
| Build output     | One portable `.html` file                |
| Student delivery | Single generated interactive handout     |

The monolith should be an **export format**, not the source of truth.

Optional static hosting may exist later as a convenience, but it is not required. The core workflow should not depend on hosting.

## 5. Pedagogical model

The handout is built around the idea of **intuition calibration**.

The student already has working communicative skill. The problem is that her internal “sounds right / sounds wrong” system is inconsistent. She often skips explicit understanding and rushes straight into real use. That is not a failure, but it leaves unstable grammar anchors.

The handout should therefore:

* start from doing, not theory;
* use familiar language;
* make the student compare similar sentences;
* include common fossilized mistakes;
* explain mistakes in small practical cards;
* avoid heavy metalanguage;
* mix recognition, correction, controlled production, and personal output.

The aim is not for the student to recite grammar rules word for word. The aim is for her to have a clearer general idea of how English works, so she does not rely only on unreliable “feel.”

## 6. Level and scope

Target level: **A2+ foundations**, with occasional B1-adjacent language only where it naturally supports communication.

Include:

| Area                     | Examples                                                |
| ------------------------ | ------------------------------------------------------- |
| Sentence engine          | word order, questions, negatives, auxiliaries           |
| Be / do / have           | main verbs vs helper verbs                              |
| Present forms            | Present Simple, Present Continuous                      |
| Past forms               | Past Simple, used to only if needed                     |
| Future basics            | going to, will, Present Continuous for arrangements     |
| Present Perfect basics   | experience, recent events, ever/never, already/yet/just |
| Nouns                    | singular/plural, countable/uncountable                  |
| Articles                 | a/an, the, zero article in common patterns              |
| Quantifiers              | some, any, much, many, a lot of, a few, a little        |
| Pronouns and determiners | me/my/mine, this/that/these/those                       |
| Prepositions             | time, place, movement, adjective/verb patterns          |
| Modals                   | can, should, must, have to, need to                     |
| Comparisons              | comparative/superlative, as...as                        |
| Linkers                  | and, but, because, so, when, if, although               |
| Basic relative clauses   | who, which, that, where                                 |
| Natural phrases          | everyday collocations and fixed expressions             |
| Error repair             | classic learner mistakes                                |

Avoid or minimize:

| Avoid                       | Reason                                          |
| --------------------------- | ----------------------------------------------- |
| Deep B1 grammar taxonomy    | Too much academic load                          |
| Heavy conditionals          | Not core to this reset                          |
| Passive voice depth         | Can be saved for later                          |
| Reported speech             | Not needed for A2+ foundation reset             |
| Advanced article exceptions | Too much detail                                 |
| Huge phrasal verb lists     | Low retention, high noise                       |
| Exam-style transformations  | Not relevant unless useful as a practice format |

## 7. Overall handout structure

The handout should be large enough to feel like a real review, but divided into manageable sections.

Recommended size:

| Element                     |        Target |
| --------------------------- | ------------: |
| Total interactive items     |       120–180 |
| Guided clusters             |             8 |
| Theory/reference cards      |         25–40 |
| Completion format           |  3–5 sittings |
| One sitting                 | 20–30 minutes |
| Final personal output tasks |          8–12 |

Recommended structure:

1. Start page
2. Mixed check
3. Guided practice clusters
4. Optional theory/reference drawer
5. Final personal output
6. Simple result summary

## 8. Start page

The start page should explain the purpose clearly and calmly.

Student-facing message:

> This handout helps you review English you already know.
> First, try the mixed check. Then practise the sections where you make mistakes.
> You do not need to finish everything in one day. Mistakes are useful here because they show what to review.

The tone should be practical, adult, and non-shaming.

## 9. Mixed check

The mixed check should be both diagnostic and practice.

It should contain around **40–60 short questions**, divided into mini-sections.

Suggested distribution:

| Mini-section                      | Items |
| --------------------------------- | ----: |
| Sentence structure and word order |     8 |
| Present / past / future           |    10 |
| Articles / plurals / countability |    10 |
| Prepositions / pronouns / linkers |    10 |
| Natural phrases / collocations    |     8 |
| Short personal production         |     4 |

The mixed check should reveal weak areas without feeling like an exam.

It may show a simple result:

| Area         | Result | Suggestion         |
| ------------ | -----: | ------------------ |
| Articles     |   5/10 | Practise Cluster 5 |
| Prepositions |   4/10 | Practise Cluster 6 |
| Past forms   |   8/10 | Optional review    |

The result should guide the student, not judge her.

## 10. Guided practice clusters

The handout should contain 8 main clusters.

### Cluster 1: Sentence engine

Focus:

* basic word order;
* questions;
* negatives;
* auxiliaries;
* subject + verb agreement.

Typical mistakes:

* `Why you are tired?`
* `She don’t like it.`
* `I no understand.`
* `Where you went?`

### Cluster 2: Be / do / have

Focus:

* `be` as a main verb;
* `do` as a helper;
* `have` as possession / experience helper;
* avoiding fake helper confusion.

Typical mistakes:

* `I don't tired.`
* `Are you like coffee?`
* `Do you are ready?`
* `I am have a dog.`

### Cluster 3: Time basics

Focus:

* Present Simple;
* Present Continuous;
* Past Simple;
* future basics: `going to`, `will`, present arrangement.

Typical mistakes:

* `Yesterday I go.`
* `She work every day.`
* `I am usually wake up late.`
* `Tomorrow I go to doctor.`

### Cluster 4: Experience and recent events

Focus:

* Present Perfect for life experience;
* Present Perfect for recent events;
* Past Simple for finished time;
* `ever`, `never`, `already`, `yet`, `just`.

Typical mistakes:

* `I have seen it yesterday.`
* `Did you ever been there?`
* `I never saw this movie.`
* `I have finished it last week.`

### Cluster 5: Nouns and articles

Focus:

* `a/an`;
* `the`;
* zero article;
* singular/plural;
* countable/uncountable nouns;
* jobs and roles.

Typical mistakes:

* `She is teacher.`
* `I bought new phone.`
* `I like the music.`
* `I need an advice.`
* `There are many information.`

### Cluster 6: Small words

Focus:

* prepositions of time/place/movement;
* common verb/adjective + preposition patterns;
* pronouns;
* determiners.

Typical mistakes:

* `go to home`;
* `listen music`;
* `good in English`;
* `depends from`;
* `married with`;
* `explain me this`.

### Cluster 7: Modals and advice

Focus:

* `can`;
* `should`;
* `must`;
* `have to`;
* `need to`;
* verb form after modals.

Typical mistakes:

* `She musts go.`
* `You should to try.`
* `I can to help.`
* `He have to work.`

### Cluster 8: Comparing and connecting ideas

Focus:

* comparatives;
* superlatives;
* `as...as`;
* basic linkers;
* simple relative clauses.

Typical mistakes:

* `more better`;
* `the most easiest`;
* `I stayed home because I was tired so`;
* `people which work here`;
* `This is the place who I live.`

## 11. Cluster rhythm

Each guided cluster should follow a predictable rhythm:

1. **Try first**
   4–6 short mixed items without reading theory first.

2. **Notice the pattern**
   A tiny explanation appears after the first attempt or on demand.

3. **Practise**
   8–12 tasks using varied formats.

4. **Fix common mistakes**
   3–5 correction items using realistic learner errors.

5. **Use it personally**
   1–3 short writing or speaking prompts.

6. **Open theory card if needed**
   The theory card is available but not forced.

This supports the student’s natural preference for use-first learning while still adding explicit structure.

## 12. Task types

The handout should mix task types.

Recommended formats:

| Task type                   | Purpose                                             |
| --------------------------- | --------------------------------------------------- |
| Choose the natural sentence | Builds contrast and intuition calibration           |
| Fill one missing word       | Trains articles, prepositions, auxiliaries, linkers |
| Choose the best option      | Good for quick pattern recognition                  |
| Fix the mistake             | Builds error awareness                              |
| Rebuild the sentence        | Trains word order and auxiliaries                   |
| Complete the sentence       | Controlled production                               |
| Match halves                | Collocations, phrases, grammar patterns             |
| Sort examples               | Helps notice categories                             |
| Short personal answer       | Moves from exercise to real language                |

Avoid using only multiple choice. It is too easy to guess and does not create enough retrieval.

Avoid using only open answers. It can become frustrating and hard to check reliably.

## 13. Theory/reference cards

Theory should be available as **small repair cards**, not long textbook chapters.

Each card should follow this structure:

| Section          | Purpose                               |
| ---------------- | ------------------------------------- |
| Name             | Clear practical label                 |
| Use this when... | Situation where the pattern is needed |
| Pattern          | Simple formula                        |
| Examples         | 2–4 natural examples                  |
| Common mistake   | One typical wrong version             |
| Mini-check       | One tiny task                         |

Example card:

### Jobs and roles: a/an

Use this when you say someone’s job or role.

Pattern:

`be + a/an + job`

Examples:

* She is a teacher.
* He is an engineer.
* I work as a designer.

Common mistake:

* She is teacher.

Mini-check:

* My brother is ___ artist.

Theory should be linked from relevant tasks and clusters. The student should not need to read all theory before practising.

## 14. Feedback model

Feedback should be short but useful.

Bad feedback:

> Incorrect.

Better feedback:

> Not quite. Use `go home`, not `go to home`. `Home` often works without `to`.

Feedback should usually include:

1. Whether the answer is correct.
2. The correct answer.
3. One practical reason.
4. One example if helpful.

The tone should be calm and adult.

## 15. Result summary

The handout does not need a teacher dashboard, but it should have a simple student-facing summary.

Possible summary:

```text
Today I practised:
✓ sentence structure
✓ past forms
✓ articles
✓ prepositions

I should review:
• go home / go to work / go to school
• a/an with jobs
• Present Perfect with yesterday / last week
```

A copy button would be useful, so the student can send the summary to the teacher.

This is not long-term tracking. It is just a bridge from handout practice back into lessons.

## 16. Content tone

The tone should be:

* adult;
* practical;
* supportive;
* clear;
* not childish;
* not exam-like;
* not shame-based;
* not overly academic.

Avoid:

* “You should already know this.”
* “Remember the rule!”
* long grammar lectures;
* cartoonish gamification;
* excessive praise after every answer.

Prefer:

* “Check the word after the gap.”
* “This is a common trap.”
* “Try the sentence aloud.”
* “This pattern is useful when you talk about work, plans, and everyday life.”

## 17. Design tone

The visual design should feel like a modern interactive document, not a school test.

Preferred qualities:

* clean;
* calm;
* segmented;
* readable;
* card-based;
* easy to navigate;
* no overwhelming wall of text;
* mobile-tolerant if possible;
* printable enough if needed.

The student should feel: “I can work through this.”

Not: “I have opened a tax form for auxiliary verbs.”

## 18. Success criteria

The handout is successful if:

1. The student can open it without help.
2. The student can understand what to do in the first minute.
3. The student can complete parts of it across several sittings.
4. The student gets useful reminders while doing tasks.
5. The student notices at least several weak areas.
6. The teacher can use those weak areas for future lessons.
7. The handout feels useful even without full completion.
8. The handout does not depend on hosting, accounts, or backend systems.

## 19. First prototype recommendation

Do not start by rebuilding the old PET file.

Start with one focused prototype:

### Prototype title

**A2+ English Maintenance Map: Core Review**

### Prototype contents

1. Start page
2. Mixed check: 40 questions
3. Four guided clusters:

   * Sentence engine
   * Time basics
   * Nouns and articles
   * Small words
4. Theory drawer: 15–20 repair cards
5. Final personal output: 6 prompts
6. Copyable result summary

After testing this with the student, expand to the full 8-cluster version.

## 20. Core principle

The handout should not ask:

> “Can the student explain the grammar rule?”

It should ask:

> “Can the student make better English decisions after seeing, trying, comparing, correcting, and checking the pattern?”

The goal is not perfect academic knowledge.

The goal is **more reliable intuition supported by simple conscious anchors**.
