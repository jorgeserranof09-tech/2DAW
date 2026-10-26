"use strict" 
{
    // Programa una función que devuelva el monto final después de aplicar un descuento a una
    // cantidad dada, pe. miFuncion(1000, 20) devolverá 800
    
    console.log(calcularDescuento(1000,20));


    function calcularDescuento(numero,porcentaje) {
        if (numero >= porcentaje){
            return numero - (numero *porcentaje/100);
        } else {
            return "Datos introducidos incorrectos";
        }
    }
}