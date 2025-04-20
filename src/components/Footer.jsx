// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section left">
        <h3>Mamata NGO</h3>
        <p>123 Charity Lane<br />Burla, Sambalpur, Odisha</p>
        <p>Email: support@mamata.org</p>
        <p>Phone: +91-98765-43210</p>
      </div>

      <div className="footer-section center">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section right">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
