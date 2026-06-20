import React from "react";

const Contact = () => {
  return (
    <div className="page contact-page">
      <h1 className="title">Contact Me</h1>

      <div className="contact-card">
        <p>I’m open to internships and collaborations.</p>

        <div className="contact-links">
          <a href="mailto:sahana@example.com">📧 Email</a>
          <a href="https://linkedin.com/in/sahana" target="_blank" rel="noreferrer">
            💼 LinkedIn
          </a>
          <a href="https://twitter.com/sahana" target="_blank" rel="noreferrer">
            🐦 Twitter
          </a>
        </div>

        <p className="quote">“Turning curiosity into code.”</p>
        <p className="thanks">Thanks for visiting my portfolio.</p>
      </div>
    </div>
  );
};

export default Contact;