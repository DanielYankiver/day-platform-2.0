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
          <div className='home-intro'>
          Creative software engineer with a background in filmmaking. I have experience building applications with Javascript, React.js, CSS, Next.js, GraphQL and HTML. I'm a full-stack web developer with projects that incorporate frontend and backend development with robust user interfaces (UI) that use efficient code to solve real-world problems.
          </div>
          <div className='ascii-button-container'>
            <div className='ascii-button'>
              █▀▀ █▀█ █▄░█ ▀█▀ ▄▀█ █▀▀ ▀█▀
              █▄▄ █▄█ █░▀█ ░█░ █▀█ █▄▄ ░█░
            </div>
          </div>
        </div>                                                         
      </div> 
    );
}

export default Home;