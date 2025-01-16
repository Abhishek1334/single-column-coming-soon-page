// Select the form and input elements
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorElement = document.querySelector('.error-message');

// Function to show error message
function showError(message) {
  errorElement.textContent = message; // Set the error message text
  errorElement.style.display = 'block'; // Make the error message visible
  emailInput.classList.add('error'); // Add red border to input
}

// Function to clear error message
function removeError() {
  errorElement.textContent = ''; // Clear the error message
  errorElement.style.display = 'none'; // Hide the error message
  emailInput.classList.remove('error'); // Remove red border from input
}

// Function to validate email format
function isValidEmail(email) {
  // Ensure there's at least one "@" symbol
  if (!email.includes('@')) {
    return false;
  }
  // Regex to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting

  const emailValue = emailInput.value.trim(); // Get the trimmed value of the input

  if (!emailValue) {
    showError("Whoops! It looks like you forgot to add your email");
    return; // Stop execution if there's an error
  }

  if (!isValidEmail(emailValue)) {
    showError("Please provide a valid email address");
    return; // Stop execution if there's an error
  }

  // Success
  removeError();
  alert('Email submitted successfully!');
  form.reset(); // Clear the form input
});

// Event listener to clear the error message when user starts typing
emailInput.addEventListener('input', () => {
  removeError(); // Remove error message as the user types
});
