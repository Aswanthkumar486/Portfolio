import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import './Contact.css';

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
    <div className="containers" style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <NavigationBar />

      <div className="container py-5 text-white">
        <h2 className="text-center mb-4 animate-name">Contact Me</h2>

        <form onSubmit={handleSubmit} className="mx-auto bg-dark p-4 rounded shadow-lg" style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary fw-bold">
              Send Message
            </button>
          </div>
        </form>

        {/* Social Icons */}
        <div className="text-center mt-5">
          <a href="https://github.com/Aswanthkumar486" target="_blank" rel="noopener noreferrer" className="text-light mx-3 fs-4">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aswanthkumar05" target="_blank" rel="noopener noreferrer" className="text-light mx-3 fs-4">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Download CV */}
        <div className="text-center mt-4">
          <a
            href="/J Aswanth Kumar 3_compressed.pdf"
            download
            className="btn btn-success px-4 py-2 fw-bold rounded-pill"
          >
            Download CV
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
