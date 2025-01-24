document.addEventListener('DOMContentLoaded', function () {
        const ashSubscribeForm = document.getElementById('ash-subscribe-form');
        const ashSuccessMessage = document.getElementById('ash-success-message');
        const ashEmailInput = document.getElementById('ash-email');
        
        // Handling the form submission
        ashSubscribeForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
    
            const email = ashEmailInput.value;
    
            // Simple email validation
            if (validateEmail(email)) {
                // Show the success message and hide the form
                ashSuccessMessage.style.display = 'block';
                ashSubscribeForm.style.display = 'none';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    
        // Email validation function (basic check)
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    });
    