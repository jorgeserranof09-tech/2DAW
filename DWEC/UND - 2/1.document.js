"use strict";

    console.log(window);
    console.log(window.document);
    console.log(window.document.documentElement);
    console.log(document.head);
    console.log(document.body);
    console.log(document.doctype);
    console.log(document.characterSet);
    console.log(document.title);
    console.log(window.document.documentElement.lang);





    //NODE
    // let ac = new HTMLCollection ( new HTMLElement(),)

    console.log(document.links);
    let myHTMLCo = document.links;
    for(let elem of myHTMLCo) {
        console.log("-");
    }


