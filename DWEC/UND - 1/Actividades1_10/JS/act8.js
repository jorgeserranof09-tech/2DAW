"use strict" 
{
    // Mostrar la tabla de multiplicar de un número introducido por pantalla
    let numero = parseInt(prompt("Dime un numero"));

    for(let i = 0; i <= numero;i++) {
        console.log(i + " * " + numero + " = " + (i*numero));
    }


}