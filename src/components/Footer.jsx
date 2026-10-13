import React from 'react';
import { companyInfo } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark small">O</span>
          <span>{companyInfo.name}</span>
        </div>
        <div className="footer-info">
          <span>Plumbing Service • Ohio</span>
          <span>{companyInfo.address}</span>
        </div>
        <p className="footer-copy">© {currentYear} {companyInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
