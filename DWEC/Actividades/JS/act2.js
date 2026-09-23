"use strict"
{

    let numero1 = prompt("Dime el primer numero");
    let numero2 = prompt("Dime el segundo numero");
    let numeroMayor;
    
    while((isNaN(numero1)) || (numero1<=0) && (isNaN(numero2)) || (numero2<=0)) {
          numero1 = prompt("Dime el primer numero");
          numero2 = prompt("Dime el segundo numero");
    }

}