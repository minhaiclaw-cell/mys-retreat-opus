import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import BookingWidget from '../components/BookingWidget';
import Accommodations from '../components/Accommodations';

const AccommodationsPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="aerial-forest.jpg"
      label="Accommodations"
      title="Find Your Perfect Stay"
      subtitle="From lakefront cottages to spacious RV sites — there's a place for everyone at MYS Retreat."
    />
    <BookingWidget />
    <Accommodations />
  </motion.main>
);

export default AccommodationsPage;
