import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // TODO: integrate with email service (Mailchimp, etc.)
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="footer__newsletter">
      <h4 className="footer__heading">Stay Connected</h4>
      <p className="footer__newsletter-text">
        Get updates on seasonal events, promotions, and campground news.
      </p>
      {submitted ? (
        <p className="footer__newsletter-thanks">Thanks for subscribing! 🌲</p>
      ) : (
        <form className="footer__newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="footer__newsletter-input"
            required
          />
          <button type="submit" className="footer__newsletter-btn">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="MYS Retreat" className="footer__logo" />
          <p className="footer__tagline">Your home away from home on Himbury Lake.<br />Kearney, Ontario.</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {[
              ['Home', '/'], ['Stay', '/accommodations'], ['Activities', '/activities'],
              ['Gallery', '/gallery'], ['Contact', '/contact']
            ].map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__links">
            <li><a href="tel:2498888980" className="footer__link"><FaPhone style={{ marginRight: 8 }} /> (249) 888-8980</a></li>
            <li><a href="mailto:info@mysretreat.com" className="footer__link"><FaEnvelope style={{ marginRight: 8 }} /> info@mysretreat.com</a></li>
            <li className="footer__link" style={{ cursor: 'default' }}>2900 Highway 518, Kearney, ON</li>
          </ul>
          <div className="footer__social" style={{ marginTop: '1rem' }}>
            <a href="#" className="footer__social-link" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="footer__social-link" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <Newsletter />
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 MYS Retreat. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
