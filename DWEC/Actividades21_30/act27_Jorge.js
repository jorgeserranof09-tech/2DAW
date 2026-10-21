"use strict"
{
    let vector = [2, -5, 7, 4, -3, 11, 0, 8, 9];



    //APARTADO A:  El número de elementos del vector.
    console.log(`Numero de vectores ${vector.length}`);



    //APARTADO B: Cuántos son pares y cuántos impares y cuáles son.

    let paresImpares = (vector) => {
        let pares = 0;
        let impares = 0;
        vector.forEach((numero) => {
            if (numero % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        });

        console.log(`Hay ${pares} pares y ${impares}`);
    }
    console.log(paresImpares(vector));

    
    //APARTADO C:  La suma de todos los números negativos.
    let sumaNegativos = 0;

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] < 0) {
            sumaNegativos += vector[i];
        }
    }
    console.log(`La suma de los numeros negativos da ${sumaNegativos}`);



    //APARTADO D: El producto de todos los números positivos.

    let productoPositivos = 1;


    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > 0) {
            productoPositivos *= vector[i];
        }
    }


    console.log(`Producto de positivos ${productoPositivos}`);




    //APARTADO E: Cuántos son primos y cuáles son.

    let primos = [];

    for (let i = 0; i < vector.length; i++) {
        let contadorDivisores = 0;
        for (let j = 1; j <= vector[i]; j++) {
            if (vector[i] % j == 0) {
                contadorDivisores++;
            }
        }
        if (contadorDivisores == 2) {
            primos.push(vector[i]);
        }
    }

    console.log(`Cantidad de primos ${primos.length}`);
    console.log(`Números primos: ${primos}`);


    //APARTADO F: Los números que ocupan las posiciones pares del vector.

    console.log("Ocupan posiciones pares:");
    for (let i = 0; i < vector.length; i++) {
        if (i % 2 === 0) {
            console.log(vector[i]);
        }
    }


    //APARTADO G: El número mayor.

    let mayor = vector[0];

    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > mayor) {
            mayor = vector[i];
        }
    }
    console.log(`El numero mayor es ${mayor}`);



    //APARTADO H: El número menor.
    let menor = vector[0];
    for (let elem of vector) {
        if (elem < menor) {
            menor = elem;
        }
    }

    for (let i = 1; i < vector.length; i++) {
        if (vector[i] < menor) {
            menor = vector[i];
        }
    }
    console.log(`El numero menor es: ${menor}`);


    //APARTADO I: La media de todos los números, los números que están 
    // por encima y los que están por debajo.
    let suma = 0;

    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
    }

    let media = suma / vector.length;
    let porEncima = [];
    let porDebajo = [];

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > media) {
            porEncima.push(vector[i]);
        } else if (vector[i] < media) {
            porDebajo.push(vector[i]);
        }
    }

    console.log(`Media: ${media}`);
    console.log(`Por encima ${porEncima}`);
    console.log(`Por debajo ${porDebajo}`);




    //APARTADO J: El vector ordenado de mayor a menos y viceversa
    let ascendente = [...vector];
    ascendente.sort((a, b) => a - b);

    let descendente = [...vector];
    descendente.sort((a, b) => b - a);

    console.log(`De menor a mayor ${ascendente}`);
    console.log(`De mayor a menor ${descendente}`);




    //APARTADO K: Buscar un valor introducido por el usuario e indicar 
    // si existe o no.

    let buscar = Number(prompt("Introduce un número para buscar: "));

    if (vector.includes(buscar)) {
        console.log("El número existe en el vector");
    } else {
        console.log("El número no existe en el vector");
    }
}