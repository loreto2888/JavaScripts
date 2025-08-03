# 📝 Desafío 5 - Todo List Manager

> **Métodos y Arreglos en JavaScript**  
> Aplicación web moderna para gestión de tareas pendientes

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.0-blue.svg)](https://fontawesome.com/)

## 🎯 Descripción del Proyecto

Aplicación web interactiva para gestión de tareas que permite agregar, editar, marcar como completadas y eliminar tareas. Desarrollada como parte del **Desafío 5** del bootcamp de **DesafíoLatam**, enfocándose en el uso de métodos y arreglos en JavaScript.

## ✨ Características Principales

### 📋 Requerimientos Cumplidos

| Req. | Funcionalidad | Estado | Descripción |
|------|---------------|--------|-------------|
| **1** | ✅ Agregar Tareas | Completado | Agregar tareas con descripción al llenar input y presionar botón |
| **2** | ✅ Borrar Tarea | Completado | Eliminar tareas con confirmación y animación |
| **3** | ✅ Contar Total | Completado | Contador dinámico del total de tareas |
| **4** | ✅ Marcar Completada | Completado | Checkbox interactivo para cambiar estado |
| **5** | ✅ Contar Realizadas | Completado | Contador de tareas completadas en tiempo real |
| **6** | ✅ Arreglo Inicial | Completado | 3 tareas de ejemplo precargadas |

### 🚀 Funcionalidades Extra

- **🎨 Diseño Moderno**: Interfaz con glassmorphism y gradientes
- **🔍 Sistema de Filtros**: Ver todas, pendientes o completadas
- **✏️ Edición Inline**: Editar tareas directamente en la lista
- **🔔 Notificaciones**: Sistema de toast notifications
- **📱 Responsive Design**: Adaptable a dispositivos móviles
- **🎭 Animaciones**: Transiciones suaves y efectos visuales
- **✅ Validaciones**: Control de longitud y campos vacíos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Lógica de la aplicación
- **Font Awesome 6**: Iconografía
- **CSS Animations**: Efectos visuales

## 📁 Estructura del Proyecto

```
desafio5_TodoList_JohannaBarrientos/
├── 📄 index.html          # Página principal
├── 📄 script.js           # Lógica JavaScript
├── 📄 README.md           # Documentación
└── 📁 assets/
    └── 📁 css/
        └── 📄 style.css   # Estilos CSS
```

## 🎨 Diseño Visual

### Paleta de Colores
- **Gradiente Principal**: `#667eea` → `#764ba2` (Púrpura-Azul)
- **Verde**: `#48bb78` (Éxito/Completado)
- **Azul**: `#4299e1` (Edición)
- **Naranja**: `#ed8936` (Pendiente)
- **Rojo**: `#f56565` (Eliminación)

### Efectos Visuales
- **Glassmorphism**: Efectos de cristal con `backdrop-filter`
- **Gradientes**: Botones y fondos dinámicos
- **Animaciones**: Hover effects y transiciones
- **Sombras**: Box-shadows suaves para profundidad

## 🚀 Cómo Usar

### 1. **Agregar Nueva Tarea**
   - Escribir en el campo de texto
   - Presionar "Agregar" o tecla Enter
   - Límite de 100 caracteres

### 2. **Marcar como Completada**
   - Hacer clic en el checkbox de la tarea
   - La tarea se tachará y cambiará de opacidad

### 3. **Editar Tarea**
   - Hacer clic en el ícono de edición (✏️)
   - Modificar el texto
   - Presionar Enter o el botón guardar

### 4. **Eliminar Tarea**
   - Hacer clic en el ícono de eliminación (🗑️)
   - Confirmar en el diálogo

### 5. **Filtrar Tareas**
   - **Todas**: Mostrar todas las tareas
   - **Pendientes**: Solo tareas sin completar
   - **Completadas**: Solo tareas finalizadas

## 💻 Instalación y Ejecución

### Opción 1: Navegador Local
```bash
# Clonar o descargar el proyecto
# Abrir index.html en cualquier navegador web
```

### Opción 2: Servidor Local
```bash
# Con Python (si está instalado)
python -m http.server 8000

# Con Node.js (si tienes npx)
npx serve .

# Abrir http://localhost:8000 en el navegador
```

## 📊 Métricas del Proyecto

- **Líneas de Código**: ~400+ líneas JavaScript
- **Funciones**: 15+ funciones principales
- **Métodos de Array**: `filter()`, `find()`, `findIndex()`, `splice()`, `push()`
- **Eventos DOM**: Click, keypress, DOMContentLoaded
- **Responsive**: Breakpoints para móviles y tablets

## 🎯 Conceptos JavaScript Aplicados

### Métodos de Arreglos
```javascript
// Filtrado
tareas.filter(t => t.realizada)
tareas.filter(t => !t.realizada)

// Búsqueda
tareas.find(t => t.id === id)
tareas.findIndex(t => t.id === id)

// Manipulación
tareas.push(nuevaTarea)
tareas.splice(index, 1)
```

### Manipulación del DOM
```javascript
// Creación de elementos
const taskCard = document.createElement("div")

// Event listeners
btnAgregar.addEventListener("click", agregarTarea)

// Query selectors
document.getElementById("nuevaTarea")
document.querySelectorAll(".filter-btn")
```

### Funciones Modernas
```javascript
// Arrow functions
const realizadas = tareas.filter(t => t.realizada).length

// Template literals
taskCard.innerHTML = `<div class="task-content">...</div>`

// Destructuring (aplicable)
const {id, descripcion, realizada} = tarea
```

## 🌟 Características Avanzadas

### Sistema de Notificaciones
```javascript
function mostrarNotificacion(mensaje, tipo = "info") {
  // Crear notificación toast
  // Animación de entrada
  // Auto-remover después de 4 segundos
}
```

### Filtros Dinámicos
```javascript
function setFilter(filter) {
  filtroActual = filter;
  // Actualizar botones activos
  // Re-renderizar vista filtrada
}
```

### Validaciones
- Longitud máxima de 100 caracteres
- Campos no vacíos
- Confirmación de eliminación

## 📱 Responsive Design

- **Desktop**: Diseño completo con todas las características
- **Tablet**: Grid adaptado y botones reorganizados
- **Móvil**: Layout vertical y controles optimizados

## 🎨 Capturas de Pantalla

### Vista Desktop
- Header con gradiente y título
- Cards de estadísticas coloridas
- Lista de tareas con acciones

### Vista Móvil
- Layout adaptativo
- Botones redimensionados
- Navegación optimizada

## 🔮 Futuras Mejoras

- [ ] Persistencia en LocalStorage
- [ ] Drag & Drop para reordenar
- [ ] Categorías de tareas
- [ ] Fechas de vencimiento
- [ ] Modo oscuro/claro
- [ ] Búsqueda de tareas
- [ ] Exportar/Importar datos

## 👨‍💻 Autor

**Johanna Barrientos**
- Estudiante de DesafíoLatam
- Bootcamp: Desarrollo Web Full Stack
- Proyecto: Desafío 5 - Métodos y Arreglos

## 📄 Licencia

Este proyecto es de uso educativo, desarrollado como parte del programa de DesafíoLatam.

---

⭐ **¡Gracias por revisar este proyecto!** ⭐

*Desarrollado con ❤️ y mucho ☕ durante el bootcamp de DesafíoLatam*
