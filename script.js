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
