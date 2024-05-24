import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Programmes/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Teastimonals from './Component/Testimonials/Teastimonals'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <>
    <div >
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subtitle="Our program" title="Whate we Offer"/>
    <Program/>
    <About/>
    <Title subtitle="Gallery" title="Campus photos"/>
    <Campus/>
    <Title subtitle="Testimonials" title="What students says"/>
    <Teastimonals/>
    <Title subtitle="Contact Us" title="Get in Tounch"/>
    <Contact/>
    <Footer/>
    </div>
    </div>
      
    </>
  )
}

export default App 