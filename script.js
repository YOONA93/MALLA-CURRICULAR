// script.js

// 1. Definición de la estructura de datos de la malla curricular
// Cada semestre es un objeto con un 'semester' (número) y 'subjects' (un array de materias).
// Cada materia tiene un 'id' (código único), 'name' (nombre completo), y 'prerequisites' (un array de IDs de materias).
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
            { id: 'CEDI_A2', name: 'COMPETENCIAS EN INGLES A2', prerequisites: [] }, // ID ajustado de CEDI A2
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
            { id: 'CI808_S8', name: 'ELECTIVA II', prerequisites: [] }, // ID ajustado para ser único en S8
            { id: 'CI809', name: 'ELECTIVA II (COMPET. COMUNICATIVAS E IDIOMATICAS)', prerequisites: ['HT503'] },
            { id: 'CI807', name: 'INTERNATIONAL PUBLIC RELATIONS AND PROTOCOL', prerequisites: ['CI508'] },
            { id: 'CI802_PLAN', name: 'PLAN DE NEGOCIOS DE EXPORTACION', prerequisites: ['CI803'] }, // ID ajustado
            { id: 'CI132', name: 'PRECIOS Y COTIZACION INTERNACIONAL', prerequisites: ['CI120'] },
        ]
    },
    {
        semester: 9,
        subjects: [
            { id: 'UPC09', name: 'ACTIVIDAD CULTURAL', prerequisites: [] },
            { id: 'CEDI_B1', name: 'COMPETENCIAS EN INGLES B1', prerequisites: [] }, // ID ajustado de CEDI B1
            { id: 'CI808_S9', name: 'ELECTIVA II', prerequisites: [] }, // ID ajustado para ser único en S9 (asumiendo que es una electiva diferente a la de S8)
            { id: 'CI803', name: 'FINANZAS INTERNACIONALES', prerequisites: ['CI132'] },
            { id: 'CI135', name: 'LEGISLACION ADUANERA Y TRIBUTARIA', prerequisites: ['CI702'] },
            { id: 'CI801', name: 'PROYECTO DE INVESTIGACION', prerequisites: ['CI501'] },
            { id: 'CI802_REGIMEN', name: 'REGIMEN DE CAMBIOS INTERNACIONALES', prerequisites: ['CI801'] }, // ID ajustado
        ]
    },
    {
        semester: 10,
        subjects: [
            { id: 'CEDI_B2', name: 'COMPETENCIAS EN INGLES B2', prerequisites: ['CEDI_B1'] }, // ID ajustado
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
    // Encontrar la materia en la estructura de datos. flatMap recorre todos los subjects de todos los semestres.
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
            // Encontrar el nombre de la materia requisito usando su ID
            const prereqSubject = curriculum.flatMap(s => s.subjects).find(sub => sub.id === prereqId);
            missing.push(prereqSubject ? prereqSubject.name : `Materia desconocida (ID: ${prereqId})`);
        }
    }
    return missing;
}

// 8. Función para mostrar el mensaje de requisitos faltantes
function showMessageBox(messages) {
    // 'messages' puede ser un array de strings (para requisitos) o un solo string para otros avisos.
    let content = '';
    if (Array.isArray(messages)) {
        // Si son requisitos faltantes
        content = `Para aprobar este ramo, debes aprobar primero los siguientes:
        <ul class="list-disc list-inside mt-2 space-y-1">
            ${messages.map(name => `<li class="text-gray-
