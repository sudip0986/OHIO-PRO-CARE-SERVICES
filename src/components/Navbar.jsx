import React, { useState, useEffect } from 'react';
import { companyInfo } from '../data/content';

export default function Navbar({ onOpenModal }) {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSolid ? 'navbar--solid' : ''}`} aria-label="Main Navigation">
      <div className="nav-inner">
        <a href="#" className="brand" aria-label={`${companyInfo.name} Homepage`}>
          <span className="brand-mark">O</span>
          <span className="brand-name">{companyInfo.name}</span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#gallery">Gallery</a>
          <button
            type="button"
            className="nav-cta"
            onClick={() => onOpenModal()}
            id="nav-book-btn"
          >
            Book Service
          </button>
        </div>
      </div>
    </nav>
  );
}
