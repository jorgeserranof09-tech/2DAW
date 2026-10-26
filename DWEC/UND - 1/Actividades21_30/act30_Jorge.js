"use strict"
{
    //Programa una función para saber la edad de una persona, 
    //sabiendo la fecha de nacimiento.
    
    let saberEdad = (fechaNacimiento) => {
        let fecha = new Date(fechaNacimiento);       
        return new Date().getFullYear()-fecha.getFullYear();
    }




    console.log(saberEdad("1997/2/20"));
}

