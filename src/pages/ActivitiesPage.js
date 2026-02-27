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
      image="aerial-forest.jpg"
      label="Activities"
      title="Adventure Awaits"
      subtitle="From lakeside fishing to forest hikes — experience the best of Ontario's great outdoors."
    />
    <Experience />

    {/* Seasonal activities */}
    <section className="seasonal" style={{ padding: 'var(--space-lg) 0 var(--space-md)' }}>
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
          <p className="section-body" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Every season brings new adventures. From spring wildflowers to winter wonderlands, 
            MYS Retreat is your perfect getaway destination all year long.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {[
            { 
              season: 'Spring', 
              icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 7 5 7 10C7 12.2091 8.79086 14 11 14C11 14 11 18 7 22C7 22 17 22 17 22C13 18 13 14 13 14C15.2091 14 17 12.2091 17 10C17 5 12 2 12 2Z" stroke="#2C5248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#6B9080"/>
                  <circle cx="12" cy="10" r="2" fill="#E8C4A0"/>
                </svg>
              ),
              items: ['Wildflower hikes', 'Fishing season opener', 'Bird watching', 'Kayaking', 'Nature photography']
            },
            { 
              season: 'Summer', 
              icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" fill="#E8C4A0" stroke="#2C5248" strokeWidth="1.5"/>
                  <path d="M12 2V4M12 20V22M22 12H20M4 12H2M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="#2C5248" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              items: ['Beach swimming', 'Campfire nights', 'Water sports', 'Family games', 'Paddle boarding']
            },
            { 
              season: 'Fall', 
              icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 8 6 8 10C8 12 9 13 10 13.5C8 14 6 16 6 18C6 20 8 22 10 22C10 22 12 22 12 22M12 2C12 2 16 6 16 10C16 12 15 13 14 13.5C16 14 18 16 18 18C18 20 16 22 14 22C14 22 12 22 12 22M12 2V22" stroke="#2C5248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#D4A574"/>
                </svg>
              ),
              items: ['Foliage tours', 'Cozy campfires', 'Mushroom foraging', 'Photography', 'Harvest activities']
            },
            { 
              season: 'Winter', 
              icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19" stroke="#2C5248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 4.93L19.07 19.07M4.93 4.93L7.05 7.05M19.07 19.07L16.95 16.95" stroke="#2C5248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.07 4.93L4.93 19.07M19.07 4.93L16.95 7.05M4.93 19.07L7.05 16.95" stroke="#2C5248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="#B8D4E0" stroke="#2C5248" strokeWidth="1.5"/>
                </svg>
              ),
              items: ['Ice fishing', 'Snowmobiling', 'Ice skating', 'Winter hiking', 'Cozy cabin stays']
            },
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
              <div style={{ marginBottom: '0.75rem' }}>{s.icon}</div>
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

    {/* Campground Map */}
    <section style={{ padding: 'var(--space-lg) 0 var(--space-xl)', background: '#f8f9fa' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}
        >
          <p className="section-label">Navigation</p>
          <h2 className="section-heading">
            Campground <span className="accent">Map</span>
          </h2>
          <p className="section-body" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Explore our 172 acre property featuring distinct camping zones, lakefront access, 
            hiking trails, and recreational facilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius)',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/map.jpg`}
            alt="MYS Retreat campground map"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 'var(--radius)',
              display: 'block',
            }}
          />
          <p style={{ 
            fontSize: '0.92rem', 
            color: 'var(--text-light)', 
            marginTop: '1.5rem',
            textAlign: 'center',
            lineHeight: 1.6,
          }}>
            <strong>Planning your stay?</strong> Stop by our office for a detailed map and personalized site recommendations 
            based on your preferences — lakefront, wooded, or near amenities.
          </p>
        </motion.div>
      </div>
    </section>
  </motion.main>
);

export default ActivitiesPage;
