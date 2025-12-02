const imagenesZoom = document.querySelectorAll(".zoom");

imagenesZoom.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("activa");
  });
});
