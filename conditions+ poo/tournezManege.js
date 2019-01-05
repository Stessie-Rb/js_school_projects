"use strict"

const nt = require("readline-sync");
let nbtour = Number(nt.question("Pour combien de tours partons-nous?"));
let i = 0;
while (i <= nbtour){
    console.log("ceci est le tour n° " + i);
    i++;
}

