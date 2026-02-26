import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

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
            <li>
              <a href="https://www.fireflybookings.com" target="_blank" rel="noopener noreferrer" className="footer__link">Book Now</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__links">
            <li><a href="tel:2498888980" className="footer__link"><FaPhone style={{ marginRight: 8 }} /> (249) 888-8980</a></li>
            <li><a href="mailto:info@mysretreat.com" className="footer__link"><FaEnvelope style={{ marginRight: 8 }} /> info@mysretreat.com</a></li>
            <li className="footer__link" style={{ cursor: 'default' }}>2900 Highway 518, Kearney, ON</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Follow Us</h4>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="footer__social-link" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 MYS Retreat. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
