"use strict";

let texto = document.createElement("p");
texto.id = "respuestas";
texto.textContent = "Combinacion total de DNI";

let lista = document.createElement("select");


document.body.append(texto, lista);

let letras_validas = {
    0: "T",
    1: "R",
    2: "W",
    3: "A",
    4: "G",
    5: "M",
    6: "Y",
    7: "F",
    8: "P",
    9: "D",
    10: "X",
    11: "B",
    12: "N",
    13: "J",
    14: "Z",
    15: "S",
    16: "Q",
    17: "V",
    18: "H",
    19: "L",
    20: "C",
    21: "K",
    22: "E"
};



let tecla = document.addEventListener("keydown", (event) => {
    for (let i = 1; i <= 9999; i++) {
        if (event.key.toUpperCase() === letras_validas[(i % 23)]) {
            let opcion = document.createElement("option");
            if (i < 10) {
                opcion.textContent = "000" + i + letras_validas[i % 23];
                lista.appendChild(opcion);

            } else if (i < 100) {
                opcion.textContent = "00" + i + letras_validas[i % 23];
                lista.appendChild(opcion);

            } else if (i < 1000) {
                opcion.textContent = "0" + i + letras_validas[i % 23];
            } else {
                opcion.textContent = i + letras_validas[i % 23];
                lista.appendChild(opcion);
            }


        }
    }
});

