import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/accommodations', label: 'Stay' },
  { path: '/activities', label: 'Activities' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      >
        <div className="nav__inner">
          <Link to="/" className="nav__logo">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="MYS Retreat" className="nav__logo-img" />
          </Link>

          <div className="nav__links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav__link ${location.pathname === item.path ? 'nav__link--active' : ''}`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="nav__indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/accommodations"
              className="nav__link nav__link--cta"
            >
              Book Now
            </Link>
          </div>

          <button className="nav__mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="nav__mobile-overlay"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="nav__mobile-panel"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="nav__mobile-link"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.06 }}
              >
                <Link
                  to="/accommodations"
                  className="nav__mobile-link nav__mobile-link--cta"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
              <div className="nav__mobile-contact">
                <a href="tel:2498888980">(249) 888-8980</a>
                <a href="mailto:info@mysretreat.com">info@mysretreat.com</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
