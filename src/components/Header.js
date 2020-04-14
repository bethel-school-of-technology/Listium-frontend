import React from 'react';
import '../styles/theme.css';
 
import { NavLink } from 'react-router-dom';
 
const Header = () => {
    return (
       <div className="header">
          <div className="logo">
            <h3>Listium</h3>
          </div>
          <div className="navLinks">
            <NavLink className="navLink" to="/">Home</NavLink>
            <NavLink className="navLink" to="/login">Login</NavLink>
            <NavLink className="navLink" to="/signup">Signup</NavLink>
            <NavLink className="navLink" to="/profile">Profile</NavLink>
          </div>
       </div>
    );
}
 
export default Header;