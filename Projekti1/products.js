document.addEventListener("DOMContentLoaded", function() {
        const categoryFilter = document.getElementById("categoryFilter");
        const productItems = document.querySelectorAll(".ash-product-item");
    
        categoryFilter.addEventListener("change", function() {
            const selectedCategory = categoryFilter.value.toLowerCase();
            
            productItems.forEach(function(item) {
                const itemCategory = item.getAttribute("data-category").toLowerCase();
                
                if (selectedCategory === "" || itemCategory === selectedCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve cart from localStorage (or create an empty array if it's not there)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        const categoryFilter = document.getElementById('categoryFilter');
        const productList = document.getElementById('productList');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const cartItemsList = document.getElementById('cartItems');
        
        // Update Cart display
        function updateCartDisplay() {
            cartItemsList.innerHTML = ''; // Clear the cart display
    
            if (cart.length === 0) {
                cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
                checkoutBtn.style.display = 'none';
            } else {
                // Loop through each item in the cart and display it
                cart.forEach(function (product) {
                    const cartItem = document.createElement('li');
                    cartItem.innerHTML = `
                        <img src="${product.image}" alt="${product.title}" style="width: 50px;">
                        <strong>${product.title}</strong> - ${product.price}
                    `;
                    cartItemsList.appendChild(cartItem);
                });
    
                // Show checkout button if items are in the cart
                checkoutBtn.style.display = 'block';
            }
        }
    
        // Handle category filtering
        categoryFilter.addEventListener('change', function () {
            const selectedCategory = categoryFilter.value;
            const allProducts = document.querySelectorAll('.ash-product-item');
            
            allProducts.forEach(function (product) {
                const productCategory = product.getAttribute('data-category');
                if (selectedCategory === '' || selectedCategory === productCategory) {
                    product.style.display = 'block'; // Show product
                } else {
                    product.style.display = 'none'; // Hide product
                }
            });
        });
    
        // Add "Buy Now" functionality
        const buyButtons = document.querySelectorAll('.btn-buy-now');
        buyButtons.forEach(function (btn) {
            btn.addEventListener('click', function (event) {
                const productTitle = event.target.getAttribute('data-title');
                const productPrice = event.target.getAttribute('data-price');
                const productImage = event.target.getAttribute('data-image');
    
                // Add product to cart
                const product = {
                    title: productTitle,
                    price: productPrice,
                    image: productImage
                };
    
                cart.push(product); // Add product to the cart
    
                // Save the cart to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
    
                // Update cart display
                updateCartDisplay();
            });
        });
    
        // Checkout button functionality
        checkoutBtn.addEventListener('click', function () {
            // Redirect to purchase.html
            window.location.href = 'purchase.html';
        });
    
        // Load the cart display on page load
        updateCartDisplay();
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        const cartItemsList = document.getElementById('cartItems');
        const successMessage = document.getElementById('successMessage');
        const personalInfoForm = document.getElementById('personalInfoForm');
        
        // Display cart items
        function displayCart() {
            cartItemsList.innerHTML = ''; // Clear the cart display
    
            if (cart.length === 0) {
                cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
            } else {
                // Loop through each item in the cart and display it
                cart.forEach(function (product) {
                    const cartItem = document.createElement('li');
                    cartItem.innerHTML = `
                        <img src="${product.image}" alt="${product.title}" style="width: 50px;">
                        <strong>${product.title}</strong> - ${product.price}
                    `;
                    cartItemsList.appendChild(cartItem);
                });
            }
        }
    
        // Display cart on page load
        displayCart();
    
        // Handle form submission
        personalInfoForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
    
            // Get form data
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
    
            // Validate form data (e.g., check if fields are not empty)
            if (name && address) {
                // Show success message
                successMessage.style.display = 'block';
    
                // Clear the cart (remove cart data from localStorage)
                localStorage.removeItem('cart');
                
                // Optional: You can redirect the user to another page, e.g., a confirmation page.
                // window.location.href = 'confirmation.html'; // Uncomment this line if needed
    
                // Reset form fields
                personalInfoForm.reset();
    
                // Clear the cart display
                cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
            } else {
                alert('Please fill in all fields.');
            }
        });
    });
    