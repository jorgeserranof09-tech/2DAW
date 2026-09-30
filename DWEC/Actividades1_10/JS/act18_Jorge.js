"use strict"
{

    // Programa una función que te devuelva el texto recortado según el número de caracteres
    // indicados, pe.miFunción("Hola Mundo", 4) devolverá "Hola".

    console.log(recortarCadena("Hola a todos", 10));



    function recortarCadena(cadena, caracteres) {
        let palabra = "";
        for (let i = 0; i < caracteres; i++) {
            palabra = palabra + cadena[i];
        }
        return palabra;
    }

}