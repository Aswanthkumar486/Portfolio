import React from "react";
import NavigationBar from "./NavigationBar";
import { NavLink } from "react-router-dom";
import "./Home.css";
import resume from "./assets/AswanthRes.pdf";
import profileImg from "../images/Photo_Ak.jpg";

const Home = () => {
  return (
    <>
      <NavigationBar />

      <section className="home-section container-fluid py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between min-vh-100">

            {/* Left Content */}
            <div className="col-lg-6 col-md-7 text-center text-lg-start mb-5 mb-lg-0">
              <div className="hero-content">

                <div className="badge-container mb-3">
                  <span className="badge-pulse">
                    🚀 Open to Full Stack & Frontend Opportunities
                  </span>
                </div>

                <h5 className="text-uppercase text-primary fw-semibold mb-3">
                  Full Stack Developer
                </h5>

                <h1 className="display-3 fw-bold text-white mb-3">
                  Hi, I'm{" "}
                  <span className="gradient-text">
                    J. Aswanth Kumar
                  </span>
                </h1>

                <h3 className="text-info mb-4">
                  React.js • Node.js • MySQL • MongoDB
                </h3>

                <p className="lead text-light mb-4">
                  Full Stack Developer with internship experience building
                  scalable web applications using React.js, Node.js,
                  Express.js, MySQL, and MongoDB.
                  Passionate about developing responsive, user-friendly
                  applications and solving real-world business problems.
                </p>

                {/* Buttons */}
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">

                  <NavLink
                    to="/projects"
                    className="btn btn-primary btn-lg"
                  >
                    🚀 View Projects
                  </NavLink>

                  <a
                    href={resume}
                    download="Aswanth_Kumar_Resume.pdf"
                    className="btn btn-outline-light btn-lg"
                  >
                    📄 Download Resume
                  </a>

                </div>

                {/* Social Links */}
                <div className="mt-4">

                  <a
                    href="https://github.com/Aswanthkumar486"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark me-2"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    LinkedIn
                  </a>

                </div>

                {/* Stats */}
                <div className="social-stats mt-5">

                  <div className="stat-item">
                    <h2>8+</h2>
                    <p>REST APIs Built</p>
                  </div>

                  <div className="stat-item">
                    <h2>2+</h2>
                    <p>Projects Completed</p>
                  </div>

                  <div className="stat-item">
                    <h2>1</h2>
                    <p>Internship</p>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-5 text-center">
              <div className="hero-image-container">

                <img
                  src={profileImg}
                  alt="J Aswanth Kumar"
                  className="img-fluid profile-image"
                />

                <div className="floating-badge top-right">
                  ⚛️ React.js
                </div>

                <div className="floating-badge bottom-left">
                  🚀 MERN Stack
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;