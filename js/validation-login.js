function validarFormulario() {
  // Obtener los valores de los campos
  const correo = document.getElementById("email").value;
  const passwordInput = document.querySelector('#password').value;

  // Verificar que los campos requeridos no estén vacíos
  if (correo == "" || passwordInput == "") {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor complete todos los campos!',   
        })
    return false;
  }

  if(passwordInput.length < 8) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La contraseña debe tener más de 7 caracteres!',   
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

  // Si todo está bien, devolver true para enviar el formulario
  if (true) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inicio exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      return false
    }
}


