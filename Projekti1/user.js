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
    