// script.js

// 1. Definición de la estructura de datos de la malla curricular
// Cada semestre es un objeto con un 'semester' (número) y 'subjects' (un array de materias).
// Cada materia tiene un 'id' (código), 'name' (nombre completo), y 'prerequisites' (un array de IDs de materias).
const curriculum = [
    {
        semester: 1,
        subjects: [
            { id: 'FACE101', name: 'INTRODUCCION A LA CIENCIA, LA TECNOLOGIA Y LA INNOVACION', prerequisites: [] },
            { id: 'CI118', name: 'FUNDAMENTOS DE COMERCIO INTERNACIONAL', prerequisites: [] },
            { id: 'PGI02', name: 'EXPRESION ORAL Y ESCRITA', prerequisites: [] },
            { id: 'UPC01', name: 'CATEDRA UPECISTA', prerequisites: [] },
            { id: 'CI141', name: 'ELEMENTARY', prerequisites: [] },
            { id: 'EC101', name: 'FUNDAMENTOS DE ECONOMÍA', prerequisites: [] },
            { id: 'MT301C', name: 'MATEMATICAS FUNDAMENTALES', prerequisites: [] },
        ]
    },
    {
        semester: 2,
        subjects: [
            { id: 'MT201C', name: 'CALCULO DIFERENCIAL E INTEGRAL', prerequisites: ['MT301C'] },
            { id: 'FACE201', name: 'TEORIA DEL CONOCIMIENTO CIENTIFICO', prerequisites: ['FACE101'] },
            { id: 'CEDI_A2', name: 'COMPETENCIAS EN INGLES A2', prerequisites: [] }, // Se cambió CI207 a CEDI_A2 para evitar duplicado
            { id: 'DR551', name: 'DERECHO CONSTITUCIONAL', prerequisites: [] },
            { id: 'CP101', name: 'FUNDAMENTOS CONTABLES', prerequisites: [] },
            { id: 'AE101', name: 'FUNDAMENTOS DE ADMINISTRACION', prerequisites: [] },
            { id: 'CI207', name: 'PRE-INTERMEDIATE', prerequisites: ['CI141'] },
        ]
    },
    {
        semester: 3,
        subjects: [
            { id: 'CI301', name: 'ACUERDOS COMERCIALES INTERNACIONALES E INVERSION', prerequisites: ['CI207', 'CI118'] },
            { id: 'CP304', name: 'CONTABILIDAD GENERAL Y DE COSTOS', prerequisites: ['CP101'] },
            { id: 'MT304C', name: 'ESTADISTICA DESCRIPTIVA Y CALCULO DE PROBABILIDADE', prerequisites: ['MT201C'] },
            { id: 'CI305', name: 'INTERMEDIATE', prerequisites: ['CI207'] },
            { id: 'CI119', name: 'INTERNATIONAL MARKETING', prerequisites: ['CI207'] },
            { id: 'EC128', name: 'MICROECONOMIA', prerequisites: ['EC101'] },
        ]
    },
    {
        semester: 4,
        subjects: [
            { id: 'CI401', name: 'ARANCEL DE ADUANAS', prerequisites: ['CI118'] },
            { id: 'CI402', name: 'EMPAQUE Y EMBALAJE', prerequisites: ['CI119'] },
            { id: 'EC127', name: 'MACROECONOMIA', prerequisites: ['EC101'] },
            { id: 'EC108', name: 'MATEMATICAS FINANCIERAS', prerequisites: [] },
            { id: 'CI404', name: 'UPPER INTERMEDIATE', prerequisites: ['CI305'] },
        ]
    },
    {
        semester: 5,
        subjects: [
            { id: 'CI508', name: 'ADVANCED', prerequisites: ['CI404'] },
            { id: 'CI403', name: 'GEOPOLITICS', prerequisites: ['EC127', 'CI207'] },
            { id: 'CI501', name: 'METODOLOGIA DE LA INVESTIGACION', prerequisites: ['FACE201'] },
            { id: 'CI502', name: 'PROCESOS DE IMPORTACION I', prerequisites: ['CI401'] },
            { id: 'CI503', name: 'TRANSPORTE Y PUERTO', prerequisites: ['CI402'] },
        ]
    },
    {
        semester: 6,
        subjects: [
            { id: 'CI602', name: 'CADENA DE DISTRIBUCION', prerequisites: ['CI503'] },
            { id: 'CI302', name: 'DERECHO COMERCIAL E INTERNACIONAL', prerequisites: ['CI401'] },
            { id: 'CI603', name: 'FORMULACION Y EVALUACION DE PROYECTOS', prerequisites: ['EC108'] },
            { id: 'CI604', name: 'INTERNATIONAL FINANCIAL MARKETS', prerequisites: ['CI508', 'EC127', 'EC108'] },
            { id: 'CI601', name: 'PROCESOS DE IMPORTACION II', prerequisites: ['CI502'] },
        ]
    },
    {
        semester: 7,
        subjects: [
            { id: 'UPC08', name: 'ACTIVIDAD DEPORTIVA', prerequisites: [] },
            { id: 'CI703', name: 'E-BUSINESS (VIRTUAL)', prerequisites: ['CI508', 'CI119'] },
            { id: 'HT503', name: 'ELECTIVA I (COMPET. COMUNICATIVAS E IDIOMATICAS)', prerequisites: ['CI508'] },
            { id: 'CI120', name: 'MONEDA Y CREDITO INTERNACIONAL', prerequisites: ['CI604'] },
            { id: 'CI707', name: 'OPTATIVA DE PROFUNDIZACION', prerequisites: ['CI508'] },
            { id: 'CI702', name: 'PROCESOS DE EXPORTACION', prerequisites: ['CI502'] },
        ]
    },
    {
        semester: 8,
        subjects: [
            { id: 'CI808_1', name: 'ELECTIVA II', prerequisites: [] }, // Se cambió ID para evitar duplicado
            { id: 'CI809', name: 'ELECTIVA II (COMPET. COMUNICATIVAS E IDIOMATICAS)', prerequisites: ['HT503'] },
            { id: 'CI807', name: 'INTERNATIONAL PUBLIC RELATIONS AND PROTOCOL', prerequisites: ['CI508'] },
            { id: 'CI802_PLAN', name: 'PLAN DE NEGOCIOS DE EXPORTACION', prerequisites: ['CI803'] }, // Se cambió ID para evitar duplicado
            { id: 'CI132', name: 'PRECIOS Y COTIZACION INTERNACIONAL', prerequisites: ['CI120'] },
        ]
    },
    {
        semester: 9,
        subjects: [
            { id: 'UPC09', name: 'ACTIVIDAD CULTURAL', prerequisites: [] },
            { id: 'CEDI_B1', name: 'COMPETENCIAS EN INGLES B1', prerequisites: [] }, // Se cambió ID para evitar duplicado
            { id: 'CI808_2', name: 'ELECTIVA II', prerequisites: [] }, // Se cambió ID para evitar duplicado (confirmar si es la misma que CI808_1)
            { id: 'CI803', name: 'FINANZAS INTERNACIONALES', prerequisites: ['CI132'] },
            { id: 'CI135', name: 'LEGISLACION ADUANERA Y TRIBUTARIA', prerequisites: ['CI702'] },
            { id: 'CI801', name: 'PROYECTO DE INVESTIGACION', prerequisites: ['CI501'] },
            { id: 'CI802_REGIMEN', name: 'REGIMEN DE CAMBIOS INTERNACIONALES', prerequisites: ['CI801'] }, // Se cambió ID para evitar duplicado
        ]
    },
    {
        semester: 10,
        subjects: [
            { id: 'CEDI_B2', name: 'COMPETENCIAS EN INGLES B2', prerequisites: ['CEDI_B1'] }, // Se cambió ID para evitar duplicado
            { id: 'CI105', name: 'PRACTICA EMPRESARIAL CURRICULAR', prerequisites: ['CI508'] },
        ]
    }
];


