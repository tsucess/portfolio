/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import { FaLinkedin,FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
	<div className="header__socials">
        <a href="https://web.facebook.com/taofeeq.muhammad" target="_blank"><FaFacebook /></a>
		<a href="https://www.linkedin.com/in/taofeeq-ogunsanya-95a9bb17a/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/tsucess" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/NUpda8" target="_blank"><FaTwitter /></a>
	</div>
  )
}

export default HeaderSocials