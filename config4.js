/**
 * ==========================================
 * HARMONY GLASS - CONFIGURACIÓN CENTRALIZADA
 * ==========================================
 * EDITAR ESTE ARCHIVO PARA CAMBIAR TODO EL CONTENIDO DEL SITIO
 */

const CONFIG = {
  // ==========================================
  // INFORMACIÓN DE LA EMPRESA
  // ==========================================
  empresa: {
    nombre: "Harmony Glass",
    nombreCorto: "HGLASS",
    slogan: "Ventanas de aluminio hechas a la medida de tu proyecto",
    descripcion: "Fabricación e instalación profesional de ventanas de aluminio en República Dominicana."
  },

  // ==========================================
  // CONTACTO
  // ==========================================
  contacto: {
    email: "harmonyglass0@gmail.com",
    whatsapp: "809413046", // Solo números, sin + ni espacios
    telefono: "+1 (809) 413-0846",
    telefonoDisplay: "Llamar",
    ubicacion: "República Dominicana",
    horario: "Lun-Vie 09:00 - 18:00",
    horarioEspecial: "Atención personalizada • Respuesta inmediata"
  },

  // ==========================================
  // REDES SOCIALES
  // ==========================================
  redes: {
    facebook: "https://facebook.com/harmonyglass",
    instagram: "https://instagram.com/harmonyglass",
    linkedin: "https://linkedin.com/company/harmonyglass"
  },

  // ==========================================
  // ASSETS VISUALES
  // ==========================================
  assets: {
    logo: "logo4.png",
    logoAlt: "Harmony Glass Logo",
    heroBackground: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    
    // Proyectos
    proyecto1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    proyecto2: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
    proyecto3: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070",
    proyecto4: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2053",
    proyecto5: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2087",
    proyecto6: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070"
  },
  // ==========================================
  // ADMIN
  // ==========================================
  admin: {
    password: "glass1234!" // Cambiar en producción
  },

  // ==========================================
  // TEXTOS DEL SITIO
  // ==========================================
  textos: {
    // SEO
    pageTitle: "Harmony Glass - Ventanas de Aluminio a la Medida | República Dominicana",
    pageDescription: "Fabricación e instalación profesional de ventanas de aluminio hechas a la medida en República Dominicana. Calidad garantizada.",

    // Navegación
    navCotizador: "Cotizador de Ventanas",
    navPorque: "Por qué Elegirnos",
    navProyectos: "Proyectos Realizados",
    navContacto: "Contacto",
    navCTA: "Cotiza Ahora",

    // Hero
    heroTitulo: "VENTANAS DE ALUMINIO<br>HECHAS A LA MEDIDA<br>DE TU PROYECTO",
    heroSubtitulo: "Fabricación e instalación profesional en República Dominicana",
    heroFeature1: "Fabricación a Medida",
    heroFeature2: "Aluminio de Alta Calidad",
    heroFeature3: "Instalación Profesional",
    heroBoton1: "Cotiza tu Ventana Ahora",
    heroBoton2: "Contáctanos",
    heroNota: "Sin compromisos • Atención personalizada • Respuesta inmediata",

    // Cotizador
    cotizadorTitulo: "COTIZADOR DE VENTANAS",
    cotizadorSubtitulo: "Calcula el tamaño de tu ventana en segundos",
    labelAncho: "ANCHO (PULGADAS)",
    labelAlto: "ALTO (PULGADAS)",
    btnCalcular: "Calcular Tamaño",
    cotizadorNota: "Ingresa las medidas de tu ventana y obtén el cálculo instantáneo",
    benefit1: "Medición Precisa",
    benefit2: "Respuesta Rápida",
    benefit3: "Sin Compromiso",

    // Por Qué Elegirnos
    porqueTitulo: "¿POR QUÉ <span>ELEGIRNOS</span>?",
    porqueSubtitulo: "Calidad, precisión y profesionalismo en cada proyecto",
    
    porqueCard1Titulo: "FABRICACIÓN A MEDIDA",
    porqueCard1Texto: "Cada ventana se fabrica según las especificaciones exactas de tu proyecto, garantizando un ajuste perfecto y acabados impecables.",
    
    porqueCard2Titulo: "ALUMINIO DE ALTA CALIDAD",
    porqueCard2Texto: "Utilizamos aluminio premium resistente a la corrosión, ideal para el clima tropical de República Dominicana.",
    
    porqueCard3Titulo: "INSTALACIÓN PROFESIONAL",
    porqueCard3Texto: "Equipo técnico especializado con años de experiencia en instalación de ventanas residenciales y comerciales.",
    
    porqueCard4Titulo: "ACABADOS PRECISOS",
    porqueCard4Texto: "Atención meticulosa a cada detalle, desde el corte hasta la instalación final, asegurando resultados impecables.",
    
    porqueCard5Titulo: "GARANTÍA Y CUMPLIMIENTO",
    porqueCard5Texto: "Respaldamos nuestro trabajo con garantía y cumplimos con los tiempos acordados en cada proyecto.",
    
    porqueCard6Titulo: "ENTREGA OPORTUNA",
    porqueCard6Texto: "Procesos optimizados que garantizan la entrega e instalación en el tiempo prometido sin comprometer la calidad.",
    
    btnVerDetalles: "Ver Más Detalles →",

    // Nuestro Proceso
    procesoTitulo: "NUESTRO <span>PROCESO</span>",
    procesoSubtitulo: "De la medición a la instalación: precisión en cada paso",
    
    procesoPaso1Titulo: "MEDICIÓN",
    procesoPaso1Texto: "Visita técnica al sitio para tomar medidas precisas y evaluar los requisitos específicos de tu proyecto.",
    
    procesoPaso2Titulo: "DISEÑO",
    procesoPaso2Texto: "Diseño personalizado basado en tus necesidades, estilo arquitectónico y presupuesto disponible.",
    
    procesoPaso3Titulo: "FABRICACIÓN",
    procesoPaso3Texto: "Fabricación con aluminio de alta calidad, cortes precisos y acabados profesionales en nuestras instalaciones.",
    
    procesoPaso4Titulo: "INSTALACIÓN",
    procesoPaso4Texto: "Instalación profesional realizada por técnicos especializados, garantizando sellado perfecto y funcionamiento óptimo.",
    
    procesoPaso5Titulo: "ENTREGA FINAL",
    procesoPaso5Texto: "Inspección final, limpieza del área de trabajo y entrega de documentación de garantía y mantenimiento.",
    
    btnConocerProceso: "Conoce Más Sobre Nuestro Proceso →",

    // Proyectos
    proyectosTitulo: "PROYECTOS <span>REALIZADOS</span>",
    proyectosSubtitulo: "Experiencia comprobada en proyectos residenciales y comerciales",
    
    proyectoTag1: "PROYECTO COMERCIAL",
    proyectoNombre1: "Edificio de Oficinas Moderno",
    
    proyectoTag2: "PROYECTO RESIDENCIAL",
    proyectoNombre2: "Fachada Residencial Completa",
    
    proyectoTag3: "PROYECTO RESIDENCIAL",
    proyectoNombre3: "Terrazas con Ventanas Panorámicas",
    
    proyectoTag4: "PROYECTO RESIDENCIAL",
    proyectoNombre4: "Sistema de Puertas Corredizas",
    
    proyectoTag5: "PROYECTO COMERCIAL",
    proyectoNombre5: "Estructura Arquitectónica Moderna",
    
    proyectoTag6: "INSTALACIÓN PREMIUM",
    proyectoNombre6: "Acabados de Precisión",
    
    btnVerProyectos: "Ver Todos Los Proyectos →",

    // Estadísticas
    statsTitulo: "LA CALIDAD SE NOTA<br>EN CADA <span>MEDIDA</span>",
    statsSubtitulo: "Transforma tu espacio con ventanas de aluminio diseñadas y fabricadas con precisión industrial",
    
    stat1Number: "15+",
    stat1Label: "Años de Experiencia",
    
    stat2Number: "500+",
    stat2Label: "Proyectos Completados",
    
    stat3Number: "100%",
    stat3Label: "Satisfacción Garantizada",
    
    btnCotizarAhora: "Cotiza Ahora",
    btnWhatsApp: "WhatsApp",
    btnLlamar: "Llamar",
    
    statsNota: "Atención personalizada • Respuesta en menos de 24 horas",

    // Footer
    footerDescription: "Fabricación e instalación profesional de ventanas de aluminio en República Dominicana.",
    footerNavTitulo: "NAVEGACIÓN",
    footerLink1: "Inicio",
    footerLink2: "Cotizador de Ventanas",
    footerLink3: "Por qué Elegirnos",
    footerLink4: "Proceso de Trabajo",
    footerLink5: "Contacto",
    
    footerServiciosTitulo: "SERVICIOS",
    footerServicio1: "Proyectos Realizados",
    footerServicio2: "Testimonios",
    footerServicio3: "Contacto",
    
    footerContactoTitulo: "CONTACTO",
    
    footerCopyright: "© 2026 HARMONY GLASS. Todos los derechos reservados.",
    footerPrivacidad: "Política de Privacidad",
    footerTerminos: "Términos de Servicio"
  },

  // ==========================================
  // MENSAJES DE WHATSAPP PREDEFINIDOS
  // ==========================================
  mensajes: {
    whatsappDefault: "Hola, estoy interesado en cotizar ventanas de aluminio",
    whatsappCotizador: "Hola, acabo de usar el cotizador y me gustaría más información",
    whatsappContacto: "Hola, me gustaría obtener más información sobre sus servicios"
  },

  // ==========================================
  // BACKEND
  // ==========================================
  backend: {
    googleAppsScriptURL: "https://script.google.com/macros/s/AKfycbzVwTVt7awaLlpTxl72CV1r1Gk0Cgd4OuslfOuvbzopyDZuIU2I7jm62RePqzzVD40Mog/exec",
    spreadsheetId: "1f8Yk4fs054MfZi65W-AkL2CKFtbm_VvpCKAUNJbZrkQ"
  }
};

// ==========================================
// NO EDITAR DEBAJO DE ESTA LÍNEA
// ==========================================

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

