// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark' mode
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
if (currentTheme === 'dark') {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle icons
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
});

// Minimal Carousel - M3 Hero Style
let currentIndex = 0;
const cards = document.querySelectorAll('.app-card');
const dots = document.querySelectorAll('.nav-dot');
const totalCards = cards.length;
const INTERVAL = 5000;
let autoRotate;

function showCards(index) {
    const oldIndex = currentIndex;
    currentIndex = index % totalCards;
    
    cards.forEach((card, i) => {
        card.classList.remove('active', 'next', 'exiting');
        
        if (i === currentIndex) {
            card.classList.add('active');
        } else if (i === oldIndex && i !== currentIndex) {
            // Determine exit direction
            if (currentIndex > oldIndex || (currentIndex === 0 && oldIndex === totalCards - 1)) {
                card.classList.add('exiting');
            } else {
                card.classList.add('next');
            }
        }
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    showCards(currentIndex + 1);
}

function startAutoRotate() {
    autoRotate = setInterval(nextSlide, INTERVAL);
}

function resetAutoRotate() {
    clearInterval(autoRotate);
    startAutoRotate();
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showCards(index);
        resetAutoRotate();
    });
});

// Initialize
showCards(0);
startAutoRotate();
