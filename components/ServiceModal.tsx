'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import { serviceData } from '@/lib/data';

const serviceToContactMap: Record<string, string> = {
  bungalow: 'Residential Bungalows',
  commercial: 'High Rise & Commercial Buildings',
  repairs: 'Repairs & Rehabilitation',
  precast: 'Precast Buildings',
};

export default function ServiceModal() {
  const { isServiceModalOpen, activeServiceKey, closeServiceModal, setSelectedService } = useUI();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isServiceModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isServiceModalOpen) {
        closeServiceModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isServiceModalOpen, closeServiceModal]);

  const service = activeServiceKey ? serviceData[activeServiceKey] : null;

  if (!service) return null;

  const handleQuoteClick = () => {
    const contactOption = serviceToContactMap[activeServiceKey || ''] || 'Other Waterproofing Enquiry';
    setSelectedService(contactOption);
    closeServiceModal();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isServiceModalOpen && (
        <motion.div
          id="serviceModal"
          className="modal-backdrop active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={closeServiceModal}
        >
          <motion.div
            className="modal-card"
            style={{ maxWidth: '720px' }}
            initial={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="closeServiceModal"
              type="button"
              className="modal-close-btn"
              aria-label="Close modal"
              onClick={closeServiceModal}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div style={{ marginBottom: '20px' }}>
              <span id="modalServiceCategory" className="badge">{service.category}</span>
              <h3 id="modalServiceTitle" style={{ fontSize: '1.6rem', color: 'var(--navy-primary)', fontWeight: 800, marginTop: '6px' }}>{service.title}</h3>
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '240px', marginBottom: '20px', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
              <img id="modalServiceImage" src={service.image} alt={service.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <p id="modalServiceIntro" style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '18px' }}>{service.intro}</p>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '12px' }}>Key Solution Scope:</h4>
            <ul id="modalServiceFeatures" className="service-features-list" style={{ marginBottom: '24px' }}>
              {service.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: '24px', borderLeft: '4px solid var(--green-primary)' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: 'var(--navy-primary)', fontSize: '0.9rem' }}>Materials Applied:</strong>{' '}
                <span id="modalServiceMaterials" style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>{service.materials}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--navy-primary)', fontSize: '0.9rem' }}>Warranty:</strong>{' '}
                <span id="modalServiceGuarantee" style={{ fontSize: '0.9rem', color: 'var(--green-dark)', fontWeight: 700 }}>{service.guarantee}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                id="modalServiceQuoteBtn"
                type="button"
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={handleQuoteClick}
              >
                <span>Get a Quote for this Service</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <a href="tel:8008730905" className="btn btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Call 8008730905</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

