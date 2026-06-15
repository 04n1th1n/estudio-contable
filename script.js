// ===== FUNCIONALIDADES JAVASCRIPT =====

// Smooth scroll y animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Animación de scroll para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards de servicios
    document.querySelectorAll('.servicio-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observar items de por qué nosotros
    document.querySelectorAll('.por-que-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Observar items sobre nosotros
    document.querySelectorAll('.about-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(this);
    
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
    
    // Simular envío del formulario
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    // Simulamos un delay de envío
    setTimeout(() => {
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        
        // Resetear formulario
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
        
        // Aquí irían las funciones para enviar datos reales a un servidor
        console.log('Mensaje de contacto recibido');
    }, 1500);
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

// Logger para debugging
console.log('JVL Auditores Consultores - Sitio web cargado correctamente');
console.log('Email: jonathanlemarie@gmail.com');
console.log('Teléfono: +56 9 8498 4538');