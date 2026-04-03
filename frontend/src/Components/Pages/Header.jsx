import React from "react";
import { Link } from "react-router-dom";

export default function Header({ name }) {
  return (
    <section className="page-header-modern">
      <div className="container">
        <div className="page-header-card">
          <span className="section-tag">ByteBridge Page</span>
          <h1>{name}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb-modern">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>{name}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
