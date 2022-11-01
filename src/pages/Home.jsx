import React, { useState } from "react";
import logo from "../images/bbLogoGreen.png";
import whiteLogo from "../images/bbLogo.png";
import headShot from "../images/headshot.jpg";
import resume from "../images/resume.pdf";
// import logo from "../images/bbLogoGreen.png";
import "./Home.css";

function Home() {
  const [togglePhoto, setTogglePhoto] = useState(false);

  return (
    <div className="home-container">
      <div className="home-wrapper">
        {togglePhoto && (
          <div className="bb-logo-container" onClick={() => setTogglePhoto(!togglePhoto)}>
            <img className="bb-logo" src={headShot} />
          </div>
        )}
        {!togglePhoto && (
          <div className="bb-logo-container" onClick={() => setTogglePhoto(!togglePhoto)}>
            <img className="bb-logo" src={logo} />
          </div>
        )}
        <div className="click-me">^ Click Me </div>
        <div className="first-name">█▀▄ ▄▀█ █▄░█ █ █▀▀ █░░ █▄▀ █▀█ █░▀█ █ ██▄ █▄▄</div>
        <div className="last-name">█▄█ ▄▀█ █▄░█ █▄▀ █ █░█ █▀▀ █▀█ ░█░ █▀█ █░▀█ █░█ █ ▀▄▀ ██▄ █▀▄</div>
        <div className="resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            my_resume.pdf
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
