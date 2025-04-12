import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react'; // Add useEffect here
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Hero from './components/Hero';
import Motto from './components/Motto';
import Navbar from './components/Navbar';

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
      <Donate />
      <Contact />
    </>
  );
}

export default App;
