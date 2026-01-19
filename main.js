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
document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-cta').forEach(btn => {
    btn.addEventListener('click', () => {
        const phone = '18094827859';
        const msg = encodeURIComponent('Hola, estoy interesado en sus servicios de inversión inmobiliaria.');
        window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    });
});

// Call buttons
document.querySelectorAll('.btn-call, .btn-call-cta').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'tel:+18094827859';
    });
});

// Mobile menu (básico)
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
