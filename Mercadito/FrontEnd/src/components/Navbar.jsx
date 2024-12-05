import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usa 'react-router-dom' en vez de 'react-router'
import './Footers';
import '../css/Navbar.css'

export const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>

    
      <div className='menu-toggle' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/App">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Dashbord">Dashboard</Link></li>
        <li><Link to="/CreatePost">CreatePost</Link></li>
        <li><Link to="/Register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
