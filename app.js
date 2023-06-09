    // Capturar los botones de navegación
    const navButtons = document.querySelectorAll('.nav-bullet');

// Añadir un evento de clic a cada botón
navButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Obtener el ID de la sección objetivo desde el atributo "data-target"
      const targetSectionId = button.getAttribute('data-target');
  
      // Obtener la sección objetivo utilizando el ID
      const targetSection = document.getElementById(targetSectionId);
  
      // Desplazarse suavemente a la sección objetivo
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
      // Remover la clase "current" de todos los botones
      navButtons.forEach(btn => {
        btn.classList.remove('current');
        btn.style.backgroundColor = '#ccf381';
        btn.style.border = "2px solid #ccf381";
      });
  
      // Agregar la clase "current" al botón seleccionado
      button.classList.add('current');
      button.style.backgroundColor = 'transparent';
  
      // Cambiar el color de los botones en la sección 2 a morado y fondo transparente
      if (targetSectionId === 'section2') {
        navButtons.forEach(btn => {
          btn.style.backgroundColor = '#8B5CF6';
          btn.style.border = "2px solid #8B5CF6";
        });
        button.style.backgroundColor = 'transparent';
        button.style.border = "2px solid #8B5CF6";
      }
    });
  });
  
  

    // Desplazamiento con teclado
    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        const currentSection = document.querySelector('.current');
        const currentIndex = Array.from(navButtons).indexOf(currentSection);

        if (event.key === 'ArrowUp' && currentIndex > 0) {
          navButtons[currentIndex - 1].click();
        } else if (event.key === 'ArrowDown' && currentIndex < navButtons.length - 1) {
          navButtons[currentIndex + 1].click();
        }
      }
    });

    // Desplazamiento con rueda del ratón
    document.addEventListener('wheel', event => {
      event.preventDefault();
      const delta = event.deltaY;
      const currentSection = document.querySelector('.current');
      const currentIndex = Array.from(navButtons).indexOf(currentSection);

      if (delta < 0 && currentIndex > 0) {
        navButtons[currentIndex - 1].click();
      } else if (delta > 0 && currentIndex < navButtons.length - 1) {
        navButtons[currentIndex + 1].click();
      }
    });
