// Pequeño efecto: resaltar el enlace de navegación según la sección visible
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a[href^='#']");

function onScroll() {
  const pos = window.scrollY + 120;
  let current = "";
  sections.forEach((sec) => {
    if (pos >= sec.offsetTop) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
}

window.addEventListener("scroll", onScroll);
onScroll();