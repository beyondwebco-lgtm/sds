'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import { projectData } from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function Projects() {
  const { openLightbox } = useUI();

  return (
    <section id="projects" className="section-padding section-bg-white">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div className="badge">Our Work</div>
            <h2 className="section-title">Our Recent Projects</h2>
            <p className="section-subtitle">
              A showcase of our executed waterproofing projects across residential villas, commercial high-rises, and industrial facilities in Andhra Pradesh.
            </p>
          </div>
        </Reveal>

        <div className="projects-gallery-grid">
          {projectData.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.08}>
              <motion.div
                className="project-item"
                title="Click to view details"
                onClick={() => openLightbox(project)}
                whileTap={{ scale: 0.98 }}
              >
                <img src={project.image} alt={project.title.toLowerCase()} loading="lazy" />
                <div className="project-overlay">
                  <span className="project-category-tag">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>{project.location}</span>
                  </span>
                </div>
                <div className="project-zoom-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
