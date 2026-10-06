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

    let nombres = ["Rita","Manuel","Miguel","Ana","Vanessa"];
    let nombresSeleccionados = nombres.slice(1,3);
    console.log(nombresSeleccionados);

    nombresSeleccionados = nombres.slice(1);
    console.log(nombresSeleccionados);

    nombresSeleccionados = nombres.slice(-2);
    console.log(nombresSeleccionados);

    //filtrar
    const usuarios = [
        {name: "Juan", age: 34},
        {name: "Manoli", age: 41},
        {name: "JuanFran", age: 27}
    ];

    let usuariosMayores = usuarios.filter (function (elem) {
        return usuarios.age > 30;
    })
    console.log(usuariosMayores);

    let usuariosMayores2 = usuarios.filter ((elem) =>elem.age > 30);
    console.log(usuariosMayores2);


    //find
    let re = /A[a-z]*/i; //expresion regular
    let usuarioEncontrado = usuarios.find ((elem) => elem.name.match(re));
    console.log(usuarioEncontrado);
    usuarioEncontrado = usuarios.find ((usuario) => re.test(usuario.name));
    console.log(usuarioEncontrado);


    //some 
    let existe = usuarios.some((usuario) => usuario.age==27);
    console.log(existe);


    //findIndex
    let index = usuarios.findIndex ((usuario) => usuario.age < 30);
    console.log(index);

    //concat
    const array4 = ["a","b","c"];
    const array5 = ["d","e","f"];
    const array6 = array4.concat (array5);
    console.log(array6);
    const array7 = [...array4,...array5];
    console.log(array7);


    //reduce (function (acumulador,valorActual){}, 0) el 0 es el valor inical
    let sumaEdades = usuarios.reduce( function (acc,valor) {
        return acc+=valor.age;
    }, 0);
    console.log(sumaEdades);

    let sumaEdades2 = usuarios.reduce((acc,valor) =>
        acc+=valor.age
    ,0);
    console.log(sumaEdades2);
    

    const misNumeros = [1,2,3,4,5];


    let sumarNumeros = misNumeros.reduce((acc,valor) =>
        acc+valor,
    0);

    console.log(sumarNumeros);

    const arrayDearrayConNumeros = [[0,1],[2,3],[4,5]];
    let miarrayConNumeros = arrayDearrayConNumeros.reduce((acc,valor) => acc.concat(valor), []);

    console.log(miarrayConNumeros);


    //includes
    const motos = ["moto1","moto2","moto3"];
    let motos2 = motos.includes("moto4");
    console.log(motos2);
  




    let vector = [1,2,"A","F",-1,2.4];
    for (let i=0;i<vector.length;i++) {
        console.log(vector[i]);
    }

    vector.forEach (function (elem) {
        console.log(elem);
    });

    vector.forEach (function (elem,pos) {
        console.log(pos + ": " + elem);
    })


    let valores = vector.map(function (elem) {
        console.log(elem);
        return "x";
    });
    console.log(valores);
}