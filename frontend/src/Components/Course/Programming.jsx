import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Coursestructure from "./Coursestructure";
import { quickRevisionResources } from "../../data/learningPlatformData";

export default function Programming() {
  const courses = [
    {
      readlink: "https://en.wikipedia.org/wiki/java",
      join: "/courses/programming/java",
      review: 285,
      title: "Java Full Course",
      teachername: "Aditya Verma",
      duration: "4.50 Hrs",
      totalstudent: "145",
      thumbnailLabel: "JAVA",
      thumbnailMeta: "Core programming",
      thumbnailCopy: "Syntax, OOP, arrays, strings, and logic building.",
      thumbGradient:
        "linear-gradient(135deg, rgba(15,76,129,0.16), rgba(255,255,255,0.5))",
      description:
        "Open the Java page for a direct one-shot resource and cleaner topic grouping.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/Advance_java",
      join: "/courses/programming/advJava",
      review: 156,
      title: "Advance Java",
      teachername: "Kavya Iyer",
      duration: "4.13 Hrs",
      totalstudent: "75",
      thumbnailLabel: "ADV JAVA",
      thumbnailMeta: "Backend Java",
      thumbnailCopy: "JDBC, servlets, JSP, and enterprise Java basics.",
      thumbGradient:
        "linear-gradient(135deg, rgba(22,101,52,0.16), rgba(255,255,255,0.5))",
      description:
        "A calmer advanced Java page with one-shot support and cleaner topic cards.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/JavaScript",
      join: "/courses/programming/javascript",
      review: 115,
      title: "JavaScript Tutorials",
      teachername: "Rahul Soni",
      duration: "4.50 Hrs",
      totalstudent: "135",
      thumbnailLabel: "JAVASCRIPT",
      thumbnailMeta: "Frontend logic",
      thumbnailCopy: "Variables, arrays, loops, functions, and browser-first logic.",
      thumbGradient:
        "linear-gradient(135deg, rgba(202,138,4,0.16), rgba(255,255,255,0.5))",
      description:
        "Includes a one-shot JavaScript link and a simpler subject thumbnail.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/nodejs",
      join: "/courses/mern/nodejs",
      review: 85,
      title: "Node JS Tutorials",
      teachername: "Nisha Batra",
      duration: "1.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "NODE",
      thumbnailMeta: "Runtime basics",
      thumbnailCopy: "npm, modules, and backend project foundations.",
      thumbGradient:
        "linear-gradient(135deg, rgba(21,128,61,0.16), rgba(255,255,255,0.5))",
      description:
        "Open a Node.js page with one-shot backend support and a more sober layout.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="section-shell track-page-shell">
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="section-tag">Courses</span>
            <h1 className="section-title">Programming Languages Hub</h1>
            <p className="section-text">
              Study the core language modules first, then use the revision resources
              below when you want a faster refresher before interviews and assessments.
            </p>
          </div>

          <div className="courses-grid track-page-grid">
            {courses.map((course) => (
              <Coursestructure key={course.title} data={course} />
            ))}
          </div>

          <div className="section-heading section-heading-split">
            <div>
              <span className="section-tag">Quick Revision Resources</span>
              <h2 className="section-title">Free refreshers for the language side of placement prep</h2>
            </div>
            <p className="section-text">
              Use these cards when you want a faster revision cycle before coding rounds,
              technical interviews, or language-focused assessments.
            </p>
          </div>

          <div className="resource-card-grid">
            {quickRevisionResources.map((resource) => (
              <article
                key={resource.title}
                className={`resource-card ${resource.tone ? `resource-card--${resource.tone}` : ""}`}
              >
                <div className="resource-card-header">
                  <div className="resource-card-topline">
                    <span className="resource-platform-chip">{resource.access}</span>
                    <span className="resource-focus-chip">{resource.focus}</span>
                  </div>
                  <h3>{resource.title}</h3>
                </div>
                <p>{resource.description}</p>
                <div className="resource-link-row">
                  {resource.links?.map((link) => (
                    link.to ? (
                      <Link key={link.label} to={link.to} className="resource-link-button">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="resource-link-button"
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
