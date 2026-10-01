import React, { useState, useEffect } from 'react';
import { PROJECTS } from './data/projects';
import BackgroundCanvas from './components/BackgroundCanvas';
import Header from './components/Header';
import HeroStage from './components/HeroStage';
import SeriesDetailsModal from './components/SeriesDetailsModal';
import NavigationDrawer from './components/NavigationDrawer';
import FeaturedWorksSection from './components/FeaturedWorksSection';
import CollectiveSection from './components/CollectiveSection';
import StudioFooter from './components/StudioFooter';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [specsModalOpen, setSpecsModalOpen] = useState(false);

  // Keyboard navigation for desktop & external phone keyboards
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (specsModalOpen || drawerOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [specsModalOpen, drawerOpen]);

  return (
    <div className="app-container">
      {/* Cinematic Background Canvas */}
      <BackgroundCanvas activeIndex={activeIndex} />

      {/* Luxury Studio Header */}
      <Header
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        onOpenSpecs={() => setSpecsModalOpen(true)}
      />

      {/* First Section: Hero Workspace Stage */}
      <HeroStage
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onOpenSpecs={() => setSpecsModalOpen(true)}
      />

      {/* Second Section: "OUR BEST WORKS." Stepped Gallery in Turquoise Theme */}
      <FeaturedWorksSection
        onSelectWork={(idx) => {
          setActiveIndex(idx);
          setSpecsModalOpen(true);
        }}
      />

      {/* Third Section: "The Architects Behind The Projects." in Turquoise Theme */}
      <CollectiveSection />

      {/* New Fourth Section: Luxury Studio Footer matching reference photo */}
      <StudioFooter />

      {/* Series Specs Sheet Modal / Phone Bottom Sheet */}
      <SeriesDetailsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
        activeIndex={activeIndex}
      />

      {/* Mobile Slideout Navigation Drawer */}
      <NavigationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeIndex={activeIndex}
        onSelectProject={(idx) => setActiveIndex(idx)}
        onOpenSpecs={() => setSpecsModalOpen(true)}
      />
    </div>
  );
}
