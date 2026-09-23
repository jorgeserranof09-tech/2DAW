"use strict" 
{
    // Funcion de suma comun
    function sumar1(n1,n2) {
        return n1+n2;
    }

    // Funcion de suma dentro de una variable
    let sumar2 = (n1,n2) => {
        return n1+n2;
    };
    console.log(sumar1(10,20));

    // Funcion de suma dentro de una variable sin return
    let sumar3 = (n1,n2) => n1+n2;
    console.log(sumar2(10,20));

    



}