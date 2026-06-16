import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "./Projects.css";

// Importing images
import scrapImg from "../images/Scrap-Management.png";
import dentalImg from "../images/Dental-Clinc.png";
import recipeImg from "../images/Reciepe.png";
import weatherImg from "../images/Weather (2).png";
import TravelImg from "../images/Travel-Agency.png";
import SaloonImg from '../images/Spa-Saloon.png';
import petImg from "../images/Pet-Shop.png";
import akImg from "../images/Photo_Ak.jpg";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

const Data = [
  {
    name: "Scrap Management System",
    Image: scrapImg,
    description:
      "Built a full-stack scrap management platform using React.js, Node.js, Express.js, and MongoDB. Features include GST billing, scrap price calculation, inventory tracking, purchase management, and invoice generation.",
    link: "https://scrap-management-system-ochre.vercel.app/",
  },

  {
    name: "Full Stack Blog Application",
    Image: akImg,
    description:
      "Developed a role-based blogging platform using React.js, Node.js, Express.js, MySQL, and JWT Authentication. Implemented secure login, authorization, CRUD operations, and REST APIs.",
    link: "YOUR_GITHUB_OR_LIVE_LINK",
  },

  {
    name: "Weather Application",
    Image: weatherImg,
    description:
      "Built a responsive weather application using React.js and OpenWeather API. Displays real-time weather data, temperature, humidity, and location-based forecasts.",
    link: "https://aswanthkumar486.github.io/Web-Weather/",
  },

  {
    name: "Recipe Finder",
    Image: recipeImg,
    description:
      "Developed a React.js recipe search application with filtering and responsive design. Users can discover recipes and view detailed cooking instructions.",
    link: "https://aswanthkumar486.github.io/NewRecipe-ReactApp/",
  },


  {
    name: "Travel Agency Website",
    Image: TravelImg,
    description:
      "Modern travel agency landing page built using Next.js and Tailwind CSS featuring destinations, packages, offers, and responsive design.",
    link: "https://aswanthkumar486.github.io/Out-Travel/",
  },

  {
    name: "Dental Clinic Website",
    Image: dentalImg,
    description:
      "Professional healthcare website built with Next.js and Bootstrap including services, doctors, testimonials, appointment booking, and contact information.",
    link: "https://aswanthkumar486.github.io/Web-DentalClinic/",
  },

  {
    name: "Pet Shop Website",
    Image: petImg,
    description:
      "Responsive pet shop website built using Next.js and Bootstrap featuring pet categories, offers, services, and contact details.",
    link: "https://aswanthkumar486.github.io/Out-Pet-Shop/",
  },
];

  const visibleProjects = showAll ? Data : Data.slice(0, 3);

  return (
    <div className="projects-page">
      <NavigationBar />
      
      <section className="projects-section">
        <div className="container">
          <div className="projects-header">
            <div className="badge-container mb-3">
              <span className="badge-pulse">🚀 Portfolio</span>
            </div>
            <h2 className="projects-title">My Projects</h2>
            <p className="projects-subtitle">
              Here are some of my recent works and projects I've built
            </p>
          </div>

          <div className="row g-4">
            {visibleProjects.map((data, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img 
                      src={data.Image} 
                      className="project-image" 
                      alt={data.name} 
                    />
                    <div className="project-overlay">
                      <span className="project-overlay-text">View Project</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <h5 className="project-title">{data.name}</h5>
                    <p className="project-description">{data.description}</p>
                    <a 
                      href={data.link} 
                      className="project-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project <span className="project-link-icon">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="show-more-wrapper">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <span className="btn-icon">↑</span> Show Less
                </>
              ) : (
                <>
                  <span className="btn-icon">↓</span> Show More Projects
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}