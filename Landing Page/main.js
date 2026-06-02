document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic (Multiple can be open at once)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Toggle active class on item
            item.classList.toggle('active');
            
            // Toggle max-height for smooth transition
            if (item.classList.contains('active')) {
                // adding a small buffer to scrollHeight to ensure padding is accounted for
                content.style.maxHeight = content.scrollHeight + 40 + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Scroll Animations using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Mobile Navigation & Smart Hide/Reveal
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileOverlay = document.querySelector('.nav-mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    let lastScrollY = 0;
    const scrollThreshold = 80;
    let isMenuOpen = false;

    // Toggle Mobile Menu
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        const expanded = isMenuOpen ? 'true' : 'false';
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', expanded);
            hamburger.classList.toggle('is-active', isMenuOpen);
        }
        
        if (mobileOverlay) {
            if (isMenuOpen) {
                mobileOverlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Lock scroll
            } else {
                mobileOverlay.classList.add('hidden');
                document.body.style.overflow = ''; // Unlock scroll
            }
        }
    }

    if (hamburger && mobileOverlay) {
        hamburger.addEventListener('click', toggleMobileMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMobileMenu();
            });
        });
        
        // Close menu when clicking outside links (on the overlay itself)
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay && isMenuOpen) {
                toggleMobileMenu();
            }
        });
    }

    // Smart Hide/Reveal Scroll Listener
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (isMenuOpen) return; // Pause scroll listener while menu is open

            const currentScrollY = window.scrollY;

            // Toggle background once past threshold
            if (currentScrollY > scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.remove('hidden'); // Always show at top
            }

            // Hide on scroll down, reveal on scroll up (Mobile only)
            if (window.innerWidth <= 767) {
                if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
                    navbar.classList.add('hidden');
                } else if (currentScrollY < lastScrollY) {
                    navbar.classList.remove('hidden');
                }
            } else {
                navbar.classList.remove('hidden');
                navbar.removeAttribute('inert');
            }

            lastScrollY = currentScrollY;
        }, { passive: true });

        // Accessibility: remove from tab order when hidden
        navbar.addEventListener('transitionend', () => {
            if (window.innerWidth <= 767 && navbar.classList.contains('hidden')) {
                navbar.setAttribute('inert', '');
            } else {
                navbar.removeAttribute('inert');
            }
        });
    }
});
