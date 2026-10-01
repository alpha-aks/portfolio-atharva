import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/projects';

export default function SeriesDetailsModal({
  isOpen,
  onClose,
  activeIndex
}) {
  const project = PROJECTS[activeIndex];
  const touchStartY = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Swipe-down to dismiss for phone bottom sheet
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY.current;
    if (deltaY > 60) {
      onClose();
    }
    touchStartY.current = null;
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Photography Series Specifications"
    >
      <div
        className="modal-backdrop-blur"
        onClick={() => onClose()}
      />

      <div
        className="modal-content-card"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile Swipe-down Pill Handle */}
        <div className="modal-sheet-handle" aria-hidden="true" />

        <div className="modal-header-row">
          <div>
            <span className="modal-series-index">
              {project.index} — {project.category} // {project.sector}
            </span>
            <h3 className="modal-series-title">{project.title}</h3>
          </div>

          <button
            className="modal-close-icon-btn"
            onClick={() => onClose()}
            aria-label="Close dialog"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Preview */}
        <div className="modal-preview-thumbnail">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>

        {/* Overview */}
        <p className="modal-series-overview">{project.overview}</p>

        {/* Camera EXIF Grid */}
        <div className="modal-specs-grid">
          <div className="spec-tile">
            <div className="spec-label">CAMERA BODY</div>
            <div className="spec-val">{project.exif.camera}</div>
          </div>
          <div className="spec-tile">
            <div className="spec-label">OPTICS</div>
            <div className="spec-val">{project.exif.lens}</div>
          </div>
          <div className="spec-tile">
            <div className="spec-label">EXPOSURE // ISO</div>
            <div className="spec-val">{project.exif.settings}</div>
          </div>
          <div className="spec-tile">
            <div className="spec-label">LOCATION & ELEVATION</div>
            <div className="spec-val">{project.exif.location} ({project.exif.elevation})</div>
          </div>
        </div>

        {/* Curation Metrics */}
        <div className="modal-metrics-row">
          {project.metrics.map((metric, i) => (
            <div key={i} className="metric-card">
              <div className="metric-value">{metric.val}</div>
              <div className="metric-label">{metric.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
