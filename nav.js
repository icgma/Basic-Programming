/**
 * 基础编程课程网站 - 共享导航与主题脚本
 * 统一所有子页面的主题切换、汉堡菜单、滚动行为
 */
(function() {
  'use strict';

  const STORAGE_KEY = 'bp-theme';
  const NAV_SCROLL_THRESHOLD = 40;
  const SCROLL_TOP_THRESHOLD = 400;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('themeIcon');
    if (icon) icon.textContent = theme === 'light' ? '☀️' : '🌙';
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      applyTheme('light');
    } else {
      applyTheme('dark');
    }

    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'light' ? 'dark' : 'light');
      });
    }

    if (window.matchMedia) {
      try {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
          let hasPref = false;
          try { hasPref = !!localStorage.getItem(STORAGE_KEY); } catch (err) {}
          if (!hasPref) applyTheme(e.matches ? 'light' : 'dark');
        });
      } catch (e) {}
    }
  }

  function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function() {
      const open = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

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

  function initScroll() {
    const navbar = document.getElementById('navbar');
    const scrollBtn = document.getElementById('scrollTop');
    if (!navbar && !scrollBtn) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function() {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > NAV_SCROLL_THRESHOLD);
        if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > SCROLL_TOP_THRESHOLD);
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (scrollBtn) {
      scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // 复制代码按钮（snippet-gallery 等子页可复用）
  window.copyCode = function(btn, codeId) {
    const codeEl = document.getElementById(codeId);
    if (!codeEl || !navigator.clipboard) return;
    navigator.clipboard.writeText(codeEl.innerText).then(function() {
      const original = btn.textContent;
      btn.textContent = '✅ 已复制';
      btn.classList.add('copied');
      setTimeout(function() {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 2000);
    }).catch(function() {
      btn.textContent = '⚠️ 复制失败';
      setTimeout(function() { btn.textContent = '复制代码'; }, 2000);
    });
  };

  function initFooterYear() {
    const year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function(el) {
      el.textContent = year;
    });
  }

  function init() {
    initTheme();
    initMobileNav();
    initScroll();
    initFooterYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
