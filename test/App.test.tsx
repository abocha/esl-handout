import { render } from "preact";
import { act } from "preact/test-utils";
import { afterEach, expect, test } from "vitest";
import { App } from "../src/App";
import { progressStorageKey } from "../src/engine/progressStorage";

afterEach(() => {
  document.body.replaceChildren();
  window.localStorage.clear();
});

test("shows the handout title", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);

  expect(root.textContent).toContain("A2+ English Maintenance Map");
});

test("shows all five student-facing areas", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);

  expect(root.textContent).toContain("Start");
  expect(root.textContent).toContain("Mixed Check");
  expect(root.textContent).toContain("Guided Practice");
  expect(root.textContent).toContain("Reference");
  expect(root.textContent).toContain("Result Summary");
});

test("shows diagnostic sections with progress and opens one section at a time", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);

  const mixedCheck = [...root.querySelectorAll("button")].find((button) => button.textContent === "Mixed Check");
  expect(mixedCheck).toBeTruthy();
  act(() => mixedCheck?.click());

  expect(root.textContent).toContain("Sentence engine");
  expect(root.textContent).toContain("0/8 completed");
  expect(root.textContent).not.toContain("Choose the natural question.");

  const startSection = [...root.querySelectorAll("button")].find((button) => button.textContent === "Start A. Sentence engine");
  expect(startSection).toBeTruthy();
  act(() => startSection?.click());

  expect(root.textContent).toContain("Choose the natural question.");
  expect(root.textContent).not.toContain("Choose the best sentence for a routine.");
});

test("keeps linked theory in the task and groups choice options semantically", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);
  const mixedCheck = [...root.querySelectorAll("button")].find((button) => button.textContent === "Mixed Check");
  act(() => mixedCheck?.click());
  const startSection = [...root.querySelectorAll("button")].find((button) => button.textContent === "Start A. Sentence engine");
  act(() => startSection?.click());

  const fieldset = root.querySelector("fieldset");
  expect(fieldset?.querySelector("legend")?.textContent).toBe("Choose the natural question.");

  const repairButton = [...root.querySelectorAll("button")].find((button) => button.textContent === "Question word order");
  expect(repairButton).toBeTruthy();
  act(() => repairButton?.click());

  expect(root.textContent).toContain("Use this when: Use this when you make a question.");
  expect(root.textContent).toContain("Pattern:");
});

test("shows one guided-practice cluster at a time from a progress overview", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);
  const guidedPractice = [...root.querySelectorAll("button")].find((button) => button.textContent === "Guided Practice");
  act(() => guidedPractice?.click());

  expect(root.textContent).toContain("Sentence engine");
  expect(root.textContent).toContain("0/21 completed");
  expect(root.textContent).not.toContain("Where did you go yesterday?");

  const startCluster = [...root.querySelectorAll("button")].find((button) => button.textContent === "Start A. Sentence engine");
  act(() => startCluster?.click());

  expect(root.textContent).toContain("Where did you go yesterday?");
  expect(root.textContent).not.toContain("I usually have lessons on Wednesday.");
  expect(root.textContent).toContain("Back to Guided Practice overview");
});

test("restores a checked choice answer without restoring unfinished answers", () => {
  window.localStorage.setItem(progressStorageKey, JSON.stringify({
    checked: { "d-se-01": { correct: true, correctAnswer: "Why are you tired?", submittedAnswer: "b" } },
    completedTaskIds: ["d-se-01"],
    completedClusterIds: []
  }));
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);
  const mixedCheck = [...root.querySelectorAll("button")].find((button) => button.textContent === "Mixed Check");
  act(() => mixedCheck?.click());
  const continueSection = [...root.querySelectorAll("button")].find((button) => button.textContent === "Continue A. Sentence engine");
  act(() => continueSection?.click());

  const restored = root.querySelector<HTMLInputElement>('input[name="d-se-01"][value="b"]');
  expect(restored?.checked).toBe(true);
  expect((root.querySelector('[aria-label="Answer for d-se-03"]') as HTMLInputElement | null)?.value).toBe("");
});

test("shows stable lettered sections and numbered exercise items", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);
  const mixedCheck = [...root.querySelectorAll("button")].find((button) => button.textContent === "Mixed Check");
  act(() => mixedCheck?.click());

  expect(root.textContent).toContain("A. Sentence engine");

  const startSection = [...root.querySelectorAll("button")].find((button) => button.textContent === "Start A. Sentence engine");
  act(() => startSection?.click());

  expect(root.querySelector(".task-number")?.textContent).toBe("1.");
});

test("offers repair before revealing an incorrect answer", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);
  const mixedCheck = [...root.querySelectorAll("button")].find((button) => button.textContent === "Mixed Check");
  act(() => mixedCheck?.click());
  const startSection = [...root.querySelectorAll("button")].find((button) => button.textContent === "Start A. Sentence engine");
  act(() => startSection?.click());

  const answer = root.querySelector<HTMLInputElement>('[aria-label="Answer for d-se-03"]');
  act(() => {
    if (answer) {
      answer.value = "do";
      answer.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
  const task = [...root.querySelectorAll("article")].find((article) => article.textContent?.includes("I ____ understand this rule."));
  const check = [...(task?.querySelectorAll("button") ?? [])].find((button) => button.textContent === "Check answer");
  act(() => check?.click());

  expect(task?.textContent).toContain("Not quite yet.");
  expect(task?.textContent).toContain("Show answer");
  expect(task?.textContent).not.toContain("Correct answer: don't");

  const showAnswer = [...(task?.querySelectorAll("button") ?? [])].find((button) => button.textContent === "Show answer");
  act(() => showAnswer?.click());

  expect(task?.textContent).toContain("Correct answer: don't");
  expect(task?.textContent).toContain("Use do not / don't before the base verb");
});

test("shows explanation without an answer key after a correct check", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);
  const mixedCheck = [...root.querySelectorAll("button")].find((button) => button.textContent === "Mixed Check");
  act(() => mixedCheck?.click());
  const startSection = [...root.querySelectorAll("button")].find((button) => button.textContent === "Start A. Sentence engine");
  act(() => startSection?.click());

  const answer = root.querySelector<HTMLInputElement>('[aria-label="Answer for d-se-03"]');
  act(() => {
    if (answer) {
      answer.value = "don't";
      answer.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
  const task = [...root.querySelectorAll("article")].find((article) => article.textContent?.includes("I ____ understand this rule."));
  const check = [...(task?.querySelectorAll("button") ?? [])].find((button) => button.textContent === "Check answer");
  act(() => check?.click());

  expect(task?.textContent).toContain("That works.");
  expect(task?.textContent).toContain("Use do not / don't before the base verb");
  expect(task?.textContent).not.toContain("Correct answer:");
});
