document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const responseMessage = document.getElementById('response-message');
    
        if (name && email && message) {
            responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;
            responseMessage.style.color = 'green';
        } else {
            responseMessage.innerHTML = `<p>Please fill in all the fields.</p>`;
            responseMessage.style.color = 'red';
        }
    });
    