import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footers';
import '../css/Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userId");
    navigate("/Login");
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
        <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      </ul>

      
    
    </div>
  );
}

export default Navbar;
