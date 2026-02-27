import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Accommodations from '../components/Accommodations';
import Experience from '../components/Experience';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const HomePage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Hero />
    
    {/* 2026 Season Announcement Banner */}
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)',
        padding: '1.5rem 0',
        textAlign: 'center',
        color: 'var(--white)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p style={{
          fontSize: '1.15rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          margin: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-display)' }}>Now Accepting Bookings & Seasonal Sites for the 2026 Season</span> — Reserve Your Spot Today!
        </p>
      </div>
    </motion.section>

    <Intro />
    <Accommodations preview />
    <div style={{ textAlign: 'center', padding: '0 0 var(--space-lg)' }}>
      <Link to="/accommodations" className="btn btn--outline">
        View All Accommodations →
      </Link>
    </div>
    <Experience />
    
    {/* Seasonal Sites Section */}
    <section style={{ padding: 'var(--space-xl) 0', background: 'var(--sand)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}
        >
          <p className="section-label">Extended Stays</p>
          <h2 className="section-heading">
            Seasonal <span className="accent">Site Rentals</span>
          </h2>
          <p className="section-body" style={{ margin: '0 auto' }}>
            Make MYS Retreat your home away from home all season long. We offer seasonal site rentals 
            for both tent camping and RV sites from May through October.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {[
            {
              icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20L12 4L21 20H3Z" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M12 4V12" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 16H17" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Seasonal Tent Sites',
              desc: 'Secure your favorite secluded tent site for the entire 2026 season. Perfect for weekend warriors who want a guaranteed spot all summer.',
              features: ['May – October', 'Fire pit included', 'Beach access', 'Storage available'],
            },
            {
              icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="9" width="18" height="10" rx="2" stroke="var(--brand)" strokeWidth="1.5" fill="none"/>
                  <path d="M7 9V7C7 6.46957 7.21071 5.96086 7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5H15C15.5304 5 16.0391 5.21071 16.4142 5.58579C16.7893 5.96086 17 6.46957 17 7V9" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="7" cy="19" r="1.5" fill="var(--brand)"/>
                  <circle cx="17" cy="19" r="1.5" fill="var(--brand)"/>
                  <path d="M10 13H14" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Seasonal RV Sites',
              desc: 'Park your RV and leave it all season. Full hookups with water, sewer, and 30/50 amp electrical service. Enjoy the freedom of your own seasonal site.',
              features: ['May – October', 'Full hookups', 'Picnic table & fire pit', 'Convenient location', '30/50 amp service'],
            },
          ].map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '2.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{option.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--brand-dark)',
                marginBottom: '0.75rem',
              }}>
                {option.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-light)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                {option.desc}
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '1.5rem',
                textAlign: 'left',
                flex: '1',
              }}>
                {option.features.map(feature => (
                  <li key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    padding: '0.35rem 0',
                  }}>
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--brand)',
                      flexShrink: 0,
                    }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--brand)',
                fontWeight: 600,
                marginBottom: '1rem',
              }}>
                Limited sites for 2026 season remaining
              </p>
              <Link to="/contact" className="btn btn--primary" style={{ width: '100%', textAlign: 'center' }}>
                Contact Us for Rates
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: 'var(--space-lg)',
            padding: '2rem',
            background: 'var(--white)',
            borderRadius: 'var(--radius)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            maxWidth: 700,
            margin: 'var(--space-lg) auto 0',
          }}
        >
          <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--brand-dark)' }}>Limited availability.</strong> Seasonal sites are 
            allocated on a first-come, first-served basis. Contact our office at{' '}
            <a href="tel:2498888980" style={{ color: 'var(--brand)', fontWeight: 600 }}>(249) 888-8980</a>
            {' '}or{' '}
            <a href="mailto:info@mysretreat.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>
              info@mysretreat.com
            </a>
            {' '}to secure yours for 2026.
          </p>
        </motion.div>
      </div>
    </section>

    <Stats />
    <Testimonials />
    <section className="home-cta">
      <div className="container" style={{ textAlign: 'center', padding: 'var(--space-xl) 0' }}>
        <h2 className="section-heading">
          Ready for Your <span className="accent">Getaway?</span>
        </h2>
        <p className="section-body" style={{ margin: '0 auto 2rem', maxWidth: 500 }}>
          Book your stay at MYS Retreat and experience the magic of Himbury Lake.
        </p>
        <Link to="/accommodations" className="btn btn--primary">
          Find Your Stay
        </Link>
      </div>
    </section>
  </motion.main>
);

export default HomePage;
