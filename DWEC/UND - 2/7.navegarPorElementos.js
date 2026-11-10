"use strict";
/**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */


for (let elemento of document.body.children) {
    console.log(elemento);
}

console.log(document.body.parentElement);

let ulAviones = document.querySelector("#idAviones");
let primerAvion = ulAviones.firstElementChild; // children[0]
console.log(primerAvion.textContent);

let ultimoAvion = ulAviones.lastElementChild; // children[children.length-1]
console.log(ultimoAvion.textContent);

let ulCoches = ulAviones.previousElementSibling;
console.log(ulCoches);
