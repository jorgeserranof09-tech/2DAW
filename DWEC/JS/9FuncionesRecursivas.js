"use strict"
{
    // function cuentaAtras(n) {
    // // caso base 
    //     if (n === o) {
    //         console.log(n);
    //     } else {
    //         console.log(n);
    //         cuentaAtras(n - 1);
    //     }
    //     cuentaAtras(10);
    // }

    // // caso recursivo
    // let cuentaAtras2 = function (n) {
    //     if (n === 0) {
    //         console.log(n);
    //     } else {
    //         console.log(n);
    //         cuentaAtras2(n - 1);
    //     }
    // }

    // // caso con flechita
    // let cuentaAtras3 = (n) => {
    //     if (n === 0) {
    //         console.log(n);
    //     } else {
    //         console.log(n);
    //         cuentaAtras3(n - 1);
    //     }
    // }
    // cuentaAtras3(10);

    // let sumaAtras = (n) => {
    //     if (n === 0) {
    //         return 0;
    //     } else {
    //         return n + sumaAtras(n-1);
    //     }
    // }
    // let s = sumaAtras(10);
    // console.log(`La suma atras es: " + ${s}`);



    // let parOimparAtras = (n) => {
    //     if (n === 0) {
    //         console.log("Es cero");
    //     } else {
    //         if(n%2==0) {
    //             console.log("Par " + n);
    //             parOimparAtras(n-1);
    //         } else {
    //             console.log("Impar " + n);
    //             parOimparAtras(n-1);
    //         }
    //     }
    // }
    
    
     let parOimparAtras = (n) => {
         if (n === 0) {
            return "esPar"
         } else if(n===1) {
             return "IMPAR"
             } else {
                 return parOimparAtras(n-2);
    }
         }
         let re = parOimparAtras(10);
         console.log(re);
     }



