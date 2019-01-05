"use strict"
/*const n = require("readline-sync");
let nombre = Number(n.question("Indiquez un nombre entre 1 et 10"));
let i = 1;
while (i <= 10){
    console.log(nombre + " multiplié par " + i  + " = " + nombre * i);
    i++;
}*/
const nm = require("readline-sync");
let nombre = Number(nm.question("Indiquez un nombre entre 1 et 10"));
let i = 0;
for (i=0; i<=10; i++){
    console.log(nombre + " multiplié par " + i  + " = " + nombre * i);
}



