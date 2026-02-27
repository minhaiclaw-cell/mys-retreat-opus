import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const reviews = [
  { name: 'Jen C.', text: "We had amazing 3 days stay at the cottage. Awesome cottage! It's clean, cozy and the perfect gateway! Diep was an excellent host and was great at making sure we had everything! We are headed back to the great gateway this year!" },
  { name: 'Kim', text: "What a beautiful relaxing resort. So peaceful with a lot of hiking trails and nature all around. The staff are so friendly and very helpful. The new owners so wonderful and welcoming. Will definitely be back." },
  { name: 'Jay Luke', text: "I recently stayed at this peaceful cottage and it was perfect! Nestled in lush greenery, it offers a serene escape. The cozy, beautifully decorated interior made me feel right at home, and the fully equipped kitchen and comfortable bedrooms were fantastic. The hosts were welcoming and attentive, ensuring a wonderful stay. Highly recommend for anyone seeking a tranquil retreat. Five stars!" },
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
