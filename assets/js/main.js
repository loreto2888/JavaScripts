/*
=======================================================================
REQUERIMIENTOS DEL DESAFÍO:
1. ✅ Se obtienen los tipos de cambio desde mindicador.cl (1 punto)
2. ✅ Se calcula correctamente el cambio y se muestra en el DOM (3 puntos)
3. ✅ El select implementa más de un tipo de moneda, todos los cambios funcionan correctamente (3 puntos)
4. ✅ Se usa try catch para ejecutar el método fetch y capturar los posibles errores mostrando el error en el DOM (2 puntos)
5. ✅ Se implementa el gráfico pedido con Chart.js (1 punto)
=======================================================================
*/

// REQUERIMIENTO 1: API DE MINDICADOR.CL
const API_URL = 'https://mindicador.cl/api';

// Elementos DOM
const converterForm = document.getElementById('converterForm');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const swapButton = document.getElementById('swapCurrencies');
const convertButton = document.getElementById('convertBtn');
const resultContainer = document.getElementById('result');
const errorContainer = document.getElementById('error');
const loadingContainer = document.getElementById('loading');

// Elementos de resultado
const resultAmountFrom = document.getElementById('resultAmountFrom');
const resultCurrencyFrom = document.getElementById('resultCurrencyFrom');
const resultAmountTo = document.getElementById('resultAmountTo');
const resultCurrencyTo = document.getElementById('resultCurrencyTo');
const exchangeRateElement = document.getElementById('exchangeRate');
const lastUpdatedElement = document.getElementById('lastUpdated');
const errorMessageElement = document.getElementById('errorMessage');

// Variables para el gráfico
let currencyChart = null;
let currentCurrencyData = {};

// REQUERIMIENTO 3: SÍMBOLOS DE MONEDAS SOPORTADAS
const currencySymbols = {
    'CLP': '$',
    'dolar': 'USD $',
    'euro': '€',
    'uf': 'UF',
    'utm': 'UTM'
};

const currencyNames = {
    'CLP': 'Peso Chileno',
    'dolar': 'Dólar Estadounidense',
    'euro': 'Euro',
    'uf': 'Unidad de Fomento',
    'utm': 'UTM'
};

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeApp);
converterForm.addEventListener('submit', handleConversion);
swapButton.addEventListener('click', swapCurrencies);
amountInput.addEventListener('input', validateAmount);
fromCurrencySelect.addEventListener('change', onCurrencyChange);
toCurrencySelect.addEventListener('change', onCurrencyChange);

// Inicializar la aplicación
function initializeApp() {
    console.log('Conversor de Monedas inicializado - Datos desde mindicador.cl - Desarrollado por Mordaz');
    hideAllMessages();
    
    // Configurar valores por defecto
    fromCurrencySelect.value = 'CLP';
    toCurrencySelect.value = 'dolar';
    
    // Cargar datos iniciales
    loadInitialData();
    
    // Focus en el input de cantidad
    amountInput.focus();
}

// REQUERIMIENTO 4: TRY-CATCH PARA MANEJO DE ERRORES
async function loadInitialData() {
    try {
        showLoading();
        await loadCurrencyData('dolar'); // Cargar dólar por defecto para el gráfico
        hideAllMessages();
    } catch (error) {
        console.error('Error cargando datos iniciales:', error);
        showError('Error al cargar los datos iniciales. Verifique su conexión a internet.');
    }
}

// REQUERIMIENTO 1: OBTENER DATOS DESDE MINDICADOR.CL
async function getCurrencyData(currency) {
    try {
        const response = await fetch(`${API_URL}/${currency}`);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data || !data.serie || data.serie.length === 0) {
            throw new Error(`No se encontraron datos para la moneda: ${currency}`);
        }
        
        return data;
    } catch (error) {
        console.error(`Error obteniendo datos de ${currency}:`, error);
        throw error;
    }
}

// REQUERIMIENTO 2: CÁLCULO CORRECTO Y MOSTRAR EN DOM
async function handleConversion(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    
    if (fromCurrency === toCurrency) {
        showResult(amount, fromCurrency, amount, toCurrency, 1);
        return;
    }
    
    try {
        showLoading();
        
        let convertedAmount;
        let exchangeRate;
        
        // Cálculos según las combinaciones de monedas
        if (fromCurrency === 'CLP') {
            // De CLP a otra moneda
            const currencyData = await getCurrencyData(toCurrency);
            const currentValue = currencyData.serie[0].valor;
            convertedAmount = amount / currentValue;
            exchangeRate = 1 / currentValue;
        } else if (toCurrency === 'CLP') {
            // De otra moneda a CLP
            const currencyData = await getCurrencyData(fromCurrency);
            const currentValue = currencyData.serie[0].valor;
            convertedAmount = amount * currentValue;
            exchangeRate = currentValue;
        } else {
            // Entre dos monedas que no son CLP
            const fromData = await getCurrencyData(fromCurrency);
            const toData = await getCurrencyData(toCurrency);
            const fromValue = fromData.serie[0].valor;
            const toValue = toData.serie[0].valor;
            
            // Convertir primero a CLP, luego a la moneda destino
            const clpAmount = amount * fromValue;
            convertedAmount = clpAmount / toValue;
            exchangeRate = fromValue / toValue;
        }
        
        showResult(amount, fromCurrency, convertedAmount, toCurrency, exchangeRate);
        
    } catch (error) {
        console.error('Error en la conversión:', error);
        showError(`Error al realizar la conversión: ${error.message}`);
    }
}

