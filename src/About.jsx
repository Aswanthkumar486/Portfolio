import React from 'react';
import NavigationBar from './NavigationBar';

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
      title: 'Full Stack Projects',
      period: '2025 – Present',
      details: 'Developed and deployed web applications using React.js, Node.js, Express.js, and MySQL.',
      projects: [
        '📝 Full Stack Blog Website – CRUD with authentication and REST API integration',
        '🌤️ Weather Application – Real-time weather data using OpenWeather API',
        '🛍️ Lifestyle Static Website Template – Responsive Next.js + Bootstrap site',
        '👤 Developer Portfolio – Personal React + Bootstrap portfolio site',
      ],
    },
    {
      title: 'Certifications & Achievements',
      period: '2023 – 2024',
      details: '• Web Designing Certification – Syed Ammal Arts & Science College\n• Certificate of Merit – Rank 1 in Academics\n• AWS Cloud Security Workshop – Monzha Research Lab',
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
              Hello, I'm <span className="text-primary">J. Aswanth Kumar</span>
            </h1>
            <p className="lead mb-4">
              Aspiring <span className="fw-bold text-decoration-underline">Full Stack Developer</span> passionate about building modern, responsive web applications
            </p>
            <p className="mb-5 text-center text-wrap">
              Skilled in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL. I enjoy creating user-friendly, visually appealing, and functional web applications that solve real-world problems.
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
                          {exp.period && <p className="mb-0 text-white-50">{exp.period}</p>}
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