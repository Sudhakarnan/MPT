document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(contactForm);
        const userData = Object.fromEntries(formData);

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    formData: userData,
                    fromEmail: userData.email, // Use the user's email from the form
                    toEmail: 'mptdairyproducts@gmail.com'
                })
            });

            if (response.ok) {
                alert('Email sent successfully!');
                contactForm.reset();
            } else {
                alert('Failed to send email. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});