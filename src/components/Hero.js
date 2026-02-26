import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -60]);

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="home" className="hero">
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <img src={`${process.env.PUBLIC_URL}/aerial.jpg`} alt="" />
      </motion.div>
      <div className="hero__overlay" />

      <motion.div
        className="hero__content"
        style={{ opacity: contentOpacity, y: contentY }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero__label" variants={fadeUp}>
          Kearney, Ontario
        </motion.p>
        <motion.h1 className="hero__title" variants={fadeUp}>
          A Family Campground<br />
          <span className="hero__accent">in the Heart of Nature</span>
        </motion.h1>
        <motion.p className="hero__subtitle" variants={fadeUp}>
          White sand beaches, pine forests, and Himbury Lake — your home away from home
          since day one.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <Link
            className="hero__btn hero__btn--primary"
            to="/accommodations"
          >
            Book Your Stay
          </Link>
          <button
            className="hero__btn hero__btn--ghost"
            onClick={() => {
              const el = document.getElementById('experience') || document.getElementById('intro');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Activities
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-cue"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="hero__scroll-text">Scroll to explore</span>
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
