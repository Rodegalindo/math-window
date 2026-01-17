const startBtn = document.getElementById("startBtn");
const areas = document.getElementById("areas");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  areas.classList.remove("hidden");
});
