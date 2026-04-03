import React from "react";
import { Link } from "react-router-dom";

function createCompactLabel(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.replace(/[^A-Za-z]/g, "").slice(0, 4).toUpperCase())
    .join(" ");
}

function renderActionLink(link, className) {
  if (!link) {
    return null;
  }

  if (link.to) {
    return (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} target="_blank" rel="noreferrer" className={className}>
      {link.label}
    </a>
  );
}

export default function Coursestructure({ data }) {
  const metaItems =
    data.metaItems?.filter(Boolean) ||
    [
      data.teachername
        ? { icon: "far fa-user", label: data.teachername }
        : null,
      data.duration ? { icon: "far fa-clock", label: data.duration } : null,
    ].filter(Boolean);

  const primaryAction = data.join
    ? { to: data.join, label: data.joinLabel || "Open module" }
    : null;

  const secondaryAction = data.readTo
    ? { to: data.readTo, label: data.readLabel || "Reference" }
    : data.readlink
      ? { href: data.readlink, label: data.readLabel || "Reference" }
      : null;

  return (
    <article className="course-card-modern">
      <div
        className="course-media course-thumb"
        style={{
          background:
            data.thumbGradient ||
            "linear-gradient(135deg, rgba(37, 99, 235, 0.16), rgba(20, 184, 166, 0.14))",
        }}
      >
        <div className="course-thumb-topline">
          <span className="course-thumb-tag">
            {data.thumbnailMeta || "Course lane"}
          </span>
          <span className="course-review-chip">
            <i className="fas fa-star"></i>
            {data.review}+ reviews
          </span>
        </div>

        <div className="course-thumb-content">
          <strong>{data.thumbnailLabel || createCompactLabel(data.title)}</strong>
          <p>
            {data.thumbnailCopy ||
              "Simple subject overview with curated resources."}
          </p>
        </div>
      </div>

      <div className="course-body">
        {metaItems.length > 0 ? (
          <div className="course-meta">
            {metaItems.map((item) => (
              <span key={`${item.label}-${item.icon || "meta"}`}>
                {item.icon ? <i className={`${item.icon} me-2`}></i> : null}
                {item.label}
              </span>
            ))}
          </div>
        ) : null}

        <h3 className="course-title">{data.title}</h3>
        <p className="course-description">
          {data.description ||
            "Open a cleaner subject page with a curated one-shot resource and key topics."}
        </p>

        {data.topics?.length ? (
          <div className="course-topic-group">
            <span className="course-topic-label">Key topics covered</span>
            <div className="course-topic-list">
              {data.topics.map((topic) => (
                <span key={topic} className="course-topic-chip">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {data.resourceLinks?.length ? (
          <div className="course-resource-group">
            <span className="course-topic-label">Helpful resources</span>
            <div className="course-link-cluster">
              {data.resourceLinks.map((link) => (
                <React.Fragment key={link.label}>
                  {renderActionLink(link, "course-inline-link")}
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {primaryAction || secondaryAction || data.totalstudent ? (
        <div className="course-footer">
          <div className="course-stat">
            {data.totalstudent ? <strong>{data.totalstudent}</strong> : null}{" "}
            {data.totalstudent
              ? data.studentLabel || "learners"
              : data.footnote || "Course study flow"}
          </div>
          <div className="course-actions">
            {secondaryAction ? renderActionLink(secondaryAction, "ghost-button px-3") : null}
            {primaryAction ? renderActionLink(primaryAction, "hero-button px-3") : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
