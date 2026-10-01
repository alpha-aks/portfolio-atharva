import React, { useRef } from 'react';
import { PROJECTS } from '../data/projects';

// Stepped heights calibrated to sit cleanly below the top-left headline within 100dvh
const STEPPED_HEIGHTS = ['26vh', '33vh', '42vh', '52vh', '38vh'];

export default function FeaturedWorksSection({ onSelectWork }) {
  const galleryScrollRef = useRef(null);

  const handleCardClick = (idx) => {
    if (onSelectWork) onSelectWork(idx);
  };

  return (
    <section className="featured-works-section" id="portfolio" aria-label="Our Best Works Gallery">
      <div className="featured-works-container">
        
        {/* Left Headline Lockup & Vibrant Turquoise Beam Line */}
        <div className="featured-title-column">
          <div className="featured-eyebrow">
            <span className="eyebrow-accent" />
            <span>SELECTED ARCHIVE // PRATHAM SINGH</span>
          </div>

          <div className="featured-headline-wrap">
            <h2 className="featured-huge-heading">
              <span className="heading-line">OUR</span>
              <span className="heading-line">BEST</span>
              <span className="heading-line heading-line-beam">
                <span>WORKS<span className="heading-dot">.</span></span>
                <span className="turquoise-lead-beam" aria-hidden="true" />
              </span>
            </h2>
          </div>

          <p className="featured-description">
            Fine art editions captured across high-altitude volcanic calderas, brutalist monolithic architecture, and sensory light dispersion. Archival museum pigment prints.
          </p>

          <div className="featured-meta-stats">
            <div className="stat-unit">
              <span className="stat-number">05</span>
              <span className="stat-label">EXPEDITION SERIES</span>
            </div>
            <div className="stat-unit">
              <span className="stat-number">100%</span>
              <span className="stat-label">IN-CAMERA STILLS</span>
            </div>
            <div className="stat-unit">
              <span className="stat-number">12</span>
              <span className="stat-label">EDITIONS PER SERIES</span>
            </div>
          </div>
        </div>

        {/* Right Stepped / Cascading Gallery Cards (Turquoise Theme) */}
        <div className="featured-gallery-column">
          <div className="stepped-gallery-scroller" ref={galleryScrollRef}>
            {PROJECTS.map((proj, idx) => {
              const cardHeight = STEPPED_HEIGHTS[idx % STEPPED_HEIGHTS.length];
              return (
                <article
                  key={proj.id}
                  className="stepped-work-card"
                  style={{ '--card-height': cardHeight }}
                  onClick={() => handleCardClick(idx)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${proj.title} specifications`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(idx);
                    }
                  }}
                >
                  {/* Image Canvas */}
                  <div className="card-media-wrap">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="card-photo-img"
                    />
                    <div className="card-turquoise-scrim" />
                    <div className="card-vignette-overlay" />
                  </div>

                  {/* Card Glowing Accent Line */}
                  <div className="card-top-beam" aria-hidden="true" />

                  {/* Card Content Overlay */}
                  <div className="card-info-content">
                    <div className="card-badge-row">
                      <span className="card-idx-tag">{proj.index} // {proj.category}</span>
                    </div>

                    <h3 className="card-title-text">{proj.title}</h3>
                    <p className="card-sector-sub">{proj.sector}</p>

                    <div className="card-footer-meta">
                      <span className="card-camera-pill">{proj.exif.camera}</span>
                      <span className="card-arrow-btn" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="gallery-swipe-hint" aria-hidden="true">
            <span className="hint-line" />
            <span className="hint-text">SWIPE TO EXPLORE EDITIONS</span>
            <span className="hint-arrow">→</span>
          </div>
        </div>

      </div>
    </section>
  );
}
