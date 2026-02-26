import React from 'react';
import { motion } from 'framer-motion';
import './PageHero.css';

const PageHero = ({ image, label, title, subtitle }) => (
  <section className="page-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${image})` }}>
    <div className="page-hero__overlay" />
    <div className="container page-hero__content">
      <motion.p
        className="section-label section-label--light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.p>
      <motion.h1
        className="page-hero__title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="page-hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
