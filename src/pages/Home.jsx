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
          <div className='home-title'>DANIEL YANKIVER</div>
          <div className='home-intro-container'>
            <div className='home-intro'>
            Creative software engineer with a background in filmmaking. I have experience building applications with Javascript, React.js, CSS, Next.js, GraphQL and HTML. I'm a full-stack web developer with projects that incorporate frontend and backend development with robust user interfaces (UI) that use efficient code to solve real-world problems.
            </div>
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