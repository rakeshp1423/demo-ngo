import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="newsletter-section" data-aos="fade-up">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay connected. Get updates about the children’s progress and our impact.</p>
      {!subscribed ? (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
      ) : (
        <p className="thank-you-msg">Thank you for subscribing! 🙌</p>
      )}
    </section>
  );
};

export default Newsletter;
