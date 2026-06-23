export const progressStorageKey = "a2-maintenance-map:v0.1:progress";

export type SavedCheckResult = { correct: boolean; answer: string };

export type ProgressState = {
  checked: Record<string, SavedCheckResult>;
  completedTaskIds: string[];
  completedClusterIds: string[];
};

export const emptyProgressState: ProgressState = {
  checked: {},
  completedTaskIds: [],
  completedClusterIds: []
};

function copyProgress(state: ProgressState): ProgressState {
  return {
    checked: Object.fromEntries(Object.entries(state.checked).map(([id, result]) => [id, { ...result }])),
    completedTaskIds: [...state.completedTaskIds],
    completedClusterIds: [...state.completedClusterIds]
  };
}

function isProgressState(value: unknown): value is ProgressState {
  if (!value || typeof value !== "object") return false;
  const state = value as Partial<ProgressState>;
  return Boolean(state.checked) && Array.isArray(state.completedTaskIds) && Array.isArray(state.completedClusterIds);
}

export function createProgressStore(storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage) {
  let memory = copyProgress(emptyProgressState);

  return {
    load(): ProgressState {
      try {
        const raw = storage?.getItem(progressStorageKey);
        if (raw) {
          const parsed: unknown = JSON.parse(raw);
          if (isProgressState(parsed)) memory = copyProgress(parsed);
        }
      } catch {
        // Browser privacy settings can block storage; current-tab memory remains usable.
      }
      return copyProgress(memory);
    },
    save(state: ProgressState): void {
      memory = copyProgress(state);
      try {
        storage?.setItem(progressStorageKey, JSON.stringify(memory));
      } catch {
        // Keep the in-memory state when persistent storage is unavailable.
      }
    },
    reset(): void {
      memory = copyProgress(emptyProgressState);
      try {
        storage?.removeItem(progressStorageKey);
      } catch {
        // Resetting the in-memory state is still useful when storage is blocked.
      }
    }
  };
}
