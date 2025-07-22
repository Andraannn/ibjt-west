document.querySelectorAll('.flip-card').forEach(function(card) {
    let flipTimeout;
    card.addEventListener('click', function() {
        document.querySelectorAll('.flip-card.flipped').forEach(function(other) {
            if (other !== card) {
                other.classList.remove('flipped');
                if (other.flipTimeout) {
                    clearTimeout(other.flipTimeout);
                    other.flipTimeout = null;
                }
            }
        });
        card.classList.toggle('flipped');

        if (card.classList.contains('flipped')) {
            if (card.flipTimeout) clearTimeout(card.flipTimeout);
            card.flipTimeout = setTimeout(function() {
                card.classList.remove('flipped');
            }, 30000);
        } else {
            if (card.flipTimeout) clearTimeout(card.flipTimeout);
        }
    });
});
