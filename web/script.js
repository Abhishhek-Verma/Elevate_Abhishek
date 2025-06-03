// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Reset error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let valid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message is required.";
            valid = false;
        }

        // Show success message if valid
        if (valid) {
            successMessage.textContent = "Form submitted successfully!";
            form.reset();
        }
    });
});