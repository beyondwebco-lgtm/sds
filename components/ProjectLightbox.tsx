'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useUI } from '@/context/UIContext';

export default function ProjectLightbox() {
  const { isLightboxOpen, activeProject, closeLightbox } = useUI();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox]);

  if (!activeProject) return null;

  return (
    <AnimatePresence>
      {isLightboxOpen && (
        <motion.div
          id="projectLightbox"
          className="modal-backdrop active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="modal-card"
            style={{ maxWidth: '860px', padding: '20px' }}
            initial={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="closeLightbox"
              type="button"
              className="modal-close-btn"
              aria-label="Close modal"
              onClick={closeLightbox}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '520px', background: 'var(--navy-darkest)', marginBottom: '16px' }}>
              <img
                id="lightboxImg"
                src={activeProject.image}
                alt={activeProject.title}
                style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', margin: '0 auto', display: 'block' }}
              />
            </div>
            <div style={{ padding: '6px 12px' }}>
              <h3 id="lightboxTitle" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '4px' }}>
                {activeProject.title}
              </h3>
              <p id="lightboxDesc" style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                {activeProject.category} &bull; {activeProject.location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

