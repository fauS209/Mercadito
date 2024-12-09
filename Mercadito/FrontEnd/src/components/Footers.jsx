import React from 'react';
import '../css/Footers.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footers = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/tuusuario/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/tuusuario/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
      </div>
      <div className="footer-references">
        <p>Creado por <span>Ariel Potoy</span> y <span>Fauricio Salazar</span></p>
      </div>
    </footer>
  );
};

export default Footers;
