import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className='about_img' />
                <img src={play_icon} alt="" className='play_img' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nuturing Tomorrow's Leaders Today</h2>
                <p>n this article, I'll explain why colleges want you to be able to explain why you are applying. I'll also discuss how to generate and brainstorm topics for this question and how to make yourself sound sincere and committed. Finally, we'll go over some "why this school?" essay dos and don'ts   </p>
                <p>How do you effectively explain the benefits you see this particular school providing for you and the contributions you will bring to the table as a student there? And how can you do this best using the small amount of space that you have usually just one to two paragraphs?</p>
                <p>about the prep work you'll need to do. Next, we'll go through how to brainstorm good topics and touch on what topics to avoid. I'll give you some tips on transforming your ideas and research into an actual essay. Finally, I'll take apart an actual "why us?" essay to show you why and how it works.</p>
                 
            </div>
        </div>
    )
}

export default About