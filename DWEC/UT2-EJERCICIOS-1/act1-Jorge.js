"use strict";

let boton = document.createElement("button");
boton.id = "idBoton";
boton.textContent = "Nuevo numero";


let separador = document.createElement("br");
let separador2 = document.createElement("br");



let botonBorrar = document.createElement("button");
botonBorrar.setAttribute = ("id","idBotonBorrar");
botonBorrar.textContent = "Borrar ultimo numero";

let lista = document.createElement("ul");
document.body.append(boton, separador,separador2,botonBorrar, lista);

boton.addEventListener("click", function() {
    let numero = Math.floor(Math.random() * 100) + 1;
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = numero;
    lista.append(nuevoLi);
});

botonBorrar.addEventListener("click", function() {
    if (lista.lastElementChild) {
        lista.lastElementChild.remove();
    } else {
        console.warn("No hay mas numeros para borrar");
    }
});
