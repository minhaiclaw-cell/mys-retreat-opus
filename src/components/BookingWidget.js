import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BookingWidget.css';

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [stayType, setStayType] = useState('');

  const handleCheck = () => {
    // Will integrate with booking provider API later
    // For now, could redirect to Firefly with params
    const url = 'https://www.fireflybookings.com'; // placeholder
    window.open(url, '_blank');
  };

  return (
    <motion.div
      className="booking-widget"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="booking-widget__inner">
        <div className="booking-widget__field">
          <label className="booking-widget__label">Check In</label>
          <input
            type="date"
            className="booking-widget__input"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="booking-widget__divider" />

        <div className="booking-widget__field">
          <label className="booking-widget__label">Check Out</label>
          <input
            type="date"
            className="booking-widget__input"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="booking-widget__divider" />

        <div className="booking-widget__field">
          <label className="booking-widget__label">Accommodation</label>
          <select
            className="booking-widget__input booking-widget__select"
            value={stayType}
            onChange={(e) => setStayType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="cottage">Cottage</option>
            <option value="tent">Tent Site</option>
            <option value="rv-site">RV Site</option>
            <option value="rv-rental">RV Rental</option>
            <option value="cabin">Cabin by Mitziville</option>
          </select>
        </div>

        <button className="booking-widget__btn" onClick={handleCheck}>
          Check Availability
        </button>
      </div>
    </motion.div>
  );
};

export default BookingWidget;
