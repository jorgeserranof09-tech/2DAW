"use strict" 
{
    
    
    console.log(calcularDescuento(1000,20));


    function calcularDescuento(numero,porcentaje) {
        if (numero >= porcentaje){
            return numero - (numero *porcentaje/100);
        } else {
            return "Datos introducidos incorrectos";
        }
    }
}