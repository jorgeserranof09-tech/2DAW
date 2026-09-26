"use strict"
{

    console.log(esPrimo(5));


    function esPrimo(numero) {
        let contador = parseInt(0);

        for (let i = numero; i >= 0; i--) {
            if (numero % i == 0) {
                contador++;
            } 
        }
          if (contador > 2) {
                return false;
                
            } else {
                return true;
      
            }
    }



}
