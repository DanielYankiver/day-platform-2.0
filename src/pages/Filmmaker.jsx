import React from 'react';
import './Filmmaker.css'

function Filmmaker() {
    return (
      <div className='filmmaker-container'>
        <div className='filmmaker-title'>
          Filmmaker Page
        </div>
        <div className='showreel'>
          <iframe src="https://player.vimeo.com/video/375538495?h=e5986dfa91"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div> 
    );
}

export default Filmmaker;