// Animazione premium con effetto stagger

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${index * 0.15}s`;
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".card, .hero h1, .hero p").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

