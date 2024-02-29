document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        const emailInput = loginForm.elements['email'];
        const passwordInput = loginForm.elements['password'];

        if (emailInput.value === '' || passwordInput.value === '') {
            alert('All fields must be filled in');
            return;
        }

        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };

        console.log(formData);

        // Clear form fields
        loginForm.reset();
    });
});
