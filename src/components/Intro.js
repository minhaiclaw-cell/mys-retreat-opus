import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

const Intro = () => {
  return (
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
              Where the forest<br />meets the lake
            </h2>
            <p className="section-body">
              Nestled on the shores of Himbury Lake, MYS Retreat is a place
              to disconnect from the noise and reconnect with what matters.
              Whether you're seeking adventure on the water, quiet moments
              by the fire, or simply the sound of wind through the pines —
              this is your place.
            </p>
            <div className="intro__stats">
              <div className="intro__stat">
                <span className="intro__stat-number">4+</span>
                <span className="intro__stat-label">Acres of beach</span>
              </div>
              <div className="intro__stat">
                <span className="intro__stat-number">3</span>
                <span className="intro__stat-label">Stay options</span>
              </div>
              <div className="intro__stat">
                <span className="intro__stat-number">∞</span>
                <span className="intro__stat-label">Memories made</span>
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
              <img src={`${process.env.PUBLIC_URL}/cabin.jpg`} alt="Lakefront cottage" />
            </div>
            <div className="intro__image intro__image--accent">
              <img src={`${process.env.PUBLIC_URL}/campfire.jpg`} alt="Campfire at sunset" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
