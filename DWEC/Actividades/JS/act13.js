"use strict" 
{

    console.log(calcularFactorial(5));


  
    function calcularFactorial(numero) {
        let resultado = 0;

        if(numero < 0) {
            return;
        } else if(numero == 0) {
            return 1;
        } else {
            resultado = numero * calcularFactorial(numero - 1);
        }

        return resultado;
    }

}