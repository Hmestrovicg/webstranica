import { React } from "react";
import { useLocation } from 'react-router-dom';

import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

	const location = useLocation();
	if (location.pathname === '/Login' || location.pathname === '/register/') return null;

	return (
		<footer className="text-center">
			<div className="icons">
				<a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
				<a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
				<a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
				<a href="/"><FontAwesomeIcon icon={faLinkedin} /></a>
				<a href="/"><FontAwesomeIcon icon={faPinterest} /></a>
				<a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
			</div>
			<p>Copyright 2020 All rights reserved</p>
		</footer>
	);
};

export default Footer;