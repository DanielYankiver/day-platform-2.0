import React, { useState } from 'react';
import logo from '../images/bbLogoGreen.png'
import whiteLogo from '../images/bbLogo.png'
import './Home.css';


function Home() {
  const [togglePhoto, setTogglePhoto] = useState(false)  

    return (
      <div className='home-container'>
        <div className='home-wrapper'>
          {togglePhoto && (<div className='bb-logo-container' onClick={() => setTogglePhoto(!togglePhoto)}>
            <img
              className='bb-logo'
              src={logo}
            />
          </div>)}  
          {!togglePhoto && (<div className='bb-logo-container' onClick={() => setTogglePhoto(!togglePhoto)}>
            <img
              className='bb-logo'
              src={whiteLogo}
            />
          </div>)}  
          <div className='first-name'>
            █▀▄ ▄▀█ █▄░█ █ █▀▀ █░░
            █▄▀ █▀█ █░▀█ █ ██▄ █▄▄
          </div>
          <div className='last-name'>
            █▄█ ▄▀█ █▄░█ █▄▀ █ █░█ █▀▀ █▀█
            ░█░ █▀█ █░▀█ █░█ █ ▀▄▀ ██▄ █▀▄
          </div>
          <div className='ascii-button-container'>
            <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank" rel="noopener noreferrer">
              <div className='ascii-button'>
                █▀▀ █▀█ █▄░█ ▀█▀ ▄▀█ █▀▀ ▀█▀
                █▄▄ █▄█ █░▀█ ░█░ █▀█ █▄▄ ░█░
              </div>
            </a>
          </div>
        </div>                                                         
      </div> 
    );
}

export default Home;