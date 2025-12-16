document.addEventListener('DOMContentLoaded', () => {
    // Login validation (only if login form exists)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const emailInput = loginForm.querySelector('input[name="email"]');
        const passwordInput = loginForm.querySelector('input[name="password"]');
        const loginError = document.createElement('div');
        loginError.style.color = '#d64545';
        loginError.style.marginTop = '8px';
        loginForm.appendChild(loginError);
        loginForm.addEventListener('submit', (e) => {
            // basic client-side checks
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailOk) {
                e.preventDefault();
                loginError.textContent = 'Please enter a valid email address.';
                return;
            }
            if (password.length < 6) {
                e.preventDefault();
                loginError.textContent = 'Password must be at least 6 characters.';
                return;
            }
            // allow submission (frontend-only)
        });
    }

    // Signup validation (if signup form exists)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        const first = signupForm.querySelector('input[name="first"]');
        const last = signupForm.querySelector('input[name="last"]');
        const email = signupForm.querySelector('input[name="email"]');
        const password = signupForm.querySelector('input[name="password"]');
        const signupError = document.createElement('div');
        signupError.style.color = '#d64545';
        signupError.style.marginTop = '8px';
        signupForm.appendChild(signupError);
        signupForm.addEventListener('submit', (e) => {
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
            if (!first.value.trim() || !last.value.trim()) {
                e.preventDefault();
                signupError.textContent = 'Please enter your full name.';
                return;
            }
            if (!emailOk) {
                e.preventDefault();
                signupError.textContent = 'Please enter a valid email address.';
                return;
            }
            if (password.value.trim().length < 6) {
                e.preventDefault();
                signupError.textContent = 'Password must be at least 6 characters.';
                return;
            }
            // allow submission (frontend-only)
        });
    }
});
