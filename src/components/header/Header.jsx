import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/thumbnail.png'
import BACK from '../../assets/background.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Edward Ornelas</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

       
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <img src={BACK} alt='background'/>

        <a href="#contact" className='scroll__down'>Contact Me</a>
        </div>
    </header>
  )
}

export default Header