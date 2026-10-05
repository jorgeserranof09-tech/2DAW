"use strict" 
{
    
    // Programa una función que dada una String te devuelva un Array de textos separados por
    // cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']


    let separarPorarray = (cadena,caracter) => {
        if(typeof cadena === "string" && typeof caracter === "string") {
            let array = cadena.split(caracter);

            return array;
        } else {
            return "Error: Alguno de los datos introducidos no es de tipo string";
        }
       
    }


    console.log(separarPorarray("Hola a todo el mundo"," "));


}