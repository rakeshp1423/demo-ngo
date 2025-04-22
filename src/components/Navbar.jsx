import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../assets/logo.png'; // Import the logo
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSectionHeight = document.getElementById('hero').offsetHeight; // Get the height of the hero section
            if (window.scrollY > heroSectionHeight) {
                setIsScrolled(true); // Add scrolled class after passing the hero section
            } else {
                setIsScrolled(false); // Remove scrolled class when above the hero section
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Mamata Logo" className="logo-image" />
                </a>
            </div>
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
                    <Link className='contact' to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;