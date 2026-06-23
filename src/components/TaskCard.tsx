import type { Task } from "../content/contentTypes";
import type { SavedCheckResult } from "../engine/progressStorage";

type TaskCardProps = {
  task: Task;
  answer: string;
  savedResult?: SavedCheckResult;
  completed: boolean;
  onAnswerChange: (answer: string) => void;
  onCheck: () => void;
  onCompletePersonal: () => void;
  onOpenTheory: (cardId: string) => void;
};

export function TaskCard({ task, answer, savedResult, completed, onAnswerChange, onCheck, onCompletePersonal, onOpenTheory }: TaskCardProps) {
  const isPersonal = task.kind === "personal";
  const feedbackClass = savedResult?.correct ? "feedback correct" : "feedback incorrect";

  return <article className="task-card">
    <p className="task-kind">{task.kind === "personal" ? "Use it personally" : "Try it"}</p>
    <h3>{task.prompt}</h3>
    {task.kind === "choice" && <div className="choice-list">
      {task.options.map((option) => <label key={option.id}>
        <input type="radio" name={task.id} value={option.id} checked={answer === option.id} onChange={() => onAnswerChange(option.id)} />
        <span>{option.text}</span>
      </label>)}
    </div>}
    {(task.kind === "gap" || task.kind === "fix") && <input className="answer-input" value={answer} onInput={(event) => onAnswerChange(event.currentTarget.value)} aria-label={`Answer for ${task.id}`} />}
    {task.kind === "rebuild" && <div className="rebuild">
      <div className="chunk-list">{task.chunks.map((chunk, index) => <button type="button" key={`${chunk}-${index}`} onClick={() => onAnswerChange(answer ? `${answer} ${chunk}` : chunk)}>{chunk}</button>)}</div>
      <input className="answer-input" value={answer} onInput={(event) => onAnswerChange(event.currentTarget.value)} aria-label={`Rebuilt answer for ${task.id}`} />
      <button type="button" className="text-button" onClick={() => onAnswerChange("")}>Clear order</button>
    </div>}
    {isPersonal && <>
      <textarea value={answer} onInput={(event) => onAnswerChange(event.currentTarget.value)} placeholder="Write here if you want to practise in this sitting." aria-label={`Personal response for ${task.id}`} />
      {task.guidance && <p className="guidance">{task.guidance}</p>}
      <p className="gentle-note">This one is for real use. Write your answer, then discuss it with your teacher if you want.</p>
      <button type="button" onClick={onCompletePersonal}>{completed ? "Marked complete" : "Mark complete"}</button>
    </>}
    {!isPersonal && <button type="button" onClick={onCheck}>{savedResult ? "Check again" : "Check answer"}</button>}
    {savedResult && <div className={feedbackClass} role="status">
      <strong>{savedResult.correct ? "That works." : "Not quite yet."}</strong>
      <p>Correct answer: {savedResult.correctAnswer}</p>
      <p>{task.explanation}</p>
    </div>}
    {task.theoryCardIds && task.theoryCardIds.length > 0 && <div className="theory-links">
      <span>Need a reminder?</span>
      {task.theoryCardIds.map((cardId) => <button type="button" className="text-button" key={cardId} onClick={() => onOpenTheory(cardId)}>Open theory card</button>)}
    </div>}
  </article>;
}
