import React from 'react';
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
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="home" className="hero">
      {/* Parallax background */}
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <img src={`${process.env.PUBLIC_URL}/aerial.jpg`} alt="" />
      </motion.div>
      <div className="hero__overlay" />

      {/* Content */}
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
          MYS Retreat
        </motion.h1>
        <motion.p className="hero__subtitle" variants={fadeUp}>
          White sand beaches meet pristine wilderness on Himbury Lake.
          <br />
          Your sanctuary awaits.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Stay
          </button>
          <button
            className="hero__btn hero__btn--ghost"
            onClick={() => document.getElementById('accommodations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="hero__scroll-cue"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
