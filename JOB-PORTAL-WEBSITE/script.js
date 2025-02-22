// index.js

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  console.log('Form Submitted:', formProps);
}

// Function to initialize event listeners
function initializeEventListeners() {
  const form = document.getElementById('job-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

// Initialize the application
function initializeApp() {
  console.log('Job Portal Website Initialized');
  initializeEventListeners();
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);