import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'
export const Navbar = () => {
  return (
    
    <div className='navbar'>
    
      
        <Link to={"/Login"}> Login</Link>
     
        <Link to={"/App"}>App </Link>
       
        <Link to={"/Contact"}>Contact</Link>
       
        <Link to={"/Dashbord"}>Dashboard</Link>
        
        <Link to={"/CreatePost"}>CreatePost</Link>

        <Link to={"/Register"}>Register</Link>

    </div>
    
  )
}
export default Navbar;
