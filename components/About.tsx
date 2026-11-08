import React from 'react';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="about" className="section-padding section-bg-white">
      <div className="container">
        <div className="about-grid">
          {/* Content Side */}
          <Reveal>
            <div className="about-content">
              <div className="badge">Who We Are</div>
              <h2 className="section-title">About SDS</h2>

              <p className="about-desc">
                Sri Devarshini Solutions (SDS) provides reliable and long-lasting waterproofing solutions for residential, commercial, and industrial buildings. With expert execution, quality materials, and a customer-first approach, we ensure your buildings stay strong, safe, and leak-free.
              </p>

              {/* 4 Company Highlights */}
              <div className="about-highlights-grid">
                {/* Highlight 1 */}
                <div className="highlight-box">
                  <div className="highlight-box-header">
                    <div className="highlight-box-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h4 className="highlight-box-title">Expert Team</h4>
                  </div>
                  <p className="highlight-box-desc">Skilled &amp; Experienced Professionals</p>
                </div>

                {/* Highlight 2 */}
                <div className="highlight-box">
                  <div className="highlight-box-header">
                    <div className="highlight-box-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                    <h4 className="highlight-box-title">Quality Materials</h4>
                  </div>
                  <p className="highlight-box-desc">Premium &amp; Durable Products</p>
                </div>

                {/* Highlight 3 */}
                <div className="highlight-box">
                  <div className="highlight-box-header">
                    <div className="highlight-box-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                    </div>
                    <h4 className="highlight-box-title">On-Time Completion</h4>
                  </div>
                  <p className="highlight-box-desc">Project Delivery as Committed</p>
                </div>

                {/* Highlight 4 */}
                <div className="highlight-box">
                  <div className="highlight-box-header">
                    <div className="highlight-box-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <h4 className="highlight-box-title">Trusted Partner</h4>
                  </div>
                  <p className="highlight-box-desc">For Homes, Businesses &amp; Developers</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="about-cta-row">
                <a href="#process" className="btn btn-primary">
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a href="tel:8008730905" className="btn btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Speak with Representative Manager</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Image Side (Right side with worker) */}
          <Reveal delay={0.15}>
            <div className="about-image-wrap">
              <div className="about-decorative-border"></div>
              <div className="about-image-frame">
                <img src="/images/about-worker.jpg" alt="Professional SDS Waterproofing Worker" loading="lazy" />
              </div>
              {/* Floating Credential Card */}
              <div className="about-float-card">
                <div className="about-float-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div className="about-float-info">
                  <h5>Certified Technicians</h5>
                  <p>100% Quality-Tested Materials</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
