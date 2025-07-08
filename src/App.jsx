import React from 'react';
import NavigationBar from './NavigationBar';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
import profileImg from '../images/Photo_Ak.jpg'
const App = () => {
  return (
    <>
      <NavigationBar />
      <section className="home-section container-fluid py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between min-vh-100">

            {/* 👤 Text Content */}
            <div className="col-lg-6 col-md-7 text-center text-lg-start mb-5 mb-lg-0">
              <div className="hero-content">
                <h5 className="text-uppercase text-primary fw-semibold mb-3">
                  Front-End Developer
                </h5>
                <h1 className="display-4 fw-bold text-white mb-4">
                  Hi, I'm <span className="text-warning">J Aswanth</span> Kumar
                </h1>
                <p className="lead text-light mb-4">
                  Passionate about building modern, responsive, and engaging web experiences.
                </p>

                {/* CTA Buttons */}
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                  <NavLink to="/projects" className="btn btn-primary btn-lg px-4">
                    View Projects
                  </NavLink>
                  <a
                    href="/J Aswanth Kumar 3_compressed.pdf"
                    download
                    className="btn btn-outline-light btn-lg px-4"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* 📷 Hero Image */}
            <div className="col-lg-5 col-md-5 text-center">
              <div className="hero-image">
                <img
                  src={profileImg}
                  alt="J Aswanth Kumar"
                  className="img-fluid rounded-circle shadow-lg border border-3 border-light"
                  style={{ maxWidth: '350px', height: 'auto' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
   
    </>
  );
};

export default App;
