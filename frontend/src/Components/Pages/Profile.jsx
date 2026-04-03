import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getStoredSession, logoutUser } from "../../api/authService";

const quickLinks = [
  { to: "/courses", title: "Browse Courses", copy: "Open the main learning tracks and subject pages." },
  { to: "/library", title: "Open Developer Knowledge Hub", copy: "Jump to books, references, and quick revision material." },
  { to: "/test", title: "Take Assessments", copy: "Practice with quizzes and topic-based skill checks." },
];

export default function Profile() {
  const navigate = useNavigate();
  const session = getStoredSession();
  const user = session?.user;

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <section className="section-shell">
        <div className="container">
          {user ? (
            <div className="profile-layout">
              <div className="profile-main-card">
                <span className="section-tag">Student Dashboard</span>
                <h1 className="section-title">Welcome back, {user.name.split(" ")[0]}.</h1>
                <p className="section-text">
                  Your account is active and ready. Continue learning, open the library,
                  or jump directly into placement-focused practice.
                </p>

                <div className="profile-actions">
                  <Link to="/courses" className="hero-button">
                    Continue Learning
                  </Link>
                  <button type="button" className="ghost-button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>

                <div className="profile-summary-grid">
                  <div className="profile-summary-card">
                    <strong>Email</strong>
                    <span>{user.email}</span>
                  </div>
                  <div className="profile-summary-card">
                    <strong>Joined</strong>
                    <span>{new Date(user.joinedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="profile-side-card">
                <h2>Your next steps</h2>
                <div className="profile-quick-grid">
                  {quickLinks.map((item) => (
                    <Link key={item.title} to={item.to} className="profile-quick-card">
                      <strong>{item.title}</strong>
                      <span>{item.copy}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="profile-empty-card">
              <span className="section-tag">Access Required</span>
              <h1 className="section-title">Sign in to use your ByteBridge dashboard.</h1>
              <p className="section-text">
                Create an account or log in to access courses,
                developer references, and topic-based learning support.
              </p>

              <div className="profile-actions">
                <Link to="/signin" className="hero-button">
                  Sign In
                </Link>
                <Link to="/register" className="ghost-button">
                  Create Account
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
