"use strict"
{
    const r1=/.a.o/;
    //DATO dato dAto daTO

    const r2 = new RegExp(".a.o","i");
    const r3 = new RegExp(/.a.o/,"i");


    console.log(r1.test("gato"));
    console.log(r1.test("Pato"));
    console.log(r1.test("Perro"));

    const r4 = new RegExp("^fútbol");

    console.log(r1.test("no me gusta el fútbol"));
    console.log(r1.test("fútbol sala"));
    console.log(r1.test("Sevilla\nfútbol club"));
    
}