import React from 'react'
import './services.css'

import {FaHandPointRight} from "react-icons/fa"
// import {PiPaperPlaneRightFill} from "react-icons/pi"


const Services = () => {
  return (
	<section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Logo creation / design</p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>E - Flyer design</p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Social media design </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Product designs </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Video / Animation creation</p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Online Instructor / Mentorship </p>
            </li>
          </ul> 
        </article>
        {/* End of Graphic Desingning  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Corporate website </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>E-Commerce </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Email Development </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Web Applications </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>API Integration</p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Bug fixing </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Management</h3>
          </div>

          <ul className="service__list">
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Database Management</p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Server maintenance </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Web security </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>SSL Configuration </p>
            </li>
            <li> 
              <FaHandPointRight className='service__list-icon'/>
              <p>Data Backup/Protection </p>
            </li>
            <li>
            <FaHandPointRight className='service__list-icon'/>
              <p>Online Instructor / Mentorship </p>
            </li>
          </ul>
        </article>
    </div>
  </section>
  )
}

export default Services