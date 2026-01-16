// DATOS (FÁCIL DE AMPLIAR)
const materias = {
  matematicas: {
    nombre: "Matemáticas",
    temas: ["Álgebra", "Funciones", "Geometría"]
  },
  fisica: {
    nombre: "Física",
    temas: ["Fuerzas", "Movimiento", "Electricidad"]
  }
};

// ELEMENTOS
const inicio = document.getElementById("inicio");
const materiasPantalla = document.getElementById("materias");
const temasPantalla = document.getElementById("temas");

const btnEmpezar = document.getElementById("btnEmpezar");
const btnVolver = document.getElementById("btnVolver");

const contenedorMaterias = document.getElementById("contenedorMaterias");
const contenedorTemas = document.getElementById("contenedorTemas");
const tituloMateria = document.getElementById("tituloMateria");

// FUNCIÓN GENERAL
function mostrarPantalla(pantalla) {
  inicio.classList.remove("activa");
  materiasPantalla.classList.remove("activa");
  temasPantalla.classList.remove("activa");

  pantalla.classList.add("activa");
}

// EVENTOS
btnEmpezar.addEventListener("click", () => {
  mostrarPantalla(materiasPantalla);
  cargarMaterias();
});

btnVolver.addEventListener("click", () => {
  mostrarPantalla(materiasPantalla);
});

// CARGAR MATERIAS
function cargarMaterias() {
  contenedorMaterias.innerHTML = "";

  for (let key in materias) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.textContent = materias[key].nombre;

    tarjeta.addEventListener("click", () => {
      cargarTemas(key);
    });

    contenedorMaterias.appendChild(tarjeta);
  }
}

// CARGAR TEMAS
function cargarTemas(claveMateria) {
  contenedorTemas.innerHTML = "";
  tituloMateria.textContent = materias[claveMateria].nombre;

  materias[claveMateria].temas.forEach(tema => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.textContent = tema;
    contenedorTemas.appendChild(tarjeta);
  });

  mostrarPantalla(temasPantalla);
}
