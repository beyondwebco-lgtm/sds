import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import ServiceModal from '@/components/ServiceModal';
import ProjectLightbox from '@/components/ProjectLightbox';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import ToastNotice from '@/components/ToastNotice';
import MobileActionBar from '@/components/MobileActionBar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <QuoteModal />
      <ServiceModal />
      <ProjectLightbox />
      <FloatingWhatsApp />
      <BackToTop />
      <ToastNotice />
      <MobileActionBar />
    </>
  );
}
