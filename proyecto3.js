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
        // Enhance estimation form: render interactive option cards and compute a score
        const estimationQuestions = [
            {
                question: 'Nivel de validación de la idea',
                options: [
                    { text: 'No validada', weight: 1 },
                    { text: 'Entrevistas a usuarios', weight: 2 },
                    { text: 'MVP probado', weight: 3 },
                    { text: 'Producto en el mercado', weight: 4 }
                ]
            },
            {
                question: 'Capacidad del equipo',
                options: [
                    { text: 'Solo/a', weight: 1 },
                    { text: 'Equipo pequeño', weight: 2 },
                    { text: 'Equipo con experiencia', weight: 3 },
                    { text: 'Equipo completo', weight: 4 }
                ]
            },
            {
                question: 'Acceso a financiamiento',
                options: [
                    { text: 'Ninguno', weight: 1 },
                    { text: 'Ahorros propios', weight: 2 },
                    { text: 'Inversores/creditos', weight: 3 },
                    { text: 'Financiamiento asegurado', weight: 4 }
                ]
            }
        ];

        // Render options once (inside the estimation card)
        const estimationCard = document.getElementById('peopleCount')?.closest('.estimation-card');
        if (estimationCard && !document.getElementById('estimationOptions')) {
            const container = document.createElement('div');
            container.id = 'estimationOptions';
            container.className = 'quiz-grid';

            estimationQuestions.forEach((q, idx) => {
                const card = document.createElement('div');
                card.className = 'quiz-card';
                card.innerHTML = `<h3>${q.question}</h3><div class="quiz-options" data-question="${idx}"></div>`;

                const optionsDiv = card.querySelector('.quiz-options');
                q.options.forEach(opt => {
                    const optDiv = document.createElement('div');
                    optDiv.className = 'quiz-option';
                    optDiv.textContent = opt.text;
                    optDiv.dataset.weight = opt.weight;
                    optDiv.addEventListener('click', () => {
                        optionsDiv.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                        optDiv.classList.add('selected');
                    });
                    optionsDiv.appendChild(optDiv);
                });

                container.appendChild(card);
            });

            // Insert the interactive questions above the estimate button
            estimateButton.parentElement.insertBefore(container, estimateButton);
        }

        estimateButton.addEventListener('click', () => {
            // Collect selected option weights
            const optionsContainers = document.querySelectorAll('#estimationOptions .quiz-options');
            const weights = [];
            optionsContainers.forEach(c => {
                const sel = c.querySelector('.quiz-option.selected');
                weights.push(sel ? parseInt(sel.dataset.weight, 10) : 1);
            });

            const avgWeight = weights.length ? (weights.reduce((s, n) => s + n, 0) / weights.length) : 1;
            const people = peopleCount ? parseInt(peopleCount.value, 10) : 20;
            const type = businessType ? businessType.value : 'Tecnología';

            // Business type influence (normalized multiplier)
            const typeWeightMap = {
                'Tecnología': 1.25,
                'Social': 0.95,
                'Creativo': 1.05,
                'Comercio': 1.05,
                'Servicios': 0.98
            };
            const typeWeight = typeWeightMap[type] || 1;

            // Compose a final score 0-100 combining people, type and selected option weights
            // people: 0-100 scaled to ~45% influence
            // typeWeight: mapped to 0-28 scale by multiplying ~20
            // avgWeight (1-4) mapped to 0-35 scale
            const score = Math.min(100, Math.round(
                (people * 0.45) + (typeWeight * 20) + (((avgWeight - 1) / 3) * 35)
            ));

            // Display result and short advice
            if (estimateResult) {
                estimateResult.innerHTML = `<div><strong>Estimación de fuerza emprendedora:</strong> ${score}%</div>`;

                // build bullets and links for estimation
                let bullets = [];
                let links = [];
                if (score <= 25) {
                    bullets = ['Valida la idea con usuarios', 'Busca formación y talleres', 'Prueba pilotos pequeños'];
                    links = [
                        { label: 'Datos Abiertos', href: 'https://www.datos.gov.co/' },
                        { label: 'SENA', href: 'https://www.sena.edu.co/' }
                    ];
                } else if (score <= 50) {
                    bullets = ['Fortalece el equipo', 'Mejora la propuesta de valor', 'Valida tu modelo de ingresos'];
                    links = [
                        { label: 'Datos Abiertos', href: 'https://www.datos.gov.co/' },
                        { label: 'Innpulsa', href: 'https://www.innpulsa.gov.co/' }
                    ];
                } else if (score <= 75) {
                    bullets = ['Busca alianzas y mentores', 'Define métricas clave', 'Prepara un plan de inversión'];
                    links = [
                        { label: 'Innpulsa', href: 'https://www.innpulsa.gov.co/' },
                        { label: 'Seedstars', href: 'https://www.seedstars.com/' }
                    ];
                } else {
                    bullets = ['Prepara pitch y materiales para inversores', 'Explora redes de inversión', 'Planifica escalabilidad'];
                    links = [
                        { label: 'AngelList', href: 'https://angel.co/' },
                        { label: 'Seedstars', href: 'https://www.seedstars.com/' }
                    ];
                }

                const adviceContainer = document.createElement('div');
                adviceContainer.style.marginTop = '10px';
                estimateResult.appendChild(adviceContainer);
                renderAdviceCard(adviceContainer, 'Sugerencias', 'var(--primary)', bullets, links);
            }
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

// Helper: render an advice card with bullets and resource links
function renderAdviceCard(container, title, color, bullets = [], links = []) {
    if (!container) return;
    container.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'advice-card';

    const header = document.createElement('h4');
    header.textContent = title;
    header.style.color = color;
    header.style.margin = '0 0 8px 0';
    card.appendChild(header);

    if (bullets.length) {
        const ul = document.createElement('ul');
        ul.style.margin = '0 0 8px 1rem';
        bullets.forEach(b => {
            const li = document.createElement('li');
            li.style.color = 'var(--muted)';
            li.style.marginBottom = '6px';
            li.textContent = b;
            ul.appendChild(li);
        });
        card.appendChild(ul);
    }

    if (links.length) {
        const linksWrap = document.createElement('div');
        linksWrap.className = 'advice-links';
        links.forEach(l => {
            const a = document.createElement('a');
            a.className = 'resource-button';
            a.href = l.href;
            a.target = '_blank';
            a.rel = 'noopener';
            a.textContent = l.label;
            linksWrap.appendChild(a);
        });
        card.appendChild(linksWrap);
    }

    container.appendChild(card);
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
                personalizedAdvice = 'Tienes potencial para desarrollar tu capacidad emprendedora. Recursos recomendados: <a href="https://www.coursera.org/" target="_blank" rel="noopener">Datos Abiertos (datos.gov.co)</a> para investigar demanda local, y <a href="https://www.sena.edu.co/" target="_blank" rel="noopener">SENA</a> para formación y talleres prácticos.';
                highlightRow = 'adviceRow1';
            } else if (percentage <= 50) {
                level = 'Nivel Intermedio: Tienes buenas características emprendedoras.';
                color = '#f97316';
                personalizedAdvice = 'Buen progreso. Consulta datos sectoriales en <a href="https://manychat.com/" target="_blank" rel="noopener">datos.gov.co</a> y tendencias en <a href="https://www.globalinnovationindex.org/" target="_blank" rel="noopener">Global Innovation Index</a>. Considera cursos sobre finanzas y marketing para escalar.';
                highlightRow = 'adviceRow2';
            } else if (percentage <= 75) {
                level = 'Nivel Avanzado: Eres muy innovador y emprendedor.';
                color = '#10b981';
                personalizedAdvice = 'Estás listo para escalar: revisa programas de apoyo y aceleración en <a href="https://www.innpulsacolombia.com/" target="_blank" rel="noopener">Innpulsa</a> y oportunidades de mentoría en <a href="https://www.seedstars.com/" target="_blank" rel="noopener">Seedstars</a>.';
                highlightRow = 'adviceRow3';
            } else {
                level = 'Nivel Experto: Eres un innovador nato con alto potencial emprendedor.';
                color = '#38bdf8';
                personalizedAdvice = 'Alto potencial: prepara tu pitch y busca redes de inversión en <a href="https://angel.co/" target="_blank" rel="noopener">AngelList</a> o programas internacionales. También revisa convocatorias en <a href="https://www.innpulsa.gov.co/" target="_blank" rel="noopener">Innpulsa</a>.';
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
            
            // Mostrar tabla de consejos y tarjeta visual personalizada
            adviceTableContainer.style.display = 'block';
            // construir bullets y links según nivel
            let bullets = [];
            let links = [];
            if (percentage <= 25) {
                bullets = ['Investiga demanda local usando datos abiertos', 'Realiza talleres o formaciones básicas', 'Valida tu idea con entrevistas a usuarios'];
                links = [
                    { label: 'Datos Abiertos', href: 'https://www.datos.gov.co/' },
                    { label: 'Cursos SENA', href: 'https://www.sena.edu.co/' }
                ];
            } else if (percentage <= 50) {
                bullets = ['Analiza competencia y precios', 'Mejora la propuesta de valor', 'Haz pruebas de mercado pequeñas'];
                links = [
                    { label: 'Datos Abiertos', href: 'https://www.datos.gov.co/' },
                    { label: 'Global Innovation Index', href: 'https://www.globalinnovationindex.org/' }
                ];
            } else if (percentage <= 75) {
                bullets = ['Busca programas de aceleración y mentoría', 'Define métricas clave y KPIs', 'Fortalece el equipo y roles'];
                links = [
                    { label: 'Innpulsa', href: 'https://www.innpulsacolombia.com/' },
                    { label: 'Seedstars', href: 'https://www.seedstars.com/' }
                ];
            } else {
                bullets = ['Prepara pitch y deck para inversores', 'Explora redes de inversión y convocatorias', 'Planea expansión o internacionalización'];
                links = [
                    { label: 'AngelList', href: 'https://angel.co/' },
                    { label: 'Seedstars', href: 'https://www.seedstars.com/' }
                ];
            }

            renderAdviceCard(yourAdvice, 'Tu Consejo Personalizado', color, bullets, links);
        });
    }
}

