import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react'; // Add useEffect here
import SuccessSlider from './components/SuccessSlider';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Hero from './components/Hero';
import Motto from './components/Motto';
import Navbar from './components/Navbar';
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Motto />
      <SuccessSlider />
      <Donate />
      <Newsletter />
      <ContactForm />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
