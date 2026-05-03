/**
 * 基础编程课程网站 - Main JavaScript
 * Optimized for performance and accessibility
 */

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // Configuration
  // ═══════════════════════════════════════════════════════════════
  const CONFIG = {
    // 学期第 1 周的周一日期（修改此处即可适配不同学期）
    SEMESTER_START: '2026-02-23',
    TOTAL_WEEKS: 16,
    SCROLL_THRESHOLD: 50,
    SCROLL_TOP_THRESHOLD: 400
  };

  // ═══════════════════════════════════════════════════════════════
  // Theme Toggle
  // ═══════════════════════════════════════════════════════════════
  function initTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');

    if (!btn || !icon) return;

    function setTheme(theme) {
      html.setAttribute('data-theme', theme);
      icon.textContent = theme === 'light' ? '☀️' : '🌙';
      try {
        localStorage.setItem('bp-theme', theme);
      } catch (e) {
        // localStorage not available
      }
    }

    // Load saved theme or follow system preference
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem('bp-theme');
    } catch (e) {
      // localStorage not available
    }

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    // Toggle on click
    btn.addEventListener('click', function() {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // Follow system preference changes (only if no saved preference)
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
        let hasPreference = false;
        try {
          hasPreference = !!localStorage.getItem('bp-theme');
        } catch (e) {}
        if (!hasPreference) {
          setTheme(e.matches ? 'light' : 'dark');
        }
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // Navbar & Scroll to Top
  // ═══════════════════════════════════════════════════════════════
  function initScroll() {
    const navbar = document.getElementById('navbar');
    const scrollBtn = document.getElementById('scrollTop');

    if (!navbar && !scrollBtn) return;

    // Debounced scroll handler
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > CONFIG.SCROLL_THRESHOLD);
          }
          if (scrollBtn) {
            scrollBtn.classList.toggle('visible', window.scrollY > CONFIG.SCROLL_TOP_THRESHOLD);
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    if (scrollBtn) {
      scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // Mobile Navigation
  // ═══════════════════════════════════════════════════════════════
  function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function() {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      // Accessibility: update aria-expanded
      hamburger.setAttribute('aria-expanded', isOpen);
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // Week Card Accordion (Event Delegation)
  // ═══════════════════════════════════════════════════════════════
  function initWeekCards() {
    const weekGrid = document.querySelector('.week-grid');
    if (!weekGrid) return;

    // Make week cards focusable
    weekGrid.querySelectorAll('.week-card').forEach(function(card, index) {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-expanded', 'false');
    });

    function toggleWeek(card) {
      const body = card.querySelector('.week-body');
      if (!body) return;

      const wasOpen = body.classList.contains('open');

      // Close all others
      weekGrid.querySelectorAll('.week-body').forEach(function(b) {
        b.classList.remove('open');
      });
      weekGrid.querySelectorAll('.week-card').forEach(function(c) {
        c.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!wasOpen) {
        body.classList.add('open');
        card.setAttribute('aria-expanded', 'true');
      }
    }

    // Click handler (event delegation)
    weekGrid.addEventListener('click', function(e) {
      const card = e.target.closest('.week-card');
      if (card) {
        toggleWeek(card);
      }
    });

    // Keyboard handler
    weekGrid.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.week-card');
        if (card) {
          e.preventDefault();
          toggleWeek(card);
        }
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // FAQ Accordion (Event Delegation)
  // ═══════════════════════════════════════════════════════════════
  function initFAQ() {
    const faqContainer = document.querySelector('#faq .container');
    if (!faqContainer) return;

    // Set up ARIA attributes
    faqContainer.querySelectorAll('.faq-item').forEach(function(item, index) {
      const question = item.querySelector('.faq-q');
      const answer = item.querySelector('.faq-a');
      if (question && answer) {
        const id = 'faq-' + index;
        question.setAttribute('aria-controls', id);
        question.setAttribute('aria-expanded', 'false');
        answer.setAttribute('id', id);
      }
    });

    // Click handler (event delegation)
    faqContainer.addEventListener('click', function(e) {
      const question = e.target.closest('.faq-q');
      if (question) {
        const item = question.closest('.faq-item');
        if (item) {
          const isOpen = item.classList.toggle('open');
          question.setAttribute('aria-expanded', isOpen);
        }
      }
    });

    // Keyboard handler
    faqContainer.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const question = e.target.closest('.faq-q');
        if (question) {
          e.preventDefault();
          const item = question.closest('.faq-item');
          if (item) {
            const isOpen = item.classList.toggle('open');
            question.setAttribute('aria-expanded', isOpen);
          }
        }
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // Scroll-triggered Fade-in
  // ═══════════════════════════════════════════════════════════════
  function initFadeIn() {
    const fadeEls = document.querySelectorAll('.fade-in');
    if (!fadeEls.length) return;

    // Check for IntersectionObserver support
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      fadeEls.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      // Fallback for older browsers
      fadeEls.forEach(function(el) {
        el.classList.add('visible');
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // Active Nav Link
  // ═══════════════════════════════════════════════════════════════
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const scrollY = window.scrollY + 100;
          sections.forEach(function(sec) {
            const top = sec.offsetTop;
            const h = sec.offsetHeight;
            const id = sec.getAttribute('id');
            const link = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (link) {
              link.classList.toggle('active', scrollY >= top && scrollY < top + h);
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // Auto-highlight Current Teaching Week
  // ═══════════════════════════════════════════════════════════════
  function initCurrentWeek() {
    // 用本地时间构造，避免 'YYYY-MM-DD' 被按 UTC 解析造成的当日切换偏移
    const parts = String(CONFIG.SEMESTER_START).split('-').map(Number);
    const SEMESTER_START = new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffMs = today - SEMESTER_START;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const currentWeek = Math.floor(diffDays / 7) + 1;

    if (currentWeek >= 1 && currentWeek <= CONFIG.TOTAL_WEEKS) {
      // Highlight the current week card
      const weekCards = document.querySelectorAll('.week-card');
      if (weekCards[currentWeek - 1]) {
        weekCards[currentWeek - 1].classList.add('current');
        // Announce to screen readers
        weekCards[currentWeek - 1].setAttribute('aria-current', 'true');
      }

      // Highlight the current module phase
      document.querySelectorAll('.module-phase[data-weeks]').forEach(function(phase) {
        const range = phase.getAttribute('data-weeks').split('-').map(Number);
        if (currentWeek >= range[0] && currentWeek <= range[1]) {
          phase.classList.add('active');
          phase.setAttribute('aria-current', 'true');
        }
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // Initialize All Modules
  // ═══════════════════════════════════════════════════════════════
  function init() {
    initTheme();
    initScroll();
    initMobileNav();
    initWeekCards();
    initFAQ();
    initFadeIn();
    initActiveNav();
    initCurrentWeek();
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
