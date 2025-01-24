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
