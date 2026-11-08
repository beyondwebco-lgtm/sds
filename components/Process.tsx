import React from 'react';
import Reveal, { AnimatedCounter } from '@/components/Reveal';

export default function Process() {
  return (
    <section id="process" className="section-padding process-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div className="badge">How We Work</div>
            <h2 className="section-title">Our <AnimatedCounter to={5} />-Step Waterproofing Process</h2>
            <p className="section-subtitle">
              From diagnostic thermal and moisture inspection to precision multi-layer application, we follow a rigorous quality protocol that guarantees zero water ingress.
            </p>
          </div>
        </Reveal>

        <div className="process-steps-track">
          {/* Connecting Line for desktop */}
          <div className="process-connecting-line" aria-hidden="true"></div>

          {/* Step 1: Site Inspection */}
          <Reveal delay={0.08}>
            <div className="process-step-card">
              <div className="process-icon-container">
                <div className="process-icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <span className="process-step-number">1</span>
              </div>
              <h3 className="process-step-title">Site Inspection</h3>
              <p className="process-step-desc">
                In-depth assessment of dampness patterns, structural cracks, slope grading, and moisture intrusion paths.
              </p>
            </div>
          </Reveal>

          {/* Step 2: Right Solution */}
          <Reveal delay={0.16}>
            <div className="process-step-card">
              <div className="process-icon-container">
                <div className="process-icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <span className="process-step-number">2</span>
              </div>
              <h3 className="process-step-title">Right Solution</h3>
              <p className="process-step-desc">
                Engineering a tailored system using elastomeric, polyurethane, or crystalline coatings best suited for the site.
              </p>
            </div>
          </Reveal>

          {/* Step 3: Expert Application */}
          <Reveal delay={0.24}>
            <div className="process-step-card">
              <div className="process-icon-container">
                <div className="process-icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <span className="process-step-number">3</span>
              </div>
              <h3 className="process-step-title">Expert Application</h3>
              <p className="process-step-desc">
                Rigorous surface preparation, polymer crack filling, primer penetration, and seamless multi-coat execution.
              </p>
            </div>
          </Reveal>

          {/* Step 4: Quality Check */}
          <Reveal delay={0.32}>
            <div className="process-step-card">
              <div className="process-icon-container">
                <div className="process-icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span className="process-step-number">4</span>
              </div>
              <h3 className="process-step-title">Quality Check</h3>
              <p className="process-step-desc">
                48-hour continuous water ponding test, membrane thickness verification, and strict adhesion testing.
              </p>
            </div>
          </Reveal>

          {/* Step 5: Leak-Free & Durable */}
          <Reveal delay={0.4}>
            <div className="process-step-card">
              <div className="process-icon-container">
                <div className="process-icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                </div>
                <span className="process-step-number">5</span>
              </div>
              <h3 className="process-step-title">Leak-Free &amp; Durable</h3>
              <p className="process-step-desc">
                Final handover of your leak-proof, weatherproof property backed by official performance warranty certificates.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
