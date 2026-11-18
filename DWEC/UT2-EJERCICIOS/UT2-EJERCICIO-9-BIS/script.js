
"use strict";

let cuadro1 = document.createElement("div");
let cuadro2 = document.createElement("div");
let cuadro3 = document.createElement("div");


cuadro1.id = "cuadro1";
cuadro2.id = "cuadro2";
cuadro3.id = "cuadro3";

cuadro1.style.width = "50px";
cuadro1.style.height = "50px";
cuadro1.style.backgroundColor = "red";

cuadro2.style.width = "100px";
cuadro2.style.height = "100px";
cuadro2.style.backgroundColor = "blue";

cuadro3.style.width = "150px";
cuadro3.style.height = "150px";
cuadro3.style.backgroundColor = "green";


cuadro1.draggable = true;
cuadro2.draggable = true;
cuadro3.draggable = true;


document.body.append(cuadro1, cuadro2, cuadro3);


// DRAGSTART
cuadro1.addEventListener("dragstart", () => {
    console.log("Tomo a 1");
});

cuadro2.addEventListener("dragstart", () => {
    console.log("Tomo a 2");
});

cuadro3.addEventListener("dragstart", () => {
    console.log("Tomo a 3");
});


// DRAG
cuadro1.addEventListener("drag", () => {
    console.log("Cuadro 1 siendo arrastrado");
});

cuadro2.addEventListener("drag", () => {
    console.log("Cuadro 2 siendo arrastrado");
});

cuadro3.addEventListener("drag", () => {
    console.log("Cuadro 3 siendo arrastrado");
});


// DRAGENTER
cuadro1.addEventListener("dragenter", () => {
    console.log("He entrado en el cuadro 1");
});

cuadro2.addEventListener("dragenter", () => {
    console.log("He entrado en el cuadro 2");
});

cuadro3.addEventListener("dragenter", () => {
    console.log("He entrado en el cuadro 3");
});


// DRAGOVER
cuadro1.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Estoy encima del cuadro 1");
});

cuadro2.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Estoy encima del cuadro 2");
});

cuadro3.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Estoy encima del cuadro 3");
});


// DRAGLEAVE
cuadro1.addEventListener("dragleave", () => {
    console.log("He salido del cuadro 1");
});

cuadro2.addEventListener("dragleave", () => {
    console.log("He salido del cuadro 2");
});

cuadro3.addEventListener("dragleave", () => {
    console.log("He salido del cuadro 3");
});


// DROP
cuadro1.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("He soltado algo dentro del cuadro 1");
});

cuadro2.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("He soltado algo dentro del cuadro 2");
});

cuadro3.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("He soltado algo dentro del cuadro 3");
});


// DRAGEND
cuadro1.addEventListener("dragend", () => {
    console.log("He terminado de arrastrar el cuadro 1");
});

cuadro2.addEventListener("dragend", () => {
    console.log("He terminado de arrastrar el cuadro 2");
});

cuadro3.addEventListener("dragend", () => {
    console.log("He terminado de arrastrar el cuadro 3");
});
