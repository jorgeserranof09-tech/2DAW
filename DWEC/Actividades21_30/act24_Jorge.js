"use strict"
{
  

    let borrarCaracteres = (texto, patron) => {
        return texto.replace(new RegExp(patron, "g"), "");
    }

   console.log(miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
   

}