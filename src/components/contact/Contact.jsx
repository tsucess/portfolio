/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './contact.css'

import {FaWhatsapp} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {RiMessengerLine} from "react-icons/ri"

const Contact = () => {
  return (
	<section id="contact">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <GrMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>info.taofeeq@gmail.com</h5>
          <a href="mailto:info.taofeeq@gmail.com" target="_blank" className="btn">Send message</a>
        </article>
        <article className="contact__option">
          <FaWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>+234-810-652-8079</h5>
          <a href="https://api.whatsapp.com/send?phone=+2348106528079" target="_blank" className="btn">Send message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>OGUNSANYA TAOFEEQ</h5>
          <a href="https://www.facebook.com/taofeeq.muhammad/" target="_blank" className="btn">Send message</a>
        </article>
      </div>
{/* END OF CONTACT OPTION  */}

      <form action="">
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact