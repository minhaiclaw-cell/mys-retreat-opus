import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Accommodations from './components/Accommodations';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      <div className="app">
        <Navigation activeSection={activeSection} />
        <Hero />
        <Intro />
        <Accommodations />
        <Experience />
        <Gallery />
        <Testimonials />
        <Booking />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
