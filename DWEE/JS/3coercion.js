"use strict"
{
    let a = "25";
    let b = 100;
    console.log(a + b);

    let c = Number(a) + b;
    console.log(c);

    console.log(typeof a);
    console.log(typeof b);

    //Esto es la coercion, cuando js cambia por si solo el tipo de dato
    if (a < b) {
        console.log("Es menor que b");
    } else {
        console.log("No es menor que b")
    }

}