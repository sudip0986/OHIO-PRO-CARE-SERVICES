import React from 'react';
import { companyInfo } from '../data/content';

export default function TopBar() {
  return (
    <div className="topbar">
      <span className="topbar-highlight">{companyInfo.badge}</span>
      <a href={`tel:${companyInfo.phoneRaw}`} id="emergency-phone-top">
        Emergency Line: {companyInfo.phone}
      </a>
    </div>
  );
}
