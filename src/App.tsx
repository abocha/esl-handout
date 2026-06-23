import { useMemo, useState } from "preact/hooks";
import { handoutPack } from "./content/content-pack-core-review-v0.1";
import type { Task } from "./content/contentTypes";
import { ClusterView } from "./components/ClusterView";
import { ResultSummary } from "./components/ResultSummary";
import { SectionNav, type Area } from "./components/SectionNav";
import { TaskCard } from "./components/TaskCard";
import { TheoryDrawer } from "./components/TheoryDrawer";
import { checkAnswer } from "./engine/checkAnswer";
import { createProgressStore, type ProgressState } from "./engine/progressStorage";
import { type ScoredTaskResult } from "./engine/scoreDiagnostic";
import { createResultSummary } from "./engine/summarizeResults";

function clusterTasks(clusterId: string): readonly Task[] {
  const cluster = handoutPack.clusters.find((item) => item.id === clusterId);
  if (!cluster) return [];
  return [
    ...cluster.stages.tryFirst,
    ...cluster.stages.practise,
    ...cluster.stages.fixCommonMistakes,
    ...cluster.stages.useItPersonally
  ];
}

export function App() {
  const store = useMemo(() => createProgressStore(), []);
  const [progress, setProgress] = useState<ProgressState>(() => store.load());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [activeArea, setActiveArea] = useState<Area>("start");
  const [selectedCardId, setSelectedCardId] = useState<string>();
  const [copyMessage, setCopyMessage] = useState("");

  const updateProgress = (update: (current: ProgressState) => ProgressState) => {
    setProgress((current) => {
      const next = update(current);
      store.save(next);
      return next;
    });
  };

  const markClusterIfComplete = (state: ProgressState, clusterId?: string): ProgressState => {
    if (!clusterId) return state;
    const complete = clusterTasks(clusterId).every((task) => Boolean(state.checked[task.id]) || state.completedTaskIds.includes(task.id));
    return complete && !state.completedClusterIds.includes(clusterId)
      ? { ...state, completedClusterIds: [...state.completedClusterIds, clusterId] }
      : state;
  };

  const checkTask = (task: Task, clusterId?: string) => {
    const result = checkAnswer(task, answers[task.id] ?? "");
    if (!result.checked) return;
    updateProgress((current) => markClusterIfComplete({
      ...current,
      checked: { ...current.checked, [task.id]: { correct: result.correct, correctAnswer: result.correctAnswer ?? "" } },
      completedTaskIds: current.completedTaskIds.includes(task.id) ? current.completedTaskIds : [...current.completedTaskIds, task.id]
    }, clusterId));
  };

  const completePersonal = (task: Task, clusterId?: string) => {
    updateProgress((current) => markClusterIfComplete({
      ...current,
      completedTaskIds: current.completedTaskIds.includes(task.id) ? current.completedTaskIds : [...current.completedTaskIds, task.id]
    }, clusterId));
  };

  const openTheory = (cardId: string) => {
    setSelectedCardId(cardId);
    setActiveArea("theory");
  };

  const scoredResults: ScoredTaskResult[] = [
    ...handoutPack.diagnostic.flatMap((section) => section.tasks.map((task) => ({ task, section: "diagnostic" as const }))),
    ...handoutPack.clusters.flatMap((cluster) => clusterTasks(cluster.id).map((task) => ({ task, section: "cluster" as const })))
  ].flatMap(({ task, section }) => {
    const saved = progress.checked[task.id];
    return saved ? [{ task, section, correct: saved.correct }] : [];
  });

  const completedPersonalTaskIds = progress.completedTaskIds.filter((taskId) => !progress.checked[taskId]);
  const summary = createResultSummary(handoutPack, scoredResults, completedPersonalTaskIds);

  const copySummary = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(summary);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = summary;
        document.body.append(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        if (!copied) throw new Error("Copy command was unavailable");
      }
      setCopyMessage("Summary copied. You can paste it into a message to your teacher.");
    } catch {
      setCopyMessage("Copy is unavailable here. You can select the summary text and copy it manually.");
    }
  };

  const reset = () => {
    if (window.confirm("Reset all checked and completed tasks for this handout?")) {
      store.reset();
      setProgress(store.load());
      setAnswers({});
      setCopyMessage("");
    }
  };

  return <main className="app-shell">
    <header className="masthead"><p className="eyebrow">{handoutPack.meta.level}</p><h1>{handoutPack.startPage.title}</h1><p>{handoutPack.meta.subtitle}</p></header>
    <SectionNav activeArea={activeArea} onSelect={setActiveArea} />
    <section className="privacy-bar"><button className="text-button" onClick={reset}>Reset this handout</button><span>Progress is saved only in this browser on this device.</span></section>
    {activeArea === "start" && <section className="start-page"><h2>{handoutPack.startPage.title}</h2><p>{handoutPack.startPage.intro}</p><ol>{handoutPack.startPage.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}</ol><button onClick={() => setActiveArea("diagnostic")}>Start the Mixed Check</button></section>}
    {activeArea === "diagnostic" && <section><p className="eyebrow">Mixed Check</p><h2>Try first, then notice the pattern.</h2>{handoutPack.diagnostic.map((section) => <section className="diagnostic-section" key={section.id}><h3>{section.title}</h3><p>{section.description}</p>{section.tasks.map((task) => <TaskCard key={task.id} task={task} answer={answers[task.id] ?? ""} savedResult={progress.checked[task.id]} completed={progress.completedTaskIds.includes(task.id)} onAnswerChange={(answer) => setAnswers((current) => ({ ...current, [task.id]: answer }))} onCheck={() => checkTask(task)} onCompletePersonal={() => completePersonal(task)} onOpenTheory={openTheory} />)}</section>)}</section>}
    {activeArea === "practice" && <section><p className="eyebrow">Guided Practice</p><h2>Choose a cluster that feels useful today.</h2>{handoutPack.clusters.map((cluster) => <ClusterView key={cluster.id} cluster={cluster} answers={answers} checked={progress.checked} completedTaskIds={progress.completedTaskIds} onAnswerChange={(taskId, answer) => setAnswers((current) => ({ ...current, [taskId]: answer }))} onCheck={checkTask} onCompletePersonal={completePersonal} onOpenTheory={openTheory} />)}</section>}
    {activeArea === "theory" && <TheoryDrawer cards={handoutPack.theoryCards} selectedCardId={selectedCardId} onSelect={setSelectedCardId} onClose={() => setSelectedCardId(undefined)} />}
    {activeArea === "summary" && <><section className="final-output"><p className="eyebrow">Final personal output</p><h2>Use the patterns in your own English.</h2>{handoutPack.finalOutput.map((task) => <TaskCard key={task.id} task={task} answer={answers[task.id] ?? ""} completed={progress.completedTaskIds.includes(task.id)} onAnswerChange={(answer) => setAnswers((current) => ({ ...current, [task.id]: answer }))} onCheck={() => undefined} onCompletePersonal={() => completePersonal(task)} onOpenTheory={openTheory} />)}</section><ResultSummary summary={summary} onCopy={copySummary} copyMessage={copyMessage} /></>}
  </main>;
}
