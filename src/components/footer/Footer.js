import {React} from "react";
import { useLocation } from 'react-router-dom';

import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

	const location = useLocation();
    if(location.pathname === '/Login' || location.pathname === '/register/') return null;

    return (
        <footer className="text-center">
			<div className="icons">
				<a href="/"><i className="fa-brands fa-square-facebook"></i></a>
				<a href="/"><i className="fa-brands fa-square-instagram"></i></a>
				<a href="/"><i className="fa-brands fa-square-twitter"></i></a>
				<a href="/"><i className="fa-brands fa-linkedin"></i></a>
				<a href="/"> <FontAwesomeIcon icon={faFacebook} /> </a>
			</div>
			<p>Copyright 2020 All rights reserved</p>
		</footer>
    );
};

export default Footer;