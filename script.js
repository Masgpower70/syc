document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".animado");

  const activarAnimacion = () => {
    elementosAnimados.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const visible = window.innerHeight - 100;
      if (top < visible) {
        el.classList.add("visible");
      }
    });
  };

  activarAnimacion(); // Por si ya están visibles al cargar
  window.addEventListener("scroll", activarAnimacion);
});

function moverSlider(categoria, direccion) {
  const slider = document.getElementById("slider-" + categoria);
  const cantidad = 250 * direccion;
  slider.scrollBy({
    left: cantidad,
    behavior: 'smooth'
  });
}
