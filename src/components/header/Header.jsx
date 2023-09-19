import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/displaypic.jpg'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
	<header id="home">
    <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>OGUNSANYA TAOFEEQ</h1>
        <h3>Fullstack Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="mydp" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header