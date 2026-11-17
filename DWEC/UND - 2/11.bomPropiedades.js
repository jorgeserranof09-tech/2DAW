"use strict";

console.log(window.location);
console.log(window.location.href);
console.log(window.location.origin);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.pathname);
console.log(window.history);
// window.history.back();



//ATRAS
let btn = document.createElement("button");
btn.textContent = "Volver atras";
document.body.append(btn);

btn.onclick = function (e) {
    window.history.go(-1);
}


//SIGUIENTE
let btn_2 = document.createElement("button");
btn_2.textContent = "Siguiente";
document.body.append(btn_2);

btn_2.onclick = function (e) {
    window.history.go(1);
}


//REFRESCAR
let btn_3 = document.createElement("button");
btn_3.textContent = "Refrescar";
document.body.append(btn_3);

btn_3.onclick = function (e) {
    window.history.go();
}


console.log(window.navigator);
console.log(window.navigator.userAgent);
console.log(window.navigator.connection);

//MAS INFORMACION SOBRE HISTORY https://developer.mozilla.org/en-US/docs/Web/API/History_API

//MAS INFORMACION SOBRE NAVIGATOR https://developer.mozilla.org/es/docs/Web/API/Window/navigator


//BOTON GEOLOCALIZAR
let geolocalizacion = document.createElement("button");
geolocalizacion.textContent = "Geolocalizar";
document.body.append(geolocalizacion);

geolocalizacion.addEventListener("click", (event) => {
    //  window.navigator.geolocation.getCurrentPosition(exito,error,opciones);
    window.navigator.geolocation.getCurrentPosition(verDatosGeolocalizacion, error, opciones);
});

//MAS INFORMACION SOBRE GEOLOCALIZACION https://developer.mozilla.org/es/docs/Web/API/Navigator/geolocation
const opciones = {
    enableHighAccuracy: true,
    timeout: 11000, //TIEMPO MAXIMO DE ESPERA
    maximumAge: 0
}


function verDatosGeolocalizacion(pos) {
    let coordenada = pos.coords;
    console.log("Tu ubicacion actual es: ");
    console.log(coordenada.latitude);
    console.log(coordenada.longitude);
    console.log(coordenada.accuracy + " metros");
}

function error(e) {
    console.error(e.code + " - " + e.message);
}


let ventana;

let botonAbrirVentana = document.createElement("button");
botonAbrirVentana.textContent = "Abrir ventana";
document.body.append(botonAbrirVentana);
botonAbrirVentana.addEventListener("click", (event) => {
    ventana = window.open("https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden")
});


let botonCerrarVentana = document.createElement("button");
botonCerrarVentana.textContent = "Cerra ventana";
document.body.append(botonCerrarVentana);
botonCerrarVentana.addEventListener("click", (event) => {
    ventana.close();
});


let botonImprimirVentana = document.createElement("button");
botonImprimirVentana.textContent = "Imprimir ventana";
document.body.append(botonImprimirVentana);
botonImprimirVentana.addEventListener("click", (event) => {

});

document.body.append(botonAbrirVentana,botonCerrarVentana,botonImprimirVentana);
