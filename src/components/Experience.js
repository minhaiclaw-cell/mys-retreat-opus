import React from 'react';
import { motion } from 'framer-motion';
import { FaFish, FaHiking, FaWater, FaFire, FaCamera, FaSnowflake } from 'react-icons/fa';
import './Experience.css';

const activities = [
  { icon: FaFish, title: 'Fishing', desc: 'Bass, pike, and trout in pristine Himbury Lake' },
  { icon: FaHiking, title: 'Hiking', desc: 'Trails through forests and along lakefront bluffs' },
  { icon: FaWater, title: 'Kayaking', desc: 'Explore hidden coves and calm crystal waters' },
  { icon: FaFire, title: 'Campfires', desc: 'Nightly gatherings with stargazing overhead' },
  { icon: FaCamera, title: 'Wildlife', desc: 'Moose, loons, eagles — all in their habitat' },
  { icon: FaSnowflake, title: 'Four Seasons', desc: 'Every season brings a new kind of magic' },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-heading">More than a destination</h2>
          <p className="section-body">
            Adventure on the water, quiet moments by the fire, or simply the sound
            of wind through the pines.
          </p>
        </motion.div>

        {/* Full-width image break */}
        <motion.div
          className="experience__hero-image"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src={`${process.env.PUBLIC_URL}/kayaking.jpg`} alt="Kayaking on Himbury Lake" />
        </motion.div>

        {/* Activity cards */}
        <div className="experience__grid">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
                className="activity-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="activity-card__icon"><Icon /></div>
                <h3 className="activity-card__title">{act.title}</h3>
                <p className="activity-card__desc">{act.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
