export type Area = "start" | "diagnostic" | "practice" | "theory" | "summary";

const areas: readonly { id: Area; label: string }[] = [
  { id: "start", label: "Start" },
  { id: "diagnostic", label: "Mixed Check" },
  { id: "practice", label: "Guided Practice" },
  { id: "theory", label: "Theory Cards" },
  { id: "summary", label: "Result Summary" }
];

export function SectionNav({ activeArea, onSelect }: { activeArea: Area; onSelect: (area: Area) => void }) {
  return <nav className="section-nav" aria-label="Handout sections">
    {areas.map((area) => <button key={area.id} className={activeArea === area.id ? "is-active" : ""} onClick={() => onSelect(area.id)}>{area.label}</button>)}
  </nav>;
}
