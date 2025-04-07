import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import'./Footer.css'
export default function Footer() {
  return (
    <footer className=" text-white text-center  mt-2">
      <div className="footer-box ">
        <p className="fw-bold">© 2025 J Aswanth Kumar</p>
        <div className="d-flex justify-content-center gap-4 ">
          <a href="https://github.com/Aswanthkumar486/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
            <FaGithub className="me-2" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aswanthkumar05/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
            <FaLinkedin className="me-2" />
            LinkedIn
          </a>
          <a href="mailto:kumaraswanth486@gmail.com" className="text-white text-decoration-none">
            <FaEnvelope className="me-2" />
            Email
          </a>
        </div>
        <p className="fst-italic">Passionate Developer | Always Learning | Building for the Web</p>
      </div>
    </footer>
  );
}
