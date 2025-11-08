import React from 'react'
import './Footer.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Mina Samir</h3>
          </div>
          
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="footer-socials">
            <a href="mailto:mina15g4y@gmail.com" aria-label="Email"><MdOutlineEmail /></a>
            <a href="https://m.me/houdareda.99" target="_blank" rel="noreferrer" aria-label="Messenger"><RiMessengerLine /></a>
            <a href="https://api.whatsapp.com/send?phone=201279301263" target="_blank" rel="noreferrer" aria-label="WhatsApp"><BsWhatsapp /></a>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© 2025 Mina Samir. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer