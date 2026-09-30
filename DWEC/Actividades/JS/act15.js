"use strict"
{

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