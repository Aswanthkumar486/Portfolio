import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import './Contact.css';
import resume from './assets/AswanthRes.pdf';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <NavigationBar />

      <div className="contact-container">
        <div className="container">
          <div className="contact-header">
            <div className="badge-container mb-3">
              <span className="badge-pulse">📬 Get in Touch</span>
            </div>
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-subtitle">
              Have a question or want to work together? Let's connect!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-card">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Write your message here..."
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    <span className="btn-icon">✉️</span> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Social Icons & CV */}
          <div className="contact-footer">
            <div className="social-links">
              <a 
                href="https://github.com/Aswanthkumar486" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/aswanthkumar05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            <a
              href={resume}
              download="ak_res.pdf"
              className="cv-btn"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}