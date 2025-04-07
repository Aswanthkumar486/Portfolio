import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About.jsx';
import Projects from './Projects.jsx'; // Assuming correct file paths
import Contact from './Contact.jsx';
import './App.css'
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
);
