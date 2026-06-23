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

test("shows all five student-facing areas", () => {
  const root = document.createElement("div");
  document.body.append(root);

  render(<App />, root);

  expect(root.textContent).toContain("Start");
  expect(root.textContent).toContain("Mixed Check");
  expect(root.textContent).toContain("Guided Practice");
  expect(root.textContent).toContain("Theory Cards");
  expect(root.textContent).toContain("Result Summary");
});
