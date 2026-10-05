"use strict"
{

    console.log(contarPalabraRepetida("hola mundo adios mundo","mundo"));


    function contarPalabraRepetida(frase,palabra) {
        return frase.split(" ").filter(busca => busca === palabra);
    }


}