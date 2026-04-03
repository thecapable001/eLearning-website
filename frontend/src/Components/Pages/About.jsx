import React from "react";

const metrics = [
  { value: "Connected", label: "tracks, notes, quizzes, and revision stay linked" },
  { value: "Clearer", label: "move from concept to practice without random tab switching" },
  { value: "Project-aware", label: "leave room for building, experimenting, and growing" },
  { value: "Easy to revisit", label: "important material stays easier to find later" },
];

export default function AboutSection() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="about-grid">
          <div className="about-story-card">
            <span className="section-tag">Why ByteBridge</span>
            <h2 className="section-title">
              Built for real tech learning: limited time, scattered resources, and too much tab switching.
            </h2>
            <p className="section-text">
              Students usually jump across scattered PDFs, revision playlists, random
              notes, and quiz portals. ByteBridge reduces that chaos into one cleaner
              system where theory, revision, projects, and interview practice stay
              connected.
            </p>

            <div className="about-stats">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-list-card">
            <h3>Why the experience feels better</h3>
            <p>
              The platform is shaped around how students actually prepare, not how generic
              e-learning templates usually look.
            </p>
            <ul className="about-list">
              <li>
                <div>
                  <strong>Study mode and revision mode stay connected</strong>
                  <p>Open the topic, jump into the quiz, then move to the library without losing momentum.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Core interview subjects are visible from the homepage</strong>
                  <p>DSA, OOP, DBMS, OS, CN, and language prep are treated as first-class tracks.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>The design pushes momentum, not clutter</strong>
                  <p>Cleaner cards, smarter hierarchy, and stronger color balance make the platform feel intentional.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
