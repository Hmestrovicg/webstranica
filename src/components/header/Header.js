import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [username, setUsername] = useState('');

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    const handleClose = () => setMenu(false);
    useEffect(() => {
        const user = localStorage.getItem('username');
        if (user) setUsername(user);
    }, []);

    const location = useLocation();
    if (location.pathname === '/Login' || location.pathname === '/register/') return null;

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUsername('');
        window.location.reload();
    }

    return (
        <header>
            <div className="text-center">
                <div className="navbar navbar-expand-lg  d-flex ">
                    <Link to="/"><img src="/img/output-onlinepngtools.png" alt="neki opis slike" height="52" className="me-auto" /></Link>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={'collapse navbar-collapse ' + (menu ? 'show' : '')} id="navbarNavAltMarkup">
                        <div className="mx-auto nav-links navbar-nav d-flex align-items-center">
                            <Link to="/Shop" onClick={handleClose}>Shop</Link>
                            <Link to="/Cart" onClick={handleClose}>Cart Page</Link>
                            <Link to="/Blog" onClick={handleClose}>Blog</Link>
                            <div className="dropdown">
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link className="dropdown-item" to="/About" onClick={handleClose}>About</Link></li>
                                    <li><Link className="dropdown-item" to="/Countries" onClick={handleClose}>Countries</Link></li>
                                    <li><Link className="dropdown-item" to="/Exchange" onClick={handleClose}>Exchange</Link></li>
                                    <li><Link className="dropdown-item" to="/Contact" onClick={handleClose}>Contact</Link> </li>
                                    {/* Add more routes as needed */}
                                </ul>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </button>

                            </div>
                        </div>

                        {username ? (
                            <button onClick={logout} className="me-auto ms-auto login btn">Welcome, {username}</button>
                        ) : (
                            <Link to="/Login" className="me-auto ms-auto login btn">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;