import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Mamata</div>
            <ul className="nav-links">
                <li>
                    <Link to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="moto" smooth={true} duration={500}>
                        Our Moto
                    </Link>
                </li>
                <li>
                    <Link to="donate" smooth={true} duration={500}>
                        Donate
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;