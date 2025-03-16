document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-circle');
    const image = document.querySelector('.product-card img');
    const showButton = document.querySelector('.btn-show');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('black')) {
                image.src = 'assets/black.jpg';
            } else if (button.classList.contains('blue')) {
                image.src = 'assets/blue.jpg';
            } else if (button.classList.contains('orange')) {
                image.src = 'assets/orange.jpg';
            } else if (button.classList.contains('multi')) {
                image.src = 'assets/multi-bag.jpg';
            } else if (button.classList.contains('white')) {
                image.src = 'assets/white.jpg';
            }
        });
    });

    showButton.addEventListener('click', function() {
        if (showButton.textContent.trim() === 'Show Inside') {
            showButton.textContent = 'Close';
            image.src = 'assets/open.jpg';
        } else {
            showButton.textContent = 'Show Inside';
            image.src = 'assets/blue.jpg';
            document.querySelector('.button-circle.blue').click();
        }
    });
});