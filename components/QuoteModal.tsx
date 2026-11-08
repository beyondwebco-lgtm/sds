'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useUI } from '@/context/UIContext';

export default function QuoteModal() {
  const { isQuoteModalOpen, closeQuoteModal, showToast } = useUI();
  const shouldReduceMotion = useReducedMotion();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Residential Bungalow');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isQuoteModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeQuoteModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isQuoteModalOpen, closeQuoteModal]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedPhone) {
      showToast('Please fill in your name and phone number.');
      return;
    }

    const phoneDigits = trimmedPhone.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setPhone('');
      setEmail('');
      setService('Residential Bungalow');
      setAddress('');
      closeQuoteModal();
      showToast('Your site visit request has been sent! We will contact you within 2 hours.');
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <motion.div
          key="quote-modal-backdrop"
          id="quoteModal"
          className="modal-backdrop active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeQuoteModal();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalQuoteTitle"
        >
          <motion.div
            className="modal-card"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
          >
            <button
              id="closeQuoteModal"
              type="button"
              className="modal-close-btn"
              aria-label="Close modal"
              onClick={closeQuoteModal}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="form-header">
              <div className="badge">Zero Obligation</div>
              <h3 id="modalQuoteTitle">Request a Free Site Visit &amp; Quote</h3>
              <p>
                Our senior engineer or a representative specialist will visit your property to evaluate moisture levels
                and provide an itemized quote.
              </p>
            </div>
            <form id="modalQuoteForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Property Type</label>
                  <select
                    className="form-select"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="Residential Bungalow">Residential Bungalow / Villa</option>
                    <option value="Commercial High-Rise">Commercial High-Rise / Office</option>
                    <option value="Building Repair & Grouting">Building Repairs &amp; Crack Grouting</option>
                    <option value="Precast Joint Sealing">Precast Building Joint Sealing</option>
                    <option value="Terrace / Roof Leakage">Terrace / Rooftop Leakage</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Property Location / Address</label>
                <input
                  className="form-input"
                  type="text"
                  name="address"
                  placeholder="e.g. Bandlaguda Jagir, Dwarakamai Colony, Hyderabad..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
                      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Free Site Visit Request</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

