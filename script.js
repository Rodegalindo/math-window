const boton = document.getElementById("btnToggle");
const descripcion = document.getElementById("descripcion");

boton.addEventListener("click", () => {
  descripcion.classList.toggle("oculto");

  if (descripcion.classList.contains("oculto")) {
    boton.textContent = "Mostrar descripción";
  } else {
    boton.textContent = "Ocultar descripción";
  }
});
