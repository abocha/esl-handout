import { useState } from "preact/hooks";
import { TheoryCardContent } from "./TheoryCardContent";
import type { Task } from "../content/contentTypes";
import type { TheoryCard } from "../content/contentTypes";
import type { SavedCheckResult } from "../engine/progressStorage";

type TaskCardProps = {
  task: Task;
  answer: string;
  savedResult?: SavedCheckResult;
  completed: boolean;
  onAnswerChange: (answer: string) => void;
  onCheck: () => void;
  onShowAnswer?: () => void;
  onCompletePersonal: () => void;
  theoryCards: readonly TheoryCard[];
  referenceNumber?: number;
};

export function TaskCard({ task, answer, savedResult, completed, onAnswerChange, onCheck, onShowAnswer, onCompletePersonal, theoryCards, referenceNumber }: TaskCardProps) {
  const isPersonal = task.kind === "personal";
  const feedbackClass = savedResult?.correct ? "feedback correct" : "feedback incorrect";
  const [expandedTheoryCardId, setExpandedTheoryCardId] = useState<string>();
  const linkedTheoryCards = (task.theoryCardIds ?? []).flatMap((cardId) => theoryCards.filter((card) => card.id === cardId));
  const expandedTheoryCard = linkedTheoryCards.find((card) => card.id === expandedTheoryCardId);
  const grammarHelp = linkedTheoryCards.length > 0 && <div className="theory-links">
    <span>Grammar help:</span>
    {linkedTheoryCards.map((card) => <button type="button" className="text-button" key={card.id} onClick={() => setExpandedTheoryCardId((current) => current === card.id ? undefined : card.id)}>{card.title}</button>)}
  </div>;

  return <article className="task-card">
    <p className="task-kind">{referenceNumber && <span className="task-number">{referenceNumber}.</span>}{task.kind === "personal" ? "Your turn" : "Try"}</p>
    {task.kind === "choice" ? <fieldset className="choice-list">
      <legend>{task.prompt}</legend>
      {task.options.map((option) => <label key={option.id}>
        <input type="radio" name={task.id} value={option.id} checked={answer === option.id} onChange={() => onAnswerChange(option.id)} />
        <span>{option.text}</span>
      </label>)}
    </fieldset> : <h3>{task.prompt}</h3>}
    {(task.kind === "gap" || task.kind === "fix") && <input className="answer-input" value={answer} onInput={(event) => onAnswerChange(event.currentTarget.value)} aria-label={`Answer for ${task.id}`} />}
    {task.kind === "rebuild" && <div className="rebuild">
      <div className="chunk-list">{task.chunks.map((chunk, index) => <button type="button" key={`${chunk}-${index}`} onClick={() => onAnswerChange(answer ? `${answer} ${chunk}` : chunk)}>{chunk}</button>)}</div>
      <input className="answer-input" value={answer} onInput={(event) => onAnswerChange(event.currentTarget.value)} aria-label={`Rebuilt answer for ${task.id}`} />
      <button type="button" className="text-button" onClick={() => onAnswerChange("")}>Clear order</button>
    </div>}
    {isPersonal && <>
      <textarea value={answer} onInput={(event) => onAnswerChange(event.currentTarget.value)} placeholder="Write your answer here. This text is not saved after you close or refresh the page." aria-label={`Personal response for ${task.id}`} />
      {task.guidance && <p className="guidance">{task.guidance}</p>}
      <p className="gentle-note">Write your own answer. You can discuss it with your teacher.</p>
      <div className="task-actions">
        <button type="button" onClick={onCompletePersonal}>{completed ? "Done" : "Done for now"}</button>
        {grammarHelp}
      </div>
    </>}
    {!isPersonal && <div className="task-actions">
      <button type="button" onClick={onCheck}>{savedResult ? "Check again" : "Check answer"}</button>
      {grammarHelp}
    </div>}
    <div className={`collapsible${savedResult ? ' is-open' : ''}`}>
      <div className="collapsible-body">
        {savedResult && <div className={feedbackClass} role="status">
          <strong>{savedResult.correct ? "Correct." : "Not correct yet."}</strong>
          {savedResult.correct ? <p>{task.explanation}</p> : savedResult.answerRevealed ? <><p>Correct answer: {savedResult.correctAnswer}</p><p>{task.explanation}</p></> : <><p><strong>Hint:</strong> Use Grammar help, then try again.</p>{onShowAnswer && <button type="button" className="show-answer-button" onClick={onShowAnswer}>Show answer</button>}</>}
        </div>}
      </div>
    </div>
    {linkedTheoryCards.length > 0 && <div className={`collapsible theory-slot${expandedTheoryCard ? ' is-open' : ''}`}>
      <div className="collapsible-body">
        {expandedTheoryCard && <section className="inline-theory-card" aria-label={`${expandedTheoryCard.title} Grammar help`}><TheoryCardContent card={expandedTheoryCard} /></section>}
      </div>
    </div>}
  </article>;
}
