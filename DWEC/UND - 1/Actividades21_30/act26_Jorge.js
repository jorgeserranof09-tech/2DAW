"use strict"

{
    //Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
    //“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.

    //CON FUNCIONES DE CADENA
    let comprobarCadena = (cadena) => {
        return (cadena.startsWith("m") || cadena.startsWith("d"))
            && (cadena.endsWith("a") || cadena.endsWith("o"));
    }

    console.log(comprobarCadena("mesa")); 




    //CON EXPRESION REGULAR
    let comprobarCadena2 = (cadena) => {
        return /^[md].*[ao]$/.test(cadena);
    }

    console.log(comprobarCadena2("mesa"));

}