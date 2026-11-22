document.getElementById('year').textContent = new Date().getFullYear();

function showMessage(element, message, type) {
  element.textContent = message;
  element.className = 'form-message ' + type;
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('input[required], textarea[required]').forEach((field) => {
    field.classList.remove('invalid');
    if (!field.checkValidity()) {
      field.classList.add('invalid');
      valid = false;
    }
  });
  return valid;
}

document.getElementById('registrationForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById('registrationMessage');
  const password = form.elements.password;
  const confirmPassword = form.elements.confirmPassword;
  if (!validateForm(form)) {
    showMessage(message, 'Please complete all required fields with valid information.', 'error');
    return;
  }
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add('invalid');
    showMessage(message, 'Your passwords do not match. Please try again.', 'error');
    return;
  }
  if (!document.getElementById('terms').checked) {
    showMessage(message, 'Please accept the terms to continue.', 'error');
    return;
  }
  showMessage(message, 'Your details look good! Registration UI demo completed successfully.', 'success');
  form.reset();
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById('contactMessage');
  if (!validateForm(form)) {
    showMessage(message, 'Please check the highlighted fields and try again.', 'error');
    return;
  }
  showMessage(message, 'Thanks for reaching out! Your message is ready (demo form).', 'success');
  form.reset();
});

document.getElementById('newsletterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('newsletterEmail');
  const message = document.getElementById('newsletterMessage');
  if (!email.checkValidity()) {
    email.focus();
    message.textContent = 'Please enter a valid email address.';
    return;
  }
  message.textContent = 'You are on the list — thanks for subscribing!';
  email.value = '';
});

document.getElementById('addToCart').addEventListener('click', () => {
  const message = document.getElementById('cartMessage');
  message.textContent = 'Added to your cart · 1 item';
  document.getElementById('addToCart').innerHTML = 'Added to cart <span>✓</span>';
});

document.getElementById('wishlist').addEventListener('click', (event) => {
  const button = event.currentTarget;
  button.classList.toggle('selected');
  button.textContent = button.classList.contains('selected') ? '♥' : '♡';
  button.setAttribute('aria-label', button.classList.contains('selected') ? 'Remove from wishlist' : 'Add to wishlist');
});

document.querySelectorAll('.field-input').forEach((field) => {
  field.addEventListener('input', () => field.classList.remove('invalid'));
});