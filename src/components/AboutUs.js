import React from 'react'

const AboutUs = () => {
  const token = localStorage.getItem("token")
  {console.log(token)}
  return (
   token && <div className='aboutUs'>
       <div className='about-heading1'>
       <h3 className='about-h'>ABOUT US</h3>
       <p className='about-p'>Here to ease you</p>
       </div>
        <div className='about-mission'>
             <h2 className='about-mission-h'>Mission</h2>
             <p className='about-mission-p'>Our goal is to make the Stamp paper work effortless. We aim to automate the Stamp paper work, So that everyone can make their stamp agreements without need of any vendors, anywhere and anytime. </p>
        </div>
       <div>
        <h2 className='about-mission-h'>Origin</h2>
        <p className='about-mission-p'>This 'Stamp Automation System' started in 2022 as a  University Final Year Project of three students , when those students realized that the world is being transfered online. So, why should we leave this important work not being automated even though it is the need of every citizen. So, they started solving the problem and came up with this impressive projecct</p>
       </div>
       <div>
        <h2 className='about-mission-h'>Idea</h2>
        <p className='about-mission-p'>By combining their respective backgrounds in technology, marketing, and design, the three came up with the idea of an intuitive, web-based tool that would make it as simple as possible to make Stamp Agreements effortlesy anywhere and anytime.</p>
       </div>
       <div>
        <h2 className='about-mission-h'>Outcome</h2>
        <p className='about-mission-p'>After a rigorous development and testing process, the outcome was an online Stamp Agreement maker that combines functionality and aesthetics to ease the user, help and guide him to make the agreement of any kind.</p>
       </div>
      
    </div>
  )
}

export default AboutUs