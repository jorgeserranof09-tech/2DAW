"use strict"

{

    //Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
    //Mundo") devolverá "odnuM aloH".

    console.log(invertirPalabra("Cacahuate"));


    function invertirPalabra(Palabra) {
        return Palabra.split("").reverse().join("");
    }
}