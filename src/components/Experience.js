import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const activities = [
  { image: 'campfire.jpg', title: 'Campfires', desc: 'Ignite your evenings with nightly campfire gatherings. Share stories, roast marshmallows, and make lasting memories.', alt: 'Family campfire gathering at MYS Retreat campground Ontario' },
  { image: 'hiking.jpg', title: 'Hiking', desc: 'Embrace the wilderness with year-round trekking through pine forests and along lakefront bluffs.', alt: 'Hiking trails near Algonquin Park at MYS Retreat Kearney Ontario' },
  { image: 'kayaking-canoeing.jpg', title: 'Kayaking & Canoeing', desc: 'Paddle into paradise. Explore hidden coves and enjoy the tranquility of nature from the water.', alt: 'Kayaking and canoeing on Himbury Lake Ontario family camping' },
  { image: 'beach-photo.jpg', title: 'White Sand Beach', desc: 'Relax on our exclusive white sand beach with pristine lakefront access. Perfect for families and swimming.', alt: 'White sand beach at family campground Ontario near Toronto' },
  { image: 'fishing-photo.jpg', title: 'Fishing', desc: 'Cast away your worries — excellent bass, pike, and trout fishing right from our dock on Himbury Lake.', alt: 'Fishing on Himbury Lake at MYS Retreat camping Ontario' },
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
          activities for all ages near Algonquin Park.
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
              <img src={`${process.env.PUBLIC_URL}/${act.image}`} alt={act.alt || act.title} loading="lazy" />
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
