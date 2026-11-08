# SDS – Sri Devarshini Solutions Website (Next.js App Router)

> **Tagline:** Building Trust, Ensuring Strength  
> **Contact Person:** Representative Manager  
> **Phone:** +91 8008730905  
> **Email:** Diva.sds@outlook.com  
> **GSTIN:** 37GPWPD8763Q1ZH  
> **Location:** Plot No: 140/141, Dwarakamai Colony, Bandlaguda Jagir, 500086, Telangana  

---

## 🏗️ Project Overview

A professional, high-performance, modern, fully responsive web application built for **Sri Devarshini Solutions (SDS)**, specialized waterproofing contractors based in Bandlaguda Jagir, Telangana and Andhra Pradesh.

Converted from a static site into a **Next.js 15 (App Router)** project with **React 19**, **TypeScript**, and **Framer Motion**, maintaining 100% visual and functional fidelity with the original design tokens, Plus Jakarta Sans typography, and branding.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, Server & Client Components)
- **Language:** TypeScript
- **UI & Runtime:** React 19
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Typography:** `Plus Jakarta Sans` via `next/font/google`
- **Styling:** CSS3 Design Tokens in `app/globals.css` (No Tailwind or heavy UI library dependencies)
- **Deployment:** Vercel Ready

---

## 📁 Directory Structure

```text
sds/
├── app/
│   ├── globals.css              # Global styles, variables, spacing tokens, animations
│   ├── layout.tsx               # Root HTML shell, metadata, viewport, font configuration
│   └── page.tsx                 # Main landing page composing all sections
├── components/
│   ├── Header.tsx               # Top contact bar, sticky navbar, mobile drawer
│   ├── Hero.tsx                 # Hero section with tagline badge, buttons & benefit cards
│   ├── TrustBar.tsx             # 4 trust & quality proof points
│   ├── Services.tsx             # 4 service cards with guarantee pillars & modal triggers
│   ├── About.tsx                # Company overview, 4 key strengths, team photo & badge
│   ├── Process.tsx              # 5-step waterproofing roadmap
│   ├── Projects.tsx             # Recent project gallery grid with lightbox preview
│   ├── CTA.tsx                  # High-conversion banner with direct call & quote triggers
│   ├── Contact.tsx              # Contact card, GSTIN copy, enquiry form & Google Maps
│   ├── Footer.tsx               # Footer branding, links, services, contact & copyright
│   ├── QuoteModal.tsx           # Free site visit quote modal dialog with validation
│   ├── ServiceModal.tsx         # Detailed service specifications modal
│   ├── ProjectLightbox.tsx      # High-resolution project image lightbox modal
│   ├── FloatingWhatsApp.tsx     # Floating WhatsApp quick chat button
│   ├── BackToTop.tsx            # Smooth scroll back to top button
│   └── ToastNotice.tsx          # Toast notification system
├── context/
│   └── UIContext.tsx            # Global UI state (modals, lightboxes, toasts)
├── lib/
│   └── data.ts                  # Structured typed data for services and projects
├── public/
│   ├── favicon.png              # Site favicon
│   └── images/                  # High-resolution project images, banners, and logos
├── .env.example                 # Environment variables template
├── .gitignore                   # Standard Next.js gitignore
├── package.json                 # Next.js, React, TypeScript & Framer Motion dependencies
├── tsconfig.json                # TypeScript path aliases (@/*)
└── README.md                    # Project documentation
```

---

## 🛠️ Local Development & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Analysis
```bash
npm run build
```

### 4. Run the Production Server Locally
```bash
npm start
```

---

## 🚢 Deploying to Vercel

1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Convert static site to Next.js App Router with TypeScript & Framer Motion"
   git branch -M main
   git push -u origin main
   ```

2. Import into Vercel:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Connect your GitHub account and select the **`sds`** repository.
   - Framework preset will automatically be detected as **Next.js**.
   - Click **Deploy**.
