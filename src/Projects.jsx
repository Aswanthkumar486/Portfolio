import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import "./Projects.css";

// Importing images correctly
import emojiImg from "../images/emoji.png";
import recipeImg from "../images/Reciepe.png";
import weatherImg from "../images/Weather Thumbnail.png";
import loginImg from "../images/login.png";
import bmiImg from "../images/bmi.png";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const Data = [
    {
      name: "Emoji Generator",
      Image: emojiImg,
      description: "A fun and interactive emoji showcase featuring various emojis in a visually engaging way.",
      link: "https://aswanthkumar486.github.io/DigitialPortfolio/emoji.html",
    },
    {
      name: "Recipe App",
      Image: recipeImg,
      description: "A modern React-based recipe app that helps users discover and manage delicious recipes with ease.",
      link: "https://aswanthkumar486.github.io/NewRecipe-ReactApp/",
    },
    {
      name: "Weather App",
      Image: weatherImg,
      description: "A React-powered weather app that provides real-time weather updates for any location with a clean and user-friendly interface.",
      link: "https://aswanthkumar486.github.io/New-WeatherApp/",
    },
    {
      name: "Login Page",
      Image: loginImg,
      description: "A clean and responsive front-end login page with a user-friendly design, built using HTML, CSS, and JavaScript.",
      link: "https://aswanthkumar486.github.io/front-end-projects/login.html",
    },
    {
      name: "BMI Calculator",
      Image: bmiImg,
      description: "A simple BMI calculator that helps users determine their Body Mass Index based on height and weight.",
      link: "https://aswanthkumar486.github.io/BMI/bmiproject.html",
    },
  ];

  // Show only the first 3 projects unless "See More" is clicked
  const visibleProjects = showAll ? Data : Data.slice(0, 3);

  return (
    <div className="projects containers">
      <NavigationBar />
      <h2 className="text-light ms-3 ps-1">Projects</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {visibleProjects.map((data, index) => (
          <div key={index} className="card m-3 project-section card"  style={{ width: "18rem" }}>
            <img src={data.Image} className="card-img-top  " alt={data.name} width={250} height={250} />
            <div className="card-body content">
              <h5 className="card-title heading">{data.name}</h5>
              <p className="card-text para">{data.description}</p>
              <a href={data.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* "See More" Button outside the loop */}
      <div className="text-center mt-3">
        <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}
