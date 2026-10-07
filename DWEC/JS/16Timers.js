"use strict"
{
    // temporizadores
    console.log("1");
    setTimeout(function () {
        console.log("timeout");
    }, 2000);
    console.log("2");

    setTimeout(f, 4000);
    //callback

    function f() {
        console.log("timeout f");
    }
    console.log("3");

}