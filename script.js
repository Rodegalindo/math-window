// DATOS (ESCALABLES)
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

// REFERENCIAS
const inicio = document.getElementById("inicio");
const materiasPantalla = document.getElementById("materias");
const temasPantalla = document.getElementById("temas");

const btnEmpezar = document.getElementById("btnEmpezar");
const btnVolver = document.getElementById("btnVolver");

const contenedorMaterias = document.getElementById("contenedorMaterias");
const contenedorTemas = document.getElementById("contenedorTemas");
const tituloMateria = document.getElementById("tituloMateria");

// FUNCIONES
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

// CARGA DE MATERIAS
function cargarMaterias() {
  contenedorMaterias.innerHTML = "";

  for (let key in materias) {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.textContent = materias[key].nombre;

    div.addEventListener("click", () => {
      cargarTemas(key);
    });

    contenedorMaterias.appendChild(div);
  }
}

// CARGA DE TEMAS
function cargarTemas(claveMateria) {
  contenedorTemas.innerHTML = "";
  tituloMateria.textContent = materias[claveMateria].nombre;

  materias[claveMateria].temas.forEach(tema => {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.textContent = tema;
    contenedorTemas.appendChild(div);
  });

  mostrarPantalla(temasPantalla);
}
