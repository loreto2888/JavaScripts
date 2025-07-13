// Script para la página principal
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el buscador
    inicializarBuscador();
    
    // Mostrar solo 3 propiedades en venta y 3 en alquiler en la página principal
    mostrarPropiedades(propiedades_venta, 'propiedades-venta', 3);
    mostrarPropiedades(propiedades_alquiler, 'propiedades-alquiler', 3);
    
    // Agregar efecto de animación gradual a las tarjetas
    setTimeout(() => {
        const cards = document.querySelectorAll('.property-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }, 100);
});

// Smooth scroll para el botón "Ver Propiedades"
document.addEventListener('DOMContentLoaded', function() {
    const verPropiedadesBtn = document.querySelector('a[href="#propiedades"]');
    if (verPropiedadesBtn) {
        verPropiedadesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('propiedades').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
