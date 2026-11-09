'use client';

import React from 'react';
import { useUI } from '@/context/UIContext';
import Reveal from '@/components/Reveal';

export default function Footer() {
  const { openServiceModal } = useUI();

  return (
    <footer className="footer">
      <div className="container">
        <Reveal>
          <div className="footer-top">
            {/* Brand Info */}
            <div className="footer-brand">
              <img src="/images/sds-waterproofing-solutions-light.png" alt="SDS – Complete Waterproofing Solutions" width={245} height={72} />
              <p className="footer-bio">
                Sri Devarshini Solutions (SDS) is your trusted waterproofing contractor providing long-lasting, leak-proof protection for residential bungalows, commercial high-rises, precast joints, and structural rehabilitation.
              </p>
              <div className="social-links">
                <a href="https://wa.me/919160592929" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
                <a href="tel:9160592929" className="social-link" title="Call Representative Manager">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
                <a href="mailto:sales@sds.org.in" className="social-link" title="Email Us">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#services" className="footer-link">Our Services</a></li>
                <li><a href="#process" className="footer-link">Our Process</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-links-list">
                <li>
                  <a
                    href="#services"
                    className="footer-link"
                    data-service-key="bungalow"
                    onClick={(e) => {
                      e.preventDefault();
                      openServiceModal('bungalow');
                    }}
                  >
                    Residential Bungalows
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="footer-link"
                    data-service-key="commercial"
                    onClick={(e) => {
                      e.preventDefault();
                      openServiceModal('commercial');
                    }}
                  >
                    High Rise &amp; Commercial
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="footer-link"
                    data-service-key="repairs"
                    onClick={(e) => {
                      e.preventDefault();
                      openServiceModal('repairs');
                    }}
                  >
                    Repairs &amp; Rehabilitation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="footer-link"
                    data-service-key="precast"
                    onClick={(e) => {
                      e.preventDefault();
                      openServiceModal('precast');
                    }}
                  >
                    Precast Buildings
                  </a>
                </li>
                <li><a href="#services" className="footer-link">Terrace Waterproofing</a></li>
                <li><a href="#services" className="footer-link">Industrial Flooring</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="footer-col-title">Contact Information</h4>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div>
                  <span style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block' }}>Phone Number</span>
                  <a href="tel:9160592929">9160592929</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <div>
                  <span style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block' }}>Email</span>
                  <a href="mailto:sales@sds.org.in">sales@sds.org.in</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div>
                  <span style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block' }}>Office Address</span>
                  <p>Plot No: 140/141, Dwarakamai Colony, Bandlaguda Jagir, 500086, Telangana</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path><path d="M9 9h1"></path><path d="M9 13h1"></path><path d="M9 17h1"></path><path d="M14 9h1"></path><path d="M14 13h1"></path><path d="M14 17h1"></path></svg>
                <div>
                  <span style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block' }}>Registered Address</span>
                  <p>Plot No 20-1201/2, Indra Kiladri Nagar, Nearby Landmark Gas Godown, Vijayawada, AP – 520007</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <div>
                  <span style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block' }}>GST Registered</span>
                  <span style={{ fontFamily: 'monospace', color: '#a3e635', fontWeight: 700 }}>37GPWPD8763Q1ZH</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <p>&copy; 2026 SDS – Sri Devarshini Solutions. All Rights Reserved.</p>
          <p>Building Trust, Ensuring Strength &bull; Waterproofing Specialists in Telangana &amp; AP</p>
        </div>
      </div>
    </footer>
  );
}
