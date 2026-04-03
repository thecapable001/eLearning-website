import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer-modern">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-grid">
            <div className="footer-card-modern">
              <div className="footer-brand">ByteBridge</div>
              <p>
                A focused tech learning space with guided tracks, revision support,
                assessments, and mentor-inspired direction in one place.
              </p>
            </div>

            <div className="footer-card-modern">
              <h3>Navigate</h3>
              <div className="footer-list">
                <Link to="/" className="footer-link">
                  Home
                </Link>
                <Link to="/about" className="footer-link">
                  About
                </Link>
                <Link to="/courses" className="footer-link">
                  Courses
                </Link>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </div>
            </div>

            <div className="footer-card-modern">
              <h3>Resources</h3>
              <div className="footer-list">
                <Link to="/library" className="footer-link">
                  Developer Knowledge Hub
                </Link>
                <Link to="/test" className="footer-link">
                  Assessments
                </Link>
                <Link to="/feedback" className="footer-link">
                  Feedback
                </Link>
                <Link to="/signin" className="footer-link">
                  Student Login
                </Link>
              </div>
            </div>

            <div className="footer-card-modern">
              <h3>Stay Updated</h3>
              <p>Follow the project and get notified when new quizzes, notes, and courses are added.</p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const input = event.currentTarget.querySelector("input");
                  if (input && input.value.trim()) {
                    alert(`Thanks for subscribing: ${input.value}`);
                    input.value = "";
                  }
                }}
              >
                <div className="footer-cta">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit" className="btn btn-primary px-4">
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="footer-bottom-modern">
            <span>ByteBridge 2026.</span>
            <span>
              Crafted with care at PSIT by an MCA final-year student, for learners building with clarity and confidence.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
