
// Interacciones sencillas del portafolio.
// La navegación utiliza anclas HTML y no almacena datos personales.

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      target.setAttribute('tabindex', '-1');
    }
  });
});
