import React from "react";

const testimonials = [
  {
    name: "Aarav Singh",
    role: "Final-year CSE Student",
    quote:
      "ByteBridge feels less like browsing random resources and more like following one steady system for study, revision, and interview prep.",
  },
  {
    name: "Priya Sharma",
    role: "MCA Learner",
    quote:
      "I liked that I could move from concept to quiz to notes in minutes. The flow feels much more purposeful than a typical learning portal.",
  },
  {
    name: "Rohit Verma",
    role: "Placement Aspirant",
    quote:
      "The platform makes preparation feel lighter because the important subjects and practice blocks are visible from the start.",
  },
];

export default function Testimonial() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: 760 }}>
          <span className="section-tag">Student Voice</span>
          <h2 className="section-title">Students remember platforms that reduce friction</h2>
          <p className="section-text">
            The strongest feedback is consistent: learners want one focused space
            that helps them learn, revise, practice, and prepare without switching context.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <div className="testimonial-rating">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <p className="testimonial-copy">"{testimonial.quote}"</p>
              <div className="testimonial-person">
                <div>
                  <strong>{testimonial.name}</strong>
                  <div className="section-text">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
