# 🤖 Agent Guide — USMAN.AI Portfolio

> **⚠️ MANDATORY: Read this file FIRST before navigating any directory or making any changes.**

---

## 📌 Project Overview

| Field             | Value                                              |
|-------------------|-----------------------------------------------------|
| **Project Name**  | USMAN.AI — Personal AI Engineer Portfolio           |
| **Owner**         | Muhammad Usman                                      |
| **Type**          | Single-Page Application (SPA) portfolio website     |
| **Tech Stack**    | HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+)      |
| **Font**          | Inter (Google Fonts)                                |
| **Icons**         | Font Awesome 6.5 + Devicon SVGs                     |
| **Theme**         | Professional Dark (Navy + Cyan/Teal accent)         |
| **Hosting**       | Static — no build step, no framework, no bundler    |
| **Contact Form**  | Web3Forms API (AJAX, fallback to mailto)            |

---

## 📂 Folder Structure

```bash
Usman Portfolio/
│
├── index.html                 ← SPA Homepage (ALL sections inline)
├── agent.md                   ← THIS FILE — project context for agents
├── README.md                  ← Project documentation
├── roadmap.md                 ← Development phases & progress tracker
├── 404.html                   ← Custom 404 page
├── robots.txt                 ← SEO robots file
├── sitemap.xml                ← SEO sitemap
├── package-lock.json          ← (unused, can be ignored)
│
├── pages/                     ← Legacy multi-page versions (still functional)
│   ├── projects.html          ← Projects page (cards rendered via JS)
│   ├── services.html          ← 6 service offering cards
│   ├── skills.html            ← 6 skill category cards + proficiencies list
│   ├── internship.html        ← AI Cadmey internship details
│   └── contact.html           ← Contact form + info sidebar
│
├── projects/                  ← MDX documentation layer (1 subfolder per project)
│   ├── timetable-generator/   └── timetable-generator.mdx
│   ├── ziaai-agent/           └── ziaai-agent.mdx
│   └── ... (13 total)
│
└── assets/
    ├── css/
    │   └── style.css          ← Single global stylesheet (all pages + SPA)
    ├── js/
    │   ├── main.js            ← Global JS (SPA navigation, animations, etc.)
    │   └── projects-data.js   ← Projects data array (drives Projects section)
    ├── images/
    │   └── usman_profile.jpg  ← Profile photo (hero section)
    └── docs/
        └── Usman_Resume_PDF.pdf ← Downloadable CV
```

---

## 📄 SPA Sections (index.html)

| # | Section ID       | Content                                              |
|---|------------------|------------------------------------------------------|
| 1 | `#hero`          | Hero with particles, 3D tilt photo, typing animation |
| 2 | `#about`         | About me with highlight cards                        |
| 3 | `#services`      | 6 service offering cards                             |
| 4 | `#skills`        | Tech stack icon grid + 6 skill category cards        |
| 5 | `#projects`      | Filterable project cards (All/NLP/Vision/DL/Web)     |
| 6 | `#experience`    | Timeline: Work Experience + Education (2-column)     |
| 7 | `#certifications`| 6 certification cards with verified badges           |
| 8 | `#contact`       | Contact form + info sidebar + social links           |

---

## ⚙️ JavaScript Features (`main.js`)

| #  | Feature                   | Description                                                  |
|----|---------------------------|--------------------------------------------------------------|
| 1  | Scroll-Spy Navigation     | Auto-highlights nav link based on scroll position            |
| 2  | Header Scroll Elevation   | Adds `.scrolled` class after 60px scroll                     |
| 3  | Page Fade-In              | Smooth opacity transition on DOM load                        |
| 4  | Scroll-Reveal             | IntersectionObserver — staggered fade-up on all elements     |
| 5  | Contact Form              | Web3Forms API with validation + mailto fallback              |
| 6  | Nav Hover Glow            | Dynamic accent color on nav link hover                       |
| 7  | Hamburger Menu            | Mobile fullscreen nav overlay toggle                         |
| 8  | Particle System           | Canvas-based animated particle network (hero only)           |
| 9  | 3D Tilt Effect            | Mouse-follow perspective tilt on profile image               |
| 10 | Typing Animation          | Rotating role titles with type/delete effect                 |
| 11 | Projects Renderer         | Dynamic card generation with filter support                  |
| 12 | Scroll Progress Bar       | Top gradient progress indicator                              |
| 13 | Back to Top Button        | Appears after 400px scroll                                   |
| 14 | Cursor Trail Effect       | Desktop-only mouse trail particles                           |
| 15 | Animated Counters         | Stats numbers count up when scrolled into view               |
| 16 | Smooth Anchor Scroll      | Header-aware smooth scrolling for all # links                |

---

## 🎨 Design System

### Color Palette (CSS Custom Properties)

| Token              | Value                          | Usage                    |
|--------------------|--------------------------------|--------------------------|
| `--bg-primary`     | `#0a0e1a`                      | Page background          |
| `--bg-secondary`   | `#0f1325`                      | Footer background        |
| `--accent`         | `#00d4aa`                      | Primary accent (cyan)    |
| `--accent-light`   | `#00f0c0`                      | Hover states             |
| `--blue`           | `#4f8fff`                      | Gradient secondary       |
| `--purple`         | `#a855f7`                      | Gradient tertiary (text) |
| `--text-white`     | `#edf2f7`                      | Headings                 |
| `--text-light`     | `#c4cdd9`                      | Body text                |
| `--text-muted`     | `#7b8a9e`                      | Descriptions             |
| `--text-dim`       | `#4a5568`                      | Labels, subtle text      |

---

## 📱 Responsive Breakpoints

| Breakpoint  | Changes                                                         |
|-------------|----------------------------------------------------------------|
| `≤ 1024px`  | Contact → single column, Timeline → single column              |
| `≤ 768px`   | Nav → hamburger, cards → 1 column, tech icons smaller          |
| `≤ 480px`   | Hero name smaller, filter pills compact, sections tighter      |

---

## ⚠️ Important Notes

- **SPA Architecture** — `index.html` contains ALL sections, no page reloads
- **Legacy Pages** — `/pages/*.html` still functional for backward compatibility
- **No build system** — all files served as-is (static HTML/CSS/JS)
- **No framework** — pure vanilla, no React/Vue/Next
- **Single CSS file** — `style.css` powers ALL pages
- **Two JS files** — `main.js` (SPA features) + `projects-data.js` (project data)
- **Tech Stack Icons** — loaded via Devicon CDN SVGs
- **Relative paths** — `index.html` uses `assets/...`, pages use `../assets/...`
