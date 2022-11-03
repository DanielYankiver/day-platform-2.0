import React from 'react';
import './Filmmaker.css'
// import vimeo from "../images/vimeo-logo.svg";

function Filmmaker() {
    return (
      <div className='filmmaker-container'>
        {/* <div className='filmmaker-title'>
          SHOWREEL
        </div> */}
        <div className='showreel'>
          <iframe src="https://player.vimeo.com/video/375538495?h=e5986dfa91"  frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className='check-out-my-films'>
          Check out all of my other films and videos on
          {" "}
          <a href="https://vimeo.com/danielyankiver" target="_blank" rel="noopener noreferrer">
          {/* <img className="logos linkedin-logo" src={vimeo} /> */}
           Vimeo
          </a>
        </div>
      </div> 
    );
}

export default Filmmaker;