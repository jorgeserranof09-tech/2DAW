"use strict";

let formularioCompleto = document.querySelector("#idForm1");

formularioCompleto.nTexto.value = "otro texto";
formularioCompleto.nUrl.value = "otra url";

let inputText1 = document.querySelector("#idTexto1");
console.log(inputText1);
console.log(inputText1.value);
inputText1.value = "otro valor para texto 1";
console.log(inputText1.getAttribute("name"));

inputText1.addEventListener("input", function (e){
    //console.log(e);
    console.log(e.data);
    console.log(e.target);
    // console.log(e.target.value);
});

inputText1.addEventListener ("change", function (e) {
    // console.log(e.data);
    console.log(e.target.value);
    // console.log(inputText1.value);
})

let textArea1 = document.querySelector("#idtextArea1");
console.log(textArea1.value);
textArea1.oninput = function (e) {
    console.log(e.data);
    console.log(e.target.value);
    // console.log(textArea1.value);
}

textArea1.onchange = (e) => {
    console.log(e.target.value);
}

let radioButtons = document.getElementById("nrbtn1");
console.log(`Hay ${radioButtons.length} opciones`);
radioButtons.forEach(element => {
    console.log(element.value);
    console.log(element.previousElementSibling.textContent);
});

for (let elemento of radioButtons) {
    if(elemento.checked) {
        console.log(`El elemento elegido es ${elemento.value}`);
    }
}