// 2. Estado global para almacenar las materias aprobadas
let approvedSubjects = new Set(); // Usamos un Set para un acceso y manejo eficiente de IDs únicos.

// 3. Referencias a elementos del DOM
const curriculumGrid = document.getElementById('curriculum-grid');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message-text');
const closeMessageButton = document.getElementById('close-message');

// 4. Función para cargar las materias aprobadas desde localStorage
function loadApprovedSubjects() {
    const storedSubjects = localStorage.getItem('approvedSubjects');
    if (storedSubjects) {
        // Convertimos la cadena JSON de vuelta a un Set
        approvedSubjects = new Set(JSON.parse(storedSubjects));
    }
}

// 5. Función para guardar las materias aprobadas en localStorage
function saveApprovedSubjects() {
    // Convertimos el Set a un array para poder guardarlo como JSON
    localStorage.setItem('approvedSubjects', JSON.stringify(Array.from(approvedSubjects)));
}

// 6. Función para verificar si una materia tiene todos sus requisitos cumplidos
function hasMetPrerequisites(subjectId) {
    // Encontrar la materia en la estructura de datos
    const subject = curriculum.flatMap(s => s.subjects).find(sub => sub.id === subjectId);

    if (!subject) {
        console.warn(`Materia con ID ${subjectId} no encontrada.`);
        return false; // Si la materia no existe, no puede cumplir requisitos
    }

    // Verificar cada prerrequisito
    for (const prereqId of subject.prerequisites) {
        if (!approvedSubjects.has(prereqId)) {
            // Si falta algún prerrequisito, retornamos falso inmediatamente
            return false;
        }
    }
    // Si todos los prerrequisitos están en el conjunto de aprobados, retornamos verdadero
    return true;
}

