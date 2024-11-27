import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'
export const Navbar = () => {
  return (
    
    <div >
    
        <p>
        <Link to={"/Login"}> Login</Link>
        </p>
        <p>
        <Link to={"/App"}>App </Link>
        </p>
        <p>
        <Link to={"/Contact"}>Contact</Link>
        </p>
        <p>
        <Link to={"/Dashbord"}>Dashboard</Link>
        </p>

    </div>
    
  )
}
export default Navbar;
