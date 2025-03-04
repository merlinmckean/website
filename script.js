document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console and show a confirmation
            console.log('Form submitted:', { name, email, message });
            
            // Show confirmation (you would replace this with your preferred method)
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.disabled = true;
            button.textContent = 'Sending...';
            
            // Simulate sending (would be replaced with actual API call)
            setTimeout(() => {
                button.textContent = 'Message Sent!';
                
                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = originalText;
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    
    // Elements to animate
    const elementsToAnimate = [
        ...document.querySelectorAll('.project-card'),
        ...document.querySelectorAll('h2'),
        ...document.querySelectorAll('.lead'),
        document.querySelector('form')
    ].filter(Boolean);
    
    elementsToAnimate.forEach(element => {
        element.classList.add('animate-element');
        observer.observe(element);
    });
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            projectCards.forEach(c => {
                if (c !== card) c.style.opacity = '0.6';
            });
        });
        
        card.addEventListener('mouseleave', () => {
            projectCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card {
            transition: opacity 0.3s ease, transform 0.5s ease;
        }
        
        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);

    // Add spotlight effect
    document.addEventListener('mousemove', (e) => {
        // Update CSS variables for the spotlight effect
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        document.documentElement.style.setProperty('--x', `${x}%`);
        document.documentElement.style.setProperty('--y', `${y}%`);
    });

    // Remove the existing shimmer cursor function and replace with a blue spotlight
    function initCursorSpotlight() {
        // Create a spotlight element
        const spotlight = document.createElement('div');
        spotlight.className = 'cursor-spotlight';
        document.body.appendChild(spotlight);

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
            
            // Make sure the spotlight is visible
            spotlight.style.opacity = '1';
        });

        // Hide spotlight when mouse leaves window
        document.addEventListener('mouseleave', () => {
            spotlight.style.opacity = '0';
        });

        // Add CSS for spotlight
        const style = document.createElement('style');
        style.textContent = `
            .cursor-spotlight {
                position: fixed;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(41, 128, 255, 0.3) 0%, rgba(41, 128, 255, 0.1) 40%, rgba(41, 128, 255, 0) 70%);
                pointer-events: none;
                transform: translate(-50%, -50%);
                z-index: 9999;
                transition: opacity 0.3s ease;
                mix-blend-mode: screen;
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize cursor spotlight instead of shimmer
    initCursorSpotlight();
});