"use strict";

//  Programa una función que dada una cadena de texto cuente el número de vocales y
// consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5

function elevar_valores_cuadrado(array) {
    let resultado = [];

    for(let i = 0; i < array.length;i++) {
        resultado[i] = array[i]*array[i];
    }
    return resultado;
}

console.log(elevar_valores_cuadrado([1, 4, 5])); 

