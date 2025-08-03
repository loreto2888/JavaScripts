/*
===============================================================================
                          DESAFÍO 5 - TODO LIST
                      MÉTODOS Y ARREGLOS EN JAVASCRIPT
===============================================================================

REQUERIMIENTOS IMPLEMENTADOS:

1. ✅ AGREGAR TAREAS: Con descripción al llenar input y presionar botón agregar
   📍 Función: agregarTarea() - Línea ~125

2. ✅ BORRAR TAREA: Al hacer click en botón que acompaña a la tarea
   📍 Función: borrarTarea(id) - Línea ~160

3. ✅ CONTAR TOTAL DE TAREAS: Mantener actualizada cuenta cuando se agrega/borra
   📍 Función: actualizarContadores() - Línea ~105

4. ✅ MARCAR COMO COMPLETADA: Al hacer click en botón "cambiar" 
   📍 Función: marcarRealizada(id) - Línea ~190

5. ✅ CONTAR TAREAS REALIZADAS: Contador actualizado
   📍 Función: actualizarContadores() - Línea ~105

6. ✅ ARREGLO INICIAL: Al menos 3 tareas iniciales
   📍 Array: tareas - Línea ~15

FUNCIONALIDADES EXTRA AGREGADAS:
- Sistema de filtros (Todas/Pendientes/Completadas)
- Notificaciones toast
- Edición inline de tareas
- Animaciones y efectos visuales
- Validaciones de entrada
- Diseño responsivo
- Checkbox personalizado
===============================================================================
*/

// REQUERIMIENTO 6: Array inicial de tareas con al menos 3 elementos
const tareas = [
  {
    id: 1,
    descripcion: "Realizar el desafío 5 de DesafíoLatam",
    realizada: true,
  },
  { id: 2, descripcion: "Estudiar para la prueba", realizada: false },
  { id: 3, descripcion: "Sacar a pasear a Tobby", realizada: false },
];

// Variable para generar IDs consecutivos
let contadorId = 4;
let filtroActual = "all";

// Referencias a elementos del DOM
const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const tareasRealizadas = document.getElementById("tareasRealizadas");
const tareasPendientes = document.getElementById("tareasPendientes");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");

// Función principal para renderizar las tareas
function renderTareas() {
  // Limpiar contenedor
  listaTareas.innerHTML = "";

  // Filtrar tareas según el filtro actual
  let tareasFiltradas = tareas;
  if (filtroActual === "pending") {
    tareasFiltradas = tareas.filter((t) => !t.realizada);
  } else if (filtroActual === "completed") {
    tareasFiltradas = tareas.filter((t) => t.realizada);
  }

  // Mostrar estado vacío si no hay tareas
  if (tareasFiltradas.length === 0) {
    emptyState.style.display = "block";
    listaTareas.style.display = "none";
  } else {
    emptyState.style.display = "none";
    listaTareas.style.display = "block";

    // Renderizar cada tarea filtrada
    tareasFiltradas.forEach((tarea) => {
      const taskCard = createTaskCard(tarea);
      listaTareas.appendChild(taskCard);
    });
  }

  // Actualizar contadores
  actualizarContadores();
}

