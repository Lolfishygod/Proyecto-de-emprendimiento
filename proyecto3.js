// Desplazamiento suave para navegación
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Datos históricos ficticios para demostración (últimos 20 años)
const historicalData = [
    { year: 2004, type: 'Tecnología', activity: 'Software', value: 45, city: 'Bogotá', department: 'Bogotá D.C.' },
    { year: 2004, type: 'Comercio', activity: 'Retail', value: 62, city: 'Medellín', department: 'Antioquia' },
    { year: 2005, type: 'Servicios', activity: 'Consultoría', value: 38, city: 'Cali', department: 'Valle del Cauca' },
    { year: 2006, type: 'Tecnología', activity: 'E-commerce', value: 51, city: 'Soacha', department: 'Cundinamarca' },
    { year: 2007, type: 'Social', activity: 'ONG', value: 28, city: 'Cartagena', department: 'Bolívar' },
    { year: 2008, type: 'Creativo', activity: 'Diseño', value: 35, city: 'Medellín', department: 'Antioquia' },
    { year: 2009, type: 'Comercio', activity: 'Tienda online', value: 58, city: 'Bogotá', department: 'Bogotá D.C.' },
    { year: 2010, type: 'Servicios', activity: 'Asesoría', value: 44, city: 'Palmira', department: 'Valle del Cauca' },
    { year: 2011, type: 'Tecnología', activity: 'App móvil', value: 65, city: 'Medellín', department: 'Antioquia' },
    { year: 2012, type: 'Social', activity: 'Emprendimiento social', value: 42, city: 'Bogotá', department: 'Bogotá D.C.' },
    { year: 2013, type: 'Creativo', activity: 'Marketing digital', value: 48, city: 'Cali', department: 'Valle del Cauca' },
    { year: 2014, type: 'Tecnología', activity: 'SaaS', value: 72, city: 'Bogotá', department: 'Bogotá D.C.' },
    { year: 2015, type: 'Comercio', activity: 'Marketplace', value: 68, city: 'Medellín', department: 'Antioquia' },
    { year: 2016, type: 'Servicios', activity: 'Freelance', value: 55, city: 'Bucaramanga', department: 'Santander' },
    { year: 2017, type: 'Tecnología', activity: 'IA y Big Data', value: 88, city: 'Medellín', department: 'Antioquia' },
    { year: 2018, type: 'Social', activity: 'Impacto ambiental', value: 62, city: 'Cali', department: 'Valle del Cauca' },
    { year: 2019, type: 'Creativo', activity: 'Agencia creativa', value: 58, city: 'Bogotá', department: 'Bogotá D.C.' },
    { year: 2020, type: 'Tecnología', activity: 'Fintech', value: 95, city: 'Bogotá', department: 'Bogotá D.C.' },
    { year: 2021, type: 'Servicios', activity: 'Servicios online', value: 71, city: 'Medellín', department: 'Antioquia' },
    { year: 2022, type: 'Comercio', activity: 'E-commerce B2B', value: 82, city: 'Barranquilla', department: 'Atlántico' },
    { year: 2023, type: 'Tecnología', activity: 'Blockchain', value: 108, city: 'Medellín', department: 'Antioquia' },
    { year: 2024, type: 'Creativo', activity: 'Content creator', value: 75, city: 'Cali', department: 'Valle del Cauca' },
    { year: 2020, type: 'Tecnología', activity: 'Plataforma digital', value: 72, city: 'Pasto', department: 'Nariño' },
    { year: 2021, type: 'Comercio', activity: 'Tienda online', value: 58, city: 'Santa Marta', department: 'Magdalena' },
    { year: 2022, type: 'Servicios', activity: 'Consultoría', value: 64, city: 'Popayán', department: 'Cauca' },
    { year: 2023, type: 'Social', activity: 'Programa comunitario', value: 45, city: 'Bogotá', department: 'Bogotá D.C.' },
    { year: 2024, type: 'Creativo', activity: 'Diseño gráfico', value: 52, city: 'Zipaquirá', department: 'Cundinamarca' },
    // Datos de Quibdó, Chocó
    { year: 2004, type: 'Comercio', activity: 'Tienda tradicional', value: 28, city: 'Quibdó', department: 'Chocó' },
    { year: 2008, type: 'Servicios', activity: 'Artesanía', value: 32, city: 'Quibdó', department: 'Chocó' },
    { year: 2012, type: 'Social', activity: 'Cooperativa comunitaria', value: 38, city: 'Quibdó', department: 'Chocó' },
    { year: 2016, type: 'Comercio', activity: 'Exportación de productos', value: 45, city: 'Quibdó', department: 'Chocó' },
    { year: 2018, type: 'Servicios', activity: 'Turismo sostenible', value: 42, city: 'Quibdó', department: 'Chocó' },
    { year: 2020, type: 'Creativo', activity: 'Artesanía digital', value: 35, city: 'Quibdó', department: 'Chocó' },
    { year: 2021, type: 'Comercio', activity: 'E-commerce productos locales', value: 48, city: 'Quibdó', department: 'Chocó' },
    { year: 2022, type: 'Social', activity: 'Programa de inclusión', value: 52, city: 'Quibdó', department: 'Chocó' },
    { year: 2023, type: 'Servicios', activity: 'Consultoría ambiental', value: 58, city: 'Quibdó', department: 'Chocó' },
    { year: 2024, type: 'Tecnología', activity: 'Plataforma de comercio local', value: 55, city: 'Quibdó', department: 'Chocó' },
];

