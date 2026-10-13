import React from 'react';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="section process-section" aria-label="Process Section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How It Works</p>
          <h2>Simple, Transparent Process</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.num} className="process-card">
              <span className="process-num">{step.num}</span>
              <h4>{step.num === "03" ? "Repair & Verify" : step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