// REQUERIMIENTO 5: GRÁFICO CON CHART.JS
async function loadCurrencyData(currency) {
    if (currency === 'CLP') {
        return; // No hay gráfico para CLP
    }
    
    try {
        const data = await getCurrencyData(currency);
        currentCurrencyData = data;
        createChart(data);
    } catch (error) {
        console.error('Error cargando datos para gráfico:', error);
        throw error;
    }
}

function createChart(data) {
    const ctx = document.getElementById('currencyChart').getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (currencyChart) {
        currencyChart.destroy();
    }
    
    // Preparar datos para el gráfico (últimos 10 días)
    const last10Days = data.serie.slice(0, 10).reverse();
    const labels = last10Days.map(item => {
        const date = new Date(item.fecha);
        return date.toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit' });
    });
    const values = last10Days.map(item => item.valor);
    
    currencyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${currencyNames[data.codigo]} (${currencySymbols[data.codigo]})`,
                data: values,
                borderColor: '#6c757d',
                backgroundColor: 'rgba(108, 117, 125, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#6c757d',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `Evolución de ${currencyNames[data.codigo]} - Últimos 10 días`,
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#333'
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Valor en Pesos Chilenos (CLP)',
                        color: '#666'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fecha',
                        color: '#666'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            elements: {
                point: {
                    hoverRadius: 8
                }
            }
        }
    });
}

// Evento para cambio de moneda
async function onCurrencyChange() {
    const selectedCurrency = toCurrencySelect.value;
    if (selectedCurrency && selectedCurrency !== 'CLP') {
        try {
            await loadCurrencyData(selectedCurrency);
        } catch (error) {
            console.warn('No se pudo cargar el gráfico para la moneda seleccionada');
        }
    }
    clearPreviousResults();
}

// Intercambiar monedas
function swapCurrencies() {
    const fromValue = fromCurrencySelect.value;
    const toValue = toCurrencySelect.value;
    
    if (fromValue && toValue) {
        fromCurrencySelect.value = toValue;
        toCurrencySelect.value = fromValue;
        clearPreviousResults();
        onCurrencyChange();
    }
}

// Validar formulario
function validateForm() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    
    if (!amount || amount <= 0) {
        showError('Por favor, ingresa una cantidad válida mayor a 0');
        amountInput.focus();
        return false;
    }
    
    if (!fromCurrency) {
        showError('Por favor, selecciona la moneda de origen');
        fromCurrencySelect.focus();
        return false;
    }
    
    if (!toCurrency) {
        showError('Por favor, selecciona la moneda de destino');
        toCurrencySelect.focus();
        return false;
    }
    
    return true;
}

// Validar cantidad
function validateAmount() {
    const amount = parseFloat(amountInput.value);
    
    if (amountInput.value && (!amount || amount <= 0)) {
        amountInput.setCustomValidity('La cantidad debe ser mayor a 0');
    } else {
        amountInput.setCustomValidity('');
    }
}

// REQUERIMIENTO 2: MOSTRAR RESULTADO EN DOM
function showResult(fromAmount, fromCurrency, toAmount, toCurrency, rate) {
    hideAllMessages();
    
    const fromSymbol = currencySymbols[fromCurrency] || '';
    const toSymbol = currencySymbols[toCurrency] || '';
    
    resultAmountFrom.textContent = `${fromSymbol}${formatNumber(fromAmount)}`;
    resultCurrencyFrom.textContent = currencyNames[fromCurrency] || fromCurrency;
    resultAmountTo.textContent = `${toSymbol}${formatNumber(toAmount)}`;
    resultCurrencyTo.textContent = currencyNames[toCurrency] || toCurrency;
    exchangeRateElement.textContent = `1 ${currencyNames[fromCurrency]} = ${formatNumber(rate, 6)} ${currencyNames[toCurrency]}`;
    lastUpdatedElement.textContent = new Date().toLocaleString('es-CL');
    
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// REQUERIMIENTO 4: MOSTRAR ERROR EN DOM
function showError(message) {
    hideAllMessages();
    errorMessageElement.textContent = message;
    errorContainer.style.display = 'block';
    errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Mostrar loading
function showLoading() {
    hideAllMessages();
    loadingContainer.style.display = 'block';
    convertButton.disabled = true;
    convertButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Convirtiendo...';
}

// Ocultar todos los mensajes
function hideAllMessages() {
    resultContainer.style.display = 'none';
    errorContainer.style.display = 'none';
    loadingContainer.style.display = 'none';
    convertButton.disabled = false;
    convertButton.innerHTML = '<i class="fas fa-calculator"></i> Convertir';
}

// Limpiar resultados anteriores
function clearPreviousResults() {
    hideAllMessages();
}

// Formatear números
function formatNumber(number, decimals = 2) {
    return parseFloat(number).toLocaleString('es-CL', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// Manejar errores de red
window.addEventListener('online', () => {
    console.log('Conexión restaurada');
    loadInitialData();
});

window.addEventListener('offline', () => {
    console.log('Conexión perdida');
    showError('Sin conexión a internet. Verifique su conexión y vuelva a intentar.');
});

// Función de utilidad para debug
function debugInfo() {
    console.log('Datos actuales de moneda:', currentCurrencyData);
    console.log('API URL:', API_URL);
    console.log('Gráfico activo:', currencyChart !== null);
}

// Hacer disponible para debug en consola
window.debugConverter = debugInfo;
