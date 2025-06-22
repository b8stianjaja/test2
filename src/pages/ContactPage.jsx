// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import './ContactPage.css'; // Create this new CSS file

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend or email service.
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Optionally reset form:
    // setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container contact-page">
      <h1 className="page-title">Reach into the Aether</h1>

      <section className="contact-intro">
        <p>
          Have questions, custom requests, or just want to connect? Send a whisper through the digital winds.
        </p>
      </section>

      {isSubmitted ? (
        <div className="submission-success">
          <p>Thank you! Your message has been sent into the echoes. We'll respond as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="cta-button submit-button">Send Whisper</button>
        </form>
      )}

      <section className="alternative-contact">
        <h3>Other Ways to Connect</h3>
        <p>Email directly at: <a href="mailto:yourartistemail@example.com" className="inline-link">yourartistemail@example.com</a></p>
        {/* Add links to social media DMs if applicable */}
      </section>
    </div>
  );
}
export default ContactPage;