// Función para crear una tarjeta de tarea
function createTaskCard(tarea) {
  const taskCard = document.createElement("div");
  taskCard.className = `task-card ${tarea.realizada ? "completed" : ""}`;
  taskCard.dataset.id = tarea.id;

  taskCard.innerHTML = `
    <div class="task-content">
      <div class="task-checkbox">
        <input type="checkbox" id="check-${tarea.id}" ${
    tarea.realizada ? "checked" : ""
  } 
               onchange="marcarRealizada(${tarea.id})">
        <label for="check-${tarea.id}" class="checkbox-custom"></label>
      </div>
      
      <div class="task-details">
        <div class="task-id">ID: ${tarea.id.toString().padStart(2, "0")}</div>
        <div class="task-text">
          <span class="task-description" id="texto-${tarea.id}">${
    tarea.descripcion
  }</span>
          <input type="text" class="task-edit-input" id="input-${tarea.id}" 
                 value="${tarea.descripcion}" style="display: none;"
                 onkeypress="if(event.key==='Enter') guardarTarea(${tarea.id})"
                 onkeydown="if(event.key==='Escape') cancelarEdicion(${
                   tarea.id
                 })"
                 maxlength="100">
        </div>
      </div>
      
      <div class="task-actions">
        <button class="action-btn edit-btn" id="btn-editar-${tarea.id}" 
                onclick="editarTarea(${tarea.id})" title="Editar tarea">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn save-btn" id="btn-guardar-${tarea.id}" 
                onclick="guardarTarea(${
                  tarea.id
                })" style="display: none;" title="Guardar cambios">
          <i class="fas fa-save"></i>
        </button>
        <button class="action-btn cancel-btn" id="btn-cancelar-${tarea.id}" 
                onclick="cancelarEdicion(${
                  tarea.id
                })" style="display: none;" title="Cancelar edición">
          <i class="fas fa-times"></i>
        </button>
        <button class="action-btn delete-btn" onclick="borrarTarea(${
          tarea.id
        })" title="Eliminar tarea">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `;

  return taskCard;
}

// REQUERIMIENTO 3 y 5: Función para actualizar contadores (total y realizadas)
function actualizarContadores() {
  const total = tareas.length;
  const realizadas = tareas.filter((t) => t.realizada).length;
  const pendientes = tareas.filter((t) => !t.realizada).length;

  totalTareas.textContent = total;
  tareasRealizadas.textContent = realizadas;
  tareasPendientes.textContent = pendientes;

  // Animación de contadores
  animateCounter(totalTareas);
  animateCounter(tareasRealizadas);
  animateCounter(tareasPendientes);
}

// Función para animar contadores
function animateCounter(element) {
  element.style.transform = "scale(1.2)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 200);
}

// REQUERIMIENTO 1: Función para agregar nueva tarea
function agregarTarea() {
  const descripcion = inputTarea.value.trim();

  if (descripcion !== "") {
    if (descripcion.length > 100) {
      mostrarNotificacion(
        "La descripción no puede tener más de 100 caracteres",
        "error"
      );
      return;
    }

    // Crear nueva tarea
    const nuevaTarea = {
      id: contadorId,
      descripcion: descripcion,
      realizada: false,
    };

    // Agregar al arreglo
    tareas.push(nuevaTarea);
    contadorId++;

    // Limpiar input
    inputTarea.value = "";

    // Actualizar vista
    renderTareas();

    // Mostrar notificación
    mostrarNotificacion(
      `Tarea "${descripcion}" agregada exitosamente`,
      "success"
    );

    console.log("Tarea agregada:", descripcion);
  } else {
    mostrarNotificacion(
      "Por favor, ingresa una descripción para la tarea",
      "warning"
    );
    inputTarea.focus();
  }
}

// REQUERIMIENTO 2: Función para borrar tarea
function borrarTarea(id) {
  const index = tareas.findIndex((t) => t.id === id);
  if (index !== -1) {
    const tareaEliminada = tareas[index];

    // Mostrar confirmación con diseño personalizado
    if (
      confirm(
        `¿Estás seguro de que quieres eliminar la tarea "${tareaEliminada.descripcion}"?`
      )
    ) {
      // Agregar efecto de salida
      const taskCard = document.querySelector(`[data-id="${id}"]`);
      if (taskCard) {
        taskCard.style.animation = "slideOut 0.3s ease-in-out";
        setTimeout(() => {
          tareas.splice(index, 1);
          renderTareas();
          mostrarNotificacion(
            `Tarea "${tareaEliminada.descripcion}" eliminada`,
            "info"
          );
        }, 300);
      } else {
        tareas.splice(index, 1);
        renderTareas();
        mostrarNotificacion(
          `Tarea "${tareaEliminada.descripcion}" eliminada`,
          "info"
        );
      }

      console.log("Tarea eliminada:", tareaEliminada.descripcion);
    }
  }
}

