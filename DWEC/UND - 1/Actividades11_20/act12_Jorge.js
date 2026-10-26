"use strict" 
{

    // Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
    // miFuncion(0,"C") devolverá 32°F
    

    console.log(convertirgrados(0,'F'));

    function convertirgrados(numero,tipo) {

        if(tipo === 'C') {
            return (numero * 9/5) + 32; 
        } else if(tipo === 'F') {
            return (numero - 32) * 5/9; 
        } else {
            return "Error: valor introducido no valido"; 
        }

    }


}