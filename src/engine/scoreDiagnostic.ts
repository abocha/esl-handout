import type { HandoutPack, Task } from "../content/contentTypes";

export type PracticeSection = "diagnostic" | "cluster";

export type ScoredTaskResult = {
  readonly task: Task;
  readonly correct: boolean;
  readonly section: PracticeSection;
};

export type SkillScore = { attempted: number; correct: number };

export type ReviewRecommendation = {
  readonly skillTag: string;
  readonly clusterId: string;
  readonly message: string;
};

const clusterBySkillTag: Record<string, string> = {
  "word-order": "sentence-engine",
  questions: "sentence-engine",
  negatives: "sentence-engine",
  auxiliaries: "sentence-engine",
  "present-simple": "time-basics",
  "present-continuous": "time-basics",
  "past-simple": "time-basics",
  "future-basics": "time-basics",
  "present-perfect": "time-basics",
  articles: "nouns-articles",
  "plural-nouns": "nouns-articles",
  countability: "nouns-articles",
  quantifiers: "nouns-articles",
  prepositions: "small-words",
  pronouns: "small-words",
  linkers: "small-words",
  collocations: "small-words"
};

export function scoreBySkill(results: readonly ScoredTaskResult[]): Record<string, SkillScore> {
  return results.reduce<Record<string, SkillScore>>((scores, result) => {
    for (const skillTag of result.task.skillTags) {
      const score = scores[skillTag] ?? { attempted: 0, correct: 0 };
      scores[skillTag] = { attempted: score.attempted + 1, correct: score.correct + Number(result.correct) };
    }
    return scores;
  }, {});
}

export function getReviewRecommendations(pack: HandoutPack, results: readonly ScoredTaskResult[]): ReviewRecommendation[] {
  const clusterIds = new Set(pack.clusters.map((cluster) => cluster.id));
  return Object.entries(scoreBySkill(results)).flatMap(([skillTag, score]) => {
    const clusterId = clusterBySkillTag[skillTag];
    if (!clusterId || !clusterIds.has(clusterId) || score.correct / score.attempted >= 0.7) {
      return [];
    }
    return [{ skillTag, clusterId, message: `You may want to review ${skillTag.replaceAll("-", " ")}.` }];
  });
}
