"use strict"
// Dados dos números indicar cuál 
// es mayor, menor o si son iguales.

{
    
    var numero1 = prompt("Dime el primer numero");
    var numero2 = prompt("Dime el segundo numero");
    var numeroMayor;

    if (numero1 < numero2) {
        console.log("El numero " + numero2 + " es mayor que el numero " + numero1);
    } else if(numero1 == numero2){
     console.log("Ambos numeros son iguales");
    } else {
        console.log("El numero " + numero1 + " es mayor que el numero " + numero2);
    }
}