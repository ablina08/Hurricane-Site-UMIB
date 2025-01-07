document.addEventListener('DOMContentLoaded', () => {
        const navToggle = document.querySelector('.navbar-toggler');
        const navCollapse = document.querySelector('#navbarNav');
    
        navToggle.addEventListener('click', () => {
            navCollapse.classList.toggle('show');
        });
    });
    
// Initialize the map
var map = L.map('map').setView([20, -75], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Add a marker for demonstration
L.marker([25.7617, -80.1918]).addTo(map)
    .bindPopup('Recent Hurricane in Miami')
    .openPopup();

    // Adding interactivity for the search bar
document.addEventListener('DOMContentLoaded', function () {
        const searchBar = document.querySelector('.form-control');
    
        searchBar.addEventListener('input', function () {
            const value = searchBar.value.toLowerCase();
            alert(`You searched for: ${value}`);
        });
    });
    