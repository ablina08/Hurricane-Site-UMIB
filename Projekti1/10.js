document.addEventListener('DOMContentLoaded', () => {
        const navToggle = document.querySelector('.navbar-toggler');
        const navCollapse = document.querySelector('#navbarNav');
    
        navToggle.addEventListener('click', () => {
            navCollapse.classList.toggle('show');
        });
    });
    
    