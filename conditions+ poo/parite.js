"use strict"

const imp = require("readline-sync");
let j = Number(imp.question("Indiquez un nombre entre 1 et 10"));
for (j=0; j<=10; j++){
    if (j % 2 ===0){
        console.log(j + " est un nombre pair");

    }
    else{
        console.log(j + " est un nombre impair");
    }  
}
