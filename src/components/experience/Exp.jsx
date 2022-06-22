import React from 'react'
import './Exp.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { GrReactjs } from 'react-icons/gr'
import { DiPython } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'


const Exp = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
              <div class='words'>
              <h4>HTML</h4>
              </div>
              </div>
            </article>
            
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon' />
              <div>
              <div class='words'>
                <h4>CSS</h4>
                </div>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
              <div class='words'>
                <h4>JavaScript</h4>
                </div>
              </div>
            </article>

            <article className='experience__details'>
              <GrReactjs className='experience__details-icon'/>
              <div>
              <div class='words'>
                <h4>React</h4>
                </div>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <div class='words'>
                <h4>NextJS</h4>
                </div>
              </div>
            </article>
          </div>

        </div>
        {/* END OF FRONTEND */} 


        <div className="experience__backened">
        
        <h3>Backend Development</h3>
          <div className="experience__content">

          <article className='experience__details'>
              <DiPython className='experience__details-icon'/>
              <div>
              <div class='words'>
                <h4>Python</h4>
                </div>
              </div>
            </article>

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <div class='words'>
                <h4>NODE JS</h4>
                </div>
              </div>
            </article>
            
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
              <div class='words'>
                <h4>MongoDB</h4>
                </div>
              </div>
            </article>

            <article className='experience__details'>
              <SiPhp className='experience__details-icon'/>
              <div>
              <div class='words'>
                <h4>PHP</h4>
                </div>
              </div>
            </article>
            
            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
              <div class='words'>
                <h4>MYSQL</h4>
                </div>
              </div>
            </article>
            
          </div>

        </div>
      </div>
    </section>
  
  )
}

export default Exp