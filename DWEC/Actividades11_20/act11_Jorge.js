"use strict"
{

    // Programa una función que determine si un número es par o impar, pe. miFuncion(29)
    // devolverá Impar.

    console.log(parOimpar(22));

    function parOimpar(numero) {
        if (numero % 2 == 0) {
            return "par";
        } else {
            return "impar";
        }
    }
}