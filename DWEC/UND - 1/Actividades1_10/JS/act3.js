"use strict"
{

// Dada una hora en horas, minutos y segundos, 
// indicar qué hora será pasado un segundo.
let hora = parseInt(prompt("Dime una hora"));
let minuto = parseInt(prompt("Dime el minuto"));
let segundo = parseInt(prompt("Dime el segundo"));

if(segundo == 59) {
    segundo=0;
    if(minuto==59) {
        hora = (hora + 1) % 24; 
        minuto=0;
    } else {
        minuto++;
    }
} else {
    segundo=segundo+1;
}

let hora_final = hora+":"+minuto+":"+segundo;
console.log("La hora pasada 1 segundo seria: " + hora_final);



}