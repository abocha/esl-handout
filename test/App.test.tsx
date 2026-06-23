import { render } from "preact";
import { afterEach, expect, test } from "vitest";
import { App } from "../src/App";

afterEach(() => {
  document.body.replaceChildren();
});

test("shows the handout title", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);

  expect(root.textContent).toContain("A2+ English Maintenance Map");
});
