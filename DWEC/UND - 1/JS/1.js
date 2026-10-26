"use strict"
{
    let a = "no";
    var b = "adios";
    const c = "no";

    {
        let dentro = "Estoy un nivel mas dentro";
        console.log(dentro);
    }
    {
        let dentro2 = "Estoy al mismo nivel que dentro";
        console.log(dentro2);
    }




    function saludar() {
        console.log("Hola a todos");
    }

    saludar();

}