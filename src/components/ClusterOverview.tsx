import type { Cluster } from "../content/contentTypes";
import type { SavedCheckResult } from "../engine/progressStorage";

type ClusterOverviewProps = {
  clusters: readonly Cluster[];
  checked: Record<string, SavedCheckResult>;
  completedTaskIds: readonly string[];
  onSelect: (clusterId: string) => void;
};

function clusterTasks(cluster: Cluster) {
  return Object.values(cluster.stages).flat();
}

export function ClusterOverview({ clusters, checked, completedTaskIds, onSelect }: ClusterOverviewProps) {
  return <section className="diagnostic-overview" aria-labelledby="practice-overview-title">
    <p className="eyebrow">Guided Practice</p>
    <h2 id="practice-overview-title">Choose a useful area for today.</h2>
    <p>Pick one cluster, practise a little, and return whenever you want.</p>
    <div className="diagnostic-grid">
      {clusters.map((cluster, index) => {
        const tasks = clusterTasks(cluster);
        const completed = tasks.filter((task) => checked[task.id] || completedTaskIds.includes(task.id)).length;
        const label = `${String.fromCharCode(65 + index)}. ${cluster.shortTitle}`;
        return <article className="diagnostic-card" key={cluster.id}>
          <h3>{label}</h3>
          <p>{cluster.purpose}</p>
          <p className="progress-text">{completed}/{tasks.length} completed</p>
          <button type="button" onClick={() => onSelect(cluster.id)}>{completed ? `Continue ${label}` : `Start ${label}`}</button>
        </article>;
      })}
    </div>
  </section>;
}
