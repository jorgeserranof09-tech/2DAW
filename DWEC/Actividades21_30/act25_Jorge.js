"use strict"
{
    console.log(identificarCapicua(12));

        function identificarCapicua(numero) 
    {
        let numeroInvertido = invertirNumero(numero);

        if((numero) === numeroInvertido) {
            return true
        } else {
            return false;
        }

    }



      function invertirNumero(numero) {
        let numeroInvertido = parseInt(numero.toString().split("").reverse().join(""),10);
        return numeroInvertido;
        
    }
}