"use strict" 
{
// Mostrar todos los números divisores de un 
// número introducido por el usuario.

let numero = parseInt(prompt("Dime un numero"));

for(let i = numero-1; i > 0;i--) {
    if(numero%i==0) {
        console.log("Numero divisor: " + i);
    }
}


}