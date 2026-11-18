"use strict";

let p1 = document.createElement("p");
document.body.append(p1);

document.addEventListener("dblclick", (evento) => {
    let rand1 = Math.floor(Math.random() * 256); 
    let rand2 = Math.floor(Math.random() * 256);
    let rand3 = Math.floor(Math.random() * 256);
    let rand4 = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgba(${rand1},${rand2},${rand3},${rand4})`;
});
