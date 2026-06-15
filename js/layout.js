async function loadPartial(id, url, onLoad) {
  const host = document.getElementById(id);
  if (!host) return;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.status}`);
    }
    host.innerHTML = await res.text();
    if (onLoad) onLoad();
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
  }
}

function highlightActiveLink() {
  const file = window.location.pathname.split("/").pop();
  const current = file === "" ? "index.html" : file;

  document.querySelectorAll(".menu-panel a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

function setupMenu() {
  const btn = document.querySelector(".menu-btn");
  const panel = document.querySelector(".menu-panel");
  if (!btn || !panel) return;

  const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    btn.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  };

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  panel.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("site-header", "partials/header.html", () => {
    setupMenu();
    highlightActiveLink();
  });
  loadPartial("site-footer", "partials/footer.html");
});
