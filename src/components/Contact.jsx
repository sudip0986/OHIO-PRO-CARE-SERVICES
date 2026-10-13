import React from 'react';
import { companyInfo } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-label="Contact Section">
      <div className="container contact-inner">
        <div className="contact-head">
          <p className="eyebrow">Get in Touch</p>
          <h2>Book Trusted Plumbing Service</h2>
          <p>Reach us directly for immediate emergency dispatch and service availability.</p>
        </div>

        <div className="contact-methods">
          <a className="contact-card" href={`tel:${companyInfo.phoneRaw}`} id="contact-phone-card">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div>
              <strong>Call Us</strong>
              <span>{companyInfo.phone}</span>
            </div>
          </a>

          <a className="contact-card" href={`mailto:${companyInfo.email}`} id="contact-email-card">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div>
              <strong>Email Us</strong>
              <span>{companyInfo.email}</span>
            </div>
          </a>

          <div className="contact-card" id="contact-address-card">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
            </div>
            <div>
              <strong>Visit Us</strong>
              <span>{companyInfo.address}</span>
            </div>
          </div>
        </div>

        <div className="contact-actions">
          <a href={`tel:${companyInfo.phoneRaw}`} className="btn btn-primary btn-lg" id="contact-call-action">
            Call Now
          </a>
          <a
            href={companyInfo.officialWebsite}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-lg"
            id="contact-web-action"
          >
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}
