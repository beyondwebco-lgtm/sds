'use client';

import React from 'react';
import { useUI } from '@/context/UIContext';

export default function Services() {
  const { openServiceModal } = useUI();

  return (
    <section id="services" className="section-padding services-section-ref">
      <div className="container">
        <div className="section-header services-ref-header">
          <div className="badge">OUR SERVICES</div>
          <h2 className="section-title services-main-heading">AN ARRAY OF SOLUTIONS FOR THE BUILDING SEGMENT</h2>

          {/* Trust & Value Guarantee Pillars */}
          <div className="services-pillars-bar">
            <div className="pillar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>10 Years Warranty</span>
            </div>
            <div className="pillar-divider">|</div>
            <div className="pillar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>Qualified Engineer Site Execution</span>
            </div>
            <div className="pillar-divider">|</div>
            <div className="pillar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              <span>Waterproofing Material Supply</span>
            </div>
          </div>
        </div>

        {/* 2 x 2 Grid of Service Cards */}
        <div className="services-grid-2x2">
          {/* Card 1: Residential Bungalows */}
          <div className="service-card-ref">
            <div className="service-card-illus-wrap">
              <img src="/images/service-bungalow-interior.jpg" alt="Residential Bungalows Waterproofing" width={320} height={180} loading="lazy" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">Residential Bungalows</h3>
              <p className="service-card-summary">Villas, independent homes, flat/sloped terraces, balconies &amp; wet areas</p>
              <div className="service-card-badges">
                <span className="micro-badge">10 Yrs Warranty</span>
                <span className="micro-badge">Engineer Supervised</span>
              </div>
              <button
                type="button"
                className="service-btn-blue open-service-btn"
                data-service-key="bungalow"
                aria-label="View details for Residential Bungalows"
                onClick={() => openServiceModal('bungalow')}
              >
                <span>View More</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

          {/* Card 2: High Rise & Commercial */}
          <div className="service-card-ref">
            <div className="service-card-illus-wrap">
              <img src="/images/service-commercial-highrise.jpg" alt="High Rise & Commercial Waterproofing" width={200} height={200} loading="lazy" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">High Rise &amp; Commercial</h3>
              <p className="service-card-summary">Commercial towers, podium slabs, basements &amp; facade weatherproofing</p>
              <div className="service-card-badges">
                <span className="micro-badge">Heavy Duty Specs</span>
                <span className="micro-badge">Material Supply</span>
              </div>
              <button
                type="button"
                className="service-btn-blue open-service-btn"
                data-service-key="commercial"
                aria-label="View details for High Rise and Commercial"
                onClick={() => openServiceModal('commercial')}
              >
                <span>View More</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

          {/* Card 3: Repairs & Rehabilitation */}
          <div className="service-card-ref">
            <div className="service-card-illus-wrap">
              <img src="/images/service-repairs-rehab.jpg" alt="Repairs & Rehabilitation Waterproofing" width={320} height={200} loading="lazy" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">Repairs &amp; Rehabilitation</h3>
              <p className="service-card-summary">PU pressure crack grouting, concrete repair &amp; active damp arrest</p>
              <div className="service-card-badges">
                <span className="micro-badge">No Demolition</span>
                <span className="micro-badge">10 Yrs Warranty</span>
              </div>
              <button
                type="button"
                className="service-btn-blue open-service-btn"
                data-service-key="repairs"
                aria-label="View details for Repairs and Rehabilitation"
                onClick={() => openServiceModal('repairs')}
              >
                <span>View More</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

          {/* Card 4: Precast Buildings */}
          <div className="service-card-ref">
            <div className="service-card-illus-wrap">
              <img src="/images/service-precast-modular.jpg" alt="Precast Buildings Waterproofing" width={320} height={200} loading="lazy" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">Precast Buildings</h3>
              <p className="service-card-summary">Elastomeric panel joint sealants, backer rods &amp; expansion systems</p>
              <div className="service-card-badges">
                <span className="micro-badge">Thermal Expansion</span>
                <span className="micro-badge">Certified Execution</span>
              </div>
              <button
                type="button"
                className="service-btn-blue open-service-btn"
                data-service-key="precast"
                aria-label="View details for Precast Buildings"
                onClick={() => openServiceModal('precast')}
              >
                <span>View More</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

