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
          <p className="section-label">Welcome to MYS Retreat</p>
          <h2 className="section-heading">
            Ontario's Premier <span className="accent">Family Campground</span>
          </h2>
          <p className="section-body">
            Experience family-friendly camping in Kearney, Ontario — just 2.5 hours north of Toronto 
            and minutes from Algonquin Provincial Park. Our 175+ acre campground features seasonal 
            RV sites, secluded tent camping, and waterfront cottages on beautiful Himbury Lake.
          </p>
          <p className="section-body" style={{ marginTop: '1rem' }}>
            Perfect for families seeking an affordable camping getaway in Ontario. Unlike crowded 
            national parks that book up months in advance, we offer flexible seasonal sites and 
            nightly camping options with guaranteed availability for your weekend escape or summer vacation.
          </p>
          <div className="intro__stats">
            <div className="intro__stat">
              <span className="intro__stat-number">175+</span>
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
