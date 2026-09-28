"use strict" 
{
// Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
// hasta introducir un número negativo y entonces mostrar el resultado
let numero = 0;
let suma = 0;
let producto = 1;
let media = 0;
let contador = 0;

while(numero >= 0) {
    numero = parseInt(prompt("Dime un numero"));

    if(numero >= 0) {
        suma += numero;
        producto *= numero;
        contador++;
    }
}

media = suma / contador;

console.log("El resultado es: ");
console.log("Suma: " + suma);
console.log("Producto: " + producto);
console.log("Media: " + media);
}