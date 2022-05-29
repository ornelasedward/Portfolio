import React from'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {RiMessengerLine} from 'react-icons/ri'

const Footer = () => {
  
  return (
    <footer>
     <a href="#" className= 'footer__logo'>Edward Ornelas</a>
      
      <ul className='permalinks'>
        <li><a href="#"> Home </a></li>
        <li><a href="#About"> About </a></li>
        <li><a href="#Exp">Experience </a></li>
        <li><a href="#Services"> Services </a></li>
        <li><a href="#Portfolio">Portfolio </a></li>
        <li><a href="#Test"> Testimonials </a></li>
        <li><a href="#Contact"> Contact </a></li>
      </ul>
     <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
       <a href="https://Linkedin.com"><AiOutlineLinkedin/> </a>
       <a href="https://m.me/edward.ornelas.tech/"><RiMessengerLine/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Edward Ornelas. All rights reserved</small>
      </div>
   </footer>
  )
}

export default Footer