// Poblar filtros de años
function populateYearFilters() {
    const years = [...new Set(historicalData.map(d => d.year))].sort();
    const yearFromSelect = document.getElementById('yearFrom');
    const yearToSelect = document.getElementById('yearTo');
    
    years.forEach(year => {
        const option1 = document.createElement('option');
        option1.value = year;
        option1.textContent = year;
        yearFromSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = year;
        option2.textContent = year;
        yearToSelect.appendChild(option2);
    });
    
    yearFromSelect.value = Math.min(...years);
    yearToSelect.value = Math.max(...years);
}

// Poblar filtros de tipo, actividad, departamento y ciudad
function populateFilters() {
    const types = [...new Set(historicalData.map(d => d.type))];
    const activities = [...new Set(historicalData.map(d => d.activity))];
    const departments = [...new Set(historicalData.map(d => d.department))].sort();
    const cities = [...new Set(historicalData.map(d => d.city))].sort();
    
    const typeFilter = document.getElementById('typeFilter');
    const activityFilter = document.getElementById('activityFilter');
    const departmentFilter = document.getElementById('departmentFilter');
    const cityFilter = document.getElementById('cityFilter');
    
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilter.appendChild(option);
    });
    
    activities.forEach(activity => {
        const option = document.createElement('option');
        option.value = activity;
        option.textContent = activity;
        activityFilter.appendChild(option);
    });
    
    departments.forEach(department => {
        const option = document.createElement('option');
        option.value = department;
        option.textContent = department;
        departmentFilter.appendChild(option);
    });
    
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
}

