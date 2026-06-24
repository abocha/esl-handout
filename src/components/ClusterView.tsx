import type { Cluster, Task, TheoryCard } from "../content/contentTypes";
import { TaskCard } from "./TaskCard";
import type { SavedCheckResult } from "../engine/progressStorage";

type ClusterViewProps = {
  cluster: Cluster;
  answers: Record<string, string>;
  checked: Record<string, SavedCheckResult>;
  completedTaskIds: readonly string[];
  onAnswerChange: (taskId: string, answer: string) => void;
  onCheck: (task: Task, clusterId: string) => void;
  onShowAnswer: (task: Task) => void;
  onCompletePersonal: (task: Task, clusterId: string) => void;
  theoryCards: readonly TheoryCard[];
  onBackToOverview?: () => void;
  referenceLabel?: string;
};

const stages = [
  ["Try first", "tryFirst"],
  ["Practise", "practise"],
  ["Fix common mistakes", "fixCommonMistakes"],
  ["Use it personally", "useItPersonally"]
] as const;

export function ClusterView(props: ClusterViewProps) {
  const allTasks = stages.flatMap(([, stage]) => props.cluster.stages[stage]);
  const completeCount = allTasks.filter((task) => props.checked[task.id] || props.completedTaskIds.includes(task.id)).length;
  return <section className="cluster-view">
    <header className="active-card-header"><div><p className="eyebrow">{props.referenceLabel ?? props.cluster.shortTitle}</p><h2>{props.referenceLabel ?? props.cluster.title}</h2><p>{props.cluster.purpose}</p><p className="progress-text">{completeCount}/{allTasks.length} tasks checked or completed</p></div>{props.onBackToOverview && <button type="button" className="back-button" onClick={props.onBackToOverview}><span aria-hidden="true">←</span> Back to Guided Practice overview</button>}</header>
    {stages.map(([title, stage], stageIndex) => <section key={stage} className="cluster-stage"><h3>{title}</h3>
      {props.cluster.stages[stage].map((task, taskIndex) => <TaskCard key={task.id} task={task} referenceNumber={stages.slice(0, stageIndex).flatMap(([, previousStage]) => props.cluster.stages[previousStage]).length + taskIndex + 1} answer={props.answers[task.id] ?? ""} savedResult={props.checked[task.id]} completed={props.completedTaskIds.includes(task.id)} onAnswerChange={(answer) => props.onAnswerChange(task.id, answer)} onCheck={() => props.onCheck(task, props.cluster.id)} onShowAnswer={() => props.onShowAnswer(task)} onCompletePersonal={() => props.onCompletePersonal(task, props.cluster.id)} theoryCards={props.theoryCards} />)}
    </section>)}
  </section>;
}
