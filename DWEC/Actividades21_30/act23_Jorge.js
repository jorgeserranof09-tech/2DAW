"use strict" 
{

    console.log(identificarPalindromo("salas"));


    function identificarPalindromo(Palabra) 
    {
        let palabraInvertida = invertirPalabra(Palabra).toLowerCase();

        if((Palabra.toLowerCase()) === palabraInvertida) {
            return true
        } else {
            return false;
        }

    }



      function invertirPalabra(Palabra) {
        return Palabra.split("").reverse().join("");
    }
}