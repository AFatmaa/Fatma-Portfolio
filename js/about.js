document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("aboutCarousel");
  if (!carousel) return;

  const stage = carousel.closest(".about-stage");
  const cards = Array.from(carousel.querySelectorAll(".about-card"));
  let index = 0;
  let ticking = false;

  const syncIndex = () => {
    const top = carousel.scrollTop;
    let best = 0;
    let min = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetTop - top);
      if (d < min) {
        min = d;
        best = i;
      }
    });
    index = best;
  };

  const updateCue = () => {
    if (stage) stage.classList.toggle("at-end", index >= cards.length - 1);
  };

  const scrollTo = (i) => {
    const target = Math.max(0, Math.min(cards.length - 1, i));
    cards[target].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  carousel.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncIndex();
        updateCue();
        ticking = false;
      });
    },
    { passive: true }
  );

  carousel.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    syncIndex();
    scrollTo(index + 1);
  });

  window.addEventListener("keydown", (e) => {
    const step = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    syncIndex();
    scrollTo(index + step);
  });

  updateCue();
});
