import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/edward-ornelas-681b52131/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ornelasedward" target="_blank"><FaGithub/></a>
        <a href="https://www.youtube.com/c/edwardornelas" target="_blank"><BsYoutube/></a>


    </div>
  )
}

export default HeaderSocials