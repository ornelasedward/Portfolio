import React from'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {RiMessengerLine} from 'react-icons/ri'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  
  return (
    <footer>
     <a href="#" className= 'footer__logo'>Edward Ornelas</a>
      
      <ul className='permalinks'>
        <li><a href="#"> Home </a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">My Skills </a></li>
        <li><a href="#portfolio">My Experience </a></li>
        <li><a href="#contact"> Contact </a></li>
      </ul>
     <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
       <a href="https://www.linkedin.com/in/edward-ornelas-681b52131/"><AiOutlineLinkedin/> </a>
       <a href="https://m.me/edward.ornelas.tech/"><RiMessengerLine/> </a>
       <a href="https://www.youtube.com/c/edwardornelas"><BsYoutube/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Edward Ornelas. All rights reserved</small>
      </div>
   </footer>
  )
}

export default Footer