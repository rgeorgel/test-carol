// Get the card element
const card = document.querySelector('.card');
const cardInner = document.querySelector('.card-inner');

// Maximum rotation angle in degrees
const maxRotation = 20;

// Mouse move handler
card.addEventListener('mousemove', (e) => {
    // Get card dimensions and position
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    // Center is (0.5, 0.5), edges are (0, 0) and (1, 1)
    const rotateY = ((mouseX / cardWidth) - 0.5) * maxRotation * 2;
    const rotateX = -((mouseY / cardHeight) - 0.5) * maxRotation * 2;

    // Apply transform
    cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

// Mouse leave handler - reset to original position
card.addEventListener('mouseleave', () => {
    cardInner.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});

// Mouse enter handler - smooth scale up
card.addEventListener('mouseenter', () => {
    cardInner.style.transition = 'transform 0.1s ease-out';
});
