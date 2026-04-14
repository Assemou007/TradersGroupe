// ETG Advanced PA Secured MT5 — Custom JS (Bootstrap 5.3 compatible)
// Handles ticker animation, FAQ toggle (non-Bootstrap accordion for custom styling)

(function() {
  'use strict';

  // ===== FAQ TOGGLE =====
  window.etgFaq = function(btn) {
    const item = btn.closest('.etg-faq-i');
    const isOpen = item.classList.contains('open');
    
    // Close all
    document.querySelectorAll('.etg-faq-i.open').forEach(el => {
      el.classList.remove('open');
    });
    
    // Toggle current if not open
    if (!isOpen) {
      item.classList.add('open');
    }
  };

  // ===== TICKER ANIMATION (CSS-driven, JS for pause/resume) =====
  function initTicker() {
    const track = document.getElementById('etg-track');
    const ticker = document.getElementById('etg-ticker');
    
    if (!track || !ticker) return;
    
    let animationPaused = false;
    
    ticker.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    
    ticker.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
    
    // Duplicate items for seamless loop (already in HTML, but ensure)
    if (track.children.length < 12) { // Assuming 6 unique x2
      console.warn('Ticker items may need duplication for seamless loop');
    }
  }

  // ===== INIT ON LOAD =====
  document.addEventListener('DOMContentLoaded', function() {
    initTicker();
    
    // Bootstrap tooltips/popovers if used (none currently)
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // tooltipTriggerList.map(function(tooltipTriggerEl) { return new bootstrap.Tooltip(tooltipTriggerEl); });
  });

  // ===== SMOOTH SCROLL (if needed for internal links) =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();

