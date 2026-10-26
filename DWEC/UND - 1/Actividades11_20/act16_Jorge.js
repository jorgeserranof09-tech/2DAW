"use strict"
{


    // Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
    // Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
    // del patrón.
    // Ejemplo 1. Datos de entrada: 'A' y 5
    // AAAAA
    // AAAA
    // AAA
    // AA
    // A
    

    for (let i = 5; i > 0; i--) {

        let linea = "";

        for (let j = 0; j < i; j++) {
            linea = linea + "*";
        }

        console.log(linea);
    }

}