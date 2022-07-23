import React from 'react';
import './Filmmaker.css'

function Filmmaker() {
    return (
      <div className='filmmaker-container'>
        <div className='filmmaker-title'>
          Showreel
        </div>
        <div className='showreel'>
          <iframe src="https://player.vimeo.com/video/375538495?h=e5986dfa91"  frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div>
          Check out all of my other films and videos on vimeo:
        </div>
      </div> 
    );
}

export default Filmmaker;