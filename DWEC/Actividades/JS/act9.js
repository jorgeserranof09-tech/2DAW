"use strict"
{
    //     Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
    // aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
    // son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.

    let numero1 = parseInt(prompt("Dime un numero"));
    let numero2 = parseInt(prompt("Dime un segundo numero"));
    let operador = prompt("Introduce el operador (+, -, *, /):");

    console.log(calcular(numero1, numero2, operador));


    function calcular(num1, num2, operador) {
        let resultado = 0;
        switch (operador) {
            case "+":
                return parseInt(num1 + num2);
               
            case "-":
                return parseInt(num1 - num2);
             
            case "*":
                return parseInt(num1 * num2);
             
            case "/":
                return parseInt(num1 / num2);
             
            default:
                return "Operador no válido";
        }

    }
}