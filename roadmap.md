# 🗺️ USMAN.AI Portfolio — Development Roadmap

> Tracks all phases of development — what's done ✅ and what's next 🔲

---

## Progress Overview

| Phase | Title | Status | Completion |
|-------|-------|--------|------------|
| 1 | Foundation & Structure | ✅ Done | 100% |
| 2 | Professional Dark Theme Redesign | ✅ Done | 100% |
| 3 | Interactivity & Animations | ✅ Done | 100% |
| 4 | Documentation & Agent Context | ✅ Done | 100% |
| 4-A | Content Data Layer (MDX Projects) | ✅ Done | 100% |
| 4-B | Dynamic Projects Rendering | ✅ Done | 100% |
| 5 | Browser Testing & Bug Fixes | ✅ Done | 100% |
| 6 | Content Polish & SEO | ✅ Done | 100% |
| 7 | Performance Optimization | ✅ Done | 100% |
| 8 | Advanced Features | ✅ Done | 100% |
| 9 | Deployment & Hosting | 🔲 Pending | 0% |
| 10 | Post-Launch & Maintenance | 🔲 Pending | 0% |

---

## Phase 1 — Foundation & Structure ✅

> Build the multi-page HTML skeleton with all content in place.

- [x] Create `index.html` with hero section (name, title, description, photo, stats)
- [x] Create `pages/projects.html` with 13 AI/ML project cards
- [x] Create `pages/services.html` with 6 service offering cards
- [x] Create `pages/skills.html` with 6 skill categories + proficiencies
- [x] Create `pages/internship.html` with AI Cadmey experience
- [x] Create `pages/contact.html` with form + sidebar info cards
- [x] Add consistent header/nav/footer across all pages
- [x] Link downloadable CV (`Usman_Resume_PDF.pdf`)
- [x] Add profile image (`usman_profile.jpg`)
- [x] Set up proper SEO meta tags (title, description per page)

---

## Phase 2 — Professional Dark Theme Redesign ✅

> Overhaul the entire visual design from pink/light to dark/premium.

- [x] Design new color palette — deep navy `#0a0e1a` + cyan accent `#00d4aa`
- [x] Create CSS custom properties (design tokens) for all colors, gradients, shadows
- [x] Switch font from Montserrat to Inter (Google Fonts)
- [x] Implement glassmorphism card system with gradient top-bar on hover
- [x] Design gradient buttons with shimmer hover effect
- [x] Style skill tags, badges, and CTA buttons for dark theme
- [x] Dark contact form inputs with focus glow states
- [x] Dark footer with subtle border
- [x] Custom scrollbar with gradient thumb
- [x] Noise texture overlay on body
- [x] Ambient glow orbs on hero section (CSS pseudo-elements)

---

## Phase 3 — Interactivity & Animations ✅

> Add life to the portfolio with JS-powered interactions.

- [x] Canvas-based particle network system (hero section)
- [x] Typing animation — rotating role titles (AI/ML Engineer, Deep Learning Expert, etc.)
- [x] 3D tilt effect on profile image (mouse-follow)
- [x] Staggered scroll-reveal for cards (IntersectionObserver)
- [x] Page fade-in transition on load
- [x] Header elevation on scroll (`.scrolled` class)
- [x] Hamburger menu for mobile — fullscreen overlay nav
- [x] Nav link hover glow effect
- [x] Working contact form via FormSubmit.co (AJAX + mailto fallback)
- [x] Particle canvas pauses when tab is hidden (performance)

---

## Phase 4 — Documentation & Agent Context ✅

> Create project docs for humans and AI agents.

- [x] Create `agent.md` — full project context, folder structure, design system, page map
- [x] Create `README.md` — professional docs with badges, setup, customization guide
- [x] Create `roadmap.md` — this file, tracking all phases

---

## Phase 4-A — Content Data Layer (MDX Projects) ✅

> Extract all project data into structured `.mdx` files for easy editing and future scalability.

- [x] Create `projects/` folder at project root
- [x] Create 13 subfolders — one per project (kebab-case slugs)
- [x] Create `<project-name>.mdx` in each subfolder (named after the project) with YAML frontmatter:
  - `title`, `slug`, `icon`, `badge`, `order`, `github`, `demo`, `tags`, `category`, `status`
- [x] Add full markdown body: overview, key features, tech stack
- [x] Update `agent.md` folder structure to include `projects/`
- [x] Update `roadmap.md` with Phase 4-A

### Projects Created

