function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("lastName").value;
    const correo = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;
  
    // Verificar que los campos requeridos no estén vacíos
    if (nombre == "" || apellido == "" || correo == "" || mensaje == "") {
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
  
    // Si todo está bien, devolver true para enviar el formulario
    if (true) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enviado!',
            showConfirmButton: false,
            timer: 1500
          })
        return false
    }
  }