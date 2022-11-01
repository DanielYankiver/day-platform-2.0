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
    <div>
      <div className="ascii-button-container">
      <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank" rel="noopener noreferrer">
        <div className="ascii-button">█▀▀ █▀█ █▄░█ ▀█▀ ▄▀█ █▀▀ ▀█▀ █▄▄ █▄█ █░▀█ ░█░ █▀█ █▄▄ ░█░</div>
      </a>
    </div>
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
        <div className="click-me">^ Click Me ^</div>
        <div className="name-container">
          {/* <div className="first-name">█▀▄ ▄▀█ █▄░█ █ █▀▀ █░░ █▄▀ █▀█ █░▀█ █ ██▄ █▄▄</div>
          <div className="last-name">█▄█ ▄▀█ █▄░█ █▄▀ █ █░█ █▀▀ █▀█ ░█░ █▀█ █░▀█ █░█ █ ▀▄▀ ██▄ █▀▄</div> */}
          <div className="name">DANIEL YANKIVER</div>
          <div className="info">Creative software engineer with a background in filmmaking.</div>
        </div>

        <div className="resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            my_resume.pdf
          </a>
        </div>
        {/* <div>
          <div className="my-info">Creative software engineer with a background in filmmaking.</div>
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default Home;