// Actualizar tabla con datos filtrados
function updateDataTable() {
    const yearFrom = parseInt(document.getElementById('yearFrom').value);
    const yearTo = parseInt(document.getElementById('yearTo').value);
    const typeFilter = document.getElementById('typeFilter').value;
    const activityFilter = document.getElementById('activityFilter').value;
    const departmentFilter = document.getElementById('departmentFilter').value;
    const cityFilter = document.getElementById('cityFilter').value;
    
    let filteredData = historicalData.filter(d => 
        d.year >= yearFrom && d.year <= yearTo &&
        (typeFilter === 'Todos' || d.type === typeFilter) &&
        (activityFilter === 'Todos' || d.activity === activityFilter) &&
        (departmentFilter === 'Todos' || d.department === departmentFilter) &&
        (cityFilter === 'Todos' || d.city === cityFilter)
    );
    
    const tbody = document.getElementById('dataBody');
    tbody.innerHTML = '';
    
    filteredData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.year}</td><td>${row.type}</td><td>${row.activity}</td><td>${row.value}</td><td>${row.department}</td><td>${row.city}</td>`;
        tbody.appendChild(tr);
    });
}

// Gráfico de Barras: Emprendimiento Femenino
function drawBarChart() {
    const canvas = document.getElementById('barChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    // Filtrar datos de Quibdó
    const quibdoData = historicalData.filter(d => d.city === 'Quibdó');
    const types = ['Comercio', 'Servicios', 'Creativo', 'Social'];
    const values = types.map(type => {
        const filtered = quibdoData.filter(d => d.type === type);
        return filtered.length > 0 ? Math.round(filtered.reduce((sum, d) => sum + d.value, 0) / filtered.length) : 0;
    });
    const colors = ['#38bdf8', '#fb7185', '#10b981', '#f97316'];
    
    const barWidth = canvas.width / (types.length + 1);
    const maxValue = Math.max(...values, 50);
    const scale = (canvas.height - 40) / maxValue;
    
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    types.forEach((type, i) => {
        const x = (i + 0.5) * barWidth;
        const barHeight = values[i] * scale;
        const y = canvas.height - barHeight - 30;
        
        ctx.fillStyle = colors[i];
        ctx.fillRect(x - barWidth / 3, y, barWidth * 0.6, barHeight);
        
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(type, x, canvas.height - 10);
        ctx.fillText(values[i], x, y - 8);
    });
}

// Gráfico de Torta: Participación por tipo
function drawPieChart() {
    const canvas = document.getElementById('pieChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    // Filtrar datos de Quibdó
    const quibdoData = historicalData.filter(d => d.city === 'Quibdó');
    const types = ['Comercio', 'Servicios', 'Social', 'Creativo'];
    const values = types.map(type => quibdoData.filter(d => d.type === type).length);
    const colors = ['#38bdf8', '#fb7185', '#10b981', '#f97316'];
    
    const total = values.reduce((sum, value) => sum + value, 0);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 40;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    let currentAngle = -Math.PI / 2;
    ctx.textBaseline = 'middle';
    
    values.forEach((value, i) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.65);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.65);
        
        ctx.fillStyle = '#020617';
        ctx.font = 'bold 13px Inter';
        ctx.fillText(`${Math.round((value / total) * 100)}%`, labelX, labelY);
        
        currentAngle += sliceAngle;
    });
    
    ctx.textBaseline = 'alphabetic';
    ctx.font = '12px Inter';
    let legendY = 20;
    types.forEach((type, i) => {
        ctx.fillStyle = colors[i];
        ctx.fillRect(canvas.width - 150, legendY, 14, 14);
        ctx.fillStyle = '#cbd5e1';
        ctx.textAlign = 'left';
        ctx.fillText(type, canvas.width - 128, legendY + 12);
        legendY += 26;
    });
}

// Gráfico de Líneas: Tendencia de innovación
function drawLineChart() {
    const canvas = document.getElementById('lineChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    // Filtrar datos de Quibdó y obtener años únicos
    const quibdoData = historicalData.filter(d => d.city === 'Quibdó').sort((a, b) => a.year - b.year);
    const years = [...new Set(quibdoData.map(d => d.year))].sort();
    const innovationIndex = years.map(year => {
        const yearData = quibdoData.filter(d => d.year === year);
        return yearData.length > 0 ? Math.round(yearData.reduce((sum, d) => sum + d.value, 0) / yearData.length) : 0;
    });
    
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const padding = 40;
    const graphWidth = canvas.width - padding * 2;
    const graphHeight = canvas.height - padding * 2;
    const maxValue = Math.max(...innovationIndex, 60);
    
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (graphHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }
    
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    years.forEach((year, i) => {
        const x = padding + (graphWidth / (years.length - 1)) * i;
        const y = canvas.height - padding - (innovationIndex[i] / maxValue) * graphHeight;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(x - 3, y - 3, 6, 6);
    });
    ctx.stroke();
    
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    years.forEach((year, i) => {
        const x = padding + (graphWidth / (years.length - 1)) * i;
        ctx.fillText(year, x, canvas.height - 15);
    });
}

// Gráfico de Área: Emprendimiento vs Innovación
function drawAreaChart() {
    const canvas = document.getElementById('areaChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    // Filtrar datos de Quibdó
    const quibdoData = historicalData.filter(d => d.city === 'Quibdó').sort((a, b) => a.year - b.year);
    const years = [...new Set(quibdoData.map(d => d.year))].sort();
    
    // Separar por tipo de emprendimiento
    const entrepreneurship = years.map(year => {
        const yearData = quibdoData.filter(d => d.year === year && (d.type === 'Comercio' || d.type === 'Servicios'));
        return yearData.length > 0 ? Math.round(yearData.reduce((sum, d) => sum + d.value, 0) / yearData.length) : 0;
    });
    
    const innovation = years.map(year => {
        const yearData = quibdoData.filter(d => d.year === year && (d.type === 'Tecnología' || d.type === 'Creativo'));
        return yearData.length > 0 ? Math.round(yearData.reduce((sum, d) => sum + d.value, 0) / yearData.length) : 0;
    });
    
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const padding = 40;
    const graphWidth = canvas.width - padding * 2;
    const graphHeight = canvas.height - padding * 2;
    const maxValue = Math.max(...entrepreneurship, ...innovation, 60);
    
    // Área Emprendimiento
    ctx.fillStyle = 'rgba(251, 113, 133, 0.3)';
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    
    years.forEach((year, i) => {
        const x = padding + (graphWidth / (years.length - 1)) * i;
        const y = canvas.height - padding - (entrepreneurship[i] / maxValue) * graphHeight;
        ctx.lineTo(x, y);
    });
    
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.fill();
    
    // Área Innovación
    ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    
    years.forEach((year, i) => {
        const x = padding + (graphWidth / (years.length - 1)) * i;
        const y = canvas.height - padding - (innovation[i] / maxValue) * graphHeight;
        ctx.lineTo(x, y);
    });
    
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.fill();
    
    // Línea Emprendimiento
    ctx.strokeStyle = '#fb7185';
    ctx.lineWidth = 2;
    ctx.beginPath();
    years.forEach((year, i) => {
        const x = padding + (graphWidth / (years.length - 1)) * i;
        const y = canvas.height - padding - (entrepreneurship[i] / maxValue) * graphHeight;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Línea Innovación
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    years.forEach((year, i) => {
        const x = padding + (graphWidth / (years.length - 1)) * i;
        const y = canvas.height - padding - (innovation[i] / maxValue) * graphHeight;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Leyenda
    ctx.fillStyle = '#fb7185';
    ctx.fillRect(padding + 10, 15, 12, 12);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '12px Inter';
    ctx.fillText('Emprendimiento', padding + 28, 24);
    
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(padding + 200, 15, 12, 12);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Innovación', padding + 218, 24);
}

// Formulario de estimación
function setupEstimationForm() {
    const peopleCount = document.getElementById('peopleCount');
    const peopleValue = document.getElementById('peopleValue');
    const businessType = document.getElementById('businessType');
    const estimateButton = document.getElementById('estimateButton');
    const estimateResult = document.getElementById('estimateResult');
    
    if (peopleCount) {
        peopleCount.addEventListener('input', () => {
            peopleValue.textContent = peopleCount.value;
        });
    }
    
    if (estimateButton) {
        estimateButton.addEventListener('click', () => {
            const people = parseInt(peopleCount.value);
            const type = businessType.value;
            
            const typeMultipliers = {
                'Tecnología': 2.5,
                'Social': 1.8,
                'Creativo': 1.6,
                'Comercio': 1.4,
                'Servicios': 1.3
            };
            
            const score = Math.round(people * typeMultipliers[type]);
            
            estimateResult.innerHTML = `
                <div style="font-size: 1.6rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem;">${score}</div>
                <div>Índice de fuerza emprendedora para ${people} personas en ${type}</div>
            `;
        });
    }
}

// Quiz de capacidad de innovación
const quizQuestions = [
    {
        question: '¿Cuál es tu actitud frente a los cambios?',
        options: [
            { text: 'Los evito al máximo', weight: 1 },
            { text: 'Me adapto cuando es necesario', weight: 2 },
            { text: 'Los busco activamente', weight: 3 },
            { text: 'Soy pionero en mi área', weight: 4 }
        ]
    },
    {
        question: '¿Con qué frecuencia generas nuevas ideas?',
        options: [
            { text: 'Rara vez', weight: 1 },
            { text: 'Ocasionalmente', weight: 2 },
            { text: 'Regularmente', weight: 3 },
            { text: 'Constantemente', weight: 4 }
        ]
    },
    {
        question: '¿Cuál es tu disposición al riesgo?',
        options: [
            { text: 'Muy conservador', weight: 1 },
            { text: 'Moderadamente cauteloso', weight: 2 },
            { text: 'Dispuesto a asumir riesgos calculados', weight: 3 },
            { text: 'Muy emprendedor', weight: 4 }
        ]
    },
    {
        question: '¿Cómo aprendes de los fracasos?',
        options: [
            { text: 'Me desanimo fácilmente', weight: 1 },
            { text: 'Intento aprender pero cuesta', weight: 2 },
            { text: 'Veo oportunidades de mejora', weight: 3 },
            { text: 'Me impulsan a innovar más', weight: 4 }
        ]
    },
    {
        question: '¿Qué tan importante es la innovación en tu trabajo?',
        options: [
            { text: 'No es relevante', weight: 1 },
            { text: 'Algo importante', weight: 2 },
            { text: 'Muy importante', weight: 3 },
            { text: 'Fundamental', weight: 4 }
        ]
    }
];

function setupQuiz() {
    const quizCards = document.getElementById('quizCards');
    if (!quizCards) return;
    
    quizQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `<h3>${q.question}</h3><div class="quiz-options"></div>`;
        
        const optionsDiv = card.querySelector('.quiz-options');
        
        q.options.forEach((opt, optIndex) => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.textContent = opt.text;
            button.setAttribute('data-question', index);
            button.setAttribute('data-weight', opt.weight);
            
            button.addEventListener('click', () => {
                document.querySelectorAll(`.quiz-option[data-question="${index}"]`).forEach(b => b.classList.remove('selected'));
                button.classList.add('selected');
            });
            
            optionsDiv.appendChild(button);
        });
        
        quizCards.appendChild(card);
    });
}

function calculateQuiz() {
    const calculateButton = document.getElementById('calculateQuiz');
    const quizScore = document.getElementById('quizScore');
    const adviceTableContainer = document.getElementById('adviceTableContainer');
    const yourAdvice = document.getElementById('yourAdvice');
    
    if (calculateButton) {
        calculateButton.addEventListener('click', () => {
            const selectedOptions = document.querySelectorAll('.quiz-option.selected');
            
            if (selectedOptions.length < quizQuestions.length) {
                quizScore.textContent = 'Por favor responde todas las preguntas.';
                adviceTableContainer.style.display = 'none';
                return;
            }
            
            let totalWeight = 0;
            selectedOptions.forEach(opt => {
                totalWeight += parseInt(opt.getAttribute('data-weight'));
            });
            
            const maxScore = quizQuestions.length * 4;
            const percentage = (totalWeight / maxScore) * 100;
            
            let level = '';
            let color = '';
            let personalizedAdvice = '';
            let highlightRow = '';
            
            if (percentage <= 25) {
                level = 'Nivel Básico: Tienes potencial para desarrollar tu capacidad emprendedora.';
                color = '#fb7185';
                personalizedAdvice = 'Tienes potencial para desarrollar tu capacidad emprendedora. Te recomendamos comenzar a leer sobre innovación, asistir a talleres de emprendimiento y buscar mentores en tu área de interés. No temas experimentar con ideas pequeñas.';
                highlightRow = 'adviceRow1';
            } else if (percentage <= 50) {
                level = 'Nivel Intermedio: Tienes buenas características emprendedoras.';
                color = '#f97316';
                personalizedAdvice = 'Tienes buenas características emprendedoras. Te sugerimos profundizar en áreas específicas del emprendimiento como finanzas, marketing y gestión de equipos. Busca participar en proyectos que desafíen tu creatividad.';
                highlightRow = 'adviceRow2';
            } else if (percentage <= 75) {
                level = 'Nivel Avanzado: Eres muy innovador y emprendedor.';
                color = '#10b981';
                personalizedAdvice = 'Eres muy innovador y emprendedor. Te animamos a liderar proyectos, compartir tu conocimiento con otros y buscar inversión o recursos para llevar tus ideas a escala. Considera crear una red de emprendedores.';
                highlightRow = 'adviceRow3';
            } else {
                level = 'Nivel Experto: Eres un innovador nato con alto potencial emprendedor.';
                color = '#38bdf8';
                personalizedAdvice = 'Eres un innovador nato con alto potencial emprendedor. Te recomendamos crear tu propio emprendimiento, mentorizar a otros emprendedores, o buscar oportunidades de inversión en startups. Tu visión puede transformar mercados.';
                highlightRow = 'adviceRow4';
            }
            
            // Remover highlight anterior
            document.querySelectorAll('.advice-row').forEach(row => row.classList.remove('highlighted'));
            // Agregar highlight a la fila actual
            const currentRow = document.getElementById(highlightRow);
            if (currentRow) currentRow.classList.add('highlighted');
            
            quizScore.style.color = color;
            quizScore.style.borderColor = color;
            quizScore.innerHTML = `<div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">${Math.round(percentage)}%</div><div>${level}</div>`;
            
            // Mostrar tabla de consejos
            adviceTableContainer.style.display = 'block';
            yourAdvice.innerHTML = `<div class="personalized-advice" style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(251, 113, 133, 0.1)); border-radius: 1rem; border-left: 4px solid ${color};"><h4 style="margin-top: 0; color: ${color};">Tu Consejo Personalizado</h4><p style="margin: 0; color: var(--muted);">${personalizedAdvice}</p></div>`;
        });
    }
}

// Evento update para filtros
document.addEventListener('DOMContentLoaded', () => {
    populateYearFilters();
    populateFilters();
    
    // Establecer Quibdó como ciudad por defecto
    const cityFilter = document.getElementById('cityFilter');
    if (cityFilter) {
        cityFilter.value = 'Quibdó';
    }
    
    updateDataTable();
    
    document.getElementById('yearFrom')?.addEventListener('change', updateDataTable);
    document.getElementById('yearTo')?.addEventListener('change', updateDataTable);
    document.getElementById('typeFilter')?.addEventListener('change', updateDataTable);
    document.getElementById('activityFilter')?.addEventListener('change', updateDataTable);
    document.getElementById('departmentFilter')?.addEventListener('change', updateDataTable);
    document.getElementById('cityFilter')?.addEventListener('change', updateDataTable);
    
    setupEstimationForm();
    setupQuiz();
    calculateQuiz();
    
    setTimeout(() => {
        drawBarChart();
        drawPieChart();
        drawLineChart();
        drawAreaChart();
    }, 100);
});
