'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const { showToast, selectedService, setSelectedService } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync selected service if changed from ServiceModal
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleCopyGst = () => {
    navigator.clipboard?.writeText('37GPWPD8763Q1ZH').then(() => {
      showToast('GSTIN (37GPWPD8763Q1ZH) copied to clipboard!', 'success');
    }).catch(() => {
      showToast('GSTIN: 37GPWPD8763Q1ZH', 'info');
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    showToast(
      `Thank you, ${formData.name}! Your enquiry has been received. Our Representative Manager will contact you shortly.`,
      'success'
    );

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    });
    setSelectedService('');
  };

  return (
    <section id="contact" className="section-padding section-bg-light">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div className="badge">Get In Touch</div>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Contact our Representative Manager and the SDS team for inspection, technical consultation, or a free site estimate.
            </p>
          </div>
        </Reveal>

        <div className="contact-grid">
          {/* Contact Information Side */}
          <Reveal delay={0.08}>
            <div className="contact-info-col">
              <div className="contact-card-main">
                <h3 className="contact-company-title">Sri Devarshini Solutions (SDS)</h3>
                <div className="contact-person-name">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span>Contact Person: <strong>Representative Manager</strong></span>
                </div>

                <div className="contact-details-list">
                  {/* Mobile Number */}
                  <div className="contact-detail-row">
                    <div className="contact-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="contact-text-box">
                      <h6>Mobile Number</h6>
                      <a href="tel:8008730905">8008730905</a>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="contact-detail-row">
                    <div className="contact-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className="contact-text-box">
                      <h6>Email Address</h6>
                      <a href="mailto:Diva.sds@outlook.com">Diva.sds@outlook.com</a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="contact-detail-row">
                    <div className="contact-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div className="contact-text-box">
                      <h6>Company Address</h6>
                      <p>Plot No: 140/141, Dwarakamai Colony, Bandlaguda Jagir, 500086, Telangana.</p>
                    </div>
                  </div>
                </div>

                {/* GSTIN Card */}
                <div className="contact-gst-box">
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block' }}>Official Tax ID</span>
                    <span className="gst-number-text">GSTIN: 37GPWPD8763Q1ZH</span>
                  </div>
                  <motion.button
                    type="button"
                    className="btn btn-outline-green btn-sm copy-gst-btn"
                    title="Copy GSTIN"
                    onClick={handleCopyGst}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Copy</span>
                  </motion.button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="contact-quick-actions">
                <a href="tel:8008730905" className="btn btn-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Click to Call</span>
                </a>
                <a href="https://wa.me/918008730905?text=Hello%20Representative%20Manager,%20I%20would%20like%20to%20enquire%20about%20SDS%20Waterproofing%20Services" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Enquiry Form Side */}
          <Reveal delay={0.16}>
            <div className="contact-form-card">
              <div className="form-header">
                <h3>Send an Enquiry</h3>
                <p>Fill out the form below to request a site visit, cost estimate, or technical consultation.</p>
              </div>

              <form id="enquiryForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">Your Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      id="contactName"
                      name="name"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactPhone">Phone Number *</label>
                    <input
                      className="form-input"
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactEmail">Email Address</label>
                    <input
                      className="form-input"
                      type="email"
                      id="contactEmail"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="serviceRequired">Service Required *</label>
                    <select
                      className="form-select"
                      id="serviceRequired"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="Residential Bungalows">Residential Bungalows Waterproofing</option>
                      <option value="High Rise & Commercial Buildings">High Rise &amp; Commercial Buildings</option>
                      <option value="Repairs & Rehabilitation">Repairs &amp; Rehabilitation / Crack Grouting</option>
                      <option value="Precast Buildings">Precast Buildings Joint Sealing</option>
                      <option value="Terrace Waterproofing">Terrace &amp; Balcony Waterproofing</option>
                      <option value="Basement / Sump Waterproofing">Basement / Sump Water Tank Sealing</option>
                      <option value="Other Waterproofing Enquiry">Other Waterproofing Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMessage">Message / Project Details</label>
                  <textarea
                    className="form-textarea"
                    id="contactMessage"
                    name="message"
                    placeholder="Please describe the area size, current leak/dampness issues, property location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12"></circle></svg>
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Google Maps Section */}
        <Reveal delay={0.2}>
          <div className="map-section">
            <div className="map-wrapper">
              <iframe
                title="Sri Devarshini Solutions Location Map"
                src="https://maps.google.com/maps?q=Plot+No:+140/141,+Dwarakamai+Colony,+Bandlaguda+Jagir,+500086,+Telangana&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
