 // Script para agregar la clase 'highlight' a la sección cuando se hace clic en el botón
 document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            const sectionId = this.getAttribute('href');
            document.querySelector('.highlight')?.classList.remove('highlight');

            // Add 'highlight' class to the clicked section
            document.querySelector(sectionId).classList.add('highlight');
            
            // Scroll to the section
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
