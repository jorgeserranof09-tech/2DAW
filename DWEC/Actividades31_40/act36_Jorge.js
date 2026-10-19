"use strict";

//Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
// array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]

let bajo_alto = (array) => {
    let array_ordenado = [...array].sort((a, b) => a - b);

    return [array_ordenado[0], array_ordenado[array_ordenado.length-1]];
}



console.log(bajo_alto([4,2,6,9,1,10]));
