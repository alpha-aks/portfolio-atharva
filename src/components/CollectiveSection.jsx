import React from 'react';

export default function CollectiveSection() {
  return (
    <section className="collective-section" id="about" aria-label="The Artist Behind The Projects">
      <div className="collective-container single-member-layout">
        
        {/* Left Column: Heading & Artist Manifesto */}
        <div className="collective-text-column">
          <div className="collective-eyebrow">
            <span>+ THE ARTIST</span>
          </div>

          <h2 className="collective-heading">
            <span className="heading-bright">The</span>
            <span className="heading-bright">Architect</span>
            <span className="heading-dim">Behind The</span>
            <span className="heading-dim">Projects.</span>
          </h2>

          <p className="collective-description">
            Fine art photographer documenting primordial volcanic calderas, monumental brutalist architecture, and photonic light refractions on medium format sensors.
          </p>

          <div className="featured-meta-stats artist-stats">
            <div className="stat-unit">
              <span className="stat-number">10+</span>
              <span className="stat-label">YEARS IN THE FIELD</span>
            </div>
            <div className="stat-unit">
              <span className="stat-number">102MP</span>
              <span className="stat-label">MEDIUM FORMAT RESOLUTION</span>
            </div>
            <div className="stat-unit">
              <span className="stat-number">ZÜRICH</span>
              <span className="stat-label">SOLO GALLERY SHOWCASE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Single High-End Portrait of Pratham Singh */}
        <div className="collective-single-card-column">
          <article
            className="collective-member-card single-featured-portrait"
            tabIndex={0}
            role="region"
            aria-label="Pratham Singh Profile"
          >
            {/* Portrait Media */}
            <div className="member-image-wrap">
              <img
                src="/assets/images/pratham.jpg"
                alt="Pratham Singh — Principal Photographer"
                loading="lazy"
                className="member-photo"
              />
              <div className="member-gradient-overlay" />
            </div>

            {/* Info Block at Bottom */}
            <div className="member-info-block">
              <h3 className="member-name">Pratham Singh</h3>
              <div className="member-role-tag">PRATHAM® STUDIO</div>
              <div className="member-discipline-label">Principal Photographer & Visual Director</div>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
