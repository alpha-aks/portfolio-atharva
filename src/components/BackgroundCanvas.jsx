import React, { useEffect } from 'react';
import { PROJECTS } from '../data/projects';

export default function BackgroundCanvas({ activeIndex }) {
  // Preload all high-res photography images on mount
  useEffect(() => {
    PROJECTS.forEach(project => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  return (
    <div className="bg-canvas-wrapper" aria-hidden="true">
      {PROJECTS.map((proj, idx) => (
        <div
          key={proj.id}
          className={`bg-slide-item ${idx === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${proj.image})` }}
        />
      ))}
      <div className="bg-vignette" />
      <div className="bg-gradient-scrim" />
      <div className="bg-subtle-grain" />
    </div>
  );
}
