const startBtn = document.getElementById("startBtn");
const themesSection = document.getElementById("themes");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    themesSection.style.display = "block";
});
