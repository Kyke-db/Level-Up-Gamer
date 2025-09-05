
const form = document.getElementById("loginForm");


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const contrasenia = document.getElementById("Contrasenia").value;

  
  const tieneMayuscula = /[A-Z]/.test(contrasenia);

  if (!tieneMayuscula) {
    alert("La contraseña debe tener al menos una letra mayúscula");
  } else {
    
    window.location.href = "index.html";
  }
});


