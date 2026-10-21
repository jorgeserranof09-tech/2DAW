"use strict"
{
    // Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
    //un sentido que en otro), pe. miFuncion(2002) devolverá true.

    console.log(identificarCapicua(12));
    console.log(identificarCapicua(202));

    function identificarCapicua(numero) {
        let numeroInt = parseInt(numero);
        let numeroInvertido = parseInt(numeroInt.toString().split("").reverse().join(""), 10);

        if (numeroInt === numeroInvertido) {
            return true
        } else {
            return false;
        }

    }



}