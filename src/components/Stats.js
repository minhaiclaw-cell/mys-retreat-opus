import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const Stats = () => (
  <section className="stats">
    <div className="container">
      <motion.div
        className="stats__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="stats__text">
          <p className="section-label">The Property</p>
          <h2 className="section-heading">
            Your Ontario <span className="accent">Wilderness Escape</span>
          </h2>
          <p className="section-body">
            175+ acres of pristine Canadian wilderness with exclusive white sand
            beach and lakefront access to Himbury Lake. Gateway to Algonquin Park.
          </p>
        </div>

        <div className="stats__map">
          <motion.img
            src={`${process.env.PUBLIC_URL}/map.jpg`}
            alt="MYS Retreat campground map"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Stats;
