"use strict";


let array_doble = (array) =>{
    let ascendente = [...array].sort((a, b) => a - b);
    let descendente = [...array].sort((a, b) => b - a);

    let objeto = [
        ascendente,
        descendente
    ];

    return objeto;
}

let escribir_array = (array) => {
    let objeto = array;
    return `ascendente: ${objeto[0]}, descendente: ${objeto[1]}`;
};

console.log(escribir_array(array_doble([2,7,1,9,3,2,0])));