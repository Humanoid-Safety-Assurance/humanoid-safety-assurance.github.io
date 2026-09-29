(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  if (!header || !toggle || !navigation) return;

  const mobileLayout = window.matchMedia("(max-width: 960px)");
  const setMenuOpen = (open) => {
    header.dataset.menuOpen = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  };

  header.dataset.navReady = "true";
  setMenuOpen(false);

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });

  header.addEventListener("focusout", (event) => {
    if (!header.contains(event.relatedTarget)) setMenuOpen(false);
  });

  mobileLayout.addEventListener("change", () => setMenuOpen(false));

  // Hash links still work without JavaScript; this only highlights the current section.
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const visibleSections = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });

    const current = sections.find((section) => visibleSections.has(section));
    sectionLinks.forEach((link) => {
      if (current && link.hash === `#${current.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
})();
