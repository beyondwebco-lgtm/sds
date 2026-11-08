'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Reveal from '@/components/Reveal';

export default function CTA() {
  const { openQuoteModal } = useUI();

  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container">
        <Reveal>
          <div className="cta-content">
            <div className="badge badge-dark">Don't Wait For The Next Rain</div>
            <h2 className="cta-heading">Protect Your Property Today!</h2>
            <p className="cta-desc">
              Get expert waterproofing solutions for long-lasting protection.
            </p>
            <div className="cta-buttons-wrap">
              <motion.button
                type="button"
                className="btn btn-primary btn-lg open-quote-modal"
                onClick={openQuoteModal}
                whileTap={{ scale: 0.97 }}
              >
                <span>Request a Quote &rarr;</span>
              </motion.button>
              <motion.a
                href="tel:8008730905"
                className="btn btn-outline-white btn-lg"
                whileTap={{ scale: 0.97 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Call: 8008730905</span>
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
