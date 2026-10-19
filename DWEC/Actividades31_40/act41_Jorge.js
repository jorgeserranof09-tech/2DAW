"use strict";

//  Programa una función que dada una cadena de texto cuente el número de vocales y
// consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5

function contar_Con_Y_Voc(Palabra) {
    let caracteres = Palabra.split("");


    let contadorVoc = 0;
    let contadorCon = 0;
    for(let i = 0; i < caracteres.length; i++) {
        if(caracteres[i] == "a" || caracteres[i] == "A" || caracteres[i] == "e" ||
            caracteres[i] == "E" || caracteres[i] == "i" || caracteres[i] == "I" ||
            caracteres[i] == "o" || caracteres[i] == "O" || caracteres[i] == "u" ||
            caracteres[i] == "U"
        ) {
            contadorVoc++;
        } else {
            contadorCon++;
        }
    }

    console.log(`Consonantes: ${contadorCon}`);
    console.log(`Vocales: ${contadorVoc}`);

}


contar_Con_Y_Voc("PalabrA");


