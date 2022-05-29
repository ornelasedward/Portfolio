import React from'react'
import './Test.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora repellat recusandae sunt iusto a deserunt doloremque!'
  },
  {
    avatar: AVTR2,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora repellat recusandae sunt iusto a deserunt doloremque!'
  },
  {
    avatar: AVTR3,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora repellat recusandae sunt iusto a deserunt doloremque!'
  },
  {
    avatar: AVTR4,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora repellat recusandae sunt iusto a deserunt doloremque!'
  },
]


const Test = ( )=> {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    
      <Swiper className="container testimonials_container" 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client_review'>
                  {review}
                  </small>
            </SwiperSlide>
            )
          })
        }
                
              </Swiper>
            </section>
            )
        }

export default Test