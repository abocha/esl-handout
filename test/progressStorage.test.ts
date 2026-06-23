import { expect, test } from "vitest";
import { createProgressStore, emptyProgressState, progressStorageKey } from "../src/engine/progressStorage";

function fakeStorage(): Storage {
  const values = new Map<string, string>();
  return {
    get length() { return values.size; },
    clear: () => values.clear(),
    getItem: (key) => values.get(key) ?? null,
    key: (index) => [...values.keys()][index] ?? null,
    removeItem: (key) => { values.delete(key); },
    setItem: (key, value) => { values.set(key, value); }
  };
}

test("round-trips checked state through supplied storage", () => {
  const storage = fakeStorage();
  const store = createProgressStore(storage);
  const progress = { checked: { task: { correct: true, correctAnswer: "a" } }, completedTaskIds: ["task"], completedClusterIds: ["cluster"] };
  store.save(progress);
  expect(createProgressStore(storage).load()).toEqual(progress);
});

test("reset removes only this handout key", () => {
  const storage = fakeStorage();
  storage.setItem("another-key", "keep");
  const store = createProgressStore(storage);
  store.save({ ...emptyProgressState, completedTaskIds: ["task"] });
  store.reset();
  expect(storage.getItem(progressStorageKey)).toBeNull();
  expect(storage.getItem("another-key")).toBe("keep");
});

test("uses empty in-memory state when reads throw", () => {
  const storage = { getItem: () => { throw new Error("blocked"); } } as Storage;
  expect(createProgressStore(storage).load()).toEqual(emptyProgressState);
});

test("keeps current session state when writes throw", () => {
  const storage = { getItem: () => null, setItem: () => { throw new Error("blocked"); } } as Storage;
  const store = createProgressStore(storage);
  const progress = { ...emptyProgressState, completedTaskIds: ["task"] };
  expect(() => store.save(progress)).not.toThrow();
  expect(store.load()).toEqual(progress);
});
