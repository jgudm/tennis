const head = document.getElementById("head");
const menu = document.getElementById("menu");

const setStuck = () => head.classList.toggle("is-stuck", window.scrollY > 40);
setStuck();
window.addEventListener("scroll", setStuck, { passive: true });

function setMenu(open) {
  head.classList.toggle("is-open", open);
  menu.setAttribute("aria-expanded", String(open));
  menu.textContent = open ? "Close" : "Menu";
}

menu.addEventListener("click", () => setMenu(!head.classList.contains("is-open")));

for (const link of document.querySelectorAll("#nav a")) {
  link.addEventListener("click", () => setMenu(false));
}

// Surfaces: one card is open at a time.
const surfaces = [...document.querySelectorAll(".surface")];

function openSurface(active) {
  for (const surface of surfaces) {
    const isActive = surface === active;
    surface.classList.toggle("is-open", isActive);
    surface.setAttribute("aria-pressed", String(isActive));
  }
}

for (const surface of surfaces) {
  surface.addEventListener("click", () => openSurface(surface));
  surface.addEventListener("focus", () => openSurface(surface));
  surface.addEventListener("mouseenter", () => openSurface(surface));
}
