import React from 'react';
import { PROJECTS } from '../data/projects';

export default function NavigationDrawer({
  isOpen,
  onClose,
  activeIndex,
  onSelectProject,
  onOpenSpecs
}) {
  const handleSelect = (idx) => {
    onSelectProject(idx);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="drawer-overlay open"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="drawer-backdrop" onClick={onClose} />

      <aside className="drawer-panel-wrap">
        <div>
          {/* Top Brand Monogram */}
          <div className="drawer-top-brand">
            <div className="brand-badge-link">
              <span>PRATHAM SINGH</span>
            </div>
            <button
              className="modal-close-icon-btn"
              onClick={onClose}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Series Fast Navigation */}
          <div className="drawer-nav-section-title">PHOTOGRAPHY SERIES</div>
          <div className="drawer-series-links">
            {PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                className={`drawer-series-btn ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => handleSelect(idx)}
              >
                <span>{proj.index} — {proj.title}</span>
                <span className="series-index-tag">{proj.category}</span>
              </button>
            ))}
          </div>

          {/* Quick Trigger for EXIF Sheet */}
          <button
            className="hero-spec-trigger-btn"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '24px' }}
            onClick={() => {
              onClose();
              onOpenSpecs();
            }}
          >
            <span>VIEW ACTIVE SERIES EXIF</span>
          </button>
        </div>

        {/* Contact & Studio Info */}
        <div className="drawer-contact-block">
          <div className="drawer-nav-section-title">COMMISSIONS & PRINTS</div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            Museum-grade archival pigment prints available in limited editions of 12. Worldwide courier delivery in reinforced cylinders.
          </p>
          <a href="mailto:studio@prathamsingh.photo" className="drawer-email-link">
            studio@prathamsingh.photo
          </a>
        </div>
      </aside>
    </div>
  );
}
