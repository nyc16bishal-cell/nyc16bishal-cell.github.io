/* ============================================
   portfolio.js — shared interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Active nav link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  /* ── Mobile nav toggle ── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // close when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── Scroll-reveal ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Skill bars ── */
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-fill').forEach(el => {
    el.style.animationPlayState = 'paused';
    barObserver.observe(el);
  });

  /* ── Contact form — Formspree async submission ── */
  const form = document.getElementById('contact-form');
  if (form) {
    const btn        = document.getElementById('submit-btn');
    const btnLabel   = document.getElementById('btn-label');
    const btnIcon    = document.getElementById('btn-icon');
    const btnSpinner = document.getElementById('btn-spinner');
    const successMsg = document.getElementById('form-success');
    const errorMsg   = document.getElementById('form-error');

    function setLoading(on) {
      btn.disabled    = on;
      btnLabel.textContent = on ? 'Sending…' : 'Send Message';
      btnIcon.style.display    = on ? 'none'  : '';
      btnSpinner.style.display = on ? ''      : 'none';
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      successMsg.style.display = 'none';
      errorMsg.style.display   = 'none';

      // Basic client-side validation
      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) return;

      setLoading(true);

      try {
        const res = await fetch(form.action, {
          method:  'POST',
          headers: { 'Accept': 'application/json' },
          body:    new FormData(form),
        });

        if (res.ok) {
          successMsg.style.display = 'block';
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          // Formspree returns { errors: [...] } on validation failure
          if (data.errors) {
            errorMsg.textContent = data.errors.map(err => err.message).join(', ');
          }
          errorMsg.style.display = 'block';
        }
      } catch (_) {
        errorMsg.style.display = 'block';
      } finally {
        setLoading(false);
      }
    });
  }

  /* ── Counter animation (hero stats) ── */
  function animateCount(el, target, suffix = '') {
    let start = 0;
    const duration = 1400;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        animateCount(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

});
