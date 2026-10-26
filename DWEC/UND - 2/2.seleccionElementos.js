"use strict";
/**
 * getElementsByTagName
 * getElementsByClassName
 * getElementsByName
 * getElementById
 * querySelector
 * querySelectorAll
 */

let listas = document.getElementsByTagName("ul");
for (let elem of listas) {
    console.log(elem);
    console.log(elem.textContent);
    let miarray1 = elem.textContent.split("\n");
    console.log(miarray1);
}


console.log("-------------------------------------------");


console.log("CLASES");
listas = document.getElementsByClassName("cListasVehiculos");
for (let elem of listas) {
    console.log(elem);
    console.log(elem.textContent);
}


console.log("-------------------------------------------");


listas = document.getElementsByName("nListas");
listas.forEach(elem => {
    console.log(elem);
    console.log(elem.textContent);
});


console.log("-------------------------------------------");


let idCiclomotores = document.getElementsById("idCiclomotores");
listas.forEach(elem => {
    console.log(elem);
    console.log(elem.textContent);
});
