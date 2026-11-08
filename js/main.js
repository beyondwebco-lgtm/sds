/**
 * SDS – SRI DEVARSHINI SOLUTIONS
 * Interactive Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initModals();
  initServiceModals();
  initProjectLightbox();
  initContactForm();
  initBackToTop();
  initGstCopy();
});

/* ==========================================================================
   Navbar & Mobile Navigation
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileToggle') || document.querySelector('.mobile-toggle');
  const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
  const navBackdrop = document.getElementById('navBackdrop') || document.querySelector('.nav-backdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const navLinks = document.querySelectorAll('.drawer-links .nav-link:not(.dropdown-toggle), .nav-menu > .nav-link:not(.dropdown-toggle)');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownParent = document.querySelector('.nav-item-dropdown');
  const drawerActionBtns = document.querySelectorAll('.mobile-drawer-actions button, .mobile-drawer-actions a');

  function openDrawer() {
    if (!navMenu) return;
    navMenu.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.classList.add('nav-open', 'nav-locked');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (!navMenu) return;
    navMenu.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.classList.remove('nav-open', 'nav-locked');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
  }

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navMenu.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeDrawer();
      });
    }

    if (navBackdrop) {
      navBackdrop.addEventListener('click', () => {
        closeDrawer();
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close when tapping an action button inside drawer
    drawerActionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // Mobile dropdown toggle
  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const isOpen = dropdownParent.classList.toggle('mobile-open');
        dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });

    // Also close drawer when dropdown item clicked
    const dropdownItems = dropdownParent.querySelectorAll('.dropdown-item');
    dropdownItems.forEach((item) => {
      item.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach((curr) => {
      const top = curr.offsetTop;
      const height = curr.offsetHeight;
      const id = curr.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ==========================================================================
   Service Details Data & Modals
   ========================================================================== */
const serviceData = {
  bungalow: {
    title: 'Residential Bungalow Waterproofing',
    image: 'images/service-bungalow-interior.jpg',
    category: 'Residential Services',
    intro: 'Comprehensive waterproofing systems engineered specifically for luxury bungalows, villas, and independent homes to guarantee 100% leak-proof interiors, terraces, and facades.',
    features: [
      'Flat & sloped terrace roof waterproofing with UV-resistant polyurethane / acrylic elastomeric coatings.',
      'Terrace garden and planter box root-barrier waterproofing.',
      'Under-tile waterproofing for bathrooms, kitchens, and wet utility areas.',
      'External parapet walls, chajjas, and facade elastomeric crack-bridging coatings.',
      'Sump tank and overhead drinking water tank food-grade epoxy waterproofing.'
    ],
    materials: 'High-grade Dr. Fixit, Fosroc Nitoproof, Sika Topseal, and customized elastomeric polyurethane membranes.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply'
  },
  commercial: {
    title: 'High Rise & Commercial Building Waterproofing',
    image: 'images/service-commercial-highrise.jpg',
    category: 'Commercial Infrastructure',
    intro: 'Heavy-duty waterproofing solutions designed for corporate towers, shopping malls, hospitals, tech parks, and multi-tenant residential complexes subject to heavy thermal movement and foot traffic.',
    features: [
      'Podium slab and basement retaining wall dual-layer waterproofing against hydrostatic water pressure.',
      'Curtain wall structural silicone perimeter sealing and exterior facade weatherproofing.',
      'Expansion joint treatment with elastomeric waterstops, polysulfide sealants, and metal cover plates.',
      'Multi-level covered and exposed car parking deck polyurethane traffic-bearing coatings.',
      'Elevator pit and subterranean basement PU injection grouting.'
    ],
    materials: 'EPDM membranes, APP modified torch-on bitumen membranes, polyurethane traffic coats, and polysulfide joint sealants.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply'
  },
  repairs: {
    title: 'Repairs & Rehabilitation Waterproofing',
    image: 'images/service-repairs-rehab.jpg',
    category: 'Restoration & Rehabilitation',
    intro: 'Specialized diagnostic structural restoration and leak rectification for existing buildings suffering from active leaks, internal dampness, efflorescence, and spalling concrete.',
    features: [
      'High-pressure polyurethane (PU) and epoxy injection grouting for active water leakage through structural cracks.',
      'Anti-corrosion rebar treatment and polymer-modified structural repair mortar rebuilding.',
      'Internal wall dampness arrest, salt efflorescence treatment, and breathable waterproofing barrier.',
      'Non-destructive electronic moisture mapping and root-cause leak source detection.',
      'Refurbishment of old deteriorated terrace waterproofing without complete slab demolition.'
    ],
    materials: 'PU injection resins, micro-fine cementitious grouts, polymer bonding agents, and rust inhibitors.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply'
  },
  precast: {
    title: 'Precast Building Joint Waterproofing',
    image: 'images/service-precast-illus.png',
    category: 'Precast & Modular Engineering',
    intro: 'State-of-the-art waterproofing systems tailored for modern precast concrete structures, precast facade panels, modular housing, and industrial precast joints.',
    features: [
      'High-performance PU and MS polymer joint sealant application in precast panel gaps.',
      'Closed-cell polyethylene backer rod insertion to ensure proper joint geometry and depth control.',
      'Elastomeric bridging tape systems for high-movement vertical and horizontal joints.',
      'Shear key joint waterproofing and hollow-core slab joint sealing.',
      'Air and water-tight thermal barrier protection ensuring all-weather climate resistance.'
    ],
    materials: 'Fosroc Nitoseal, SikaHyflex, Bostik sealants, and elastomeric preformed joint tapes.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply'
  }
};

