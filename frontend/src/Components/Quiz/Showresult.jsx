import React from "react";
import { Link } from "react-router-dom";

export default function Showresult({
  result,
  total,
  tryAgain,
  path,
  title,
  relatedLabel,
}) {
  const percentage = Math.round((result * 100) / total);
  const performanceLabel =
    percentage >= 80
      ? "Strong interview-ready foundation"
      : percentage >= 60
        ? "Good base, keep revising"
        : "Needs another revision round";

  const performanceCopy =
    percentage >= 80
      ? "You are holding the concepts well. Keep this subject warm with regular short practice."
      : percentage >= 60
        ? "The basics are there. A second pass through the topic and one more quiz round will help a lot."
        : "Open the related learning track, revise the concepts once more, and come back for another attempt.";

  return (
    <div className="showresult">
      <div className="quiz-result-card">
        <span className="quiz-result-kicker">{title} complete</span>
        <h3>{performanceLabel}</h3>
        <p>{performanceCopy}</p>

        <div className="quiz-result-grid">
          <div className="quiz-result-metric">
            <strong>{result}</strong>
            <span>correct answers</span>
          </div>
          <div className="quiz-result-metric">
            <strong>{total}</strong>
            <span>total questions</span>
          </div>
          <div className="quiz-result-metric">
            <strong>{percentage}%</strong>
            <span>overall score</span>
          </div>
        </div>

        <div className="quiz-result-actions">
          <button type="button" className="btn tryAgain" onClick={tryAgain}>
            Try Again
          </button>
          <Link to={path} className="hero-button quiz-result-link">
            {relatedLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
