document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.challenge-card');
    const hoverSound = document.getElementById('hoverSound');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (hoverSound) {
                hoverSound.currentTime = 0;
                hoverSound.play();
            }
        });
    });

    // Vérification du flag
    const verifyFlag = async (level, flag) => {
        try {
            const response = await fetch(`/api/verify/${level}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ flag })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            return { success: false, message: "Error connecting to server" };
        }
    };

    // Exposer la fonction globalement pour l'utiliser dans les pages de challenge
    window.verifyFlag = verifyFlag;
}); 