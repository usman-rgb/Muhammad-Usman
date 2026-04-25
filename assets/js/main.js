document.addEventListener('DOMContentLoaded', () => {

    // ── 0. Preloader ──
    const preloader = document.getElementById('preloader');
    const percentageEl = document.getElementById('loader-percentage');
    
    if (preloader && percentageEl) {
        let count = 0;
        // Total duration around 1.5 seconds (1500ms). 1500 / 100 = 15ms per step
        const speed = 15; 
        
        // Prevent scrolling while preloader is active
        document.body.style.overflow = 'hidden';

        const updateLoader = setInterval(() => {
            count += 1;
            percentageEl.textContent = count + '%';
            
            if (count >= 100) {
                clearInterval(updateLoader);
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    document.body.style.overflow = ''; // Restore scrolling
                    // Remove from DOM to prevent interaction blocking
                    setTimeout(() => preloader.remove(), 600); 
                }, 200); // Tiny pause at 100%
            }
        }, speed);
    }

    // ── Console Branding ──
    console.clear();
    console.log(
        "%c✦ Muhammad Usman — AI Engineer Portfolio ✦",
        "font-size:17px;font-weight:800;color:#fff;background:linear-gradient(135deg,#00d4aa,#4f8fff);padding:14px 24px;border-radius:12px;"
    );
    console.log(
        "%c👨‍💻 HTML · CSS · JavaScript — crafted with passion",
        "font-size:13px;color:#00d4aa;font-style:italic;margin-top:4px;"
    );
    console.log(
        "%c📬 manoousman469@gmail.com  |  +92-3007515751",
        "font-size:13px;color:#4f8fff;"
    );

    // ── 1. SPA Scroll-Spy Active Nav ──
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a.nav-link');

    function updateActiveNavOnScroll() {
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // If SPA (has nav-link), use scroll spy; otherwise use path-based active
    if (navLinks.length > 0) {
        window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
        updateActiveNavOnScroll();
    } else {
        // Legacy multi-page active link
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (
                href === currentPath ||
                (currentPath === "" && href === "index.html") ||
                (href && href.includes(currentPath) && currentPath !== "index.html")
            ) {
                link.classList.add('active');
            }
        });
    }

    // ── 2. Header Scroll Elevation ──
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ── 3. Page Fade-In ──
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => { document.body.style.opacity = '1'; }, 60);

    // ── 4. Scroll-Reveal Animation ──
    const revealElements = document.querySelectorAll(
        '.glass-card, .hero-content, .hero-image, .contact-info-card, .contact-form-container, ' +
        '.about-container, .about-highlight-item, .tech-item, .timeline-item, .cert-card'
    );
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Stagger the animation for cards
                    const el = entry.target;
                    const parent = el.parentElement;
                    const siblings = parent ? Array.from(parent.children).filter(
                        c => c.classList.contains(el.classList[0])
                    ) : [];
                    const delay = siblings.indexOf(el) * 80;

                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, Math.min(delay, 400));

                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.08 });

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });
    }

    // ── 5. Working Contact Form via Web3Forms + Mailto Fallback ──
    const WEB3FORMS_KEY = 'eb083368-ed68-4fbf-80ba-9fb4ac29b202';

    const contactForm = document.getElementById('contact-form');
    const formStatus  = document.getElementById('form-status');
    const submitBtn   = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

    if (contactForm && formStatus && submitBtn) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name    = document.getElementById('senderName').value.trim();
            const email   = document.getElementById('senderEmail').value.trim();
            const subject = document.getElementById('messageSubject').value.trim();
            const message = document.getElementById('messageBody').value.trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                showStatus('⚠️ Please fill in all fields.', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showStatus('⚠️ Please enter a valid email address.', 'error');
                return;
            }

            // If Web3Forms key is not configured, use mailto directly
            if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'YOUR_ACCESS_KEY_HERE') {
                openMailto(name, email, subject, message);
                return;
            }

            // Send via Web3Forms API
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending…';

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_KEY,
                        name: name,
                        email: email,
                        subject: subject,
                        message: message,
                        from_name: 'USMAN.AI Portfolio',
                        replyto: email
                    })
                });

                const result = await response.json();

                if (result.success) {
                    showStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Web3Forms returned an error');
                }
            } catch (err) {
                console.error('Form submission error:', err);
                // Fallback: open email client
                openMailto(name, email, subject, message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            }
        });
    }

    function openMailto(name, email, subject, message) {
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:manoousman469@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
        showStatus('📧 Opening your email client — please click Send to deliver the message!', 'success');
    }

    function showStatus(msg, type) {
        if (!formStatus) return;
        formStatus.textContent = msg;
        formStatus.className = 'form-status ' + type;
        setTimeout(() => { formStatus.className = 'form-status'; }, 8000);
    }

    // ── 6. Nav Hover Glow ──
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!link.classList.contains('active')) {
                link.style.color = 'var(--accent)';
            }
        });
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.color = '';
            }
        });
    });

    // ── 7. Hamburger Menu ──
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.getElementById('main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('mobile-open');
            document.body.style.overflow = nav.classList.contains('mobile-open') ? 'hidden' : '';
        });

        // Close menu when nav link clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('mobile-open');
                document.body.style.overflow = '';
            });
        });
    }

    // ── 8. Particle System (Hero only) ──
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animId;

        function resizeCanvas() {
            const hero = canvas.parentElement;
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }

        function createParticles() {
            particles = [];
            const count = Math.min(60, Math.floor(canvas.width * canvas.height / 15000));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: Math.random() * 1.8 + 0.5,
                    opacity: Math.random() * 0.4 + 0.1
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 170, ${p.opacity})`;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 212, 170, ${0.06 * (1 - dist / 140)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animId = requestAnimationFrame(drawParticles);
        }

        resizeCanvas();
        createParticles();
        drawParticles();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        // Pause when not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animId);
            } else {
                drawParticles();
            }
        });
    }

    // ── 9. Tilt effect on hero image ──
    const heroImg = document.querySelector('.hero-profile-img');
    if (heroImg) {
        heroImg.addEventListener('mousemove', (e) => {
            const rect = heroImg.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            heroImg.style.transform = `scale(1.03) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
        });

        heroImg.addEventListener('mouseleave', () => {
            heroImg.style.transform = '';
        });
    }

    // ── 10. Typing Effect for Hero Title ──
    const heroTitleSpan = document.querySelector('.hero-title span');
    if (heroTitleSpan) {
        const titles = ['AI / ML Engineer', 'Deep Learning Expert', 'NLP Specialist', 'Data Scientist'];
        let titleIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let typeTimeout;

        function typeTitle() {
            const currentTitle = titles[titleIndex];

            if (!deleting) {
                heroTitleSpan.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentTitle.length) {
                    deleting = true;
                    typeTimeout = setTimeout(typeTitle, 2000);
                    return;
                }
            } else {
                heroTitleSpan.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    deleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                }
            }

            typeTimeout = setTimeout(typeTitle, deleting ? 40 : 80);
        }

        // Start after initial load
        setTimeout(typeTitle, 1500);
    }

    // ── 11. Dynamic Projects Renderer with Filter Support ──
    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (projectsGrid && window.PROJECTS_DATA) {
        const projects = window.PROJECTS_DATA.sort((a, b) => a.order - b.order);

        function renderProjects(filter = 'all') {
            projectsGrid.innerHTML = '';

            const filtered = filter === 'all'
                ? projects
                : projects.filter(p => {
                    const lowerFilter = filter.toLowerCase();
                    const matchTags = p.tags.some(t => t.toLowerCase().includes(lowerFilter));
                    const matchCat = p.category.toLowerCase().includes(lowerFilter);
                    // For "Web / Other", match Web or categories not in main filters
                    if (lowerFilter === 'web') {
                        return p.category.toLowerCase().includes('web') ||
                               p.category.toLowerCase().includes('blockchain') ||
                               p.category.toLowerCase().includes('audio') ||
                               p.category.toLowerCase().includes('optimization');
                    }
                    return matchTags || matchCat;
                });

            filtered.forEach((project, index) => {
                const badgeHTML = project.badge
                    ? ` <span class="badge-new">${project.badge}</span>`
                    : '';

                const tagsHTML = project.tags
                    .map(tag => `<span class="skill-tag-usman">${tag}</span>`)
                    .join('\n                    ');

                const githubHTML = project.github
                    ? `<a href="${project.github}" target="_blank" rel="noopener" class="cta-button card-btn">View Code →</a>`
                    : '';

                const demoHTML = project.demo
                    ? `<a href="${project.demo}" target="_blank" rel="noopener" class="cta-button card-btn">Live Demo →</a>`
                    : '';

                const card = document.createElement('div');
                card.className = 'glass-card';
                card.setAttribute('data-slug', project.slug);
                card.innerHTML = `
                    <i class="${project.icon} card-icon"></i>
                    <h3>${project.title}${badgeHTML}</h3>
                    <p class="card-desc">${project.description}</p>
                    <div class="skill-tags-list">
                        ${tagsHTML}
                    </div>
                    ${demoHTML}
                    ${githubHTML}
                `;

                // Staggered animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

                projectsGrid.appendChild(card);

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 80);
            });
        }

        // Initial render
        renderProjects('all');

        // Filter click handlers
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(btn.getAttribute('data-filter'));
            });
        });
    }

    // ── 12. Scroll Progress Bar ──
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // ── 13. Back to Top Button ──
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ── 14. Cursor Trail Effect (Desktop only) ──
    if (window.matchMedia('(hover: hover)').matches) {
        const trailCount = 5;
        const trails = [];

        for (let i = 0; i < trailCount; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.opacity = (1 - i / trailCount) * 0.5;
            trail.style.width = (18 - i * 2) + 'px';
            trail.style.height = (18 - i * 2) + 'px';
            document.body.appendChild(trail);
            trails.push({ el: trail, x: 0, y: 0 });
        }

        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        function animateTrails() {
            trails.forEach((trail, i) => {
                const speed = 0.15 - i * 0.02;
                trail.x += (mouseX - trail.x) * speed;
                trail.y += (mouseY - trail.y) * speed;
                trail.el.style.left = trail.x + 'px';
                trail.el.style.top = trail.y + 'px';
            });
            requestAnimationFrame(animateTrails);
        }

        animateTrails();
    }

    // ── 15. Animated Counter for Stats ──
    const statNumbers = document.querySelectorAll('.hero-stat-number[data-count]');
    if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'));
                    let current = 0;
                    const duration = 1500;
                    const step = target / (duration / 16);

                    function updateCounter() {
                        current += step;
                        if (current >= target) {
                            el.textContent = target + '+';
                        } else {
                            el.textContent = Math.floor(current) + '+';
                            requestAnimationFrame(updateCounter);
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => counterObserver.observe(stat));
    }

    // ── 16. Smooth Scroll for Anchor Links ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPos = targetEl.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

});