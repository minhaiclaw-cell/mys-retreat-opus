import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import './AboutPage.css';

const AboutPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <PageHero
      image="aerial-forest-new.jpg"
      label="About Us"
      title="Welcome to MYS Retreat"
      subtitle="A family legacy of hospitality, natural beauty, and unforgettable camping experiences."
    />

    <section className="about-content">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-heading">Who We Are</h2>
            <p className="section-body">
              MYS Retreat is a family-owned campground nestled on 172 acres of pristine Canadian wilderness
              along the shores of Himbury Lake in Kearney, Ontario. For years, we've been welcoming families,
              adventurers, and nature lovers from all walks of life to experience the magic of Northern Ontario camping.
            </p>
            <p className="section-body">
              Our mission is simple: provide a safe, welcoming, and beautiful environment where memories are made.
              Whether you're a seasoned camper or trying it for the first time, we're here to make your stay comfortable
              and unforgettable.
            </p>

            <h3 className="section-subheading">Your Ontario Wilderness Escape</h3>
            <p className="section-body">
              Located minutes from Algonquin Provincial Park, our 172 acres offer pristine natural beauty 
              with unique terrain to explore — winding trails through towering pine forests, tranquil rivers, 
              dramatic cliff faces, and direct access to quiet Himbury Lake. Every corner of the property 
              invites adventure and discovery.
            </p>

            <h3 className="section-subheading">What We Offer</h3>
            <ul className="about-list">
              <li>3 fully furnished lakefront cottages with modern amenities</li>
              <li>70 secluded tent camping sites among towering pines</li>
              <li>65 RV sites with full hookups (30/50 amp service)</li>
              <li>RV rentals for those without their own</li>
              <li>Modern cabin pods by our partners at Mitziville</li>
              <li>Private lakefront beach with pristine Himbury Lake access</li>
              <li>Boat launch, fishing dock, and kayak/canoe rentals</li>
              <li>Extensive hiking trails through pine forests, cliff faces, and along rivers</li>
              <li>Nightly campfire gatherings and community events</li>
              <li>Unique terrain with diverse landscapes to explore across all 172 acres</li>
            </ul>

            <h3 className="section-subheading">Season & Hours</h3>
            <p className="section-body">
              <strong>Season:</strong> May 1st – October 15th<br />
              <strong>Office Hours:</strong> 9:00 AM – 7:00 PM daily (during season)<br />
              <strong>Check-in:</strong> 2:00 PM | <strong>Check-out:</strong> 11:00 AM
            </p>

            <h3 className="section-subheading">Family-Friendly & Inclusive</h3>
            <p className="section-body">
              MYS Retreat is a place for everyone. Families with young children, couples seeking a romantic getaway,
              groups of friends, solo adventurers — all are welcome here. We pride ourselves on creating a safe,
              inclusive environment where people of all backgrounds can relax, explore, and connect with nature.
            </p>
            <p className="section-body">
              We look forward to welcoming you to our little piece of paradise. Come as guests, leave as friends.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="map-card">
              <h3 className="map-card__title">Campground Map</h3>
              <img
                src={`${process.env.PUBLIC_URL}/map.jpg`}
                alt="MYS Retreat campground map"
                className="map-card__image"
              />
              <p className="map-card__caption">
                Our 172 acre property features distinct camping zones, lakefront access, hiking trails, 
                and recreational facilities. Stop by the office for a detailed map and site recommendations.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-card__title">Quick Facts</h3>
              <ul className="info-card__list">
                <li><strong>Established:</strong> Family-owned since inception</li>
                <li><strong>Location:</strong> Kearney, Ontario</li>
                <li><strong>Size:</strong> 172 acres</li>
                <li><strong>Waterfront:</strong> Himbury Lake</li>
                <li><strong>Pet Policy:</strong> Pet-friendly sites available</li>
                <li><strong>WiFi:</strong> Available in cottages & office area</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.main>
);

export default AboutPage;
