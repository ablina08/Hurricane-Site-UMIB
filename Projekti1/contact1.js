document.getElementById('ash-contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const emergency = document.getElementById('emergency').value;
        const responseMessage = document.getElementById('response-message');
    
        if (name && email && message && emergency) {
            let urgencyMessage = emergency === "yes" ? "This is an urgent request. Immediate action may be required." : "This is a regular inquiry.";
    
            responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully. You will receive a response soon.</p>
                                        <p><strong>Urgency Status:</strong> ${urgencyMessage}</p>`;
            responseMessage.style.color = 'green';
        } else {
            responseMessage.innerHTML = `<p>Please fill in all the fields to submit your request.</p>`;
            responseMessage.style.color = 'red';
        }
    });
    