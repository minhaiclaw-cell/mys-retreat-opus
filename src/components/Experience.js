import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const activities = [
  { image: 'campfire.jpg', title: 'Campfires', desc: 'Ignite your evenings with nightly campfire gatherings. Share stories, roast marshmallows, and make lasting memories.' },
  { image: 'hiking.jpg', title: 'Hiking', desc: 'Embrace the wilderness with year-round trekking through pine forests and along lakefront bluffs.' },
  { image: 'fishing.jpg', title: 'Fishing', desc: 'Cast away your worries — excellent bass, pike, and trout fishing right from our dock on Himbury Lake.' },
  { image: 'lake-kayak.jpg', title: 'Kayaking & Canoeing', desc: 'Paddle into paradise. Explore hidden coves and enjoy the tranquility of nature from the water.' },
  { image: 'hero-bg.jpg', title: 'White Sand Beach', desc: 'Relax on our exclusive white sand beach with pristine lakefront access. Perfect for families and swimming.' },
];

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <motion.div
        className="experience__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Activities</p>
        <h2 className="section-heading">
          Camping <span className="accent">Adventures</span>
        </h2>
        <p className="section-body">
          Adventure awaits at every turn. Explore our wide range of outdoor
          activities for all ages.
        </p>
      </motion.div>

      <div className="experience__grid">
        {activities.map((act, i) => (
          <motion.div
            key={act.title}
            className="act-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="act-card__image">
              <img src={`${process.env.PUBLIC_URL}/${act.image}`} alt={act.title} loading="lazy" />
            </div>
            <div className="act-card__content">
              <h3 className="act-card__title">{act.title}</h3>
              <p className="act-card__desc">{act.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
