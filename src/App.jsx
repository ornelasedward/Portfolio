import React from 'react'
import Para from './Para'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Exp'
/* import Services from './components/services/Services' */
import Portfolio from './components/portfolio/Portfolio'
/* import Testimonials from './components/testimonials/Test' */
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


  const App = () => {
  return (    
    

    <>
      <Para />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
     {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
      )
    }

export default App