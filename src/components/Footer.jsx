import React from 'react';
import { companyInfo, brandLogo } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src={brandLogo}
            alt={`${companyInfo.name} Logo`}
            className="brand-logo brand-logo--footer"
            width="44"
            height="44"
          />
          <span>{companyInfo.name}</span>
        </div>
        <div className="footer-info">
          <span>Appliances • HVAC • Plumbing • Home Care — Ohio</span>
          <span>{companyInfo.address}</span>
        </div>
        <p className="footer-copy">© {currentYear} {companyInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
