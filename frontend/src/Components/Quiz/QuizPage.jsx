import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import QuizStructure from "./QuizStructure";
import { quizById } from "./quizData";

export default function QuizPage() {
  const { quizId } = useParams();
  const quiz = quizById[quizId?.toLowerCase()];

  if (!quiz) {
    return (
      <>
        <Navbar />
        <section className="quiz-page-shell">
          <div className="container">
            <div className="quiz-hero-card">
              <span className="section-tag">Assessment Not Found</span>
              <h1 className="section-title">This quiz link does not exist.</h1>
              <p className="section-text">
                Return to the quiz hub and pick one of the available subject assessments.
              </p>
              <div className="subject-cta-row">
                <Link to="/test" className="hero-button">
                  Open Quiz Hub
                </Link>
                <Link to="/courses" className="ghost-button">
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="quiz-page-shell">
        <div className="container">
          <div
            className="quiz-hero-card"
            style={{
              "--quiz-accent": quiz.accent,
              "--quiz-soft": quiz.soft,
            }}
          >
            <div className="quiz-hero-copy">
              <span className="section-tag">{quiz.kicker}</span>
              <h1 className="section-title">{quiz.title} Assessment</h1>
              <p className="section-text">{quiz.description}</p>

              <div className="quiz-hero-points">
                {quiz.focusPoints.map((point) => (
                  <span key={point} className="quiz-hero-pill">
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="quiz-hero-side">
              <div className="quiz-hero-stat">
                <strong>{quiz.questions.length}</strong>
                <span>MCQs in this round</span>
              </div>
              <div className="quiz-hero-stat">
                <strong>1 focused try</strong>
                <span>Finish each question before moving next</span>
              </div>
              <div className="quiz-hero-stat">
                <strong>Related track</strong>
                <span>{quiz.relatedLabel}</span>
              </div>
            </div>
          </div>

          <QuizStructure quiz={quiz} />
        </div>
      </section>
      <Footer />
    </>
  );
}
