// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (placeholder - ampliar según necesidad)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Form submission handlers (conectar con Google Apps Script)
function initFormHandlers() {
    // Placeholder para conectar formularios con backend
    // Se implementará cuando se añadan formularios específicos
    console.log('Form handlers initialized');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initFormHandlers();
});

// WhatsApp button functionality
const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-large');
whatsappButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const phoneNumber = '18094827859'; // Formato sin +, sin espacios, sin guiones
        const message = encodeURIComponent('Hola, estoy interesado en sus servicios de inversión inmobiliaria.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
});

// Call button functionality
const callButtons = document.querySelectorAll('.btn-outline, .btn-call-large');
callButtons.forEach(btn => {
    if (btn.textContent.includes('Llamar')) {
        btn.addEventListener('click', () => {
            window.location.href = 'tel:+18094827859';
        });
    }
});