// 7. Función para obtener los nombres de los requisitos faltantes
function getMissingPrerequisitesNames(subjectId) {
    const subject = curriculum.flatMap(s => s.subjects).find(sub => sub.id === subjectId);
    if (!subject) return [];

    const missing = [];
    for (const prereqId of subject.prerequisites) {
        if (!approvedSubjects.has(prereqId)) {
            // Encontrar el nombre de la materia requisito
            const prereqSubject = curriculum.flatMap(s => s.subjects).find(sub => sub.id === prereqId);
            missing.push(prereqSubject ? prereqSubject.name : `ID: ${prereqId}`);
        }
    }
    return missing;
}

// 8. Función para mostrar el mensaje de requisitos faltantes
function showMessageBox(missingSubjects) {
    messageText.innerHTML = `Para aprobar este ramo, debes aprobar primero los siguientes:
    <ul class="list-disc list-inside mt-2 space-y-1">
        ${missingSubjects.map(name => `<li class="text-gray-800 dark:text-gray-200">${name}</li>`).join('')}
    </ul>`;
    messageBox.classList.add('active'); // Muestra el mensaje
    messageBox.classList.remove('hidden'); // Asegura que se muestre (para Tailwind)
}

// 9. Función para ocultar el mensaje de requisitos
function hideMessageBox() {
    messageBox.classList.remove('active'); // Oculta el mensaje
    messageBox.classList.add('hidden'); // Asegura que se oculte (para Tailwind)
}

