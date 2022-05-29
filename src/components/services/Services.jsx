import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>My Services</h2>

      <div className="container services__container">

          {/* START OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
            {/* END OF UI/UX */}

            {/* Web Development */}

            <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

            {/* END OF Web Development */}

            <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li><li>
              <BiCheck className='service__list-icons' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

              {/* END OF Web Development */}
        </div>
    </section>
  )
}

export default Services