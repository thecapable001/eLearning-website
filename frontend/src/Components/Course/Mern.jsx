import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Coursestructure from "./Coursestructure";

export default function Mern() {
  const courses = [
    {
      readlink:
        "https://en.wikipedia.org/wiki/Outline_of_web_design_and_web_development",
      join: "/courses/mern/react",
      review: 285,
      title: "React Js Tutorials",
      teachername: "Aarav Mehta",
      duration: "1.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "REACT",
      thumbnailMeta: "Frontend layer",
      thumbnailCopy: "Components, hooks, state, and modern UI building.",
      thumbGradient:
        "linear-gradient(135deg, rgba(8,145,178,0.16), rgba(255,255,255,0.5))",
      description:
        "Includes a one-shot React video link and a calmer topic layout.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/mongodb",
      join: "/courses/mern/mongodb",
      review: 156,
      title: "Mongodb Tutorials",
      teachername: "Meera Nair",
      duration: "1.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "MONGODB",
      thumbnailMeta: "Database layer",
      thumbnailCopy: "Documents, CRUD, schema work, and backend integration.",
      thumbGradient:
        "linear-gradient(135deg, rgba(4,120,87,0.16), rgba(255,255,255,0.5))",
      description:
        "Open the course page for a direct one-shot backend resource and topic overview.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/expressjs",
      join: "/courses/mern/express",
      review: 115,
      title: "Express Js Tutorials",
      teachername: "Rohit Verma",
      duration: "1.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "EXPRESS",
      thumbnailMeta: "API layer",
      thumbnailCopy: "Routing, middleware, and request-response handling.",
      thumbGradient:
        "linear-gradient(135deg, rgba(55,65,81,0.16), rgba(255,255,255,0.5))",
      description:
        "A simplified Express page with one-shot support for backend revision.",
    },
    {
      readlink: "https://en.wikipedia.org/wiki/nodejs",
      join: "/courses/mern/nodejs",
      review: 85,
      title: "Node JS Tutorials",
      teachername: "Sneha Kapoor",
      duration: "1.50 Hrs",
      totalstudent: "35",
      thumbnailLabel: "NODE",
      thumbnailMeta: "Runtime layer",
      thumbnailCopy: "npm, modules, process flow, and backend setup basics.",
      thumbGradient:
        "linear-gradient(135deg, rgba(21,128,61,0.16), rgba(255,255,255,0.5))",
      description:
        "Opens a cleaner Node.js subject page with one-shot video access and topic cards.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="section-shell track-page-shell">
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="section-tag">Courses</span>
            <h1 className="section-title">MERN Stack Course</h1>
            <p className="section-text">
              Use these modules when you want a stronger project pipeline across React,
              APIs, Node runtime basics, and MongoDB-backed backend work.
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
