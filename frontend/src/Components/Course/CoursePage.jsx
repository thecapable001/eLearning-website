import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Coursecart from "./Coursecart";

function normalizeVideoId(url) {
  const patterns = [
    /v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /live\/([^?]+)/,
    /embed\/([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return "";
}

export default function CoursePage({ course }) {
  const videoId = normalizeVideoId(course.oneShot.url);
  const previewUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  const palette = {
    "--subject-primary": course.palette.primary,
    "--subject-soft": course.palette.soft,
    "--subject-ink": course.palette.ink,
  };

  return (
    <>
      <Navbar />

      <section className="section-shell subject-shell">
        <div className="container">
          <div className="subject-hero-grid">
            <div className="subject-hero-card" style={palette}>
              <span className="section-tag">{course.badge}</span>
              <h1 className="section-title">{course.title}</h1>
              <p className="section-text">{course.summary}</p>

              <div className="subject-cta-row">
                <a
                  href={course.oneShot.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-button"
                >
                  Watch One-Shot
                </a>
                <a href="#topic-grid" className="ghost-button">
                  View Key Topics
                </a>
              </div>

              <div className="subject-pillars">
                {course.outcomes.map((item) => (
                  <div key={item} className="subject-pill">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="subject-visual-card" style={palette}>
              <div className="subject-thumbnail-card">
                <span className="subject-thumbnail-label">{course.thumbnailLabel}</span>
                <strong>{course.shortTitle}</strong>
                <p>{course.thumbnailCopy}</p>
              </div>

              <a
                href={course.oneShot.url}
                target="_blank"
                rel="noreferrer"
                className="subject-video-card"
              >
                <div className="subject-video-preview">
                  {previewUrl ? (
                    <img src={previewUrl} alt={`${course.shortTitle} one-shot preview`} />
                  ) : (
                    <div className="subject-video-fallback">{course.thumbnailLabel}</div>
                  )}
                </div>
                <div className="subject-video-body">
                  <span className="subject-video-tag">Revision One-Shot</span>
                  <h2>{course.oneShot.title}</h2>
                  <p>
                    {course.oneShot.channel} | {course.oneShot.duration}
                  </p>
                </div>
              </a>
            </aside>
          </div>

          <div className="subject-section-head">
            <span className="section-tag">Learning Path</span>
            <h2 className="section-title">What you will cover</h2>
            <p className="section-text">
              These topic cards keep the syllabus easy to scan before jumping into the
              full one-shot resource.
            </p>
          </div>

          <div id="topic-grid" className="subject-topics-grid">
            {course.topics.map((topic, index) => (
              <Coursecart
                key={topic.title}
                index={index}
                title={topic.title}
                desc={topic.desc}
                accent={course.palette.primary}
                softAccent={course.palette.soft}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