// 10. Función para renderizar (dibujar/actualizar) la malla curricular en el DOM
function renderCurriculum() {
    curriculumGrid.innerHTML = ''; // Limpiar el contenido actual para redibujar

    curriculum.forEach(semesterData => {
        // Crear el contenedor para cada columna de semestre
        const semesterColumn = document.createElement('div');
        semesterColumn.classList.add('semester-column', 'flex', 'flex-col', 'gap-4', 'p-2', 'rounded-lg'); // Añadir clases de Tailwind

        // Crear el encabezado del semestre
        const semesterHeader = document.createElement('h2');
        semesterHeader.classList.add('semester-header', 'text-lg', 'sticky', 'top-0', 'z-10'); // Clases para estilo y sticky
        semesterHeader.textContent = `Semestre ${semesterData.semester}`;
        semesterColumn.appendChild(semesterHeader);

        // Crear las tarjetas de materias para este semestre
        semesterData.subjects.forEach(subject => {
            const subjectCard = document.createElement('div');
            subjectCard.classList.add('subject-card'); // Clase base para la tarjeta
            subjectCard.dataset.id = subject.id; // Almacenar el ID de la materia en un atributo de datos

            // Verificar si la materia está aprobada
            if (approvedSubjects.has(subject.id)) {
                subjectCard.classList.add('approved');
            }

            // Verificar si la materia está bloqueada (requisitos no cumplidos)
            if (!hasMetPrerequisites(subject.id) && !approvedSubjects.has(subject.id)) {
                subjectCard.classList.add('locked');
            }

            subjectCard.textContent = subject.name; // Mostrar el nombre de la materia

            // Añadir el evento click a cada tarjeta de materia
            subjectCard.addEventListener('click', () => {
                toggleSubjectStatus(subject.id);
            });

            semesterColumn.appendChild(subjectCard);
        });

        curriculumGrid.appendChild(semesterColumn);
    });
}

// 11. Función para alternar el estado de aprobación de una materia
function toggleSubjectStatus(subjectId) {
    // Si la materia ya está aprobada, la desaprobamos
    if (approvedSubjects.has(subjectId)) {
        // Antes de desaprobar, verificar si otras materias dependen de esta.
        // Si hay dependencias aprobadas, no se puede desaprobar esta materia.
        const dependentSubjects = curriculum.flatMap(s => s.subjects).filter(sub =>
            sub.prerequisites.includes(subjectId) && approvedSubjects.has(sub.id)
        );

        if (dependentSubjects.length > 0) {
            const dependentNames = dependentSubjects.map(s => s.name).join(', ');
            showMessageBox([`No puedes desaprobar "${curriculum.flatMap(s => s.subjects).find(sub => sub.id === subjectId).name}" porque las siguientes materias dependen de ella y ya están aprobadas: ${dependentNames}. Desaprueba esas primero.`]);
            return;
        }

        approvedSubjects.delete(subjectId); // Remover del conjunto de aprobadas
        saveApprovedSubjects(); // Guardar el cambio
        renderCurriculum(); // Volver a dibujar la malla
        return; // Salir de la función
    }

    // Si la materia no está aprobada, intentamos aprobarla
    if (hasMetPrerequisites(subjectId)) {
        approvedSubjects.add(subjectId); // Añadir al conjunto de aprobadas
        saveApprovedSubjects(); // Guardar el cambio
        renderCurriculum(); // Volver a dibujar la malla
    } else {
        // Si los requisitos no se cumplen, mostrar el mensaje
        const missing = getMissingPrerequisitesNames(subjectId);
        showMessageBox(missing);
    }
}

// 12. Event Listener para el botón de cerrar el mensaje
closeMessageButton.addEventListener('click', hideMessageBox);

// 13. Función para inicializar la aplicación
function initializeCurriculum() {
    loadApprovedSubjects(); // Cargar el estado guardado
    renderCurriculum(); // Dibujar la malla con el estado inicial
}

// 14. Ejecutar la inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeCurriculum);

// Opcional: Implementación de un botón para cambiar el tema (modo oscuro/claro)
// Puedes agregar un botón en el index.html con un ID como 'theme-toggle'
// <button id="theme-toggle" class="theme-toggle-button">Modo Oscuro</button>
// Y luego añadir el siguiente JavaScript:

/*
const themeToggleButton = document.createElement('button');
themeToggleButton.id = 'theme-toggle';
themeToggleButton.classList.add('theme-toggle-button');
themeToggleButton.textContent = 'Modo Oscuro';
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
});

// Cargar el tema guardado al iniciar
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggleButton.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('dark');
        themeToggleButton.textContent = 'Modo Oscuro';
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);
*/
