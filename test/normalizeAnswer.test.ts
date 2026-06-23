import { describe, expect, test } from "vitest";
import { normalizeAnswer } from "../src/engine/normalizeAnswer";

describe("normalizeAnswer", () => {
  test("normalizes case, outer whitespace, repeated spaces, curly apostrophes, and final punctuation", () => {
    expect(normalizeAnswer("  She’s   ready!  ")).toBe("she's ready");
  });

  test("keeps meaningful internal punctuation", () => {
    expect(normalizeAnswer("I'm ready, but tired.")).toBe("i'm ready, but tired");
  });
});
