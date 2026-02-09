document.addEventListener('DOMContentLoaded', () => {
    // Mobile Dropdown Toggle
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');

    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            // On mobile (or relying on click), toggle the menu
            // We check window width to allow hover on desktop if preferred, 
            // but the CSS structure suggests :hover works on desktop. 
            // However, preventDefault is good for the '#' link.
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Lightbox functionality (copied/adapted from typical implementations for the gallery)
function showLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});
