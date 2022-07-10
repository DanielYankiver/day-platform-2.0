import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav-bar-container">
      <NavLink className="nav-item" to="/" >Home</NavLink>
      <NavLink className="nav-item" to="/about">About</NavLink>
      <NavLink className="nav-item" to="/softwareengineer">Software Engineer</NavLink> 
      <NavLink className="nav-item" to="/filmmaker">Filmmaker</NavLink>
    </nav>
  );
}

export default Navbar;

