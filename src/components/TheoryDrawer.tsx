import type { TheoryCard } from "../content/contentTypes";

export function TheoryDrawer({ cards, selectedCardId, onSelect, onClose }: { cards: readonly TheoryCard[]; selectedCardId?: string; onSelect: (id: string) => void; onClose: () => void }) {
  const selected = cards.find((card) => card.id === selectedCardId);
  return <aside className="theory-drawer" aria-label="Theory cards">
    <div className="theory-list"><h2>Theory Cards</h2>{cards.map((card) => <button key={card.id} className={selectedCardId === card.id ? "is-active" : ""} onClick={() => onSelect(card.id)}>{card.title}</button>)}</div>
    <div className="theory-detail">{selected ? <><button className="text-button close-button" onClick={onClose}>Close card</button><h2>{selected.title}</h2><p><strong>Use this when:</strong> {selected.useWhen}</p>{selected.pattern && <p><strong>Pattern:</strong> {selected.pattern}</p>}<ul>{selected.examples.map((example) => <li key={example}>{example}</li>)}</ul>{selected.commonMistake && <p><strong>Common mistake:</strong> {selected.commonMistake}</p>}{selected.miniCheck && <p><strong>Mini-check:</strong> {selected.miniCheck.prompt} <em>{selected.miniCheck.answer}</em></p>}</> : <p>Choose a short repair card when you want a reminder.</p>}</div>
  </aside>;
}
