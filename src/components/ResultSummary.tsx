export function ResultSummary({ summary, onCopy, copyMessage }: { summary: string; onCopy: () => void; copyMessage: string }) {
  return <section className="result-summary"><p className="eyebrow">Your summary</p><h2>Practice summary</h2><p>You can copy this summary for yourself or your teacher. It works even if you only did part of the practice.</p><pre>{summary}</pre><button onClick={onCopy}>Copy summary</button>{copyMessage && <p className="copy-message" role="status">{copyMessage}</p>}</section>;
}
