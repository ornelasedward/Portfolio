import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md' 
import {RiMessengerLine} from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_50hr82s', 'template_ohldp75', form.current, 'UVud6a7aVANzDZMWI')

    e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
return (
  <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
 
     <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <div class='words'>
              <h4>Email</h4>
              <h5>ornelasedward@rocketmail.com</h5>
              </div>
              <a href="mailto:dummyegator@gmail.com" target='_blank'> Send a message </a>
              </article>

              <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <div class='words'>
              <h4>Messenger</h4>
              <h5>Edward Ornelas</h5>
              </div>
              <a href="https://m.me/edward.ornelas.tech/" target='_blank'> Send a message </a>
              </article>

              <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <div class='words'>
              <h4>LinkedIn</h4>
              <h5>Edward Ornelas</h5>
              </div>
              <a href="https://www.linkedin.com/in/edward-ornelas-681b52131/" target='_blank'> Send a message </a>
              </article>
          </div>
   {/*END OF CONTACT OPTIONS*/}
   <form ref={form} onSubmit={sendEmail}>
   <input type="text" name='name' placeholder='Your Full Name' required/>
    <input type="email" name='email' placeholder='Your Email' required/>
    <textarea name="message" rows="7" placeholder='Your Message' required>

    </textarea>
    <button type='submit' className="btn btn-primary">Send Message</button>
     </form>
  </div>
 </section>
 )
}

export default Contact