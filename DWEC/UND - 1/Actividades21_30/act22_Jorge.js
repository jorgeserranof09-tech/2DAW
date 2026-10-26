"use strict"
{
    // Programa una función para contar el número de veces que se repite una palabra en un texto
    //largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    console.log(contarPalabraRepetida("hola mundo adios mundo", "mundo"));


    function contarPalabraRepetida(frase, palabra) {
        return frase.split(" ").filter(busca => busca === palabra);
    }


}