// NewsAPI Integration
async function fetchAndRenderNews() {
    const newsGrid = document.querySelector('.news-grid');
    if (!newsGrid) return;
    
    // API Key for NewsAPI - replace with your own key from https://newsapi.org
    const API_KEY = 'e2918e46897f473aa221c408504ec389'
    const SEARCH_QUERIES = [
        'emprendimiento innovación',
        'startups tecnología',
        'emprendimiento social'
    ];
    
    try {
        // Fetch news for each query
        const newsPromises = SEARCH_QUERIES.map(query =>
            fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=es&sortBy=publishedAt&pageSize=1&apiKey=${API_KEY}`)
                .then(res => res.json())
        );
        
        const results = await Promise.all(newsPromises);
        const articles = results.flatMap(r => r.articles || []).filter(a => a.urlToImage && a.description);
        
        if (articles.length === 0) {
            renderFallbackNews(newsGrid);
            return;
        }
        
        // Clear existing news and render new ones
        newsGrid.innerHTML = '';
        articles.slice(0, 3).forEach(article => {
            const card = document.createElement('article');
            card.className = 'news-card';
            
            const title = article.title?.substring(0, 60) + '...' || 'Noticia sin título';
            const description = article.description?.substring(0, 120) + '...' || 'Sin descripción';
            const source = article.source?.name || 'Fuente desconocida';
            const url = article.url;
            
            card.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
                <small style="color: var(--muted); font-size: 0.85rem;">Fuente: ${source}</small>
                <a href="${url}" target="_blank" rel="noopener">Leer más</a>
            `;
            
            newsGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        renderFallbackNews(newsGrid);
    }
}

// Fallback news if API fails
function renderFallbackNews(newsGrid) {
    newsGrid.innerHTML = `
        <article class="news-card">
            <h3>DATA Abierta Colombia</h3>
            <p>Consulta datos oficiales sobre emprendimiento, empleo y sectores productivos en Colombia.</p>
            <a href="https://www.datos.gov.co/" target="_blank" rel="noopener">Ir a datos.gov.co</a>
        </article>
        <article class="news-card">
            <h3>Emprendimiento femenino</h3>
            <p>Conoce cómo crece el liderazgo de mujeres emprendedoras y qué sectores están impulsando.</p>
            <a href="https://www.womenglobalentrepreneurship.org/" target="_blank" rel="noopener">Ver informe</a>
        </article>
        <article class="news-card">
            <h3>Innovación global</h3>
            <p>Investiga tendencias mundiales y observa cómo ha evolucionado la innovación en las últimas décadas.</p>
            <a href="https://www.globalinnovationindex.org/" target="_blank" rel="noopener">Ver índice</a>
        </article>
    `;
}

// Evento update para filtros
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and render news from NewsAPI
    fetchAndRenderNews();
    
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
