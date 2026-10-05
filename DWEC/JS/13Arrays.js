"use strict"
{

    let miarray = [];

    miarray[0] = 10;
    miarray[1] = 20;
    miarray[2] = "Pepe";
    console.log(miarray);



    //numero de elementos
    console.log(`Mi array tiene ${miarray.length} elementos`);


    let array2 = ["gamusiso", "globo", "gato"];


    //clonado de un array
    let array3 = array2 // por referencia, si cambio algo en el 2, cambien en el 3;
    array3 = [...array2] //por copia

    console.log(array3);


    //Arrays bidimenasionales
    let arrayBidimensional = new Array();
    arrayBidimensional[0] = [1, 2, 3];
    arrayBidimensional[1] = [4, 5, 6];
    console.table(arrayBidimensional);


    let numFilas = 2;
    let numColumnass = 3;
    let arrayBidimensional2 = new Array(numFilas);

    for (let i = 0; i < numFilas; i++) {
        arrayBidimensional2[i] = new Array(numColumnass);
    }

    console.table(arrayBidimensional2);
    arrayBidimensional2[0][0] = null;
    console.table(arrayBidimensional2);

    let arrayBi3 = Array.from(Array(numFilas), () => new Array(numColumnass));

    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumnass; j++) {
            arrayBi3[i][j] = 0;
        }
    }

    console.table(arrayBi3); 


    let arrayBi4 = new Array(numFilas).fill().map(
        () => new Array(numColumnass));
    console.table((arrayBi4));






}