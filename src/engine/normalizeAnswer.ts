export function normalizeAnswer(value: string): string {
  return value
    .replace(/[‘’]/g, "'")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/, "")
    .toLowerCase();
}
