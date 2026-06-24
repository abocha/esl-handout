import type { TheoryCard } from "../content/contentTypes";

export function TheoryCardContent({ card }: { card: TheoryCard }) {
  return <>
    <h4>{card.title}</h4>
    <p><strong>Use this when:</strong> {card.useWhen}</p>
    {card.pattern && <p><strong>Pattern:</strong> {card.pattern}</p>}
    <ul>{card.examples.map((example) => <li key={example}>{example}</li>)}</ul>
    {card.commonMistake && <p><strong>Common mistake:</strong> {card.commonMistake}</p>}
    {card.miniCheck && <p><strong>Mini-check:</strong> {card.miniCheck.prompt} <em>{card.miniCheck.answer}</em></p>}
  </>;
}
