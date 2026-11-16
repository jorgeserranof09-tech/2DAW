"use strict";

let papeleraVacia = document.querySelector(".papeleraVacia");
let papeleraLlena = document.querySelector(".papeleraLlena");
let bolaPapel = document.querySelector(".bolaPapel");



bolaPapel.addEventListener("dragstart",(event) => {
    console.log("dragstart");
})

bolaPapel.addEventListener("drag", (evento) => {
    console.log("drag");
})

bolaPapel.addEventListener("dragend", (evento) => {
    console.log("dragend");
})

papeleraVacia.addEventListener("dragenter", (evento) => {
    console.log("dragenter");
})

papeleraVacia.addEventListener("dragleave", (evento) => {
    console.log("dragleave");
})

papeleraVacia.addEventListener("dragover", (evento) => {
    evento.preventDefault();
    console.log("dragover");
})

papeleraVacia.addEventListener("drop", (evento) => {
    evento.preventDefault();
    console.log("drop");

    let imagenPapelera = papeleraVacia.querySelector("img");
    imagenPapelera.src = "src/PapeleraLlena.png";

    bolaPapel.remove();
})