import React from "react";
import "./Footer.css";
import github from "../images/github-logo.svg";
import linkedin from "../images/linkedin-logo.svg";
import vimeo from "../images/vimeo-logo.svg";
import medium from "../images/medium-logo.svg";

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <div className="footer-container">
      <div className="logos-wrapper">
        <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank" rel="noopener noreferrer">
          <img className="logos linkedin-logo" src={linkedin} />
        </a>
        <a href="https://github.com/DanielYankiver" target="_blank" rel="noopener noreferrer">
          <img className="logos linkedin-logo" src={github} />
        </a>
        <a href="https://vimeo.com/danielyankiver" target="_blank" rel="noopener noreferrer">
          <img className="logos linkedin-logo" src={vimeo} />
        </a>
        <a href="https://danielyankiver.medium.com/" target="_blank" rel="noopener noreferrer">
          <img className="logos linkedin-logo" src={medium} />
        </a>
      </div>
      <div className="ascii-button-container">
        <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank" rel="noopener noreferrer">
          <div className="ascii-button">█▀▀ █▀█ █▄░█ ▀█▀ ▄▀█ █▀▀ ▀█▀ █▄▄ █▄█ █░▀█ ░█░ █▀█ █▄▄ ░█░</div>
        </a>
      </div>
      <div className="copyright">©{year} Daniel Yankiver</div>
      <div className="bottom-spacer" />
    </div>
  );
}
