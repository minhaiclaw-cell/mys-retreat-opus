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

    {/* More Activities */}
    <section style={{ padding: 'var(--space-lg) 0', background: '#f8f9fa' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}
        >
          <p className="section-label">Recreation</p>
          <h2 className="section-heading">
            More Ways to <span className="accent">Play</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: 'var(--space-md)',
        }}>
          {[
            { icon: '🚴‍♂️', title: 'Biking', desc: 'Gear up for adventure with year-round biking through scenic trails and pine forests.' },
            { icon: '🏐', title: 'Volleyball', desc: 'Spike, set, serve — enjoy friendly matches on our beach volleyball court.' },
            { icon: '🎯', title: 'Horseshoes', desc: 'Test your aim with classic horseshoe pitching — fun for all ages.' },
            { icon: '🛶', title: 'Boat Launch', desc: 'Launch your own boat from our private dock and explore Himbury Lake.' },
            { icon: '🏕️', title: 'Nightly Campfire', desc: 'Join us for community campfires with singing, games, and s\'mores!' },
            { icon: '🎨', title: 'Arts & Crafts', desc: 'Get creative with nature-inspired arts and crafts activities for kids and families.' },
          ].map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '1.75rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.75rem' }}>{activity.icon}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--brand-dark)', marginBottom: '0.5rem' }}>{activity.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{activity.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

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
              emoji: '🌸', 
              items: ['Wildflower hikes', 'Fishing season opener', 'Bird watching', 'Kayaking', 'Nature photography']
            },
            { 
              season: 'Summer', 
              emoji: '☀️', 
              items: ['Beach swimming', 'Campfire nights', 'Water sports', 'Family games', 'Paddle boarding']
            },
            { 
              season: 'Fall', 
              emoji: '🍂', 
              items: ['Foliage tours', 'Cozy campfires', 'Mushroom foraging', 'Photography', 'Harvest activities']
            },
            { 
              season: 'Winter', 
              emoji: '❄️', 
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
