document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((joey) => {
    joey.classList.toggle("change");
  });
});

document.querySelectorAll(".wrapper").forEach((beeple) => {
  beeple.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((joey) => {
      joey.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

videos.forEach((noodle) => {
  noodle.addEventListener("mouseover", () => {
    noodle.play();
  });
  noodle.addEventListener("mouseout", () => {
    noodle.pause();
  });
});

const currentDate = document.querySelector(".current-date");
const date = new Date().getFullYear();
currentDate.textContent = date;

console.log(date);
