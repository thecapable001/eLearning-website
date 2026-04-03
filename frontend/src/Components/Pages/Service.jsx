import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    to: "/test",
    title: "Assessment Hub",
    description:
      "Practice DSA, OOP, DBMS, OS, CN, Java, React, and web rounds in one cleaner mock-test flow.",
    icon: "fa-bolt",
    badge: "Focused assessments",
    accent: "linear-gradient(135deg, rgba(45,108,223,0.14), rgba(90,169,230,0.22))",
  },
  {
    to: "/courses",
    title: "Courses",
    description:
      "Move from fundamentals to projects with tracks that connect learning, revision, and interview support instead of keeping them separate.",
    icon: "fa-layer-group",
    badge: "Frontend to backend tracks",
    accent: "linear-gradient(135deg, rgba(29,78,216,0.14), rgba(56,189,248,0.18))",
  },
  {
    to: "/library",
    title: "Reference Library",
    description:
      "Use books, quick notes, cheatsheets, and revision-ready PDFs without hunting across multiple websites at the last minute.",
    icon: "fa-book-open",
    badge: "Books + notes + quick recall",
    accent: "linear-gradient(135deg, rgba(244,163,97,0.18), rgba(251,191,36,0.22))",
  },
  {
    to: "/team",
    title: "Mentor Guide",
    description:
      "Read public interview stories, spot useful preparation patterns, and open direct mentor links when you want practical guidance.",
    icon: "fa-user-graduate",
    badge: "Stories + guidance + connect",
    accent: "linear-gradient(135deg, rgba(79,70,229,0.14), rgba(165,180,252,0.22))",
  },
];

export default function Service() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: 760 }}>
          <span className="section-tag">Platform Highlights</span>
          <h2 className="section-title">Designed for how students actually study today</h2>
          <p className="section-text">
            The platform combines study material, guided practice, assessments, and
            academic support into a single experience that feels simple, modern, and
            closer to a real developer workflow.
          </p>
        </div>

        <div className="feature-grid mt-5">
          {services.map((service) => (
            <Link key={service.title} to={service.to} className="feature-card">
              <div className="feature-icon" style={{ background: service.accent }}>
                <i className={`fas ${service.icon}`}></i>
              </div>
              <span className="feature-badge">{service.badge}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="feature-link">Explore feature</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