function initServiceModals() {
  const modalBackdrop = document.getElementById('serviceModal');
  const closeBtn = document.getElementById('closeServiceModal');
  const serviceCards = document.querySelectorAll('[data-service-key]');

  if (!modalBackdrop) return;

  serviceCards.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-service-key');
      const data = serviceData[key];
      if (!data) return;

      document.getElementById('modalServiceCategory').textContent = data.category;
      document.getElementById('modalServiceTitle').textContent = data.title;
      document.getElementById('modalServiceImage').src = data.image;
      document.getElementById('modalServiceImage').alt = data.title;
      document.getElementById('modalServiceIntro').textContent = data.intro;

      const featureList = document.getElementById('modalServiceFeatures');
      featureList.innerHTML = '';
      data.features.forEach((feat) => {
        const li = document.createElement('li');
        li.className = 'service-feature-item';
        li.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${feat}</span>`;
        featureList.appendChild(li);
      });

      document.getElementById('modalServiceMaterials').textContent = data.materials;
      document.getElementById('modalServiceGuarantee').textContent = data.guarantee;

      // Update quote button in modal to pre-fill service in contact form
      const quoteBtn = document.getElementById('modalServiceQuoteBtn');
      if (quoteBtn) {
        quoteBtn.onclick = () => {
          modalBackdrop.classList.remove('active');
          const serviceSelect = document.getElementById('serviceRequired');
          if (serviceSelect) {
            serviceSelect.value = data.title;
          }
          const contactSec = document.getElementById('contact');
          if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
          }
        };
      }

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   Project Gallery Lightbox
   ========================================================================== */
function initProjectLightbox() {
  const lightbox = document.getElementById('projectLightbox');
  const closeBtn = document.getElementById('closeLightbox');
  const projectItems = document.querySelectorAll('.project-item');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');

  if (!lightbox) return;

  projectItems.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.project-title')?.textContent || 'Project';
      const loc = item.querySelector('.project-location')?.textContent || '';
      const tag = item.querySelector('.project-category-tag')?.textContent || '';

      lightboxImg.src = img.src;
      lightboxImg.alt = title;
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = `${tag} • ${loc}`;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   Quote / Site Visit Modal
   ========================================================================== */
function initModals() {
  const quoteModal = document.getElementById('quoteModal');
  const openButtons = document.querySelectorAll('.open-quote-modal');
  const closeBtn = document.getElementById('closeQuoteModal');

  if (!quoteModal) return;

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('enquiryForm');
  const modalForm = document.getElementById('modalQuoteForm');

  setupForm(form, 'Your enquiry has been received! Our Representative Manager / SDS team will call you shortly.');
  setupForm(modalForm, 'Your site visit request has been sent! We will contact you within 2 hours.');

  function setupForm(f, successMsg) {
    if (!f) return;
    f.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = f.querySelector('[name="name"]')?.value.trim();
      const phone = f.querySelector('[name="phone"]')?.value.trim();
      const email = f.querySelector('[name="email"]')?.value.trim();

      if (!name || !phone) {
        showToast('Please fill in your name and phone number.');
        return;
      }

      // Basic phone check
      const phoneDigits = phone.replace(/[^0-9]/g, '');
      if (phoneDigits.length < 10) {
        showToast('Please enter a valid 10-digit mobile number.');
        return;
      }

      const submitBtn = f.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path></svg>
        Sending...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        f.reset();

        // Close modal if it was open
        const quoteModal = document.getElementById('quoteModal');
        if (quoteModal) {
          quoteModal.classList.remove('active');
          document.body.style.overflow = '';
        }

        showToast(successMsg);
      }, 1000);
    });
  }
}

/* ==========================================================================
   Toast Notification
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   GST Number Quick Copy
   ========================================================================== */
function initGstCopy() {
  const copyBtns = document.querySelectorAll('.copy-gst-btn');
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const gstText = '37GPWPD8763Q1ZH';
      navigator.clipboard.writeText(gstText).then(() => {
        showToast('GSTIN: 37GPWPD8763Q1ZH copied to clipboard!');
      }).catch(() => {
        showToast('GSTIN: 37GPWPD8763Q1ZH');
      });
    });
  });
}

