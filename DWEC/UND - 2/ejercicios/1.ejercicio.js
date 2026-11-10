"use strict";
//EJERCICIO 1
// let numero = prompt("Dime un numero"); 
// for (let i = 0; i < numero; i++) {
//     let p = document.createElement("p");
//     let random = Math.floor(Math.random() * 11);

//     p.innerHTML = `<i>${random}</i>`;
//     document.body.append(p);
// }


//EJERCICIO 2
// let numero = prompt("Dime un numero");
// if (isNaNNaN(numero)) {
//     console.log("No es un numero, tontooooo");
// } else {
//     for (let i = 0; i < numero; i++) {
//         let h2 = document.createElement("h2");
//         let random = Math.floor(Math.random() * 11);

//         h2.innerHTML = `<i><strong>Jorge ${random}</strong></i>`;
//         document.body.append(h2);
//     }
// }



//EJERCICIO 3
// let numero = prompt("Dime un numero");
// if (isNaN(numero)) {
//     console.log("No es un numero, tontooooo");
// } else {
//     let ul = document.createElement("ul");
//     for (let i = 0; i < numero; i++) {
//         let li = document.createElement("li");
//         let random = Math.floor(Math.random() * 15 + 1);
//         ul.appendChild(li);
//         li.outerHTML = `<li><strong>${random}</strong></li>`;

//         //TAMBIEN SE PUEDE USAR: 
//         // li.innerHTML = `<strong>${random}</strong>`;
//         // ul.appendChild(li);

//     }
//     document.body.append(ul);

// }


//EJERCICIO 4

let listaPEj1 = document.body.querySelectorAll(".cEj1");
console.log(listaPEj1);
let ultimoPEj1 = listaPEj1.length[listaPEj1-1];
let img2 = img.cloneNode(true);
ultimoPEj1.insertAdjacentElement("afterend",img);


