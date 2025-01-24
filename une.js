const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const timeRunning = document.querySelector('.timeRunning');

let currentIndex = 0;

function showSlide(index) {
    const totalItems = items.length;
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    list.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoSlide() {
    showSlide(currentIndex + 1);
}

next.addEventListener('click', () => showSlide(currentIndex + 1));
prev.addEventListener('click', () => showSlide(currentIndex - 1));

let interval = setInterval(autoSlide, 3000);

// Pause carousel on hover
list.addEventListener('mouseover', () => clearInterval(interval));
list.addEventListener('mouseout', () => (interval = setInterval(autoSlide, 3000)));

//search placeholder open page when entered//
document.addEventListener("DOMContentLoaded", function() {
    // Get the search input field and button
    const searchInput = document.querySelector(".form-control");
    const searchButton = document.querySelector(".btn-outline-success");

    // Function to handle the search and redirect
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the form from submitting the default way
        
        const query = searchInput.value.toLowerCase();  // Get the search query

        // Redirect based on the query
        if (query.includes("our business")) {
            window.location.href = "business.html";  // Redirect to business.html
        } else if (query.includes("sign in")) {
            window.location.href = "user.html";  // Redirect to user.html
        } else if (query.includes("contact")) {
            window.location.href = "contact1.html";  // Redirect to contact1.html
        } else if (query.includes("track weather")) {
            window.location.href = "5.html";  // Redirect to 5.html
        } else if (query.includes("products")) {
            window.location.href = "products.html";  // Redirect to products.html 
        } else if (query.includes("safety tips")) {
            window.location.href = "safetytips.html";  // Redirect to safetytips.html   
        } else if (query.includes("about hurricanes")) {
            window.location.href = "about.html";  // Redirect to about.html
        } else if (query.includes("checkout")) {
            window.location.href = "purchase.html";  // Redirect to purchase.html   
        } else if (query.includes("add to card")) {
            window.location.href = "purchase.html";  // Redirect to purchase.html 
        } else if (query.includes("subscribe")) {
            window.location.href = "subscribe.html";  // Redirect to subscribe.html   
        } else if (query.includes("pics")) {
            window.location.href = "une.html";  // Redirect to une.html 
        } else if (query.includes("gallery")) {
            window.location.href = "gallery.html";  // Redirect to gallery.html                                         
        } else {
            alert("No matching page found!");  // Alert if no match
        }
    });
});
