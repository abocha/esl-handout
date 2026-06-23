import { expect, test } from "vitest";
import { handoutPack } from "../src/content/content-pack-core-review-v0.1";
import type { Task } from "../src/content/contentTypes";
import { getReviewRecommendations, scoreBySkill, type ScoredTaskResult } from "../src/engine/scoreDiagnostic";
import { createResultSummary } from "../src/engine/summarizeResults";

const articleTask: Task = { id: "article", kind: "gap", skillTags: ["articles"], prompt: "Article", explanation: "Reason", acceptedAnswers: ["a"] };
const secondArticleTask: Task = { id: "article-two", kind: "choice", skillTags: ["articles"], prompt: "Article two", explanation: "Reason", options: [{ id: "a", text: "a" }], correctOptionId: "a" };
const strongArticleResults: readonly ScoredTaskResult[] = [
  { task: articleTask, correct: true, section: "cluster" },
  { task: secondArticleTask, correct: true, section: "cluster" }
];
const weakArticleResults: readonly ScoredTaskResult[] = [
  { task: articleTask, correct: true, section: "cluster" },
  { task: secondArticleTask, correct: false, section: "cluster" }
];

test("counts correctness for every skill tag on an attempted automatic task", () => {
  expect(scoreBySkill(weakArticleResults).articles).toEqual({ attempted: 2, correct: 1 });
});

test("recommends an existing cluster for a skill below seventy percent", () => {
  expect(getReviewRecommendations(handoutPack, weakArticleResults)).toContainEqual(expect.objectContaining({ clusterId: "nouns-articles", skillTag: "articles" }));
});

test("does not recommend a skill at or above seventy percent", () => {
  expect(getReviewRecommendations(handoutPack, strongArticleResults)).toEqual([]);
});

test("makes a useful summary from guided work without diagnostic work", () => {
  expect(createResultSummary(handoutPack, weakArticleResults, [])).toContain("Today I practised: Guided Practice");
});
