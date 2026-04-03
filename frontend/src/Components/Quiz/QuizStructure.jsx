import React, { useState } from "react";
import "../../assets/css/quiz.css";
import Showresult from "./Showresult";

export default function QuizStructure({ quiz }) {
  const [currQues, setCurrQues] = useState(0);
  const [ans, setAns] = useState("");
  const [result, setResult] = useState(0);
  const [isLast, setIsLast] = useState(false);

  const currentQuestion = quiz.questions[currQues];
  const progressValue = isLast
    ? 100
    : Math.round(((currQues + 1) / quiz.questions.length) * 100);

  const nextHandle = () => {
    if (!ans) {
      return;
    }

    const nextResult = ans === currentQuestion.answer ? result + 1 : result;

    if (currQues < quiz.questions.length - 1) {
      setResult(nextResult);
      setCurrQues(currQues + 1);
      setAns("");
      return;
    }

    setResult(nextResult);
    setIsLast(true);
  };

  const resetAll = () => {
    setCurrQues(0);
    setAns("");
    setResult(0);
    setIsLast(false);
  };

  return (
    <div className="Quiz">
      <div className="quiz-stage-card">
        <div className="quiz-stage-topline">
          <div>
            <span className="quiz-stage-label">
              Question {Math.min(currQues + 1, quiz.questions.length)} of {quiz.questions.length}
            </span>
            <h2>{quiz.title}</h2>
          </div>
          <div className="quiz-stage-progress-copy">
            <strong>{progressValue}%</strong>
            <span>progress</span>
          </div>
        </div>

        <div className="quiz-progress-bar" aria-hidden="true">
          <span style={{ width: `${progressValue}%` }}></span>
        </div>

        {isLast ? (
          <Showresult
            result={result}
            total={quiz.questions.length}
            tryAgain={resetAll}
            path={quiz.relatedPath}
            title={quiz.title}
            relatedLabel={quiz.relatedLabel}
          />
        ) : (
          <>
            <div className="question">
              <span>{currentQuestion.question}</span>
            </div>
            <div className="option">
              {currentQuestion.options.map((option) => (
                <button
                  type="button"
                  className={`quiz-option-button${ans === option ? " checked" : ""}`}
                  key={option}
                  onClick={() => setAns(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="nextbtn">
              <button
                type="button"
                className="btn quiz-next-button"
                onClick={nextHandle}
                disabled={!ans}
              >
                {currQues === quiz.questions.length - 1 ? "Finish Assessment" : "Next Question"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
