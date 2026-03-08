import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // For now, just log the email (you can connect to a service later)
      console.log('Email collected:', email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="booking-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="booking-modal"
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="booking-modal__close" onClick={onClose}>×</button>
            
            {!submitted ? (
              <>
                <div className="booking-modal__icon">📅</div>
                <h2 className="booking-modal__title">Booking Opening Soon!</h2>
                <p className="booking-modal__message">
                  Our online booking system will be available shortly. Leave your email 
                  and we'll notify you as soon as reservations open.
                </p>
                
                <form onSubmit={handleSubmit} className="booking-modal__form">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="booking-modal__input"
                  />
                  <button type="submit" className="booking-modal__submit">
                    Notify Me
                  </button>
                </form>

                <p className="booking-modal__alt">
                  <strong>Need to book now?</strong><br />
                  Call us at <a href="tel:2498888980">(249) 888-8980</a> or email{' '}
                  <a href="mailto:info@mysretreat.com">info@mysretreat.com</a>
                </p>
              </>
            ) : (
              <div className="booking-modal__success">
                <div className="booking-modal__check">✓</div>
                <h2>Thank You!</h2>
                <p>We'll notify you when booking opens.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
