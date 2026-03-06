import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto w-100">
      <div className="container-fluid px-4">
        <div className="row align-items-center justify-content-between">

          {/* Brand */}
          <div className="col-md-auto mb-3 mb-md-0 d-flex align-items-center">
            <span className="bg-warning text-dark fw-bold px-3 py-2 rounded-circle me-2">J</span>
            <span className="fw-bold fs-6">J. Aswanth Kumar</span>
          </div>

          {/* Social & Contact Icons */}
          <div className="col-md-auto text-md-end d-flex align-items-center justify-content-md-end gap-3">
            <a
              href="https://github.com/Aswanthkumar486"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-5"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aswanthkumar05"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-5"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kumaraswanth486@gmail.com"
              className="text-white fs-5"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="bg-secondary my-3" />

        {/* Copyright */}
        <div className="row">
          <div className="col text-center">
            <small className="text-secondary">
              © {new Date().getFullYear()} J. Aswanth Kumar. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}