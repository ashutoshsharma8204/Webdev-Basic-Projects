// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.shop-section button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });
});

// scripts.js
