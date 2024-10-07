import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="Airbnbbla.jpg" alt="airbnb" height="80" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item1">
                            <a className="nav-link" href="#">Stays</a>
                        </li>
                        <li className="nav-item2">
                            <a className="nav-link" href="#">Experiences</a>
                        </li>
                        <li className="nav-item3">
                            <a className="nav-link" href="#">Airbnb your home</a>
                        </li>
                        <li className="nav-item4">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-globe"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-bars"></i> <i className="fa-solid fa-user"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Sign up</a></li>
                                <li><a className="dropdown-item" href="#">Log in</a></li>
                                <li><a className="dropdown-item" href="#">Gift Cards</a></li>
                                <li><a className="dropdown-item" href="#">Airbnb your home</a></li>
                                <li><a className="dropdown-item" href="#">Help Center</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
