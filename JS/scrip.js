

function Validar() {
  var nombre, correo, passw1, passw2, expresa,bot;
  nombre = document.getElementById("name").value;
  correo = document.getElementById("correovalid").value;
  passw1 = document.getElementById("contrasena").value;
  passw2 = document.getElementById("repcontrasena").value;
  expresa = /\w+@\w+\.+[a-z]/;

  if (passw1 != passw2) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas deben ser iguales',
       
    })
    return false;
  } else if (!expresa.test(correo)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo no valido',     
    })
    return false;
  } else if (nombre != nombre.trim()) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese un nombre valido',     
    })
    return false;
  }
  else if (passw1 != passw1.trim() || passw2 != passw2.trim()) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña no valida',     
    })
    return false;
  } else{
    mensaje();
    
  }

}

function validarLogin() {
  
  var coremail, contra, caldo;
  coremail = document.getElementById("correid").value;
  contra = document.getElementById("contraid").values;
  caldo = /\w+@\w+\.+[a-z]/;

  if (!caldo.test(coremail)) {
    alert("El correo no es valido");
    return false;
  }
  else if (contra != contra.trim() ) {
    alert("Contraseña no valida");

   return false;
  } 

 
}

function mensaje() {
Swal.fire ({
  title:"Exito",
  text:'Usuario registrado exitosamente, por favor presione el botón de continuar',
  icon:'success',
  confirmButtonText:'Continuar',
  width:'55%',
  padding:'2rem',
  backdrop:'true',
  allowEnterKey:true,
  
});
return false;
}
/* toast se puede ocupar para alertas
  position se puede ocupar para la posicion: top arriba, top-end abajo, center centro 
  allowEnterKey: el usuario puede presionar enter para continuar*/