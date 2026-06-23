import { expect, test } from "vitest";
import { handoutPack } from "../src/content/content-pack-core-review-v0.1";
import { validateContent } from "../src/engine/validateContent";

test("accepts the supplied core review pack", () => {
  expect(validateContent(handoutPack)).toEqual([]);
});

test("reports duplicate task ids", () => {
  const duplicate = { ...handoutPack, finalOutput: [handoutPack.finalOutput[0]!, { ...handoutPack.finalOutput[0]! }] };
  expect(validateContent(duplicate)).toEqual(expect.arrayContaining([expect.stringContaining("Duplicate task id")]));
});

test("reports duplicate theory card ids", () => {
  const duplicate = { ...handoutPack, theoryCards: [handoutPack.theoryCards[0]!, { ...handoutPack.theoryCards[0]! }] };
  expect(validateContent(duplicate)).toEqual(expect.arrayContaining([expect.stringContaining("Duplicate theory card id")]));
});

test("reports missing theory references", () => {
  const firstSection = handoutPack.diagnostic[0]!;
  const firstTask = firstSection.tasks[0]!;
  const invalid = { ...handoutPack, diagnostic: [{ ...firstSection, tasks: [{ ...firstTask, theoryCardIds: ["missing-card"] }] }] };
  expect(validateContent(invalid)).toEqual(expect.arrayContaining([expect.stringContaining("missing theory card")]));
});

test("reports auto-checkable tasks without an answer definition", () => {
  const firstSection = handoutPack.diagnostic[0]!;
  const invalid = { ...handoutPack, diagnostic: [{ ...firstSection, tasks: [{ id: "no-answer", kind: "gap", skillTags: [], prompt: "Fill", explanation: "Reason" }] }] };
  expect(validateContent(invalid)).toEqual(expect.arrayContaining([expect.stringContaining("must have accepted answers")]));
});

test("reports a choice whose correct option is absent", () => {
  const firstSection = handoutPack.diagnostic[0]!;
  const invalid = { ...handoutPack, diagnostic: [{ ...firstSection, tasks: [{ id: "bad-choice", kind: "choice", skillTags: [], prompt: "Choose", explanation: "Reason", options: [{ id: "a", text: "One" }], correctOptionId: "b" }] }] };
  expect(validateContent(invalid)).toEqual(expect.arrayContaining([expect.stringContaining("must match exactly one option")]));
});

test("reports a diagnostic suggestion that references a missing cluster", () => {
  const firstSection = handoutPack.diagnostic[0]!;
  const invalid = { ...handoutPack, diagnostic: [{ ...firstSection, suggestedClusterIds: ["missing-cluster"] }] };
  expect(validateContent(invalid)).toEqual(expect.arrayContaining([expect.stringContaining("missing cluster")]));
});

test("reports empty prompts and auto-check explanations", () => {
  const firstSection = handoutPack.diagnostic[0]!;
  const invalid = { ...handoutPack, diagnostic: [{ ...firstSection, tasks: [{ id: "empty", kind: "gap", skillTags: [], prompt: "", explanation: "", acceptedAnswers: ["x"] }] }] };
  expect(validateContent(invalid)).toEqual(expect.arrayContaining([expect.stringContaining("empty prompt"), expect.stringContaining("empty explanation")]));
});
