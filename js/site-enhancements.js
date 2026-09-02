document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll("section, .card, article, .service-card, .crop-card, .info-card, .value-card");
  targets.forEach((el, i) => { el.classList.add("reveal-on-scroll"); el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`; });
  const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), {threshold: 0.08});
  document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
  document.querySelectorAll("a[href^='#']").forEach(a => a.addEventListener("click", e => { const id=a.getAttribute("href"); const t=id && document.querySelector(id); if(t){e.preventDefault(); t.scrollIntoView({behavior:"smooth"});} }));
});
