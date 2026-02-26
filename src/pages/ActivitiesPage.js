import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Experience from '../components/Experience';

const ActivitiesPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="lake-kayak.jpg"
      label="Activities"
      title="Adventure Awaits"
      subtitle="From lakeside fishing to forest hikes — experience the best of Ontario's great outdoors."
    />
    <Experience />

    {/* Seasonal activities */}
    <section className="seasonal" style={{ padding: 'var(--space-lg) 0 var(--space-xl)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}
        >
          <p className="section-label">Seasons</p>
          <h2 className="section-heading">
            Fun <span className="accent">Year-Round</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {[
            { season: 'Spring', emoji: '🌸', items: ['Wildflower hikes', 'Fishing season opener', 'Bird watching', 'Kayaking'] },
            { season: 'Summer', emoji: '☀️', items: ['Beach swimming', 'Campfire nights', 'Water sports', 'Family games'] },
            { season: 'Fall', emoji: '🍂', items: ['Foliage tours', 'Cozy campfires', 'Mushroom foraging', 'Photography'] },
          ].map((s, i) => (
            <motion.div
              key={s.season}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              }}
            >
              <span style={{ fontSize: '2rem' }}>{s.emoji}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--brand-dark)', margin: '0.75rem 0 0.5rem' }}>{s.season}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontSize: '0.92rem', color: 'var(--text-light)', padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.main>
);

export default ActivitiesPage;
