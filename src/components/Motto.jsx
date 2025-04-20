// src/components/Motto.jsx
import React from 'react';
import './Motto.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const lineVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4 }
  }),
};

const Motto = () => {
  const lines = [
    "Every child deserves a chance to dream.",
    "We make sure they get to live it."
  ];

  return (
    <section id="motto" className="motto-section">
      <div className="motto-bg-overlay"></div>
      <div className="motto-container">
        <FaQuoteLeft className="quote-icon left" />
        <h2>Our Motto</h2>

        {lines.map((line, i) => (
          <motion.p
            className="motto-text"
            key={i}
            custom={i}
            variants={lineVariant}
            initial="hidden"
            animate="visible"
          >
            {line}
          </motion.p>
        ))}

        <FaQuoteRight className="quote-icon right" />
        <div className="motto-line"></div>

        <motion.p
          className="motto-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Our mission goes beyond charity — we aim to create opportunity, dignity, and a future filled with hope.
        </motion.p>

        <form className="motto-form">
          <input
            type="text"
            placeholder="Your own inspirational motto"
            required
          />
          <button type="submit">Submit Motto</button>
        </form>
      </div>
    </section>
  );
};

export default Motto;
