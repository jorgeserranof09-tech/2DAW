"use strict";

let btn_marcar = document.createElement("button");
btn_marcar.id = "btn_marcar";
btn_marcar.textContent = "Marcar todos";

let btn_desenmarcar = document.createElement("button");
btn_marcar.id = "btn_desenmarcar";
btn_desenmarcar.textContent = "Desenmarcar todos";


document.body.append(btn_marcar,btn_desenmarcar);

for(let i = 0; i < 100; i++) {
    let check = document.createElement("check");
    check.setAttribute("class",`{i}`)
}


btn_marcar.addEventListener("click", (event) => {
    for(let i = 0; i < 100; i++) {
        document.getElementById(`{i}`).disabled = true;
    }
})


