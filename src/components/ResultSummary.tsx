export function ResultSummary({ summary, onCopy, copyMessage }: { summary: string; onCopy: () => void; copyMessage: string }) {
  return <section className="result-summary"><p className="eyebrow">Your handout note</p><h2>Result Summary</h2><p>Use this as a simple note for yourself or your teacher. It works even if you only completed guided practice.</p><pre>{summary}</pre><button onClick={onCopy}>Copy summary</button>{copyMessage && <p className="copy-message" role="status">{copyMessage}</p>}</section>;
}
