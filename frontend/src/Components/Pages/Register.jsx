import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStoredSession, registerUser } from "../../api/authService";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      setError("Passwords do not match.");
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/profile");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-shell">
      <div className="container">
        <div className="auth-card-grid">
          <div className="auth-side-panel">
            <span className="section-tag">New Student Access</span>
            <h1 className="section-title">Create your account and start using the platform right away.</h1>
            <p className="section-text">
              Registration now signs you in automatically, so students can go straight
              from account creation to courses, videos, and developer
              reference material.
            </p>

            <div className="auth-points">
              <div className="auth-point">
                <strong>Fast onboarding</strong>
                <span>Create an account in one step and land directly in your dashboard.</span>
              </div>
              <div className="auth-point">
                <strong>Smoother access</strong>
                <span>The app now handles backend auth and local fallback more gracefully.</span>
              </div>
            </div>
          </div>

          <div className="auth-form-panel">
            <div className="auth-form-head">
              <h2>Create Account</h2>
              <p>Register once and begin using ByteBridge immediately.</p>
            </div>

            {error ? <div className="auth-alert">{error}</div> : null}

            <form onSubmit={handleSubmit} className="auth-form-grid">
              <div className="form-field-full">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

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

              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Minimum 6 characters"
                />
              </div>

              <div className="form-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Repeat your password"
                />
              </div>

              <div className="form-field-full">
                <button type="submit" className="btn btn-primary w-100 py-3" disabled={loading}>
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </div>
            </form>

            <p className="auth-switch">
              Already have an account? <Link to="/signin">Sign in here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
