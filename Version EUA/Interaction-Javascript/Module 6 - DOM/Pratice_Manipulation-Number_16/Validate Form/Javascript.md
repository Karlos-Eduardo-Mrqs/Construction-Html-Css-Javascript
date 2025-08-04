# Note 👁️

- [Leia a parte de construção antes](HtmlEoCss.md)

---

## Guide to Understanding: JavaScript for the Dynamic Form

This document explains the JavaScript functionality of the dynamic form, which includes switching between login and registration screens, validating user inputs, and displaying messages via a popup. The goal is to provide a clear understanding of how the JavaScript interacts with the HTML and CSS to create a seamless user experience.

---

### Overview of JavaScript

The JavaScript code handles the following key functionalities:

- Switching between the **Login** and **Registration** screens.
- Validating user inputs in both forms.
- Displaying success or error messages using a popup.
- Simulating form submissions (e.g., login and registration).

### Key Functions

### Switching Between Screens

The `switchForm` function toggles between the **Login** and **Registration** screens by manipulating the `.active` class.

```javascript
function switchForm(activeFormId) {
    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => {
        form.style.display = 'none'; // Hides all forms
        form.classList.remove('active'); // Removes the .active class
    });

    const activeForm = document.getElementById(activeFormId);
    if (activeForm) {
        activeForm.style.display = 'block'; // Shows the active form
        activeForm.classList.add('active'); // Adds the .active class
    }
}
```

### Explanation

- Hiding All Forms : Initially, all forms are hidden using display: none.

- Showing the Active Form : The form corresponding to the activeFormId is displayed using display: block and marked as active with the .active class.

- Safety Check : The if (activeForm) ensures that only valid forms are manipulated.

#### Displaying Messages with the Popup

The showPopup function displays messages in the popup with customizable colors (e.g., red for errors, green for success).

```javascript
function showPopup(message, color = 'black') {
    const popup = document.querySelector('.popup');
    const popupMessage = document.querySelector('.pair');

    if (!popup || !popupMessage) return; // Ensures elements exist

    popupMessage.textContent = message; // Sets the message text
    popupMessage.style.color = color; // Sets the message color
    popup.style.display = 'block'; // Shows the popup
    popup.classList.add('show'); // Adds the .show class for animations

    // Hides the popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'none'; // Hides the popup
        popup.classList.remove('show'); // Removes the .show class
    }, 3000);
}
```

### Explanation Displaying

- Customizable Colors : The color parameter allows you to set different colors for success (green) or error (red) messages.
- Timeout : The popup automatically hides after 3 seconds using setTimeout.
- Animation : The .show class triggers smooth transitions for the popup's appearance.

### Simulating Form Submissions

Login Form Submission. The login form validates user inputs and simulates a successful login.

```javascript
  document.querySelector('form[name="login"]').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents default form submission

    const email = document.getElementById('login_email')?.value;
    const senha = document.getElementById('login_senha')?.value;

    if (!email || !senha) {
        showPopup('Please fill in all fields.', 'red'); // Error message
        return;
    }

    showPopup('Login successful!', 'green'); // Success message
});
```

### Explanation Submissions

- Validation : Ensures all fields are filled and passwords match.
- Error Handling : Displays appropriate error messages for missing fields or mismatched passwords.
- Success Message : Simulates a successful registration with a green success message and switches back to the login screen.

#### Button Click Events

The buttons for switching between screens are controlled using event listeners.

```javascript
    document.getElementById('criarConta')?.addEventListener('click', () => {
        switchForm('cadastro'); // Switches to the registration screen
    });

    document.getElementById('voltarLogin')?.addEventListener('click', () => {
        switchForm('login'); // Switches to the login screen
    });
```

### Explanation Click Events

- Switching Screens : The switchForm function is called when the user clicks on "Create Account" or "Back to Login".
- Optional Chaining (?.) : Ensures that the code does not throw errors if the elements do not exist.

## Conclusion

The JavaScript code provides the interactivity and logic needed for the dynamic form. It handles:

1. Switching between screens.
2. Validating user inputs.
3. Displaying success and error messages via a popup.
4. Simulating form submissions.

This guide should help you understand how the JavaScript integrates with the HTML and CSS to create a functional and user-friendly interface.
