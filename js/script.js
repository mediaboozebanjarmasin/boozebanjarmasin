// JS script for WhatsApp integration and form handling

// Function to send a WhatsApp message
function sendWhatsAppMessage(phoneNumber, message) {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    if (phoneNumber && message) {
        sendWhatsAppMessage(phoneNumber, message);
    } else {
        alert('Please fill in both fields.');
    }
});
