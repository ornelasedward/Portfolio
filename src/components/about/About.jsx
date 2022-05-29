import React from 'react'
import './About.css'
import ME from '../../assets/thumbnail.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To KNow</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={ME} alt="About Image" />
           </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                    <h5>Hi, I’m Edward.</h5>
                    <small>Beginning in 2017, I always had an interest in tech, 
            so I began networking and was able to do some freelancing for YouTubers. 
            I used software like Adobe Premiere Pro, Photoshop, 
            and illustrator to edit videos and design graphics. 
            After launching a YouTuber from zero to 25,000 followers, 
            I felt I should create my channel to teach others how to use these same software programs. 
            Simultaneously, I found I had a proclivity for cryptocurrency investing and completely transitioned my channel to discussing crypto. 
            During this time, I created and designed courses to help students find success in trading e-currency. 
            My success launched me to begin speaking at seminars and taught me how to communicate to a wide range of audiences. 
            While traveling the world, I had an epiphany that I wanted to transform my life and begin a life-long career in tech. 
            Like everything else over the last 5 years, I began to self-teach myself to Code. 
            I began with HTML, and have since learned CSS, JavaScript, React, Python, and PHP, and I’m still learning.</small>
                </article>

            </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>      
      </section>
  )
}

export default About