"use strict";

let p1 = document.createElement("p");
document.body.append(p1);

document.addEventListener("mousemove", (evento) => {
    console.log(evento);
    console.log(evento.x);
    console.log(evento.y);

    p1.textContent = "Posicion del rato X = " + evento.x + " Y = " + evento.y;
});
