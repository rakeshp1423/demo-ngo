import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [donated, setDonated] = useState(false);

  const handlePayment = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const options = {
        key: "rzp_test_1234567890abcdef", // Replace with your test key
        amount: 10000, // in paise = ₹100
        currency: "INR",
        name: "Mamata NGO",
        description: "Support for Child Education",
        image: "https://your-logo-url.png",
        handler: function (response) {
          console.log("Payment successful:", response);
          setDonated(true);
        },
        prefill: {
          name: "Your Name",
          email: "you@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "NGO Office Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  return (
    <section id="donate" className="donate-section" data-aos="fade-up">
      <h2>Support Our Mission</h2>
      <p>
        Your donation can help a child break the cycle of poverty and pursue their dreams.
        Every rupee you give goes directly towards education, healthcare, and growth.
      </p>
      {!donated ? (
        <button className="donate-btn" onClick={handlePayment}>
          Donate Now
        </button>
      ) : (
        <p className="thank-you">Thank you for your generous support! 🙏</p>
      )}
    </section>
  );
};

export default Donate;
