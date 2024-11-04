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
    paths.forEach((path, index) => {
        if (index > 0) { // Skip the background path (already animated above)
            path.style.opacity = '0';
            path.style.transition = 'opacity 0.5s ease-in, fill 0.5s';
            setTimeout(() => {
                path.style.opacity = '1';
            }, index * ANIMATION_DELAY);
        }
    });

    // Center and scale SVG on resize
    const centerAndScaleSVG = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        
        // Set SVG width to 90% of the viewport’s smaller dimension, maintaining original size ratio
        const svgSize = Math.min(vw, vh) * .9;
        svg.style.width = `${svgSize}px`;
        svg.style.height = 'auto';

        // Center SVG
        svg.style.position = 'absolute';
        svg.style.left = '66%';
        svg.style.top = '80%';
        svg.style.transform = 'translate(-50%, -50%)';
    };

    // Initial setup and add resize listener
    centerAndScaleSVG();
    window.addEventListener('resize', centerAndScaleSVG);
});
