import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Booking.css';

const Booking = () => (
  <section id="booking" className="booking">
    <div className="container">
      <motion.div className="booking__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Contact</p>
        <h2 className="section-heading">
          We Are <span className="accent">Waiting for You!</span>
        </h2>
        <p className="section-body" style={{ margin: '0 auto' }}>
          Ready to escape? Get in touch to reserve your spot. We'd love to welcome
          you and your family to Himbury Lake.
        </p>
      </motion.div>

      <div className="booking__layout">
        <motion.div className="booking__map"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={`${process.env.PUBLIC_URL}/fall-bg.jpg`} alt="Fall at MYS Retreat" />
        </motion.div>

        <motion.div className="booking__info"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="booking__contacts">
            <a href="tel:2498888980" className="booking__contact">
              <div className="booking__contact-icon"><FaPhone /></div>
              <div>
                <span className="booking__contact-label">Phone</span>
                <span className="booking__contact-value">(249) 888-8980</span>
              </div>
            </a>
            <a href="mailto:info@mysretreat.com" className="booking__contact">
              <div className="booking__contact-icon"><FaEnvelope /></div>
              <div>
                <span className="booking__contact-label">Email</span>
                <span className="booking__contact-value">info@mysretreat.com</span>
              </div>
            </a>
            <div className="booking__contact">
              <div className="booking__contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <span className="booking__contact-label">Location</span>
                <span className="booking__contact-value">2900 Highway 518<br />Kearney, ON P0A 1M0</span>
              </div>
            </div>
          </div>

          <motion.a href="tel:2498888980" className="booking__cta"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          >
            Call to Reserve
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Booking;
