const startBtn = document.getElementById("startBtn");
const home = document.getElementById("home");
const categories = document.getElementById("categories");
const tema = document.getElementById("tema");
const temaTitulo = document.getElementById("tema-titulo");

// ---- FUNCIÓN GENERAL PARA CAMBIAR DE PANTALLA ----
function mostrarPantalla(pantalla) {
  document.querySelectorAll(".screen").forEach(sec => {
    sec.classList.remove("active");
  });

  setTimeout(() => {
    pantalla.classList.add("active");
  }, 50);
}

// ---- BOTÓN COMENZAR ----
startBtn.addEventListener("click", () => {
  mostrarPantalla(categories);
});

// ---- ACCORDION DE CATEGORÍAS ----
const titles = document.querySelectorAll(".category-title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const topics = title.nextElementSibling;

    if (topics.style.maxHeight) {
      topics.style.maxHeight = null;
    } else {
      topics.style.maxHeight = topics.scrollHeight + "px";
    }
  });
});

// ---- IR A TEMA ----
function irATema(nombreTema) {
  temaTitulo.textContent = nombreTema;
  mostrarPantalla(tema);
}

// ---- VOLVER A CATEGORÍAS ----
function volverACategorias() {
  mostrarPantalla(categories);
}
