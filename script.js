// Get the card element and all parallax layers
const card = document.querySelector('.card');
const cardInner = document.querySelector('.card-inner');
const parallaxLayers = document.querySelectorAll('.parallax-layer');

// Maximum movement distance in pixels
const maxMovement = 40;

// Mouse move handler for parallax effect
card.addEventListener('mousemove', (e) => {
    // Get card dimensions and position
    const rect = cardInner.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / cardWidth - 0.5;
    const mouseY = (e.clientY - rect.top) / cardHeight - 0.5;

    // Apply parallax effect to each layer based on its speed
    parallaxLayers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));

        // Calculate movement for this layer
        const moveX = mouseX * maxMovement * speed;
        const moveY = mouseY * maxMovement * speed;

        // Apply 3D transform with translation and slight rotation
        const rotateY = mouseX * 5 * speed;
        const rotateX = -mouseY * 5 * speed;

        layer.style.transform = `
            translate3d(${moveX}px, ${moveY}px, ${speed * 20}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });
});

// Mouse leave handler - reset all layers to original position
card.addEventListener('mouseleave', () => {
    parallaxLayers.forEach(layer => {
        layer.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)';
    });
});

// Mouse enter handler - ensure smooth transitions
card.addEventListener('mouseenter', () => {
    parallaxLayers.forEach(layer => {
        layer.style.transition = 'transform 0.2s ease-out';
    });
});
