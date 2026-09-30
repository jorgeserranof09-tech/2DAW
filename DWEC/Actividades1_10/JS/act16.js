"use strict"
{

    for (let i = 5; i > 0; i--) {

        let linea = "";

        for (let j = 0; j < i; j++) {
            linea = linea + "*";
        }

        console.log(linea);
    }

}