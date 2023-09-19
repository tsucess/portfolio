/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer> 
      <a href="#" className="footer__logo">TO Profile</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/taofeeq-ogunsanya-95a9bb17a/" target="_blank"><FaLinkedin /></a>
        <a href="https://web.facebook.com/taofeeq.muhammad" target="_blank"><FaFacebook /></a>
        <a href="https://github.com/tsucess" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/NUpda8" target="_blank"><FaTwitter /></a>
      </div>


      <div className="footer_copyright">
        <small> &copy; OGUNSANYA TAOFEEQ. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer