// Arreglo de propiedades en venta
const propiedades_venta = [
    {
        nombre: 'Departamento Premium Las Condes',
        src: 'img/venta 1.png',
        descripcion: 'Espectacular departamento en el corazón de Las Condes con vista panorámica a la cordillera y acabados de lujo.',
        ubicacion: 'Las Condes, Santiago',
        habitaciones: 3,
        baños: 2,
        costo: 280000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Familiar Providencia',
        src: 'img/venta 2.png',
        descripcion: 'Hermosa casa de dos pisos en Providencia, perfecta para familias, con jardín privado y estacionamiento.',
        ubicacion: 'Providencia, Santiago',
        habitaciones: 4,
        baños: 3,
        costo: 420000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse Viña del Mar',
        src: 'img/venta 3.png',
        descripcion: 'Exclusivo penthouse frente al mar en Viña del Mar con terraza privada y acceso directo a la playa.',
        ubicacion: 'Reñaca, Viña del Mar',
        habitaciones: 5,
        baños: 4,
        costo: 650000000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento Moderno Ñuñoa',
        src: 'img/venta 4.png',
        descripcion: 'Departamento de diseño contemporáneo en Ñuñoa, cerca del metro y centros comerciales.',
        ubicacion: 'Ñuñoa, Santiago',
        habitaciones: 2,
        baños: 2,
        costo: 180000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa con Piscina Vitacura',
        src: 'img/venta 5.png',
        descripcion: 'Elegante casa en Vitacura con piscina, quincho y amplios espacios verdes ideales para el entretenimiento.',
        ubicacion: 'Vitacura, Santiago',
        habitaciones: 4,
        baños: 3,
        costo: 590000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Loft Industrial Santiago Centro',
        src: 'img/venta 6.png',
        descripcion: 'Moderno loft de estilo industrial en el centro de Santiago, perfecto para profesionales jóvenes.',
        ubicacion: 'Santiago Centro, Santiago',
        habitaciones: 1,
        baños: 1,
        costo: 120000000,
        smoke: false,
        pets: false
    }
];

// Arreglo de propiedades en alquiler
const propiedades_alquiler = [
    {
        nombre: 'Departamento Ejecutivo Las Condes',
        src: 'img/alquiler 1.png',
        descripcion: 'Moderno departamento amoblado en Las Condes, ideal para ejecutivos, con gimnasio y piscina en el edificio.',
        ubicacion: 'Las Condes, Santiago',
        habitaciones: 2,
        baños: 2,
        costo: 1200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Familiar ConCon',
        src: 'img/alquiler 2.png',
        descripcion: 'Acogedora casa en La Reina con jardín, perfecta para familias que buscan tranquilidad cerca de la ciudad.',
        ubicacion: 'ConCon, Viña del Mar',
        habitaciones: 3,
        baños: 2,
        costo: 850000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento Vista al Mar Viña del Mar',
        src: 'img/alquiler 3.png',
        descripcion: 'Espectacular departamento con vista panorámica al océano Pacífico en el sector de Recreo.',
        ubicacion: 'Recreo, Viña del Mar',
        habitaciones: 2,
        baños: 1,
        costo: 950000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Studio Céntrico Valparaíso',
        src: 'img/alquiler 4.png',
        descripcion: 'Acogedor studio en el corazón histórico de Valparaíso, cerca de los ascensores y la vida bohemia del puerto.',
        ubicacion: 'Cerro Alegre, Valparaíso',
        habitaciones: 1,
        baños: 1,
        costo: 450000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Departamento Amoblado Providencia',
        src: 'img/alquiler 5.png',
        descripcion: 'Departamento completamente amoblado en Providencia con terraza y vista a la ciudad, listo para habitar.',
        ubicacion: 'Providencia, Santiago',
        habitaciones: 2,
        baños: 1,
        costo: 750000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa con Jardín Maipú',
        src: 'img/alquiler 6.png',
        descripcion: 'Amplia casa con jardín en Maipú, excelente conectividad y cerca de colegios, ideal para familias.',
        ubicacion: 'Maipú, Santiago',
        habitaciones: 3,
        baños: 2,
        costo: 650000,
        smoke: true,
        pets: true
    }
];

// Función para formatear precio en pesos chilenos
function formatearPrecio(precio) {
    // Formatear número con separadores de miles y sin decimales
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(precio);
}

