import React from 'react';
import { Link } from 'react-router-dom';
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
            <span className="accent">172 Acres</span> of Natural Beauty
          </h2>
          <p className="section-body">
            Nestled on 172 acres of pristine Canadian wilderness along the shores of Himbury Lake 
            in Kearney, Ontario. Our property features diverse terrain including towering pine forests, 
            tranquil rivers, dramatic cliff faces, and extensive hiking trails. Enjoy direct lakefront 
            access with a private beach and fishing dock — all just minutes from 
            Algonquin Provincial Park.
          </p>
          <Link to="/about" className="btn btn--outline" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            Learn More About Us →
          </Link>
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
