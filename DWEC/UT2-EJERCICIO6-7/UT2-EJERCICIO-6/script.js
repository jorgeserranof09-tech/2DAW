"use strict";

let btn = document.createElement("button");
btn.id = "saludos";
btn.textContent = "Comenzar saludos";

let btn2 = document.createElement("button");
btn2.id = "detener";
btn2.textContent = "Detener saludos";

document.body.append(btn, btn2);


let intervalo;

btn.addEventListener("click", (e) => {
    intervalo = setInterval(() => alert("Saludos usuario"), 5000);
});

btn2.addEventListener("click", (e) => {
    clearInterval(intervalo);
    console.log("Saludos detenidos");
});