const checkSymbol = "\u2713";

export const programaEducar = {
  id: 3,
  nombre: "Programa Educar",
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

      nombre: "Programa Educar",
      imagen: "src/img/programa-educar.png",
      texto:
        "Fortalecer competencias digitales docentes: TIC, estrategias didácticas, motivar participación activa.",
      modalidad: "Síncrona",

      horasAcademicas: "100 Horas Académicas",
      descripcion:
        "Fortalecer en los docentes sus competencias digitales mediante el uso de herramientas TIC, brindar estrategias didácticas que les permitan incentivar a los estudiantes su participación activa y consciente en el proceso educativo.",

      contenido1: [
        "Comunicación didáctica en el proceso enseñanza-aprendizaje",
        [
          "Coaching Educativo",
          "Autoconcepto",
          "Autoconocimiento",
          "Estilos y Ritmos de Aprendizaje",
          "Visual",
          "Auditivo",
          "Kinestésico",
          "Tipos de Comunicación Didáctica",
          "Comunicación verbal",
          "Comunicación no verbal",
          "Inteligencia Emocional",
          "Motivación ",
          "Empatía",
        ],
      ],
      contenido2: [
        "HERRAMIENTAS COLABORATIVAS PARA TRABAJO VIRTUAL",
        [
          "Classroom",
          "Introducción a Classroom",
          "Creación de Clase",
          "Añadir Recursos",
          "Nearpod",
          "Registro, inicio de sesión y página de inicio",
          "Biblioteca: crear, compartir, almacenar y acceder a las presentaciones",
          "Crear y editar lección: herramientas de configuración",
          "Ingreso como estudiante",
          "Proyecto final: crear clase modelo",
          "Canva",
          "Presentaciones efectivas",
          "Diseño de tarjetas",
          "Diseño de videos",
        ],
      ],
      contenido3: [
        "METODOLOGÍAS ACTIVAS PARA EL PROCESO ENSEÑANZA APRENDIZAJE",
        [
          "Aprendizaje Orientado a Proyectos",
          "¿Qué es el Aprendizaje Basado en Proyectos?",
          "Implementación del Aprendizaje Basado en Proyectos en Clase",
          "Aprendizaje Orientado a Problemas",
          "¿Qué es el Aprendizaje Basado en Problemas (ABP)?",
          "Procedimiento e Instrumentos de medición aplicados para el desarrollo del Aprendizaje Basado en Problemas (ABP)",
          "Aprendizaje Orientado a Casos",
          "El estudio de Casos",
          "Procedimiento e Instrumentos de medición aplicados para el desarrollo del Aprendizaje Basado en Casos (ABC)",
          "Aprendizaje Orientado a Retos",
          "Aprendizaje basado en Retos (ABR) como aprendizaje vivencial",
          "Elementos y beneficios para el Apredizaje Basado en Retos",
          "Proyecto Final",
        ],
      ],

      capacitado: [
        "Lograr una comunicación didáctica y efectiva con sus estudiantes",
        "Crear espacios virtuales de alojamiento y gestión recursos y material usado en  de clase.",
        "Utilizar herramientas de colaboración para la participación activa en clase",
        "Aplicar metodologías activas para el logro de experiencias de aprendizaje en aula.",
        "Diseñar sesiones activas que logren un aprendizaje significativo en el estudiante.",
      ],

      requisitos: [
        "Conocimientos básicos en ofimática",
        "Conocimientos básicos en navegadores web.",
      ],
      dirigido: "Docentes de Educación Básica Regular y Educación Superior.",
      metodologia: "Teórico - Práctico",
      nivel: "Básico e intermedio",
      especialidad: "Tecnologías de la Información",
      area: "Gestión y Productividad",
      gratis: true,
    },
  ],
};
