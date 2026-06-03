const projects = [
  {
    id: "proyecto-1",
    title: "Sistema de Gestión de Proyectos - AMG",
    shortDescription: "Aplicación web para gestión de stock y ventas en tiempo real.",
    fullDescription: "Este proyecto es un sistema completo de gestión de inventarios desarrollado para una empresa retail. Incluye control de stock en tiempo real, generación de reportes automáticos, alertas de bajo inventario y un panel de administración intuitivo. El backend está construido con Django y PostgreSQL, mientras que el frontend utiliza React con un diseño responsive.",
    images: [
      "/images/proyecto1-1.jpg",
      "/images/proyecto1-2.jpg",
      "/images/proyecto1-3.jpg"
    ],
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "DaisyUI", "HTML5", "CSS"],
    features: [
      "Control de stock en tiempo real",
      "Generación automática de reportes",
      "Alertas de bajo inventario",
      "Panel de administración intuitivo",
      "API RESTful documentada"
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
