"use strict"
{
    // Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
    //un sentido que en otro), pe. miFuncion(2002) devolverá true.

    console.log(identificarCapicua(12));

    function identificarCapicua(numero) {
        let numeroInvertido = invertirNumero(numero);

        if ((numero) === numeroInvertido) {
            return true
        } else {
            return false;
        }

    }



    function invertirNumero(numero) {
        let numeroInvertido = parseInt(numero.toString().split("").reverse().join(""), 10);
        return numeroInvertido;

    }
}