import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

const Intro = () => (
  <section id="intro" className="intro">
    <div className="container">
      <div className="intro__grid">
        <motion.div
          className="intro__text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Welcome</p>
          <h2 className="section-heading">
            Lakefront Camping & <span className="accent">Cottage Rentals</span>
          </h2>
          <p className="section-body">
            Come and relax in this beautiful, fun, and family-friendly environment. Immerse yourself 
            in the natural beauty of Kearney — towering pine forests, crystal-clear Himbury Lake, and 
            stunning landscapes all around you, just minutes from Algonquin Provincial Park.
          </p>
          <p className="section-body" style={{ marginTop: '1rem' }}>
            We're looking forward to hosting you and making your stay a memorable one. 
            Whether you're a family, a group of friends, or a solo adventurer — find nature's embrace here.
          </p>
          <div className="intro__stats">
            <div className="intro__stat">
              <span className="intro__stat-number">172</span>
              <span className="intro__stat-label">Acres</span>
            </div>
            <div className="intro__stat">
              <span className="intro__stat-number">3</span>
              <span className="intro__stat-label">Cottages</span>
            </div>
            <div className="intro__stat">
              <span className="intro__stat-number">70</span>
              <span className="intro__stat-label">Camp Sites</span>
            </div>
            <div className="intro__stat">
              <span className="intro__stat-number">65</span>
              <span className="intro__stat-label">RV Sites</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="intro__images"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="intro__image intro__image--main">
            <img src={`${process.env.PUBLIC_URL}/cabin.jpg`} alt="Lakefront cottage rental at MYS Retreat family campground Ontario" loading="lazy" />
          </div>
          <div className="intro__image intro__image--accent">
            <img src={`${process.env.PUBLIC_URL}/campfire.jpg`} alt="Family campfire at MYS Retreat camping Ontario" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Intro;
