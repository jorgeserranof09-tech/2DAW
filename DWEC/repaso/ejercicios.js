"use strict";

console.log("Ejercicio 1");

let palabra_larga = (frase) => {
    let larga = "";
    let frase_saneada = frase.toLowerCase().trim();
    frase_saneada = frase_saneada.split(" ");
    for (let element of frase_saneada) {
        if (element.length > larga.length) {
            larga = element;
        }
    }
    return larga;
}

console.log(palabra_larga("Hola buenas tardes"));


console.log("Ejercicio 2");
let filtrar_y_transformar_notas = (notas) => {
    let notas_aprobadas = notas.filter(nota => nota > 5).map(nota => Math.round(nota));
    return notas_aprobadas;
}
console.log(filtrar_y_transformar_notas([2,4,7.5,1,9.1,4,0.8,2.2,]));


console.log("Ejercicio 3");
function ordenador_precio_nombre(lista) {
    return lista.sort((a,b) => a-b);
}


console.log("Ejercicio 4");
let valida_contrasenya = (contra) => {
    return (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])^\S+$/).test(contra);
}

console.log(valida_contrasenya("Clave123"));
console.log(valida_contrasenya("clave123"));
console.log(valida_contrasenya("Clave 123"));

console.log("Ejercicio 5");
function extraer_datos(cadena) {
    return /^CURSO-(DAW|ASIR|DAM)-\d{4}$/.test(cadena);
}
console.log(extraer_datos("CURSO-DAW-2623"));
console.log(extraer_datos("XCURSO-DAW-26"));
console.log(extraer_datos("CURSO-DAW-26433"));
