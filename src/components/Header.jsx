import React from 'react';

export default function Header({
  drawerOpen,
  setDrawerOpen
}) {
  const handleBurgerClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="studio-header">
      {/* Brand Monogram Link */}
      <a href="#home" className="brand-badge-link" aria-label="Pratham Singh Photography">
        <span>PRATHAM</span>
        <span className="brand-plus">+</span>
      </a>

      {/* Desktop Navigation Links Matching Reference */}
      <nav className="desktop-nav" aria-label="Main Navigation">
        <ul className="nav-links-list">
          <li>
            <a href="#home" className="nav-item-btn active">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item-btn">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-item-btn">
              PORTFOLIO
            </a>
          </li>
          <li>
            <button
              className="nav-item-btn"
              onClick={() => setDrawerOpen(true)}
            >
              PAGES
            </button>
          </li>
          <li>
            <button
              className="nav-item-btn"
              onClick={() => setDrawerOpen(true)}
            >
              JOURNAL
            </button>
          </li>
          <li>
            <a href="#contact" className="nav-item-btn">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* Header Right Actions */}
      <div className="header-actions">
        {/* Mobile Hamburger Drawer Trigger */}
        <button
          className={`mobile-menu-btn ${drawerOpen ? 'open' : ''}`}
          onClick={handleBurgerClick}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
        >
          <span className="btn-burger-line" />
          <span className="btn-burger-line" />
        </button>
      </div>
    </header>
  );
}
