// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'transparent';
    }
});

// Handle CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        // Add your payment processing logic here
        alert('Redirecionando para o checkout...');
    });
});
