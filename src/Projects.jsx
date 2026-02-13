import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import "./Projects.css";

// Importing images
import dentalImg from "../images/Dental-Clinc.png";
import recipeImg from "../images/Reciepe.png";
import weatherImg from "../images/Weather (2).png";
import TravelImg from "../images/Travel-Agency.png";
import SaloonImg from '../images/Spa-Saloon.png';
import petImg from "../images/Pet-Shop.png";
import akImg from "../images/Photo_Ak.jpg";
import Footer from "./Footer";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const Data = [
    {
      name: "Recipe Finder",
      Image: recipeImg,
      description: "A responsive recipe discovery website built with React.js and Bootstrap. Users can browse, filter, and explore various recipes with ease.",
      link: "https://aswanthkumar486.github.io/NewRecipe-ReactApp/",
    },
    {
      name: "GlowNex Website",
      Image: SaloonImg,
      description: "A luxurious salon landing page created using Next.js and Tailwind CSS. Features include service highlights, appointment CTA, and responsive design.",
      link: "https://aswanthkumar486.github.io/Out-Saloon/",
    },
    {
      name: "Weather App",
      Image: weatherImg,
      description: "A React-based weather application using OpenWeather API. Delivers real-time weather updates with a clean and responsive UI.",
      link: "https://aswanthkumar486.github.io/Web-Weather/",
    },
    {
      name: "Travel Agency",
      Image: TravelImg,
      description: "A modern travel agency landing page built with Next.js and Tailwind CSS. Highlights destinations, offers, and travel packages in a visually engaging layout.",
      link: "https://aswanthkumar486.github.io/Out-Travel/",
    },
    {
      name: "Dental Clinic Website",
      Image: dentalImg,
      description: "A professional dental clinic website built with Next.js and Bootstrap. Includes sections for services, about, testimonials, and contact.",
      link: "https://aswanthkumar486.github.io/Web-DentalClinic/",
    },
    {
      name: "Pet Shop Website",
      Image: petImg,
      description: "A playful and informative pet shop landing page using Next.js and Bootstrap. Features include pet categories, offers, and contact details.",
      link: "https://aswanthkumar486.github.io/Out-Pet-Shop/",
    },{
      name:"Blog Website",
      Image:akImg,
      description:"Developed a full-stack Blog Application using React, Node.js, and Express.",
      link:"https://www.linkedin.com/in/aswanthkumar05/overlay/1770961509378/single-media-viewer/?profileId=ACoAAErEVygBGJAMLSVGX1to4rG6_KAu_Ved-Ig"
    }
  ];

  const visibleProjects = showAll ? Data : Data.slice(0, 3);

  return (
    <div className="projects bg-dark min-vh-100 py-4">
      <NavigationBar />
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h2 className="text-light display-4 fw-bold text-center mb-5">My Projects</h2>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {visibleProjects.map((data, index) => (
            <div key={index} className="col">
              <div className="card h-100 project-card shadow-lg border-0">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img 
                    src={data.Image} 
                    className="card-img-top h-100 w-100 object-fit-cover" 
                    alt={data.name} 
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">{data.name}</h5>
                  <p className="card-text text-muted flex-grow-1">{data.description}</p>
                  <a 
                    href={data.link} 
                    className="btn btn-outline-primary mt-auto align-self-start"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col text-center">
            <button 
              className={`btn btn-${showAll ? 'outline-light' : 'primary'} px-4 py-2 fw-bold`}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <i className="bi bi-chevron-up me-2"></i> Show Less
                </>
              ) : (
                <>
                  <i className="bi bi-chevron-down me-2"></i> Show More Projects
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
