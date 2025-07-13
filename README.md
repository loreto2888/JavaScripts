# 🏠 Inmobiliaria Santiago & Viña

Una moderna aplicación web de inmobiliaria que muestra propiedades en venta y alquiler en Santiago y Viña del Mar, Chile. Incluye sistema de búsqueda avanzado y renderizado dinámico de propiedades.

## 📋 Características

- **Diseño Responsive**: Compatible con dispositivos móviles y desktop
- **Navegación Intuitiva**: Menú de navegación claro entre las diferentes secciones
- **Propiedades Dinámicas**: Renderizado dinámico usando JavaScript y DOM
- **Sistema de Búsqueda**: Filtrado por región y tipo de propiedad en tiempo real
- **Filtros Visuales**: Indicadores claros para políticas de mascotas y fumar
- **Interfaz Moderna**: Diseño atractivo con Bootstrap 5 y CSS personalizado
- **Imágenes Locales**: Galería de imágenes de propiedades almacenadas localmente

## 🏗️ Estructura del Proyecto

```
inmobiliaria/
├── index.html                 # Página principal
├── propiedades_venta.html     # Página de propiedades en venta
├── propiedades_alquiler.html  # Página de propiedades en alquiler
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos personalizados
│   └── js/
│       ├── propiedades.js    # Datos y funciones principales
│       ├── index.js          # Script para página principal
│       ├── venta.js          # Script para página de ventas
│       └── alquiler.js       # Script para página de alquileres
├── img/
│   ├── venta 1.png           # Imágenes de propiedades en venta
│   ├── venta 2.png           # (6 imágenes total)
│   ├── alquiler 1.png        # Imágenes de propiedades en alquiler
│   └── alquiler 2.png        # (6 imágenes total)
└── README.md
```

## 📊 Datos de las Propiedades

### Propiedades en Venta (6 propiedades)
- Departamento Premium Las Condes - $280.000 (Las Condes, Santiago)
- Casa Familiar Providencia - $420.000 (Providencia, Santiago)
- Penthouse Viña del Mar - $650.000 (Reñaca, Viña del Mar)
- Departamento Moderno Ñuñoa - $180.000 (Ñuñoa, Santiago)
- Casa con Piscina Vitacura - $590.000 (Vitacura, Santiago)
- Loft Industrial Santiago Centro - $120.000 (Santiago Centro, Santiago)

### Propiedades en Alquiler (6 propiedades)
- Departamento Ejecutivo Las Condes - $1.200/mes (Las Condes, Santiago)
- Casa Familiar La Reina - $850/mes (La Reina, Santiago)
- Departamento Vista al Mar Viña del Mar - $950/mes (Recreo, Viña del Mar)
- Studio Céntrico Valparaíso - $450/mes (Cerro Alegre, Valparaíso)
- Departamento Amoblado Providencia - $750/mes (Providencia, Santiago)
- Casa con Jardín Maipú - $650/mes (Maipú, Santiago)

## 🚀 Cómo usar

1. **Abrir el proyecto**: Abre `index.html` en tu navegador web o usa Live Server
2. **Navegar**: Usa el menú de navegación para moverte entre las páginas
3. **Explorar propiedades**: En la página principal verás 3 propiedades de cada tipo
4. **Usar el buscador**: 
   - Selecciona una región (Santiago, Viña del Mar, Valparaíso o todas)
   - Selecciona el tipo (Venta, Alquiler o todos)
   - Haz clic en el botón de búsqueda 🔍
5. **Ver detalles**: Cada propiedad muestra ubicación, precio, habitaciones, baños y políticas

## 🔍 Sistema de Búsqueda

### Filtros Disponibles
- **Por Región**: 
  - Todas las regiones
  - Santiago (incluye Las Condes, Providencia, Ñuñoa, etc.)
  - Viña del Mar (incluye Reñaca, Recreo)
  - Valparaíso (incluye Cerro Alegre)
- **Por Tipo**: 
  - Todos
  - Venta
  - Alquiler

### Funcionamiento
- **Búsqueda en tiempo real**: Los resultados se actualizan al hacer clic en buscar
- **Filtrado inteligente**: Busca en toda la base de datos de propiedades
- **Persistente**: Funciona en todas las páginas del sitio

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript ES6**: Manipulación del DOM y renderizado dinámico
- **Bootstrap 5**: Framework CSS para diseño responsive
- **Font Awesome**: Iconos vectoriales

## 🎨 Características del Diseño

