import type { Cluster, Task } from "../content/contentTypes";
import { TaskCard } from "./TaskCard";
import type { SavedCheckResult } from "../engine/progressStorage";

type ClusterViewProps = {
  cluster: Cluster;
  answers: Record<string, string>;
  checked: Record<string, SavedCheckResult>;
  completedTaskIds: readonly string[];
  onAnswerChange: (taskId: string, answer: string) => void;
  onCheck: (task: Task, clusterId: string) => void;
  onCompletePersonal: (task: Task, clusterId: string) => void;
  onOpenTheory: (cardId: string) => void;
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
    <header><p className="eyebrow">{props.cluster.shortTitle}</p><h2>{props.cluster.title}</h2><p>{props.cluster.purpose}</p><p className="progress-text">{completeCount}/{allTasks.length} tasks checked or completed</p></header>
    {stages.map(([title, stage]) => <section key={stage} className="cluster-stage"><h3>{title}</h3>
      {props.cluster.stages[stage].map((task) => <TaskCard key={task.id} task={task} answer={props.answers[task.id] ?? ""} savedResult={props.checked[task.id]} completed={props.completedTaskIds.includes(task.id)} onAnswerChange={(answer) => props.onAnswerChange(task.id, answer)} onCheck={() => props.onCheck(task, props.cluster.id)} onCompletePersonal={() => props.onCompletePersonal(task, props.cluster.id)} onOpenTheory={props.onOpenTheory} />)}
    </section>)}
  </section>;
}
