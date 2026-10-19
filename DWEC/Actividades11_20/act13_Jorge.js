"use strict" 
{

    // Programa una función que calcule el factorial de un número (El factorial de un entero positivo
    // n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
    // miFuncion(5) devolverá 120.


    console.log(calcularFactorialRecursiva(5));
    console.log(calcularFactorial(5));


    function calcularFactorial(numero) {
        let respuesta = 1;
        for(let i = numero; i > 1; i--) {
            respuesta = i*respuesta;
        }
        return respuesta;
    }



    function calcularFactorialRecursiva(numero) {
        let resultado = 1;

        if(numero < 0) {
            return;
        } else if(numero == 0) {
            return 1;
        } else {
            resultado = numero * calcularFactorialRecursiva(numero - 1);
        }

        return resultado;
    }


}