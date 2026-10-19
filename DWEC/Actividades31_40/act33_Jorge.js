"use strict";

// Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
// Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
// ¡ o ¿

function validar_nombre(texto) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/.test(texto);
}

console.log(validar_nombre("Javier Ferrer")); 
console.log(validar_nombre("Javier123"));    
console.log(validar_nombre("Javier!"));     