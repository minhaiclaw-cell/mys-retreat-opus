import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import BookingWidget from '../components/BookingWidget';
import Accommodations from '../components/Accommodations';

const AccommodationsPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="rv-3.jpg"
      label="Accommodations"
      title="Find Your Perfect Stay"
      subtitle="From lakefront cottages to spacious RV sites — there's a place for everyone at MYS Retreat."
    />
    <BookingWidget />
    <Accommodations />

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
              icon: '⛺',
              title: 'Seasonal Tent Sites',
              desc: 'Secure your favorite secluded tent site for the entire 2026 season. Perfect for weekend warriors who want a guaranteed spot all summer.',
              features: ['May – October', 'Fire pit included', 'Beach access', 'Storage available'],
            },
            {
              icon: '🚐',
              title: 'Seasonal RV Sites',
              desc: 'Park your RV and leave it all season. Full hookups with water, sewer, and 30/50 amp electrical service.',
              features: ['May – October', 'Full hookups', 'Picnic table & fire pit', 'Convenient location'],
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
              }}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{option.icon}</span>
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
                May be bookable via our portal or contact us directly
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
  </motion.main>
);

export default AccommodationsPage;
