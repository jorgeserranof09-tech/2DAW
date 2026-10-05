"use strict" 
{


// Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
// Hola Mundo Hola Mundo Hola Mundo.
    
    let repetirCadena = (cadena,numeroveces) => {
        let espacio = cadena+" ";
      return espacio.repeat(numeroveces);
    }


    console.log(repetirCadena("Hola mundo",3));


}