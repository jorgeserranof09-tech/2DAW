"use strict";

// let miDiv = document.querySelector("#idDiv1");
// miDiv.textContent = "<strong> texto del div1 </strong>";
// miDiv.innerHTML = "<strong> texto del div1 </strong>";
// miDiv.innerHTML += "<br> otra <strong><i> línea </i></strong>"
// console.log(miDiv.outerHTML);
// console.log(miDiv.innerHTML);
// console.log(miDiv.textContent);

// img.style.setProperty("width", "50px");
// document.body.append(img);
// console.log(img.isConnected);

let miDiv2 = document.createElement("div");
let miP = document.createElement("p");
miP.innerHTML = "aqui <strong> estoy </strong> ";
miDiv2.append(miP);


/**
 *
 * div
 * p
 * /div
 */





/**
 *      insertAdjacent: 3 versiones:
 * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
 * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
 * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
 * 
 * llevan 2 parámetros:
 * parámetro1: posición donde va insertado el contenido.
 *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
 *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
 *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
 *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
 * parámetro2: el contenido que se inserta
 */

