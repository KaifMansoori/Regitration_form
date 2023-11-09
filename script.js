// Get all input elements
const inputFields = document.querySelectorAll("input");

let isTyping = false;

// Function to apply the neon breathing effect
function applyNeonBreathingEffect(input) {
  input.classList.add("typing");
}

// Function to remove the neon breathing effect
function removeNeonBreathingEffect(input) {
  input.classList.remove("typing");
}

// Event listners for all input fields
inputFields.forEach((input) => {
  // Event listener for input focus
  input.addEventListener("focus", () => {
    if (!isTyping) {
      // Apply neon glow effect when the input is in focus
      input.classList.add("focus");
    }
  });

  // Event listener for input blur
  input.addEventListener("blur", () => {
    // Remove neon glow effect when the input loses focus
    input.classList.remove("focus");
  });

  // Event listener for input typing
  input.addEventListener("input", () => {
    if (!isTyping) {
      isTyping = true;
      applyNeonBreathingEffect(input); // Apply neon breathing effect when the user starts typing
    }
  });

  // Event listener to detect when the user is not typing
  input.addEventListener("blur", () => {
    isTyping = false;
    removeNeonBreathingEffect(input); // Remove the neon breathing effect when the user stops typing
  });
});

// Function to Show and Hide Password
function togglePassword() {
  const passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    document.querySelector(".show-password").textContent = "Hide";
  } else {
    passwordField.type = "password";
    document.querySelector(".show-password").textContent = "Show";
  }
}

// Get the "Register" button and the container
const registerButton = document.getElementById("register-button");
const container = document.querySelector(".container");

// Function to check if required fields are filled
function areFieldsFilled() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  return username !== "" && email !== "" && password !== "";
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Event for the Register Button
registerButton.addEventListener("click", () => {
  if (areFieldsFilled()) {
    // Get the username and email
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (!isValidEmail(email)) {
      // Email is invalid, show an error message
      alert("Please enter a valid email address.");
      return; // Prevent further execution of the code
    }

    // Display an alert message with a success message and the username and email
    alert(`Registration successful!\n\nUsername: ${username}\nEmail: ${email}`);

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  } else {
    // If required fields are not filled, add the "shake" class to the container
    container.classList.add("shake");

    // Remove the "shake" class after the animation completes
    setTimeout(() => {
      container.classList.remove("shake");
    }, 500); // 0.5s, which matches the animation duration
  }
});
