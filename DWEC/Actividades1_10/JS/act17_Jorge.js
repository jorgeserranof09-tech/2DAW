"use strict"
{

    // Programa una función que cuente el número de caracteres de una cadena de texto, pe.
    // miFunción("Hola Mundo") devolverá 10.


    let calcularLongitud2 = (a) => {
        return a.length;
    }


    console.log(calcularLongitud("palabra"));
    console.log(calcularLongitud2("palabra"));


    function calcularLongitud(cadena) {
        console.log(cadena.length);
        return cadena.length;
    }



}