- **Gradientes modernos**: Uso de gradientes CSS para elementos visuales
- **Animaciones suaves**: Transiciones y efectos hover
- **Cards atractivas**: Diseño de tarjetas con sombras y efectos
- **Indicadores visuales**: Iconos claros para políticas de mascotas y fumar
- **Tipografía moderna**: Uso de Segoe UI para mejor legibilidad

## ✅ Cumplimiento de Requerimientos

1. ✅ **Páginas creadas**: index.html, propiedades_venta.html, propiedades_alquiler.html
2. ✅ **Arreglos de propiedades**: 6 propiedades en venta y 6 en alquiler
3. ✅ **Renderizado dinámico**: Uso de ciclos e innerHTML para generar contenido
4. ✅ **Condicionales**: Lógica para mostrar políticas de mascotas y fumar
5. ✅ **Límite en index**: Solo 3 propiedades de cada tipo en la página principal

## 🌟 Funcionalidades Adicionales

- **Formateo de precios**: Precios formateados sin decimales innecesarios
- **Imágenes locales**: 12 imágenes PNG almacenadas en carpeta `img/`
- **Buscador avanzado**: Sistema de filtrado por región y tipo
- **Efectos de animación**: Aparición gradual de las tarjetas
- **Navegación suave**: Experiencia de usuario fluida
- **Contador de propiedades**: Muestra el número total disponible
- **Políticas visuales**: Indicadores claros para mascotas y fumar con colores
- **Responsive completo**: Adaptación automática a cualquier dispositivo

## 🔧 Instalación

### Opción 1: Servidor Local (Recomendado)
1. Descargar o clonar el proyecto
2. Abrir con VS Code
3. Instalar extensión "Live Server"
4. Clic derecho en `index.html` → "Open with Live Server"
5. Navegar a `http://127.0.0.1:5500/index.html`

### Opción 2: Navegador Directo
1. Descargar el proyecto
2. Abrir `index.html` directamente en cualquier navegador moderno
3. ¡Listo para usar!

**Nota**: Se recomienda usar servidor local para evitar problemas con CORS al cargar imágenes.

## 📱 Responsive Design

El sitio web es completamente responsive y se adapta a:
- 📱 Dispositivos móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

---

**Desarrollado para Desafío Latam 2025** 🚀

## 📚 Funciones JavaScript Principales

### `propiedades.js`
- `formatearPrecio(precio)`: Formatea precios sin decimales
- `generarHTMLPropiedad(propiedad)`: Genera HTML dinámico para tarjetas
- `mostrarPropiedades(propiedades, containerId, limite)`: Renderiza propiedades
- `obtenerRegiones()`: Extrae regiones únicas de las propiedades
- `filtrarPropiedades(region, tipo)`: Filtra por criterios de búsqueda
- `realizarBusqueda()`: Ejecuta búsqueda y actualiza resultados
- `inicializarBuscador()`: Carga opciones de región en el select

### Datos Estructurados
- `propiedades_venta[]`: Array con 6 propiedades en venta
- `propiedades_alquiler[]`: Array con 6 propiedades en alquiler

## 🎯 Tecnologías y Conceptos Aplicados

- **JavaScript ES6**: Template literals, arrow functions, destructuring
- **DOM Manipulation**: innerHTML, getElementById, querySelector
- **Array Methods**: map(), filter(), forEach(), slice()
- **Conditional Logic**: Ternary operators para políticas
- **Event Handling**: onClick events para búsqueda
- **CSS Grid/Flexbox**: Layout responsive con Bootstrap
- **Local Storage**: Manejo de imágenes locales

## 🏆 Cumplimiento de Objetivos del Desafío

✅ **Páginas HTML**: 3 páginas completamente funcionales  
✅ **Arrays de Datos**: 12 propiedades organizadas en 2 arrays  
✅ **Renderizado Dinámico**: Uso de ciclos e innerHTML  
✅ **Condicionales**: Lógica para políticas de mascotas/fumar  
✅ **Límite de Propiedades**: 3 propiedades máximo en página principal  
✅ **Navegación Funcional**: Enlaces entre páginas operativos  
✅ **Diseño Responsivo**: Compatible con todos los dispositivos  

## 🚀 Extras Implementados

🌟 **Sistema de Búsqueda Avanzado**  
🌟 **Imágenes Locales Integradas**  
🌟 **Formateo de Precios Chilenos**  
🌟 **Animaciones CSS Personalizadas**  
🌟 **Bootstrap 5 + Font Awesome**  
🌟 **Código Modular y Organizado**  

---

### 📞 Soporte

Para dudas o consultas sobre este proyecto:
- Revisar la documentación en este README
- Verificar la consola del navegador para errores
- Asegurar que Live Server esté ejecutándose correctamente
- Comprobar que todas las imágenes estén en la carpeta `img/`
