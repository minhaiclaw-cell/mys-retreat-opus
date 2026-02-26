import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Accommodations from '../components/Accommodations';
import Experience from '../components/Experience';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const HomePage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Hero />
    <Intro />
    <Accommodations preview />
    <div style={{ textAlign: 'center', padding: '0 0 var(--space-lg)' }}>
      <Link to="/accommodations" className="btn btn--outline">
        View All Accommodations →
      </Link>
    </div>
    <Experience />
    <Stats />
    <Testimonials />
    <section className="home-cta">
      <div className="container" style={{ textAlign: 'center', padding: 'var(--space-xl) 0' }}>
        <h2 className="section-heading">
          Ready for Your <span className="accent">Getaway?</span>
        </h2>
        <p className="section-body" style={{ margin: '0 auto 2rem', maxWidth: 500 }}>
          Book your stay at MYS Retreat and experience the magic of Himbury Lake.
        </p>
        <a
          href="https://www.fireflybookings.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Book Now
        </a>
      </div>
    </section>
  </motion.main>
);

export default HomePage;