| # | Folder | Title |
|---|--------|-------|
| 1 | `timetable-generator/` | Personalized TimeTable Generator |
| 2 | `ziaai-agent/` | ZiaAI Agent |
| 3 | `ziraat-ai/` | Ziraat AI |
| 4 | `resume-screening/` | AI-Powered Resume Screening System |
| 5 | `bitcoin-prediction/` | Bitcoin Price Prediction using LSTM |
| 6 | `skin-disease-detector/` | Skin Disease Detector |
| 7 | `fake-news-detection/` | Fake News Detection System |
| 8 | `white-rhino-prediction/` | White Rhino Visitor Interactions Prediction |
| 9 | `multi-disease-detection/` | AI Multi-Disease Detection |
| 10 | `neural-style-transfer/` | Neural Style Transfer |
| 11 | `harmonic-origin/` | Harmonic Origin |
| 12 | `weather-app/` | Weather Application |
| 13 | `nft-marketplace/` | NFT Marketplace on XRPL |

### MDX Frontmatter Schema

```yaml
---
title: "Project Title"           # Display name
slug: "project-slug"             # URL-safe identifier
icon: "fa-icon-name"             # Font Awesome icon class
badge: "New"                     # Optional badge ("New" or "")
order: 1                         # Display order on Projects page
github: "https://..."            # GitHub repository URL
demo: ""                         # Live demo URL (if any)
tags:                            # Technology tags array
  - Python
  - TensorFlow
category: "Category Name"        # Project category
status: "completed"              # completed | in-progress | planned
---
```

---

## Phase 4-B — Dynamic Projects Rendering ✅

> Connect the data layer to the live site — render project cards from JS instead of hardcoded HTML.

- [x] Create `assets/js/projects-data.js` — JS array with all 13 projects as `window.PROJECTS_DATA`
- [x] Replace hardcoded cards in `pages/projects.html` with empty `<div id="projects-grid">`
- [x] Load `projects-data.js` script BEFORE `main.js` in `projects.html`
- [x] Add Feature #11 (Projects Renderer) to `main.js` — reads data array → generates card HTML
- [x] Include scroll-reveal animations for dynamically created cards
- [x] Support `badge`, `demo`, and `github` optional fields in card rendering
- [x] Update `agent.md`, `README.md`, `roadmap.md` with new architecture

### Data Flow

```
projects-data.js (PROJECTS_DATA array)
        ↓
main.js (Feature #11: Projects Renderer)
        ↓
projects.html (#projects-grid → glass-card elements)
```

### How to Add a New Project

1. Open `assets/js/projects-data.js`
2. Add an object with: `title`, `slug`, `icon`, `badge`, `order`, `github`, `demo`, `tags`, `category`, `status`, `description`
3. Optionally create `projects/<slug>/<slug>.mdx` for documentation

---

## Phase 5 — Browser Testing & Bug Fixes ✅

> Ensure everything works perfectly across all browsers and devices.

- [x] Test on Chrome (desktop + mobile)
- [x] Test on Firefox
- [x] Test on Safari / WebKit
- [x] Test on Edge
- [x] Test on real mobile device (Android/iOS)
- [x] Fix any CSS cross-browser issues (`backdrop-filter` — `-webkit-` prefix added)
- [x] Verify hamburger menu works on all mobile sizes
- [x] Test contact form submission end-to-end
- [x] Check all external links open correctly
- [x] Validate HTML with W3C Validator
- [x] Validate CSS with W3C CSS Validator
- [x] Fix any accessibility issues (ARIA labels, contrast, focus states)

### Accessibility Fixes Applied

- Added `role="navigation"` and `aria-label` to all `<nav>` elements
- Added `aria-label` to hamburger button on all pages
- Added `aria-hidden="true"` to decorative icons
- Added `.sr-only` labels for all contact form inputs
- Added `role="alert"` to form status message div
- Added `:focus-visible` outline styles for keyboard navigation
- Added unique `id` attributes to all interactive elements

---

## Phase 6 — Content Polish & SEO ✅

> Fine-tune the content and optimize for search engines.

- [x] Add Open Graph meta tags (og:title, og:description, og:image) for social sharing
- [x] Add Twitter Card meta tags
- [x] Create favicon and apple-touch-icon (`assets/images/favicon.png`)
- [x] Add structured data (JSON-LD) for Person schema on index.html
- [x] Review and improve all page descriptions
- [x] Add `alt` text audit for all images
- [x] Create `sitemap.xml`
- [x] Create `robots.txt`
- [x] Update project GitHub links to actual repositories
- [x] Proofread all content for grammar and consistency
- [x] Add "Back to Top" button on long pages (Projects, Skills)

### SEO Files Created

| File | Purpose |
|------|---------|
| `sitemap.xml` | XML sitemap for Google/Bing crawlers |
| `robots.txt` | Crawler rules + sitemap reference |
| `404.html` | Custom error page with branded design |
| `assets/images/favicon.png` | Site favicon + apple-touch-icon |

### Meta Tags Added Per Page

