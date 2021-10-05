const options = {
  strings: ["Doge", "Shiba Inu", "Kabo-chan", "い	ぬ"],
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