import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const reviews = [
  { name: 'Sarah M.', text: "The white sand beach was unreal — we didn't expect that in Ontario. Kids loved it, we're already planning next summer." },
  { name: 'James & Laura K.', text: "The cottage was spotless and the lake views from the deck were stunning. Easily the best weekend trip we've taken." },
  { name: 'Mike T.', text: "Perfect RV spot. Full hookups, quiet neighbours, incredible fishing right off the dock. What more could you want?" },
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <motion.div className="testimonials__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Testimonials</p>
        <h2 className="section-heading">What Our <span className="accent">Guests</span> Say</h2>
      </motion.div>

      <div className="testimonials__grid">
        {reviews.map((r, i) => (
          <motion.blockquote key={i} className="review"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="review__stars">
              {[...Array(5)].map((_, j) => <FaStar key={j} />)}
            </div>
            <p className="review__text">"{r.text}"</p>
            <cite className="review__author">{r.name}</cite>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
