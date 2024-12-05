document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (track && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const scrollAmount = track.offsetWidth;
            track.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            const scrollAmount = track.offsetWidth;
            track.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Handle feature navigation
    const exploreFeatures = document.querySelector('a[href="#features"]');
    if (exploreFeatures) {
        exploreFeatures.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'features.html';
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}); 