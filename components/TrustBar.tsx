import React from 'react';
import Reveal, { AnimatedCounter } from '@/components/Reveal';

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-bar-inner">
        <Reveal delay={0}>
          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="trust-text">
              <h4><AnimatedCounter to={100} suffix="% Leak-Free" /></h4>
              <p>Guaranteed Protection</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            </div>
            <div className="trust-text">
              <h4>Quality Materials</h4>
              <p>Industry-Standard Products</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            </div>
            <div className="trust-text">
              <h4>Expert Execution</h4>
              <p>Skilled Technicians</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div className="trust-text">
              <h4>GST Registered</h4>
              <p>37GPWPD8763Q1ZH</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
