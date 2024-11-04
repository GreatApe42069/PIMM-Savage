document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('svg');
    svg.style.transition = 'opacity 5s ease-in-out';
    svg.style.opacity = '1';

    const paths = svg.querySelectorAll('path');
    const backgroundPath = paths[0]; // Select the first path as the background
    backgroundPath.style.opacity = '.1'; // Set initial low opacity
    backgroundPath.style.transition = 'opacity 5s ease-in-out'; // Set transition for background path

    // Animate the background path to full opacity
    setTimeout(() => {
        backgroundPath.style.opacity = '1'; // Fade to full opacity
    }, 0); // Start immediately

    document.body.style.backgroundColor = backgroundPath.getAttribute('fill') || '#000000';

    const ANIMATION_DELAY = 90;
    // Animate other paths with a staggered fade-in effect
    paths.forEach((path, index) => {
        if (index > 0) { // Skip the background path (already animated above)
            path.style.opacity = '0';
            path.style.transition = 'opacity 0.5s ease-in, fill 0.5s';
            setTimeout(() => {
                path.style.opacity = '1';
            }, index * ANIMATION_DELAY);
        }
    });
});
