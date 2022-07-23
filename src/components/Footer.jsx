import React from "react";
import './Footer.css'
import github from '../images/github-logo.svg'

export default function Footer() {

  return (
    <div className='footer-container'>
    {/* <div className='footer-title'>
      Footer
    </div> */}
      <img
        className='github-logo'
        src={github}
      />
    </div>
  )
}