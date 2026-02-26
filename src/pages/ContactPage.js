import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronDown } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const faqs = [
  { q: 'What are the check-in and check-out times?', a: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in may be available upon request.' },
  { q: 'Are pets allowed?', a: 'Yes! We are a pet-friendly campground. We ask that all pets are kept on a leash and cleaned up after.' },
  { q: 'Is there WiFi available?', a: 'WiFi is available in our cottages. The campground and RV sites have limited cellular coverage — embrace the disconnect!' },
  { q: 'What amenities are on-site?', a: 'We have a white sand beach, boat launch, fish cleaning station, playground, laundry facilities, and a general store.' },
  { q: 'Can I have a campfire?', a: 'Campfires are allowed at designated fire pits when there is no fire ban in effect. Firewood is available for purchase.' },
  { q: 'How do I get there?', a: 'We are located at 2900 Highway 518, Kearney, Ontario. About 2.5 hours north of Toronto via Highway 11.' },
];

const FAQ = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="faq-item"
      initial={false}
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        marginBottom: '0.75rem',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', padding: '1.25rem 1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500,
          color: 'var(--brand-dark)', background: 'none', border: 'none', cursor: 'pointer',
        }}
      >
        {faq.q}
        <FaChevronDown style={{
          transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0)',
          flexShrink: 0, marginLeft: '1rem', color: 'var(--brand)',
        }} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{
          padding: '0 1.5rem 1.25rem', fontSize: '0.92rem',
          color: 'var(--text-light)', lineHeight: 1.7,
        }}>
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ContactPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="fall-bg.jpg"
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

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-heading">
              Common <span className="accent">Questions</span>
            </h2>
          </div>
          {faqs.map((faq) => (
            <FAQ key={faq.q} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  </motion.main>
);

export default ContactPage;
