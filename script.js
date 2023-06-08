window.addEventListener('DOMContentLoaded', function () {
    // Cambiar fondo dinámico
    var backgrounds = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg'];
    var currentIndex = 0;
  
    function changeBackground() {
      document.body.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
      currentIndex = (currentIndex + 1) % backgrounds.length;
    }
  
    setInterval(changeBackground, 5000);
  });
  