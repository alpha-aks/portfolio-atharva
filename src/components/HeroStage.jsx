import React from 'react';
import { PROJECTS } from '../data/projects';
import ScrambleText from './ScrambleText';

export default function HeroStage({
  activeIndex,
  setActiveIndex
}) {
  const activeProj = PROJECTS[activeIndex];

  const handleSelect = (idx) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
  };

  return (
    <main className="hero-stage">
      {/* Left Column: Brand Monogram & Sector Telemetry */}
      <section className="hero-left-column">
        <div className="brand-hero-lockup">
          <h1 className="brand-primary-title">
            <span className="brand-letter-glow">PRATHAM</span>
            <sup className="brand-registered">®</sup>
          </h1>
          <div className="brand-secondary-title">Photography</div>
        </div>

        <div className="hero-telemetry">
          <div className="telemetry-block">
            <span className="telemetry-tag">SECTOR</span>
            <div className="telemetry-highlight">
              <ScrambleText text={activeProj.sector} />
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Clean Floating Series List (No Boxes, Pure Typography) */}
      <section className="hero-right-column">
        <ul className="archive-index-list" role="tablist">
          {PROJECTS.map((proj, idx) => {
            const isActive = idx === activeIndex;
            return (
              <li
                key={proj.id}
                className={`archive-item ${isActive ? 'active' : ''}`}
                onMouseEnter={() => handleSelect(idx)}
                onClick={() => handleSelect(idx)}
                role="tab"
                aria-selected={isActive}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(idx);
                  }
                }}
              >
                <div className="item-header-row">
                  <span className="item-index-label">
                    {proj.index} — {proj.category}
                  </span>
                  <span className="item-status-line" aria-hidden="true" />
                </div>
                <h2 className="item-title">{proj.title}</h2>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
