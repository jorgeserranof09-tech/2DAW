"use strict"
{
    let vector = ["casa", "ordenador", "barco"];

    // APARTADO A: La cadena más corta
    let corta = vector[0];

    for (let i = 1; i < vector.length; i++) {
        if (vector[i].length < corta.length) {
            corta = vector[i];
        }
    }

    console.log(`Cadena mas corta ${corta}`);


    // APARTADO B: La cadena más larga
    let larga = vector[0];

    for (let i = 1; i < vector.length; i++) {
        if (vector[i].length > larga.length) {
            larga = vector[i];
        }
    }

    console.log(`Cadena mas larga ${larga}`);


    // APARTADP C: La cadena con más letras 'a'
    let cadenaMasA = vector[0];
    let maxA = 0;

    for (let i = 0; i < cadenaMasA.length; i++) {
        if (cadenaMasA[i] === "a") {
            maxA++;
        }
    }

    for (let i = 1; i < vector.length; i++) {
        let contadorA = 0;

        for (let j = 0; j < vector[i].length; j++) {
            if (vector[i][j] === "a") {
                contadorA++;
            }
        }
        if (contadorA > maxA) {
            maxA = contadorA;
            cadenaMasA = vector[i];
        }
    }

    console.log(`Cadena con mas letras A ${cadenaMasA}`);


    // APARTADO D: Cuántas cadenas hay que tengan la ‘b’ y cuáles son
    let cadenasConB = [];

    for (let i = 0; i < vector.length; i++) {
        if (vector[i].includes("b")) {
            cadenasConB.push(vector[i]);
        }
    }

    console.log(`Cantidad de cadenas con b ${cadenasConB.length}`);
    console.log(`Cadenas cadenasConB`);
}