import React from 'react';
import NavigationBar from './NavigationBar';

export default function About() {
  const skills = [
    { name: 'React.js', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Next.js', level: 80 },
    { name: 'Bootstrap', level: 92 },
    { name: 'SQL', level: 75 },
  ];

  const educationItems = [
    {
      degree: 'B.Sc in Information Technology',
      institution: 'Syed Ammal Arts & Science College',
      period: '2021 – 2024',
      details: 'Graduated with 77% (First Class), specialized in web technologies and software development principles',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'National Academy',
      details: 'Completed with focus on Computer Science fundamentals',
    },
  ];

  const experiences = [
    {
      title: 'Front-End Development Projects',
      period: '2025 - Present',
      details: 'Worked on:',
       projects: [
      '🛰️ Weather App using OpenWeather API - Displays real-time weather info',
      '🛍️ LuxeNex E-commerce Template - Static store built with Bootstrap & Next.js',
      '🧳 Premium Travel Website - Multi-section static page using Tailwind + Next.js',
      
      '👤 Developer Portfolio - Responsive React + Bootstrap personal site',
      
    ],
    },
    {
      title: 'Open Source Contributions',
      period: '2024 - Present',
      details: 'Contributed to open-source UI libraries and documentation fixes.',
    },
  ];

  return (
    <>
      <NavigationBar />
      
      <section className="py-5 bg-dark text-white min-vh-100 d-flex align-items-center">
        <div className="container">
          {/* Intro */}
          <div className="mb-5 text-center">
            <h1 className="display-5 fw-bold">
              Hello, I'm <span className="text-primary">Aswanth</span> 
            </h1>
            <p className="lead mb-4">
              A passionate <span className="fw-bold text-decoration-underline">Front-End Developer</span> crafting modern web experiences
            </p>
   
      <p className="mb-5 text-center text-wrap">
        Hello! I'm <strong>J Aswanth Kumar</strong>, a passionate and dedicated <strong>Front-End Developer</strong> with a strong foundation in modern web technologies. I enjoy building user-friendly, visually appealing, and responsive websites that deliver great user experiences.
      </p>
 

            </div>

          {/* Skills */}
          <div className="mb-5">
            <h4 className="mb-4 fw-bold border-bottom border-primary pb-2 d-inline-block">Technical Skills</h4>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className="badge bg-primary bg-opacity-25 text-primary rounded-pill px-3 py-2 fs-6"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-medium">{skill.name}</span>
                      <span className="text-white-50">{skill.level}%</span>
                    </div>
                    <div className="progress bg-dark bg-opacity-50" style={{ height: '10px' }}>
                      <div 
                        className="progress-bar bg-primary" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience Carousel */}
          <div className="mb-5">
            <h4 className="mb-4 text-center fw-bold border-bottom border-primary pb-2 d-inline-block mx-auto">📚 My Journey</h4>

            <div id="journeyCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button 
                  type="button" 
                  data-bs-target="#journeyCarousel" 
                  data-bs-slide-to="0" 
                  className="active bg-primary"
                  aria-current="true" 
                  aria-label="Education"
                ></button>
                <button 
                  type="button" 
                  data-bs-target="#journeyCarousel" 
                  data-bs-slide-to="1" 
                  className="bg-primary"
                  aria-label="Experience"
                ></button>
              </div>

              <div className="carousel-inner">
                {/* Slide 1: Education */}
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="d-flex justify-content-center">
                    <div className="bg-dark bg-opacity-25 border border-secondary rounded-3 p-4 w-75 shadow">
                      <h5 className="mb-3 fw-bold">🎓 Education</h5>
                      {educationItems.map((item, index) => (
                        <div key={index} className="mb-4">
                          <h6 className="mb-1 fw-bold">{item.degree}</h6>
                          <p className="mb-0">
                            <strong className="text-primary">{item.institution}</strong> 
                            {item.period && <span className="ms-2 text-white-50">| {item.period}</span>}
                          </p>
                          <p className="mt-2 text-white-50">{item.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Slide 2: Experience */}
                <div className="carousel-item" data-bs-interval="10000">
                  <div className="d-flex justify-content-center">
                    <div className="bg-dark bg-opacity-25 border border-secondary rounded-3 p-4 w-75 shadow">
                      <h5 className="mb-3 fw-bold">💼 Experience</h5>
                      {experiences.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <h6 className="mb-1 fw-bold">{exp.title}</h6>
                          <p className="mb-0 text-white-50">{exp.period}</p>
                          <p className="mt-2">{exp.details}</p>
                          {exp.projects && (
                            <ul className="ms-3 mt-2">
                              {exp.projects.map((proj, i) => (
                                <li key={i} className="mb-1">{proj}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#journeyCarousel" 
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#journeyCarousel" 
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}