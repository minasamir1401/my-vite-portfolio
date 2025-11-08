import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


function HomeSocials() {
  return (
    <div className='home-socials'>
        <a href="https://linkedin.com/in/mina-samir" target='_blank' id="linkedin-link" aria-label="LinkedIn Profile"><FaLinkedin /></a>
        <a href="https://github.com/mina-samir" target='_blank' id="github-link" aria-label="GitHub Profile"><FaGithub /></a>
        <a href="https://dribbble.com/mina-samir" target='_blank' id="dribbble-link" aria-label="Dribbble Profile"><FaDribbble /></a>
    </div>
  )
}

export default HomeSocials