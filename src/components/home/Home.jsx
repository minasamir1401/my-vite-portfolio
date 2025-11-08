import React from 'react'
import './Home.css'
import me from '../../assets/me.png'
import CV from '../../assets/cv.pdf'
import HomeSocials from './HomeSocials'

function Home() {
  return (
<div className='home '>
  <div className="container home-container" id='home'>
    <h4>Hello I'm</h4>
    <h1>Mina Samir</h1>
    <h4 className="text-light">Frontend Developer</h4>

    <div className="btns">
      <a className="btn" id="download-cv-btn" download href={CV}>Download CV</a>
      <a className="btn btn-primary" id="lets-talk-btn" href="#contact">Let's talk</a>
    </div>
    <div className="me">
      <img src={me} alt="Mina Samir" />
    </div>
    <a href="#about" className='scroll-down' id="scroll-down-link">Scroll Down</a>
    <HomeSocials />
  </div>
</div>

  )
}

export default Home