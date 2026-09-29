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

  // Track section positions directly, including nested Dates and the page's end.
  const sections = [...navigation.querySelectorAll('a[href^="#"]')]
    .map((link) => ({ link, target: document.getElementById(link.hash.slice(1)) }))
    .filter(({ target }) => target);
  if (sections.length === 0) return;
  let followHash = true;

  const updateCurrentSection = () => {
    if (toggle.getAttribute("aria-expanded") === "true") return;
    const anchorOffset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    let current = null;
    sections.forEach((section) => {
      const bounds = section.target.getBoundingClientRect();
      if (bounds.top <= anchorOffset + 1 && bounds.bottom > anchorOffset + 1) current = section;
    });

    const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atEnd) current = sections[sections.length - 1];

    // Respect explicit links, including ones too near the footer to align at the top.
    const anchor = document.getElementById(location.hash.slice(1));
    const anchorTop = anchor?.getBoundingClientRect().top;
    if (followHash && anchor && (Math.abs(anchorTop - anchorOffset) <= 2
      || (atEnd && anchorTop >= anchorOffset && anchorTop < window.innerHeight))) {
      current = sections.find(({ target }) => target === anchor)
        || sections.find(({ target }) => target.contains(anchor))
        || current;
    }
    sections.forEach((section) => {
      if (section === current) section.link.setAttribute("aria-current", "location");
      else section.link.removeAttribute("aria-current");
    });
  };

  let framePending = false;
  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(() => {
      updateCurrentSection();
      framePending = false;
    });
  };
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  const followNavigation = () => { followHash = true; scheduleUpdate(); };
  const followScrolling = () => { followHash = false; scheduleUpdate(); };
  window.addEventListener("hashchange", followNavigation);
  document.addEventListener("click", (event) => {
    if (event.target.closest('a[href^="#"]')) followNavigation();
  });
  // Manual reading resumes position-based highlighting after a link was followed.
  window.addEventListener("wheel", followScrolling, { passive: true });
  window.addEventListener("touchmove", followScrolling, { passive: true });
  window.addEventListener("pointerdown", followScrolling, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) followScrolling();
  });
  window.addEventListener("load", scheduleUpdate);
  scheduleUpdate();
})();
