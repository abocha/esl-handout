import type { TheoryCard } from "../content/contentTypes";
import { TheoryCardContent } from "./TheoryCardContent";

export function TheoryDrawer({ cards, selectedCardId, onSelect }: { cards: readonly TheoryCard[]; selectedCardId?: string; onSelect: (id: string) => void }) {
  const selected = cards.find((card) => card.id === selectedCardId) ?? cards[0];
  return <aside className="theory-drawer" aria-label="Reference cards">
    <div className="theory-list"><h2>Reference</h2>{cards.map((card) => <button key={card.id} className={selected?.id === card.id ? "is-active" : ""} onClick={() => onSelect(card.id)}>{card.title}</button>)}</div>
    <div className="theory-detail">{selected && <TheoryCardContent card={selected} />}</div>
  </aside>;
}
