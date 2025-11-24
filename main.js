document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos del DOM
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    // 2. Función para manejar el evento click del botón hamburguesa
    navbarToggle.addEventListener('click', () => {
        // Alternar la clase 'active' en el menú (para desplegar/ocultar con CSS)
        navbarMenu.classList.toggle('active');

        // Alternar la clase 'active' en el botón (para animar la hamburguesa a una 'X')
        navbarToggle.classList.toggle('active');
    });

    // 3. Cerrar el menú al hacer clic en un enlace (Mejora de UX en móvil)
    const navbarLinks = navbarMenu.querySelectorAll('.navbar-link');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica si el menú está abierto antes de intentar cerrarlo
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    });
});


  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

