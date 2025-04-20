// src/components/ContactForm.jsx
import { motion } from "framer-motion"; // Import motion from Framer Motion
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import contactImage from "../assets/ngo2.jpg";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll get back to you soon."); // Show success toast
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      rating: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        {/* Animate the form container */}
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }} // Start hidden and slightly to the right
          animate={{ opacity: 1, x: 0 }} // Fade in and slide to position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">-- Select Subject --</option>
              <option value="Help">Help / Support</option>
              <option value="Feedback">Give Feedback</option>
              <option value="Partnership">Partnership</option>
              <option value="Volunteer">Volunteer</option>
            </select>

            {formData.subject === "Feedback" && (
              <div className="rating-row">
                <label>How would you rate us?</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="">Select Rating</option>
                  <option value="5">🌟🌟🌟🌟🌟</option>
                  <option value="4">🌟🌟🌟🌟</option>
                  <option value="3">🌟🌟🌟</option>
                  <option value="2">🌟🌟</option>
                  <option value="1">🌟</option>
                </select>
              </div>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render toast notifications */}
    </section>
  );
};

export default ContactForm;
