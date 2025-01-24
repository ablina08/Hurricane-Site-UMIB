// Store product data in local storage for cart functionality
const productData = {
        name: "First Aid Kit",
        description: "A complete first aid kit with all the essentials to help during an emergency.",
        price: 29.99,
        image: "https://insights.ibx.com/wp-content/uploads/2019/06/first-aid-kit-screenshot.png"
    };
    
    // Add event listener for the "Buy Now" button
    document.addEventListener("DOMContentLoaded", function () {
        const buyNowButton = document.querySelector(".ash-btn");
    
        buyNowButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action
    
            // Add product to cart in localStorage (simple cart system)
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
            // Add the current product to the cart array
            cart.push(productData);
    
            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
    
            // Redirect to the purchase page (purchase.html)
            window.location.href = "purchase.html";
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        // Get cart data from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Get references to the cart items container and total price display
        const cartItemsContainer = document.getElementById("cartItems");
        const cartTotal = document.getElementById("cartTotal");
    
        // Display cart items
        if (cart.length > 0) {
            let totalPrice = 0;
            
            cart.forEach(item => {
                const itemHTML = `
                    <div class="ash-cart-item row mb-3">
                        <div class="col-3">
                            <img src="${item.image}" class="img-fluid" alt="${item.name}">
                        </div>
                        <div class="col-9">
                            <h5>${item.name}</h5>
                            <p>${item.description}</p>
                            <p><strong>$${item.price}</strong></p>
                        </div>
                    </div>
                `;
                cartItemsContainer.innerHTML += itemHTML;
                totalPrice += item.price;
            });
    
            // Update total price
            cartTotal.textContent = totalPrice.toFixed(2);
        } else {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        }
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const checkoutBtn = document.getElementById('checkoutBtn');
    const successMessage = document.getElementById('successMessage');

    // Initially hide the success message
    successMessage.style.display = 'none';

    // Event listener for the "Proceed to Checkout" button
    checkoutBtn.addEventListener('click', function () {
        // Show the success message when the button is clicked
        successMessage.style.display = 'block';

        // Optionally, you can hide the message after a few seconds (e.g., 5 seconds)
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 5000); // Message will disappear after 5 seconds
    });
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
