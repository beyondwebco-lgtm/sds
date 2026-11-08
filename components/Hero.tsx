'use client';

import React from 'react';
import { useUI } from '@/context/UIContext';

export default function Hero() {
  const { openQuoteModal } = useUI();

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-rain-overlay"></div>
      <div className="container">
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-tagline-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>Building Trust, Ensuring Strength</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Complete Waterproofing <span className="highlight-green">Solutions</span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            Protect your buildings from leaks, dampness and water damage with our expert waterproofing services.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg open-quote-modal" onClick={openQuoteModal}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Get a Free Site Visit</span>
            </button>
            <a href="#services" className="btn btn-outline-white btn-lg">
              <span>Our Services</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>

          {/* 3 Benefits Below Buttons */}
          <div className="hero-benefits">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="benefit-info">
                <span className="benefit-title">Leak-Proof Protection</span>
                <span className="benefit-sub">100% Zero Seepage Barrier</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="benefit-info">
                <span className="benefit-title">Long-Lasting Durability</span>
                <span className="benefit-sub">Engineered UV & Climate Resilient</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              </div>
              <div className="benefit-info">
                <span className="benefit-title">Safe &amp; Eco-Friendly</span>
                <span className="benefit-sub">Non-Toxic &amp; Sustainable Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

