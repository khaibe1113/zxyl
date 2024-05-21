document.getElementById('intro-link').addEventListener('click', function() {
    showSection('intro');
});

document.getElementById('main-link').addEventListener('click', function() {
    showSection('main');
});

document.getElementById('about-link').addEventListener('click', function() {
    showSection('about');
});

document.getElementById('contact-link').addEventListener('click', function() {
    showSection('contact');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.main-content');
    sections.forEach(section => {
        section.style.display = (section.id === sectionId) ? 'flex' : 'none';
    });
}

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.cosplay-img').forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
