import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const images = [
  { src: 'aerial.jpg', alt: 'Aerial view of MYS Retreat', span: 'tall' },
  { src: 'cottages.jpg', alt: 'Lakefront cottages', span: '' },
  { src: 'campfire.jpg', alt: 'Evening campfire', span: '' },
  { src: 'fishing.jpg', alt: 'Fishing on Himbury Lake', span: 'wide' },
  { src: 'hiking.jpg', alt: 'Hiking trails', span: '' },
  { src: 'fall-bg.jpg', alt: 'Fall colours at MYS Retreat', span: '' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Gallery</p>
          <h2 className="section-heading">Scenes from MYS</h2>
        </motion.div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className={`gallery__item ${img.span ? `gallery__item--${img.span}` : ''}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <motion.img
                src={`${process.env.PUBLIC_URL}/${img.src}`}
                alt={img.alt}
                className="gallery__image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
