"use strict"
{

    // Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
    //igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true

    console.log(identificarPalindromo("salas"));


    function identificarPalindromo(Palabra) {
        let palabraInvertida = invertirPalabra(Palabra).toLowerCase();

        if ((Palabra.toLowerCase()) === palabraInvertida) {
            return true
        } else {
            return false;
        }

    }



    function invertirPalabra(Palabra) {
        return Palabra.split("").reverse().join("");
    }
}