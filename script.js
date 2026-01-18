const startBtn = document.getElementById("startBtn");
const home = document.getElementById("home");
const categories = document.getElementById("categories");

startBtn.addEventListener("click", () => {
  home.classList.remove("active");

  setTimeout(() => {
    categories.classList.add("active");
  }, 400);
});

// Accordion
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
