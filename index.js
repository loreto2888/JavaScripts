const precioBase = 400000;
let cantidad = 0;

document.querySelector('.precio-inicial').innerHTML = precioBase;
document.querySelector('.cantidad').innerHTML = cantidad;

function actualizarTotal() {
    document.querySelector('.valor-total').innerHTML = precioBase * cantidad;
}

document.querySelector('.btn-sumar').onclick = function() {
    cantidad++;
    document.querySelector('.cantidad').innerHTML = cantidad;
    actualizarTotal();
};

document.querySelector('.btn-restar').onclick = function() {
    if (cantidad > 0) {
        cantidad--;
        document.querySelector('.cantidad').innerHTML = cantidad;
        actualizarTotal();
    } else {
        const banner = document.getElementById('mensaje-banner');
        banner.textContent = 'No se puede restar productos';
        banner.classList.add('mostrar');
        setTimeout(() => {
            banner.classList.remove('mostrar');
        }, 2000); // El mensaje desaparece después de 2 segundos
    }
};