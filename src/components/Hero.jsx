import React from 'react';
import { companyInfo } from '../data/content';

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero" id="hero" aria-label="Hero Section">
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Professional Plumbing Solutions</p>
          <h1>
            Trusted Plumbing Care Across <em>Ohio</em>
          </h1>
          <p className="hero-sub">
            {companyInfo.name} provides premium residential and commercial plumbing, water heater repair, and drain cleaning by licensed master plumbers. Quality craftsmanship, transparent upfront pricing, same-day emergency service across Ohio.
          </p>
          <div className="hero-btns">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenModal()}
              id="hero-schedule-btn"
            >
              Schedule Now
            </button>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="btn btn-outline"
              id="hero-call-btn"
            >
              Call {companyInfo.phone}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80"
              alt="Licensed master plumber repairing residential water pipe connections"
              width="700"
              height="525"
              loading="eager"
            />
            <div className="hero-pill">
              <span className="pill-dot"></span>
              <strong>Same-Day Service</strong>
              <span>Master plumbers on standby</span>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat">
              <strong>{companyInfo.years}</strong>
              <span>Years in Ohio</span>
            </div>
            <div className="stat">
              <strong>{companyInfo.homesServed}</strong>
              <span>Homes Serviced</span>
            </div>
            <div className="stat">
              <strong>{companyInfo.rating}</strong>
              <span>Client Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
