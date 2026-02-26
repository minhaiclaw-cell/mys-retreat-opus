import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Accommodations.css';

const stays = [
  {
    title: 'Cottages',
    price: '$125',
    image: 'cottages.jpg',
    description: 'Fully equipped lakefront cottages with modern amenities, stunning views, and private decks overlooking Himbury Lake.',
    features: ['Full Kitchen', 'WiFi', 'Fireplace', 'Private Deck', 'Lake View', 'Linens Provided'],
  },
  {
    title: 'RV Sites',
    price: '$65',
    image: 'hero-2.jpg',
    description: 'Spacious full-hookup sites with 30/50 amp service, water, and sewer — steps from the white sand beach.',
    features: ['Full Hookup', '30/50 Amp', 'Picnic Table', 'Fire Pit', 'Pet Friendly', 'Beach Access'],
  },
  {
    title: 'Tent Sites',
    price: '$45',
    image: 'campsite.jpg',
    description: 'Secluded sites nestled among towering pines. Fall asleep to the sound of the lake, wake to birdsong.',
    features: ['Fire Pit', 'Water Nearby', 'Beach Access', 'Wilderness Setting', 'Pet Friendly', 'Stargazing'],
  },
];

const Accommodations = () => {
  return (
    <section id="accommodations" className="accommodations">
      <div className="container">
        <motion.div
          className="accommodations__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Accommodations</p>
          <h2 className="section-heading">Choose Your Sanctuary</h2>
          <p className="section-body">
            Three ways to experience MYS — from luxury lakefront cottages to
            wilderness camping under the stars.
          </p>
        </motion.div>

        <div className="accommodations__grid">
          {stays.map((stay, i) => (
            <motion.article
              key={stay.title}
              className="stay-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="stay-card__image-wrap">
                <motion.img
                  src={`${process.env.PUBLIC_URL}/${stay.image}`}
                  alt={stay.title}
                  className="stay-card__image"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="stay-card__price-badge">
                  <span className="stay-card__price">{stay.price}</span>
                  <span className="stay-card__per">/night</span>
                </div>
              </div>

              <div className="stay-card__body">
                <h3 className="stay-card__title">{stay.title}</h3>
                <p className="stay-card__desc">{stay.description}</p>

                <ul className="stay-card__features">
                  {stay.features.map((f) => (
                    <li key={f} className="stay-card__feature">
                      <span className="stay-card__dot" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className="stay-card__cta"
                  whileHover={{ x: 4 }}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Reserve <FaArrowRight className="stay-card__arrow" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
