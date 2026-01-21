/**
 * HARMONY GLASS - MAIN JAVASCRIPT
 * Carga dinámica de contenido desde config.js
 */

// ==========================================
// CARGAR CONFIGURACIÓN AL INICIAR
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    initEventListeners();
});

// ==========================================
// FUNCIÓN PRINCIPAL: CARGAR CONFIGURACIÓN
// ==========================================
function loadConfig() {
    // SEO
    document.title = CONFIG.textos.pageTitle;
    document.getElementById('page-description').setAttribute('content', CONFIG.textos.pageDescription);

    // Logo
    document.getElementById('logo-img').src = CONFIG.assets.logo;
    document.getElementById('logo-img').alt = CONFIG.assets.logoAlt;
    document.getElementById('footer-logo-img').src = CONFIG.assets.logo;
    document.getElementById('footer-logo-img').alt = CONFIG.assets.logoAlt;

    // Hero background
    document.getElementById('hero').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${CONFIG.assets.heroBackground})`;

    // Navegación
    document.getElementById('nav-cotizador').textContent = CONFIG.textos.navCotizador;
    document.getElementById('nav-porque').textContent = CONFIG.textos.navPorque;
    document.getElementById('nav-proyectos').textContent = CONFIG.textos.navProyectos;
    document.getElementById('nav-contacto').textContent = CONFIG.textos.navContacto;
    document.getElementById('btn-header-cta').textContent = CONFIG.textos.navCTA;

    // Hero
    document.getElementById('hero-title').innerHTML = CONFIG.textos.heroTitulo;
    document.getElementById('hero-subtitle').textContent = CONFIG.textos.heroSubtitulo;
    document.getElementById('hero-feature-1').textContent = CONFIG.textos.heroFeature1;
    document.getElementById('hero-feature-2').textContent = CONFIG.textos.heroFeature2;
    document.getElementById('hero-feature-3').textContent = CONFIG.textos.heroFeature3;
    document.getElementById('btn-hero-cotizar').textContent = CONFIG.textos.heroBoton1;
    document.getElementById('btn-hero-contacto').textContent = CONFIG.textos.heroBoton2;
    document.getElementById('hero-note').textContent = CONFIG.textos.heroNota;

    // Cotizador
    document.getElementById('cotizador-title').textContent = CONFIG.textos.cotizadorTitulo;
    document.getElementById('cotizador-subtitle').textContent = CONFIG.textos.cotizadorSubtitulo;
    document.getElementById('label-ancho').textContent = CONFIG.textos.labelAncho;
    document.getElementById('label-alto').textContent = CONFIG.textos.labelAlto;
    document.getElementById('btn-calcular').textContent = CONFIG.textos.btnCalcular;
    document.getElementById('cotizador-note').textContent = CONFIG.textos.cotizadorNota;
    document.getElementById('benefit-1').textContent = CONFIG.textos.benefit1;
    document.getElementById('benefit-2').textContent = CONFIG.textos.benefit2;
    document.getElementById('benefit-3').textContent = CONFIG.textos.benefit3;

    // Por Qué Elegirnos
    document.getElementById('porque-title').innerHTML = CONFIG.textos.porqueTitulo;
    document.getElementById('porque-subtitle').textContent = CONFIG.textos.porqueSubtitulo;
    document.getElementById('porque-card-1-title').textContent = CONFIG.textos.porqueCard1Titulo;
    document.getElementById('porque-card-1-text').textContent = CONFIG.textos.porqueCard1Texto;
    document.getElementById('porque-card-2-title').textContent = CONFIG.textos.porqueCard2Titulo;
    document.getElementById('porque-card-2-text').textContent = CONFIG.textos.porqueCard2Texto;
    document.getElementById('porque-card-3-title').textContent = CONFIG.textos.porqueCard3Titulo;
    document.getElementById('porque-card-3-text').textContent = CONFIG.textos.porqueCard3Texto;
    document.getElementById('porque-card-4-title').textContent = CONFIG.textos.porqueCard4Titulo;
    document.getElementById('porque-card-4-text').textContent = CONFIG.textos.porqueCard4Texto;
    document.getElementById('porque-card-5-title').textContent = CONFIG.textos.porqueCard5Titulo;
    document.getElementById('porque-card-5-text').textContent = CONFIG.textos.porqueCard5Texto;
    document.getElementById('porque-card-6-title').textContent = CONFIG.textos.porqueCard6Titulo;
    document.getElementById('porque-card-6-text').textContent = CONFIG.textos.porqueCard6Texto;
    document.getElementById('btn-ver-detalles').textContent = CONFIG.textos.btnVerDetalles;

    // Proceso
    document.getElementById('proceso-title').innerHTML = CONFIG.textos.procesoTitulo;
    document.getElementById('proceso-subtitle').textContent = CONFIG.textos.procesoSubtitulo;
    document.getElementById('proceso-paso-1-title').textContent = CONFIG.textos.procesoPaso1Titulo;
    document.getElementById('proceso-paso-1-text').textContent = CONFIG.textos.procesoPaso1Texto;
    document.getElementById('proceso-paso-2-title').textContent = CONFIG.textos.procesoPaso2Titulo;
    document.getElementById('proceso-paso-2-text').textContent = CONFIG.textos.procesoPaso2Texto;
    document.getElementById('proceso-paso-3-title').textContent = CONFIG.textos.procesoPaso3Titulo;
    document.getElementById('proceso-paso-3-text').textContent = CONFIG.textos.procesoPaso3Texto;
    document.getElementById('proceso-paso-4-title').textContent = CONFIG.textos.procesoPaso4Titulo;
    document.getElementById('proceso-paso-4-text').textContent = CONFIG.textos.procesoPaso4Texto;
    document.getElementById('proceso-paso-5-title').textContent = CONFIG.textos.procesoPaso5Titulo;
    document.getElementById('proceso-paso-5-text').textContent = CONFIG.textos.procesoPaso5Texto;
    document.getElementById('btn-conocer-proceso').textContent = CONFIG.textos.btnConocerProceso;

    // Proyectos
    document.getElementById('proyectos-title').innerHTML = CONFIG.textos.proyectosTitulo;
    document.getElementById('proyectos-subtitle').textContent = CONFIG.textos.proyectosSubtitulo;
    
    document.getElementById('proyecto-img-1').src = CONFIG.assets.proyecto1;
    document.getElementById('proyecto-tag-1').textContent = CONFIG.textos.proyectoTag1;
    document.getElementById('proyecto-nombre-1').textContent = CONFIG.textos.proyectoNombre1;
    
    document.getElementById('proyecto-img-2').src = CONFIG.assets.proyecto2;
    document.getElementById('proyecto-tag-2').textContent = CONFIG.textos.proyectoTag2;
    document.getElementById('proyecto-nombre-2').textContent = CONFIG.textos.proyectoNombre2;
    
    document.getElementById('proyecto-img-3').src = CONFIG.assets.proyecto3;
    document.getElementById('proyecto-tag-3').textContent = CONFIG.textos.proyectoTag3;
    document.getElementById('proyecto-nombre-3').textContent = CONFIG.textos.proyectoNombre3;
    
    document.getElementById('proyecto-img-4').src = CONFIG.assets.proyecto4;
    document.getElementById('proyecto-tag-4').textContent = CONFIG.textos.proyectoTag4;
    document.getElementById('proyecto-nombre-4').textContent = CONFIG.textos.proyectoNombre4;
    
    document.getElementById('proyecto-img-5').src = CONFIG.assets.proyecto5;
    document.getElementById('proyecto-tag-5').textContent = CONFIG.textos.proyectoTag5;
    document.getElementById('proyecto-nombre-5').textContent = CONFIG.textos.proyectoNombre5;
    
    document.getElementById('proyecto-img-6').src = CONFIG.assets.proyecto6;
    document.getElementById('proyecto-tag-6').textContent = CONFIG.textos.proyectoTag6;
    document.getElementById('proyecto-nombre-6').textContent = CONFIG.textos.proyectoNombre6;
    
    document.getElementById('btn-ver-proyectos').textContent = CONFIG.textos.btnVerProyectos;

    // Estadísticas
    document.getElementById('stats-title').innerHTML = CONFIG.textos.statsTitulo;
    document.getElementById('stats-subtitle').textContent = CONFIG.textos.statsSubtitulo;
    document.getElementById('stat-1-number').textContent = CONFIG.textos.stat1Number;
    document.getElementById('stat-1-label').textContent = CONFIG.textos.stat1Label;
    document.getElementById('stat-2-number').textContent = CONFIG.textos.stat2Number;
    document.getElementById('stat-2-label').textContent = CONFIG.textos.stat2Label;
    document.getElementById('stat-3-number').textContent = CONFIG.textos.stat3Number;
    document.getElementById('stat-3-label').textContent = CONFIG.textos.stat3Label;
    document.getElementById('btn-cotizar-ahora').textContent = CONFIG.textos.btnCotizarAhora;
    document.getElementById('btn-whatsapp-cta').textContent = CONFIG.textos.btnWhatsApp;
    document.getElementById('btn-llamar-cta').textContent = CONFIG.textos.btnLlamar;
    document.getElementById('stats-note').textContent = CONFIG.textos.statsNota;

    // Footer
    document.getElementById('footer-description').textContent = CONFIG.textos.footerDescription;
    document.getElementById('footer-nav-title').textContent = CONFIG.textos.footerNavTitulo;
    document.getElementById('footer-link-1').textContent = CONFIG.textos.footerLink1;
    document.getElementById('footer-link-2').textContent = CONFIG.textos.footerLink2;
    document.getElementById('footer-link-3').textContent = CONFIG.textos.footerLink3;
    document.getElementById('footer-link-4').textContent = CONFIG.textos.footerLink4;
    document.getElementById('footer-link-5').textContent = CONFIG.textos.footerLink5;
    document.getElementById('footer-servicios-title').textContent = CONFIG.textos.footerServiciosTitulo;
    document.getElementById('footer-servicio-1').textContent = CONFIG.textos.footerServicio1;
    document.getElementById('footer-servicio-2').textContent = CONFIG.textos.footerServicio2;
    document.getElementById('footer-servicio-3').textContent = CONFIG.textos.footerServicio3;
    document.getElementById('footer-contacto-title').textContent = CONFIG.textos.footerContactoTitulo;
    document.getElementById('footer-telefono').textContent = CONFIG.contacto.telefono;
    document.getElementById('footer-email').textContent = CONFIG.contacto.email;
    document.getElementById('footer-ubicacion').textContent = CONFIG.contacto.ubicacion;
    document.getElementById('footer-copyright').textContent = CONFIG.textos.footerCopyright;
    document.getElementById('footer-privacidad').textContent = CONFIG.textos.footerPrivacidad;
    document.getElementById('footer-terminos').textContent = CONFIG.textos.footerTerminos;

    // Redes sociales
    document.getElementById('social-facebook').href = CONFIG.redes.facebook;
    document.getElementById('social-instagram').href = CONFIG.redes.instagram;
    document.getElementById('social-linkedin').href = CONFIG.redes.linkedin;
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function initEventListeners() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // WhatsApp buttons
    const whatsappButtons = [
        document.getElementById('btn-whatsapp-cta')
    ];
    
    whatsappButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const phone = CONFIG.contacto.whatsapp;
                const message = encodeURIComponent(CONFIG.mensajes.whatsappDefault);
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            });
        }
    });

    // Call button
    const callButtons = [
        document.getElementById('btn-hero-contacto'),
        document.getElementById('btn-llamar-cta')
    ];
    
    callButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                window.location.href = `tel:${CONFIG.contacto.telefono}`;
            });
        }
    });

    // Cotizador
    document.getElementById('btn-calcular').addEventListener('click', calcularVentana);
}

// ==========================================
// CALCULAR TAMAÑO DE VENTANA
// ==========================================
function calcularVentana() {
    const ancho = parseFloat(document.getElementById('input-ancho').value);
    const alto = parseFloat(document.getElementById('input-alto').value);

    if (!ancho || !alto || ancho <= 0 || alto <= 0) {
        alert('Por favor ingresa medidas válidas');
        return;
    }

    const area = (ancho * alto).toFixed(2);
    const resultado = document.getElementById('resultado-cotizacion');
    const resultadoTexto = document.getElementById('resultado-texto');

    resultadoTexto.textContent = `Área total: ${area} pulgadas cuadradas (${ancho}" x ${alto}")`;
    resultado.style.display = 'block';

    // Scroll to resultado
    resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Opcional: Enviar a WhatsApp con las medidas
    setTimeout(() => {
        if (confirm('¿Deseas enviar estas medidas por WhatsApp para una cotización exacta?')) {
            const phone = CONFIG.contacto.whatsapp;
            const message = encodeURIComponent(`Hola, necesito cotizar una ventana de ${ancho}" x ${alto}" (${area} pulgadas cuadradas)`);
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        }
    }, 1000);
}
