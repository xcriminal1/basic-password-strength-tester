function testPasswordStrength() {
    const passwordInput = document.getElementById('password').value;

    fetch('/test-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
    })
    .then(response => response.json())
    .then(data => {
        displayPasswordStrength(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        displayPasswordStrength('Error evaluating password strength');
    });
}

// Function to display password strength on the frontend
function displayPasswordStrength(message) {
    const strengthDiv = document.getElementById('strength');
    strengthDiv.innerText = message;
    strengthDiv.className = 'strength ' + message; // Add CSS class based on strength
}