// REQUERIMIENTO 4: Función para marcar tarea como realizada/pendiente
function marcarRealizada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    const estadoAnterior = tarea.realizada;
    tarea.realizada = !tarea.realizada;

    // Actualizar vista
    renderTareas();

    // Mostrar notificación
    const estado = tarea.realizada ? "completada" : "marcada como pendiente";
    const tipo = tarea.realizada ? "success" : "info";
    mostrarNotificacion(`Tarea "${tarea.descripcion}" ${estado}`, tipo);

    console.log(
      `Tarea ${tarea.descripcion} marcada como ${
        tarea.realizada ? "realizada" : "pendiente"
      }`
    );
  }
}

// Función para editar tarea
function editarTarea(id) {
  const textoSpan = document.getElementById(`texto-${id}`);
  const inputText = document.getElementById(`input-${id}`);
  const btnEditar = document.getElementById(`btn-editar-${id}`);
  const btnGuardar = document.getElementById(`btn-guardar-${id}`);
  const btnCancelar = document.getElementById(`btn-cancelar-${id}`);

  // Guardar valor original para cancelar
  inputText.dataset.originalValue = inputText.value;

  // Cambiar vista
  textoSpan.style.display = "none";
  inputText.style.display = "block";
  btnEditar.style.display = "none";
  btnGuardar.style.display = "inline-flex";
  btnCancelar.style.display = "inline-flex";

  // Enfocar y seleccionar texto
  inputText.focus();
  inputText.select();

  // Agregar clase de edición a la tarjeta
  const taskCard = document.querySelector(`[data-id="${id}"]`);
  taskCard.classList.add("editing");
}

// Función para guardar tarea editada
function guardarTarea(id) {
  const inputText = document.getElementById(`input-${id}`);
  const nuevoTexto = inputText.value.trim();

  if (nuevoTexto !== "") {
    if (nuevoTexto.length > 100) {
      mostrarNotificacion(
        "La descripción no puede tener más de 100 caracteres",
        "error"
      );
      inputText.focus();
      return;
    }

    // Actualizar tarea
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
      const textoAnterior = tarea.descripcion;
      tarea.descripcion = nuevoTexto;

      // Actualizar vista
      renderTareas();

      // Mostrar notificación solo si cambió el texto
      if (textoAnterior !== nuevoTexto) {
        mostrarNotificacion(`Tarea actualizada: "${nuevoTexto}"`, "success");
      }

      console.log(`Tarea actualizada: ${nuevoTexto}`);
    }
  } else {
    mostrarNotificacion(
      "La descripción de la tarea no puede estar vacía",
      "warning"
    );
    inputText.focus();
  }
}

// Función para cancelar edición
function cancelarEdicion(id) {
  const inputText = document.getElementById(`input-${id}`);

  // Restaurar valor original
  if (inputText.dataset.originalValue) {
    inputText.value = inputText.dataset.originalValue;
  }

  // Volver a renderizar
  renderTareas();
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = "info") {
  // Crear elemento de notificación
  const notification = document.createElement("div");
  notification.className = `notification ${tipo}`;
  notification.innerHTML = `
    <i class="fas ${getNotificationIcon(tipo)}"></i>
    <span>${mensaje}</span>
    <button class="notification-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;

  // Agregar al DOM
  document.body.appendChild(notification);

  // Animar entrada
  setTimeout(() => notification.classList.add("show"), 100);

  // Auto-remover después de 4 segundos
  setTimeout(() => {
    if (notification.parentElement) {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }
  }, 4000);
}

// Función auxiliar para iconos de notificación
function getNotificationIcon(tipo) {
  const icons = {
    success: "fa-check-circle",
    error: "fa-exclamation-circle",
    warning: "fa-exclamation-triangle",
    info: "fa-info-circle",
  };
  return icons[tipo] || icons.info;
}

// Función para filtrar tareas
function setFilter(filter) {
  filtroActual = filter;

  // Actualizar botones de filtro
  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    }
  });

  // Re-renderizar con nuevo filtro
  renderTareas();
}

// Event Listeners
btnAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

// Event listeners para filtros
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setFilter(btn.dataset.filter);
  });
});

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  renderTareas();

  // Enfocar input al cargar
  inputTarea.focus();

  console.log("Todo List Manager iniciado con", tareas.length, "tareas");
});
