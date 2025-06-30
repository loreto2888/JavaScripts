# JavaScripts
Modulo 3 javascript
NOTA: lOS DESAFIOS ANTERIORES ESTÁN EN CARPETA, LOS ACTUALES ESTAN EN LA ESTRUCTURA
# Desafío 2 - Condiciones

Este proyecto es una página web interactiva para practicar la manipulación del DOM, el uso de condicionales (`if`, `else if`, `else`) y operadores lógicos en JavaScript.

## Funcionalidades

### 1. Imagen con borde
- Haz clic en la imagen principal para alternar un borde rojo.

### 2. Stickers
- Hay 6 imágenes de stickers, cada una con un input debajo.
- Puedes ingresar cuántos stickers quieres de cada tipo (máximo 10 en total).
- Al presionar "Verificar":
  - Si la suma es menor o igual a 10, muestra:  
    `Llevas X stickers`
  - Si la suma es mayor a 10, aparece un banner:  
    `Llevas demasiados stickers` (por 2 segundos).

### 3. Verificación de password
- Hay tres selectores para ingresar un código de 3 dígitos.
- Al presionar "Ingresar":
  - Si el código es `911`, muestra: `password 1 correcto`
  - Si el código es `714`, muestra: `password 2 correcto`
  - En cualquier otro caso, muestra: `password incorrecto`

## Archivos principales

- `index.html` — Estructura de la página.
- `assets/Style/style.css` — Estilos y diseño.
- `script.js` — Lógica de interacción y validaciones.






# Desafío 1 - Calculando el total

Este proyecto es una tienda simple de venta de laptops hecha con HTML, CSS y JavaScript. Permite sumar o restar la cantidad de productos y calcula el total a pagar automáticamente.
## Visualiza la web

[Ver demo en GitHub Pages](https://loreto2888.github.io/JavaScripts/)

## Características

- Visualiza una laptop con su precio base.
- Suma o resta la cantidad de productos con botones.
- El total a pagar se actualiza automáticamente.
- Si intentas restar cuando la cantidad es 0, aparece un banner de advertencia debajo de la tarjeta.


## Estructura de archivos

```
/
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── img/
│       └── laptop.png
├── index.html
├── index.js
└── README.md
```

## Cómo usar

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador.
3. Usa los botones "+" y "-" para modificar la cantidad y ver el total actualizado.

## Créditos

Desarrollado por Jbarrientos para Desafío Latam.
