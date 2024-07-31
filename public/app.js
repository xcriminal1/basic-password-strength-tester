document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector(".input");
    const button = document.querySelector("button");
    const strengthDisplay = document.getElementById("strength");
    const showHideBtn = document.getElementById("show-hide-btn");
   

    function checkPasswordStrength() {
        const password = inputField.value;
        let strength = "";
        let color = "transparent"; // Hide text initially

        if (password.length === 0) {
            strength = "";
            color = "transparent";
        } else if (password.length > 8) {
            if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
                strength = "Moderate";
                color = "#ffa500"; // Orange for moderate
            }
            if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[@$!%*?&#]/.test(password)) {
                strength = "Strong";
                color = "#00ff00"; // Green for strong
                strengthDisplay.className = 'strong';
            } else {
                strength = "Weak";
                color = "#ff0000"; // Red for weak
                strengthDisplay.style.fontWeight = "bold";
                strengthDisplay.style.border = "none";
                strengthDisplay.style.animation = "pulse 1s infinite";
            }
        } else {
            strength = "Weak";
            color = "#ff0000"; // Red for weak
            strengthDisplay.style.fontWeight = "bold";
            strengthDisplay.style.border = "none";
            strengthDisplay.style.animation = "pulse 1s infinite";
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

    // Optionally update strength display as the user types
    inputField.addEventListener("input", function() {
        if (inputField.value) {
            checkPasswordStrength();
        } else {
            // Hide the strength display if input field is empty
            strengthDisplay.textContent = "";
            strengthDisplay.style.color = "transparent";
        }
    });

    // Show/Hide password functionality
    showHideBtn.addEventListener("click", function() {
        if (inputField.type === "password") {
            inputField.type = "text";
            showHideBtn.textContent = "🙈"; // Change to eye-off icon
        } else {
            inputField.type = "password";
            showHideBtn.textContent = "👁️"; // Change to eye icon
        }
    });
    
});
