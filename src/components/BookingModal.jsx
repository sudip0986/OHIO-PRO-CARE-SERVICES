import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/content';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Emergency Plumbing & Leak Repair',
    date: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({
          name: '',
          phone: '',
          service: 'Heating System Service',
          date: '',
          notes: ''
        });
      }, 1800);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
    >
      <div className="modal-content">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ fontSize: '48px', color: '#2ecc71', marginBottom: '12px' }}>✓</div>
            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Booking Request Received!</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '15px' }}>
              Thank you, <strong>{formData.name || 'valued customer'}</strong>. Our dispatch team will call you at <strong>{formData.phone}</strong> shortly to confirm your slot.
            </p>
          </div>
        ) : (
          <>
            <h3 id="modal-heading" style={{ fontSize: '24px', marginBottom: '6px' }}>
              Schedule Your Service
            </h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '14px' }}>
              Fill out the form below and our team will get in touch with you immediately.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="modal-name">Full Name *</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-phone">Phone Number *</label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  placeholder="(567) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-service-select">Service Needed</label>
                <select
                  id="modal-service-select"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Master Plumber Diagnostic Visit">Master Plumber Diagnostic Visit</option>
                  <option value="Emergency Drain / Sewer Backup">Emergency Drain / Sewer Backup</option>
                  <option value="Water Line / Repiping Consultation">Water Line / Repiping Consultation</option>
                  <option value="Other Plumbing Repair">Other Plumbing Repair</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-date">Preferred Date</label>
                <input
                  type="date"
                  id="modal-date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-notes">Issue Description (Optional)</label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  rows="3"
                  placeholder="Briefly describe your plumbing, pipe, or drain issue..."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '8px' }}
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Appointment Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
