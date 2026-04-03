import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../assets/css/test.css";
import { quizCatalog } from "../Quiz/quizData";

export default function Test() {
  const coreQuizzes = quizCatalog.filter((quiz) => quiz.group === "core");
  const developmentQuizzes = quizCatalog.filter((quiz) => quiz.group === "development");

  const renderQuizCard = (quiz) => (
    <Link
      key={quiz.id}
      to={`/test/${quiz.id}`}
      className="quiz-hub-card"
      style={{
        "--quiz-accent": quiz.accent,
        "--quiz-soft": quiz.soft,
      }}
    >
      <div className="quiz-card-topline">
        <span className="quiz-card-kicker">{quiz.kicker}</span>
        <span className="quiz-card-count">{quiz.questions.length} MCQs</span>
      </div>
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <div className="quiz-card-tags">
        {quiz.focusPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
      <div className="quiz-card-footer">
        <span>{quiz.group === "core" ? "MNC core prep" : "Development rounds"}</span>
        <strong>Open assessment</strong>
      </div>
    </Link>
  );

  return (
    <>
      <Navbar />
      <section className="test-shell">
        <div className="container">
          <div className="quiz-hub-hero">
            <div className="quiz-hub-copy">
              <span className="section-tag">Assessment Hub</span>
              <h1 className="section-title">
                Most useful subjects for technical interviews and placements
              </h1>
              <p className="section-text">
                Practice the exact subject lanes students usually revise for technical
                interviews: DSA, OOP, DBMS, OS, CN, programming languages, and modern
                development rounds.
              </p>
              <div className="quiz-hub-points">
                <span>Core CS MCQs</span>
                <span>Frontend and full stack rounds</span>
                <span>Cleaner practice flow</span>
              </div>
            </div>

            <div className="quiz-hub-side">
              <div className="quiz-hub-stat">
                <strong>Core topics</strong>
                <span>Practice DSA, OOP, DBMS, OS, CN, and language fundamentals in one place.</span>
              </div>
              <div className="quiz-hub-stat">
                <strong>Development tracks</strong>
                <span>Use frontend, Java, and full stack rounds when you want practical technical revision.</span>
              </div>
              <div className="quiz-hub-stat">
                <strong>Flexible practice</strong>
                <span>Open the assessment that fits your current topic instead of following a rigid order.</span>
              </div>
            </div>
          </div>

          <div className="quiz-hub-section">
            <div className="quiz-hub-head">
              <h2>Core interview subjects</h2>
              <p>Start with the subjects recruiters and technical panels most often expect.</p>
            </div>
            <div className="quiz-hub-grid">{coreQuizzes.map(renderQuizCard)}</div>
          </div>

          <div className="quiz-hub-section">
            <div className="quiz-hub-head">
              <h2>Development and frontend rounds</h2>
              <p>Use these when you want to strengthen practical coding and web-focused concepts.</p>
            </div>
            <div className="quiz-hub-grid">{developmentQuizzes.map(renderQuizCard)}</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
