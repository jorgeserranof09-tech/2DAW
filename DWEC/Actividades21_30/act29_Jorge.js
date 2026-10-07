"use strict"
{
    //Programa una función para convertir números de base binaria a decimal y viceversa, pe.
    //miFuncion(100,2) devolverá 4 base 10

    let convertirBinarioODecimal = (numero, base) => {
        if (base === 2) {
            return parseInt(numero, 2);
        } else if (base === 10) {
            return Number(numero).toString(2);
        }
    };

    console.log(convertirBinarioODecimal("100", 2)); 
    console.log(convertirBinarioODecimal(4, 10));    
}