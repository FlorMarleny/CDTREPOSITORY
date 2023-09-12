const checkSymbol = "\u2713";

export const programaOficio = {
  id: 5,
  nombre: "Programas de Oficio",
  subprogramas: [
    {
      id: 1,
      // datos de texto
      textaprender: "Objetivos",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      // FIN DE ICONS

      nombre: "Construcción de Melamine",
      imagen: "src/img/ensamblado.png",
      texto:
        "Ensamblado muebles: seguridad, normativa vigente, garantizar correcto montaje.",
      modalidad: "Presencial",
      gratis: true,
      horasAcademicas: "64 Horas Académicas",

      descripcion:
        "Al abordar la especialidad de la carpintería que involucra el uso de derivados de la madera, resulta esencial no solo identificar los diversos materiales disponibles en el mercado local, sino también comprender a fondo las normas de seguridad que rigen este campo según la normativa vigente. Con este conocimiento en mente, se pueden explorar con confianza los distintos procesos involucrados en el ensamblado de muebles, asegurándose de aplicar técnicas que garanticen tanto la funcionalidad como la seguridad, manteniendo alineadas las pautas de fabricación con los estándares establecidos.",
      capacitado: [
        "Conocemos la especialidad de la carpintería utilizando derivados de la madera.",
        "Identificamos los diferentes materiales existentes en el mercado local.",
        "Conocemos los diferentes procesos del ensamblado de un mueble.",
      ],

      requisitos: ["Ningún requisito"],
      dirigido:
        "Personal con 1 año de experiencia mínima en el perfil ocupacional.",
    },

    {
      id: 2,

      // datos de texto
      textaprender: "Objetivos",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      // FIN DE ICONS

      nombre: "Construcción de Drywall",
      imagen: "src/img/drywall.png",
      texto:
        "Estructuras drywall: seguridad, normativa vigente, montaje adecuado.",
      horasAcademicas: "64 Horas Académicas",
      modalidad: "Presencial",
      gratis: true,
      descripcion:
        "Al adentrarnos en la comprensión de las distintas formas de estructuras utilizando drywall, es primordial tener en cuenta las normas de seguridad conforme a la reglamentación actual. Esta especialidad abarca tanto ambientes internos como externos, lo que demanda una apreciación integral. Al identificar los variados materiales disponibles en el mercado local, se establece una base sólida para el desarrollo de proyectos. Además, el conocimiento de los diversos procesos relacionados con la construcción empleando drywall asegura la aplicación efectiva de técnicas y métodos que se alinean no solo con la funcionalidad y estética, sino también con los más altos estándares de seguridad establecidos por la normativa vigente.",
      capacitado: [
        "Conocemos la especialidad de la estructura en drywall, en ambientes internos y externos.",
        "Identificamos los diferentes materiales existentes en el mercado local.",
        "Conocemos los diferentes procesos de la construcción con drywall.",
      ],

      requisitos: ["Ningún requisito"],
      dirigido:
        "Personal con 1 año de experiencia mínima en el perfil ocupacional.",
    },

    {
      id: 3,

      // datos de texto
      textaprender: "Objetivos",
      textrequisito: "Requisitos:",
      textdirigido: "Dirigido a:",
      // fin de datos de texto

      // ICONOS
      iconoCheck: checkSymbol,
      iconoUsuarios: "👥",
      // FIN DE ICONS

      nombre: "Fabricación de Estructuras Metálicas",
      imagen: "src/img/estructuras-metalicas.png",
      texto:
        "Curso soldadura: competencias fabricación y mantenimiento estructuras metálicas, enfoque práctico y teórico.",
      horasAcademicas: "64 Horas Académicas",
      modalidad: "Presencial",
      gratis: true,

      descripcion:
        "En el ámbito del ensamblado de muebles, es crucial tener presente las normas de seguridad en concordancia con la normativa actual. Parte fundamental de este conocimiento radica en comprender la especialidad de la carpintería que emplea derivados de la madera, lo cual sienta las bases para abordar eficientemente la tarea. Además, al identificar la diversidad de materiales disponibles en el mercado local, se adquiere una perspectiva amplia para la selección y confección de los muebles. Asimismo, el dominio de los diferentes procesos de ensamblado no solo garantiza la funcionalidad y calidad del producto final, sino que también asegura que cada paso se realice en consonancia con las normas de seguridad vigentes, proporcionando resultados satisfactorios desde el punto de vista estético y estructural.",
      capacitado: [
        "Implementar el proceso de soldadura eléctrica SMAW en la fabricación de estructuras metálicas básicas, de aplicación general e industrial.",
        "Utilizar equipos y herramientas en los procesos de fabricación de estructuras metálicas.",
        "Ejecutar proyectos de fabricación metálica por soldadura eléctrica.",
      ],

      requisitos: ["Ningún requisito"],
      dirigido:
        "Personal con 1 año de experiencia mínima en el perfil ocupacional.",
    },
  ],
};
