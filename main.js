// Navbar scroll
const nav = document.getElementById('navbar');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));

// Burger
const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');
if (burger && navlinks) {
  burger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    document.body.style.overflow = navlinks.classList.contains('open') ? 'hidden' : '';
  });
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navlinks.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// Fade up
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// CTA tracking
document.querySelectorAll('a[href*="vercel.app"]').forEach(a => {
  a.addEventListener('click', () => {
    if (typeof fbq !== 'undefined') fbq('track', 'Lead');
    if (typeof gtag !== 'undefined') gtag('event', 'click_cta', { event_category: 'cta' });
  });
});
