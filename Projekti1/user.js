document.getElementById('ash-signin-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        const responseMessage = document.getElementById('ash-response-message');
    
        // Basic form validation
        if (username && password) {
            // Example of successful sign-in logic
            responseMessage.innerHTML = `<p>Welcome back, ${username}!</p>`;
    
            // Show success or failure message
            if (remember) {
                responseMessage.innerHTML += `<p>We'll remember you next time.</p>`;
            }
    
            responseMessage.style.color = 'green';
        } else {
            responseMessage.innerHTML = `<p>Please enter both username and password.</p>`;
            responseMessage.style.color = 'red';
        }
    });
    
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