"use strict"
{
    //     . Programa una función que dada una fecha válida determine cuantos años han pasado hasta
    // el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) 
    function obtenerAnyosPasados(fecha) {
        let fecha2 = new Date(fecha);
        return new Date().getFullYear() - fecha2.getFullYear();
    }



    console.log(`La cantidad de anyos que han pasado son: ${obtenerAnyosPasados("1992,4,21")}`);
}