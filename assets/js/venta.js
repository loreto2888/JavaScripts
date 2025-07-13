// Script para la página de propiedades en venta
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el buscador
    inicializarBuscador();
    
    // Mostrar todas las propiedades en venta
    mostrarPropiedades(propiedades_venta, 'propiedades-venta');
    
    // Agregar contador de propiedades
    const totalPropiedades = propiedades_venta.length;
    const headerSection = document.querySelector('.page-header .lead');
    if (headerSection) {
        headerSection.textContent = `Encuentra la propiedad perfecta para comprar (${totalPropiedades} propiedades disponibles)`;
    }
    
    // Efecto de aparición gradual
    setTimeout(() => {
        const cards = document.querySelectorAll('.property-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 200);
});
