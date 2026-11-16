"use strict";

let boton = document.createElement("button");
boton.id = "idBoton";
boton.textContent = "Calcular primos";

let boton_quitar = document.createElement("button");
boton_quitar.id = "idBoton";
boton_quitar.textContent = "Quitar estilo";

let separador = document.createElement("br");
let separador2 = document.createElement("br");



let tabla = document.createElement("table");
tabla.style.borderCollapse = "collapse";

let contador = 1;

for (let i = 0; i < 10; i++) {
    let fila = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
        let celda = document.createElement("td");
        celda.textContent = contador;
        celda.style.border = "1px solid black";
        celda.style.padding = "4px";
        celda.style.textAlign = "center";

        fila.append(celda);
        contador++;
    }

    tabla.append(fila);
}

boton.addEventListener("click", function () {
    let celdas = tabla.getElementsByTagName("td");

    for (let celda of celdas) {
        let numero = parseInt(celda.textContent);
        if (esPrimo(numero)) {
            celda.classList.add("numeroPrimo");
        }
    }
});


boton_quitar.addEventListener("click", function () {
    let celdas = tabla.getElementsByTagName("td");

    for (let celda of celdas) {
        celda.classList.remove("numeroPrimo");
    }
});




document.body.append(boton,boton_quitar, separador, separador2, tabla);


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}






