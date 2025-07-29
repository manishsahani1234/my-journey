// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Fixed Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate the position to scroll to
            const headerOffset = 100; // Adjust this value if you have a fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Smooth scroll to the target
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Update URL without page reload
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});

// Scroll animation observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Handle different element types
            if (entry.target.classList.contains('section-header')) {
                entry.target.classList.add('animate-in');
            } else if (entry.target.classList.contains('about-text')) {
                entry.target.classList.add('animate-left');
            } else if (entry.target.classList.contains('contact-info')) {
                entry.target.classList.add('animate-left');
            } else if (entry.target.classList.contains('contact-form')) {
                entry.target.classList.add('animate-right');
            } else if (entry.target.classList.contains('education')) {
                entry.target.classList.add('animate-in');
            } else if (entry.target.classList.contains('skill-category')) {
                entry.target.classList.add('animate-in');

                // Animate skill bars
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            } else if (entry.target.classList.contains('project-card')) {
                entry.target.classList.add('animate-in');
            } else if (entry.target.classList.contains('resume-content')) {
                entry.target.classList.add('animate-in');
            } else if (entry.target.classList.contains('timeline-item')) {
                entry.target.classList.add('animate-flip');
            }

            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe elements
document.querySelectorAll('.section-header').forEach(el => observer.observe(el));
document.querySelectorAll('.about-text').forEach(el => observer.observe(el));
document.querySelectorAll('.education').forEach(el => observer.observe(el));
document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
document.querySelectorAll('.resume-content').forEach(el => observer.observe(el));
document.querySelectorAll('.contact-info').forEach(el => observer.observe(el));
document.querySelectorAll('.contact-form').forEach(el => observer.observe(el));
document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

// Form submission handler
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('thankYouModal');
const closeModal = document.getElementById('closeModal');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Show thank you modal
        if (modal) {
            modal.style.display = 'flex';
        }
        this.reset();
    });
}

// Close modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'none';
        }
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Handle page load with hash in URL
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});