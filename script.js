// ===== FUNCIONALIDADES JAVASCRIPT =====

// ═══ OPTIMIZED: Evitar Forced Reflow ═══
// Batching: Leer primero, escribir después (no en loop)

document.addEventListener('DOMContentLoaded', function() {
    // Batch 1: Setup observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        // Usar classList en lugar de style para evitar reflow
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Batch 2: Recopilar todos los elementos primero
    const servicioCards = document.querySelectorAll('.servicio-card');
    const porQueItems = document.querySelectorAll('.por-que-item');
    const aboutItems = document.querySelectorAll('.about-item');

    // Batch 3: Escribir estilos en batch (una sola reflow)
    const elements = Array.from(servicioCards).concat(Array.from(porQueItems)).concat(Array.from(aboutItems));
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${(index % 6) * 0.1}s`;
        observer.observe(el);
    });
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar datos
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!isValid) {
        alert('Por favor completa todos los campos');
        return;
    }

    // Enviar a FormSubmit.co
    const button = this.querySelector('button');
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    button.disabled = true;

    const formData = new FormData(this);
    fetch('https://formsubmit.co/jonathanlemarie@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            this.reset();
        } else {
            alert('Hubo un error. Por favor intenta de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error enviando tu mensaje. Intenta de nuevo.');
    })
    .finally(() => {
        button.innerHTML = originalHTML;
        button.disabled = false;
    });
});

// Toggle del menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// Agregar estilos dinámicos para el menú móvil
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .nav-links.active {
            max-height: 300px;
        }
        
        .nav-links li {
            border-bottom: 1px solid #e5e7eb;
        }
        
        .nav-links a {
            display: block;
            padding: 1rem;
        }
    }
`;
document.head.appendChild(style);

// Agregar animación al hero
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
});

// Efecto parallax en hero (opcional)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPos = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
    }
});

// Función para abrir enlace de WhatsApp
function openWhatsApp() {
    const phone = '56984984538';
    const message = 'Hola, me gustaría consultar sobre los servicios de JVL Auditores Consultores.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Función para enviar email
function sendEmail() {
    const email = 'jonathanlemarie@gmail.com';
    const subject = 'Consulta sobre servicios de JVL Auditores';
    const body = 'Hola, me gustaría consultar sobre los servicios que ofrecen.';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
}

// ═══ PERFORMANCE OPTIMIZATION ═══

// Request Animation Frame para evitar forced reflow
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Lazy load imágenes
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, { threshold: 0.01 });
            document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
        }
    });
} else {
    // Fallback para navegadores sin requestIdleCallback
    window.addEventListener('load', () => {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, { threshold: 0.01 });
            document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
        }
    });
}

// Preconectar a recursos externos (no-blocking)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = 'https://formsubmit.co';
        document.head.appendChild(link);
    });
} else {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://formsubmit.co';
    document.head.appendChild(link);
}

// Logger para debugging
console.log('JVL Auditores Consultores - Sitio web cargado correctamente');
console.log('Email: jonathanlemarie@gmail.com');
console.log('Teléfono: +56 9 8498 4538');
console.log('Tiempo de carga:', performance.now().toFixed(2) + 'ms');