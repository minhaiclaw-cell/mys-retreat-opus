import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Gallery from '../components/Gallery';

const GalleryPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="aerial.jpg"
      label="Gallery"
      title="See The Beauty"
      subtitle="172 acres of pristine nature on Himbury Lake — take a look around."
    />
    <Gallery />
  </motion.main>
);

export default GalleryPage;
