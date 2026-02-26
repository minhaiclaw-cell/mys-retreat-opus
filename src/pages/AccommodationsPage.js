import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Accommodations from '../components/Accommodations';

const AccommodationsPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="cottages.jpg"
      label="Accommodations"
      title="Find Your Perfect Stay"
      subtitle="From lakefront cottages to spacious RV sites — there's a place for everyone at MYS Retreat."
    />
    <Accommodations />
    <section style={{ textAlign: 'center', padding: '0 0 var(--space-xl)' }}>
      <a
        href="https://www.fireflybookings.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--primary"
      >
        Book Your Stay
      </a>
    </section>
  </motion.main>
);

export default AccommodationsPage;
