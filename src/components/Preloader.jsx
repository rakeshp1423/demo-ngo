import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Import the logo using ES Modules
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!loading) return null; // Don't render the preloader if loading is false

  return (
    <div className="preloader">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Use the imported logo */}
        <div className="spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;