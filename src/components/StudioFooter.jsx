import React from 'react';

export default function StudioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="luxury-studio-footer" id="contact" aria-label="Studio Footer">
      <div className="footer-turquoise-banner">
        
        {/* Top 4-Column Navigation & Direct Contact Grid */}
        <div className="footer-top-grid">
          
          {/* Column 1: Main Pages */}
          <div className="footer-col">
            <ul className="footer-link-list">
              <li><a href="#home">Frontpage</a></li>
              <li><a href="#about">The Studio</a></li>
              <li><a href="#portfolio">Selected Works</a></li>
              <li><a href="#about">Insights</a></li>
            </ul>
          </div>

          {/* Column 2: Capabilities & Editions */}
          <div className="footer-col">
            <ul className="footer-link-list">
              <li><a href="#about">Capabilities</a></li>
              <li><a href="#portfolio">Fine Art Prints</a></li>
              <li><a href="#portfolio">Exhibition Archive</a></li>
              <li><a href="mailto:studio@prathamsingh.photo">Initiate Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Locations */}
          <div className="footer-col footer-col-address">
            <div className="footer-contact-item">
              <a href="mailto:studio@prathamsingh.photo" className="footer-email-link">
                studio@prathamsingh.photo
              </a>
              <div className="footer-phone-text">+91 98765 43210</div>
            </div>
            <div className="footer-address-block">
              <div>Zürich // Mumbai</div>
              <div>International Photography Archive</div>
            </div>
          </div>

          {/* Column 4: Channels */}
          <div className="footer-col">
            <ul className="footer-link-list">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a></li>
              <li><a href="#portfolio">Vogue Archive</a></li>
            </ul>
          </div>

        </div>

        {/* Thin Divider Line */}
        <div className="footer-hairline-divider" aria-hidden="true" />

        {/* Monumental Giant Wordmark Matching Screenshot */}
        <div className="footer-wordmark-container">
          <h2 className="footer-giant-wordmark">
            <span>Pratham.</span>
            <sup className="footer-wordmark-reg">®</sup>
          </h2>
        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            ©2026 PRATHAM
          </div>

          <div className="footer-legal-links">
            <a href="#legal" onClick={(e) => e.preventDefault()}>TERMS AND CONDITIONS</a>
            <a href="#privacy" onClick={(e) => e.preventDefault()}>PRIVACY POLICY</a>
          </div>

          <div className="footer-credit-group">
            <span className="footer-credit-text">WEBSITE BY PRATHAM STUDIO</span>
            <button
              className="footer-scroll-top-btn"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to top of page"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
