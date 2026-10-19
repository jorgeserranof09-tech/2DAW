"use strict";

// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
// primero almacena los números pares y en el segundo los impares, pe.
// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}



let pares_impares = (array) => {
    let pares;
    let impares;
    array.forEach(element => {
        if(element/2==0) {
            pares.push(element);
        } else {
            impares.push(element);
        }
    });

    return [pares,impares];
}



console.log(pares_impares([4,2,6,9,1,10,3,4]));
