// CrackStreams/script.js

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Header shadow on scroll
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,.25)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  // Active navigation link
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (window.scrollY >= top &&
          window.scrollY < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      const href = link.getAttribute("href");

      if (href === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Fade-in animation
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.15
  });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all .6s ease";
    observer.observe(card);
  });

});
