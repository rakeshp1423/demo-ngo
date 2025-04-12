// src/components/Contact.jsx
import React from 'react';
import './SectionStyles.css';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
