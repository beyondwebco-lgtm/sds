'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useUI } from '@/context/UIContext';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'process', label: 'Our Process', href: '#process' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Header() {
  const { openQuoteModal, showToast, openServiceModal } = useUI();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Copy GSTIN handler
  const handleCopyGst = () => {
    navigator.clipboard?.writeText('37GPWPD8763Q1ZH').then(() => {
      showToast('GSTIN (37GPWPD8763Q1ZH) copied to clipboard!', 'success');
    }).catch(() => {
      showToast('GSTIN: 37GPWPD8763Q1ZH', 'info');
    });
  };

  // Scroll detection for sticky header & scroll spy
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);

          const sections = ['home', 'about', 'services', 'process', 'projects', 'contact'];
          const scrollPos = window.scrollY + 130;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        if (isDrawerOpen) setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDropdownOpen(false);
  };

  const handleDropdownItemClick = (key: string) => {
    closeDrawer();
    openServiceModal(key);
  };

  return (
    <>
      {/* ==========================================================================
           Top Contact & Info Bar (Hides smoothly on scroll down)
           ========================================================================== */}
      <div className={`top-bar ${isScrolled ? 'top-bar-hidden' : ''}`}>
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:9160592929" className="top-bar-item" title="Call Representative Manager">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span><strong>9160592929</strong> (Representative Manager)</span>
            </a>
            <a href="mailto:Diva.sds@outlook.com" className="top-bar-item" title="Send Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Diva.sds@outlook.com</span>
            </a>
            <span className="top-bar-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Bandlaguda Jagir, 500086, Telangana</span>
            </span>
          </div>
          <div className="top-bar-right">
            <span className="gst-badge copy-gst-btn" title="Click to copy GSTIN" onClick={handleCopyGst} style={{ cursor: 'pointer' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              GSTIN: 37GPWPD8763Q1ZH
            </span>
            <a href="https://wa.me/919160592929?text=Hello%20SDS,%20I%20would%20like%20to%20enquire%20about%20waterproofing%20services" target="_blank" rel="noopener noreferrer" className="top-bar-item" style={{ color: '#4ade80' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* ==========================================================================
           Navigation Bar (Sticky with dynamic shrink & shadow)
           ========================================================================== */}
      <header className={`navbar ${isScrolled ? 'scrolled navbar-shrunk' : ''}`}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" title="SDS – Sri Devarshini Solutions">
            <img src="/images/sds-logo-horizontal.png" alt="SDS Sri Devarshini Solutions Logo" width={177} height={52} />
          </a>

          {/* Desktop Nav Menu */}
          <nav className="nav-menu desktop-nav-menu" id="navMenuDesktop">
            <div className="nav-links-track">
              {/* Home */}
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                <span>Home</span>
                {activeSection === 'home' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>

              {/* About Us */}
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                <span>About Us</span>
                {activeSection === 'about' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>

              {/* Services Dropdown */}
              <div
                className={`nav-item-dropdown ${dropdownOpen ? 'open' : ''}`}
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href="#services"
                  className={`nav-link dropdown-toggle ${activeSection === 'services' ? 'active' : ''}`}
                  role="button"
                  aria-expanded={dropdownOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  <span>Services</span>
                  <svg className={`dropdown-arrow ${dropdownOpen ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  {activeSection === 'services' && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="nav-active-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="bungalow"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('bungalow');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        <span>Residential Bungalows</span>
                      </a>
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="commercial"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('commercial');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="15" y1="22" x2="15" y2="2"></line></svg>
                        <span>High Rise & Commercial</span>
                      </a>
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="repairs"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('repairs');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        <span>Repairs & Rehabilitation</span>
                      </a>
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="precast"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('precast');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        <span>Precast Buildings</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Process */}
              <a
                href="#process"
                className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}
              >
                <span>Our Process</span>
                {activeSection === 'process' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>

              {/* Projects */}
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                <span>Projects</span>
                {activeSection === 'projects' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                <span>Contact</span>
                {activeSection === 'contact' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </div>
          </nav>

          {/* Nav CTA Buttons (Desktop) */}
          <div className="nav-actions">
            <a href="tel:9160592929" className="btn btn-call" title="Call Representative Manager">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call Now</span>
            </a>
            <motion.button
              type="button"
              className="btn btn-primary open-quote-modal"
              onClick={openQuoteModal}
              whileTap={{ scale: 0.97 }}
            >
              <span>Get a Quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </motion.button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            id="mobileToggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isDrawerOpen}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop with AnimatePresence */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              key="drawer-backdrop"
              className="nav-backdrop active"
              id="navBackdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              onClick={closeDrawer}
            />

            <motion.nav
              key="drawer-menu"
              className="nav-menu mobile-drawer-open"
              id="navMenu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
            >
              {/* Mobile Drawer Header */}
              <div className="drawer-header">
                <a href="#home" className="drawer-brand" title="SDS – Sri Devarshini Solutions" onClick={closeDrawer}>
                  <img src="/images/sds-logo-horizontal.png" alt="SDS Sri Devarshini Solutions Logo" width={160} height={47} />
                </a>
                <button
                  type="button"
                  className="drawer-close-btn"
                  id="drawerCloseBtn"
                  aria-label="Close navigation menu"
                  onClick={closeDrawer}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="drawer-links">
                <a
                  href="#home"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={closeDrawer}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={closeDrawer}
                >
                  About Us
                </a>

                {/* Mobile Services Accordion */}
                <div className={`nav-item-dropdown ${dropdownOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className={`nav-link dropdown-toggle ${activeSection === 'services' ? 'active' : ''}`}
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{ width: '100%', textAlign: 'left' }}
                  >
                    <span>Services</span>
                    <svg className={`dropdown-arrow ${dropdownOpen ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>

                  {dropdownOpen && (
                    <div className="dropdown-menu-mobile">
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="bungalow"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('bungalow');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        <span>Residential Bungalows</span>
                      </a>
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="commercial"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('commercial');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="15" y1="22" x2="15" y2="2"></line></svg>
                        <span>High Rise & Commercial</span>
                      </a>
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="repairs"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('repairs');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        <span>Repairs & Rehabilitation</span>
                      </a>
                      <a
                        href="#services"
                        className="dropdown-item"
                        data-service-key="precast"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick('precast');
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        <span>Precast Buildings</span>
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#process"
                  className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}
                  onClick={closeDrawer}
                >
                  Our Process
                </a>
                <a
                  href="#projects"
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={closeDrawer}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={closeDrawer}
                >
                  Contact
                </a>
              </div>

              {/* Mobile Drawer Quick Actions */}
              <div className="mobile-drawer-actions">
                <div className="drawer-action-group">
                  <a href="tel:9160592929" className="btn btn-call btn-drawer-call">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>Call Representative Manager: 9160592929</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary btn-drawer-quote open-quote-modal"
                    onClick={() => {
                      closeDrawer();
                      openQuoteModal();
                    }}
                  >
                    <span>Get a Free Site Visit</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                  <a href="https://wa.me/919160592929?text=Hello%20SDS,%20I%20would%20like%20to%20enquire%20about%20waterproofing%20services" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-drawer-wa">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="drawer-meta-info">
                  <div className="drawer-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <span>GSTIN: <strong>37GPWPD8763Q1ZH</strong></span>
                  </div>
                  <div className="drawer-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>Office: Bandlaguda Jagir, Telangana – 500086</span>
                  </div>
                  <div className="drawer-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path><path d="M9 9h1"></path><path d="M9 13h1"></path><path d="M9 17h1"></path><path d="M14 9h1"></path><path d="M14 13h1"></path><path d="M14 17h1"></path></svg>
                    <span>Regd: Vijayawada, AP – 520007</span>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
