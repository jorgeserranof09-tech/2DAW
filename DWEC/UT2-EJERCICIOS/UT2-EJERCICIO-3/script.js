
"use strict";

let contenedor = document.createElement("div");
contenedor.id = "checks";

let btn_marcar = document.createElement("button");
btn_marcar.id = "btn_marcar";
btn_marcar.textContent = "Marcar todos";

let btn_desenmarcar = document.createElement("button");
btn_desenmarcar.id = "btn_desenmarcar";
btn_desenmarcar.textContent = "Desenmarcar todos";

let btn_agrandar = document.createElement("button");
btn_agrandar.id = "btn_agrandar";
btn_agrandar.textContent = "Agrandar pares";

let btn_desagrandar = document.createElement("button");
btn_desagrandar.id = "btn_desagrandar";
btn_desagrandar.textContent = "Desagrandar pares";

document.body.append(btn_marcar, btn_desenmarcar, btn_agrandar, btn_desagrandar, contenedor);


for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * (200 - 100) + 100);

    let check = document.createElement("input");
    check.value = `${random}`;
    check.type = "checkbox";
    check.id = `${i}`;

    let etiqueta = document.createElement("label");
    etiqueta.append(check);
    etiqueta.append(i);

    contenedor.append(etiqueta);
}


// MARCAR TODOS

btn_marcar.addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
        document.getElementById(`${i}`).checked = true;
    }

    console.log("Todos marcados");
});


// DESMARCAR TODOS

btn_desenmarcar.addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
        document.getElementById(`${i}`).checked = false;
    }

    console.log("Todos desmarcados");
});


// AGRANDAR PARES

btn_agrandar.addEventListener("click", () => {

    for (let i = 0; i < 100; i++) {

        let par = document.getElementById(`${i}`);

        if (par.value % 2 == 0) {
            par.style.width = "25px";
            par.style.height = "25px";

            console.log(`Agrandado ${i}`);
        }
    }
});


// DESAGRANDAR PARES

btn_desagrandar.addEventListener("click", () => {

    for (let i = 0; i < 100; i++) {

        let par = document.getElementById(`${i}`);

        if (par.value % 2 == 0) {
            par.style.width = "";
            par.style.height = "";

            console.log(`Desagrandado ${i}`);
        }
    }
});
