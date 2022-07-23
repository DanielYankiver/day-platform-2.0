import React from 'react';
import logo from '../images/bbLogoGreen.png'
import './Home.css';


function Home() {
    return (
      <div className='home-container'>
        <div className='home-wrapper'>
          <div className='bb-logo-container'>
            <img
              className='bb-logo'
              src={logo}
            />
          </div>
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