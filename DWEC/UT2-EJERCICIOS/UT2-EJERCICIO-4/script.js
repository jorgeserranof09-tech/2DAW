"use strict";

let btn = document.createElement("button");
btn.textContent = "REAPARECER";
btn.id = "reaparecer";

btn.style.background = "grey";
btn.style.border = "2px solid black";

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');

p1.id = "p1";
p2.id = "p2";
p3.id = "p3";


p1.textContent = "P1";
p2.textContent = "P2";
p3.textContent = "P3";

document.body.append(btn, p1, p2, p3);

p1.addEventListener("mouseout", () => {
    document.getElementById("p1").style.visibility = "hidden";
});

p2.addEventListener("mouseout", () => {
    document.getElementById("p2").style.visibility = "hidden";
});

p3.addEventListener("mouseout", () => {
    document.getElementById("p3").style.visibility = "hidden";
});




p1.addEventListener("dblclick", () => {
    console.log("borrado p1");
    document.getElementById("p1").remove();
});

p2.addEventListener("dblclick", () => {
    console.log("borrado p2");
    document.getElementById("p2").remove();
});

p3.addEventListener("dblclick", () => {
    console.log("borrado p3");
    document.getElementById("p3").remove();
});





btn.addEventListener("mouseover", () => {
    document.getElementById("reaparecer").style.cursor = "pointer";
});

btn.addEventListener("click", () => {
    for (let i = 1; i < document.getElementsByTagName('p').length+1; i++) {
        console.log(`p${i}`);
        document.getElementById(`p${i}`).style.visibility = "visible";
    }

});