| Page | OG Title | Twitter Card |
|------|----------|--------------|
| `index.html` | Muhammad Usman — AI/ML Engineer Portfolio | summary_large_image |
| `projects.html` | AI Projects & Research | summary_large_image |
| `services.html` | Expert AI/ML Services | summary_large_image |
| `skills.html` | Skills & Expertise | summary_large_image |
| `internship.html` | Internship & Experience | summary_large_image |
| `contact.html` | Contact — Muhammad Usman | summary_large_image |

---

## Phase 7 — Performance Optimization ✅

> Make the site fast and lightweight.

- [x] Compress `usman_profile.jpg` (optimize file size)
- [x] Add `loading="lazy"` to images below the fold
- [x] Add `loading="eager"` to hero profile image (above the fold)
- [x] Preload critical fonts (Inter) — `preconnect` hints
- [x] Add `preconnect` hints for Google Fonts and Font Awesome CDN
- [x] Reduce particle count on mobile for better performance (already handled in code)
- [x] Scroll event listeners use `{ passive: true }` for smoother scrolling
- [ ] ~~Minify `style.css` for production~~ (do at deployment time)
- [ ] ~~Minify `main.js` for production~~ (do at deployment time)
- [ ] ~~Convert images to WebP format with fallback~~ (optional, already small)
- [ ] ~~Self-hosting fonts~~ (CDN is faster for most users)

### Performance Hints Added

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
```

---

## Phase 8 — Advanced Features ✅

> Elevate the portfolio with premium interactions.

- [x] **Scroll progress bar** — gradient bar at top showing page scroll %
- [x] **Back to Top button** — floating button appears after 400px scroll
- [x] **Cursor trail effect** — subtle glow following cursor (desktop only)
- [x] **Custom 404 page** — branded error page with dark theme
- [ ] ~~Dark/Light mode toggle~~ (deferred — dark theme is the brand identity)
- [ ] ~~Blog section~~ (deferred — future phase)
- [ ] ~~Project detail pages~~ (deferred — future phase)
- [ ] ~~Testimonials section~~ (deferred — need testimonials first)
- [ ] ~~Achievements/Certifications page~~ (deferred — future phase)
- [ ] ~~Smooth page transitions~~ (deferred — requires SPA framework)
- [ ] ~~Analytics~~ (add post-deployment)
- [ ] ~~Resume viewer~~ (download works fine for now)
- [ ] ~~Multi-language support~~ (deferred — future phase)

### Features Implemented in `main.js`

| # | Feature | Trigger |
|---|---------|---------|
| 12 | Scroll Progress Bar | Scroll event → width % |
| 13 | Back to Top Button | Scroll > 400px → visible |
| 14 | Cursor Trail Effect | Mouse move → 5 trailing glow dots |

---

## Phase 9 — Deployment & Hosting 🔲

> Launch the portfolio live on the internet.

- [ ] Choose hosting platform (GitHub Pages / Netlify / Vercel)
- [ ] Set up custom domain (e.g., `usman-ai.com` or similar)
- [ ] Configure HTTPS/SSL certificate
- [ ] Set up CI/CD — auto deploy on git push
- [x] Configure custom 404 page ← **Done early!**
- [ ] Test live site on all devices
- [ ] Submit to Google Search Console
- [ ] Share on LinkedIn, GitHub profile, resume

---

## Phase 10 — Post-Launch & Maintenance 🔲

> Keep the portfolio fresh and up to date.

- [ ] Add new projects as they are completed
- [ ] Update skills list when new tech is learned
- [ ] Update internship/experience section with new roles
- [ ] Monitor contact form for submissions
- [ ] Review analytics and optimize based on visitor data
- [x] Update copyright year annually ← **Fixed to 2026**
- [ ] Refresh design every 6-12 months
- [ ] Keep dependencies (Font Awesome, fonts) up to date

---

## 📅 Changelog

| Date | Phase | What Changed |
|------|-------|--------------| 
| 2025 | 1 | Initial portfolio structure built (pink/light theme) |
| 2026-04-12 | 2 | Complete dark theme redesign (navy + cyan) |
| 2026-04-12 | 3 | Added particles, typing animation, 3D tilt, hamburger menu |
| 2026-04-12 | 4 | Created agent.md, README.md, roadmap.md |
| 2026-04-12 | 4-A | Created projects/ folder with 13 MDX data files |
| 2026-04-12 | 4-B | Dynamic rendering — projects-data.js + JS renderer replaces hardcoded HTML |
| 2026-04-15 | 5 | Cross-browser fixes, ARIA labels, focus states, accessibility audit |
| 2026-04-15 | 6 | OG tags, Twitter Cards, JSON-LD, favicon, sitemap.xml, robots.txt, 404.html |
| 2026-04-15 | 7 | Preconnect hints, lazy loading, passive scroll listeners, performance audit |
| 2026-04-15 | 8 | Scroll progress bar, back-to-top button, cursor trail effect |

---

> **Next up:** Phase 9 — Deploy to GitHub Pages / Netlify / Vercel
