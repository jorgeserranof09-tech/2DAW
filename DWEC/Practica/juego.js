"use strict";

let contador_jugador1 = 0;
let contador_jugador2 = 0;
let empate = 0;
let contador_rondas = 0;
let ganador_ronda;
let ganador;

//VALIDA EL NOMBRE
function validar_nombre(nombre) {
    return /^[A-Z]+[a-z]$/.test(nombre);
}


//VALIDA QUE LA ELECCION DEL JUGADOR SEA VALIDA
function validar_jugada(herramienta) {
    if (herramienta == 'R' || herramienta == "P" || herramienta == "S") {
        return false;
    }
    return true;
}

//VALIDA QUIEN GANA LA RONDA
function quien_gana_ronda(eleccion1, eleccion2) {
    let contador_jugador1 = 0;
    let contador_jugador2 = 0;
    let empate = 0;

    if (eleccion1 == 'R' && eleccion2 == 'S') {
        contador_jugador1 += 1;
    } else if (eleccion1 == 'P' && eleccion2 == 'R') {
        contador_jugador1 += 1;
    } else if (eleccion1 == 'S' && eleccion2 == 'P') {
        contador_jugador1 += 1;
    } else {
        empate += 1;
    }

    if (eleccion1 == 'S' && eleccion2 == 'R') {
        contador_jugador2 += 1;
    } else if (eleccion1 == 'R' && eleccion2 == 'P') {
        contador_jugador2 += 1;
    } else if (eleccion1 == 'P' && eleccion2 == 'S') {
        contador_jugador2 += 1;
    } else {
        empate += 1;
    }

    return [contador_jugador1, contador_jugador2, empate];
}


function calcular_ganador_o_empate(contador1, contador2, empate) {
    if (contador1 == 3) {
        return false;
    } else if (contador2 == 3) {
        return false;
    }
    return true;
}

while (calcular_ganador_o_empate(contador_jugador1, contador_jugador2, empate)) {

    //VERIFICACION DE LA INTRODUCCION DE DATOS
    let eleccion1 = prompt("Eleccion jugador1: (solo se permite 'R' 'P' 'S'): ");
    while (validar_jugada(eleccion1)) {
        eleccion1 = prompt("Porfavor: vuelve a introducir el parametro jugador1: (solo se permite 'R' 'P' 'S'): ");
    }
    let eleccion2 = prompt("Eleccion jugador2: (solo se permite 'R' 'P' 'S'): ");
    while (validar_jugada(eleccion2)) {
        eleccion2 = prompt("Porfavor: vuelve a introducir el parametro jugador2: (solo se permite 'R' 'P' 'S'): ");
    }

    //GUARDO LOS DATOS EN UN ARRAY PARA SABER QUIEN FUE EL GANADOR DE LA RONDA O SI HUBO EMPATE
    let resultado = quien_gana_ronda(eleccion1, eleccion2);
    if (resultado[0] > 0) {
        ganador_ronda = "Jugador 1";
        contador_jugador1 += 1;
    } else if (resultado[1] > 0) {
        ganador_ronda = "Jugador 2";
        contador_jugador2 += 1;
    } else {
        ganador_ronda = "EMPATE";
        empate += 1;
    }

contador_rondas += 1;

    alert(`\n Numero de jugadas realizadas hasta el momento: ${contador_rondas}
        \n Eleccion jugador 1 ${eleccion1}
        \n Eleccion jugador 2 ${eleccion2}
        \n Ganador de la ronda o empate ${ganador_ronda}
        \n Puntuaciones: Jugador 1: ${contador_jugador1} | Jugador 2: ${contador_jugador2}`
    );

}

if(contador_jugador1>contador_jugador2) {
    ganador = "Jugador 1";
} else if(contador_jugador2 > contador_jugador1) {
    ganador = "Jugador 2";
} else {
    ganador = "Empate";
}


alert(`\n Numero de total jugadas realizadas: ${contador_rondas}
        \n Rondas ganadas por el jugador 1: ${contador_jugador1}
        \n Rondas ganadas por el jugador 2: ${contador_jugador2}
        \n Rondas que terminaron en empate: ${empate}
        \n Ganador de la partida: ${ganador}`
);







