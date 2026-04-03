import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  HCAPTCHA_SITE_KEY,
  WEB3FORMS_ACCESS_KEY,
} from "../../api/appConfig";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [captchaToken, setCaptchaToken] = React.useState("");

  const onHCaptchaChange = (token) => {
    setCaptchaToken(token || "");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    if (captchaToken) {
      formData.append("h-captcha-response", captchaToken);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully.");
      event.target.reset();
      setCaptchaToken("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="section-shell">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-stack">
            <div className="contact-card">
              <span className="section-tag">Contact</span>
              <h2 className="section-title">Talk to the ByteBridge team</h2>
              <p>
                Reach out for platform feedback, project guidance, collaboration, or
                help with academic and placement-focused learning resources.
              </p>
              <div className="contact-mini-list">
                <div className="contact-mini-item">
                  <strong>Team</strong>
                  <span>ByteBridge, PSIT Kanpur</span>
                </div>
                <div className="contact-mini-item">
                  <strong>Phone</strong>
                  <span>+91 9555926460</span>
                </div>
                <div className="contact-mini-item">
                  <strong>Email</strong>
                  <span>samarth1111saxena@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3>Visit the campus location</h3>
              <iframe
                title="PSIT Kanpur Location"
                className="w-100 rounded-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57155.07141399976!2d80.12246805820313!3d26.449540499999987!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c49fa39cfefaf%3A0x1716805077816869!2sPranveer%20Singh%20Institute%20of%20Technology%2C%20PSIT%20Kanpur!5e0!3m2!1sen!2sin!4v1761395612499!5m2!1sen!2sin"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="surface-card contact-form-card">
            <h3 className="mb-3">Send a message</h3>
            <p className="section-text mb-4">
              Share your question and the team will get back to you through the
              contact workflow configured for this project.
            </p>

            <form onSubmit={onSubmit}>
              <input type="hidden" name="from_name" value="ByteBridge" />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Contact Page"
              />

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" id="name" required />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-field-full">
                  <label htmlFor="phone">Mobile Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-field-full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"></textarea>
                </div>

                <div className="form-field-full">
                  <HCaptcha
                    sitekey={HCAPTCHA_SITE_KEY}
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                  />
                </div>

                <div className="form-field-full">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            {result ? <div className="form-status">{result}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
