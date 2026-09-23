"use strict" 
{
// Mostrar todos los números impares que hay entre 
// dos números introducidos por el usuario


let numero1 = parseInt(prompt("Dime un numero"));
let numero2 = parseInt(prompt("Dime el segunddo numero"));
let numero_menor;
let numero_mayor;

if(numero1==numero2) {
    console.log("Error: los dos numeros son iguales")
} else if(numero1<numero2) {
    numero_menor = numero1;
    numero_mayor=numero2;
}
else {
    numero_menor=numero2;
    numero_mayor=numero1;
}

for(let i = numero_menor+1;i<numero_mayor;i++) {
    if(i%2!=0) {
        console.log(i);
    }
}


}