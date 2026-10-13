import React, { useState } from 'react';
import { servicesData } from '../data/content';

export default function Services({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = servicesData[activeTab];

  return (
    <section id="services" className="section services-section" aria-label="Services Section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What We Offer</p>
          <h2>Complete Plumbing Solutions</h2>
          <p>Expert residential and commercial plumbing repairs, leak detection, and drain care across Ohio.</p>
        </div>

        <div className="services-layout">
          <div className="services-tabs" role="tablist" aria-label="Plumbing Services">
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                className={`service-tab ${activeTab === index ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
                id={`tab-${index}`}
              >
                <span className="tab-icon">{service.icon}</span>
                <span>{service.title}</span>
                <span className="tab-arrow">→</span>
              </button>
            ))}
          </div>

          <div className="service-detail" role="tabpanel">
            <img
              key={currentService.id}
              src={currentService.image}
              alt={currentService.title}
              className="service-img"
              id="current-service-img"
            />
            <div className="service-info">
              <h3>{currentService.title}</h3>
              <p>{currentService.description}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenModal(currentService.title)}
                id="service-book-btn"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
