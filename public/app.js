document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector(".input");
    const button = document.querySelector("button");
    const strengthDisplay = document.getElementById("strength");

    function checkPasswordStrength() {
        const password = inputField.value;
        let strength = "Weak";
        let color = "#ff0000"; // Default to red for weak

        // Example password strength logic
        if (password.length > 8) {
            if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
                strength = "Moderate";
                color = "#ffa500"; // Orange for moderate
            }
            if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[@$!%*?&#]/.test(password)) {
                strength = "Strong";
                color = "#00ff00"; // Green for strong
            }
        }

        strengthDisplay.textContent = strength;
        strengthDisplay.style.color = color;
    }

    // Button click event
    button.addEventListener("click", checkPasswordStrength);

    // Input field Enter key event
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default Enter key behavior (form submission, etc.)
            checkPasswordStrength();
        }
    });
});
