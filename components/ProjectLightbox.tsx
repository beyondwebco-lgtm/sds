'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import { projectData } from '@/lib/data';

export default function ProjectLightbox() {
  const { isLightboxOpen, activeProject, closeLightbox, openLightbox } = useUI();
  const shouldReduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const currentIndex = activeProject
    ? projectData.findIndex((p) => p.id === activeProject.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + projectData.length) % projectData.length;
    openLightbox(projectData[prevIdx]);
  };

  const handleNext = () => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % projectData.length;
    openLightbox(projectData[nextIdx]);
  };

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, currentIndex, closeLightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

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
            className="modal-card lightbox-card"
            style={{ maxWidth: '860px', padding: '20px' }}
            initial={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar with Counter and Close Button */}
            <div className="lightbox-top-bar">
              <span className="lightbox-counter">
                {currentIndex + 1} / {projectData.length}
              </span>
              <button
                id="closeLightbox"
                type="button"
                className="modal-close-btn"
                aria-label="Close modal"
                onClick={closeLightbox}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Image Stage with Prev & Next Arrows */}
            <div className="lightbox-image-stage">
              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-prev"
                aria-label="Previous project"
                onClick={handlePrev}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '520px', background: 'var(--navy-darkest)', width: '100%' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject.id}
                    id="lightboxImg"
                    src={activeProject.image}
                    alt={activeProject.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                    style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', margin: '0 auto', display: 'block' }}
                  />
                </AnimatePresence>
              </div>

              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-next"
                aria-label="Next project"
                onClick={handleNext}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* Captions */}
            <div style={{ padding: '12px 6px 4px 6px' }}>
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
