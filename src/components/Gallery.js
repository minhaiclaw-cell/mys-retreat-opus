import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const images = [
  { src: 'aerial.jpg', caption: 'Aerial view of MYS Retreat' },
  { src: 'cottages.jpg', caption: 'Lakefront cottages' },
  { src: 'campfire.jpg', caption: 'Evening campfire' },
  { src: 'fishing.jpg', caption: 'Fishing on Himbury Lake' },
  { src: 'hiking.jpg', caption: 'Hiking the trails' },
  { src: 'fall-bg.jpg', caption: 'Fall colours' },
  { src: 'kayaking.jpg', caption: 'Kayaking adventures' },
  { src: 'cabin.jpg', caption: 'Cozy cabin interiors' },
];

const Gallery = () => {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - trackRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const slideWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.75, 900) : 900;

  const next = () => setCurrent((prev) => Math.min(prev + 1, images.length - 1));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__top">
          <div>
            <p className="section-label">Gallery</p>
            <h2 className="section-heading">Scenes from MYS</h2>
          </div>
          <div className="gallery__controls">
            <button
              className={`gallery__arrow ${current === 0 ? 'gallery__arrow--disabled' : ''}`}
              onClick={prev}
              disabled={current === 0}
            >
              <FaChevronLeft />
            </button>
            <button
              className={`gallery__arrow ${current === images.length - 1 ? 'gallery__arrow--disabled' : ''}`}
              onClick={next}
              disabled={current === images.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge carousel */}
      <div className="gallery__viewport">
        <motion.div
          ref={trackRef}
          className="gallery__track"
          animate={{ x: -(current * (slideWidth + 20)) }}
          transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          drag="x"
          dragConstraints={{ left: -trackWidth, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -80) next();
            else if (info.offset.x > 80) prev();
          }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className="gallery__slide"
              style={{ width: slideWidth, minWidth: slideWidth }}
            >
              <div className="gallery__image-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/${img.src}`}
                  alt={img.caption}
                  className="gallery__image"
                  draggable={false}
                />
              </div>
              <p className="gallery__caption">{img.caption}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress dots */}
      <div className="gallery__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery__dot ${i === current ? 'gallery__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
