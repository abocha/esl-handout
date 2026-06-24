import type { DiagnosticSection } from "../content/contentTypes";
import type { SavedCheckResult } from "../engine/progressStorage";

type DiagnosticOverviewProps = {
  sections: readonly DiagnosticSection[];
  checked: Record<string, SavedCheckResult>;
  completedTaskIds: readonly string[];
  onSelect: (sectionId: string) => void;
};

function sectionLabel(section: DiagnosticSection): string {
  const title = section.title.replace(/^Mixed Check \d+:\s*/i, "");
  return title.charAt(0).toUpperCase() + title.slice(1);
}

export function DiagnosticOverview({ sections, checked, completedTaskIds, onSelect }: DiagnosticOverviewProps) {
  return <section className="diagnostic-overview" aria-labelledby="diagnostic-overview-title">
    <p className="eyebrow">Mixed Check</p>
    <h2 id="diagnostic-overview-title">Choose one small section to begin.</h2>
    <p>Start anywhere. Your checked answers stay here when you come back.</p>
    <div className="diagnostic-grid">
      {sections.map((section, index) => {
        const completed = section.tasks.filter((task) => checked[task.id] || completedTaskIds.includes(task.id)).length;
        const label = `${String.fromCharCode(65 + index)}. ${sectionLabel(section)}`;
        return <article className="diagnostic-card" key={section.id}>
          <h3>{label}</h3>
          <p>{section.description}</p>
          <p className="progress-text">{completed}/{section.tasks.length} completed</p>
          <button type="button" onClick={() => onSelect(section.id)}>{completed ? `Continue ${label}` : `Start ${label}`}</button>
        </article>;
      })}
    </div>
  </section>;
}
