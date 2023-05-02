const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Validar que el correo electrónico tenga un formato válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Por favor, ingrese un correo electrónico válido');
    return;
  }

  // Validar que la contraseña tenga al menos 8 caracteres
  if (passwordInput.value.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres');
    return;
  }

  // Si los campos son válidos, enviar el formulario
  form.submit();
});


