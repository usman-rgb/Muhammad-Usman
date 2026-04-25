# USMAN.AI — AI Engineer Portfolio

<div align="center">

![Status](https://img.shields.io/badge/Status-Live-00d4aa?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A premium dark-themed portfolio website for Muhammad Usman — AI/ML Engineer**

[🌐 Live Demo](#) · [📧 Contact](mailto:manoousman469@gmail.com) · [💼 LinkedIn](https://linkedin.com/in/usman-saeed786/)

</div>

---

## ✨ Features

- 🌑 **Professional Dark Theme** — Deep navy background with cyan/teal accent gradients
- 🔮 **Glassmorphism Cards** — Frosted glass effect with subtle borders and glow on hover
- ✨ **Particle Network** — Animated canvas-based particle system on the hero section
- ⌨️ **Typing Animation** — Rotating role titles (AI/ML Engineer, Deep Learning Expert, etc.)
- 🎯 **3D Tilt Effect** — Mouse-follow perspective tilt on the profile image
- 📱 **Fully Responsive** — Mobile hamburger menu, adaptive grids, touch-friendly
- 🚀 **Scroll Reveal** — Staggered fade-up animations on cards as you scroll
- 📬 **Working Contact Form** — AJAX submission via FormSubmit with validation & fallback
- 🎨 **CSS Custom Properties** — Full design token system for easy theme customization
- 📦 **Data-Driven Projects** — Project cards rendered dynamically from a JS data file
- ⚡ **Zero Dependencies** — No frameworks, no build tools, pure vanilla HTML/CSS/JS

---

## 📂 Project Structure

```
Usman Portfolio/
│
├── index.html                 # Homepage — Hero section with particles
├── agent.md                   # Agent context guide (for AI assistants)
├── README.md                  # This file
├── roadmap.md                 # Development phases & progress tracker
│
├── pages/
│   ├── projects.html          # Projects page (cards rendered dynamically)
│   ├── services.html          # 6 service offering cards
│   ├── skills.html            # Technical skill categories + proficiencies
│   ├── internship.html        # AI Cadmey internship experience
│   └── contact.html           # Contact form + info sidebar
│
├── projects/                  # MDX documentation (1 subfolder per project)
│   ├── timetable-generator/   # Each folder contains <name>.mdx
│   ├── ziaai-agent/
│   ├── ziraat-ai/
│   ├── resume-screening/
│   ├── bitcoin-prediction/
│   ├── skin-disease-detector/
│   ├── fake-news-detection/
│   ├── white-rhino-prediction/
│   ├── multi-disease-detection/
│   ├── neural-style-transfer/
│   ├── harmonic-origin/
│   ├── weather-app/
│   └── nft-marketplace/
│
└── assets/
    ├── css/
    │   └── style.css          # Global stylesheet — design tokens + all components
    ├── js/
    │   ├── main.js            # Global JS — particles, animations, form, menu
    │   └── projects-data.js   # Projects data array (source of truth for cards)
    ├── images/
    │   └── usman_profile.jpg  # Profile photo
    └── docs/
        └── Usman_Resume_PDF.pdf  # Downloadable resume
```

---

## 🎨 Design System

### Color Palette

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| 🟦 | Background Primary | `#0a0e1a` | Main page background |
| 🟩 | Accent | `#00d4aa` | Buttons, links, highlights |
| 🔵 | Blue | `#4f8fff` | Gradient secondary |
| 🟣 | Purple | `#a855f7` | Gradient tertiary (text) |
| ⬜ | Text White | `#edf2f7` | Headings |
| 🔘 | Text Muted | `#7b8a9e` | Descriptions |

### Typography

- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (400, 500, 600, 700, 800, 900)
- **Icons**: [Font Awesome 6.5](https://fontawesome.com/)

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `index.html` | Hero section with photo, typing animation, stats, particles |
| **Projects** | `pages/projects.html` | 13 AI/ML project cards (dynamically rendered from `projects-data.js`) |
| **Services** | `pages/services.html` | 6 professional service offerings |
| **Skills** | `pages/skills.html` | Technical skill categories and proficiencies |
| **Internship** | `pages/internship.html` | AI Cadmey internship details |
| **Contact** | `pages/contact.html` | Working contact form + info sidebar |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No Node.js, npm, or build tools required

### Run Locally
Simply open `index.html` in your browser:

```bash
# Option 1: Direct open
start index.html

# Option 2: Using a local server (recommended for best experience)
npx serve .

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 🛠 Customization

### Change Accent Color
Edit the CSS custom properties in `assets/css/style.css`:

```css
:root {
    --accent:        #00d4aa;    /* Change this */
    --accent-light:  #00f0c0;    /* Lighter shade */
    --accent-dark:   #009e80;    /* Darker shade */
}
```

### Update Contact Email
Search and replace `manoousman469@gmail.com` across:
- All HTML files (header, footer, contact info)
- `assets/js/main.js` (FormSubmit AJAX URL)

### Add New Project
Open `assets/js/projects-data.js` and add a new object to the `PROJECTS_DATA` array:

```js
{
    title: "My New Project",
    slug: "my-new-project",
    icon: "fas fa-rocket",
    badge: "New",
    order: 14,
    github: "https://github.com/...",
    demo: "",
    tags: ["Python", "AI"],
    category: "AI",
    status: "completed",
    description: "Project description here."
}
```

Optionally, create a matching MDX doc: `projects/my-new-project/my-new-project.mdx`

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `> 1024px` | Full desktop layout — 3-column grids, side-by-side contact |
| `≤ 1024px` | Contact goes single column, sidebar wraps |
| `≤ 768px` | Hamburger menu, single column cards, smaller hero |
| `≤ 480px` | Compact hero, stacked contact info |

---

## ⚙️ Technical Details

- **No build step** — all files served as static HTML/CSS/JS
- **No framework** — 100% vanilla, zero npm dependencies
- **Single CSS file** — One stylesheet powers all 6 pages
- **Two JS files** — `main.js` (global features) + `projects-data.js` (project data)
- **Dynamic projects** — Cards are generated at runtime from `PROJECTS_DATA` array
- **FormSubmit.co** — Free AJAX form backend (no server needed)
- **Performance** — Particle canvas pauses on tab visibility change

---

## 👤 About

**Muhammad Usman** — AI/ML Engineer based in Bahawalpur, Pakistan

- 🎓 3+ years of experience in Machine Learning, Deep Learning, and NLP
- 🏢 Currently interning at [AI Cadmey](https://www.aicadmey.com/)
- 📧 [manoousman469@gmail.com](mailto:manoousman469@gmail.com)
- 🔗 [LinkedIn](https://linkedin.com/in/usman-saeed786/) · [GitHub](https://github.com/usman-rgb)

---

## 📝 License

© 2025 Muhammad Usman. All Rights Reserved.
