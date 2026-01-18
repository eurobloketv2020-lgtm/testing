/**
 * =============================================
 * JGV INMOBILIARIA - MAIN JAVASCRIPT
 * Landing Page - Santo Domingo Este, RD
 * =============================================
 */

// ===== CONFIGURATION =====
const CONFIG = {
    // Google Apps Script Endpoint (TO BE CONFIGURED)
    GAS_ENDPOINT: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    
    // App Settings
    smoothScrollOffset: 112, // Header height
    mobileBreakpoint: 1024
};

// ===== DOM ELEMENTS =====
const DOM = {
    header: document.getElementById('main-header'),
    mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
    mobileMenu: document.querySelector('.mobile-menu'),
    navLinks: document.querySelectorAll('a[href^="#"]'),
    mobileMenuLinks: document.querySelectorAll('.mobile-menu-link')
};

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    if (!DOM.mobileMenuBtn || !DOM.mobileMenu) return;
    
    DOM.mobileMenuBtn.addEventListener('click', () => {
        const isOpen = DOM.mobileMenu.classList.contains('active');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (DOM.mobileMenu.classList.contains('active') &&
            !DOM.mobileMenu.contains(e.target) &&
            !DOM.mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu when clicking a link
    DOM.mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

function openMobileMenu() {
    DOM.mobileMenu.classList.add('active');
    DOM.mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    DOM.mobileMenu.classList.remove('active');
    DOM.mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.style.overflow = '';
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle anchor links
            if (!href.startsWith('#')) return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - CONFIG.smoothScrollOffset;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            DOM.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            DOM.header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// ===== INTERSECTION OBSERVER (ANIMATIONS) =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll(
        '.feature-card, .service-card, .stat'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// ===== GOOGLE APPS SCRIPT INTEGRATION =====

/**
 * Send data to Google Apps Script
 * @param {Object} data - Data to send
 * @returns {Promise<Object>} Response from GAS
 */
async function sendToGAS(data) {
    try {
        const response = await fetch(CONFIG.GAS_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors', // Required for GAS
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        // Note: With no-cors mode, response will be opaque
        // You won't be able to read the response directly
        // GAS should handle the request and respond appropriately
        
        return { success: true };
    } catch (error) {
        console.error('Error sending to GAS:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Example: Contact Form Handler (if you add a form)
 * TO BE IMPLEMENTED when contact form is added
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Get form data
        const formData = {
            action: 'submitContact',
            name: contactForm.querySelector('[name="name"]').value,
            email: contactForm.querySelector('[name="email"]').value,
            phone: contactForm.querySelector('[name="phone"]').value,
            message: contactForm.querySelector('[name="message"]').value,
            timestamp: new Date().toISOString()
        };
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        try {
            // Send to Google Apps Script
            const result = await sendToGAS(formData);
            
            if (result.success) {
                // Success feedback
                showNotification('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Error al enviar');
            }
        } catch (error) {
            // Error feedback
            showNotification('Hubo un error. Por favor, intente nuevamente o contáctenos por WhatsApp.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Restore button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/**
 * Show notification to user
 * @param {string} message - Notification message
 * @param {string} type - success | error | info
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6',
        color: 'white',
        fontWeight: '600',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== ANALYTICS & TRACKING =====

/**
 * Track user interactions (optional)
 * Can be connected to Google Analytics or GAS for tracking
 */
function trackEvent(category, action, label = '') {
    const eventData = {
        action: 'trackEvent',
        category,
        action: action,
        label,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        page: window.location.pathname
    };
    
    // Send to GAS for logging
    // sendToGAS(eventData);
    
    console.log('Event tracked:', eventData);
}

// Track important clicks
function initEventTracking() {
    // Track WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('engagement', 'whatsapp_click', link.getAttribute('href'));
        });
    });
    
    // Track phone clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('engagement', 'phone_click', link.getAttribute('href'));
        });
    });
    
    // Track CTA buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('engagement', 'cta_click', btn.textContent.trim());
        });
    });
}

// ===== UTILITIES =====

/**
 * Detect if user is on mobile
 */
function isMobile() {
    return window.innerWidth < CONFIG.mobileBreakpoint;
}

/**
 * Get viewport dimensions
 */
function getViewport() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

/**
 * Debounce function for performance
 */
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== INITIALIZATION =====
function init() {
    console.log('🚀 JGV Inmobiliaria - Frontend initialized');
    
    // Initialize all modules
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initContactForm(); // Will only work if form exists
    initEventTracking();
    
    // Log environment info
    console.log('Environment:', {
        viewport: getViewport(),
        isMobile: isMobile(),
        userAgent: navigator.userAgent
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on desktop resize
    if (!isMobile() && DOM.mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
}, 250));

// ===== EXPORT FOR EXTERNAL USE =====
window.JGV = {
    sendToGAS,
    showNotification,
    trackEvent,
    CONFIG
};

console.log('✅ JGV Inmobiliaria loaded successfully');
