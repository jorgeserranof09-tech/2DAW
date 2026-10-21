"use strict";

//  Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
// este formato dd/mm/aaa.

function devolver_edad(fechaNacimiento) {

    let [diaNac, mesNac, anyoNac] = fechaNacimiento.split("/").map(Number);

    let hoy = new Date();
    let anyoActual = hoy.getFullYear();

    let mesActual = hoy.getMonth() + 1;
    let diaActual = hoy.getDate();


    let edad = anyoActual - anyoNac;


    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }

    return edad;
}