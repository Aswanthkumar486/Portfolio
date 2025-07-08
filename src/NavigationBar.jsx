import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; // Make sure to style things like hover, active, animation

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <NavLink className="navbar-brand fw-bold fs-4 animate-name text-warning" to="/">
          J Aswanth Kumar
        </NavLink>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center gap-2">
            {['/', '/about', '/projects', '/contact'].map((path, index) => {
              const labels = ['Home', 'About', 'Projects', 'Contact'];
              return (
                <li className="nav-item" key={path}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link px-3 ${isActive ? 'text-warning fw-semibold' : 'text-white'}`
                    }
                    to={path}
                    onClick={() => setIsOpen(false)} // Close navbar on link click
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
