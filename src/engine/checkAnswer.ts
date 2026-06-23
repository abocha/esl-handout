import type { AutoCheckableTask, Task } from "../content/contentTypes";
import { normalizeAnswer } from "./normalizeAnswer";

export type CheckResult = {
  checked: boolean;
  correct: boolean;
  correctAnswer?: string;
};

function correctAnswerFor(task: AutoCheckableTask): string {
  if (task.kind === "choice") {
    return task.options.find((option) => option.id === task.correctOptionId)?.text ?? "";
  }

  return task.acceptedAnswers[0] ?? "";
}

export function checkAnswer(task: Task, answer: string): CheckResult {
  if (task.kind === "personal") {
    return { checked: false, correct: false };
  }

  const correctAnswer = correctAnswerFor(task);
  const correct = task.kind === "choice"
    ? answer === task.correctOptionId
    : task.acceptedAnswers.some((acceptedAnswer) => normalizeAnswer(acceptedAnswer) === normalizeAnswer(answer));

  return { checked: true, correct, correctAnswer };
}
