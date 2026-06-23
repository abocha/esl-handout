import type { HandoutPack, Task } from "../content/contentTypes";

function allTasks(pack: HandoutPack): readonly Task[] {
  return [
    ...pack.diagnostic.flatMap((section) => section.tasks),
    ...pack.clusters.flatMap((cluster) => [
      ...cluster.stages.tryFirst,
      ...cluster.stages.practise,
      ...cluster.stages.fixCommonMistakes,
      ...cluster.stages.useItPersonally
    ]),
    ...pack.finalOutput
  ];
}

export function validateContent(pack: HandoutPack): string[] {
  const errors: string[] = [];
  const taskIds = new Set<string>();
  const theoryCardIds = new Set<string>();
  const tasks = allTasks(pack);

  for (const card of pack.theoryCards) {
    if (theoryCardIds.has(card.id)) errors.push(`Duplicate theory card id: ${card.id}`);
    theoryCardIds.add(card.id);
  }

  for (const task of tasks) {
    if (taskIds.has(task.id)) errors.push(`Duplicate task id: ${task.id}`);
    taskIds.add(task.id);
    if (!task.prompt.trim()) errors.push(`Task ${task.id} has an empty prompt.`);
    if (task.kind !== "personal" && !task.explanation?.trim()) errors.push(`Task ${task.id} has an empty explanation.`);

    for (const theoryCardId of task.theoryCardIds ?? []) {
      if (!theoryCardIds.has(theoryCardId)) errors.push(`Task ${task.id} references missing theory card: ${theoryCardId}`);
    }

    if (task.kind === "choice") {
      const matches = task.options.filter((option) => option.id === task.correctOptionId).length;
      if (matches !== 1) errors.push(`Choice task ${task.id} correctOptionId must match exactly one option.`);
    }

    if (task.kind === "gap" || task.kind === "fix" || task.kind === "rebuild") {
      if (!task.acceptedAnswers || task.acceptedAnswers.length === 0) errors.push(`Task ${task.id} must have accepted answers.`);
    }
  }

  return errors;
}
