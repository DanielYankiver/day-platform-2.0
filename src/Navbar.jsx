import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
// import resume from "./images/resume.pdf";
import logo from "./images/bbLogoGreen.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar-container">
      <NavLink className="nav-item" to="/">
        <img className="bb-logo-nav" src={logo} />
      </NavLink>
      {/* <NavLink className="nav-item" to="/about">
        About
      </NavLink> */}
      <NavLink className="nav-item" to="/softwareengineer">
        Software Engineer
      </NavLink>
      <NavLink className="nav-item" to="/filmmaker">
        Filmmaker
      </NavLink>
      {/* <div className="resume">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div> */}
    </nav>
  );
}

export default Navbar;
