// Login Form Validation
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Sample user data for validation
const userData = {
    email: "test@example.com",
    password: "password123"
};

// Event listener for form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate email and password
    if (email === userData.email && password === userData.password) {
        alert('Login successful!');
        window.location.href = "index.html"; // Redirect to the homepage
    } else {
        errorMessage.textContent = "Invalid email or password. Please try again.";
    }
});
