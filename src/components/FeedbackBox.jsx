// src/components/FeedbackBox.jsx
import React, { useState } from "react";
import "./FeedbackBox.css";
import { motion } from "framer-motion";

const FeedbackBox = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && message.trim()) {
      console.log("Feedback Submitted:", { name, message });
      setSubmitted(true);
    } else {
      alert("Please fill out both fields!");
    }
  };

  return (
    <section className="feedback-section" id="feedback">
      <h2>Feedback / Suggestion</h2>
      {submitted ? (
        <motion.div
          className="thank-you"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3>Thank you, {name}! 🎉</h3>
          <p>We appreciate your feedback.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Your Suggestions or Feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default FeedbackBox;
