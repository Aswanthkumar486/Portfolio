import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto w-100">
      <div className="container-fluid px-4">
        <div className="row align-items-center justify-content-between">
          {/* Brand */}
          <div className="col-md-auto mb-2 mb-md-0 d-flex align-items-center">
            <span className="bg-light text-dark fw-bold px-3 py-2 rounded-circle me-2">D</span>
            <span className="fw-bold fs-6">DevPortfolio</span>
          </div>

          {/* Social Icons */}
          <div className="col-md-auto text-md-end">
            <a href="https://github.com/Aswanthkumar486" target="_blank" rel="noreferrer" className="text-white me-3">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aswanthkumar05" target="_blank" rel="noreferrer" className="text-white me-3">
              <FaLinkedin />
            </a>
            <a href="mailto:aswanthkumar@example.com" className="text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-2">
          <div className="col text-center">
            <small className="text-secondary">© {new Date().getFullYear()} DevPortfolio. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
