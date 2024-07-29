function testPassword() {
    const password = document.getElementById('password').value;
    fetch('/test-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('strength').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}
