import { expect, test } from "vitest";
import { checkAnswer } from "../src/engine/checkAnswer";
import type { ChoiceTask, FixTask, GapTask, PersonalTask, RebuildTask } from "../src/content/contentTypes";

const choiceTask: ChoiceTask = { id: "choice", kind: "choice", skillTags: [], prompt: "Choose", explanation: "Reason", options: [{ id: "a", text: "No" }, { id: "b", text: "Yes" }], correctOptionId: "b" };
const gapTask: GapTask = { id: "gap", kind: "gap", skillTags: [], prompt: "Fill", explanation: "Reason", acceptedAnswers: ["for"] };
const fixTask: FixTask = { id: "fix", kind: "fix", skillTags: [], prompt: "Fix", explanation: "Reason", acceptedAnswers: ["I listen to music every day."] };
const rebuildTask: RebuildTask = { id: "rebuild", kind: "rebuild", skillTags: [], prompt: "Rebuild", explanation: "Reason", chunks: ["Where", "do", "you", "live"], acceptedAnswers: ["Where do you live?"] };
const personalTask: PersonalTask = { id: "personal", kind: "personal", skillTags: [], prompt: "Write" };

test("checks choice by option id", () => {
  expect(checkAnswer(choiceTask, "b")).toMatchObject({ checked: true, correct: true, correctAnswer: "Yes" });
});

test("checks a gap with normalized input", () => {
  expect(checkAnswer(gapTask, "  FOR. ")).toMatchObject({ checked: true, correct: true, correctAnswer: "for" });
});

test("checks a corrected sentence against accepted answers", () => {
  expect(checkAnswer(fixTask, "I listen to music every day.")).toMatchObject({ checked: true, correct: true });
});

test("checks rebuild text after chunks are joined", () => {
  expect(checkAnswer(rebuildTask, "Where do you live?")).toMatchObject({ checked: true, correct: true });
});

test("returns the accepted answer for an incorrect automatic answer", () => {
  expect(checkAnswer(gapTask, "at")).toEqual({ checked: true, correct: false, correctAnswer: "for" });
});

test("does not score personal tasks", () => {
  expect(checkAnswer(personalTask, "My writing")).toEqual({ checked: false, correct: false });
});