// Función para generar HTML de una propiedad
function generarHTMLPropiedad(propiedad) {
    // Determinar políticas de mascotas y fumar
    const politicaMascotas = propiedad.pets ? 
        '<span class="policy-item policy-allowed"><i class="fas fa-paw"></i> Mascotas permitidas</span>' :
        '<span class="policy-item policy-not-allowed"><i class="fas fa-ban"></i> No se permiten mascotas</span>';
    
    const politicaFumar = propiedad.smoke ? 
        '<span class="policy-item policy-allowed"><i class="fas fa-smoking"></i> Se permite fumar</span>' :
        '<span class="policy-item policy-not-allowed"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>';

    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card property-card fade-in-up">
                <div class="property-image">
                    <img src="${propiedad.src}" alt="${propiedad.nombre}" class="property-img" loading="lazy">
                    <div class="price-badge">${formatearPrecio(propiedad.costo)}</div>
                </div>
                <div class="property-content">
                    <h5 class="property-title">${propiedad.nombre}</h5>
                    <p class="property-description">${propiedad.descripcion}</p>
                    <p class="property-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${propiedad.ubicacion}
                    </p>
                    
                    <div class="property-features">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-bed"></i>
                            </div>
                            <div class="feature-text">${propiedad.habitaciones} Habitaciones</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-bath"></i>
                            </div>
                            <div class="feature-text">${propiedad.baños} Baños</div>
                        </div>
                    </div>
                    
                    <div class="property-policies">
                        ${politicaMascotas}
                        ${politicaFumar}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para mostrar propiedades
function mostrarPropiedades(propiedades, containerId, limite = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container con ID '${containerId}' no encontrado`);
        return;
    }

    const propiedadesAMostrar = limite ? propiedades.slice(0, limite) : propiedades;
    
    console.log(`Mostrando ${propiedadesAMostrar.length} propiedades en ${containerId}`);
    console.log('Propiedades:', propiedadesAMostrar);
    
    container.innerHTML = propiedadesAMostrar.map(propiedad => 
        generarHTMLPropiedad(propiedad)
    ).join('');
}

// Función para obtener todas las regiones únicas
function obtenerRegiones() {
    const todasPropiedades = [...propiedades_venta, ...propiedades_alquiler];
    const regiones = [...new Set(todasPropiedades.map(prop => {
        // Extraer la región de la ubicación (todo después de la coma)
        return prop.ubicacion.split(', ')[1] || prop.ubicacion;
    }))];
    return regiones.sort();
}

// Función para filtrar propiedades por región y tipo
function filtrarPropiedades(region, tipo) {
    let propiedadesFiltradas = [];
    
    if (tipo === 'venta') {
        propiedadesFiltradas = propiedades_venta;
    } else if (tipo === 'alquiler') {
        propiedadesFiltradas = propiedades_alquiler;
    } else {
        propiedadesFiltradas = [...propiedades_venta, ...propiedades_alquiler];
    }
    
    if (region && region !== 'todas') {
        propiedadesFiltradas = propiedadesFiltradas.filter(prop => 
            prop.ubicacion.toLowerCase().includes(region.toLowerCase())
        );
    }
    
    return propiedadesFiltradas;
}

// Función para realizar búsqueda
function realizarBusqueda() {
    const region = document.getElementById('region-select').value;
    const tipo = document.getElementById('tipo-select').value;
    
    const propiedadesFiltradas = filtrarPropiedades(region, tipo);
    
    // Determinar en qué página estamos y mostrar resultados apropiados
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('propiedades_venta.html')) {
        const ventaFiltradas = propiedadesFiltradas.filter(prop => 
            propiedades_venta.includes(prop)
        );
        mostrarPropiedades(ventaFiltradas, 'propiedades-venta');
    } else if (currentPage.includes('propiedades_alquiler.html')) {
        const alquilerFiltradas = propiedadesFiltradas.filter(prop => 
            propiedades_alquiler.includes(prop)
        );
        mostrarPropiedades(alquilerFiltradas, 'propiedades-alquiler');
    } else {
        // Página principal - mostrar hasta 3 de cada tipo
        const ventaFiltradas = propiedadesFiltradas.filter(prop => 
            propiedades_venta.includes(prop)
        );
        const alquilerFiltradas = propiedadesFiltradas.filter(prop => 
            propiedades_alquiler.includes(prop)
        );
        
        if (document.getElementById('propiedades-venta')) {
            mostrarPropiedades(ventaFiltradas, 'propiedades-venta', 3);
        }
        if (document.getElementById('propiedades-alquiler')) {
            mostrarPropiedades(alquilerFiltradas, 'propiedades-alquiler', 3);
        }
    }
}

// Función para inicializar el buscador
function inicializarBuscador() {
    const regionSelect = document.getElementById('region-select');
    if (regionSelect) {
        const regiones = obtenerRegiones();
        regiones.forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            regionSelect.appendChild(option);
        });
    }
}
