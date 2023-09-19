import React from 'react'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {PiFoldersFill} from 'react-icons/pi'
import MY from '../../assets/images/11-dp.JPG';

const About = () => {
  return (
    <section id="about"> 
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MY} alt="my-dp" />
          </div>
        </div>

        <div className="about__info">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ years Working</small>
            </article>
            
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ International</small>
            </article>

            <article className='about__card'>
              <PiFoldersFill className='about__icon'/>
              <h5>Projects</h5>
              <small>100+ Projects</small>
            </article>
          </div>

          <p>
            I'm a Fullstack Web Developer. 
            I can provide clean code and pixel perfect designs. 
            I can also build an interactive Website with web animations. 
            A responsive design which makes your website accessible to all users, 
            regardless of their device.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About