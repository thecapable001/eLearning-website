import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStoredSession, loginUser } from "../../api/authService";

export default function Sign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (getStoredSession()) {
      navigate("/profile", { replace: true });
    }
  }, [navigate]);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(formData);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-shell">
      <div className="container">
        <div className="auth-card-grid">
          <div className="auth-side-panel">
            <span className="section-tag">Welcome Back</span>
            <h1 className="section-title">Sign in and continue learning without friction.</h1>
            <p className="section-text">
              Access your courses, topic pages, developer references,
              and placement-focused study flow from one clean dashboard.
            </p>

            <div className="auth-points">
              <div className="auth-point">
                <strong>Resume faster</strong>
                <span>Open your saved study space and continue where you left off.</span>
              </div>
              <div className="auth-point">
                <strong>Use simple access</strong>
                <span>Your account works with backend auth when available and local fallback when needed.</span>
              </div>
            </div>
          </div>

          <div className="auth-form-panel">
            <div className="auth-form-head">
              <h2>Login to ByteBridge</h2>
              <p>Use your email and password to open your student space.</p>
            </div>

            {error ? <div className="auth-alert">{error}</div> : null}

            <form onSubmit={handleSubmit} className="auth-form-grid">
              <div className="form-field-full">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-field-full">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-field-full">
                <button type="submit" className="btn btn-primary w-100 py-3" disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            <p className="auth-switch">
              Don&apos;t have an account? <Link to="/register">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
