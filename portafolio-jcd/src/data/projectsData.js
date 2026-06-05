const projects = [
  {
    id: "proyecto-1",
    title: "Sistema de Gestión de Proyectos - AMG",
    shortDescription: "Sistema de gestión para el control de proyectos realizados por la Asociación Maya Guatemala - AMG.",
    fullDescription: "La Asociación gestionaba sus proyectos sociales y beneficiarios con hojas de Excel dispersas, generando duplicidad de datos, falta de control presupuestario y reportes lentos. Como solución, desarrollé un sistema web completo que centraliza la gestión de proyectos por fases, el censo de beneficiarios, la ejecución presupuestaria y la carga de evidencias, con generación de reportes exportables en PDF y Excel. El sistema implementa autenticación segura, control de acceso por roles y bitácoras de auditoría, garantizando la integridad de la información. Gracias a esto, la organización eliminó la dispersión de datos, obtuvo visibilidad en tiempo real sobre sus proyectos y redujo la generación de informes de días a segundos.",
    images: [
      "/images/amg/logo.jpg",
      "/images/amg/inicio2-amg.png",
      "/images/amg/dash2-amg.png",
      "/images/amg/pr2-amg.png",
      "/images/amg/bn1-amg.png",
      "/images/amg/bn2-amg.png",
      "/images/amg/bn3-amg.png",
      "/images/amg/ejc1-amg.png",
      "/images/amg/ejc3-amg.png",
      "/images/amg/ejc2-amg.png",
      "/images/amg/rep1-amg.png",
      "/images/amg/rep2-amg.png",
      "/images/amg/adm1-amg.png",
      "/images/amg/adm2-amg.png",
      "/images/amg/adm3-amg.png",
      "/images/amg/adm4-amg.png"
    ],
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "DaisyUI", "JS","HTML5", "CSS"],
    features: [
      "Gestión centralizada de proyectos",
      "Censo de beneficiarios en tiempo real",
      "Control presupuestario detallado",
      "Generación de reportes en segundos",
      "Control de acceso por roles",
      "Bitácora de auditoría completa"
    ],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "proyecto-2",
    title: "Plataforma de E-learning",
    shortDescription: "Plataforma educativa con cursos, quizzes y seguimiento de progreso.",
    fullDescription: "Plataforma de aprendizaje en línea diseñada para instituciones educativas. Permite la creación de cursos, gestión de estudiantes, seguimiento de progreso y evaluaciones automáticas. Incluye panel para instructores y estudiantes con roles diferenciados.",
    images: [
      "/images/proyecto2-1.jpg",
      "/images/proyecto2-2.jpg"
    ],
    technologies: ["Node.js", "React", "MySQL", "HTML5", "CSS"],
    features: [
      "Creación y gestión de cursos",
      "Sistema de quizzes y evaluaciones",
      "Seguimiento de progreso del estudiante",
      "Roles diferenciados (instructor/estudiante)",
      "Panel de analytics"
    ],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "proyecto-3",
    title: "Dashboard DevOps",
    shortDescription: "Dashboard para monitoreo de contenedores y servidores.",
    fullDescription: "Herramienta de monitoreo para infraestructura DevOps. Visualiza el estado de contenedores Docker, uso de recursos de servidores VPS y alertas de servicios. Integra métricas en tiempo real desde múltiples servidores.",
    images: [
      "/images/proyecto3-1.jpg",
      "/images/proyecto3-2.jpg",
      "/images/proyecto3-3.jpg"
    ],
    technologies: ["React", "Node.js", "Docker", "Ubuntu Server"],
    features: [
      "Monitoreo de contenedores Docker en tiempo real",
      "Métricas de uso de CPU, RAM y disco",
      "Alertas configurables por servicio",
      "Soporte multi-servidor",
      "Interfaz responsive"
    ],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "proyecto-4",
    title: "API RESTful de Pagos",
    shortDescription: "API segura para procesamiento de pagos y transacciones.",
    fullDescription: "API RESTful desarrollada para integrar sistemas de pagos. Soporta múltiples métodos de pago, validación de transacciones, generación de facturas y reportes financieros. Construida con .NET y SQL Server para alta disponibilidad.",
    images: [
      "/images/proyecto4-1.jpg",
      "/images/proyecto4-2.jpg"
    ],
    technologies: [".NET", "C#", "SQL Server", "Docker"],
    features: [
      "Procesamiento seguro de pagos",
      "Soporte para múltiples métodos de pago",
      "Validación y auditoría de transacciones",
      "Generación automática de facturas",
      "Reportes financieros detallados"
    ],
    liveUrl: "",
    githubUrl: ""
  }
];

export default projects;
