"use strict"
{

    // Indica si un NIF es válido o no.



    //Un ID es valido cuando tenga 9 caracteres, y 8 sean numeros y el ultimo una letra
    console.log(validarNif("97880588J"));

    function validarNif(NIF) {

        if (NIF.length != 9) {
            return false;
        }

        for (let i = 0; i < 8; i++) {
            let caracter = NIF[i];

            if (caracter < "0" || caracter > "9") {
                return false;
            }
        }

        let letra = NIF[8];

        if (letra < "A" || letra > "Z") {
            return false;
        }

        return true;
    }
}