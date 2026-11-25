import React, { useState, useEffect, useRef } from 'react';
import { technicianImages, testimonial } from '../data/content';

export default function Gallery({ onOpenModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % technicianImages.length);
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + technicianImages.length) % technicianImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % technicianImages.length);
  };

  return (
    <section id="gallery" className="section gallery-section" aria-label="Team Gallery">
      <div className="container gallery-inner">
        <div className="gallery-text">
          <p className="eyebrow">Our Team</p>
          <h2>Certified Service Technicians</h2>
          <p>Meet our skilled, insured technicians serving Ohio homes and businesses with prompt, dependable appliance, HVAC, plumbing, and home system care.</p>
          <blockquote className="testimonial">
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <cite>— {testimonial.author}</cite>
          </blockquote>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => onOpenModal("Certified Technician Diagnostic Visit")}
            id="gallery-book-btn"
          >
            Book a Technician
          </button>
        </div>

        <div
          className="gallery-imgs-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="gallery-imgs" aria-label="Technicians Gallery">
            {technicianImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Certified technician ${index + 1}`}
                className={`img-main ${currentSlide === index ? 'active' : ''}`}
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  position: currentSlide === index ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-out'
                }}
              />
            ))}

            {/* Slider Navigation Arrows */}
            <button
              type="button"
              className="gallery-nav-btn prev"
              onClick={prevSlide}
              aria-label="Previous technician image"
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-nav-btn next"
              onClick={nextSlide}
              aria-label="Next technician image"
            >
              ›
            </button>

            {/* Floating Specialist Badge */}
            <div className="gallery-badge">
              <span className="badge-dot"></span>
              <span>Certified Service Technician • {currentSlide + 1} / {technicianImages.length}</span>
            </div>
          </div>

          <div className="gallery-dots" aria-label="Slideshow pagination">
            {technicianImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`gallery-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Jump to technician ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
