
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementsByName('confirmPassword')[0];

form.addEventListener('submit', function(event) {
  if (!validateName(nameInput.value)) {
    alert('Por favor ingrese un nombre válido');
    event.preventDefault();
  } else if (!validateLastName(lastNameInput.value)) {
    alert('Por favor ingrese un apellido válido');
    event.preventDefault();
  } else if (!validateEmail(emailInput.value)) {
    alert('Por favor ingrese un correo electrónico válido');
    event.preventDefault();
  } else if (!validatePassword(passwordInput.value)) {
    alert('La contraseña debe tener al menos 8 caracteres');
    event.preventDefault();
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Las contraseñas no coinciden');
    event.preventDefault();
  }
});

function validateName(name) {
  // Validar el nombre ingresado. En este ejemplo, se verifica que no esté vacío.
  return name.trim() !== '';
}

function validateLastName(lastName) {
  // Validar el apellido ingresado. En este ejemplo, se verifica que no esté vacío.
  return lastName.trim() !== '';
}

function validateEmail(email) {
  // Validar el correo electrónico ingresado. En este ejemplo, se verifica que tenga un formato válido.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Validar la contraseña ingresada. En este ejemplo, se verifica que tenga al menos 8 caracteres.
  return password.length >= 8;
}