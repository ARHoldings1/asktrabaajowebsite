document.addEventListener('DOMContentLoaded', function() {
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the faster

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        
        // Calculate increment based on target value
        const inc = target / speed;

        const updateCount = () => {
            if (count < target) {
                count += inc;
                // Format number with commas
                counter.innerText = Math.ceil(count).toLocaleString();
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    };

    // Intersection Observer for counter animation
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Optional: Add smooth scrolling for testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // World map dots animation
    const worldMap = document.querySelector('.world-map');
    if (worldMap) {
        // Update the locations array with precise country coordinates
        const locations = [
            // Western Countries
            { x: '20%', y: '45%', type: 'conglomerate' },  // USA
            { x: '45%', y: '42%', type: 'midsize' },       // Netherlands
            
            // Middle East
            { x: '55%', y: '48%', type: 'midsize' },       // Dubai
            
            // South Asia
            { x: '62%', y: '50%', type: 'startup' },       // India
            { x: '65%', y: '52%', type: 'startup' },       // Sri Lanka
            
            // Southeast Asia
            { x: '70%', y: '48%', type: 'midsize' },       // Thailand
            { x: '72%', y: '50%', type: 'government' },    // Cambodia
            { x: '75%', y: '55%', type: 'startup' },       // Singapore
            { x: '73%', y: '53%', type: 'government' },    // Malaysia
            
            // East Asia
            { x: '80%', y: '42%', type: 'midsize' },       // Japan
            
            // Oceania
            { x: '85%', y: '65%', type: 'startup' },       // Australia
            { x: '90%', y: '70%', type: 'startup' }        // New Zealand
        ];

        // Update the dot creation with better animation timing
        locations.forEach((location, index) => {
            const dot = document.createElement('div');
            dot.className = `map-dot ${location.type}`;
            dot.style.left = location.x;
            dot.style.top = location.y;
            
            // Stagger the animation start time
            dot.style.animationDelay = `${index * 0.1}s`;
            
            worldMap.appendChild(dot);
        });
    }
}); 