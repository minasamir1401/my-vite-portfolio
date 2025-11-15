import React from 'react'
import './About.css'
import IMagME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_my_imge">
            <img src={IMagME} alt="About Me" loading="lazy" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Junior</small>
            </div>

            <div className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>Freelance Projects</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>6+ completed</small>
            </div>
          </div>
          <p>I’m a Front-End Developer focused on building responsive and user-friendly interfaces. I care about writing clean, maintainable code and following modern web standards. I always aim to improve performance, accessibility, and overall user experience in every project I work on. I’m continuously learning and developing my skills to stay updated with the latest trends and technologies in the frontend world.</p>
          <a href="#contact" className='btn btn-primary' id="about-lets-talk-btn">Let's Talk</a>
        </div>
      </div>
    </section>  
    )
}

export default About