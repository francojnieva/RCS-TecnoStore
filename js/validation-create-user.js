
function validarFormulario() {
  // Obtener los valores de los campos
  const nombre = document.getElementById("name").value;
  const apellido = document.getElementById("lastName").value;
  const correo = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirnPassword = document.getElementById("confirnPassword").value;
  // Verificar que los campos requeridos no estén vacíos
  if (nombre == "" || apellido == "" || correo == "" || password == "" || confirnPassword == "") {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor complete todos los campos!',   
        })
    return false;
  }

  // Verificar que el correo electrónico sea válido
  const correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!correoRegex.test(correo)) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingrese un Correo válido!',   
        });
    return false;
  }

  if (password.length < 8) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No debe tener menos de 7 caracteres',   
    });
    return false;
  }

  if (password != confirnPassword ) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La contraseña deben ser iguales',   
    });
    return false;
  }

  // Si todo está bien, devolver true para enviar el formulario
  return true;
}