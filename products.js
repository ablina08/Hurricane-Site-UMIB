document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart from localStorage (or create an empty array if it's not there)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const categoryFilter = document.getElementById('ash-categoryFilter');  // Updated ID
    const productList = document.getElementById('ash-productList');  // Updated ID
    const checkoutBtn = document.getElementById('ash-checkoutBtn');  // Updated ID
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
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart from localStorage (or create an empty array if it's not there)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const categoryFilter = document.getElementById('ash-categoryFilter');  // Updated ID
    const productList = document.getElementById('ash-productList');  // Updated ID
    const checkoutBtn = document.getElementById('ash-checkoutBtn');  // Updated ID
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
    