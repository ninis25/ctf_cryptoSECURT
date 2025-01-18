document.addEventListener('DOMContentLoaded', () => {
    // Animation du texte glitch
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        setInterval(() => {
            text.style.animation = 'none';
            void text.offsetWidth; // Trigger reflow
            text.style.animation = null;
        }, 3000);
    });

    // Animation des cartes au scroll
    const cards = document.querySelectorAll('.challenge-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}); 