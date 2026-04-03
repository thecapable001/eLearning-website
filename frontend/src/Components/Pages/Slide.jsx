import { Link } from "react-router-dom";

const highlights = [
  { value: "Guided", label: "study paths and practice" },
  { value: "Practical", label: "notes, quizzes, and projects" },
  { value: "Steady", label: "progress for classes and interviews" },
];

const heroSignals = [
  "Move through topics in a calmer order instead of bouncing across random tabs.",
  "Keep quizzes, notes, and mentor guidance close to the subject you are already learning.",
  "Build stronger project and interview confidence with one steady weekly flow.",
];

const flowCards = [
  {
    step: "01",
    title: "Choose a track",
    copy: "Open DSA, Java, frontend, MERN, or core CS with a clear starting point.",
  },
  {
    step: "02",
    title: "Run a quick check",
    copy: "Use short quizzes to see what stayed strong and what needs another round.",
  },
  {
    step: "03",
    title: "Review weak spots",
    copy: "Jump into notes, books, and recall sheets without losing the topic in front of you.",
  },
  {
    step: "04",
    title: "Use mentor context",
    copy: "Bring in stories and guidance when you want practical direction beyond theory.",
  },
];

const heroBoardSignals = [
  {
    label: "One screen",
    value: "Lessons, MCQs, notes, and mentor cues stay connected.",
  },
  {
    label: "Next move",
    value: "The next useful action stays visible instead of getting lost in tabs.",
  },
  {
    label: "Better flow",
    value: "A calmer setup makes revision and interview prep easier to continue.",
  },
];

const heroDashboardTabs = ["Explore", "Build", "Grow"];

export default function Slide() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="surface-card hero-copy-card">
              <span className="section-tag">Learn, Practice, Prepare</span>
              <p className="hero-kicker">
                One focused space for courses, revision support, quizzes, projects, and mentor-backed prep.
              </p>
              <h1 className="hero-title">
                Learn with direction, practice with confidence, and keep every tech goal moving.
              </h1>
              <p className="hero-text">
                ByteBridge brings courses, quick checks, revision support, and
                real-world guidance together so students can stay consistent without
                the clutter of a typical learning portal.
              </p>

              <div className="hero-proof-list">
                {heroSignals.map((signal) => (
                  <div key={signal} className="hero-proof-item">
                    <span className="hero-proof-icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span>{signal}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <Link to="/courses" className="hero-button">
                  Explore Courses
                </Link>
                <Link to="/test" className="ghost-button">
                  Practice Quizzes
                </Link>
              </div>

              <div className="hero-highlights">
                {highlights.map((item) => (
                  <div key={item.label} className="hero-highlight">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="surface-card hero-visual-card">
              <div className="hero-panel hero-dashboard-panel">
                <div className="hero-dashboard-topbar">
                  <span className="hero-panel-badge">ByteBridge</span>
                  <span className="hero-dashboard-status">
                    <span className="hero-dashboard-status-dot"></span>
                    Ideas in motion
                  </span>
                </div>

                <div className="hero-dashboard-intro">
                  <h3>Where bold learning journeys turn into real skills, stronger confidence, and visible progress.</h3>
                  <p>
                    Courses, quick checks, revision notes, and mentor context stay
                    connected so progress feels steady instead of scattered.
                  </p>
                </div>

                <div className="hero-dashboard-window">
                  <div className="hero-dashboard-toolbar">
                    <div className="hero-dashboard-tabs">
                      {heroDashboardTabs.map((tab, index) => (
                        <span
                          key={tab}
                          className={`hero-dashboard-tab ${index === 0 ? "hero-dashboard-tab-active" : ""}`}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                    <span className="hero-dashboard-chip">Open board</span>
                  </div>

                  <div className="hero-dashboard-focus-card">
                    <span className="hero-signal-label">Current focus</span>
                    <strong>ByteBridge keeps learning, practice, and revision moving in one steady flow.</strong>
                    <p>Start with the concept, open quick checks, revisit short notes, and keep building momentum without losing your place.</p>
                  </div>

                  <div className="hero-dashboard-step-grid">
                    {flowCards.map((card) => (
                      <article key={card.step} className="hero-dashboard-step-card">
                        <span className="hero-dashboard-step-count">{card.step}</span>
                        <strong>{card.title}</strong>
                        <p>{card.copy}</p>
                      </article>
                    ))}
                  </div>

                  <div className="hero-dashboard-bottom-grid">
                    {heroBoardSignals.map((item) => (
                      <div key={item.label} className="hero-dashboard-bottom-card">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
