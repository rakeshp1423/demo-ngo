import React from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Mamata</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#about">About Us</Link></li>
                <li><Link to="#moto">Our Moto</Link></li>
                <li><Link to="#donate">Donate</Link></li>
                <li><Link to="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;