"use strict"
{
    
    // try {
    //     const v=[1,2,3];
    //     v[0] = 1;
    //     v[7] = 2;
    //     v[-1] = 2;
    //     v=12;
    // } catch(e) {
    //     console.log("Error numero: " + e)
    // } finally{
    //     console.log("Programa try catch ejecutado correctamente");
    // }

    try{
        let numero = prompt("Dame un numero del 1 al 10");
        if(isNaN(numero)) {
            throw new Error("El argumento especificado no es un numero");
        }
    } catch(error) {
        console.error(error);
    }

}