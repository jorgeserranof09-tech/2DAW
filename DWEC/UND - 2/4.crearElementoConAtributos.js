"use strict";


// let np = nuevoDiv.appendChild(nuevoParrafo);
// np.setAttribute("id", "idP2");


// console.log(nuevoDiv);

// document.body.append(nuevoDiv);

// 03/11/2026
// Eliminar atributos: removeAttribute y removeAttributeNode

// nuevoParrafo.setAttribute("saludar", "hola");
// nuevoParrafo.setAttribute("insultar", "feo");
// nombreAtributos = nuevoParrafo.getAttributeNames();
// console.log(nombreAtributos);
// nuevoParrafo.removeAttribute("saludar");
// nombreAtributos = nuevoParrafo.getAttributeNames();
// console.log(nombreAtributos);
// let atributoNodoEliminado = nuevoParrafo.removeAttributeNode(nuevoParrafo.
// getAttributeNode("insultar"));
// nombreAtributos = nuevoParrafo.getAttributeNames();
// console.log(nombreAtributos);


// let attr1 = nuevoParrafo.getAttributeNode("id");
// let attr2 = nuevoParrafo.getAttribute("id");
// let attr3 = nuevoParrafo.id;
// console.log(attr1);
// console.log(attr2);
// console.log(attr3);



//ATRIBUTOS data
//TENER EN CUENTA:
//comprobar que el enlace tiene algo antes de usarlo console.log(enlace)
let enlace = document.querySelector(".enlace");
enlace.setAttribute("data-fono","cobrar dinero");
enlace.dataset.description = "hoy es martes";
console.log(enlace.dataset);
console.log(enlace.getAttribute("data-id"));



//ATRIBUTOSS CSS
console.log(enlace.style);
console.log(enlace.style.backgroundColor);
console.log(enlace.style.color);

enlace.style.setProperty ("text-decoration","none");
enlace.style.textDecoration = "underline";
enlace.style.setProperty ("background-color","green");
enlace.style.width = "inline-block";
enlace.style.width = "50%";
enlace.style.textAlign = "right";

let html = document.documentElement;
html.style.backgroundColor = "#adea90";

let miH3 = document.querySelector("#idH3");
miH3.classList.add ("cUno");
miH3.classList.add ("cDos");
console.log(miH3.classList);
miH3.classList.remove ("cDos");
console.log(miH3.classList);
miH3.classList.toggle("cUno");
console.log(miH3.classList[1]);
console.log(miH3.classList.item(1));
console.log(miH3.classList.contains("cDos"));
miH3.classList.replace("cUno","cDos");
console.log(miH3.classList);