import React from 'react';
import NavigationBar from './NavigationBar';
import './About.css';

export default function About() {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Bootstrap', level: 92 },
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 70 },
    { name: 'MySQL', level: 75 },
  ];

  const educationItems = [
    {
      degree: 'B.Sc in Information Technology',
      institution: 'Syed Ammal Arts & Science College, Ramanathapuram',
      period: '2021 – 2024',
      details: 'Graduated with 77%, specialized in web technologies and software development.',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'National Academy Hr. Sec. School, Ramanathapuram',
      period: '2020 – 2021',
      details: 'Focused on Computer Science fundamentals.',
    },
  ];

const experiences = [
  {
    title: "Web Developer Intern | Inotch, Chennai",
    period: "Nov 2025 – Feb 2026",
    details:
      "Completed a Web Development Internship where I worked on full-stack web applications using React.js, Node.js, Express.js, and MySQL.",
    projects: [
      "🚀 Developed 8+ REST APIs for user, product, and order management modules",
      "⚛️ Built responsive React.js user interfaces using reusable components",
      "🗄️ Integrated frontend applications with MySQL databases and CRUD operations",
      "🔧 Refactored code into reusable utility functions to improve maintainability",
      "🤝 Worked in an Agile development environment and collaborated with team members"
    ]
  },
  {
    title: "Projects & Development Experience",
    period: "2025 – Present",
    details:
      "Developed multiple full-stack and frontend applications using React.js, Node.js, Express.js, MongoDB, MySQL, and Next.js.",
    projects: [
      "♻️ Scrap Management System – GST billing, inventory tracking and automated scrap pricing",
      "📝 Full Stack Blog Application – JWT authentication and CRUD operations",
      "🌤️ Weather Application – OpenWeather API integration",
      "🍽️ Recipe Finder – React.js recipe search application",
      "👤 Personal Portfolio Website – React.js and Bootstrap"
    ]
  }
];

  return (
    <>
      <NavigationBar />

      <section className="about-section py-5">
        <div className="container">

          {/* Intro */}
          <div className="about-intro mb-5">
            <div className="badge-container mb-3">
              <span className="badge-pulse">✦ About Me</span>
            </div>
            <h1 className="display-5 fw-bold mb-3">
              Hello, I'm <span className="gradient-text">J. Aswanth Kumar</span>
            </h1>
            <p className="lead mb-3">
              Aspiring <span className="highlight-text">Full Stack Developer</span> passionate about building modern, responsive web applications
            </p>
            <p className="about-description">
              Skilled in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL. 
              I enjoy creating user-friendly, visually appealing, and functional web applications 
              that solve real-world problems.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-section mb-5">
            <h4 className="section-title mb-4">Technical Skills</h4>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="skills-tags d-flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-tag"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-bar mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-medium">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="journey-section mb-5">
            <h4 className="section-title text-center mb-4">📚 My Journey</h4>

            <div id="journeyCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#journeyCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Education"
                ></button>
                <button
                  type="button"
                  data-bs-target="#journeyCarousel"
                  data-bs-slide-to="1"
                  aria-label="Experience"
                ></button>
              </div>

              <div className="carousel-inner">

                {/* Slide 1: Education */}
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="journey-card">
                    <h5 className="journey-card-title">🎓 Education</h5>
                    {educationItems.map((item, index) => (
                      <div key={index} className="journey-item">
                        <h6 className="journey-item-title">{item.degree}</h6>
                        <p className="journey-item-institution">
                          {item.institution}
                          {item.period && <span className="journey-item-period"> | {item.period}</span>}
                        </p>
                        <p className="journey-item-details">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide 2: Experience */}
                <div className="carousel-item" data-bs-interval="10000">
                  <div className="journey-card">
                    <h5 className="journey-card-title">💼 Experience</h5>
                    {experiences.map((exp, index) => (
                      <div key={index} className="journey-item">
                        <h6 className="journey-item-title">{exp.title}</h6>
                        {exp.period && <p className="journey-item-period">{exp.period}</p>}
                        <p className="journey-item-details">{exp.details}</p>
                        {exp.projects && (
                          <ul className="journey-project-list">
                            {exp.projects.map((proj, i) => (
                              <li key={i}>{proj}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#journeyCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-icon" aria-hidden="true">‹</span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#journeyCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-icon" aria-hidden="true">›</span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}