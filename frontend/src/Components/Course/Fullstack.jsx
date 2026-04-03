import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Coursestructure from "./Coursestructure";

export default function Fullstack() {
  const courses = [
    {
      readlink: "https://en.wikipedia.org/wiki/html",
      join: "/courses/fullstack/html",
      title: "HTML5 Tutorials",
      teachername: "Rhea Sharma",
      review: 210,
      duration: "3.11 Hrs",
      totalstudent: "50",
      thumbnailLabel: "HTML",
      thumbnailMeta: "Markup foundations",
      thumbnailCopy: "Structure, semantics, forms, and web page basics.",
      thumbGradient:
        "linear-gradient(135deg, rgba(234,88,12,0.15), rgba(255,255,255,0.5))",
      description:
        "Open the HTML subject page to view one-shot video support and key syllabus topics.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/css",
      join: "/courses/fullstack/css",
      title: "CSS Tutorials",
      review: 237,
      teachername: "Kunal Sethi",
      duration: "1.00 Hrs",
      totalstudent: "35",
      thumbnailLabel: "CSS",
      thumbnailMeta: "Styling foundations",
      thumbnailCopy: "Layout, spacing, typography, and responsive styling.",
      thumbGradient:
        "linear-gradient(135deg, rgba(37,99,235,0.14), rgba(255,255,255,0.5))",
      description:
        "A cleaner CSS page with one-shot learning and simple, sober topic cards.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/javascript",
      join: "/courses/fullstack/javascript",
      title: "JavaScript Tutorials",
      review: 174,
      teachername: "Tanya Rao",
      duration: "4.20 Hrs",
      totalstudent: "45",
      thumbnailLabel: "JAVASCRIPT",
      thumbnailMeta: "Logic foundations",
      thumbnailCopy: "Variables, functions, arrays, loops, and browser-side thinking.",
      thumbGradient:
        "linear-gradient(135deg, rgba(202,138,4,0.15), rgba(255,255,255,0.5))",
      description:
        "Includes a direct one-shot JavaScript resource and a simplified topic overview.",
    },
    {
      readlink:
        "https://en.wikipedia.org/wiki/Outline_of_web_design_and_web_development",
      join: "/courses/fullstack/react",
      title: "React Js Tutorials",
      review: 34,
      teachername: "Ishaan Gupta",
      duration: "2.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "REACT",
      thumbnailMeta: "UI development",
      thumbnailCopy: "Components, hooks, state, and reusable frontend architecture.",
      thumbGradient:
        "linear-gradient(135deg, rgba(8,145,178,0.16), rgba(255,255,255,0.5))",
      description:
        "A subject page with a one-shot React video and cleaner module navigation.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/nodejs",
      join: "/courses/fullstack/nodejs",
      title: "Node JS Tutorials",
      review: 88,
      teachername: "Priya Menon",
      duration: "1.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "NODE",
      thumbnailMeta: "Runtime basics",
      thumbnailCopy: "Node runtime, npm, modules, and backend project setup.",
      thumbGradient:
        "linear-gradient(135deg, rgba(21,128,61,0.16), rgba(255,255,255,0.5))",
      description:
        "A cleaner Node.js page with direct one-shot access and syllabus-friendly topic cards.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/sql",
      join: "/courses/fullstack/sql",
      title: "MySQL Tutorials",
      review: 123,
      teachername: "Amit Kulkarni",
      duration: "3.16 Hrs",
      totalstudent: "35",
      thumbnailLabel: "MYSQL",
      thumbnailMeta: "Database track",
      thumbnailCopy: "Queries, joins, tables, and structured data basics.",
      thumbGradient:
        "linear-gradient(135deg, rgba(29,78,216,0.16), rgba(255,255,255,0.5))",
      description:
        "Open a cleaner database page with a one-shot SQL/MySQL video and essential topics.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/mongodb",
      join: "/courses/fullstack/mongodb",
      title: "Mongodb Tutorials",
      review: 98,
      teachername: "Neha Joshi",
      duration: "1.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "MONGODB",
      thumbnailMeta: "NoSQL basics",
      thumbnailCopy: "Documents, CRUD, queries, and Mongoose integration.",
      thumbGradient:
        "linear-gradient(135deg, rgba(4,120,87,0.16), rgba(255,255,255,0.5))",
      description:
        "Open the MongoDB page for a backend one-shot link and key database concepts.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/expressjs",
      join: "/courses/fullstack/express",
      title: "Express Js Tutorials",
      review: 231,
      teachername: "Dev Malhotra",
      duration: "1.30 Hrs",
      totalstudent: "35",
      thumbnailLabel: "EXPRESS",
      thumbnailMeta: "Backend routing",
      thumbnailCopy: "Requests, middleware, routes, and API structure.",
      thumbGradient:
        "linear-gradient(135deg, rgba(55,65,81,0.16), rgba(255,255,255,0.5))",
      description:
        "A simplified Express page with one-shot backend support and core topic coverage.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="section-shell track-page-shell">
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="section-tag">Courses</span>
            <h1 className="section-title">Full Stack Development Course</h1>
            <p className="section-text">
              Work through the modules that connect frontend systems, backend flow,
              databases, and project delivery in one cleaner full stack sequence.
            </p>
          </div>

          <div className="courses-grid track-page-grid">
            {courses.map((course) => (
              <Coursestructure key={course.title} data={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
