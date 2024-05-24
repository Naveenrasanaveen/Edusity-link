import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
       <h1>We Ensure better education for a better world</h1>
       <p>Our cuttingedge curriculm is designed to empoer stutends with the knowlede skills and experinece needed to excel in the dymaic field of eduction</p>
       <button className='btn'>Explore more <img src={arrow}alt="" /></button>
      </div>
    </div>
  )
}

export default Hero