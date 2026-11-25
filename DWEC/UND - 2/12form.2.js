"use strict";

let formulario = document.querySelector
("#idForm");

formulario.addEventListener("submit", function
(e){

    e.preventDefault();
    const password = document.querySelector
    ("#idPassword");
    // compruebas si está todo OK
    if (!validarContrasena(password.value)) {
        mostrarMensajeError ("La contraseña no es válida", password)
    } else {
        formulario.submit();
    }

    // si no
        //mensajes de error1
})

function validarContrasena (passwd) {
    const longitudValida = /^.{4,8}$/.test(passwd);
    const tieneMinuscula = /[a-zñ]/.test(passwd);
    const tieneMayuscula = /[A-ZÑ]/.test(passwd);
    const tieneNumero = /[0-9]/.test(passwd);
    //const tieneNumero = /\d/.test(passwd);
    const tieneCaracterEspecial = /[^a-zA-Z0-9ñÑ\s]/.test(passwd);

    return longitudValida && tieneMinuscula && tieneMayuscula && tieneNumero && tieneCaracterEspecial;
}



let mostrarMensajeError = function (mensaje,elemento) {
    const alerta = document.createElement("p");
    //alerta.setAttribute("class", "error");
    alerta.classList.add ("error");
    alerta.textContent = mensaje;

    elemento.insertAdjacentElement("afterend",
    alerta);
    setTimeout( () => {
        alerta.remove();
    },3000)
}
