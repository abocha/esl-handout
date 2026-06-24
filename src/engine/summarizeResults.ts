import type { HandoutPack } from "../content/contentTypes";
import { getReviewRecommendations, type ScoredTaskResult } from "./scoreDiagnostic";

export function createResultSummary(
  pack: HandoutPack,
  results: readonly ScoredTaskResult[],
  completedPersonalTaskIds: readonly string[]
): string {
  const sections = new Set(results.map((result) => result.section === "diagnostic" ? "Mixed Check" : "Guided Practice"));
  if (completedPersonalTaskIds.length > 0) sections.add("Writing practice");
  const practised = sections.size > 0 ? [...sections].join(", ") : "no sections yet";
  const recommendations = getReviewRecommendations(pack, results);
  const review = recommendations.length > 0
    ? recommendations.map((recommendation) => `• ${recommendation.message}`).join("\n")
    : "• Keep using this grammar in real conversations.";

  return `Today I practised: ${practised}.\n\nYou may want to review:\n${review}`;
}
