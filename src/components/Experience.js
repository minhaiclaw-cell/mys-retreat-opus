import React from 'react';
import { motion } from 'framer-motion';
import { FaFish, FaHiking, FaWater, FaFire, FaCamera, FaSnowflake } from 'react-icons/fa';
import './Experience.css';

const activities = [
  { icon: FaFish, title: 'Fishing', desc: 'Bass, pike, and trout in pristine Himbury Lake' },
  { icon: FaHiking, title: 'Hiking', desc: 'Trails through forests and along lakefront bluffs' },
  { icon: FaWater, title: 'Kayaking', desc: 'Explore hidden coves and calm crystal waters' },
  { icon: FaFire, title: 'Campfires', desc: 'Nightly gatherings with stargazing overhead' },
  { icon: FaCamera, title: 'Wildlife', desc: 'Moose, loons, eagles, and more in their habitat' },
  { icon: FaSnowflake, title: 'Four Seasons', desc: 'Every season brings a new kind of magic' },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      {/* Full-bleed image side */}
      <div className="experience__image">
        <img src={`${process.env.PUBLIC_URL}/kayaking.jpg`} alt="Kayaking on Himbury Lake" />
      </div>

      {/* Content side */}
      <div className="experience__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label" style={{ color: 'var(--sunset)' }}>Experience</p>
          <h2 className="section-heading" style={{ color: 'var(--white)' }}>
            More than a destination
          </h2>
        </motion.div>

        <div className="experience__grid">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
                className="exp-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 6 }}
              >
                <div className="exp-item__icon"><Icon /></div>
                <div>
                  <h3 className="exp-item__title">{act.title}</h3>
                  <p className="exp-item__desc">{act.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
