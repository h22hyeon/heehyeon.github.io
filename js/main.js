// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.research-card, .publication-item, .cv-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Abstract toggle functionality
    const abstractToggles = document.querySelectorAll('.pub-abstract-toggle');
    abstractToggles.forEach(toggle => {
        const arrow = document.createElement('span');
        arrow.textContent = '↓';
        arrow.style.transition = 'transform 0.3s ease';
        arrow.style.display = 'inline-block';
        arrow.style.marginLeft = '0.5rem';
        arrow.style.fontSize = '0.75rem';
        toggle.appendChild(arrow);
        
        toggle.addEventListener('click', function() {
            const abstractId = this.getAttribute('data-abstract-id');
            const abstract = document.getElementById(abstractId);
            
            if (abstract) {
                const isActive = abstract.classList.contains('active');
                const arrowSpan = this.querySelector('span');
                
                if (isActive) {
                    abstract.classList.remove('active');
                    this.classList.remove('active');
                    this.childNodes[0].textContent = 'View abstract';
                    if (arrowSpan) arrowSpan.style.transform = 'rotate(0deg)';
                } else {
                    abstract.classList.add('active');
                    this.classList.add('active');
                    this.childNodes[0].textContent = 'Hide abstract';
                    if (arrowSpan) arrowSpan.style.transform = 'rotate(180deg)';
                }
            }
        });
    });
});

