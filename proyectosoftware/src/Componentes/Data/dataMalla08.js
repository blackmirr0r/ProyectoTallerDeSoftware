const malla_2008 =
[
    {
        num_sem: 1,
        ramos:
            [
                {
                    id: 0,
                    sem: 1,
                    nombre: "Álgebra para Ingeniería",
                    codigo: "BAIN017",
                    creditos: 6,
                    tasa_repr: 0.34,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 1,
                    sem: 1,
                    nombre: "Geometría para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.32,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 2,
                    sem: 1,
                    nombre: "Introducción a la programación",
                    codigo: "INFO013",
                    creditos: 4,
                    tasa_repr: 0.99,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 3,
                    sem: 1,
                    nombre: "Comunicación: Idioma Español",
                    codigo: "BAIN009",
                    creditos: 4,
                    tasa_repr: 0.07,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 4,
                    sem: 1,
                    nombre: "Quimica para Ingeniería",
                    codigo: "BAIN019",
                    creditos: 4,
                    tasa_repr: 0.31,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 5,
                    sem: 1,
                    nombre: "Educación Fisica y Salud",
                    codigo: "DYRE060",
                    creditos: 4,
                    tasa_repr: 0.,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 6,
                    sem: 1,
                    nombre: "Taller de Ingeniería I",
                    codigo: "INFO015",
                    creditos: 4,
                    tasa_repr: 0.105,
                    requisitos: [],
                    descripcion: ""
                }

            ]
    },
    {
        num_sem: 2,
        ramos:
            [
                {
                    id: 7,
                    sem: 2,
                    nombre: "Cálculo I para Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: ['Álgebra para Ingeniería'],
                    descripcion: ""
                },
                {
                    id: 8,
                    sem: 2,
                    nombre: "Física I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: ["Álgebra para Ingeniería","Geometría para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 9,
                    sem: 2,
                    nombre: "Programación",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: ["Introducción a la programación"],
                    descripcion: ""
                },
                {
                    id: 10,
                    sem: 2,
                    nombre: "Algebra Lineal para Ingeniería",
                    codigo: "BAIN036",
                    creditos: 5,
                    tasa_repr: 0.47,
                    requisitos: ["Álgebra para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 11,
                    sem: 2,
                    nombre: "Taller de Ingeniería II",
                    codigo: "INFO025",
                    creditos: 4,
                    tasa_repr: 0.05,
                    requisitos: ["Álgebra para Ingeniería","Geometría para Ingeniería","Taller de Ingeniería I"],
                    descripcion: ""
                },
                {
                    id: 12,
                    sem: 2,
                    nombre: "Comunicación: Idioma Inglés",
                    codigo: "BAIN039",
                    creditos: 4,
                    tasa_repr: 0.205,
                    requisitos: [],
                    descripcion: ""
                },
            ]
    },
    {
        num_sem: 3,
        ramos:
            [
                {
                    id: 13,
                    sem: 3,
                    nombre: "Calculo II para Ingeniería",
                    codigo: "BAIN042",
                    creditos: 5,
                    tasa_repr: 0.45,
                    requisitos: ["Cálculo I para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 14,
                    sem: 3,
                    nombre: "Física 2 para Ingeniería",
                    codigo: "BAIN043",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: ["Cálculo I para Ingeniería","Física I para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 15,
                    sem: 3,
                    nombre: "Ecuaciones Diferenciales para Ingeniería",
                    codigo: "BAIN041",
                    creditos: 5,
                    tasa_repr: 0.23,
                    requisitos: ["Cálculo I para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 16,
                    sem: 3,
                    nombre: "Estructuras Discretas",
                    codigo: "INFO043",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: ["Algebra Lineal para Ingeniería","Introducción a la programación"],
                    descripcion: ""
                },
                {
                    id: 17,
                    sem: 3,
                    nombre: "Taller de Ingeniería III",
                    codigo: "INFO035",
                    creditos: 4,
                    tasa_repr: 0.99,
                    requisitos: ["Taller de Ingeniería II"],
                    descripcion: ""
                },
                {
                    id: 18,
                    sem: 3,
                    nombre: "Programación Orientada a Objetos",
                    codigo: "INFO033",
                    creditos: 3,
                    tasa_repr: 0.21,
                    requisitos: ["Programación"],
                    descripcion: ""
                },
            ]
    },
    {
        num_sem: 4,
        ramos:
            [
                {
                    id: 19,
                    sem: 4,
                    nombre: "Estadistica y Probabilidades para Ingeniería",
                    codigo: "BAIN052",
                    creditos: 4,
                    tasa_repr: 0.27,
                    requisitos: ["Algebra Lineal para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 20,
                    sem: 4,
                    nombre: "Métodos Númericos para Ingeniería",
                    codigo: "BAIN053",
                    creditos: 4,
                    tasa_repr: 0.41,
                    requisitos: ["Ecuaciones Diferenciales para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 21,
                    sem: 4,
                    nombre: "Fisica III para Ingeniería",
                    codigo: "BAIN054",
                    creditos: 8,
                    tasa_repr: 0.207,
                    requisitos: ["Ecuaciones Diferenciales para Ingeniería","Calculo II para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 22,
                    sem: 4,
                    nombre: "Taller",
                    codigo: "INFO045",
                    creditos: 6,
                    tasa_repr: 0.008,
                    requisitos: ["Calculo II para Ingeniería","Ecuaciones Diferenciales para Ingeniería","Taller de Ingeniería III"],
                    descripcion: ""
                },
                {
                    id: 23,
                    sem: 4,
                    nombre: "Estructuras de Datos y Algoritmos",
                    codigo: "INFO053",
                    creditos: 6,
                    tasa_repr: 0.39,
                    requisitos: ["Estructuras Discretas","Taller de Ingeniería III"],
                    descripcion: ""
                },
                {
                    id: 24,
                    sem: 4,
                    nombre: "Optativo I",
                    codigo: "ELECT01",
                    creditos: 0,
                    tasa_repr: 0,
                    requisitos: [],
                    descripcion: ""
                }
	    ]
        },
	{
        num_sem: 5,
        ramos:
            [
                {
                    id: 25,
                    sem: 5,
                    nombre: "Administración de Empresas",
                    codigo: "ADMI100",
                    creditos: 6,
                    tasa_repr: 0.06,
                    requisitos: ["Comunicación: Idioma Español","Taller de Ingeniería III"],
                    descripcion: ""
                },
                {
                    id: 26,
                    sem: 5,
                    nombre: "Teoría de Automatas",
                    codigo: "INFO164",
                    creditos: 6,
                    tasa_repr: 0.24,
                    requisitos: ["Estructuras de Datos y Algoritmos"],
                    descripcion: ""
                },
                {
                    id: 27,
                    sem: 5,
                    nombre: "Investigación Operativa I",
                    codigo: "INFO172",
                    creditos: 5,
                    tasa_repr: 0.23,
                    requisitos: ["Algebra Lineal para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 28,
                    sem: 5,
                    nombre: "Taller de Construcción de Software",
                    codigo: "INFO175",
                    creditos: 4,
                    tasa_repr: 0.049,
                    requisitos: ["Fisica III para Ingeniería","Estructuras de Datos y Algoritmos"],
                    descripcion: ""
                },
                {
                    id: 29,
                    sem: 5,
                    nombre: "Arquitectura de Computadores",
                    codigo: "INFO184",
                    creditos: 5,
                    tasa_repr: 0.27,
                    requisitos: ["Quimica para Ingeniería","Cálculo I para Ingeniería","Física I para Ingeniería"],
                    descripcion: ""
                }
            ]
    },
    {
        num_sem: 6,
        ramos:
            [
                {
                    id: 30,
                    sem: 6,
                    nombre: "Programación Concurrente",
                    codigo: "INFO163",
                    creditos: 4,
                    tasa_repr: 0.17,
                    requisitos: ["Estructuras de Datos y Algoritmos"],
                    descripcion: ""
                },
                {
                    id: 31,
                    sem: 6,
                    nombre: "Compiladores",
                    codigo: "INFO165",
                    creditos: 5,
                    tasa_repr: 0.22,
                    requisitos: ["Teoría de Automatas"],
                    descripcion: ""
                },
                {
                    id: 32,
                    sem: 6,
                    nombre: "Investigación Operativa II",
                    codigo: "INFO173",
                    creditos: 5,
                    tasa_repr: 0.19,
                    requisitos: ["Calculo II para Ingeniería","Estadistica y Probabilidades para Ingeniería","Investigación Operativa I"],
                    descripcion: ""
                },
                {
                    id: 33,
                    sem: 6,
                    nombre: "Analisis de Sistemas Linales",
                    codigo: "INFO183",
                    creditos: 5,
                    tasa_repr: 0.27,
                    requisitos: ["Ecuaciones Diferenciales para Ingeniería","Arquitectura de Computadores"],
                    descripcion: ""
                },
                {
                    id: 34,
                    sem: 6,
                    nombre: "Base de Datos",
                    codigo: "INFO261",
                    creditos: 6,
                    tasa_repr: 0.13,
                    requisitos: ["Teoría de Automatas"],
                    descripcion: ""
                },
                 {
                    id: 35,
                    sem: 6,
                    nombre: "Computación Gráfica",
                    codigo: "INFO265",
                    creditos: 6,
                    tasa_repr: 0.03,
                    requisitos: ["Taller de Ingeniería III","Estructuras de Datos y Algoritmos"],
                    descripcion: ""
                },
            ]
    },
    {
        num_sem: 7,
        ramos:
            [
                {
                    id: 36,
                    sem: 7,
                    nombre: "Economía General",
                    codigo: "IECO102",
                    creditos: 4,
                    tasa_repr: 0.12,
                    requisitos: ["Taller de Ingeniería III","Calculo II para Ingeniería"],
                    descripcion: ""
                },
                {
                    id: 37,
                    sem: 7,
                    nombre: "Sistemas Operativos",
                    codigo: "INFO182",
                    creditos: 4,
                    tasa_repr: 0.21,
                    requisitos: ["Programación Concurrente"],
                    descripcion: ""
                },
                {
                    id: 38,
                    sem: 7,
                    nombre: "Comunicaciones",
                    codigo: "INFO185",
                    creditos: 6,
                    tasa_repr: 0.05,
                    requisitos: ["Calculo II para Ingeniería","Estadistica y Probabilidades para Ingeniería","Arquitectura de Computadores"],
                    descripcion: ""
                },
                {
                    id: 39,
                    sem: 7,
                    nombre: "Software de Ingeniería",
                    codigo: "INFO189",
                    creditos: 4,
                    tasa_repr: 0.12,
                    requisitos: ["Física 2 para Ingeniería","Métodos Númericos para Ingeniería","Taller","Analisis de Sistemas Linales"],
                    descripcion: ""
                },
                {
                    id: 40,
                    sem: 7,
                    nombre: "Fundamentos de Ingeniería de Software",
                    codigo: "INFO263",
                    creditos: 5,
                    tasa_repr: 0.08,
                    requisitos: ["Administración de Empresas","Taller de Construcción de Software"],
                    descripcion: ""
                },
                 {
                    id: 41,
                    sem: 7,
                    nombre: "Ingeniería de Sistemas",
                    codigo: "INFO270",
                    creditos: 4,
                    tasa_repr: 0.12,
                    requisitos: ["Teoría de Automatas"],
                    descripcion: ""
                },
            ]
    },
    {
        num_sem: 8,
        ramos:
            [
                {
                    id: 42,
                    sem: 8,
                    nombre: "Taller de Ingeniería de Software",
                    codigo: "INFO264",
                    creditos: 6,
                    tasa_repr: 0.03,
                    requisitos: ["Taller de Ingeniería III","Base de Datos","Fundamentos de Ingeniería de Software"],
                    descripcion: ""
                },
                {
                    id: 43,
                    sem: 8,
                    nombre: "Interfaz Humano-Computador",
                    codigo: "INFO266",
                    creditos: 6,
                    tasa_repr: 0.04,
                    requisitos: ["Fundamentos de Ingeniería de Software"],
                    descripcion: ""
                },
                {
                    id: 44,
                    sem: 8,
                    nombre: "Sistemas de Información",
                    codigo: "INFO271",
                    creditos: 4,
                    tasa_repr:0.03,
                    requisitos: ["Administración de Empresas","Economía General","Ingeniería de Sistemas"],
                    descripcion: ""
                },
                {
                    id: 45,
                    sem: 8,
                    nombre: "Ingeniería Económica",
                    codigo: "INFO272",
                    creditos: 4,
                    tasa_repr: 0.14,
                    requisitos: ["Investigación Operativa II","Economía General"],
                    descripcion: ""
                },
                {
                    id: 46,
                    sem: 8,
                    nombre: "Redes",
                    codigo: "INFO281",
                    creditos: 6,
                    tasa_repr: 0.13,
                    requisitos: ["Sistemas Operativos","Comunicaciones"],
                    descripcion: ""
                },
                 {
                    id: 47,
                    sem: 8,
                    nombre: "Taller de Integración de TIC",
                    codigo: "INFO284",
                    creditos: 6,
                    tasa_repr: 0.03,
                    requisitos: ["Fisica III para Ingeniería","Taller de Construcción de Software","Analisis de Sistemas Linales"],
                    descripcion: ""
                },
                ]
            },
        {
        num_sem: 9,
        ramos:
            [
                {
                    id: 48,
                    sem: 9,
                    nombre: "Inglés Funcional",
                    codigo: "CIDI108",
                    creditos: 4,
                    tasa_repr: 0.05,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 49,
                    sem: 9,
                    nombre: "Práctica Profesional",
                    codigo: "EICI297",
                    creditos: 8,
                    tasa_repr: 0,
                    requisitos: ["Taller de Ingeniería de Software","Interfaz Humano-Computador","Sistemas de Información","Ingeniería Económica","Redes","Taller de Integración de TIC"],
                    descripcion: ""
                },
                {
                    id: 50,
                    sem: 9,
                    nombre: "Optativo Profesional I",
                    codigo: "ELECT02",
                    creditos: 0,
                    tasa_repr: 0,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 51,
                    sem: 9,
                    nombre: "Seminario de Ética Profesional",
                    codigo: "INFO251",
                    creditos: 2,
                    tasa_repr: 0,
                    requisitos: ["Taller de Ingeniería de Software","Ingeniería Económica","Redes"],
                    descripcion: ""
                },
                {
                    id: 52,
                    sem: 9,
                    nombre: "Proyecto I",
                    codigo: "INFO252",
                    creditos: 4,
                    tasa_repr: 0.03,
                    requisitos: ["Taller de Ingeniería de Software","Ingeniería Económica","Sistemas de Información"],
                    descripcion: ""
                },
                 {
                    id: 53,
                    sem: 9,
                    nombre: "Taller de Base de Datos",
                    codigo: "INFO268",
                    creditos: 4,
                    tasa_repr: 0.008,
                    requisitos: ["Taller de Ingeniería de Software"],
                    descripcion: ""
                },
                {
                    id: 54,
                    sem: 9,
                    nombre: "Evaluación de Desempeño",
                    codigo: "INFO273",
                    creditos: 5,
                    tasa_repr: 0.025,
                    requisitos: ["Investigación Operativa II","Sistemas Operativos","Redes"],
                    descripcion: ""
                },
                {
                    id: 55,
                    sem: 9,
                    nombre: "Sistemas de Gestión Estrategicos",
                    codigo: "INFO275",
                    creditos: 5,
                    tasa_repr: 0.025,
                    requisitos: ["Administración de Empresas","Ingeniería de Sistemas","Ingeniería Económica"],
                    descripcion: ""
                },
            ]
    },
    {
        num_sem: 10,
        ramos:
            [
             {
                    id: 56,
                    sem: 10,
                    nombre: "Taller de Software-Proyecto Integración de TIC",
                    codigo: "EICI245",
                    creditos: 5,
                    tasa_repr: 0,
                    requisitos: ["Software de Ingeniería","Taller de Ingeniería de Software","Interfaz Humano-Computador","Redes","Taller de Integración de TIC"],
                    descripcion: ""
                },
                {
                    id: 57,
                    sem: 10,
                    nombre: "Arquitectura de Sistemas",
                    codigo: "EICI246",
                    creditos: 6,
                    tasa_repr: 0.07,
                    requisitos: ["Sistemas de Información","Sistemas de Gestión Estrategicos","Taller de Ingeniería de Software","Redes","Taller de Integración de TIC"],
                    descripcion: ""
                },
                {
                    id: 58,
                    sem: 10,
                    nombre: "Realidad Tecnológica Nacional",
                    codigo: "EICI247",
                    creditos: 2,
                    tasa_repr: 0,
                    requisitos: ["Taller de Ingeniería de Software","Ingeniería Económica","Redes"],
                    descripcion: ""
                },
                {
                    id: 59,
                    sem: 10,
                    nombre: "Inteligencia Artificial",
                    codigo: "INFO267",
                    creditos: 6,
                    tasa_repr: 0.09,
                    requisitos: ["Taller de Construcción de Software"],
                    descripcion: ""
                },
                {
                    id: 60,
                    sem: 10,
                    nombre: "Simulación",
                    codigo: "INFO274",
                    creditos: 4,
                    tasa_repr: 0.04,
                    requisitos: ["Investigación Operativa II"],
                    descripcion: ""
                },
                {
                    id: 61,
                    sem: 10,
                    nombre: "Sistema de Gestión Tácticos",
                    codigo: "INFO276",
                    creditos: 4,
                    tasa_repr: 0.008,
                    requisitos: ["Administración de Empresas","Ingeniería de Sistemas","Ingeniería Económica"],
                    descripcion: ""
                },
         ]
    },
    {
        num_sem: 11,
        ramos:
            [
                {
                    id: 62,
                    sem: 11,
                    nombre: "Administración de TIC",
                    codigo: "EICI255",
                    creditos: 6,
                    tasa_repr: 0.05,
                    requisitos: ["Taller de Software-Proyecto Integración de TIC","Arquitectura de Sistemas","Sistema de Gestión Tácticos"],
                    descripcion: ""
                },
                {
                    id: 63,
                    sem: 11,
                    nombre: "Estrategia y Sistemas",
                    codigo: "EICI261",
                    creditos: 6,
                    tasa_repr: 0,
                    requisitos: ["Arquitectura de Sistemas","Sistema de Gestión Tácticos"],
                    descripcion: ""
                },
                {
                    id: 64,
                    sem: 11,
                    nombre: "Proyecto de Titulo",
                    codigo: "EICI298",
                    creditos: 6,
                    tasa_repr: 0,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 65,
                    sem: 11,
                    nombre: "Optativo Profesional II",
                    codigo: "ELEC21",
                    creditos: 0,
                    tasa_repr: 0,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 66,
                    sem: 11,
                    nombre: "Optativo Profesional III",
                    codigo: "ELEC22",
                    creditos: 0,
                    tasa_repr: 0.13,
                    requisitos: [],
                    descripcion: ""
                },
                {
                    id: 67,
                    sem: 11,
                    nombre: "AnteProyecto de Titulo",
                    codigo: "INFO253",
                    creditos: 4,
                    tasa_repr: 0.03,
                    requisitos: ["Taller de Software-Proyecto Integración de TIC","Arquitectura de Sistemas","Sistema de Gestión Tácticos"],
                    descripcion: ""
                },
        ]
    },
];

export default malla_2008;
