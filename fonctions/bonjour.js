"use strict"
const sh = require("readline-sync")
let prenom = String(sh.question("Quel est votre prénom?"));
const sb = require("readline-sync");
let nom = String(sb.question("Quel est votre nom?"));
function direBonjour(prenom,nom){
    let message = "Bonjour " + prenom +" " + nom + " !";
    return message;
}
console.log(direBonjour(prenom, nom));