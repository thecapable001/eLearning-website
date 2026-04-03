import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import {
  API_BASE_URL,
  DEFAULT_FEEDBACK_AVATAR,
} from "../../api/appConfig";

const INITIAL_FORM_STATE = {
  name: "",
  comment: "",
  image: "",
  rating: 4,
};

const FEEDBACK_URL = `${API_BASE_URL}/feedback`;

export default function FeedbackAll() {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [error, setError] = useState("");

  const fetchFeedback = React.useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(FEEDBACK_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load feedback.");
      }

      setFeedbackData(Array.isArray(data) ? data : []);
    } catch (fetchError) {
      setError(fetchError.message || "Unable to load feedback.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setFormMessage("");
      setError("");

      const response = await fetch(FEEDBACK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit feedback.");
      }

      setFormState(INITIAL_FORM_STATE);
      setFormMessage(data.message || "Feedback submitted successfully.");
      await fetchFeedback();
    } catch (submitError) {
      setError(submitError.message || "Unable to submit feedback.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (feedbackId) => {
    try {
      const response = await fetch(`${FEEDBACK_URL}/${feedbackId}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to remove feedback.");
      }

      setFeedbackData((current) =>
        current.filter((feedback) => feedback._id !== feedbackId)
      );
    } catch (deleteError) {
      setError(deleteError.message || "Unable to remove feedback.");
    }
  };

  function formatDate(date) {
    return date.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <>
      <Navbar />
      <Header name="Feedbacks" />

      <div className="container mt-4">
        <div className="row mt-4 wow fadeInUp" data-wow-delay="0.3s">
          <h1 className="text-center">Give your Feedback</h1>

          <form
            onSubmit={handleSubmit}
            className="col-md-6 offset-md-3 mb-4 wow fadeInUp"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                id="feedbackName"
                placeholder="John Deo"
                value={formState.name}
                onChange={handleFieldChange}
                required
              />
              <label htmlFor="feedbackName">Name</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                name="comment"
                className="form-control"
                id="feedbackComment"
                placeholder="Enter Your Feedback"
                style={{ height: "100px" }}
                value={formState.comment}
                onChange={handleFieldChange}
                required
              ></textarea>
              <label htmlFor="feedbackComment">Comment</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="image"
                className="form-control"
                id="feedbackImage"
                placeholder="Enter Your Image URL"
                value={formState.image}
                onChange={handleFieldChange}
              />
              <label htmlFor="feedbackImage">Image Url</label>
            </div>

            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={formState.rating}
              onChange={(_, newValue) => {
                setFormState((current) => ({
                  ...current,
                  rating: newValue || 1,
                }));
              }}
            />

            <br />
            <button className="btn btn-primary" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
            <hr />

            {formMessage ? (
              <div className="alert alert-success">{formMessage}</div>
            ) : null}
            {error ? <div className="alert alert-danger">{error}</div> : null}
          </form>
        </div>

        <div className="text-center wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            All Feedbacks of Users
          </h6>
          <h1 className="mb-5">All Feedbacks</h1>
        </div>
      </div>

      <div className="row offset-md-2">
        {loading ? (
          <div className="col-12 text-center mb-4">
            <p>Loading feedback...</p>
          </div>
        ) : null}

        {!loading && !feedbackData.length ? (
          <div className="col-12 text-center mb-4">
            <p>No feedback has been added yet.</p>
          </div>
        ) : null}

        {feedbackData.map((feedback) => (
          <div
            key={feedback._id}
            className="col-md-5 ms-2 mt-3 card mb-3 pl-2 wow fadeInUp"
            style={{ maxWidth: "540px" }}
            data-wow-delay="0.3s"
          >
            <button
              type="button"
              className="btn btn-link text-danger position-absolute top-0 end-0 text-decoration-none"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(feedback._id)}
              aria-label={`Delete feedback from ${feedback.name}`}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="row g-0">
              <div className="col-md-3 mt-3">
                <img
                  style={{ width: "6rem", height: "6rem", objectFit: "cover" }}
                  src={feedback.image || DEFAULT_FEEDBACK_AVATAR}
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt={feedback.name}
                />
              </div>
              <div className="col-md-8">
                <p className="card-text mb-0 ps-3">
                  <small className="text-body-secondary">
                    {formatDate(new Date(feedback.date))}
                  </small>
                </p>
                <div className="card-body pt-0 mt-0">
                  <p className="card-text p-0 fw-bold">{feedback.name}</p>
                  <p className="card-text">{feedback.comment}</p>
                  <Rating name={`read-only-${feedback._id}`} value={feedback.rating} readOnly />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
