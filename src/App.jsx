import React from 'react';
import NavigationBar from './NavigationBar';
import './Home.css';

const App = () => {
  return (
    <>
      <NavigationBar />
      <section className="home-section">
        <div className="container-fluid">
          <div className="row min-vh-100 align-items-center justify-content-between">
            {/* Text Content */}
            <div className="col-lg-6 col-md-8 order-lg-1 order-2 text-center text-lg-start">
              <div className="hero-content">
                <h2 className="section-subtitle text-uppercase text-primary mb-3">
                  Front-End Developer
                </h2>
                <h1 className="hero-title display-3 fw-bold text-white mb-4">
                  Hi, I'm <span className="highlight">J Aswanth</span> Kumar
                </h1>
                <p className="lead text-light mb-5">
                  Passionate about creating beautiful and responsive web experiences
                </p>
                <div className="cta-container">
                  <button className="btn btn-primary btn-lg me-3 cta-button" >
                    <NavLink  to="/projects">
                View Projects
              </NavLink>
                   
                  </button>
                  <button className="btn btn-outline-light btn-lg cta-button">
  <a href="/J Aswanth Kumar 3_compressed.pdf" download style={{ color: "white", textDecoration: "none" }}>
    Download CV
  </a>
</button>
                </div>
              </div>
            </div>

            {/* Image Container */}
            <div className="col-lg-5 col-md-4 order-lg-2 order-1 text-center">
              <div className="hero-image">
                <img 
                  src="/images/Photo_Ak.jpg" 
                  alt="Aswanth Kumar" 
                  className="img-fluid profile-image"
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