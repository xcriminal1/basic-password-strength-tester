const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Route to handle password strength testing
app.post('/test-password', (req, res) => {
    const { password } = req.body;
    const strength = checkPasswordStrength(password);
    res.json({ message: strength });
});

// Function to check password strength
function checkPasswordStrength(password) {
    let strength = 'Weak';
    if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#\$%\^\&*\)\(+=._-]/.test(password)) {
        strength = 'Strong';
    } else if (password.length >= 6) {
        strength = 'Moderate';
    }
    return strength;
}

// Start the server
app.listen(port, () => {
    console.log(`Password Strength Tester app listening at http://localhost:${port}`);
});
