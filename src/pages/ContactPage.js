import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const ContactPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="contact-hero.jpg"
      label="Contact"
      title="Get In Touch"
      subtitle="Questions? We'd love to hear from you. Reach out anytime."
    />

    <section style={{ padding: 'var(--space-xl) 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: 'var(--space-xl)',
        }}>
          {[
            { icon: <FaPhone />, label: 'Phone', value: '(249) 888-8980', href: 'tel:2498888980' },
            { icon: <FaEnvelope />, label: 'Email', value: 'info@mysretreat.com', href: 'mailto:info@mysretreat.com' },
            { icon: <FaMapMarkerAlt />, label: 'Location', value: '2900 Highway 518\nKearney, ON P0A 1M0' },
            { icon: <FaClock />, label: 'Season', value: 'May – October\nOpen Victoria Day to Thanksgiving' },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'var(--white)', borderRadius: 'var(--radius)',
                padding: '2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: 'var(--sand)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem', color: 'var(--brand)', fontSize: '1.2rem',
              }}>
                {c.icon}
              </div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{c.label}</p>
              {c.href ? (
                <a href={c.href} style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--brand-dark)', fontWeight: 500 }}>{c.value}</a>
              ) : (
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--brand-dark)', fontWeight: 500, whiteSpace: 'pre-line' }}>{c.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: 'var(--radius)', overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: 'var(--space-xl)',
          }}
        >
          <iframe
            title="MYS Retreat Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800!2d-79.37!3d45.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2900+Highway+518%2C+Kearney%2C+ON!5e0!3m2!1sen!2sca!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)',
            borderRadius: 'var(--radius)',
            padding: 'var(--space-lg)',
            textAlign: 'center',
            color: 'var(--white)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--white)' }}>
            Stay Updated
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem', opacity: 0.95, lineHeight: 1.6 }}>
            Sign up for our newsletter to receive updates on events, special offers, and news from MYS Retreat.
          </p>
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            maxWidth: 500,
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: '1 1 250px',
                padding: '0.875rem 1.25rem',
                borderRadius: 'var(--radius)',
                border: 'none',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
            <button
              style={{
                padding: '0.875rem 2rem',
                background: 'var(--white)',
                color: 'var(--brand)',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Subscribe
            </button>
          </div>
          <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.8 }}>
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  </motion.main>
);

export default ContactPage;
