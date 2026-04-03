import React from "react";

function compactLabel(title) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

export default function Coursecart({ index, title, desc, accent, softAccent }) {
  const itemNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="topic-card-modern">
      <div
        className="topic-thumbnail"
        style={{
          background: `linear-gradient(135deg, ${softAccent}, rgba(255,255,255,0.9))`,
          borderColor: `${accent}22`,
        }}
      >
        <span className="topic-kicker">Topic {itemNumber}</span>
        <strong>{compactLabel(title)}</strong>
      </div>

      <div className="topic-card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  );
}
