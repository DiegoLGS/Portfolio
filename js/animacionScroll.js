const animarScroll = () => {
    const cards = document.querySelectorAll('.card');
    
    window.addEventListener('scroll', () => {
        const trigger = window.innerHeight * 0.8;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < trigger) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    });
}