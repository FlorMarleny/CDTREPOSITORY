const checkSymbol = "\u2713";

export const programaPerfil = {
  id: 2,
  nombre: "Programas por Perfil",
  subprogramas: [
    {
      id: 1,

      // datos de texto
      textocontenidocurso: "Contenido del curso",
      textaprender: "Lo que aprenderás",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      textmetodologia: "Metodología del Curso:",
      textnivel: "Nivel:",
      textarea: "Área de capacitación:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      iconoMetodologia: "👨‍🏫",
      iconoNivel: "⬆️",
      iconoArea: "👩‍💻",
      // FIN DE ICONS

      // SISTEMA DE EVALUACION
      tituloSistema: "Sistema de Evaluación ",
      tabla: [
        {
          tdSistema: "Teoría",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "Práctica",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Diseño y Desarrollo de Emprendimientos",
      imagen: "src/img/dd-emprendimientos.png",
      texto:
        "Programa Emprendimiento: creatividad, valores, creación empresas, crecimiento local y regional.",

      horasAcademicas: "40 Horas Académicas",
      descripcion:
        "El emprendimiento en la actualidad está muy en boga en diversos ámbitos. Para comenzar el emprendimiento, se pone en práctica la creatividad y todos los saberes que la persona quiera explorar. Además, los valores como la perseverancia, determinación y disciplina son claves si se desea lograr el éxito con el emprendimiento. El Programa de Diseño y Desarrollo de Emprendimientos tiene como propósito aportar al crecimiento, competitividad y desarrollo local y regional, por medio de la promoción del emprendimiento, la instalación de capacidades, la co-creación y transferencia de soluciones sustentables y la creación de nuevas empresas de valor.",

      contenido1: [
        "Cultura emprendedora",
        [
          "Plan de vida emprendedora",
          "Identificación de oportunidades de negocio",
          "Modelo de negocio",
        ],
      ],
      contenido2: [
        "Herramientas emprendedoras",
        [
          "Exploración de mercados",
          "Herramientas de marketing",
          "Marketing digital",
          "Análisis técnico",
        ],
      ],
      contenido3: [
        "Proyecto empresarial",
        [
          "Análisis financiero",
          "Asesoría legal y tributaria",
          "Propiedad intelectual",
          "Taller de elaboración del modelo de negocio",
          "Taller de elaboración del plan de negocio",
        ],
      ],

      capacitado: [
        "Identificar los elementos para la creación del emprendimiento",
        "Transformar modelos de negocios a un emprendimiento con valor",
        "Diseñar y Desarrollar un emprendimiento",
      ],

      requisitos: ["Conocimiento intermedio de Excel"],
      dirigido: "Personas que requieran desarrollar un emprendimiento ",
      metodologia: "Teórico - Práctico",
      nivel: "Básico - Intermedio",
      especialidad: " ",
      area: "Tecnología Digital y Gestión",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 2,

      // datos de texto
      textocontenidocurso: "Contenido del curso",
      textaprender: "Lo que aprenderás",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      textnivel: "Nivel:",
      textespecialidad: "Especialidad:",
      textarea: "Área de capacitación:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      iconoNivel: "⬆️",
      iconoEspecialidad: "✏️",
      iconoArea: "👩‍💻",
      // FIN DE ICONS

      // SISTEMA DE EVALUACION
      tituloSistema: "Sistema de Evaluación ",
      tabla: [
        {
          tdSistema: "1",
          tdSistemaConte: "Prácticas Calificadas",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Exámen de Media Sesiones",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "3",
          tdSistemaConte: "Proyecto Final",
          tdSistemaPorcent: " 35%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Ofimática Profesional",
      imagen: "src/img/o-profesional.png",
      texto:
        "Especialista Ofimática Profesional: dominio Word, Excel, PowerPoint (versión 2019). Incrementa productividad, colaboración.",

      horasAcademicas: "48 Horas Académicas",
      descripcion:
        "El especialista en Ofimática Profesional tiene formación integral en el manejo de la computadora y las herramientas de oficina lo cual le permite desenvolverse e incrementar su productividad y colaboración en las diversas áreas de una organización, facilitando la simplificación, mejora y automatización de las actividades, con un nivel de exigencia acorde a los estándares internacionales. Con el programa de Ofimática, conocerás fundamentos y dominarás las principales herramientas de Microsoft Word, Excel y PowerPoint en la última versión 2019, potenciando así tus competencias digitales.	",

      contenido1: [
        "Generalidades y manejo de sistema operativo",
        [
          "Conceptos básicos de la informática",
          "Manejo de carpetas y archivos",
          "Novedades Windows 10",
        ],
      ],
      contenido2: [
        "Introducción a la tecnología de la información",
        [
          "Aplicación de las TIC en la educación",
          "Redes, conectividad y correo electrónico",
          "Herramientas colaborativas de Google 1",
          "Herramientas colaborativas de Google 2",
        ],
      ],
      contenido3: [
        "Conociendo Word 2021",
        [
          "Introducción a Word y nueva interfaz",
          "Cómo abrir, guardar, exportar e imprimir documentos en Word",
          "Manejo de documentos básicos en Word",
          "Vistas en Word",
        ],
      ],
      contenido4: [
        "Word nivel intermedio",
        [
          "Creación de tablas y listas enumeradas",
          "Dar formato y estilo a una tabla",
          "Ficha insertar: tablas; formas; encabezado; pie de página y SmartArt",
          "Ficha diseño de página: configuración de página y párrafo",
          "Ficha referencia: tabla de contenido, tablas de ilustraciones, notas, citas y bibliografía",
          "Elaboración de formatos",
        ],
      ],
      contenido5: [
        "Excel básico - intermedio",
        [
          "Interfaz de Excel",
          "Ingreso de datos y formato de celdas",
          "Fórmulas básicas con operadores matemáticos",
          "Funciones básicas: de texto, matemáticas, estadísticas, lógicas y de búsqueda",
          "Validación de datos y formatos condicionales",
          "Vista, impresión y exportación del libro Excel",
          "Elaboración de plantillas: búsqueda y consulta, reportes con gráficos estadísticos",
          "Gráficos en Excel",
          "Introducción a las tablas dinámicas",
        ],
      ],
      contenido6: [
        "Presentaciones de diapositivas",
        [
          "Interfaz Powerpoint",
          "Ficha insertar: texto, imágenes, sonidos y botones de acción",
          "Ficha animaciones y transiciones",
          "Ficha diseño: formatos y temas en diapositivas",
          "Cómo hacer un video en Powerpoint",
          "Introducción a Prezi: inserción de contenido y animación de elementos",
          "Diseño de presentaciones de alto impacto: plantillas ppt",
        ],
      ],

      capacitado: [
        "Dominar los principales periféricos del computador, además podrá navegar con facilidad por el entorno Microsoft Windows, internet, manejo de archivos y carpetas.",
        "Elaborar documentos y formatos en word y excel.",
        "Crear plantillas como: registros, reportes y cuadros de mando;además en ellas utilizar fórmulas eficientemente para la gestion de datos.",
        "Diseñar contenido audiovisual de alto impacto para elaborar presentaciones de forma eficaz.",
      ],

      requisitos: ["Ningún requisito"],
      dirigido: "Trabajadores Dependientes",
      metodologia: " ",
      nivel: "Básico e intermedio",
      especialidad: "Tecnologías de la Información",
      area: "Gestión y Productividad",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 3,

      // datos de texto
      textocontenidocurso: "Contenido del curso",
      textaprender: "Lo que aprenderás",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      textmetodologia: "Metodología del Curso:",
      textnivel: "Nivel:",
      textespecialidad: "Especialidad:",
      textarea: "Área de capacitación:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      iconoMetodologia: "👨‍🏫",
      iconoNivel: "⬆️",
      iconoEspecialidad: "✏️",
      iconoArea: "👩‍💻",
      // FIN DE ICONS

      // SISTEMA DE EVALUACION
      tituloSistema: "Sistema de Evaluación ",
      tabla: [
        {
          tdSistema: "Examen",
          tdSistemaPorcent: " 40%",
        },
        {
          tdSistema: "Prom. Aula",
          tdSistemaPorcent: "0%",
        },
        {
          tdSistema: "Prom. Lab/Taller",
          tdSistemaPorcent: " 60%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Implementación del sistema de gestión de SST",
      imagen: "src/img/ss-trabajo.png",
      texto:
        "Programa Seguridad y Salud en el Trabajo: implementación sistemas gestión.",
      horasAcademicas: "48 Horas Académicas",
      descripcion:
        "La competitividad actual exige a las organizaciones estar preparadas y mantener una cultura de prevención, así como cumplir con la normativa legal vigente a fin de salvaguardar la seguridad y salud de sus colaboradores. El programa tiene como propósito principal desarrollar en el participante competencias relacionadas a la implementación de un sistema de gestión de seguridad y salud en el trabajo. ",

      contenido1: [
        "Interpretación de la normativa nacional",
        ["Contenido sin elementos visuales"],
      ],
      contenido2: [
        "Política, objetivos, metas e indicadores",
        ["Contenido sin elementos visuales"],
      ],
      contenido3: [
        "Elección y conformación del CSST",
        ["Contenido sin elementos visuales"],
      ],
      contenido4: [
        "Planes y programas de SST",
        ["Contenido sin elementos visuales"],
      ],
      contenido5: [
        "Procedimientos de control administrativo",
        ["Contenido sin elementos visuales"],
      ],
      contenido6: [
        "Procedimientos de control operacional",
        ["Contenido sin elementos visuales"],
      ],
      contenido7: [
        "Registros del sistema de gestión ",
        ["Contenido sin elementos visuales"],
      ],
      contenido8: ["Mapa de riesgos ", ["Contenido sin elementos visuales"]],
      contenido9: [
        "Plan de respuesta ante emergencias ",
        ["Contenido sin elementos visuales"],
      ],

      capacitado: [
        "Conocer los requisitos de un sistema de gestión de seguridad y salud en el trabajo.",
        "Diseñar un sistema de gestion de seguridad y salud en el trabajo.",
        "Elaborar documentos y registros del sistema de gestión de SST.",
      ],

      requisitos: ["Programa de seguridad y salud en el trabajo"],
      dirigido: "Trabajadores Dependientes",
      metodologia: "Teórico - Práctico",
      nivel: "Básico - Intermedio",
      especialidad: "Seguridad",
      area: "Seguridad",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 4,
      // datos de texto
      textocontenidocurso: "Contenido del curso",
      textaprender: "Lo que aprenderás",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      textmetodologia: "Metodología del Curso:",
      textnivel: "Nivel:",
      textarea: "Área de capacitación:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      iconoMetodologia: "👨‍🏫",
      iconoNivel: "⬆️",
      iconoArea: "👩‍💻",
      // FIN DE ICONS

      // SISTEMA DE EVALUACION
      tituloSistema: "Sistema de Evaluación ",
      tabla: [
        {
          tdSistema: "Teoría",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "Práctica",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Power BI ",
      imagen: "src/img/power-bi.png",
      texto:
        "Inteligencia Empresarial: bases de datos, herramientas analíticas, decisiones estratégicas.",
      horasAcademicas: "32 Horas Académicas",
      descripcion:
        "La información representa uno de los activos intangibles más importantes para las organizaciones, ya sea para comprender el funcionamiento actual de una empresa o para predecir los acontecimientos futuros de la misma, acorde a su comportamiento actual. Para ello requieren de bases de datos sólidas y robustas que permitan generar el conocimiento necesario para la toma de decisiones, y así de esta manera, seguir los objetivos y las metas que se trazan a corto, mediano y largo plazo. De allí parte la necesidad de acceder a una herramienta que permita desarrollar la inteligencia empresarial, basándose en toda la información estratégica y analítica que la organización posee.",

      contenido1: [
        "Inteligencias de negocios y Power Bi",
        [
          "Qué es la Inteligencia de los negocios",
          "Qué es Power BI",
          "Elementos del Power BI",
          "Fases de Power BI",
        ],
      ],
      contenido2: [
        "Creando las estructuras de Información",
        [
          "Terminología básica de Archivos",
          "Normalización",
          "Cargar datos Externos",
          "Desarrollo de casos",
        ],
      ],
      contenido3: [
        "Estructura de Información y su desarrollo",
        [
          "Relacionando Tablas",
          "Visualización de datos",
          "Uso de Power Query Editor",
          "Aplicaciones mediante el desarrollo de casos",
        ],
      ],
      contenido4: [
        "Modelación y Funciones DAX",
        [
          "Modelando Datos",
          "Buenas prácticas del modelado de datos",
          "Nueva Columna y Nueva Medida",
          "Funciones DAX Intermedias - Avanzadas",
          "Herramientas MAP y TREEMAP",
          "Aplicaciones mediante el desarrollo de casos",
        ],
      ],
      contenido5: [
        "Gráficos y Filtros",
        [
          "Desarrollo de casos ",
          "Creación y Edición de Gráficos Intermedio - Avanzado",
          "Visualización y Exportación de datos",
          "Filtros y Jerarquías.",
        ],
      ],
      contenido6: [
        "Informes en Power BI",
        ["Data Storelling ", "Proyecto de Negocios", "Marcadores y Botones"],
      ],
      contenido7: [
        "Analítica de datos con Power BI",
        ["Análisis de Informes ", "Ejemplos Prácticos"],
      ],
      contenido8: [
        "Introducción a la Gestión de Indicadores",
        ["KPI", "Visualizaciones", "Proyecto de Negocios"],
      ],

      capacitado: [
        "Identificar los elementos necesarios para la instalación de Power BI.",
        "Transformar las tablas y crear las relaciones entre columnas comunes para generar el modelo a trabajar.",
        "Aplicar el lenguaje DAX para los procesos a través de casos  de estudio simulando situaciones empresariales.",
      ],

      requisitos: ["Conocimiento intermedio de Excel"],
      dirigido:
        "Personas que requieran manejar la inteligencia de los negocios ",
      metodologia: "Teórico - Práctico",
      nivel: "IntermedioBásico - Intermedio",
      especialidad: "",
      area: "Tecnología Digital y Gestión",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 5,

      // datos de texto
      textocontenidocurso: "Contenido del curso",
      textaprender: "Lo que aprenderás",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      textmetodologia: "Metodología del Curso:",
      textnivel: "Nivel:",
      textarea: "Área de capacitación:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      iconoMetodologia: "👨‍🏫",
      iconoNivel: "⬆️",
      iconoArea: "👩‍💻",
      // FIN DE ICONS

      // SISTEMA DE EVALUACION
      tituloSistema: "Sistema de Evaluación ",
      tabla: [
        {
          tdSistema: "1",
          tdSistemaConte: "Prácticas Calificadas",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Exámen de Media Sesiones",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "3",
          tdSistemaConte: "Proyecto Final",
          tdSistemaPorcent: " 35%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Diseño Publicitario con Adobe Illustrator ",
      imagen: "src/img/adobe.png",
      texto:
        "Curso Diseño Publicitario: habilidades Adobe Illustrator, diseños impactantes, gestión proyectos.",

      horasAcademicas: "32 Horas Académicas",
      descripcion:
        "El curso de Diseño Publicitario con Adobe Illustrator, es un programa de formación intensivo que dotará, a los estudiantes, de las habilidades necesarias para para crear diseños publicitarios de alto impacto positivo; a su vez, se pretende que los conocimientos prácticos que se se obtengan puedan tangibilizar en soluciones gráficas ajustadas a los requerimientos de encargos publicitarios dirigidos a un público objetivo. Con el aprendizaje teórico-práctico, el estudiante, también estará capacitado para gestionar y planificar proyectos de emprendimiento de carácter publicitario; y/o pueda proveer servicios, tanto manera dependiente o independiente, desarrollando piezas gráficas para componentes de proyectos creativos en el área editorial, comercial, marketing, preproducción audiovisual y/o urbana, etc.",

      contenido1: [
        " Dibujo Vectorial y Branding",
        [
          "Primeros pasos en el entorno/espacio y mesas de trabajo de Illustrator.",
          "Creación, edición y manipulación de formas básicas.",
          "Creación de Objetos complejos I: Manejo de nodos, rectas y curvas.",
          "Creación de Objetos complejos II: Panel de buscatrazos y creador de formas.",
          "Opciones de color, degradados, transparencias y opciones de fusión.",
          "Taller I: Proyecto de Creación de branding impactante y memorable.",
          "Contenido complementario: teoría de color y uso de retículas.",
        ],
      ],
      contenido2: [
        "Creación y Composición de Piezas Gráficas",
        [
          "Creación, edición y manipulación de texto.",
          "Integración y edición de imágenes.",
          "Manejo de capas, efectos y calco de bitmaps (imágenes).",
          "Efectos de composición gráfica I: trazado, motivo y fusión.",
          "Efectos de composición gráfica II: perspectiva y distorsión.",
          "Texturas y efectos 3D.",
          "Taller II: Proyecto de desarrollo de piezas para marketing (banners, post de social media, carteles y flyers).",
        ],
      ],
      contenido3: [
        "Ilustración Vectorial",
        [
          "Herramientas de bocetado vectorial (pluma, pincel y herramienta anchura).",
          "Herramientas de pintura digital (pincel, pincel de manchas y malla).",
          "live paint y otras herramientas complementarias de ilustración.",
          "Taller III: Proyecto de desarrollo de ilustración publicitaria.",
        ],
      ],

      capacitado: [
        "Dominar las herramientas y funciones de Adobe Illustrator para realizar proyectos gráfico-publicitarios de manera eficiente y efectiva, con un objetivo de comunicación y dirigido a un público objetivo específico.",
        "Diseñar productos gráficos y de identidad visual en base a investigación y diagnóstico previo, la aplicación de un proceso creativo, técnicas gráficas manuales y digitales, tales como: logotipos, publicidad gráfica impresa y digital, packaging, señalética, papelería corporativa, piezas graficas para editoriales, entre otros.",
        "Crear Ilustraciones que logren resolver necesidades del área publicitaria, comercial, preproducción audiovisual y/o urbana; produciendo imágenes en distintos formatos, medios de salida y soportes.	",
        "Componer piezas gráficas para su aplicación en medios impresos o digitales.",
        "Integrar textos e imágenes en piezas editoriales de diversos formatos, aplicando un proceso creativo, técnicas gráficas y digitales.",
      ],

      requisitos: ["Manejo de la computadora a nivel usuario (nivel básico)."],
      dirigido: "Comunidad",
      metodologia: "Teórico - Práctico",
      nivel: "Básico - Intermedio - Avanzado",
      especialidad: "",
      area: "Comunicación Audiovisual",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 6,
      // datos de texto
      textocontenidocurso: "Contenido del curso",
      textaprender: "Lo que aprenderás",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      textmetodologia: "Metodología del Curso:",
      textnivel: "Nivel:",
      textarea: "Área de capacitación:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      iconoMetodologia: "👨‍🏫",
      iconoNivel: "⬆️",
      iconoArea: "👩‍💻",
      // FIN DE ICONS

      // SISTEMA DE EVALUACION
      tituloSistema: "Sistema de Evaluación ",
      tabla: [
        {
          tdSistema: "Teoría",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "Práctica",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Marketing Digital ",
      imagen: "src/img/marketing-d.png",
      texto:
        "Proyecto Integrador Marketing Digital: estrategias, tendencias digitales, innovación, emprendimiento.",

      horasAcademicas: "40 Horas Académicas",
      descripcion:
        "Elabora un proyecto integrador de Marketing Digital para su ejecución estratégica de por medio de plataformas digitales, haciendo uso de las más recientes tendencias del marketing digital y considerando la innovación e investigación digital y emprendimiento, demostrando un buen desarrollo de su talento como futuro profesional para la innovación y creación de Gestión de Proyectos.",

      contenido1: [
        "Introducción al Marketing Digital",
        [
          "Social Media y a los negocios digitales",
          "Creación del concepto del proyecto digital",
          "Creación de Branding",
        ],
      ],
      contenido2: [
        "Social Media ",
        [
          "Storytelling y branding.",
          "Gestión de marca.",
          "Desarrollo y creación de Redes sociales.",
          "Estrategias de redes sociales.",
        ],
      ],
      contenido3: [
        "Gestión de redes sociales ",
        [
          "Diseño y creación de contenido",
          "Anuncios y pagos facebook business manager",
        ],
      ],
      contenido4: [
        "Proyecto integrador ",
        [
          "Marketing Digital Emprendimiento",
          "Plan operativo de marketing",
          "Desarrollo estratégico",
          "Monitoreo y analisis",
        ],
      ],

      capacitado: [
        "Identificar plataformas digitales haciendo uso de las más recientes tendencias del marketing digital.",
        "Transformar modelos de negocios haciendo uso de marketing digital.",
        "Elaborar un proyecto integrador de Marketing Digital.",
      ],

      requisitos: ["Ningún requisito"],
      dirigido: "Comunidad",
      metodologia: "Teórico - Práctico",
      nivel: "Basico - Intermedio",
      especialidad: "",
      area: "Tecnología Digital y Gestión",

      modalidad: "Virtual",
      gratis: true,
    },
  ],
};
