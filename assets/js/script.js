const options = {
  strings: ["Doge", "Shiba Inu", "Kabo-chan", "いぬ"],
  startDelay: 1000,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
};

const typed = new Typed(".typed", options);
new fullpage("#fullpage", {
  navigation: true,
  scrollingSpeed: 1000,
  navigationTooltips: ["Home"],
});

const themeDots = document.getElementsByClassName("theme-dot");
for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    const mode = this.dataset.mode;
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode === "dark-blue") {
    document.getElementById("theme-style").href = "assets/css/style.css"
  }
  if (mode === "dark-red") {
    document.getElementById("theme-style").href = "assets/css/theme/dark-red.css"
  }
  if (mode === "green") {
    document.getElementById("theme-style").href = "assets/css/theme/green.css"
  }
  if (mode === "soft-red") {
    document.getElementById("theme-style").href = "assets/css/theme/soft-red.css"
  }
  if (mode === "violet") {
    document.getElementById("theme-style").href = "assets/css/theme/violet.css"
  }
}