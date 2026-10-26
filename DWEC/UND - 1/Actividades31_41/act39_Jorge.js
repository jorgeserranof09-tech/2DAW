"use strict";

//Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
//Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true

let eliminar_duplicados = (array) => {
    if (array instanceof Array) {
        return [...new Set(array)];

    }
    return null;
}

console.log(eliminar_duplicados(["a", "a", "A", true, true, 2, 5, 2]));