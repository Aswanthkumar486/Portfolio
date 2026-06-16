import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <span className="brand-circle">J</span>
            <span className="brand-name">J. Aswanth Kumar</span>
          </div>

          {/* Social & Contact Icons */}
          <div className="footer-social">
            <a
              href="https://github.com/Aswanthkumar486"
              target="_blank"
              rel="noreferrer"
              className="social-link github"
              title="GitHub"
            >
              <FaGithub />
              <span className="social-tooltip">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aswanthkumar05"
              target="_blank"
              rel="noreferrer"
              className="social-link linkedin"
              title="LinkedIn"
            >
              <FaLinkedin />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a
              href="mailto:kumaraswanth486@gmail.com"
              className="social-link email"
              title="Email"
            >
              <FaEnvelope />
              <span className="social-tooltip">Email</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} J. Aswanth Kumar. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with ❤️ using React
          </p>
        </div>
      </div>
    </footer>
  );
}