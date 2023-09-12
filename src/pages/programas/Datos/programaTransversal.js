const checkSymbol = "\u2713";

export const programaTransversal = {
  id: 1,
  nombre: "Programas Transversales",
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
          tdSistema: "K1",
          tdSistemaConte: "Evaluación de conocimientos (aula)",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Evaluación de desempeño (Proyecto)",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//

      nombre: "AutoCAD 2D",
      imagen: "src/img/autocad.png",
      texto:
        "Representación e interpretación de dibujos técnicos, eléctricos y electrónicos; normas, laboratorio CAD; sesiones teóricas y prácticas calificadas.",
      descripcion:
        "El curso comprende la representación e interpretación de dibujos mecánicos, eléctricos y electrónicos, planos sencillos de sistemas técnicos e industriales y  un proyecto de implementación de un laboratorio en CAD; aplicación de las normas y estándares de un dibujo técnico. Las sesiones teóricas se realizan en aula con exposición del docente ayudado con material audiovisual, hojas digitales de información tecnológica, separatas y hojas de trabajo digitales. Las sesiones prácticas calificadas en aula están orientadas a la aplicación de normas y estándares de dibujo técnico.",
      horasAcademicas: "32 Horas Académicas",
      contenido1: [
        "Introducción: AutoCAD 2D",
        [
          "Conceptos básicos de Espacio de Trabajo: Dibujo y Anotación",
          "Elementos 3D Básicos y Modelado 3D ",
          "Cinta: Inicio, Visualizar, Inserción, Anotar, Vista, Salida.",
          "Comandos de Visualización: Encuadre",
          "Extensión: Zoom Ventana, Zoom en Tiempo Real, Zoom Centro, Zoom Dinámico, Zoom Objeto, Zoom Todo.",
          "Personalizar Barra de Estado: GRIDMODE, DYNMODE, ORTHOMODE, OSNAP",
        ],
      ],
      contenido2: [
        "Comandos de dibujo y edición I",
        [
          "Rectang",
          "Poligono: Inscrito en un circulo, circunscrito en un circulo edge,descomponer,empalme,chaflan, desfase",
        ],
      ],
      contenido3: [
        "Comandos de dibujo y edición II",
        [
          "Circulo, recortar, estirar arco, elipse, polilínea, región, escala, alineación, alargar",
        ],
      ],
      contenido4: [
        "Comandos de dibujo y edición III",
        ["Array: rectangular", "Polar y ruta", "Divide", "Medida y longitud"],
      ],
      contenido5: [
        "Objetos y capas - Bloques internos y externos",
        [
          "Propiedades: Color",
          "Tipo de línea y ancho de línea",
          "Capas: Crear capas",
          "Control de capas y valoración de capas",
          "Crear, insertar y editar un bloque",
          "Insertar y crear estilos de textos",
          "Partes de una cota",
          "Crear un estilo de cota",
          "Crear una familia de cotas",
        ],
      ],
      contenido6: ["Ploteo", ["Espacio Modelo", "Espacio Papel"]],
      contenido7: ["Proyecto", ["Presentación de proyecto final "]],
      capacitado: [
        "Representar e interpretar dibujos mecánicos, eléctricos y electrónicos.",
        "Representar e interpretar planos sencillos de sistemas técnicos, computacionales e industriales.",
        "Utilizar normas y estándares de dibujo técnico.",
      ],
      requisitos: ["Mínimo tercer año de secundaria o entrevista previa."],
      dirigido: "Estudiantes de secundaria y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Dibujo Computarizado",
      area: "Tecnologías de la Información",
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
          tdSistema: "K1",
          tdSistemaConte: "Evaluación de conocimientos (aula)",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Evaluación de desempeño (Proyecto)",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//

      nombre: "AutoCAD 3D",
      imagen: "src/img/autocad-3d.png",
      texto:
        "Diseños mecánicos, eléctricos y electrónicos, planos 3D, Modelado Arquitectónico 3D con Fotorrealismo y Renderizado. Sesiones teóricas y prácticas.",
      descripcion:
        "El curso comprende la representación e interpretación de diseños mecánicos, eléctricos y electrónicos, planos sencillos en 3D y  Modelado de un Proyecto Arquitectónico 3D de Nivel Complejo aplicando el Fotorrealismo y el Renderizado. Las sesiones teóricas se realizan en aula con exposición del docente ayudado con material audiovisual, hojas digitales de información tecnológica, separatas y hojas de trabajo digitales. Las sesiones prácticas calificadas en aula están orientadas a la aplicación de normas y estándares de diseño técnico.",
      horasAcademicas: "32 Horas Academicas",

      contenido1: [
        "Introducción: AutoCAD 3D Modelado de Sólidos Regulares",
        [
          "Espacio de Trabajo. Manejo de las Herramientas de Navegación y Visualización 3D.",
          "Manejo de los UCS",
          "Herramienta MODELADO del Espacio de Trabajo 'Modelado 3D' ",
          "Comandos de Modelado de Sólidos Regulares: POLISOLIDO, TECSTURA CUADRADA, CILINDRO, CONO, ESFERA, CUÑA, CILINDRO, PIRÁMIDE, TOROIDE",
          "Comandos Básicos de Edición 3D: ROTACIÓN 3D, DESPLAZAMIENTO 3D",
          "Comandos de Generación de SR: PIRÁMIDE, TOROIDE, HELICE",
          "Comandos de Edición 3D: UNION. DIFERENCIA, INTERSECTAR",
        ],
      ],
      contenido2: [
        "Modelado de sólidos irregulares",
        [
          "Comandos de Generación de SI: EXTRUSION, SOLEVAR, REVOLUCION, BARRER.			",
          "Comandos de Edición de SI: PRESIONARTIRAR, ALINEAR, CORTE, SECCION, INTERFERENCIA.			",
          "Comandos de Edición de SI: EMPLAME, CHAFLAN",
          "Comandos de Edición Avanzada: MATRIZRECTANG, SIMETRIA",
        ],
      ],

      contenido3: [
        "Edición y acotado de sólidos",
        [
          "Herramientas 'EDITAR SOLIDOS' ",
          "Herramientas de Acotado: Barra de Herramientas 'Dimensión' ",
          "Estilo de Cotas",
        ],
      ],
      contenido4: [
        "Efectos fotorrealistas",
        [
          "Aplicación de Materiales ",
          " Mapeado de Materiales y Editor de Materiales",
          "Crear un Nuevo Material",
          "Crear Librerías Personalizadas de Materiales",
          "Enlazar Material por Capa",
          "Aplicación de Tipos de Iluminación: Natural, Artificial",
          "Configuración de Parámetros de Iluminación Renderizado - Ventana de Modelización",
          "Parámetros Avanzados de Renderizado",
        ],
      ],
      contenido5: [
        "Proyecto final en 3D",
        [
          "Modelado en 3D",
          "Aplicación de Bloques 3D: accesorios",
          "Aplicación de Efectos Fotorrealistas: Materiales, Iluminación y Renderizado",
        ],
      ],

      capacitado: [
        "Representar e interpretar dibujos mecánicos, eléctricos y electrónicos.",
        "Representar e interpretar modelados arquitectónicos de sistemas técnicos, computacionales e industriales.",
        "Utilizar normas y estándares de dibujo técnico.",
      ],

      requisitos: ["Conocimientos de AutoCAD 2D"],
      dirigido: "Estudiantes de secundaria y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Dibujo Computarizado",
      area: "Tecnologías de la Información",

      modalidad: "Presencial",
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
          tdSistema: "K1",
          tdSistemaConte: "Evaluación de conocimientos (aula)",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Evaluación de desempeño (Proyecto)",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//

      nombre: "Computación Básica",
      imagen: "src/img/computacion-basica.png",
      texto:
        "Uso de dispositivos y programas en actividades computarizadas. Simulador para reconocer y ensamblar computadoras. Sistema operativo, organización y Microsoft Word.",
      descripcion:
        "El curso tiene como objetivo, involucrar al estudiante en la utilización de los dispositivos y programas de un ordenador para realizar tareas sencillas en actividades computarizadas. Para el reconocimiento y uso adecuado de los componentes físicos de un ordenador (Hardware) se utilizará un simulador de ensamble de computadoras que ayudará a ver la funcionalidad de los diferentes componentes de una PC. Con respecto al sistema operativo (Software) se trabajará en la organización y administración de archivos y carpetas; hasta lograr elaborar documentos básico en Microsoft Word.",
      horasAcademicas: "32 Horas Academicas",

      contenido1: [
        "Hardware: Simulación armado de PC",
        [
          "Hardware: Simulación armado de PC",
          "Placa Madre",
          "Adaptador de Tarjetas",
          "Discos Internos y Externos",
          "Cables Internos y Externos",
        ],
      ],
      contenido2: [
        "Software: Conociendo a Windows",
        [
          "Evolución del Sistema Operativo Windows",
          "Aplicaciones nativas de Windows",
          "Panel de control de Windows",
        ],
      ],
      contenido3: [
        "Operaciones en el directorio de carpetas",
        [
          "Conociendo las unidades locales del equipo",
          "Copiar, cortar y eliminar archivos y carpetas",
          "Proteger y ocultar archivos y carpetas",
        ],
      ],
      contenido4: [
        "Internet: Navegadores y buscadores",
        [
          "Ventajas y Desventajas de los principales navegadores",
          "Conociendo buscadores académicos y educativos",
          "Administración de extensiones en los navegadores",
        ],
      ],
      contenido5: [
        "MS. Word",
        [
          "Ingreso al programa de MS Word e identificación de partes de la pantalla principal",
          "Creación de documentos en MS Word, guardar, cerrar, editar y eliminar documentos",
          "Impresora, Propiedades de Impresora. Configuración",
        ],
      ],

      capacitado: [
        "Identificar, diferenciar y utilizar los componentes tangibles de una computadora.",
        "Gestionar eficientemente la creación y organización de directorios locales.",
        "Elaborar documentos básicos utilizando la herramienta aplicativa de Microsoft Word.",
      ],

      requisitos: ["Ningún requisito"],
      dirigido: "Público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      area: "Computación e Informática",
      modalidad: "Presencial",
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
          tdSistema: "Evaluación 01",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Evaluación 02",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Prácticas",
          tdSistemaPorcent: " 30%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Diseño 3D conTinkerCAD",
      imagen: "src/img/tinkercard.png",
      texto:
        "Taller creativo de diseño 3D para niños y adolescentes con Tinkercad: fomenta participación y creatividad.",
      horasAcademicas: "24 Horas Academicas",
      descripcion:
        "Curso dirigido para niños y adolescentes en donde se incentiva a la participación y la creatividad de los estudiantes en la elaboración de diseños en 3D de forma sencilla, a través de la herramienta Tinkercad.",

      contenido1: [
        "Primeros pasos con Tinkercad",
        [
          "¿Qué es Tinkercad?",
          "Crea tu cuenta personal en Tinkercad",
          "Conociendo el entorno de Tinkercad",
        ],
      ],
      contenido2: [
        "Operaciones con formas básicas",
        [
          "Plano de Trabajo",
          "Añadir, eliminar, copiar y duplicar objetos",
          "Redimensionar, girar y mover objetos",
        ],
      ],

      contenido3: [
        "Editar y transformar formas básicas",
        [
          "Agrupar y desagrupar objetos",
          "Alinear e invertir objetos",
          "Crear huecos en los objetos",
        ],
      ],
      contenido4: [
        "Diseñando objetos 3D",
        [
          "Diseño 1: Auto Policia",
          "Diseño 2: Porta lápices",
          "Diseño 3: Taza personalizada",
        ],
      ],
      contenido5: [
        "Diseñando personaje en 3D",
        ["Diseño de Robot Parte 1", "Diseño de Robot Parte 2"],
      ],
      contenido6: [
        "Importar y exportar",
        ["Tipos de extensión para impresión 3D", "Compartir nuestro proyecto"],
      ],

      capacitado: [
        "Comprender las nociones básicas del Diseño 3D: Sólidos, Superficies, Escalas y Colores.",
        "Diseñar objetos y personajes 3D a partir de necesidades reales específicas.",
        "Preparar y exportar los diseños elaborados para la impresión 3D.",
      ],

      requisitos: ["Ningún requisito"],
      dirigido: "Niños y Adolescentes",
      metodologia: "Teórico - Práctico",
      nivel: "Básico - Intermedio",
      especialidad: "Tecnologías de la Información",
      area: "Tecnología educativa",

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
          tdSistema: "Evaluación 01",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Evaluación 02",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Prácticas",
          tdSistemaPorcent: " 30%",
        },
      ],
      //FIN DE SISTEMA//

      nombre: "Diseño gráfico con Photoshop",
      imagen: "src/img/photoshop.png",
      horasAcademicas: "32 Horas Academicas",
      texto:
        "Curso diseño gráfico con Photoshop: adquiere habilidades, crea diseños atractivos, técnicas avanzadas y retoca fotos.",
      descripcion:
        "El curso de diseño gráfico con Photoshop es una oportunidad para adquirir habilidades y conocimientos fundamentales en el ámbito del diseño gráfico utilizando la popular herramienta de software Adobe Photoshop. Durante el curso, los estudiantes aprenderán a utilizar las diversas herramientas y funciones de Photoshop para crear diseños visuales atractivos y profesionales. El curso se estructura de manera progresiva, comenzando por las nociones básicas de la interfaz de Photoshop y las herramientas más comunes. A medida que avanza el curso, los estudiantes aprenderán técnicas avanzadas para manipular imágenes, crear composiciones gráficas, retocar fotografías, aplicar efectos especiales y mucho más.",

      contenido1: [
        "Introducción a Photoshop",
        [
          "Herramientas básicas y plataforma",
          "Herramienta tampón de clonar",
          "Herramienta Parche",
        ],
      ],
      contenido2: [
        "Control y administración de capas",
        [
          "Herramienta Lazo",
          "Herramienta Tono & Saturación",
          "Herramienta Pincel / Capas",
        ],
      ],
      contenido3: [
        "Modificación y retoques",
        ["Herramienta Licuar", "Proyecto Firmamento de Estrellas"],
      ],
      contenido4: ["Creación de efectos", ["Efecto Babas", "Efecto Eclipse"]],
      contenido5: [
        "Herramientas de recorte",
        ["Lazo Magnético", "Lazo Poligonal", "Perfeccionar Bordes"],
      ],
      contenido6: [
        "Edición de imágenes",
        ["Edición simultánea", "Descarga y modificación de MockUps"],
      ],
      contenido7: [
        "Herramientas de control de curvas",
        ["Herramienta Pluma", "Herramienta Pincel"],
      ],
      contenido8: ["Máscaras", ["Tipo de Máscaras", "Estilos Automáticos"]],

      capacitado: [
        "Brindar intencionalidad creativa a sus diseños.",
        "Utilizar diferentes herramientas con criterio.",
        "Trabajar en todo momento con orden y rigor.",
        "Crear máscaras y aplicar todo tipo de filtros y efectos.",
        "Diseñar bajo métodos de trabajo 'no destructivos'.",
      ],

      requisitos: [
        "Conocimientos básicos de Sistema Operativo Windows.",
        "Conocimientos intermedios de herramientas ofimáticas.",
      ],

      dirigido: "Profesionales, técnicos y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Básico - Intermedio	",
      especialidad: "Tecnologías de la Información",
      area: "Diseño gráfico",
      modalidad: "Presencial",
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
          tdSistema: "1",
          tdSistemaConte: "Prácticas Calificadas",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Exámen de Media Sesiones",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "3",
          tdSistemaConte: "Proyecto Final",
          tdSistemaPorcent: " 40%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Excel Avanzado con Macros",
      imagen: "src/img/excel-macros.png",
      horasAcademicas: "32 Horas Academicas",
      texto:
        "Curso de macros en Excel: automatización de tareas, ahorro de tiempo y herramientas avanzadas para control de información.",
      descripcion:
        "Curso centrado en el entendimiento de lo que es una macro para la creación de instrucciones que automaticen tareas repetitivas, de tal manera que el participante ahorre tiempo y minimice errores de procedimiento en sus respectivas hojas de cálculo. Todo este procedimiento vendrá acompañado del uso de herramientas de Excel Avanzadas para la creación de programas que permitan elaborar pequeños sistemas para casos específicos de control de información.",

      contenido1: [
        "Introducción a macros",
        [
          "Grabación de Macros",
          "Ejecución de Macros",
          "Modificación de Macros",
        ],
      ],
      contenido2: [
        "Ficha de programador",
        ["Contenido sin elementos visuales"],
      ],
      contenido3: [
        "Editor de Visual Basic",
        ["Contenido sin elementos visuales"],
      ],
      contenido4: [
        "Estructura de una macro",
        ["Contenido sin elementos visuales"],
      ],
      contenido5: ["Manejo de variables", ["Contenido sin elementos visuales"]],
      contenido6: [
        "Creación de instrucciones ejecutables",
        ["Asignación de Instrucciones", "Entrada y Salidas de Datos"],
      ],
      contenido7: [
        "Declaración de variables",
        ["Contenido sin elementos visuales"],
      ],
      contenido8: [
        "Elementos de programación",
        ["Contenido sin elementos visuales"],
      ],
      contenido9: [
        "Tipo de instrucciones",
        ["Generación de Código Secuencial", "Generación de Código Condicional"],
      ],
      contenido10: [
        "Creación de instrucciones ejecutables",
        ["Contenido sin elementos visuales"],
      ],
      contenido11: [
        "Tipos de instrucciones repetitivas",
        ["Contenido sin elementos visuales"],
      ],
      contenido12: [
        "Creación de formularios en VBA",
        [
          "Creación de Controles",
          "Controles más Usados",
          "Manejo de Propiedades",
          "Código de Formulario",
        ],
      ],

      capacitado: [
        "Crear una macro desde lo más básico y entender código VBA.",
        "Crear funciones específicas para el desarrollo de hojas de cálculo interactivas.",
        "Crear macros básicas, grabadas para ser asignadas a herramientas de formulario en hojas de cálculo.",
        "Desarrollar pequeños sistemas considerando ingresos, control de datos, reportes, etc.",
      ],

      requisitos: [
        "Conocimientos básicos de Windows",
        "Conocimientos intermedios de ofimática ",
      ],
      dirigido:
        "Estudiantes, profesionales y personal de empresas e instituciones",
      metodologia: "Teórico - Práctico",
      nivel: "Avanzado",
      especialidad: "Tecnologías de la Información",
      area: "Gestión y Productividad",

      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 7,
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
          tdSistema: "1",
          tdSistemaConte: "Evaluación 01",

          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Evaluación 02",

          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "3",
          tdSistemaConte: "Prácticas",
          tdSistemaPorcent: " 30%",
        },
      ],

      //FIN DE SISTEMA//
      nombre: "Excel Básico",
      imagen: "src/img/excel-basico.png",
      texto:
        "Curso Excel: crear hojas, formatos, fórmulas, funciones básicas y reportes gráficos para resolver problemas comunes.",
      horasAcademicas: "32 Horas Academicas",

      descripcion:
        "Curso donde el participante podrá crear hojas de cálculo desde cero, usando correctamente formatos para el diseño y/o composición de celdas, para así lograr solucionar problemas comunes utilizando fórmulas y funciones básicas en Excel. Todo este proceso repotenciado con el uso de reporte gráficos.",

      contenido1: [
        "Introducción a Excel",
        ["Contenido sin elementos visuales"],
      ],
      contenido2: ["Formatos de celdas", ["Contenido sin elementos visuales"]],
      contenido3: ["Fórmulas básicas", ["Contenido sin elementos visuales"]],
      contenido4: [
        "Referencias de celda y tipología",
        ["Contenido sin elementos visuales"],
      ],
      contenido5: [
        "Funciones matemáticas y estadísticas",
        ["Contenido sin elementos visuales"],
      ],
      contenido6: [
        "Gráficas",
        [
          "Creación de gráficas recomendadas",
          "Creación de gráficas personalizadas",
        ],
      ],
      contenido7: [
        "Ordenación y filtro de datos",
        ["Contenido sin elementos visuales"],
      ],
      contenido8: ["Funciones de texto", ["Contenido sin elementos visuales"]],
      contenido9: ["Funciones de fecha", ["Contenido sin elementos visuales"]],
      contenido10: [
        "Funciones lógicas",
        ["Creación de funciones lógicas anidadas"],
      ],
      contenido11: [
        "Funciones condicionales",
        ["Contenido sin elementos visuales"],
      ],
      contenido12: [
        "Vista, impresión y exportación",
        ["Contenido sin elementos visuales"],
      ],

      capacitado: [
        "Crear hojas de cálculo con formatos adecuados y diseño profesional para la presentación de trabajos y/o reportes.",
        "Utilizar funciones y fórmulas para la solución de problemas diarios a la hora de crear hojas de cálculo interactivas.",
        "Inserción de gráficos para reporte de datos, interconexión entre hojas de un mismo libro y filtrado de información.",
      ],

      requisitos: [
        "Conocimientos básicos de Sistema Operativo Windows",
        "Conocimientos de Word Básico",
      ],

      dirigido: "Publico en general",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Tecnologías de la Información",
      area: "Gestión y Productividad",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 8,
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
          tdSistema: "Evaluación 01",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Evaluación 02",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Prácticas",
          tdSistemaPorcent: " 30%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Excel para Profesionales",
      imagen: "src/img/excel-profesionales.png",
      texto:
        "Curso Excel: manejo, análisis y presentación de información con fórmulas y tablas dinámicas para informes profesionales.",
      horasAcademicas: "32 Horas Academicas",
      descripcion:
        "El presente curso tiene como finalidad brindarle al alumno las herramientas necesarias e indispensables para el manejo y análisis de información de una hoja de cálculo. Durante el desarrollo del curso conoceremos estas herramientas que nos permitirán no solo analizar, sino también presentar informes profesionales con reporte de datos relevantes. Para ello se profundizará en el uso de las formulas y tablas dinámicas.",

      contenido1: [
        "Formatos avanzados",
        [
          "Formato personalizado y condicional.",
          "Ventanas y listas personalizadas",
          "Validación de datos",
        ],
      ],
      contenido2: [
        "Funciones condicionales - Lógicas y estadísticas",
        [
          "Funciones: SUMAR.SI, SUMAR.SI.CONJUNTO, PROMEDIO.SI, PROMEDIO.SI.CONJUNTO",
          "Funciones: CONTAR.SI y CONTAR.SI.CONJUNTO",
          "Funciones y anidación: SI, Y y O",
        ],
      ],
      contenido3: [
        "Funciones de texto",
        [
          "Funciones: MAYUSC, MINUSC, NOMPROPIO, DERECHA, IZQUIERDA, EXTRAE",
          "Funciones: REEMPLAZAR, SUSTITUIR y CONCATENAR",
        ],
      ],
      contenido4: [
        "Funciones de fecha y búsqueda",
        [
          "Funciones: DÍA, MES, AÑO, HOY, AHORA, DIAS, DIAS.LAB, DIAS.LAB.INTL",
          "Funciones: BUSCAR, BUSCARV y BUSCARH",
          "Búsquedas múltiples",
        ],
      ],
      contenido5: [
        "Esquemas, subtotales y filtros avanzados",
        [
          "Crear esquemas manuales y automáticos",
          "Crear, modificar y eliminar subtotales",
        ],
      ],
      contenido6: [
        "Tablas y gráficos dinámicos",
        [
          "Crear una tabla dinámica y mostrar detalles",
          "Generar resumen de datos, añadir y editar subtotales",
          "Formato de tabla dinámica, campo calculado, segmentación de datos y gráfico dinámico",
        ],
      ],
      contenido7: [
        "Protección de datos e información",
        [
          "Ocultar y mostrar: filas, columnas y hojas",
          "Proteger hoja de cálculo, libro y celdas bloqueadas",
          "Cifrar por contraseña",
        ],
      ],
      contenido8: [
        "Formularios y grabadora de macros",
        [
          "Tipos de formularios",
          "Controles de formulario y grabación de una macro",
        ],
      ],

      capacitado: [
        "Aplicar formatos avanzados para la personalización y validación de los datos.",
        "Aplicar eficientemente el uso funciones y fórmulas para el cálculo de operaciones.",
        "Gestionar y analizar grandes cantidades de datos, mediante tablas y gráficos dinámicos.",
        "Diseñar formularios con grabadora de macros para la manipulación de datos.",
      ],

      requisitos: [
        "Conocimientos básicos de Sistema Operativo Windows.",
        "Conocimientos básicos de herramientas ofimáticas.",
      ],
      dirigido: "Profesionales, técnicos y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Intermedio",
      especialidad: "Tecnologías de la Información",
      area: "Gestión y Productividad",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 9,
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
          tdSistema: "Evaluación 01",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Evaluación 02",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Prácticas",
          tdSistemaPorcent: " 30%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Gestión de Proyectos con MS Project",
      imagen: "src/img/gestion-proyectos.png",
      texto:
        "Curso eficiente de MS Project: planificación, programación y control de proyectos para empresas y organizaciones.",

      horasAcademicas: "32 Horas Academicas",
      descripcion:
        "Hoy en día, para las empresas y organizaciones, es vital saber en todo momento cual es el estado de sus proyectos. El objetivo del curso es que el participante mediante el software Ms Project logre planificar, programar y controlar uno o varios proyectos en simultáneo y sobre todo de manera eficiente.",

      contenido1: [
        "Introducción a la gestión de proyectos",
        [
          "Concepto del proyecto",
          "Características del proyecto",
          "Tipos y fases del proyecto",
          "Administración del proyecto",
        ],
      ],
      contenido2: [
        "Interfaz MS Project",
        [
          "Concepto de herramienta Ms Project",
          "Entorno del Ms-Project",
          ["Contenido sin elementos visuales"],
        ],
      ],
      contenido3: [
        "Gestión del Ms-Project",
        ["Información del proyecto", "Administración del calendario"],
      ],
      contenido4: [
        "Gestión de tareas",
        [
          "Modo manual y automático",
          "Duración, comienzo y fin de una tarea",
          "Tareas predecesoras",
          "Vinculación de tareas",
          "Tareas periódicas",
        ],
      ],
      contenido5: [
        "Restricciones",
        ["Restricciones flexibles", "Restricciones inflexibles"],
      ],
      contenido6: ["Escalas de tiempo", ["Contenido sin elementos visuales"]],
      contenido7: [
        "Vista del diagrama de Gantt",
        [
          "Formatos de diagrama de Gantt",
          "Estilos de diagrama de Gantt",
          "Herramienta dibujo",
        ],
      ],
      contenido8: [
        "Fecha límite y ruta crítica",
        ["Contenido sin elementos visuales"],
      ],
      contenido9: [
        "Recursos",
        [
          "Recursos de tipo trabajo",
          "Recursos de tipo material",
          "Recursos de tipo costo",
          "Asignación de recursos",
        ],
      ],
      contenido10: [
        "Control y seguimiento",
        ["Contenido sin elementos visuales"],
      ],
      contenido11: ["Importación y exportación", ["Subproyectos"]],
      contenido12: [
        "Informes e impresión",
        ["Informe general", "Informe específico"],
      ],

      capacitado: [
        "Gestionar eficientemente proyectos en una situación real usando como herramienta de desarrollo MS-Project.",
        "Realizar la planificación, seguimiento, control y mejora continua de un proyecto utilizando Ms Project.",
        "Elaborar informes impresos o digitales de un proyecto.",
      ],

      requisitos: ["Conocimientos de Ofimática Básica"],
      dirigido: "Profesionales, técnicos y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Intermedio",
      especialidad: "Tecnologías de la Información",
      area: "Gestión y Productividad",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 10,
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
          tdSistema: "Evaluación 01",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Evaluación 02",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Prácticas",
          tdSistemaPorcent: " 30%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Manejo de Aplicaciones de Google",
      imagen: "src/img/google.png",
      texto:
        "Curso Google Workspace: productividad, comunicación y trabajo en equipo con herramientas indispensables para organizaciones.",
      horasAcademicas: "24 Horas Academicas",
      descripcion:
        "El presente curso tiene como finalidad mejorar la productividad, mantener la comunicación y agilizar el trabajo en equipo desde cualquier dispositivo. Durante el desarrollo del curso aprenderemos a utilizar las herramientas de google más importantes e indispensables para mejorar el trabajo dentro de una organización.",

      contenido1: [
        "Correo electrónico - Gmail",
        [
          "Crear cuenta de correo, redacción, manejo de fuentes, adjuntar archivos y filtrar correos.",
          "Cambiar interfaz de la bandeja, crear etiquetas y crear firmas.",
          "Archivar correos y activar respuestas automáticas.",
        ],
      ],
      contenido2: [
        "Google Hangouts",
        [
          "Iniciar una conversación, añadir contactos, crear grupos y realizar videoconferencias.",
          "Activar elementos del chat y compartir pantalla.",
          "Grabar videollamadas.",
        ],
      ],
      contenido3: [
        "Google Calendar",
        [
          "Crear un evento, verificar disponibilidad, manejar recursos y agregar mapas en calendar.",
          "Crear evento y compartir en el calendario.",
        ],
      ],
      contenido4: [
        "Google Drive",
        [
          "Gestionar carpetas y archivos.",
          "Realizar seguimiento del historial de una carpeta y archivo.",
          "Gestionar almacenamiento.",
        ],
      ],
      contenido5: [
        "Documentos de Google",
        [
          "Crear o importar un documento. Aplicar formatos de texto y párrafo.",
          "Insertar elementos (imágenes, tablas, etc.), crear de documentos en base a plantillas.",
          "Compartir y colaborar en línea. Imprimir y descargar documentos.",
        ],
      ],
      contenido6: [
        "Hojas de cálculo de Google",
        [
          "Crear e importar una hoja de cálculo, aplicar formatos de celdas.",
          "Aplicar fórmulas y funciones, compartir y colaborar en línea.",
          "Descargar e imprimir documentos.",
        ],
      ],
      contenido7: [
        "Formulario de Google",
        [
          "Crear un formulario o test de autoevaluación.",
          "Configurar y validar datos.",
          "Obtener una vista previa y compartir el formulario o test de autoevaluación.",
          "Analizar y generar cuadro de respuestas en hoja de cálculo.",
        ],
      ],
      contenido8: [
        "Google Sites",
        [
          "Gestionar sitio web.",
          "Obtener una vista previa y publicar sitio web.",
        ],
      ],

      capacitado: [
        "Gestionar correos electrónicos a través de Gmail.",
        "Realizar videollamadas y compartir información a través de ella.",
        "Establecer eventos a través de Google Calendar.",
        "Gestionar y compartir información a través de Google Drive.",
        "Ejecutar trabajo colaborativo a través de Documentos y Hojas de Cálculo de Google.",
        "Aplicar formularios para obtención de datos online.",
      ],

      requisitos: [
        "Conocimientos básicos de Sistema Operativo Windows.",
        "Conocimientos básicos de herramientas ofimáticas.",
      ],
      dirigido: "Público en general		",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Tecnologías de la Información",
      area: "Gestión de nuevas tecnologías",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 11,
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
      nombre: "Marketing Digital con Redes Sociales",
      imagen: "src/img/marketing-digital.png",
      texto:
        "Curso de campañas publicitarias en redes sociales para emprendedores: posicionamiento, ventas y atraer clientes efectivamente.",

      horasAcademicas: "24 Horas Academicas",
      descripcion:
        "El curso consiste en desarrollar conocimientos y habilidades en los emprendedores para poder crear y gestionar campañas publicitarias, comprendiendo como funciona la publicidad y las comunicaciones en redes sociales como Facebook, Instagram, Whatsapp, Linkedin y Youtube; los cuales ayudarán a generar todo el potencial de una marca o emprendimiento, para cumplir objetivos de mercadotecnia como: posicionamiento, ventas efectivas y atraer clientes.",

      contenido1: [
        "Conceptos de marketing digital",
        [
          "Contenidos que se comparten en internet.",
          "Internet en los medios sociales, usuarios y publicidad.",
          "Fundamentos de marketing digital.",
          "Comportamiento del Perú en los medios digitales.",
        ],
      ],
      contenido2: [
        "Plan de marketing digital en redes sociales",
        [
          "Análisis FODA en redes sociales.",
          "Estrategias de contenido de calidad.",
          "Promoción y comunicación en redes sociales.",
        ],
      ],
      contenido3: [
        "Introducción a Facebook e Instagram",
        [
          "Definición y creación de una Fan page en Facebook.",
          "Creación y configuración de un perfil en Instagram.",
          "Optimización del Fan page de Facebook.",
          "Diseño de publicidad digital sin saber software gráfico o audiovisual.",
        ],
      ],
      contenido4: [
        "Campaña por mensajes: WhatsApp y Messenger",
        [
          "Creación de Campaña de Mensajes para WhatsApp y Messenger.",
          "Creación de Mensaje Personalizado en Whatsapp y Messenger.",
          "Conociendo a Whatsapp Business.",
        ],
      ],
      contenido5: [
        "LinkedIn, YouTube y mailing",
        [
          "Ventajas de LinkedIn como red social para empresas.",
          "Canal de YouTube: concepto, ventajas y creación.",
          "Ventas por correo electrónico o mailing.",
        ],
      ],
      contenido6: [
        "Monitoreo de campañas",
        [
          "Analytics de YouTube, Facebook e Instagram Insights.",
          "Herramientas de medición gratuita para mailing.",
        ],
      ],

      capacitado: [
        "Obtener una visión integral y práctica de cómo funcionan los negocios por redes sociales.",
        "Desarrollar estrategias de mercadeo digital por las principales redes sociales.",
        "Crear campañas efectivas en redes sociales.",
        "Administrar marca en Internet como un Community Manager Profesional.",
      ],

      requisitos: [
        "Conocimientos Básicos de Windows y/o otros Sistemas Operativos.",
        "Conocimientos Básicos de Ofimática.",
      ],
      dirigido: "Emprendedores",
      metodologia: "Teórico - Práctico",
      nivel: "Intermedio",
      especialidad: "Tecnología de Comunicación",
      area: "Comunicación y Publicidad",

      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 12,
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
          tdSistema: "Evaluación 01",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Evaluación 02",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "Prácticas",
          tdSistemaPorcent: " 30%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Programación con Scratch",
      imagen: "src/img/scratch.png",
      texto:
        "Aprende programación fácil y práctica: ejercicios motivadores, solución de problemas y pensamiento crítico.",

      horasAcademicas: "24 Horas Academicas",
      descripcion:
        "Conoce de forma fácil y práctica el enfoque de la programación y disfrutar del proceso de aprendizaje de los conceptos básicos de la programación con ejercicios prácticos que motiven al estudiante a intentar y mejorar las soluciones propuestas. De una forma distinta el estudiante aprenderá a enfrentarse a problemas del día a día, usando para ello herramientas, aritmética, lógica y pensamiento crítico.",

      contenido1: [
        "Introducción a Scratch",
        [
          "¿Qué es programar?",
          "Scratch como lenguaje de programación",
          "¿Qué podemos hacer con Scratch?",
        ],
      ],
      contenido2: [
        "Conociendo a Scratch",
        [
          "Scratch Online",
          "Explorando la interfaz de Scratch",
          "Mi primer proyecto con Scratch",
        ],
      ],
      contenido3: [
        "Jugando con los elementos de Scratch",
        [
          "Galería de personajes",
          "Jugando con escenarios",
          "Primeros movimientos",
        ],
      ],
      contenido4: [
        "Creando una historieta animada",
        [
          "Insertando disfraces de los personajes",
          "Bloques de apariencia - Diálogos",
          "Bloques de eventos - Al hacer clic y al presionar",
          "Operadores matemáticos en instrucciones",
        ],
      ],
      contenido5: [
        "Creando el juego del dragón",
        [
          "Bloques de movimiento - Agregando movimiento al dragón",
          "Bloques de sensores - El puntero controlando al gato",
          "Variables - Instrucciones de puntuación",
        ],
      ],
      contenido6: [
        "Creando personajes y escenarios",
        [
          "Imagina personajes y créalos",
          "Imágenes vectorizadas y funciones",
          "Herramienta editor de imágenes",
        ],
      ],
      contenido7: [
        "Proyecto final: Juego del dinosaurio",
        [
          "Crea el dinosaurio y el escenario",
          "Movimiento para el salto de obstáculos",
          "Puntuación y dificultad del juego",
        ],
      ],
      contenido8: [
        "Publicación de proyectos",
        ["Publica y comparte tu proyecto", "Nuevos retos"],
      ],

      capacitado: [
        "Manejar los componentes del computador de una manera mas interactiva",
        "Desarrollar la creatividad y el pensamiento lógico de los niños/as de manera sencilla y divertida",
        "Crear Animaciones y Juegos Básicos con instrucciones del Ordenador",
      ],

      requisitos: ["Ningún requisito"],
      dirigido: "Niños y Jóvenes",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Tecnologías de la Información",
      area: "Gestión y Productividad",

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 13,

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
          tdSistema: "1",
          tdSistemaConte: "Practicas Calificadas",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Evaluación de Proyecto 1",
          tdSistemaPorcent: " 35%",
        },
        {
          tdSistema: "3",
          tdSistemaConte: "Evaluación de Proyecto 2",
          tdSistemaPorcent: " 35%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Robótica con Arduino",
      imagen: "src/img/arduino.png",
      texto:
        "Construye y programa robots con Arduino, descubre hardware abierto y principios de robótica.",

      horasAcademicas: "24 Horas Académicas",
      descripcion:
        "Construye y programa robots a través de la plataforma Arduino, así mismo, conoce los principios del hardware abierto y la robótica.",

      contenido1: [
        "Introducción a Arduino",
        [
          "Conceptos generales sobre Arduino",
          "Sistemas electrónicos",
          "Salidas digitales",
        ],
      ],
      contenido2: [
        "Entradas y salidas",
        ["Entradas digitales", "Entradas analógicas"],
      ],
      contenido3: [
        "Introducción a la programación I",
        [
          "Lenguajes de programación",
          "Estructura de datos",
          "Control de flujo I",
        ],
      ],
      contenido4: [
        "Introducción a la programación II",
        ["Control de flujo II", "Programación modular"],
      ],
      contenido5: [
        "Introducción a la robótica",
        [
          "Conceptos generales de robótica",
          "Motores y motoreductores",
          "Robot móvil de tracción diferencial",
        ],
      ],
      contenido6: [
        "Procesadores, sensores y actuadores I",
        ["Sensor óptico reflectivo", "Sensor ultrasónico", "Sensor de sonido"],
      ],
      contenido7: [
        "Procesadores, sensores y actuadores II",
        ["Joystick analógico", "Servomotores"],
      ],
      contenido8: [
        "Comunicación con el entorno",
        ["Comunicación alámbrica e inalámbrica", "Comunicación por Bluetooth"],
      ],
      contenido9: [
        "Elaboración de proyecto I",
        ["Contenido sin elementos visuales"],
      ],
      contenido10: [
        "Elaboración de proyecto II",
        ["Contenido sin elementos visuales"],
      ],

      capacitado: [
        "Conocer los fundamentos básicos de electrónica.",
        "Reconocer los componentes de hardware y sus funcionalidades para la elaboración de proyectos de robótica.",
        "Elaborar proyectos de Robótica empleando la plataforma Arduino.",
        "Utilizar dispositivos móviles para el control de proyectos de robótica.",
      ],

      requisitos: [
        "Conocimientos Básicos de Windows y/o otros Sistemas Operativos",
        "Conocimientos Intermedios de Ofimática e Internet.",
      ],
      dirigido: "Escolares, Estudiantes Universitarios y Profesionales",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Tecnologías de la Información",
      area: "Fabricación Digital",

      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 14,

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
          tdSistema: "K1",
          tdSistemaConte: "Evaluación de conocimientos (aula)",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Evaluación de desempeño (Proyecto)",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Word Básico",
      imagen: "src/img/word-basico.png",
      texto:
        "Curso MS Word: herramientas básicas e intermedias para elaborar informes y presentaciones eficientes, con sesiones teóricas y prácticas calificadas.",
      horasAcademicas: "32 Horas Académicas",
      descripcion:
        "El curso utiliza herramientas básica e  intermedias de MS Word. El usuario gestiona eficientemente el aplicativo de MS Word e Internet, elaborando informes estructurados. Genera presentaciones eficientes.  Las sesiones teóricas se realizan en aula con exposición del docente ayudado con material audiovisual, hojas digitales de información tecnológica, separatas y hojas de trabajo digitales. Las sesiones prácticas calificadas en aula están orientadas a elaboración  de documentos con temas de valores y realidad nacional y local.",

      contenido1: [
        "Organización curso: Menú Insertar: Grupo Encabezado y Pie de Página",
        [
          "Insertar Encabezado",
          "Insertar Pie de Página",
          "Insertar Número de Página",
        ],
      ],
      contenido2: [
        "Menú Diseño de Página: Grupo Configurar Página",
        [
          "Insertar Columnas: Más Columnas",
          "Orientación: Vertical, Horizontal",
        ],
      ],
      contenido3: [
        "Menú Diseño: Grupo Fondo de Página",
        [
          "Bordes de Página: Arte, Ancho",
          "Color de Página: Más colores, Efectos de Relleno",
          "Marca de Agua: Marcas de Agua Personalizadas; Imagen y Texto",
          "Tabulaciones, inserción de tablas",
        ],
      ],
      contenido4: [
        "Menú Insertar: Grupo Ilustraciones",
        [
          "Formas: Formas básicas. Herramientas de Dibujo",
          "SmartArt: Ciclo, Jerarquía. Herramientas de SmartArt",
        ],
      ],
      contenido5: [
        "Menú Insertar: Grupo Texto",
        [
          "WordArt: Efectos de Texto: Sombra, Reflexión, Transformación. Herramienta de Dibujo",
        ],
      ],
      contenido6: ["Tríptico", ["Creación, edición de trípticos"]],
      contenido7: [
        "Proyecto",
        ["Generar archivos sobre Tema de interés/ profesión"],
      ],

      capacitado: [
        "Desarrollar documentos de usuario mediante el uso de herramientas principales de Microsoft Word 2016 interactuando con Internet.",
        "Efectuar comunes de Microsoft Word 2016 e internet.",
        "Generar documentos comunes eficientes  haciendo uso eficaz del internet.",
      ],

      requisitos: ["Mínimo primaria o entrevista previa "],
      dirigido: "Estudiantes y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Ofimática",
      area: "Tecnologías de la Información",

      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 15,

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
          tdSistema: "K1",
          tdSistemaConte: "Evaluación de conocimientos (aula)",
          tdSistemaPorcent: " 30%",
        },
        {
          tdSistema: "2",
          tdSistemaConte: "Evaluación de desempeño (Proyecto)",
          tdSistemaPorcent: " 70%",
        },
      ],
      //FIN DE SISTEMA//
      nombre: "Word Empresarial",
      imagen: "src/img/word-empresarial.png",
      texto:
        "Curso avanzado de MS Word: herramientas intermedias y avanzadas para tratamiento de información y manejo de documentos.",

      horasAcademicas: "32 Horas Académicas",
      descripcion:
        "El presente curso tiene como finalidad brindarle al participante las herramientas intermedias y avanzadas de Ms Word, indispensables para el tratamiento de la información y manejo de documentos de tipo texto. El participante hará uso de estas herramientas para presentar informes, trabajos o resúmenes relacionadas a su actividad laboral. ",

      contenido1: [
        "Configurar documento de trabajo",
        [
          "Activar regla y línea de cuadrícula",
          "Habilitar revisión automática de ortografía y gramática",
          "Configurar tiempo de guardado y ubicación de información de autorecuperación",
        ],
      ],
      contenido2: [
        "Configurar página",
        [
          "Configurar márgenes personalizados",
          "Insertar saltos de página, sección página siguiente y página continua",
          "Cambiar orientación de página por reinicio de sección",
          "Configurar numeración en pie de página de acuerdo a normas como APA y Turabian",
        ],
      ],
      contenido3: [
        "Imágenes, formas y tablas",
        [
          "Realizar corrección de brillo, color, formas y quitar fondo",
          "Insertar formas y forma libre",
          "Utilizar herramienta de lápiz, borrador, formato de celdas avanzadas y estilos de tablas",
          "Gestionar tabulaciones, posición, alineación y relleno",
        ],
      ],
      contenido4: [
        "Notas al pie de página",
        [
          "Insertar notas y mostrar al pie, al final y siguiente nota al pie",
          "Insertar referencias cruzadas para pie de página",
        ],
      ],
      contenido5: [
        "Referencias y títulos",
        [
          "Insertar título",
          "Insertar referencias cruzadas para título",
          "Insertar tabla de ilustraciones",
        ],
      ],
      contenido6: [
        "Tabla de contenido",
        [
          "Insertar jerarquía por niveles para tabla de contenido",
          "Insertar y actualizar tabla de contenido",
        ],
      ],
      contenido7: [
        "Citas y bibliografía",
        [
          "Insertar cita y administrar fuentes",
          "Insertar bibliografía y estilo APA",
        ],
      ],
      contenido8: [
        "Combinación de correspondencia",
        [
          "Seleccionar destinatarios, editar lista de destinatarios",
          "Realizar combinación de correspondencia con hoja de cálculo",
        ],
      ],

      capacitado: [
        "Realizar un uso adecuado del procesador de textos Word con la finalidad de elaborar documentos empresariales y profesionales.",
        "Aplicar diferentes tipos de formatos a un documento.",
        "Elaborar plantillas, modelos y formatos de documentos empresariales que reduzcan el tiempo de su elaboración con énfasis en la reutilización y eficiencia.",
      ],

      requisitos: ["Mínimo primaria o entrevista previa "],
      dirigido: "Estudiantes y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Intermedio",
      especialidad: "Ofimática",
      area: "Tecnologías de la Información",

      modalidad: "Presencial",
      gratis: true,
    },
  ],
};
