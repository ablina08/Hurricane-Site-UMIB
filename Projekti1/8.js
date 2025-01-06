document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        // Simple validation
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
        } else {
            // Mock success (In real-life, use an API for login validation)
            alert("Login successful!");
        }
    });
    