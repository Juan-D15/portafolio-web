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
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "DaisyUI", "JS","HTML5", "CSS", "React"],
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
    title: "Gestor de Eventos MAGA - PURULHÁ",
    shortDescription: "Sistema web para registrar, dar seguimiento y mapear las capacitaciones, entregas y ayudas que ejecuta la oficina regional del MAGA en Purulhá.",
    fullDescription: "La oficina regional del Ministerio de Agricultura de Purulhá gestionaba sus actividades de campo con Excel, Word y papel, lo que provocaba duplicidad de datos, pérdida de información histórica y retrasos en la elaboración de informes. Se desarrolló un sistema web que centraliza el registro de capacitaciones, entregas y ayudas vinculadas a beneficiarios y comunidades, con formulario responsivo para captura desde el móvil. Incluye un mapa interactivo que visualiza las actividades por comunidad con filtros en tiempo real, generación de reportes exportables en Word y PDF, y un módulo de usuarios con control de acceso por roles y bitácora de auditoría. Como resultado, la oficina eliminó el uso de registros manuales, mejoró la trazabilidad de sus operaciones y redujo el tiempo de generación de informes.",
    images: [
      "/images/mgpurl/inicio1-mgp.png",
      "/images/mgpurl/dash1-mgp.png",
      "/images/mgpurl/pr1-mgp.png",
      "/images/mgpurl/pr2-mgp.png",
      "/images/mgpurl/pr3-mgp.png",
      "/images/mgpurl/cm1-mgp.png",
      "/images/mgpurl/rg1-mgp.png",
      "/images/mgpurl/conf1-mgp.png"      
    ],
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "DaisyUI", "JS","HTML5", "CSS"],
    features: [
      "Registro centralizado de eventos y actividades de campo",
      "Mapa interactivo de actividades por comunidad y región",
      "Reportes automáticos exportables en Word y PDF",
      "Calendario de eventos con notificaciones",
      "Modo sin conexión para captura de datos en campo",
      "Bitácora completa de trazabilidad y auditoría"
    ],
    liveUrl: "https://magapurulha.org/",
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
