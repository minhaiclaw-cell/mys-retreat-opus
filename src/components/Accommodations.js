import React from 'react';
import { motion } from 'framer-motion';
import './Accommodations.css';

const stays = [
  {
    title: 'Cottages',
    price: '$125',
    image: 'cottages.jpg',
    description: 'Fully furnished lakefront cottages with modern amenities, stunning views, and private decks.',
    features: ['Full Kitchen', 'WiFi', 'Fireplace', 'Private Deck', 'Lake View', 'Linens Provided'],
    featured: true,
  },
  {
    title: 'Tent Sites',
    price: '$45',
    image: 'campsite.jpg',
    description: '70 secluded sites nestled among towering pines. Fall asleep to the sound of nature.',
    features: ['Fire Pit', 'Water Nearby', 'Beach Access', 'Pet Friendly'],
  },
  {
    title: 'RV Sites',
    price: '$65',
    image: 'hero-2.jpg',
    description: '35 full-hookup sites with 30/50 amp service, water, and sewer — steps from the beach.',
    features: ['Full Hookup', '30/50 Amp', 'Picnic Table', 'Fire Pit'],
  },
  {
    title: 'RV Rentals',
    price: '$95',
    image: 'cabin.jpg',
    description: "Don't have an RV? No problem! Rent one of our fully-equipped RVs for the perfect experience.",
    features: ['Fully Equipped', 'Linens Included', 'Kitchenette', 'Pet Friendly'],
  },
  {
    title: 'Cabins',
    price: '$150',
    image: 'modular-cabin.jpg',
    description: 'Modern modular cabins with floor-to-ceiling glass windows. Fully equipped with linens, kitchenette, and everything you need.',
    features: ['Glass Windows', 'Full Linens', 'Kitchenette', 'Fully Equipped', 'Climate Control'],
  },
];

const Accommodations = () => (
  <section id="accommodations" className="accommodations">
    <div className="container">
      <motion.div
        className="accommodations__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Stay</p>
        <h2 className="section-heading">
          Choose Your <span className="accent">Experience</span>
        </h2>
        <p className="section-body">
          From cozy cottages to spacious RV sites — we have the perfect spot
          for your Ontario camping getaway.
        </p>
      </motion.div>

      <div className="accommodations__grid">
        {stays.map((stay, i) => (
          <motion.article
            key={stay.title}
            className={`stay-card ${stay.featured ? 'stay-card--featured' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="stay-card__img">
              <img src={`${process.env.PUBLIC_URL}/${stay.image}`} alt={stay.title} loading="lazy" />
              <div className="stay-card__img-overlay" />
              <div className="stay-card__price-tag">
                <span className="stay-card__price">{stay.price}</span>
                <span className="stay-card__per">/night</span>
              </div>
            </div>

            <div className="stay-card__body">
              <h3 className="stay-card__title">{stay.title}</h3>
              <p className="stay-card__desc">{stay.description}</p>
              <ul className="stay-card__features">
                {stay.features.map((f) => (
                  <li key={f}><span className="stay-card__dot" />{f}</li>
                ))}
              </ul>
              <button
                className="stay-card__cta"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now →
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Accommodations;
