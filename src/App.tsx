import { useMemo, useState } from "preact/hooks";
import { handoutPack } from "./content/content-pack-core-review-v0.1";
import type { Task } from "./content/contentTypes";
import { ClusterView } from "./components/ClusterView";
import { ClusterOverview } from "./components/ClusterOverview";
import { DiagnosticOverview } from "./components/DiagnosticOverview";
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

function checkedAnswers(progress: ProgressState): Record<string, string> {
  return Object.fromEntries(Object.entries(progress.checked).flatMap(([taskId, result]) =>
    result.submittedAnswer === undefined ? [] : [[taskId, result.submittedAnswer]]
  ));
}

function letteredDiagnosticTitle(sectionId: string): string {
  const index = handoutPack.diagnostic.findIndex((section) => section.id === sectionId);
  const section = handoutPack.diagnostic[index];
  if (!section || index < 0) return "";
  const title = section.title.replace(/^Mixed Check \d+:\s*/i, "");
  return `${String.fromCharCode(65 + index)}. ${title.charAt(0).toUpperCase() + title.slice(1)}`;
}

function letteredClusterTitle(clusterId: string): string {
  const index = handoutPack.clusters.findIndex((cluster) => cluster.id === clusterId);
  const cluster = handoutPack.clusters[index];
  return !cluster || index < 0 ? "" : `${String.fromCharCode(65 + index)}. ${cluster.shortTitle}`;
}

export function App() {
  const store = useMemo(() => createProgressStore(), []);
  const [progress, setProgress] = useState<ProgressState>(() => store.load());
  const [answers, setAnswers] = useState<Record<string, string>>(() => checkedAnswers(store.load()));
  const [activeArea, setActiveArea] = useState<Area>("start");
  const [activeDiagnosticSectionId, setActiveDiagnosticSectionId] = useState<string>();
  const [activeClusterId, setActiveClusterId] = useState<string>();
  const [selectedCardId, setSelectedCardId] = useState(() => handoutPack.theoryCards[0]?.id);
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
      checked: { ...current.checked, [task.id]: { correct: result.correct, correctAnswer: result.correctAnswer ?? "", submittedAnswer: answers[task.id] ?? "", answerRevealed: result.correct ? false : current.checked[task.id]?.answerRevealed ?? false } },
      completedTaskIds: current.completedTaskIds.includes(task.id) ? current.completedTaskIds : [...current.completedTaskIds, task.id]
    }, clusterId));
  };

  const showAnswer = (task: Task) => {
    updateProgress((current) => {
      const saved = current.checked[task.id];
      return saved ? { ...current, checked: { ...current.checked, [task.id]: { ...saved, answerRevealed: true } } } : current;
    });
  };

  const completePersonal = (task: Task, clusterId?: string) => {
    updateProgress((current) => markClusterIfComplete({
      ...current,
      completedTaskIds: current.completedTaskIds.includes(task.id) ? current.completedTaskIds : [...current.completedTaskIds, task.id]
    }, clusterId));
  };

  const selectArea = (area: Area) => {
    setActiveArea(area);
    if (area === "diagnostic") setActiveDiagnosticSectionId(undefined);
    if (area === "practice") setActiveClusterId(undefined);
    if (area === "theory" && !selectedCardId) setSelectedCardId(handoutPack.theoryCards[0]?.id);
  };

  const activeDiagnosticSection = handoutPack.diagnostic.find((section) => section.id === activeDiagnosticSectionId);
  const activeCluster = handoutPack.clusters.find((cluster) => cluster.id === activeClusterId);

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
    if (window.confirm("Reset all progress for this page?")) {
      store.reset();
      setProgress(store.load());
      setAnswers({});
      setCopyMessage("");
    }
  };

  return <main className="app-shell">
    <header className="masthead"><p className="eyebrow">{handoutPack.meta.level}</p><h1>{handoutPack.startPage.title}</h1><p>{handoutPack.meta.subtitle}</p></header>
    <SectionNav activeArea={activeArea} onSelect={selectArea} />
    <section className="utility-bar"><span className="privacy-note">Progress is saved only in this browser on this device.</span><button type="button" className="reset-button" onClick={reset}><span aria-hidden="true">↺</span> Reset progress</button></section>
    {activeArea === "start" && <section className="start-page"><h2>{handoutPack.startPage.title}</h2><p>{handoutPack.startPage.intro}</p><ol>{handoutPack.startPage.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}</ol><button onClick={() => selectArea("diagnostic")}>Start the Mixed Check</button></section>}
    {activeArea === "diagnostic" && (activeDiagnosticSection ? <section className="diagnostic-section"><header className="active-card-header"><div><p className="eyebrow">Mixed Check</p><h2>{letteredDiagnosticTitle(activeDiagnosticSection.id)}</h2><p>{activeDiagnosticSection.description}</p></div><button type="button" className="back-button" onClick={() => setActiveDiagnosticSectionId(undefined)}><span aria-hidden="true">←</span> Back to Mixed Check overview</button></header>{activeDiagnosticSection.tasks.map((task, index) => <TaskCard key={task.id} task={task} referenceNumber={index + 1} answer={answers[task.id] ?? ""} savedResult={progress.checked[task.id]} completed={progress.completedTaskIds.includes(task.id)} onAnswerChange={(answer) => setAnswers((current) => ({ ...current, [task.id]: answer }))} onCheck={() => checkTask(task)} onShowAnswer={() => showAnswer(task)} onCompletePersonal={() => completePersonal(task)} theoryCards={handoutPack.theoryCards} />)}</section> : <DiagnosticOverview sections={handoutPack.diagnostic} checked={progress.checked} completedTaskIds={progress.completedTaskIds} onSelect={setActiveDiagnosticSectionId} />)}
    {activeArea === "practice" && (activeCluster ? <ClusterView cluster={activeCluster} referenceLabel={letteredClusterTitle(activeCluster.id)} answers={answers} checked={progress.checked} completedTaskIds={progress.completedTaskIds} onAnswerChange={(taskId, answer) => setAnswers((current) => ({ ...current, [taskId]: answer }))} onCheck={checkTask} onShowAnswer={showAnswer} onCompletePersonal={completePersonal} theoryCards={handoutPack.theoryCards} onBackToOverview={() => setActiveClusterId(undefined)} /> : <ClusterOverview clusters={handoutPack.clusters} checked={progress.checked} completedTaskIds={progress.completedTaskIds} onSelect={setActiveClusterId} />)}
    {activeArea === "theory" && <TheoryDrawer cards={handoutPack.theoryCards} selectedCardId={selectedCardId} onSelect={setSelectedCardId} />}
    {activeArea === "summary" && <><section className="final-output"><p className="eyebrow">Writing practice</p><h2>Use grammar in your own English.</h2>{handoutPack.finalOutput.map((task, index) => <TaskCard key={task.id} task={task} referenceNumber={index + 1} answer={answers[task.id] ?? ""} completed={progress.completedTaskIds.includes(task.id)} onAnswerChange={(answer) => setAnswers((current) => ({ ...current, [task.id]: answer }))} onCheck={() => undefined} onCompletePersonal={() => completePersonal(task)} theoryCards={handoutPack.theoryCards} />)}</section><ResultSummary summary={summary} onCopy={copySummary} copyMessage={copyMessage} /></>}
  </main>;
}
