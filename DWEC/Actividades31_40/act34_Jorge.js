"use strict";

// Programa una función que valide que un texto sea un email válido, p.e. miFuncion
// (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
// guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.

let validar_email = (email) => {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9._-]+@+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]+.+[a-zA-Z]{2,}$/.test(email);
}

console.log(validar_email("jorgeserranof09@gmail.com"));
console.log(validar_email("jorgeserranof09_-@gmail.m"));
console.log(validar_email("jorgeserranof09.....gmail.c"));


