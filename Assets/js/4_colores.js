// Cambiar color a negro al hacer click
['azul', 'rojo', 'verde', 'amarillo'].forEach(id => {
  document.getElementById(id).addEventListener('click', function() {
    this.style.backgroundColor = 'black';
  });
});

// Variable global para el color
let color = '';

const keyDiv = document.getElementById('key');

document.addEventListener('keydown', function(event) {
  if (event.key === 'a') {
    color = 'pink';
    keyDiv.style.backgroundColor = color;
  } else if (event.key === 's') {
    color = 'orange';
    keyDiv.style.backgroundColor = color;
  } else if (event.key === 'd') {
    color = 'skyblue';
    keyDiv.style.backgroundColor = color;
  } else if (event.key === 'q') {
    crearDivColor('purple');
  } else if (event.key === 'w') {
    crearDivColor('gray');
  } else if (event.key === 'e') {
    crearDivColor('brown');
  }
});

function crearDivColor(color) {
  const nuevoDiv = document.createElement('div');
  nuevoDiv.className = 'key-div';
  nuevoDiv.style.backgroundColor = color;
  document.body.appendChild(nuevoDiv);
}