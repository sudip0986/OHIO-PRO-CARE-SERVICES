import React from 'react';
import { companyInfo, heroImage } from '../data/content';

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero" id="hero" aria-label="Hero Section">
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Appliances • HVAC • Plumbing • Home Systems</p>
          <h1>
            Complete Home Care Across <em>Ohio</em>
          </h1>
          <p className="hero-sub">
            {companyInfo.name} provides dependable residential and commercial appliance repair, HVAC heating &amp; cooling, plumbing, and home maintenance by certified technicians. Quality workmanship, transparent upfront pricing, and same-day service across Ohio.
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
              src={heroImage}
              alt="Certified home service technician inspecting residential appliances, HVAC, and home systems"
              width="700"
              height="525"
              loading="eager"
            />
            <div className="hero-pill">
              <span className="pill-dot"></span>
              <strong>Same-Day Service</strong>
              <span>Certified technicians on standby</span>
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
